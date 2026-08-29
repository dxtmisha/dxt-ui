import { afterEach, describe, expect, it, vi } from 'vitest'
import { AiZAi } from '../AiZAi'
import { AiZAiLite } from '../AiZAiLite'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'

class TestAiZAiLite extends AiZAiLite {
  public testToImages() {
    return this.toImages()
  }

  public testToContents() {
    return this.toContents()
  }

  public setAiInstance(ai: any) {
    this.ai = ai
  }
}

describe('AiZAiLite and AiZAi', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('converts images to xAI image blocks in toImages()', () => {
    const ai = new TestAiZAiLite('test-key', 'grok-4.5')
    ai.addImage({ mime: 'image/png', base64: 'png-bytes' })
    ai.addImage({ mime: 'image/webp', base64: 'webp-bytes' })

    expect(ai.testToImages()).toEqual([
      {
        type: 'image',
        image: 'data:image/png;base64,png-bytes'
      },
      {
        type: 'image',
        image: 'data:image/webp;base64,webp-bytes'
      }
    ])
  })

  it('converts contents to text blocks in toContents()', () => {
    const ai = new TestAiZAiLite('test-key', 'grok-4.5')
    ai.addContent('Grok prompt 1')
    ai.addContent('Grok prompt 2')

    expect(ai.testToContents()).toEqual([
      { type: 'text', text: 'Grok prompt 1' },
      { type: 'text', text: 'Grok prompt 2' }
    ])
  })

  it('initializes AiZAi with credentials from PropertiesConfig', () => {
    vi.spyOn(PropertiesConfig, 'getAiKey').mockReturnValue('config-xai-key')
    vi.spyOn(PropertiesConfig, 'getAiModel').mockReturnValue('grok-4.5')
    vi.spyOn(PropertiesConfig, 'getAiConfig').mockReturnValue({})

    const zai = new AiZAi()
    expect(zai).toBeInstanceOf(AiZAiLite)
  })
})
