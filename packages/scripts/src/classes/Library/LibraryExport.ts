import { PropertiesFile } from '../Properties/PropertiesFile'

import type { LibraryFiles } from '../../types/libraryTypes'

import {
  LIBRARY_EXPORT_LIST,
  LIBRARY_FILE_EXPORT,
  PROPERTY_DIR_IN
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
      LIBRARY_FILE_EXPORT,
      `${this.initFile()}\r\n`
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
    return [PROPERTY_DIR_IN, directory]
  }

  /**
   * Returns a list of all files for export
   *
   * Возвращает список всех файлов для экспорта
   */
  protected getDirectory(): LibraryFiles {
    const files: LibraryFiles = []

    LIBRARY_EXPORT_LIST
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
   * File generation for saving
   *
   * Генерация файла для сохранения
   */
  protected initFile(): string {
    const files: LibraryFiles = this.getDirectory()
    const html: string[] = []

    files.forEach((file) => {
      const name = file.name

      html.push('')
      html.push(`// ${this.getName(name)}`)

      console.log(name)

      file.files.forEach(
        (item) => {
          if (item.match(/\.ts$/)) {
            const path = [...file.path, item]
            const code = PropertiesFile.readFile<string>(path)

            if (
              code
              && !code.match(/\/\/ *export:none/)
            ) {
              console.log(`-- ${item}`)

              html.push(`export * from './${name}/${item.replace(/\.ts$/, '')}'`)
            }
          }
        }
      )
    })

    return html
      .join('\r\n')
      .trim()
  }
}
