import { getConfigAi } from '../../functions/getConfigAi'
import { AiClaudeCliLite } from './AiClaudeCliLite'

/**
 * Claude AI implementation via CLI.
 * Extends AiClaudeCliLite and provides configuration from the project environment.
 *
 * Реализация Claude AI через CLI.
 * Расширяет AiClaudeCliLite и предоставляет конфигурацию из окружения проекта.
 *
 * Responsibilities / Ответственности:
 * - Provide API key and model from config / Предоставить API ключ и модель из конфигурации
 * - Initialize CLI wrapper / Инициализировать обертку CLI
 *
 * Notes / Примечания:
 * - Uses getConfigAi() to retrieve credentials / Использует getConfigAi() для получения учетных данных
 */
export class AiClaudeCli extends AiClaudeCliLite {
  constructor() {
    super(
      ...getConfigAi()
    )
  }
}
