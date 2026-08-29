import { PropertiesFile } from '../Properties/PropertiesFile'

import type { LibraryFiles } from '../../types/libraryTypes'

import {
  UI_DIRS_LIST_EXPORT,
  UI_DIRS_FILE_EXPORT,
  UI_DIR_IN,
  UI_FLAG_NOT_EXPORT
} from '../../config'

/**
 * Class for generating exportable data and aggregate module entries.
 *
 * Класс для генерации экспортируемых данных и агрегации точек входа модулей.
 */
export class LibraryExport {
  /**
   * Start of data generation.
   *
   * Начало генерации данных.
   */
  make(): void {
    console.log('Library export')

    PropertiesFile.writeByPath(
      UI_DIRS_FILE_EXPORT,
      `${this.initFile().trim()}\r\n`
    )

    console.log('\r\nfinish')
  }

  /**
   * Returns the path to the directory.
   *
   * Возвращает путь к директории.
   * @param directory selected directory / выбранная директория
   * @returns path segments array / массив сегментов пути
   */
  protected getPath(directory: string): string[] {
    return [UI_DIR_IN, directory]
  }

  /**
   * Checks whether this file needs to be exported.
   *
   * Проверяет, нужно ли экспортировать этот файл.
   * @param path filename or path segments / имя файла или сегменты пути
   * @returns true if file is eligible for export / true, если файл подлежит экспорту
   */
  protected isExport(path: string | string[]): boolean {
    return !PropertiesFile.joinPath(path).match('.test.') && !this.getFile(path).match(UI_FLAG_NOT_EXPORT)
  }

  /**
   * Returns a list of all files for export.
   *
   * Возвращает список всех файлов для экспорта.
   * @returns list of export file groups / список групп файлов для экспорта
   */
  protected getDirectory(): LibraryFiles {
    const files: LibraryFiles = []

    UI_DIRS_LIST_EXPORT
      .forEach((directory) => {
        const path = this.getPath(directory)
        const list = PropertiesFile.readDirRecursiveWithIndex(path)

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
   * Returns the folder name with capitalized first letter.
   *
   * Возвращает название папки с заглавной буквы.
   * @param name folder name / название папки
   * @returns capitalized folder name / название папки с заглавной буквы
   */
  protected getName(name: string): string {
    return name.replace(/^[a-z]/, char => char.toUpperCase())
  }

  /**
   * Returns the content of the file.
   *
   * Возвращает содержимое файла.
   * @param path filename or path segments / имя файла или сегменты пути
   * @returns file content string / строка содержимого файла
   */
  protected getFile(path: string | string[]): string {
    return PropertiesFile.readFile<string>(path) ?? ''
  }

  /**
   * File generation for saving.
   *
   * Генерация файла для сохранения.
   * @returns generated export code / сгенерированный код экспорта
   */
  protected initFile(): string {
    const files: LibraryFiles = this.getDirectory()
    const imports: string[] = [
      this.initStyles()
    ]
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
              const componentName = item
                .replace(/\.vue$/, '')
                .replace(/^(.*?)([^/]+)$/, '$2')

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

  /**
   * Generates imports for global styles.
   *
   * Генерация импортов для глобальных стилей.
   * @returns generated style import statements / сгенерированные инструкции импорта стилей
   */
  protected initStyles(): string {
    const imports: string[] = []
    const paths: string[] = [
      'style.scss',
      'style.css'
    ]

    paths.forEach((path) => {
      const fullPath = [UI_DIR_IN, path]

      if (PropertiesFile.is(fullPath)) {
        imports.push(`import './${path}'`)
      }
    })

    return imports.join('\r\n') + '\r\n'
  }
}
