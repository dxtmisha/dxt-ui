import { FigmaClientStorage } from '../classes/FigmaClientStorage'

const items: Record<string, FigmaClientStorage<any>> = {}

/**
 * Getting a class for working with Figma client storage (clientStorage).
 *
 * Получение класса для работы с клиентским хранилищем Figma (clientStorage).
 * @param name value name/ название значения
 * @param cache cache time/ время кэширования
 */
export function useFigmaClientStorage<T>(
  name: string,
  cache?: number
): FigmaClientStorage<T> {
  if (name in items) {
    return items[name] as FigmaClientStorage<T>
  }

  const storage = new FigmaClientStorage<T>(name, cache)

  items[name] = storage
  return storage
}
