import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { LibraryItems } from './LibraryItems'

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
      this.initList(),
      'd.ts'
    )
  }

  /**
   * Returns a list of exports for the file.
   *
   * Возвращает список экспортов для файла.
   */
  protected initList(): string[] {
    const list: string[] = []
    const project = PropertiesConfig.getProjectName()

    this.items.getComponentList()
      .forEach((component) => {
        list.push(
          `export type * from '../components/${project}/${component.dir}/index'`
        )
      })

    return list
  }
}
