import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { LibraryItems } from './LibraryItems'

import type { LibraryData } from '../../types/libraryTypes'

/**
 * Class for generating global type definitions for Vue components.
 *
 * Класс для создания глобальных определений типов для компонентов Vue.
 */
export class LibraryTypes {
  /**
   * Constructor for LibraryTypes.
   *
   * Конструктор для LibraryTypes.
   * @param items object for working with the list of components / объект для работы со списком компонентов
   */
  constructor(
    protected readonly items: LibraryItems
  ) {
  }

  /**
   * Creates the type definition file (`types.d.ts`) for global Vue components.
   *
   * Создает файл определений типов (`types.d.ts`) для глобальных компонентов Vue.
   */
  make(): void {
    this.items.write(
      'types',
      [
        // 'import { type App } from \'vue\'',
        ...this.initImports(),
        // '',
        // 'export const components = {',
        // this.initExports(),
        // '}',
        // '',
        // 'export const useVueComponentsPlugin = {',
        // '  install: async (app: App) => {',
        // ...this.initIncludeVueComponents(),
        // '  }',
        // '}',
        '',
        'declare module \'@vue/runtime-core\' {',
        '  export interface GlobalComponents {',
        ...this.initGlobalComponentsVue(),
        '  }',
        '}'
      ]
    )
  }

  /**
   * Returns the path to the component.
   *
   * Возвращает путь к компоненту.
   * @param component component data / данные компонента
   * @returns component relative path string / строка относительного пути к компоненту
   */
  protected getPathComponent(component: LibraryData): string {
    return `../components/${PropertiesConfig.getProjectName()}/${component.dir}`
  }

  /**
   * Returns a list of imports for the file.
   *
   * Возвращает список импортов для файла.
   * @returns array of component import statements / массив инструкций импорта компонентов
   */
  protected initImports(): string[] {
    const list: string[] = []

    this.items.getComponentList()
      .forEach((component) => {
        list.push(
          `import _${component.codeFull} from '${this.getPathComponent(component)}/${component.codeFull}.vue'`
        )
      })

    return list
  }

  /**
   * Returns a list of exports for the file.
   *
   * Возвращает список экспортов для файла.
   * @returns string of formatted component exports / строка отформатированных экспортов компонентов
   */
  protected initExports(): string {
    const list: string[] = []

    this.items.getComponentList()
      .forEach((component) => {
        list.push(
          `  ${component.codeFull}: _${component.codeFull}`
        )
      })

    return list.join(',\r\n')
  }

  /**
   * Generates Vue plugin component registration calls.
   *
   * Генерирует вызовы регистрации компонентов в плагине Vue.
   * @returns array of registration code lines / массив строк кода регистрации
   */
  protected initIncludeVueComponents(): string[] {
    const list: string[] = []

    this.items.getComponentList()
      .forEach((component) => {
        list.push(
          `    app.component('${component.codeFull}', _${component.codeFull})`
        )
      })

    return list
  }

  /**
   * Returns a list of global components for Vue.
   *
   * Возвращает список глобальных компонентов для Vue.
   * @returns array of global component type definitions / массив определений типов глобальных компонентов
   */
  protected initGlobalComponentsVue(): string[] {
    const list: string[] = []

    this.items.getComponentList()
      .forEach((component) => {
        list.push(
          `    ${component.codeFull}: typeof _${component.codeFull}`
        )
      })

    return list
  }
}
