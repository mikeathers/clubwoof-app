import {useMMKVBoolean} from 'react-native-mmkv'

const NEEDS_ONBOARDING = 'NEEDS_ONBOARDING'

export const useOnboarding = (): {
  needsOnboarding: boolean
  setNeedsOnboarding: (
    value: boolean | ((current: boolean | undefined) => boolean | undefined) | undefined,
  ) => void
} => {
  const [needsOnboarding, setNeedsOnboarding] = useMMKVBoolean(NEEDS_ONBOARDING)
  if (needsOnboarding === undefined) {
    return {needsOnboarding: true, setNeedsOnboarding}
  }
  return {needsOnboarding, setNeedsOnboarding}
}
