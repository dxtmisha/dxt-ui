import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { LibraryItems } from './LibraryItems'

import type { LibraryData } from '../../types/libraryTypes'

/**
 * Class for creating a file with type exports.
 *
 * Класс для создания файла с экспортом типов.
 */
export class LibraryTypes {
  /**
   * Constructor
   * @param items object for working with the list of components / объект для работы со списком компонентов
   */
  constructor(
    protected readonly items: LibraryItems
  ) {
  }

  /**
   * Creates a file with type exports.
   *
   * Создает файл с экспортом типов.
   */
  make(): void {
    this.items.write(
      'types',
      [
        ...this.initImports(),
        '',
        ...this.initExports(),
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
   */
  protected getPathComponent(component: LibraryData): string {
    return `../components/${PropertiesConfig.getProjectName()}/${component.dir}`
  }

  /**
   * Returns a list of imports for the file.
   *
   * Возвращает список импортов для файла.
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
   */
  protected initExports(): string[] {
    const list: string[] = []

    this.items.getComponentList()
      .forEach((component) => {
        list.push(
          `export const ${component.codeFull} = _${component.codeFull}`
        )
      })

    return list
  }

  /**
   * Returns a list of global components for Vue.
   *
   * Возвращает список глобальных компонентов для Vue.
   */
  protected initGlobalComponentsVue(): string[] {
    const list: string[] = []

    this.items.getComponentList()
      .forEach((component) => {
        list.push(
          `    ${component.codeFull}: typeof ${component.codeFull}`
        )
      })

    return list
  }
}
