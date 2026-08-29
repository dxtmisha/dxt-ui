// export:none

import type { LibraryData } from '../../types/libraryTypes'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'

import { UI_DIRS_COMPONENTS } from '../../config'

/**
 * Class for working with the AI Wiki component.
 *
 * Класс для работы с компонентом AI Wiki.
 */
export class LibraryAiWikiItem {
  /**
   * Constructor
   * @param item component data / данные компонента
   */
  constructor(
    protected readonly item: LibraryData
  ) {
  }

  /**
   * Checks if the AI Wiki file exists.
   *
   * Проверяет, существует ли файл AI Wiki.
   * @returns true if AI wiki component file exists / true, если файл компонента AI wiki существует
   */
  isAiWiki(): boolean {
    return PropertiesFile.is(this.getPath())
  }

  /**
   * Returns the component code.
   *
   * Возвращает код компонента.
   * @returns component full code identifier / полный строковый идентификатор компонента
   */
  getCode(): string {
    return this.item.codeFull
  }

  /**
   * Returns the file name for the AI Wiki component.
   *
   * Возвращает имя файла для компонента AI Wiki.
   * @returns filename of AI wiki Vue component / имя файла Vue-компонента AI wiki
   */
  getComponentFileNameAiWiki(): string {
    return `${this.item.codeFull}AiWiki.vue`
  }

  /**
   * Returns the import string for the component.
   *
   * Возвращает строку импорта для компонента.
   * @returns import statement string / строка инструкции импорта
   */
  getImport(): string {
    const code = this.item.codeFull
    const path: string[] = [
      '..',
      '..',
      ...this.getPath()
    ]

    return `import ${code} from '${path.join('/')}'`
  }

  /**
   * Returns the path to the file.
   *
   * Возвращает путь к файлу.
   * @returns path segments array to AI wiki component / массив сегментов пути к компоненту AI wiki
   */
  protected getPath(): string[] {
    return [
      ...UI_DIRS_COMPONENTS,
      PropertiesConfig.getProjectName(),
      this.item.dir,
      this.getComponentFileNameAiWiki()
    ]
  }
}
