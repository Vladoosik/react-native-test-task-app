import { MMKV } from 'react-native-mmkv'
import { StateStorage } from 'zustand/middleware'

const storage = new MMKV()

export const mmkvStorage: StateStorage = {
  getItem: (name: string): string | null => {
    const value = storage.getString(name)
    return value ?? null
  },
  setItem: (name: string, value: string): void => {
    const stringValue = typeof value === 'string' ? value : JSON.stringify(value)
    storage.set(name, stringValue)
  },
  removeItem: (name: string): void => {
    storage.delete(name)
  },
}
