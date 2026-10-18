import { ErrorCenter } from '../classes/ErrorCenter'
import { isDomRuntime } from './isDomRuntime'

/**
 * Retrieves and parses JSON data from a script tag in the DOM.
 *
 * Извлекает и парсит JSON данные из тега скрипта в DOM.
 * @param id script tag ID / ID тега скрипта
 * @param defaultValue default value if not found or invalid / значение по умолчанию, если не найдено или невалидно
 * @param remove remove script after reading / удалить скрипт после чтения
 * @returns parsed data or default value / распарсенные данные или значение по умолчанию
 */
export function getHydrationData<T>(
  id: string,
  defaultValue: T,
  remove: boolean = true
): T {
  if (isDomRuntime()) {
    const script = document.getElementById(id)

    if (script && script.tagName === 'SCRIPT') {
      try {
        return JSON.parse(script.textContent || '') as T
      } catch (error) {
        ErrorCenter.on({
          group: 'hydration',
          code: 'error',
          details: { id, error }
        })
      } finally {
        if (remove) {
          script.remove()
        }
      }
    }
  }

  return defaultValue
}
