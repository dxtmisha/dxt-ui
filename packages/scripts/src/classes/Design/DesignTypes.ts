import { forEach } from '@dxtmisha/functional-basic'
import { useAi } from '../../composables/useAi'

import { PropertiesFile } from '../Properties/PropertiesFile'

import type { DesignTypesList } from '../../types/designTypes'

import { UI_FILE_AI_TYPES } from '../../config'

/**
 * Class for generating AI-optimized type definitions.
 *
 * Класс для генерации оптимизированных ИИ определений типов.
 */
export class DesignTypes {
  /**
   * Array of directory path segments.
   *
   * Массив сегментов пути директории.
   */
  protected readonly dirArray: string[]

  /**
   * Constructor
   * @param dir directory path / путь к директории
   */
  constructor(
    protected readonly dir: string = 'dist'
  ) {
    this.dirArray = this.dir.split('/')
  }

  /**
   * Main method to execute the type generation process.
   *
   * Основной метод для выполнения процесса генерации типов.
   */
  make() {
    console.log('DesignTypes: making AI types...')

    const files = this.getListByFilter()
    const fullContent = this.toOneFile(files)

    this.toAiEdit(fullContent).then(
      (aiContent) => {
        this.save(aiContent)

        console.log('DesignTypes: AI types saved.')
      }
    )
  }

  /**
   * Checks if the file is a valid declaration file.
   *
   * Проверяет, является ли файл валидным файлом декларации.
   * @param file file name / имя файла
   */
  protected isFile(file: string): boolean {
    return file.endsWith('.d.ts')
      && (
        !file.includes('constructors/')
        || (
          !file.endsWith('/props.d.ts')
          && !file.endsWith('/types.d.ts')
        )
      )
  }

  /**
   * Checks if the content contains type definitions.
   *
   * Проверяет, содержит ли контент определения типов.
   * @param content file content / содержимое файла
   */
  protected isContent(content?: string): content is string {
    return Boolean(
      content && (
        content.includes('export interface')
        || content.includes('export type')
        || content.includes('export enum')
      ))
  }

  /**
   * Returns the full path segments for a file.
   *
   * Возвращает сегменты полного пути для файла.
   * @param file file name / имя файла
   */
  protected getPath(file: string): string[] {
    return [...this.dirArray, file]
  }

  /**
   * Reads the directory recursively.
   *
   * Читает директорию рекурсивно.
   */
  protected getList() {
    return PropertiesFile.readDirRecursive(this.dirArray)
  }

  /**
   * Gets a list of files filtered by criteria.
   *
   * Получает список файлов, отфильтрованный по критериям.
   */
  protected getListByFilter(): DesignTypesList {
    return forEach(
      this.getList(),
      (file) => {
        if (this.isFile(file)) {
          const content = this.readFile(file)

          if (this.isContent(content)) {
            return {
              path: file,
              content
            }
          }
        }

        return undefined
      }
    ) as DesignTypesList
  }

  /**
   * Reads the content of a file.
   *
   * Читает содержимое файла.
   * @param path file path / путь к файлу
   */
  protected readFile(path: string): string | undefined {
    return PropertiesFile.readFileOnly(this.getPath(path))
  }

  /**
   * Saves the generated content to a file.
   *
   * Сохраняет сгенерированный контент в файл.
   * @param content content to save / контент для сохранения
   */
  protected save(content: string) {
    PropertiesFile.writeByPath(
      UI_FILE_AI_TYPES,
      content
    )
  }

  /**
   * Combines a list of files into a single string.
   *
   * Объединяет список файлов в одну строку.
   * @param list list of files / список файлов
   */
  protected toOneFile(list: DesignTypesList): string {
    return forEach(
      list,
      item => `// File: ${item.path}\n${item.content}`
    )
      .join('\n\n')
  }

  /**
   * Sends content to AI for optimization.
   *
   * Отправляет контент ИИ для оптимизации.
   * @param content content to optimize / контент для оптимизации
   */
  protected async toAiEdit(content: string): Promise<string> {
    const ai = useAi()

    if (ai) {
      ai.addPrompt(`File Content: ${content}`)

      const generate = await ai.generate(
        'Remove all Russian comments from this code. '
        + 'Remove comments if the property name makes its purpose obvious. '
        + 'Remove all imports. '
        + 'Remove empty lines. '
        + 'Remove the "export" keyword if possible. '
        + 'Keep only "type", "interface" and "enum" definitions, remove everything else. '
        + 'Minimize the content as much as possible without losing any data or logic. '
        + 'Return only the corrected code without any additional text or explanations.'
      )

      if (generate) {
        return generate
      }
    }

    return content
  }
}
