import type {CognitoUser} from '@aws-amplify/auth'
import {Auth} from '@aws-amplify/auth'
import {create} from 'zustand'

import {TEMP_LOCAL_STORAGE_PWD_KEY} from '@/constants'
import {removeItem} from '@/utils'

export type TokenType = {
  access: string | undefined
  refresh: string | undefined
}

interface AuthState {
  isAuthenticated: boolean
  isAuthenticating: boolean
  user: FormattedUser | undefined
  userConfig: CognitoUser | undefined
  token: TokenType | undefined
  signIn: (email: string, password: string, isPasswordChange?: boolean) => void
  signOut: () => void
  refreshSession: () => void
}

export const useAuth = create<AuthState>()((set, get) => ({
  isAuthenticated: false,
  isAuthenticating: false,
  user: undefined,
  userConfig: undefined,
  token: undefined,
  signIn: async (email: string, password: string, isPasswordChange?: boolean) => {
    console.log('here')
    const {user, userConfig, token} = await logUserIn({email, password, isPasswordChange})
    set({user, userConfig, token, isAuthenticated: true})
  },
  signOut: () => {
    set({
      isAuthenticated: false,
      isAuthenticating: false,
      user: undefined,
      userConfig: undefined,
      token: undefined,
    })
  },
  refreshSession: () => {
    refreshSession()
  },
}))

interface LoginProps {
  email: string
  password: string
  isPasswordChange?: boolean
}

interface UserAttributes {
  given_name?: string

  family_name?: string
}

interface User extends CognitoUser {
  challengeName?: string
  challengeParam: {
    requiredAttributes: string
  }
}

interface FormattedUser {
  email: string
  familyName: string
  givenName: string
  numberOfDogs: string | undefined
  picture: string | undefined
  phoneNumber: string | undefined
  address: string | undefined
  isAdmin: boolean | undefined
}

export type CognitoUserAttributes = {
  email: string
  family_name: string
  given_name: string
  picture?: string
  'custom:numberOfDogs'?: string
  phone_number?: string
  address?: string
  'custom:isAdmin'?: boolean
}

export const logUserIn = async (
  props: LoginProps,
): Promise<{user: FormattedUser; userConfig: CognitoUser; token: TokenType}> => {
  removeItem(TEMP_LOCAL_STORAGE_PWD_KEY)

  const {email, password, isPasswordChange} = props
  let accessToken
  let refreshToken
  const user = (await Auth.signIn(email, password)) as User
  console.log('here')
  const cognitoUser = (await Auth.currentUserInfo()) as CognitoUser & {
    attributes: CognitoUserAttributes
  }
  const {attributes} = cognitoUser

  const formattedUser = {
    email: attributes.email,
    familyName: attributes.family_name,
    givenName: attributes.given_name,
    numberOfDogs: attributes['custom:numberOfDogs'],
    picture: attributes.picture,
    phoneNumber: attributes.phone_number,
    address: attributes.address,
    isAdmin: attributes['custom:isAdmin'],
  }

  await Auth.currentSession().then((res) => {
    accessToken = res.getAccessToken()
    refreshToken = res.getRefreshToken()
    const jwt = accessToken.getJwtToken()
    console.log('session: ', res)
    console.log({jwt, refreshToken, accessToken})
  })

  const token = {access: accessToken, refresh: refreshToken}

  if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
    const {requiredAttributes} = user.challengeParam
    const userAttributes: UserAttributes = {}

    if (requiredAttributes.includes('given_name')) {
      userAttributes.given_name = 'Test'
    }

    if (requiredAttributes.includes('family_name')) {
      userAttributes.family_name = 'User'
    }

    if (isPasswordChange) {
      await Auth.completeNewPassword(user, password, userAttributes)
    }
  }

  return {user: formattedUser, userConfig: cognitoUser, token}
}

const refreshSession = async () => {
  try {
    const cognitoUser = await Auth.currentAuthenticatedUser()
    cognitoUser.refreshSession()
  } catch (e) {
    throw e
  }
}
