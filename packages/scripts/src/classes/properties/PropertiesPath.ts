import type { PropertyListOrData } from '../../types/propertyTypes.ts'
import { PropertiesCache } from './PropertiesCache.ts'
import { PROPERTY_CACHE_DIR_READ } from '../../types/propertyTypes.ts'
import { replaceRecursive } from '@dxt-ui/functional'

/**
 * Class for working with paths by the given name of the design.
 *
 * Класс для работы с путями по заданному названию дизайна.
 */
export class PropertiesPath {
  /**
   * Returns the basic settings of the component.
   *
   * Возвращает базовые настройки у компонента.
   */
  getSettings(): PropertyList {
    return this.toAll(DIR_NAME, (path, design) => {
      let data: PropertyList = {}

      PropertiesFile.readDir(path).forEach((dir) => {
        const properties = PropertiesCache.read([...path, dir, FILE_PROPERTY])

        if (isFilled(properties)) {
          data = replaceRecursive(data, PropertiesStandard.to({
            [design]: {
              [toKebabCase(dir)]: properties
            }
          }))
        }
      })

      return data
    }) as PropertyList
  }

  /**
   * Processes all token values for all designs and combines them into one-big array.
   * Обрабатывает все значения токена у всех дизайнов и соединяет их в одну-большую массива.
   * @param name name of the group / названия группы
   * @param callback function for processing / функция для обработки
   */
  toAll(
    name: string,
    callback: (path: string[], design: string) => PropertyListOrData
  ): PropertyListOrData {
    return PropertiesCache.get<PropertyListOrData>(
      [PROPERTY_CACHE_DIR_READ],
      name,
      () => {
        let data: PropertyListOrData = {}

        this.designs.forEach((design) => {
          data = replaceRecursive(data, this.to(name, design, callback))
        })

        return data
      }
    )
  }
}
