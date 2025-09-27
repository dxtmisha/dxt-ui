import { isFilled } from '@dxt-ui/functional'

import { PropertiesFile } from '../Properties/PropertiesFile'

/**
 * Utility class for reading and writing a single wiki component file.
 *
 * Утилитный класс для чтения и записи одного файла wiki компонента.
 */
export class ComponentWikiFile {
  /**
   * @param paths target file path segments
   * @param paths сегменты пути целевого файла
   */
  constructor(
    protected readonly paths: string[]
  ) {
  }

  /** Returns absolute path to file / Возвращает абсолютный путь к файлу */
  getPath(): string {
    return PropertiesFile.joinPath(this.paths)
  }

  /** Reads file content as string / Читает содержимое файла как строку */
  read(): string {
    return PropertiesFile.readFile<string>(this.paths) ?? ''
  }

  /** Writes content to file / Записывает содержимое в файл */
  write(content: string): void {
    if (isFilled(content)) {
      const segments = [...this.paths]

      segments.splice(segments.length - 1, 0, 'old')

      PropertiesFile.writeByPath(segments, this.read())
      PropertiesFile.writeByPath(this.paths, content.trim())
    }
  }
}
