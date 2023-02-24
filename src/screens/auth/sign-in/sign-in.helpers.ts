import {object, string} from 'yup'

export const formSchema = (i18n: i18nSignInScreen) =>
  object({
    emailAddress: string()
      .email(i18n.validation.emailFormat)
      .required(i18n.validation.email),
    password: string().required(i18n.validation.password),
  })
