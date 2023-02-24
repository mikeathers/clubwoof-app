import {Auth} from '@aws-amplify/auth'
import React from 'react'
import {useTranslation} from 'react-i18next'

import {TEMP_LOCAL_STORAGE_PWD_KEY} from '@/constants'
import {useSafeAsync} from '@/hooks'
import {setItem} from '@/utils'

import {RegisterComponent} from './register.component'
import {RegistrationCompleteComponent} from './registration-complete.component'

export const Register: React.FC = () => {
  const {t} = useTranslation()
  const {run, error, isLoading, isSuccess} = useSafeAsync()
  const i18n = t('screens.auth.register')

  const completeRegistration = async (data: FormDetails) => {
    const {emailAddress, password, confirmPassword} = data
    if (emailAddress && password && confirmPassword) {
      await Auth.signUp({
        username: emailAddress.trim().toLowerCase(),
        password,
      })

      setItem(TEMP_LOCAL_STORAGE_PWD_KEY, password)
    }
  }

  const handleSubmitForm = async (data: FormDetails): Promise<void> => {
    await run(completeRegistration(data))
  }

  if (isSuccess) {
    return <RegistrationCompleteComponent />
  }

  return (
    <RegisterComponent
      i18n={i18n}
      handleSubmitForm={handleSubmitForm}
      error={error}
      isLoading={isLoading}
    />
  )
}
