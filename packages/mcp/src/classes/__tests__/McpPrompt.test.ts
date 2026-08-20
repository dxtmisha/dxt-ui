import { describe, expect, it } from 'vitest'
import { McpPrompt } from '../McpPrompt'
import type { McpPromptItem } from '../../types/McpTypes'

describe('McpPrompt', () => {
  const samplePrompt: McpPromptItem = {
    name: 'review_code',
    description: 'Generates a code review prompt',
    arguments: [
      {
        name: 'code',
        description: 'Source code to review',
        required: true
      }
    ],
    handler: (args: Record<string, unknown>) => {
      const code = String(args.code ?? '')
      return `Please review the following code:\n\`\`\`\n${code}\n\`\`\``
    }
  }

  it('initializes with prompt item or array', () => {
    const promptManager = new McpPrompt(samplePrompt)
    expect(promptManager.getItems()).toHaveLength(1)
    expect(promptManager.hasItem('review_code')).toBe(true)
    expect(promptManager.getItem('review_code')?.description).toBe('Generates a code review prompt')
  })

  it('executes prompt handler and formats string return into GetPromptResult', async () => {
    const promptManager = new McpPrompt(samplePrompt)
    const promptResult = await promptManager.execute('review_code', { code: 'const x = 1;' })

    expect(promptResult.description).toBe('Generates a code review prompt')
    expect(promptResult.messages).toHaveLength(1)
    expect(promptResult.messages[0].role).toBe('user')
    expect(promptResult.messages[0].content).toEqual({
      type: 'text',
      text: 'Please review the following code:\n```\nconst x = 1;\n```'
    })
  })

  it('handles message array return format correctly', async () => {
    const multiMessagePrompt: McpPromptItem = {
      name: 'dialogue',
      handler: () => [
        { role: 'user', content: 'Hello' },
        { role: 'assistant', content: 'Hi there!' }
      ]
    }

    const promptManager = new McpPrompt(multiMessagePrompt)
    const result = await promptManager.execute('dialogue')

    expect(result.messages).toHaveLength(2)
    expect(result.messages[0].role).toBe('user')
    expect(result.messages[0].content).toEqual({ type: 'text', text: 'Hello' })
    expect(result.messages[1].role).toBe('assistant')
    expect(result.messages[1].content).toEqual({ type: 'text', text: 'Hi there!' })
  })

  it('handles execution error gracefully', async () => {
    const errorPrompt: McpPromptItem = {
      name: 'error_prompt',
      handler: () => {
        throw new Error('Prompt failure')
      }
    }

    const promptManager = new McpPrompt(errorPrompt)
    const result = await promptManager.execute('error_prompt')

    expect(result.messages[0].content).toEqual({
      type: 'text',
      text: 'Prompt failure'
    })
  })
})
