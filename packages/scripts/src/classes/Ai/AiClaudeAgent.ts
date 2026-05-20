import { getConfigAi } from '../../functions/getConfigAi'
import { AiClaudeAgentLite } from './AiClaudeAgentLite'

/**
 * Claude AI implementation via Agent SDK.
 * Uses @anthropic-ai/claude-agent-sdk to interact with Claude as an agent.
 *
 * Реализация Claude AI через Agent SDK.
 */
export class AiClaudeAgent extends AiClaudeAgentLite {
  constructor() {
    super(
      ...getConfigAi()
    )
  }
}
