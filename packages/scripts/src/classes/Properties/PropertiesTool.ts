import { copyObject, toCamelCase } from '@dxt-ui/functional'

import { PropertiesConfig } from './PropertiesConfig'
import { PropertiesCache } from './PropertiesCache'

import type { PropertyList } from '../../types/propertyTypes'

import basicProperties from '../../media/properties.json'

import { UI_KEY_CONSTRUCTOR, UI_FILE_PROPERTY } from '../../config'

/**
 * A class for static methods of obtaining various data.
 *
 * Класс для статических методов получения различных данных.
 */
export class PropertiesTool {
  /**
   * Checks if the names of the design relate to the construction.
   *
   * Проверяет, относятся ли названия дизайна к конструкции.
   * @param design design name/ название дизайна
   */
  static isConstructor(design: string): boolean {
    return design === UI_KEY_CONSTRUCTOR
  }

  /**
   * This method returns the names of designs from the environment variable (env).
   *
   * Данный метод возвращает названия дизайнов из переменной окружения (env)
   */
  static getDesigns(): string[] {
    return [UI_KEY_CONSTRUCTOR, PropertiesConfig.getDesignName()]
  }

  /**
   * Return a list of component names.
   *
   * Возвращаем список названий компонентов.
   * @param design design name/ название дизайна
   * @param component component name/ название компонента
   */
  static getComponentName(design: string, component?: string): string {
    return `${design}${component ? `-${toCamelCase(component)}` : ''}`
  }

  /**
   * Getting the component name.
   *
   * Получения названия компонента.
   * @param design design name/ название дизайна
   * @param component component name/ название компонента
   */
  static getClassName(design: string, component?: string): string {
    return `.${this.getComponentName(design, component)}`
  }

  static readFile(
    design: string,
    path: string[] | undefined
  ): PropertyList | undefined {
    if (PropertiesTool.isConstructor(design)) {
      return copyObject(basicProperties) as any as PropertyList
    }

    if (path) {
      return PropertiesCache.read<PropertyList>([...path, UI_FILE_PROPERTY])
    }
  }
}
