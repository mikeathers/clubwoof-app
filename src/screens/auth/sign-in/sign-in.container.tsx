import React from 'react'
import {useTranslation} from 'react-i18next'

import {useAuth} from '@/auth/auth.hook'
import {useSafeAsync} from '@/hooks'

import {SignInComponent} from './sign-in.component'

export const SignIn: React.FC = () => {
  const {t} = useTranslation()
  const {run, error, isLoading} = useSafeAsync()
  const {signIn} = useAuth()
  const i18n = t('screens.auth.signIn')

  const completeRegistration = async (data: FormDetails) => {
    const {emailAddress, password} = data
    if (emailAddress && password) {
      await signIn(emailAddress.trim().toLowerCase(), password)
    }
  }

  const handleSubmitForm = async (data: FormDetails): Promise<void> => {
    await run(completeRegistration(data))
  }

  return (
    <SignInComponent
      i18n={i18n}
      handleSubmitForm={handleSubmitForm}
      error={error}
      isLoading={isLoading}
    />
  )
}
