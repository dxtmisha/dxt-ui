import { afterEach, describe, expect, it, vi } from 'vitest'
import { AiClaude } from '../AiClaude'
import { AiClaudeLite } from '../AiClaudeLite'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'

class TestAiClaudeLite extends AiClaudeLite {
  public testToImages() {
    return this.toImages()
  }

  public testToContents() {
    return this.toContents()
  }

  public testResponse(model: string, contents: string) {
    return this.response(model, contents)
  }

  public setAiInstance(ai: any) {
    this.ai = ai
  }
}

describe('AiClaudeLite and AiClaude', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('converts images to Anthropic image blocks in toImages()', () => {
    const ai = new TestAiClaudeLite('test-key', 'claude-3-5-sonnet-20241022')
    ai.addImage({ mime: 'image/png', base64: 'data-png' })
    ai.addImage({ mime: 'image/webp', base64: 'data-webp' })

    expect(ai.testToImages()).toEqual([
      {
        type: 'image',
        source: {
          type: 'base64',
          media_type: 'image/png',
          data: 'data-png'
        }
      },
      {
        type: 'image',
        source: {
          type: 'base64',
          media_type: 'image/webp',
          data: 'data-webp'
        }
      }
    ])
  })

  it('converts contents to Anthropic text blocks in toContents()', () => {
    const ai = new TestAiClaudeLite('test-key', 'claude-3-5-sonnet-20241022')
    ai.addContent('Block A')
    ai.addContent('Block B')

    expect(ai.testToContents()).toEqual([
      { type: 'text', text: 'Block A' },
      { type: 'text', text: 'Block B' }
    ])
  })

  it('executes response method and extracts text blocks', async () => {
    const ai = new TestAiClaudeLite('test-key', 'claude-3-5-sonnet-20241022', { maxTokens: 2048 })
    ai.addImage({ mime: 'image/png', base64: 'abc' })
    ai.addContent('Context block')

    const mockMessagesCreate = vi.fn().mockResolvedValue({
      content: [
        { type: 'text', text: 'First paragraph' },
        { type: 'image' }, // non-text block
        { type: 'text', text: 'Second paragraph' }
      ]
    })

    ai.setAiInstance({
      messages: {
        create: mockMessagesCreate
      }
    })

    const result = await ai.testResponse('claude-3-5-sonnet-20241022', 'User question')

    expect(mockMessagesCreate).toHaveBeenCalledWith(
      expect.objectContaining({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 2048,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image',
                source: {
                  type: 'base64',
                  media_type: 'image/png',
                  data: 'abc'
                }
              },
              { type: 'text', text: 'Context block' },
              { type: 'text', text: 'User question' }
            ]
          }
        ]
      })
    )
    expect(result).toBe('First paragraph\nSecond paragraph')
  })

  it('returns empty string when response content is empty or undefined', async () => {
    const ai = new TestAiClaudeLite('test-key', 'claude-3-5-sonnet-20241022')
    ai.setAiInstance({
      messages: {
        create: vi.fn().mockResolvedValue({})
      }
    })

    const result = await ai.testResponse('claude-3-5-sonnet-20241022', 'Test')
    expect(result).toBe('')
  })

  it('initializes AiClaude with credentials from PropertiesConfig', () => {
    vi.spyOn(PropertiesConfig, 'getAiKey').mockReturnValue('config-claude-key')
    vi.spyOn(PropertiesConfig, 'getAiModel').mockReturnValue('claude-3-haiku')
    vi.spyOn(PropertiesConfig, 'getAiConfig').mockReturnValue({ temperature: 0.2 })

    const claude = new AiClaude()
    expect(claude).toBeInstanceOf(AiClaudeLite)
  })
})
