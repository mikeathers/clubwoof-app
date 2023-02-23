import type {CognitoUser} from '@aws-amplify/auth'

export interface AuthState {
  isIdle: boolean
  isLoading: boolean
  error: Error | undefined
  isAuthenticated: boolean
  isAuthenticating: boolean
  user: User | undefined
  userConfig: CognitoUser | undefined
}

export type AuthReducerAction =
  | {type: 'IS_LOGGING_IN'}
  | {type: 'LOGIN_SUCCESS'; user: User; userConfig: CognitoUser}
  | {type: 'LOGIN_FAILURE'; error: Error | undefined}
  | {type: 'LOGOUT_SUCCESS'}

export const initialState: AuthState = {
  isIdle: true,
  isLoading: false,
  error: undefined,
  isAuthenticated: false,
  isAuthenticating: false,
  user: undefined,
  userConfig: undefined,
}

export const authReducer = (state: AuthState, action: AuthReducerAction): AuthState => {
  console.log(action.type)
  switch (action.type) {
    case 'IS_LOGGING_IN': {
      return {
        ...initialState,
        isIdle: false,
        isLoading: true,
        error: undefined,
        isAuthenticated: true,
        isAuthenticating: false,
      }
    }
    case 'LOGIN_SUCCESS': {
      return {
        isIdle: true,
        isLoading: false,
        error: undefined,
        isAuthenticated: true,
        isAuthenticating: false,
        user: action.user,
        userConfig: action.userConfig,
      }
    }
    case 'LOGIN_FAILURE': {
      return {
        ...initialState,
        isLoading: false,
        error: action.error,
        isAuthenticating: false,
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${JSON.stringify(action)}`)
    }
  }
}
