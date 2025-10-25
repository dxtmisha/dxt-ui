// export:none

import { toKebabCase } from '@dxtmisha/functional'
import { getComponentPaths } from '../../functions/getComponentPaths'

import { PropertiesFile } from '../Properties/PropertiesFile'

import { UI_FILE_PACKAGE } from '../../config'

const DIR_SAMPLE = [__dirname, '..', '..', 'media', 'templates', 'componentDoc']

/**
 * Class for creating component files from templates.
 *
 * Класс для создания файлов компонента из шаблонов.
 */
export class ComponentItem {
  /**
   * Constructor
   * @param path component directory path/ путь к директории компонента
   */
  constructor(
    protected readonly path: string
  ) {
  }

  /**
   * Generates component files from template.
   *
   * Генерирует файлы компонента из шаблона.
   */
  make(): void {
    console.info('Component create:', this.getName())
    console.info('path:', this.path)

    this
      .getFilesSample()
      .forEach((path) => {
        this.writeFile(
          path,
          this.replacement(this.readFile(path))
        )
      })

    console.info('end')
  }

  /**
   * Gets component name from directory path.
   *
   * Получает имя компонента из пути директории.
   */
  protected getName(): string {
    const parts = PropertiesFile.splitForDir(this.path)
    return String(parts[parts.length - 1])
  }

  /**
   * Reads project name from package.json.
   *
   * Читает имя проекта из package.json.
   */
  protected getProjectName(): string {
    return this.readPackage()?.name ?? 'Project'
  }

  /**
   * Builds destination file path for output.
   *
   * Строит путь назначения для выходного файла.
   */
  protected getFilePath(path: string): string[] {
    return [
      ...getComponentPaths(this.path),
      this.replacement(path)
    ]
  }

  /**
   * Builds template file path for reading.
   *
   * Строит путь к файлу шаблона для чтения.
   */
  protected getSamplePath(path: string): string[] {
    return [...DIR_SAMPLE, path]
  }

  /**
   * Lists all template files recursively.
   *
   * Получает список всех файлов шаблонов рекурсивно.
   */
  protected getFilesSample(): string[] {
    return PropertiesFile.readDirRecursive(DIR_SAMPLE)
  }

  /**
   * Reads template file content as string.
   *
   * Читает содержимое файла шаблона как строку.
   */
  protected readFile(path: string): string {
    return String(PropertiesFile.readFile(this.getSamplePath(path)))
  }

  /**
   * Reads package.json data or returns empty object.
   *
   * Читает данные package.json или возвращает пустой объект.
   */
  protected readPackage(): Record<string, any> {
    return PropertiesFile.readFile(UI_FILE_PACKAGE) ?? {}
  }

  /**
   * Writes generated file to destination.
   *
   * Записывает сгенерированный файл в место назначения.
   */
  protected writeFile(path: string, content: string): void {
    const paths = this.getFilePath(path)

    PropertiesFile.writeByPath(paths, content)
    PropertiesFile.chmod(paths)
  }

  /**
   * Replaces template placeholders with actual values.
   *
   * Заменяет плейсхолдеры шаблона реальными значениями.
   */
  protected replacement(contentOrPath: string): string {
    return contentOrPath
      .replace(/ComponentDoc/g, this.getName())
      .replace(/component-doc/g, toKebabCase(this.getName()))
      .replace(/\[project]/g, this.getProjectName())
      .replace(/\[path]/g, PropertiesFile.splitForDir(this.path).join('/'))
  }
}
