// export:none

import { isFilled, replaceRecursive, toKebabCase } from '@dxt-ui/functional'

import { PropertiesFile } from './PropertiesFile'
import { PropertiesPath } from './PropertiesPath'
import { PropertiesTool } from './PropertiesTool'

import { PropertiesStandard } from './PropertiesStandard'

import { type PropertyList } from '../../types/propertyTypes'

const DIR_NAME = 'settings'

/**
 * Class for searching all components.
 *
 * Класс для поиск всех компоненты.
 */
export class PropertiesSettings {
  /**
   * Constructor
   * @param path object of the class for working with paths/ объект класса для работы с путями
   */
  constructor(
    private readonly path: PropertiesPath
  ) {
  }

  /**
   * Returns the basic settings of the component.
   *
   * Возвращает базовые настройки у компонента.
   */
  get(): PropertyList {
    return this.path.toAll(DIR_NAME, (path, design) => {
      let data: PropertyList = {}

      if (path) {
        PropertiesFile.readDir(path).forEach((dir) => {
          const properties = PropertiesTool.readFile(design, [...path, dir])

          if (isFilled(properties)) {
            data = replaceRecursive(data, PropertiesStandard.to({
              [design]: {
                [toKebabCase(dir)]: properties
              }
            }))
          }
        })
      }

      return data
    }) as PropertyList
  }
}
