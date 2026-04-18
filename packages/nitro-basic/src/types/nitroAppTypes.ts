export type NitroAppBasicConfig = {
  api?: {
    cacheStorageKey?: string
    cacheStepAgeClearOld?: number
  }
  cookie?: {
    age?: number
    sameSite?: 'strict' | 'lax'
  }
}
