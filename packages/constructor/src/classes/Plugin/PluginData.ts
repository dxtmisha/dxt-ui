import { toCamelCase, toKebabCase } from '@dxtmisha/functional-basic'

import type { PluginComponentImports, PluginComponentItem } from '../../types/pluginTypes'

import { STYLE_MODIFICATION } from '../../media/styleModification'

/**
 * Class for storing plugin data.
 *
 * Класс для хранения данных плагина.
 */
export class PluginData {
  protected readonly styleModification: Record<string, string>

  /**
   * Constructor
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
   * Returns the design name.
   *
   * Возвращает название дизайна.
   */
  getDesign(): string {
    return this.design
  }

  /**
   * Returns the package name.
   *
   * Возвращает название пакета.
   */
  getPackageName() {
    return this.packageName
  }

  /**
   * Checks if the code contains a component.
   *
   * Проверяет, содержит ли код компонент.
   * @param code code to check / код для проверки
   */
  hasComponent(code: string): boolean {
    return Boolean(code.match(new RegExp(this.componentsReg, 'i')))
  }

  /**
   * Checks if the code contains variables.
   *
   * Проверяет, содержит ли код переменные.
   * @param code code to check / код для проверки
   */
  hasVars(code: string): boolean {
    return Boolean(
      code.match(new RegExp(this.styleVarsReg, 'i'))
    )
  }

  /**
   * Returns a list of all components in the code.
   *
   * Возвращает список всех компонентов в коде.
   * @param code code to check / код для проверки
   */
  getComponents(code: string): PluginComponentImports {
    const components = code.match(this.componentsReg)
    const list: PluginComponentImports = []

    if (components) {
      components.forEach((component) => {
        const info = this.findComponent(component)

        if (
          info
          && !list.find(item => item.name === info.name)
          && !code.match(`${this.getPackageName()}/${info.name}`)
        ) {
          list.push(info)
        }
      })
    }

    return list
  }

  /**
   * Returns the regular expression for finding variables.
   *
   * Возвращает регулярное выражение для поиска переменных.
   */
  getStyleVarsReg(): RegExp {
    return this.styleVarsReg
  }

  /**
   * Returns the style modification map.
   *
   * Возвращает карту модификации стилей.
   */
  getStyleModification(): Record<string, string> {
    return this.styleModification
  }

  /**
   * Finds a component by name.
   *
   * Находит компонент по имени.
   * @param component component name / название компонента
   */
  protected findComponent(component: string): PluginComponentItem | undefined {
    return this.componentsList.find(
      item => item.reg.test(component)
    )
  }

  /**
   * Initializes the style modification map.
   *
   * Инициализирует карту модификации стилей.
   */
  protected initStyleModification(): Record<string, string> {
    const data: Record<string, string> = {}

    STYLE_MODIFICATION.forEach((name) => {
      data[toKebabCase(name)] = toCamelCase(name)
    })

    return data
  }
}
