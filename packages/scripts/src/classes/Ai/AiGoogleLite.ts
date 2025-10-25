import { AiAbstract } from './AiAbstract'
import { GoogleGenAI } from '@google/genai'

/**
 * Google AI (Gemini) implementation of AiAbstract.
 * Initializes GoogleGenAI client and performs text generation requests.
 *
 * Реализация Google AI (Gemini) поверх AiAbstract.
 * Инициализирует клиент GoogleGenAI и выполняет запросы генерации текста.
 *
 * Responsibilities / Ответственности:
 * - Provide API key / Предоставить API ключ
 * - Initialize low-level client / Инициализировать низкоуровневый клиент
 * - Call generateContent and extract plain text / Вызвать generateContent и извлечь текст
 *
 * Notes / Примечания:
 * - Model must be set via setModel() before generate() / Модель нужно задать через setModel()
 * - Returns empty string if response is missing / Возвращает пустую строку при отсутствии результата
 */
export class AiGoogleLite extends AiAbstract<GoogleGenAI> {
  /**
   * Initializes GoogleGenAI client instance.
   *
   * Инициализирует экземпляр клиента GoogleGenAI.
   */
  protected init(): void {
    this.ai = new GoogleGenAI({ apiKey: this.key })
  }

  /**
   * Performs content generation request and returns textual result.
   *
   * Выполняет запрос генерации контента и возвращает текстовый результат.
   * @param model Model identifier / Идентификатор модели
   * @param contents Composed contents for generation / Собранный контент для генерации
   */
  protected async response(
    model: string,
    contents: string
  ): Promise<string> {
    const response = await this.ai?.models.generateContent({
      model,
      contents
    })

    return response?.text ?? ''
  }
}
