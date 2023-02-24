import type {FormikErrors} from 'formik'
import type {FieldValues} from 'react-hook-form'

declare global {
  type User = {
    email: string
    familyName: string
    givenName: string
    numberOfDogs?: string
    picture?: string
    phoneNumber?: string
    address?: string
    isAdmin?: boolean
  }

  type CognitoError = {
    name: string
    code: string
    message: string
  }

  interface FormDetails extends FieldValues {
    email?: string
    password?: string
    confirmPassword?: string
  }

  type FormikError =
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined

  type Navigate = {
    navigate: (value: string) => void
  }

  /**** Internationalisation *****/

  type i18nRegisterScreen = {
    heading: string
    subHeading: string
    submitButton: string
    signIn: string
    signInAction: string
    goHome: string
    goHomeAction: string
    terribleError: string
    registrationSuccessful: string
    checkYourEmail: string
    validation: {
      email: string
      emailFormat: string
      password: string
      confirmPassword: string
      passwordsDoNotMatch: string
      passwordFormat: string
      passwordTooShort: string
      passwordTooLong: string
    }
    inputs: {
      email: {label: string; placeholder: string}
      password: {label: string; placeholder: string}
      confirmPassword: {label: string; placeholder: string}
    }
  }

  type i18nCompleteRegistrationScreen = {
    thanksForRegistering: string
    fillInYourDetails: string
    weWillBeInTouch: string
  }

  type i18nSignInScreen = {
    heading: string
    subHeading: string
    submitButton: string
    forgotYourPassword: string
    forgotYourPasswordAction: string
    signUp: string
    signUpAction: string
    inputs: {
      email: {label: string; placeholder: string}
      password: {label: string; placeholder: string}
    }
    validation: {
      email: string
      emailFormat: string
      password: string
    }
  }

  type i18nResendRegistrationLinkScreen = {
    heading: string
    subHeading: string
    submitButton: string
    successMessage: string
    inputs: {
      email: string
    }
    validation: {
      email: string
      emailFormat: string
    }
  }

  type i18nForgotPasswordScreen = {
    heading: string
    subHeading: string
    submitButton: string
    successMessage: string
    login: string
    loginAction: string
    inputs: {
      email: string
    }
    validation: {
      email: string
      emailFormat: string
    }
  }

  type i18nCompleteForgotPasswordScreen = {
    heading: string
    subHeading: string
    submitButton: string
    inputs: {
      password: string
      confirmPassword: string
    }
    validation: {
      password: string
      confirmPassword: string
      passwordsDoNotMatch: string
      passwordFormat: string
      passwordTooShort: string
      passwordTooLong: string
    }
  }

  type i18nErrorScreen = {
    heading: string
    subHeading: string
    goHome: string
  }
}

export {}
