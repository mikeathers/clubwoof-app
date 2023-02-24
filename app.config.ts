import type {ConfigType} from '@config'
import type {ConfigContext, ExpoConfig} from '@expo/config'

import {getConfig} from './config/config.js'
//@ts-ignore
const appEnv = process.env.APP_ENV ?? 'development'

const Config = getConfig(appEnv) as ConfigType

export default ({config}: ConfigContext): ExpoConfig => ({
  ...config,
  name: Config.name,
  description: `${Config.name} Mobile App`,
  slug: 'clubwoof-app',
  version: Config.version.toString(),
  orientation: 'portrait',
  icon: Config.icon,
  userInterfaceStyle: 'light',
  owner: 'mikeathers1',
  splash: {
    image: './assets/splashscreen.png',
    resizeMode: 'cover',
    backgroundColor: '#F75469',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: Config.scheme,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: Config.foregroundImage,
      backgroundColor: '#FFFFFF',
    },
    package: Config.scheme,
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [
    [
      '@bacons/link-assets',
      [
        './assets/fonts/Inter.ttf',
        './assets/fonts/Neucha-Regular.ttf',
        './assets/fonts/helvetica.ttf',
        './assets/fonts/helvetica-bold.ttf',
      ],
    ],
  ],
  extra: {
    APP_ENV: appEnv,
    eas: {
      projectId: '78da9f04-98b3-49f2-89c8-3a5e69cbb9a2',
    },
  },
})
