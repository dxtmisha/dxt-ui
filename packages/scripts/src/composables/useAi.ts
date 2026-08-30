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
 * Registry of AI provider factory functions keyed by provider type identifier.
 *
 * Реестр фабричных функций AI-провайдеров, индексированный по идентификатору типа провайдера.
 */
const AI_PROVIDER_REGISTRY = new Map<string, () => AiAbstract>([
  ['claude', () => new AiClaude()],
  ['claude-agent', () => new AiClaudeAgent()],
  ['claude-cli', () => new AiClaudeCli()],
  ['gemini', () => new AiGoogle()],
  ['gemini-cli', () => new AiGoogleCli()],
  ['openai', () => new AiOpenAi()],
  ['zai', () => new AiZAi()]
])

/**
 * Composable to resolve and instantiate the configured AI client provider.
 * Uses a registry-based lookup (Open-Closed Principle) to map provider type to its factory.
 *
 * Композабл для определения и инициализации настроенного провайдера клиента AI.
 * Использует реестр (принцип открытости-закрытости) для сопоставления типа провайдера с его фабрикой.
 * @returns initialized AI client instance or undefined if unrecognized / инициализированный экземпляр клиента AI или undefined, если тип не распознан
 */
export function useAi(): AiAbstract | undefined {
  const type = PropertiesConfig.getAiType()

  return AI_PROVIDER_REGISTRY.get(type)?.()
}
