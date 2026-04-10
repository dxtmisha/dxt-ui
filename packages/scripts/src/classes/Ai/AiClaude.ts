import { getConfigAi } from '../../functions/getConfigAi'
import { AiClaudeLite } from './AiClaudeLite'

/**
 * Claude AI implementation of AiAbstract.
 * Initializes Anthropic client and performs text generation requests.
 *
 * Реализация Claude AI поверх AiAbstract.
 * Инициализирует клиент Anthropic и выполняет запросы генерации текста.
 *
 * Responsibilities / Ответственности:
 * - Provide API key / Предоставить API ключ
 * - Initialize low-level client / Инициализировать низкоуровневый клиент
 * - Call messages.create and extract plain text / Вызвать messages.create и извлечь текст
 *
 * Notes / Примечания:
 * - Model must be set via setModel() before generate() / Модель нужно задать через setModel()
 * - Returns empty string if response is missing / Возвращает пустую строку при отсутствии результата
 */
export class AiClaude extends AiClaudeLite {
  constructor() {
    super(
      ...getConfigAi()
    )
  }
}
