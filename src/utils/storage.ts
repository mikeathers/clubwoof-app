import * as SecureStore from 'expo-secure-store'
import {Linking} from 'react-native'

import type {TokenType} from '@/auth/auth.hook'

export async function setItem<T>(key: string, value?: T) {
  await SecureStore.setItemAsync(key, JSON.stringify(value))
}

export async function removeItem<T>(key: string) {
  await SecureStore.deleteItemAsync(key)
}

export async function getItem<T>(key: string) {
  const item = await SecureStore.getItemAsync(key)
  if (item) return JSON.parse(item)
}

export function openLinkInBrowser(url: string) {
  Linking.canOpenURL(url).then((canOpen) => canOpen && Linking.openURL(url))
}

const TOKEN = 'TOKEN'
export const getToken = async () => getItem<TokenType>(TOKEN)
export const removeToken = async () => removeItem(TOKEN)
export const setToken = async (value: TokenType) => setItem<TokenType>(TOKEN, value)
