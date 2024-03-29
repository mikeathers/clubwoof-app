import type {CognitoUser} from '@aws-amplify/auth'
import {Auth} from '@aws-amplify/auth'
import type {Dispatch} from 'react'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'

import {getItem, setItem} from '@/utils'

import type {AuthReducerAction, AuthState} from './auth-reducer'
import {authReducer, initialState} from './auth-reducer'

type AuthContextValue = {
  state: AuthState
  dispatch: Dispatch<AuthReducerAction>
  addUserToState: () => Promise<void>
}

interface AuthProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const AuthContext = createContext<AuthContextValue | null>(null)

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

const useAuthOld = () => {
  const context = useContext(AuthContext)

  console.log(context?.state)

  if (!context) throw new Error('useAuth must be wrapped in an AuthProvider')

  const {state, dispatch} = context

  const getCurrentUser = useCallback(async () => {
    const cognitoUser = (await Auth.currentUserInfo()) as CognitoUser & {
      attributes: CognitoUserAttributes
    }

    console.log('user is', cognitoUser)

    return cognitoUser
  }, [])

  const addUserToState = useCallback(async () => {
    try {
      const cognitoUser = await getCurrentUser()

      const {attributes} = cognitoUser

      dispatch({
        type: 'LOGIN_SUCCESS',
        userConfig: cognitoUser,
        user: {
          email: attributes.email,
          familyName: attributes.family_name,
          givenName: attributes.given_name,
          numberOfDogs: attributes['custom:numberOfDogs'],
          picture: attributes.picture,
          phoneNumber: attributes.phone_number,
          address: attributes.address,
          isAdmin: attributes['custom:isAdmin'],
        },
      })
    } catch (e) {
      if (e instanceof Error) {
        dispatch({type: 'LOGIN_FAILURE', error: e})
      } else if (JSON.stringify(e).toLowerCase().includes('no current user')) {
        dispatch({type: 'LOGIN_FAILURE', error: undefined})
      } else {
        dispatch({type: 'LOGIN_FAILURE', error: new Error('Something went very wrong.')})
      }
    }
  }, [dispatch, getCurrentUser])

  return {
    state,
    dispatch,
    addUserToState,
  }
}

//
// const setStateInLocalStorage = (state: AuthState) => {
//   setItem<AuthState>('authState', state)
// }

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [savedInitialState, setSavedInitialState] = useState<AuthState>(initialState)

  useEffect(() => {
    const getInitialState = async () => {
      const state = await getItem<AuthState>('initialState')

      if (state && state !== null) {
        setSavedInitialState(state)
      }
    }

    getInitialState()
  }, [])

  const [state, dispatch] = useReducer(authReducer, savedInitialState)

  useEffect(() => {
    setItem<AuthState>('authState', state)

    return () => {
      setItem<AuthState>('authState', state)
    }
  }, [state])

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  ) as AuthContextValue

  useEffect(() => {
    console.log(value)
  }, [value])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export {AuthProvider, useAuthOld}
