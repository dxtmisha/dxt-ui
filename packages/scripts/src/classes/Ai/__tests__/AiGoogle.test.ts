import { afterEach, describe, expect, it, vi } from 'vitest'
import { AiGoogle } from '../AiGoogle'
import { AiGoogleLite } from '../AiGoogleLite'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'

class TestAiGoogleLite extends AiGoogleLite {
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

describe('AiGoogleLite and AiGoogle', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('converts images to Google inlineData format in toImages()', () => {
    const ai = new TestAiGoogleLite('test-key', 'gemini-2.5-pro')
    ai.addImage({ mime: 'image/png', base64: 'base64-png' })
    ai.addImage({ mime: 'image/jpeg', base64: 'base64-jpeg' })

    expect(ai.testToImages()).toEqual([
      {
        inlineData: {
          mimeType: 'image/png',
          data: 'base64-png'
        }
      },
      {
        inlineData: {
          mimeType: 'image/jpeg',
          data: 'base64-jpeg'
        }
      }
    ])
  })

  it('converts contents to Google parts format in toContents()', () => {
    const ai = new TestAiGoogleLite('test-key', 'gemini-2.5-pro')
    ai.addContent('Part 1')
    ai.addContent('Part 2')

    expect(ai.testToContents()).toEqual([
      { text: 'Part 1' },
      { text: 'Part 2' }
    ])
  })

  it('executes response method on models.generateContent and returns text', async () => {
    const ai = new TestAiGoogleLite('test-key', 'gemini-2.5-flash', { temperature: 0.3 })
    ai.addImage({ mime: 'image/webp', base64: 'webp-data' })
    ai.addContent('Context prompt')

    const mockGenerateContent = vi.fn().mockResolvedValue({
      text: 'Gemini generated content'
    })

    ai.setAiInstance({
      models: {
        generateContent: mockGenerateContent
      }
    })

    const result = await ai.testResponse('gemini-2.5-flash', 'User question')

    expect(mockGenerateContent).toHaveBeenCalledWith({
      model: 'gemini-2.5-flash',
      contents: [
        {
          inlineData: {
            mimeType: 'image/webp',
            data: 'webp-data'
          }
        },
        {
          parts: [
            { text: 'Context prompt' },
            { text: 'User question' }
          ]
        }
      ],
      config: { temperature: 0.3 }
    })
    expect(result).toBe('Gemini generated content')
  })

  it('returns empty string when response text is missing', async () => {
    const ai = new TestAiGoogleLite('test-key', 'gemini-2.5-flash')
    ai.setAiInstance({
      models: {
        generateContent: vi.fn().mockResolvedValue({})
      }
    })

    const result = await ai.testResponse('gemini-2.5-flash', 'Test')
    expect(result).toBe('')
  })

  it('initializes AiGoogle with credentials from PropertiesConfig', () => {
    vi.spyOn(PropertiesConfig, 'getAiKey').mockReturnValue('config-google-key')
    vi.spyOn(PropertiesConfig, 'getAiModel').mockReturnValue('gemini-2.5-flash')
    vi.spyOn(PropertiesConfig, 'getAiConfig').mockReturnValue({ temperature: 0.1 })

    const google = new AiGoogle()
    expect(google).toBeInstanceOf(AiGoogleLite)
  })
})
