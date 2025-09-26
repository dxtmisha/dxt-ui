import { PropertiesConfig } from '../classes/Properties/PropertiesConfig'

import { AiAbstract } from '../classes/Ai/AiAbstract'
import { AiGoogle } from '../classes/Ai/AiGoogle'

/**
 * Composable to obtain an AI instance based on configuration.
 *
 * Композабл для получения экземпляра AI на основе конфигурации.
 */
export function useAi(): AiAbstract | undefined {
  const type = PropertiesConfig.getAiType()

  switch (type) {
    case 'gemini':
      return new AiGoogle()
  }

  return undefined
}
