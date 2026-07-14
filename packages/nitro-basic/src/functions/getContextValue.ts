import { appContext } from './initContext'

/**
 * Gets a value from the application context by key name.
 *
 * Получает значение из контекста приложения по имени ключа.
 * @param key Key name / Имя ключа
 * @returns context value or undefined / значение контекста или undefined
 */
export function getContextValue<T = any>(key: string): T | undefined {
  const context = appContext.tryUse() as Record<string, any> | undefined
  return context?.[key]
}
