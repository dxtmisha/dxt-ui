import { afterEach, describe, expect, it, vi } from 'vitest'
import { AiOpenAi } from '../AiOpenAi'
import { AiOpenAiLite } from '../AiOpenAiLite'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'

class TestAiOpenAiLite extends AiOpenAiLite {
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

describe('AiOpenAiLite and AiOpenAi', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('converts images to OpenAI image_url blocks in toImages()', () => {
    const ai = new TestAiOpenAiLite('test-key', 'gpt-4o')
    ai.addImage({ mime: 'image/png', base64: 'abc123png' })
    ai.addImage({ mime: 'image/jpeg', base64: 'xyz789jpg' })

    expect(ai.testToImages()).toEqual([
      {
        type: 'image_url',
        image_url: {
          url: 'data:image/png;base64,abc123png'
        }
      },
      {
        type: 'image_url',
        image_url: {
          url: 'data:image/jpeg;base64,xyz789jpg'
        }
      }
    ])
  })

  it('converts contents to OpenAI text blocks in toContents()', () => {
    const ai = new TestAiOpenAiLite('test-key', 'gpt-4o')
    ai.addContent('Content A')
    ai.addContent('Content B')

    expect(ai.testToContents()).toEqual([
      { type: 'text', text: 'Content A' },
      { type: 'text', text: 'Content B' }
    ])
  })

  it('executes response method on chat.completions.create and returns content', async () => {
    const ai = new TestAiOpenAiLite('test-key', 'gpt-4o', { temperature: 0.5 })
    ai.addImage({ mime: 'image/png', base64: 'img-data' })
    ai.addContent('OpenAI context')

    const mockCreate = vi.fn().mockResolvedValue({
      choices: [
        {
          message: {
            content: 'OpenAI assistant response'
          }
        }
      ]
    })

    ai.setAiInstance({
      chat: {
        completions: {
          create: mockCreate
        }
      }
    })

    const result = await ai.testResponse('gpt-4o', 'User prompt')

    expect(mockCreate).toHaveBeenCalledWith({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: {
                url: 'data:image/png;base64,img-data'
              }
            },
            { type: 'text', text: 'OpenAI context' },
            { type: 'text', text: 'User prompt' }
          ]
        }
      ],
      temperature: 0.5
    })
    expect(result).toBe('OpenAI assistant response')
  })

  it('returns empty string when choices or content are missing', async () => {
    const ai = new TestAiOpenAiLite('test-key', 'gpt-4o')
    ai.setAiInstance({
      chat: {
        completions: {
          create: vi.fn().mockResolvedValue({})
        }
      }
    })

    const result = await ai.testResponse('gpt-4o', 'Test')
    expect(result).toBe('')
  })

  it('initializes AiOpenAi with credentials from PropertiesConfig', () => {
    vi.spyOn(PropertiesConfig, 'getAiKey').mockReturnValue('config-openai-key')
    vi.spyOn(PropertiesConfig, 'getAiModel').mockReturnValue('gpt-4o-mini')
    vi.spyOn(PropertiesConfig, 'getAiConfig').mockReturnValue({ max_tokens: 500 })

    const openai = new AiOpenAi()
    expect(openai).toBeInstanceOf(AiOpenAiLite)
  })
})
