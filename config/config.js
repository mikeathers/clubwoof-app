const packageJSON = require('../package.json')

// default values
const SCHEME = 'com.clubwoof'
const APP_NAME = 'Clubwoof'

const development = {
  APP_ENV: 'development',
  name: APP_NAME,
  scheme: `${SCHEME}.development`,
  icon: './assets/icon.development.png',
  foregroundImage: './assets/icon.development.png',
  API_URL: 'https://dummyjson.com/',
  version: packageJSON.version,
  amplify: {
    REGION: 'eu-west-2',
    USER_POOL_ID: 'eu-west-2_O24LMxuTt',
    IDENTITY_POOL_ID: 'eu-west-2:df7d3984-9e32-4b5d-af0d-9bb71eeb51ac',
    USER_POOL_WEB_CLIENT_ID: '3iabrekro7k51tvdf22qek1va7',
  },
}

const staging = {
  APP_ENV: 'staging',
  name: APP_NAME,
  scheme: `${SCHEME}.staging`,
  icon: './assets/icon.staging.png',
  foregroundImage: './assets/icon.staging.png',
  API_URL: 'https://dummyjson.com/',
  version: packageJSON.version,
  amplify: {
    REGION: 'eu-west-2',
    USER_POOL_ID: 'eu-west-2_O24LMxuTt',
    IDENTITY_POOL_ID: 'eu-west-2:df7d3984-9e32-4b5d-af0d-9bb71eeb51ac',
    USER_POOL_WEB_CLIENT_ID: '3iabrekro7k51tvdf22qek1va7',
  },
}

const production = {
  APP_ENV: 'production',
  name: APP_NAME,
  scheme: `${SCHEME}.app`,
  icon: './assets/icon.png',
  foregroundImage: './assets/icon.png',
  API_URL: 'https://dummyjson.com/',
  version: packageJSON.version,
  amplify: {
    REGION: 'eu-west-2',
    USER_POOL_ID: 'eu-west-2_O24LMxuTt',
    IDENTITY_POOL_ID: 'eu-west-2:df7d3984-9e32-4b5d-af0d-9bb71eeb51ac',
    USER_POOL_WEB_CLIENT_ID: '3iabrekro7k51tvdf22qek1va7',
  },
}

const configs = {development, staging, production}

function getConfig(appEnv) {
  return configs[appEnv]
}

module.exports = {getConfig}
