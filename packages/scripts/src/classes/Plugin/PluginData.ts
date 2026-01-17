import type { LibraryComponentImports, LibraryComponentList } from '../../types/libraryTypes'

/**
 * Class for storing plugin data.
 *
 * Класс для хранения данных плагина.
 */
export class PluginData {
  /**
   * Constructor
   * @param design design name / название дизайна
   * @param packageName package name / название пакета
   * @param componentsReg regular expression for finding components / регулярное выражение для поиска компонентов
   * @param componentsList list of components / список компонентов
   */
  constructor(
    protected readonly design: string,
    protected readonly packageName: string,
    protected readonly componentsReg: RegExp,
    protected readonly componentsList: LibraryComponentList
  ) {
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
    return Boolean(code.match(this.componentsReg))
  }

  /**
   * Returns a list of all components in the code.
   *
   * Возвращает список всех компонентов в коде.
   * @param code code to check / код для проверки
   */
  getComponents(code: string): LibraryComponentImports {
    const components = code.match(this.componentsReg)
    const list: LibraryComponentImports = []

    if (components) {
      components.forEach((component) => {
        const info = this.componentsList?.[component]

        if (
          info
          && !list.find(item => item.name === info.name)
        ) {
          list.push(info)
        }
      })
    }

    return list
  }
}
