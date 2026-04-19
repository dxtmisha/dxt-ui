/**
 * Configuration for basic Nitro initializations.
 *
 * Конфигурация для базовых инициализаций Nitro.
 */
export type NitroAppBasicConfig = {
  /** Api cache configuration / Конфигурация кэша API */
  api?: {
    /** Storage key prefix / Префикс ключа хранилища */
    cacheStorageKey?: string
    /** Cache cleanup threshold / Порог очистки кэша */
    cacheStepAgeClearOld?: number
  }
  /** Cookie configuration / Конфигурация cookie */
  cookie?: {
    /** Cookie age in seconds / Срок жизни cookie в секундах */
    age?: number
    /** SameSite attribute / Атрибут SameSite */
    sameSite?: 'strict' | 'lax'
  }
}
