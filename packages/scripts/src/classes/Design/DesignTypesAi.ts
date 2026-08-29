import { createHash } from 'node:crypto'
import { getPackageJson } from '../../functions/getPackageJson'
import { useAi } from '../../composables/useAi'
import { PropertiesConfig } from '../Properties/PropertiesConfig'

/**
 * Class for handling low-level AI interactions, directory configuration, and prompt execution.
 *
 * Класс для низкоуровневого взаимодействия с ИИ, конфигурации директории и выполнения промптов.
 */
export class DesignTypesAi {
  /** Cached project name / Кэшированное название проекта */
  protected projectName: string

  /** Array of directory path segments / Массив сегментов пути директории */
  protected readonly dirArray: string[]

  /**
   * Constructor for DesignTypesAi.
   *
   * Конструктор для DesignTypesAi.
   * @param dir input directory path containing declaration files / входной путь к директории, содержащей файлы деклараций
   */
  constructor(
    protected readonly dir: string = PropertiesConfig.getTypesTemporaryDirectory()
  ) {
    this.dirArray = this.dir.split('/')
    this.projectName = getPackageJson()?.name ?? 'none'
  }

  /**
   * Checks if the file is a valid declaration file (.d.ts).
   *
   * Проверяет, является ли файл валидным файлом декларации (.d.ts).
   * @param file file name or path / имя или путь к файлу
   * @returns true if file is a declaration file / true, если файл является файлом деклараций
   */
  isFile(file: string): boolean {
    return file.endsWith('.d.ts')
  }

  /**
   * Checks if the file is a valid JavaScript file (.js).
   *
   * Проверяет, является ли файл валидным JavaScript файлом (.js).
   * @param file file name or path / имя или путь к файлу
   * @returns true if file is JavaScript / true, если файл является JavaScript
   */
  isFileJs(file: string): boolean {
    return file.endsWith('.js')
  }

  /**
   * Returns the array of directory path segments.
   *
   * Возвращает массив сегментов пути директории.
   * @returns directory path segments / сегменты пути директории
   */
  getDirArray(): string[] {
    return this.dirArray
  }

  /**
   * Generates MD5 hash for the given content.
   *
   * Генерирует MD5 хэш для переданного содержимого.
   * @param content file or text content / содержимое файла или текста
   * @returns MD5 hash string / MD5 хэш строка
   */
  getMd5(content: string): string {
    return createHash('md5').update(content.trim()).digest('hex')
  }

  /**
   * Returns the project name from package.json.
   *
   * Возвращает название проекта из package.json.
   * @returns project name or 'none' / название проекта или 'none'
   */
  getProjectName(): string {
    return this.projectName
  }

  /**
   * Sends content and a prompt to the AI for processing.
   *
   * Отправляет контент и промпт ИИ для обработки.
   * @param content content for processing / контент для обработки
   * @param prompt instructions for the AI / инструкции для ИИ
   * @param code code to optimize / код для оптимизации
   * @returns AI generated content or undefined / сгенерированный ИИ контент или undefined
   */
  async toAi(
    content: string,
    prompt: string,
    code?: string
  ): Promise<string | undefined> {
    const ai = useAi()

    if (ai) {
      if (code) {
        ai.addPrompt(
          `File JS Code (SUPPLEMENTARY REFERENCE & CONTEXT ONLY):\n`
          + `The following JavaScript code is provided STRICTLY as supplementary background context to give a full picture of implementation details and logic.\n`
          + `CRITICAL RESTRICTION: You MUST NOT treat or use this data as "File Content". Do NOT generate, return, or include any classes, methods, functions, or entities from "File JS Code" in the output unless they are explicitly present in "File Content".\n\n`
          + '```\n'
          + `${code}\n`
          + '```'
        )
      }

      ai.addPrompt('You are a world-class senior developer and an exceptional technical writer.')
      ai.addPrompt('CRITICAL DIRECTIVE: No data stored in history, previous chat messages, or prior conversation context must influence the result. Process strictly and exclusively the data provided in the text below.')
      ai.addPrompt(
        `TASK INSTRUCTIONS & GOAL:\n`
        + `The following are the exact rules, requirements, and execution instructions for processing the file content:\n\n`
        + `${prompt}`
      )
      ai.addPrompt(
        `File Content (PRIMARY DATA TO PROCESS):\n`
        + `The following is the primary target file content that you MUST process according to the instructions in the prompt above:\n`
        + '```\n'
        + `${content}\n`
        + '```'
      )

      const generate = await ai.generate('go!')

      if (generate) {
        return generate
      }
    }

    return undefined
  }

  /**
   * Sends content and a prompt to the AI for processing and parses the resulting JSON response.
   *
   * Отправляет контент и промпт ИИ для обработки и парсит полученный JSON-ответ.
   * @param content content for processing / контент для обработки
   * @param prompt instructions for the AI / инструкции для ИИ
   * @param code code to optimize / код для оптимизации
   * @returns parsed JSON object or undefined / распарсенный JSON объект или undefined
   */
  async toAiJson<T>(
    content: string,
    prompt: string,
    code?: string
  ): Promise<T | undefined> {
    const generate = await this.toAi(content, prompt, code)

    if (generate) {
      try {
        const cleaned = generate.replace(/```json|```/g, '').trim()
        return JSON.parse(cleaned) as T
      } catch {
        return undefined
      }
    }

    return undefined
  }
}
