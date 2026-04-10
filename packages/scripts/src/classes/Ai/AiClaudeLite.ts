import { forEach } from '@dxtmisha/functional-basic'
import { AiAbstract } from './AiAbstract'
import { Anthropic } from '@anthropic-ai/sdk'

/**
 * Claude AI implementation of AiAbstract.
 * Initializes Anthropic client and performs text generation requests.
 *
 * Реализация Claude AI поверх AiAbstract.
 * Инициализирует клиент Anthropic и выполняет запросы генерации текста.
 *
 * Responsibilities / Ответственности:
 * - Provide API key / Предоставить API ключ
 * - Initialize Anthropic client / Инициализировать клиент Anthropic
 * - Call messages.create and extract text content / Вызвать messages.create и извлечь текст
 *
 * Notes / Примечания:
 * - Model must be set via setModel() before generate() / Модель нужно задать через setModel()
 * - Returns empty string if response is missing / Возвращает пустую строку при отсутствии результата
 */
export class AiClaudeLite extends AiAbstract<Anthropic> {
  /**
   * Initializes Anthropic client instance.
   *
   * Инициализирует экземпляр клиента Anthropic.
   */
  protected init(): void {
    this.ai = new Anthropic({
      apiKey: this.key
    })
  }

  /**
   * Implementation hook: convert accumulated images to model-specific format.
   * Claude expects images as content blocks with type 'image'.
   *
   * Хук реализации: преобразовать накопленные изображения в формат, специфичный для модели.
   * Claude ожидает изображения как блоки контента с типом 'image'.
   */
  protected toImages(): any {
    return forEach(this.images, image => ({
      type: 'image',
      source: {
        type: 'base64',
        media_type: image.mime,
        data: image.base64
      }
    }))
  }

  /**
   * Implementation hook: convert accumulated contents to model-specific format.
   * Claude expects text as content blocks with type 'text'.
   *
   * Хук реализации: преобразовать накопленное содержимое в формат, специфичный для модели.
   * Claude ожидает текст как блоки контента с типом 'text'.
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
   * @param model Model identifier (e.g., 'claude-3-5-sonnet-20241022') / Идентификатор модели
   * @param contents Composed contents for generation / Собранный контент для генерации
   */
  protected async response(
    model: string,
    contents: string
  ): Promise<string> {
    const message = await this.ai?.messages.create({
      model,
      max_tokens: this.config.maxTokens ?? 4096,
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

    // Extract text from content blocks
    const textContent = message?.content
      ?.filter(block => block.type === 'text')
      .map(block => 'text' in block ? block.text : '')
      .join('\n')

    return textContent ?? ''
  }
}
