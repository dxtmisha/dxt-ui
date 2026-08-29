import { forEach } from '@dxtmisha/functional-basic'
import { AiAbstract } from './AiAbstract'
import type { GoogleGenAI } from '@google/genai'

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
  protected async init(): Promise<void> {
    const { GoogleGenAI } = await import('@google/genai')
    this.ai = new GoogleGenAI({ apiKey: this.key })
  }

  /**
   * Implementation hook: convert accumulated images to model-specific format.
   *
   * Хук реализации: преобразовать накопленные изображения в формат, специфичный для модели.
   * @returns array of converted inline data images / массив преобразованных встроенных данных изображений
   */
  protected toImages(): any {
    return forEach(this.images, image => ({
      inlineData: {
        mimeType: image.mime,
        data: image.base64
      }
    }))
  }

  /**
   * Implementation hook: convert accumulated contents to model-specific format.
   *
   * Хук реализации: преобразовать накопленное содержимое в формат, специфичный для модели.
   * @returns array of converted text parts / массив преобразованных текстовых частей
   */
  protected toContents(): any {
    return forEach(this.contents, content => ({
      text: content
    }))
  }

  /**
   * Performs content generation request and returns textual result.
   *
   * Выполняет запрос генерации контента и возвращает текстовый результат.
   * @param model model identifier / идентификатор модели
   * @param contents composed contents for generation / собранный контент для генерации
   * @returns generated text response / сгенерированный текстовый ответ
   */
  protected async response(
    model: string,
    contents: string
  ): Promise<string> {
    const response = await this.ai?.models.generateContent({
      model,
      contents: [
        ...this.toImages(),
        {
          parts: [
            ...this.toContents(),
            { text: contents }
          ]
        }
      ],
      config: this.config
    })

    return response?.text ?? ''
  }
}
