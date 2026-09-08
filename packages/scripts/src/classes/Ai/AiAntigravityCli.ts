import { getConfigAi } from '../../functions/getConfigAi'
import { AiAntigravityCliLite } from './AiAntigravityCliLite'

/**
 * Google Antigravity AI implementation via CLI (`agy`).
 * Extends AiAntigravityCliLite and provides configuration from the project environment.
 *
 * Реализация Google Antigravity AI через CLI (`agy`).
 * Расширяет AiAntigravityCliLite и предоставляет конфигурацию из окружения проекта.
 *
 * Responsibilities / Ответственности:
 * - Provide API key and model from config / Предоставить API ключ и модель из конфигурации
 * - Initialize CLI wrapper / Инициализировать обертку CLI
 *
 * Notes / Примечания:
 * - Uses getConfigAi() to retrieve credentials / Использует getConfigAi() для получения учетных данных
 */
export class AiAntigravityCli extends AiAntigravityCliLite {
  /**
   * Constructor initializes Antigravity CLI AI with project configuration.
   *
   * Конструктор инициализирует Antigravity CLI AI с конфигурацией проекта.
   */
  constructor() {
    super(
      ...getConfigAi()
    )
  }
}
