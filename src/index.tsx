import {Auth} from '@aws-amplify/auth'
import config from '@config'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React from 'react'

import {AuthProvider} from '@/auth'
import {RootNavigator} from '@/navigation'

const queryClient = new QueryClient()

Auth.configure({
  mandatorySignIn: false,
  region: config.amplify.REGION,
  userPoolId: config.amplify.USER_POOL_ID,
  identityPoolId: config.amplify.IDENTITY_POOL_ID,
  userPoolWebClientId: config.amplify.USER_POOL_WEB_CLIENT_ID,
})

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
