import {object, ref, string} from 'yup'

export const passwordValidation = (value: string | undefined) => {
  if (!value) return false
  const hasUpperCase = /[A-Z]/.test(value)
  const hasLowerCase = /[a-z]/.test(value)
  const hasNumber = /[0-9]/.test(value)
  const hasSymbol = /[!@#$%&*]/.test(value)
  let validConditions = 0
  const numberOfMustBeValidConditions = 4
  const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbol]
  conditions.forEach((condition) => (condition ? (validConditions += 1) : null))
  return validConditions >= numberOfMustBeValidConditions
}

export const formSchema = (i18n: i18nRegisterScreen) =>
  object({
    emailAddress: string()
      .email(i18n.validation.emailFormat)
      .required(i18n.validation.email),
    password: string()
      .required(i18n.validation.password)
      .min(6, i18n.validation.passwordTooShort)
      .max(12, i18n.validation.passwordTooLong)
      .test('isValidPassword', i18n.validation.passwordFormat, (value) =>
        passwordValidation(value),
      ),
    confirmPassword: string()
      .required(i18n.validation.confirmPassword)
      .min(6, i18n.validation.passwordTooShort)
      .max(12, i18n.validation.passwordTooLong)
      .oneOf([ref('password')], i18n.validation.passwordsDoNotMatch),
  })
