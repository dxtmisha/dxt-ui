import { FigmaStorage } from '../classes/FigmaStorage'

/**
 * Getting a class for working with Figma storage (PluginData).
 *
 * Получение класса для работы с хранилищем Figma (PluginData).
 * @param name value name/ название значения
 * @param item object for storing data/ объект для хранения данных
 * @param cache cache time/ время кэширования
 */
export function useFigmaStorage<T>(
  name: string,
  item: PluginDataMixin = figma.root,
  cache?: number
): FigmaStorage<T> {
  const id = 'id' in item ? item.id : 'root'
  const key = `${id}:${name}`

  if (key in items) {
    return items[key] as FigmaStorage<T>
  }

  const storage = new FigmaStorage<T>(name, item, cache)

  items[key] = storage
  return storage
}

const items: Record<string, FigmaStorage<any>> = {}
