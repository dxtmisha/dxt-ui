// export:none

import { Datetime, isFilled } from '@dxtmisha/functional-basic'

import { PropertiesFile } from '../Properties/PropertiesFile'

/** Regex to match date in content / Регекс для поиска даты в содержимом */
const DATE_UPDATED_MATCH = /\*\*Date: (.*?)\.\*\*/i

/**
 * Utility class for reading and writing a single wiki component file.
 *
 * Утилитный класс для чтения и записи одного файла wiki компонента.
 */
export class ComponentWikiFile {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param paths target file path segments / сегменты пути целевого файла
   * @param isDate whether to extract date from content / извлекать ли дату из содержимого
   * @param isOld whether to keep old version of file / сохранять ли старую версию файла
   */
  constructor(
    protected readonly paths: string[],
    protected readonly isDate: boolean = false,
    protected readonly isOld: boolean = true
  ) {
  }

  /**
   * Returns absolute path to file.
   *
   * Возвращает абсолютный путь к файлу.
   */
  getPath(): string {
    return PropertiesFile.joinPath(this.paths)
  }

  /**
   * Returns date from file content.
   *
   * Возвращает дату из содержимого файла.
   */
  getDate(): Datetime {
    const content = this.read()
    return this.extractDateFromContent(content)
  }

  /**
   * Reads file content as string.
   *
   * Читает содержимое файла как строку.
   */
  read(): string {
    return PropertiesFile.readFile<string>(this.paths) ?? ''
  }

  /**
   * Writes content to file.
   *
   * Записывает содержимое в файл.
   * @param content content to write / содержимое для записи
   */
  write(content: string): void {
    if (isFilled(content)) {
      const contentOld = this.read()
      let contentEdit = content.trim()

      if (contentEdit.startsWith('```')) {
        contentEdit = contentEdit
          .replace(/^```(ts|md)/, '')
          .replace(/```$/, '')
          .trim()
      }

      if (contentEdit !== contentOld.trim()) {
        if (
          this.isOld
          && isFilled(contentOld.trim())
        ) {
          PropertiesFile.writeByPath(
            `${PropertiesFile.joinPath(this.paths)}__old.txt`,
            contentOld
          )
        }

        PropertiesFile.writeByPath(
          this.paths,
          this.addDate(contentEdit + '\r\n')
        )
      }
    }
  }

  /**
   * Extracts date from content string.
   *
   * Извлекает дату из строки содержимого.
   * @param content content string / строка содержимого
   */
  protected extractDateFromContent(content: string): Datetime {
    const match = content.match(DATE_UPDATED_MATCH)
    let date = '1970-01-01'

    if (
      match
      && match?.[1]
    ) {
      date = match[1]
    }

    return new Datetime(date, 'full')
  }

  /**
   * Adds current date to content if isDate is true.
   *
   * Добавляет текущую дату в содержимое, если isDate равно true.
   * @param content content string / строка содержимого
   */
  protected addDate(content: string): string {
    if (this.isDate) {
      const date = new Datetime(new Date(), 'full').standard()
      const dateString = `\n\r**Date: ${date}.**\r\n`

      if (DATE_UPDATED_MATCH.test(content)) {
        return `${content.replace(DATE_UPDATED_MATCH, '').trim()}\r\n${dateString}`
      }

      return `${content}${dateString}`
    }

    return content
  }
}
