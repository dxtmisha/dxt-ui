import { getConfigAi } from '../../functions/getConfigAi'
import { AiZAiLite } from './AiZAiLite'

/**
 * Z.ai (Zhipu AI) implementation extending AiZAiLite.
 * Automatically configured using project environment settings.
 *
 * Реализация Z.ai (Zhipu AI) расширяющая AiZAiLite.
 * Автоматически настраивается с использованием настроек окружения проекта.
 */
export class AiZAi extends AiZAiLite {
  /**
   * Constructor initializes Z.ai / xAI with project configuration.
   *
   * Конструктор инициализирует Z.ai / xAI с конфигурацией проекта.
   */
  constructor() {
    super(
      ...getConfigAi()
    )
  }
}
