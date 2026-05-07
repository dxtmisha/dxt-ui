import { describe, it, expect, vi, beforeEach } from 'vitest'
import { FigmaAiText } from '../FigmaAiText'

describe('FigmaAiText', () => {
  let mockAi: any
  let mockData: any

  beforeEach(() => {
    mockAi = {
      resetImages: vi.fn(),
      addImage: vi.fn(),
      getImages: vi.fn().mockReturnValue([]),
      generate: vi.fn().mockResolvedValue('generated text')
    }
    mockData = {
      screenshot: [new Uint8Array([1, 2, 3])],
      texts: [{ text: 'Source Text', id: ['1'] }]
    }
  })

  it('make() should reset images, add new ones and generate text', async () => {
    const aiText = new FigmaAiText(mockAi, mockData)
    await aiText.make()

    expect(mockAi.resetImages).toHaveBeenCalled()
    expect(mockAi.addImage).toHaveBeenCalledWith(expect.objectContaining({
      mime: expect.any(String),
      base64: expect.any(String)
    }))
    expect(mockAi.generate).toHaveBeenCalled()
  })
})
