import type { XaiProvider } from '@ai-sdk/xai'
import { forEach } from '@dxtmisha/functional-basic'

import { AiAbstract } from './AiAbstract'

/**
 * xAI (Grok) implementation of AiAbstract using @ai-sdk/xai and ai SDK.
 * Performs text generation requests via Grok models (e.g. grok-4.5).
 *
 * Реализация xAI (Grok) поверх AiAbstract с использованием @ai-sdk/xai и ai SDK.
 * Выполняет запросы генерации текста через модели Grok (например, grok-4.5).
 *
 * Responsibilities / Ответственности:
 * - Initialize xAI client provider / Инициализировать провайдер клиента xAI
 * - Execute generateText via Grok responses model / Выполнять generateText через модель ответов Grok
 */
export class AiZAiLite extends AiAbstract<XaiProvider> {
  /**
   * Initializes xAI client provider instance.
   *
   * Инициализирует экземпляр провайдера клиента xAI.
   */
  protected async init(): Promise<void> {
    const { createXai } = await import('@ai-sdk/xai')
    this.ai = createXai({
      apiKey: this.key
    })
  }

  /**
   * Implementation hook: convert accumulated images to model-specific format.
   *
   * Хук реализации: преобразовать накопленные изображения в формат, специфичный для модели.
   * @returns array of converted image blocks / массив преобразованных блоков изображений
   */
  protected toImages(): any[] {
    return forEach(this.images, image => ({
      type: 'image',
      image: `data:${image.mime};base64,${image.base64}`
    }))
  }

  /**
   * Implementation hook: convert accumulated contents to model-specific format.
   *
   * Хук реализации: преобразовать накопленное содержимое в формат, специфичный для модели.
   * @returns array of converted text blocks / массив преобразованных текстовых блоков
   */
  protected toContents(): any[] {
    return forEach(this.contents, content => ({
      type: 'text',
      text: content
    }))
  }

  /**
   * Performs content generation request using xAI responses model and returns textual result.
   *
   * Выполняет запрос генерации контента с использованием модели ответов xAI и возвращает текстовый результат.
   * @param model Model identifier (e.g., 'grok-4.5') / Идентификатор модели
   * @param contents Composed contents for generation / Собранный контент для генерации
   * @returns Generated text response / Сгенерированный текстовый ответ
   */
  protected async response(
    model: string,
    contents: string
  ): Promise<string> {
    const { generateText } = await import('ai')
    const { createXai } = await import('@ai-sdk/xai')
    const client = this.ai ?? createXai({ apiKey: this.key })
    const activeModel = model || 'grok-4.5'

    const { text } = await generateText({
      model: client.responses(activeModel as any),
      prompt: contents,
      ...this.config
    })

    return text ?? ''
  }
}
