import { forEach } from '@dxtmisha/functional-basic'
import { execFile } from 'node:child_process'

import { AiAbstract } from './AiAbstract'
import { ApiTmp } from './ApiTmp'

/**
 * Google AI (Gemini) implementation via CLI.
 * Executes Gemini CLI commands directly without a system shell.
 *
 * Реализация Google AI (Gemini) через CLI.
 * Выполняет команды Gemini CLI напрямую, без системной оболочки.
 *
 * Responsibilities / Ответственности:
 * - Construct CLI command / Сформировать CLI команду
 * - Execute command without shell / Выполнить команду без оболочки
 * - Return stdout as result / Вернуть stdout как результат
 *
 * Notes / Примечания:
 * - Requires 'gemini' CLI tool installed / Требует установленной утилиты 'gemini'
 * - API key is passed via environment variable or config / API ключ передается через переменную окружения или конфиг
 */
export class AiGoogleCliLite extends AiAbstract<{}> {
  /** Temporary prompt file manager / Менеджер временных файлов промпта */
  protected readonly tmp = new ApiTmp()

  /**
   * Initializes the client instance.
   *
   * Инициализирует экземпляр клиента.
   */
  protected async init(): Promise<void> {
    this.ai = {}
  }

  /**
   * Implementation hook: convert accumulated images to model-specific format.
   * CLI implementation currently ignores images.
   *
   * Хук реализации: преобразовать накопленные изображения в формат, специфичный для модели.
   * Реализация CLI в настоящее время игнорирует изображения.
   * @returns array of converted images / массив преобразованных изображений
   */
  protected toImages(): any {
    return []
  }

  /**
   * Implementation hook: convert accumulated contents to model-specific format.
   *
   * Хук реализации: преобразовать накопленное содержимое в формат, специфичный для модели.
   * @returns array of formatted prompt strings / массив отформатированных строк промпта
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
   * @param model model identifier / идентификатор модели
   * @param contents composed contents for generation / собранный контент для генерации
   * @returns generated text response / сгенерированный текстовый ответ
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

      const commandArguments = [
        `${fullPrompt} -- Output strictly the code/answer. No preamble, no chatter, no reasoning`,
        ...(model ? ['--model', model] : []),
        '--yolo'
      ]

      try {
        execFile(
          'gemini',
          commandArguments,
          {
            encoding: 'utf8',
            env: {
              ...process.env
            }
          },
          (error, stdout, stderr) => {
            if (error) {
              console.error('Error executing Gemini CLI:', stderr || error.message)
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
