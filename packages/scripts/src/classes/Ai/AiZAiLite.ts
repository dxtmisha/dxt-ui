import { OpenAI } from 'openai'
import { AiOpenAiLite } from './AiOpenAiLite'

/**
 * Z.ai (Zhipu AI) implementation extending AiOpenAiLite.
 * Performs requests to the OpenAI-compatible Z.ai endpoint.
 *
 * Реализация Z.ai (Zhipu AI) расширяющая AiOpenAiLite.
 * Выполняет запросы к OpenAI-совместимому эндпоинту Z.ai.
 *
 * Responsibilities / Ответственности:
 * - Initialize OpenAI client with Z.ai baseURL / Инициализировать клиент OpenAI с baseURL Z.ai
 */
export class AiZAiLite extends AiOpenAiLite {
  /**
   * Initializes OpenAI client instance configured for Z.ai.
   *
   * Инициализирует экземпляр клиента OpenAI, настроенный для Z.ai.
   */
  protected override init(): void {
    this.ai = new OpenAI({
      apiKey: this.key,
      baseURL: 'https://api.z.ai/api/paas/v4'
    })
  }
}
