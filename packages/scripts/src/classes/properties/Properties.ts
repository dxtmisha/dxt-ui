import { PropertiesCache } from './PropertiesCache'
import { PropertiesItems } from './PropertiesItems'

import { PROPERTY_CACHE_FILE, type PropertyList } from '../../types/propertyTypes'

/**
 * The main class for working with tokens.
 *
 * Главный класс для работы с токенами.
 */
export class Properties {
  private readonly items: PropertiesItems

  /**
   * Constructor
   */
  constructor() {
    this.items = new PropertiesItems(this.read())
  }

  /**
   * Processing of basic data.
   *
   * Обработка базовых данных.
   */
  protected read(): PropertyList {
    return PropertiesCache.get<PropertyList>([], PROPERTY_CACHE_FILE, () => {
      console.info('[Properties]', 'start')

      return {} as PropertyList
    })
  }

  /**
   * Reads the content from the file and merges all records into a single object.
   *
   * Читает содержимое из файла и объединяет все записи в один объект.
   */
  private readFiles(): PropertiesItems {
    const path = new PropertiesPath(this.designs)
    const settings = new PropertiesSettings(path).get()

    return new PropertiesItems(
      replaceRecursive(
        settings,
        new PropertiesMain(path).getBySettings(settings)
      )
    )
  }
}
