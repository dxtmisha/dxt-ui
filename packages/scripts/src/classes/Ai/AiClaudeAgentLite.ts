import { query } from '@anthropic-ai/claude-agent-sdk'
import { AiAbstract } from './AiAbstract'

/**
 * Claude AI implementation via Agent SDK.
 * Uses @anthropic-ai/claude-agent-sdk to interact with Claude as an agent.
 *
 * Реализация Claude AI через Agent SDK.
 * Использует @anthropic-ai/claude-agent-sdk для взаимодействия с Claude в режиме агента.
 *
 * Responsibilities / Ответственности:
 * - Initialize Agent SDK client / Инициализировать Agent SDK клиент
 * - Execute query via Agent SDK / Выполнить запрос через Agent SDK
 * - Extract and return textual result / Извлечь и вернуть текстовый результат
 */
export class AiClaudeAgentLite extends AiAbstract<{}> {
  /**
   * Initializes the "client".
   * For Agent SDK, we mark it as initialized.
   */
  protected init(): void {
    this.ai = {}
  }

  /**
   * Implementation hook: convert accumulated images to model-specific format.
   * Agent SDK implementation logic for images can be added if supported by the SDK.
   */
  protected toImages(): any {
    return []
  }

  /**
   * Implementation hook: convert accumulated contents to model-specific format.
   */
  protected toContents(): any {
    return this.contents.join('\n\n')
  }

  /**
   * Performs content generation request via Agent SDK and returns textual result.
   *
   * @param model Model identifier / Идентификатор модели
   * @param contents Composed contents for generation / Собранный контент для генерации
   */
  protected async response(
    model: string,
    contents: string
  ): Promise<string> {
    const fullPrompt = [
      this.toContents(),
      contents
    ].filter(Boolean).join('\n\n')

    try {
      const q = query({
        prompt: fullPrompt,
        options: {
          model: model || undefined,
          env: {
            ...process.env,
            ANTHROPIC_API_KEY: this.key
          },
          permissionMode: 'acceptEdits', // Auto-accept file changes if any
          allowDangerouslySkipPermissions: true,
          ...this.config
        }
      })

      let lastResult = ''

      for await (const message of q) {
        if (message.type === 'result') {
          if (message.subtype === 'success') {
            lastResult = message.result
          }
        }
      }

      return lastResult.trim()
    } catch (error) {
      console.error('[AiClaudeAgent] Error:', error)
      return ''
    }
  }
}
