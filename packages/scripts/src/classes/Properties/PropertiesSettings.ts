import { isFilled, replaceRecursive, toKebabCase } from '@dxt-ui/functional'
import { getConstructorProperties } from '../../functions/getConstructorProperties'

import { PropertiesConfig } from './PropertiesConfig'
import { PropertiesFile } from './PropertiesFile'
import { PropertiesPath } from './PropertiesPath'
import { PropertiesStandard } from './PropertiesStandard'
import { PropertiesTool } from './PropertiesTool'

import { type PropertyList } from '../../types/propertyTypes'

import { UI_DIRS_COMPONENTS, UI_DIRS_CONSTRUCTOR, UI_KEY_CONSTRUCTOR } from '../../config'

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
    let paths: string[] = [
      ...UI_DIRS_COMPONENTS,
      PropertiesConfig.getProjectName()
    ]

    if (this.path.isConstructor()) {
      paths = [...UI_DIRS_CONSTRUCTOR]
    }

    PropertiesFile.readDir(paths).forEach(dir => list.push(dir))

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
    return PropertiesStandard.to({
      [UI_KEY_CONSTRUCTOR]: getConstructorProperties(this.getComponentList())
    }) as any as PropertyList
  }
}
