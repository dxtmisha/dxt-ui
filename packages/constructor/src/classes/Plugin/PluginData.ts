import { toCamelCase, toKebabCase } from '@dxtmisha/functional-basic'

import type { PluginComponentImports, PluginComponentItem } from '../../types/pluginTypes'

import { STYLE_MODIFICATION } from '../../media/styleModification'

/**
 * Class for storing and querying design system metadata for the Vite plugin.
 *
 * Класс для хранения и запроса метаданных дизайн-системы для плагина Vite.
 */
export class PluginData {
  /** Map of CSS property names to SCSS mixin names / Карта соответствия CSS-свойств имен миксинов SCSS */
  protected readonly styleModification: Record<string, string>

  /**
   * Constructor.
   *
   * Конструктор.
   * @param design design name / название дизайна
   * @param packageName package name / название пакета
   * @param componentsReg regular expression for finding components / регулярное выражение для поиска компонентов
   * @param styleVarsReg regular expression for finding variables / регулярное выражение для поиска переменных
   * @param componentsList list of components / список компонентов
   */
  constructor(
    protected readonly design: string,
    protected readonly packageName: string,
    protected readonly componentsReg: RegExp,
    protected readonly styleVarsReg: RegExp,
    protected readonly componentsList: PluginComponentImports
  ) {
    this.styleModification = this.initStyleModification()
  }

  /**
   * Checks if the code contains a component.
   *
   * Проверяет, содержит ли код компонент.
   * @param code code to check / код для проверки
   * @returns true if component is found / true, если компонент найден
   */
  hasComponent(code: string): boolean {
    return new RegExp(this.componentsReg, 'i').test(code)
  }

  /**
   * Checks if the code contains variables.
   *
   * Проверяет, содержит ли код переменные.
   * @param code code to check / код для проверки
   * @returns true if variables are found / true, если переменные найдены
   */
  hasVars(code: string): boolean {
    return new RegExp(this.styleVarsReg, 'i').test(code)
  }

  /**
   * Returns a list of all components in the code that are not yet imported.
   *
   * Возвращает список всех компонентов в коде, которые еще не импортированы.
   * @param code code to check / код для проверки
   * @returns list of matched component items / список найденных элементов компонентов
   */
  getComponents(code: string): PluginComponentImports {
    const components = code.match(this.componentsReg)
    const list: PluginComponentImports = []

    if (components) {
      components.forEach((component) => {
        const info = this.findComponent(component.trim())

        if (
          info
          && !list.some(item => item.name === info.name)
          && !(new RegExp(`import {[^}]*${info.name}[^}]*} from ['"]${this.getPackageName()}\\/${info.name}['"]`)).test(code)
        ) {
          list.push(info)
        }
      })
    }

    return list
  }

  /**
   * Returns the design name.
   *
   * Возвращает название дизайна.
   * @returns design name / название дизайна
   */
  getDesign(): string {
    return this.design
  }

  /**
   * Returns the package name.
   *
   * Возвращает название пакета.
   * @returns package name / название пакета
   */
  getPackageName(): string {
    return this.packageName
  }

  /**
   * Returns the style modification map.
   *
   * Возвращает карту модификации стилей.
   * @returns style modification record / словарь модификации стилей
   */
  getStyleModification(): Record<string, string> {
    return this.styleModification
  }

  /**
   * Returns the regular expression for finding variables.
   *
   * Возвращает регулярное выражение для поиска переменных.
   * @returns regular expression for style variables / регулярное выражение для стилевых переменных
   */
  getStyleVarsReg(): RegExp {
    return this.styleVarsReg
  }

  /**
   * Finds a component by name or regex match.
   *
   * Находит компонент по имени или регулярному выражению.
   * @param component component name / название компонента
   * @returns matched component item or undefined / найденный элемент компонента или undefined
   */
  protected findComponent(component: string): PluginComponentItem | undefined {
    return this.componentsList.find(
      item => item.name === component
        || new RegExp(item.reg, 'i').test(component)
    )
  }

  /**
   * Initializes the style modification map.
   *
   * Инициализирует карту модификации стилей.
   * @returns initialized style modification map / инициализированная карта модификации стилей
   */
  protected initStyleModification(): Record<string, string> {
    const data: Record<string, string> = {}

    STYLE_MODIFICATION.forEach((name) => {
      data[toKebabCase(name)] = toCamelCase(name)
    })

    return data
  }
}
