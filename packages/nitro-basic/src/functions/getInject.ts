import { getCurrentInstance, inject } from 'vue'

/**
 * Get injected value by name.
 *
 * Получение внедренного значения по имени.
 * @param name Key name / Имя ключа
 */
export function getInject<T>(name: string): T | undefined {
  if (getCurrentInstance()) {
    const item = inject<T>(name)

    if (item) {
      return item
    }
  }

  return undefined
}
