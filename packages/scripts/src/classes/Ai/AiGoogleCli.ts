import { getConfigAi } from '../../functions/getConfigAi'
import { AiGoogleCliLite } from './AiGoogleCliLite'

/**
 * Google AI (Gemini) implementation via CLI.
 * Extends AiGoogleCliLite and provides configuration from the project environment.
 *
 * Реализация Google AI (Gemini) через CLI.
 * Расширяет AiGoogleCliLite и предоставляет конфигурацию из окружения проекта.
 *
 * Responsibilities / Ответственности:
 * - Provide API key and model from config / Предоставить API ключ и модель из конфигурации
 * - Initialize CLI wrapper / Инициализировать обертку CLI
 *
 * Notes / Примечания:
 * - Uses getConfigAi() to retrieve credentials / Использует getConfigAi() для получения учетных данных
 */
export class AiGoogleCli extends AiGoogleCliLite {
  constructor() {
    super(
      ...getConfigAi()
    )
  }
}
