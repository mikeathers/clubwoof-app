import i18n from 'i18next'
import {useCallback} from 'react'
import {I18nManager, NativeModules} from 'react-native'
import {useMMKVString} from 'react-native-mmkv'

import {storage} from '@/utils'

type Language = 'en' | 'ar'

const LOCAL = 'local'

export const getLanguage = () => storage.getString(LOCAL)

export const changeLanguage = (lang: Language) => {
  i18n.changeLanguage(lang)
  if (lang === 'ar') {
    I18nManager.forceRTL(true)
  } else {
    I18nManager.forceRTL(false)
  }
  NativeModules.DevSettings.reload()
}

export const useSelectedLanguage = () => {
  const [language, setLang] = useMMKVString(LOCAL)

  const setLanguage = useCallback(
    (lang: Language) => {
      setLang(lang)
      if (lang !== undefined) changeLanguage(lang as Language)
    },
    [setLang],
  )

  return {language: language as Language, setLanguage}
}
