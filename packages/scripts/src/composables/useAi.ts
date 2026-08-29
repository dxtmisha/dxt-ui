import { PropertiesConfig } from '../classes/Properties/PropertiesConfig'

import { AiAbstract } from '../classes/Ai/AiAbstract'
import { AiClaude } from '../classes/Ai/AiClaude'
import { AiClaudeAgent } from '../classes/Ai/AiClaudeAgent'
import { AiClaudeCli } from '../classes/Ai/AiClaudeCli'
import { AiGoogle } from '../classes/Ai/AiGoogle'
import { AiGoogleCli } from '../classes/Ai/AiGoogleCli'
import { AiOpenAi } from '../classes/Ai/AiOpenAi'
import { AiZAi } from '../classes/Ai/AiZAi'

/**
 * Composable to resolve and instantiate the configured AI client provider.
 * Reads the AI provider type from properties configuration and returns the corresponding client implementation.
 *
 * Композабл для определения и инициализации настроенного провайдера клиента AI.
 * Считывает тип AI-провайдера из конфигурации свойств и возвращает соответствующую реализацию клиента.
 * @returns initialized AI client instance or undefined if unrecognized / инициализированный экземпляр клиента AI или undefined, если тип не распознан
 */
export function useAi(): AiAbstract | undefined {
  const type = PropertiesConfig.getAiType()

  switch (type) {
    case 'claude':
      return new AiClaude()
    case 'claude-agent':
      return new AiClaudeAgent()
    case 'claude-cli':
      return new AiClaudeCli()
    case 'gemini':
      return new AiGoogle()
    case 'gemini-cli':
      return new AiGoogleCli()
    case 'openai':
      return new AiOpenAi()
    case 'zai':
      return new AiZAi()
  }

  return undefined
}
