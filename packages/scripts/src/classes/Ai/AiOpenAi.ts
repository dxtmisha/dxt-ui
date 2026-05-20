import { AiOpenAiLite } from './AiOpenAiLite'
import { getConfigAi } from '../../functions/getConfigAi'

/**
 * OpenAI implementation of AiAbstract.
 * Initializes OpenAI client and performs text generation requests.
 *
 * Реализация OpenAI поверх AiAbstract.
 * Инициализирует клиент OpenAI и выполняет запросы генерации текста.
 *
 * Responsibilities / Ответственности:
 * - Provide API key / Предоставить API ключ
 * - Initialize low-level client / Инициализировать низкоуровневый клиент
 * - Call chat.completions.create and extract plain text / Вызвать chat.completions.create и извлечь текст
 *
 * Notes / Примечания:
 * - Model must be set via setModel() before generate() / Модель нужно задать через setModel()
 * - Returns empty string if response is missing / Возвращает пустую строку при отсутствии результата
 */
export class AiOpenAi extends AiOpenAiLite {
  constructor() {
    super(
      ...getConfigAi()
    )
  }
}
