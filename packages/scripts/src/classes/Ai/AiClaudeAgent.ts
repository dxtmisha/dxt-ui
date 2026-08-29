import { getConfigAi } from '../../functions/getConfigAi'
import { AiClaudeAgentLite } from './AiClaudeAgentLite'

/**
 * Claude AI implementation via Agent SDK.
 * Automatically configured using project environment settings.
 *
 * Реализация Claude AI через Agent SDK.
 * Автоматически настраивается с использованием настроек окружения проекта.
 */
export class AiClaudeAgent extends AiClaudeAgentLite {
  /**
   * Constructor initializes Claude Agent AI with project configuration.
   *
   * Конструктор инициализирует Claude Agent AI с конфигурацией проекта.
   */
  constructor() {
    super(
      ...getConfigAi()
    )
  }
}
