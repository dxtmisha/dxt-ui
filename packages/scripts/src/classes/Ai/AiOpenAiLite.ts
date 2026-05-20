import { OpenAI } from 'openai'
import { forEach } from '@dxtmisha/functional-basic'

import { AiAbstract } from './AiAbstract'

/**
 * OpenAI implementation of AiAbstract.
 * Initializes OpenAI client and performs text generation requests.
 *
 * Реализация OpenAI поверх AiAbstract.
 * Инициализирует клиент OpenAI и выполняет запросы генерации текста.
 *
 * Responsibilities / Ответственности:
 * - Provide API key / Предоставить API ключ
 * - Initialize OpenAI client / Инициализировать клиент OpenAI
 * - Call chat.completions.create and extract text content / Вызвать chat.completions.create и извлечь текст
 *
 * Notes / Примечания:
 * - Model must be set via setModel() before generate() / Модель нужно задать через setModel()
 * - Returns empty string if response is missing / Возвращает пустую строку при отсутствии результата
 */
export class AiOpenAiLite extends AiAbstract<OpenAI> {
  /**
   * Initializes OpenAI client instance.
   *
   * Инициализирует экземпляр клиента OpenAI.
   */
  protected init(): void {
    this.ai = new OpenAI({
      apiKey: this.key
    })
  }

  /**
   * Implementation hook: convert accumulated images to model-specific format.
   * OpenAI expects images as content blocks with type 'image_url'.
   *
   * Хук реализации: преобразовать накопленные изображения в формат, специфичный для модели.
   * OpenAI ожидает изображения как блоки контента с типом 'image_url'.
   */
  protected toImages(): any {
    return forEach(this.images, image => ({
      type: 'image_url',
      image_url: {
        url: `data:${image.mime};base64,${image.base64}`
      }
    }))
  }

  /**
   * Implementation hook: convert accumulated contents to model-specific format.
   * OpenAI expects text as content blocks with type 'text'.
   *
   * Хук реализации: преобразовать накопленное содержимое в формат, специфичный для модели.
   * OpenAI ожидает текст как блоки контента с типом 'text'.
   */
  protected toContents(): any {
    return forEach(this.contents, content => ({
      type: 'text',
      text: content
    }))
  }

  /**
   * Performs content generation request and returns textual result.
   *
   * Выполняет запрос генерации контента и возвращает текстовый результат.
   * @param model Model identifier (e.g., 'gpt-4o') / Идентификатор модели
   * @param contents Composed contents for generation / Собранный контент для генерации
   */
  protected async response(
    model: string,
    contents: string
  ): Promise<string> {
    console.log('asd', this.ai?.baseURL, JSON.stringify({
      model,
      messages: [
        {
          role: 'user',
          content: [
            ...this.toImages(),
            ...this.toContents(),
            { type: 'text', text: contents }
          ]
        }
      ],
      ...this.config
    }))

    const response = await this.ai?.chat.completions.create({
      model,
      messages: [
        {
          role: 'user',
          content: [
            ...this.toImages(),
            ...this.toContents(),
            { type: 'text', text: contents }
          ]
        }
      ],
      ...this.config
    })

    return response?.choices?.[0]?.message?.content ?? ''
  }
}
