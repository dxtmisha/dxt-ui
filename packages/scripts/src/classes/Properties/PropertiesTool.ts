// export:none

import { copyObject, toCamelCase } from '@dxtmisha/functional-basic'

import { PropertiesConfig } from './PropertiesConfig'
import { PropertiesCache } from './PropertiesCache'

import type { PropertyList } from '../../types/propertyTypes'

import basicProperties from '../../media/properties.json'

import { UI_KEY_CONSTRUCTOR, UI_FILE_PROPERTY } from '../../config'

/**
 * Utility class for naming components and reading design system property files.
 *
 * Утилитарный класс для именования компонентов и чтения файлов свойств дизайн-системы.
 */
export class PropertiesTool {
  /**
   * Checks if the design name identifies as a constructor.
   *
   * Проверяет, идентифицирует ли название дизайна конструктор.
   * @param design design name / название дизайна
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
   * Generates a camelCase component name string based on design and component name.
   *
   * Генерирует строку названия компонента в стиле camelCase на основе дизайна и названия компонента.
   * @param design design name / название дизайна
   * @param component component name / название компонента
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

  /**
   * Reads a property list from a specified path, with special handling for constructors.
   *
   * Считывает список свойств по указанному пути с особой обработкой для конструкторов.
   * @param design design name / название дизайна
   * @param path array representing the directory path / массив, представляющий путь к директории
   */
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
