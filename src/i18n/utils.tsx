import i18n from 'i18next'
import {useCallback} from 'react'
import {I18nManager, NativeModules} from 'react-native'
import SyncStorage from 'sync-storage'

type Language = 'en' | 'ar'

const LOCAL = 'local'

export const getLanguage = () => SyncStorage.get(LOCAL)

export const changeLanguage = (lang: Language) => {
  i18n.changeLanguage(lang)
  if (lang === 'ar') {
    I18nManager.forceRTL(true)
  } else {
    I18nManager.forceRTL(false)
  }
  NativeModules.DevSettings.reload()
}

export const useSelectedLanguage = async () => {
  const language = await SyncStorage.get(LOCAL)
  const setLanguage = useCallback(
    (lang: Language) => {
      SyncStorage.set(LOCAL, lang)
      if (lang !== undefined) changeLanguage(lang as Language)
    },
    [SyncStorage.set],
  )

  return {language: language as Language, setLanguage}
}
