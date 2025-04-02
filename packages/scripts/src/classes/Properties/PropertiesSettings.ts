// export:none

import { isFilled, replaceRecursive, toKebabCase } from '@dxt-ui/functional'
import { getConstructorProperties } from '@dxt-ui/constructor'

import { PropertiesConfig } from './PropertiesConfig'
import { PropertiesFile } from './PropertiesFile'
import { PropertiesPath } from './PropertiesPath'
import { PropertiesStandard } from './PropertiesStandard'
import { PropertiesTool } from './PropertiesTool'

import { type PropertyList } from '../../types/propertyTypes'

import { LIBRARY_DIR_COMPONENTS } from '../../config'

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
    return {
      ...this.getComponents(),
      ...this.getConstructors()
    }
  }

  /**
   * Returns a list of available components.
   *
   * Возвращает список доступных компонентов.
   */
  protected getComponentList(): string[] {
    const list: string[] = []

    PropertiesFile.readDir(
      [
        ...LIBRARY_DIR_COMPONENTS,
        PropertiesConfig.getProjectName()
      ]
    ).forEach(dir => list.push(dir))

    return list
  }

  /**
   * Returns a list of design system components.
   *
   * Возвращает список компонентов дизайн-системы.
   */
  protected getComponents(): PropertyList {
    return this.path.toAll(DIR_NAME, (
      _,
      path,
      design
    ) => {
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

  protected getConstructors(): PropertyList {
    return getConstructorProperties(this.getComponentList())
  }
}
