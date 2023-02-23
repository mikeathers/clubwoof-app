import {locale} from 'expo-localization'
import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import {I18nManager} from 'react-native'

import {getLanguage} from '@/i18n/utils'

import {resources} from './resources'

export * from './utils'

i18n.use(initReactI18next).init({
  resources,
  lng: getLanguage() || locale,
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  returnObjects: true,
  interpolation: {
    escapeValue: false,
  },
})

// Is it a RTL language?
export const isRTL: boolean = i18n.dir() === 'rtl'

I18nManager.allowRTL(isRTL)
I18nManager.forceRTL(isRTL)

export default i18n

// src/localization/i18n.ts
// import i18n from 'i18next'
// import {initReactI18next} from 'react-i18next'
// import translationEN from './translations/en.json'
//
// export const resources = {
//   en: {
//     translation: translationEN,
//   },
// }
//
// i18n.use(initReactI18next).init({
//   resources,
//   lng: 'en',
//   fallbackLng: 'en',
//   returnObjects: true,
//   interpolation: {
//     escapeValue: false,
//   },
// })
