// export:none

import { PropertiesFile } from '../Properties/PropertiesFile'

import type { LibraryFiles } from '../../types/libraryTypes'

import {
  UI_DIRS_LIST_EXPORT,
  UI_DIRS_FILE_EXPORT,
  UI_DIR_IN, UI_FLAG_NOT_EXPORT
} from '../../config'

/**
 * Class for generating exportable data
 *
 * Класс для генерации экспортируемых данных
 */
export class LibraryExport {
  /**
   * Start of data generation
   *
   * Начало генерации данных
   */
  make() {
    console.log('Library export')

    PropertiesFile.writeByPath(
      UI_DIRS_FILE_EXPORT,
      `${this.initFile()}\r\n`.trim()
    )

    console.log('\r\nfinish')
  }

  /**
   * Returns the path to the directory
   *
   * Возвращает путь к директории
   * @param directory selected directory/ выбранная директория
   */
  protected getPath(directory: string): string[] {
    return [UI_DIR_IN, directory]
  }

  /**
   * Проверяет, нужно ли экспортировать этот файл
   *
   * Checks whether this file needs to be exported
   * @param path filename/ имя файла
   */
  protected isExport(path: string | string[]): boolean {
    return !this.getFile(path).match(UI_FLAG_NOT_EXPORT)
  }

  /**
   * Returns a list of all files for export
   *
   * Возвращает список всех файлов для экспорта
   */
  protected getDirectory(): LibraryFiles {
    const files: LibraryFiles = []

    UI_DIRS_LIST_EXPORT
      .forEach((directory) => {
        const path = this.getPath(directory)
        const list = PropertiesFile.readDirRecursive(path)

        if (list.length > 0) {
          files.push({
            name: directory,
            path,
            files: list
          })
        }
      })

    return files
  }

  /**
   * Returns the folder name
   *
   * Возвращает название папки
   * @param name folder name/ название папки
   */
  protected getName(name: string) {
    return name.replace(/^[a-z]/, char => char.toUpperCase())
  }

  /**
   * Возвращает содержимое файла
   *
   * Returns the content of the file
   * @param path filename/ имя файла
   */
  protected getFile(path: string | string[]): string {
    return PropertiesFile.readFile<string>(path) ?? ''
  }

  /**
   * File generation for saving
   *
   * Генерация файла для сохранения
   */
  protected initFile(): string {
    const files: LibraryFiles = this.getDirectory()
    const imports: string[] = []
    const html: string[] = []

    files.forEach((file) => {
      const name = file.name

      html.push('')
      html.push(`// ${this.getName(name)}`)

      console.log(name)

      file.files.forEach(
        (item) => {
          if (this.isExport([...file.path, item])) {
            console.log(`  ${item}`)

            if (item.match(/\.ts$/)) {
              html.push(`export * from './${name}/${item.replace(/\.ts$/, '')}'`)
            } else if (item.match(/\.vue$/)) {
              const componentName = item.replace(/\.vue$/, '')

              imports.push(`import _${componentName} from './${name}/${item}'`)
              html.push(`export const ${componentName} = _${componentName}`)
            }
          }
        }
      )
    })

    return imports.join('\r\n').trim()
      + '\r\n'
      + '\r\n'
      + html.join('\r\n').trim()
  }
}
