// export:none

import { toKebabCase } from '@dxtmisha/functional-basic'
import { getComponentPaths } from '../../functions/getComponentPaths'

import { PropertiesFile } from '../Properties/PropertiesFile'

import { componentDocTemplates } from '../../media/templates/componentDocTemplates'
import { UI_FILE_PACKAGE } from '../../config'

/**
 * Scaffolds and writes component template files into a target directory.
 * Substitutes template placeholders with component name, kebab-case names, and project information.
 *
 * Создает и записывает шаблонные файлы компонента в целевую директорию.
 * Заменяет плейсхолдеры шаблонов именем компонента, kebab-case именами и информацией о проекте.
 */
export class ComponentItem {
  /** Map of template filenames to their template content / Карта имен файлов шаблонов и их содержимого */
  protected sample: Record<string, string> = componentDocTemplates

  /**
   * Constructor for ComponentItem.
   *
   * Конструктор для ComponentItem.
   * @param path component directory path / путь к директории компонента
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
          this.replacement(this.readSample(path))
        )
      })

    console.info('end')
  }

  /**
   * Builds destination file path for output.
   *
   * Строит путь назначения для выходного файла.
   * @param path filename / имя файла
   * @returns destination path segments / сегменты пути назначения
   * @protected
   */
  protected getFilePath(path: string): string[] {
    return [
      ...getComponentPaths(this.path),
      this.replacement(path)
    ]
  }

  /**
   * Lists all template file names.
   *
   * Получает список всех имен файлов шаблонов.
   * @returns list of template file paths / список путей файлов шаблонов
   * @protected
   */
  protected getFilesSample(): string[] {
    return Object.keys(this.sample)
  }

  /**
   * Gets component name from directory path.
   *
   * Получает имя компонента из пути директории.
   * @returns component name / имя компонента
   * @protected
   */
  protected getName(): string {
    const parts = PropertiesFile.splitForDir(this.path)
    return String(parts[parts.length - 1])
  }

  /**
   * Reads project name from package.json.
   *
   * Читает имя проекта из package.json.
   * @returns project name / имя проекта
   * @protected
   */
  protected getProjectName(): string {
    return this.readPackage()?.name ?? 'Project'
  }

  /**
   * Reads package.json data or returns empty object.
   *
   * Читает данные package.json или возвращает пустой объект.
   * @returns package.json contents / содержимое package.json
   * @protected
   */
  protected readPackage(): Record<string, any> {
    return PropertiesFile.readFile(UI_FILE_PACKAGE) ?? {}
  }

  /**
   * Reads template file content as string from sample cache.
   *
   * Читает содержимое файла шаблона как строку из кэша шаблонов.
   * @param path filename / имя файла
   * @returns template file content / содержимое файла шаблона
   * @protected
   */
  protected readSample(path: string): string {
    return this.sample?.[path] ?? ''
  }

  /**
   * Replaces template placeholders with actual values.
   *
   * Заменяет плейсхолдеры шаблона реальными значениями.
   * @param contentOrPath content or path / содержимое или путь
   * @returns processed content or path / обработанное содержимое или путь
   * @protected
   */
  protected replacement(contentOrPath: string): string {
    return contentOrPath
      .replace('_.gitignore.txt', '.gitignore')
      .replace(/ComponentDoc/g, this.getName())
      .replace(/component-doc/g, toKebabCase(this.getName()))
      .replace(/\[project]/g, this.getProjectName())
      .replace(/\[path]/g, PropertiesFile.splitForDir(this.path).join('/'))
  }

  /**
   * Writes generated file to destination.
   *
   * Записывает сгенерированный файл в место назначения.
   * @param path filename / имя файла
   * @param content file content / содержимое файла
   * @protected
   */
  protected writeFile(path: string, content: string): void {
    const paths = this.getFilePath(path)

    PropertiesFile.writeByPath(paths, content)
    PropertiesFile.chmod(paths)
  }
}
