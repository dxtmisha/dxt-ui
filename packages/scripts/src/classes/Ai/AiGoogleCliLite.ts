import { exec } from 'node:child_process'
import { AiAbstract } from './AiAbstract'
import { PropertiesFile } from '../Properties/PropertiesFile.ts'
import { forEach } from '@dxtmisha/functional-basic'

const TEMPORARY_DIR = './ai-tmp'

/**
 * Google AI (Gemini) implementation via CLI.
 * Uses system shell to execute Gemini CLI commands.
 *
 * Реализация Google AI (Gemini) через CLI.
 * Использует системную оболочку для выполнения команд Gemini CLI.
 *
 * Responsibilities / Ответственности:
 * - Construct CLI command / Сформировать CLI команду
 * - Execute command via shell / Выполнить команду через оболочку
 * - Return stdout as result / Вернуть stdout как результат
 *
 * Notes / Примечания:
 * - Requires 'gemini' CLI tool installed / Требует установленной утилиты 'gemini'
 * - API key is passed via environment variable or config / API ключ передается через переменную окружения или конфиг
 */
export class AiGoogleCliLite extends AiAbstract<{}> {
  /**
   * Counter for generating unique temporary file names/
   * Счетчик для генерации уникальных имен временных файлов
   */
  protected idFile = 1

  /**
   * Generates a unique file path for the temporary prompt.
   *
   * Генерирует уникальный путь к файлу для временного промпта.
   */
  protected getFileName(): string {
    return `${TEMPORARY_DIR}/Prompt-${this.idFile++}.txt`
  }

  /**
   * Initializes the "client".
   * For CLI, we just mark it as initialized.
   *
   * Инициализирует "клиента".
   * Для CLI мы просто помечаем его как инициализированный.
   */
  protected init(): void {
    this.ai = {}
  }

  /**
   * Implementation hook: convert accumulated images to model-specific format.
   * CLI implementation currently ignores images.
   *
   * Хук реализации: преобразовать накопленные изображения в формат, специфичный для модели.
   * Реализация CLI в настоящее время игнорирует изображения.
   */
  protected toImages(): any {
    return []
  }

  /**
   * Implementation hook: convert accumulated contents to model-specific format.
   * Returns array of strings.
   *
   * Хук реализации: преобразовать накопленное содержимое в формат, специфичный для модели.
   * Возвращает массив строк.
   */
  protected toContents(): any {
    return forEach(
      this.contents,
      content => this.createFile(content)
    )
  }

  /**
   * Performs content generation request via CLI and returns textual result.
   *
   * Выполняет запрос генерации контента через CLI и возвращает текстовый результат.
   * @param model Model identifier / Идентификатор модели
   * @param contents Composed contents for generation / Собранный контент для генерации
   */
  protected async response(
    model: string,
    contents: string
  ): Promise<string> {
    return new Promise((resolve) => {
      const fullPrompt = [
        ...this.toContents(),
        this.createFile(contents)
      ].join('\n\n##################\n\n')

      const escapedPrompt = fullPrompt.replace(/"/g, '\\"')
      const modelFlag = model ? ` --model "${model}"` : ''
      const command = `gemini "${escapedPrompt}"${modelFlag}`

      exec(
        command,
        {
          encoding: 'utf8',
          env: {
            ...process.env,
            GEMINI_API_KEY: this.key
          }
        },
        (error, stdout, stderr) => {
          if (error) {
            console.error('Error executing Gemini CLI:', stderr || error.message)
            resolve('')
          } else {
            resolve(stdout.trim())
          }
        }
      )
    })
  }

  /**
   * Creates a temporary file with the prompt content and returns the path formatted for the CLI.
   *
   * Создает временный файл с содержимым промпта и возвращает путь, отформатированный для CLI.
   * @param content Prompt content / Содержимое промпта
   * @returns Formatted file path (e.g., @./ai-tmp/Prompt-1.txt) / Отформатированный путь к файлу
   */
  protected createFile(content: string): string {
    const name = this.getFileName()

    PropertiesFile.writeByPath(name, content)

    return `Please read the following file as it contains the prompt instructions: @${name}`
  }
}
