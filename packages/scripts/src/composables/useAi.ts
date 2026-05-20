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
 * Composable to obtain an AI instance based on configuration.
 *
 * Композабл для получения экземпляра AI на основе конфигурации.
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
