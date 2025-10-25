import { getConfigAi } from '../../functions/getConfigAi'
import { AiGoogleLite } from './AiGoogleLite'

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
export class AiGoogle extends AiGoogleLite {
  constructor() {
    super(
      ...getConfigAi()
    )
  }
}
