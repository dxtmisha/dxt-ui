import { forEach } from '@dxtmisha/functional-basic'
import { exec } from 'node:child_process'

import { AiAbstract } from './AiAbstract'
import { ApiTmp } from './ApiTmp'

/**
 * Claude AI implementation via CLI.
 * Uses system shell to execute Claude CLI commands.
 *
 * Реализация Claude AI через CLI.
 * Использует системную оболочку для выполнения команд Claude CLI.
 *
 * Responsibilities / Ответственности:
 * - Construct CLI command / Сформировать CLI команду
 * - Execute command via shell / Выполнить команду через оболочку
 * - Return stdout as result / Вернуть stdout как результат
 *
 * Notes / Примечания:
 * - Requires 'claude' CLI tool installed / Требует установленной утилиты 'claude'
 * - API key is passed via environment variable or config / API ключ передается через переменную окружения или конфиг
 */
export class AiClaudeCliLite extends AiAbstract<{}> {
  protected readonly tmp = new ApiTmp()

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
      content => this.tmp.createFile(content)
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
        this.tmp.createFile(contents)
      ].join('\n\n##################\n\n')

      const escapedPrompt = fullPrompt.replace(/"/g, '\\"')
      const modelFlag = model ? ` --model "${model}"` : ''
      const command = `claude "${escapedPrompt} -- Output strictly the code/answer. No preamble, no chatter, no reasoning" ${modelFlag}`

      try {
        exec(
          command,
          {
            encoding: 'utf8',
            env: {
              ...process.env
            }
          },
          (error, stdout, stderr) => {
            if (error) {
              console.error('Error executing Claude CLI:', stderr || error.message)
              resolve('')
            } else {
              resolve(stdout.trim())
            }

            this.tmp.removeFile()
          }
        )
      } catch (_) {
        this.tmp.removeFile()
      }
    })
  }
}

