import { describe, it, expect, vi, beforeEach } from 'vitest'
import { FigmaAiText } from '../FigmaAiText'
import { FIGMA_IMAGE_TYPE } from '../../config'

describe('FigmaAiText', () => {
  let mockAi: any
  let mockData: any

  beforeEach(() => {
    mockAi = {
      resetImages: vi.fn(),
      addImage: vi.fn(),
      getImages: vi.fn().mockReturnValue([]),
      generate: vi.fn().mockResolvedValue('generated response')
    }
    mockData = {
      screenshot: [new Uint8Array([1, 2, 3]), new Uint8Array([4, 5, 6])],
      texts: [
        { text: 'Source Text 1', id: ['1'] },
        { text: 'Source Text 2', id: ['2'] }
      ]
    }
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('make() should reset images, attach encoded screenshots, call ai.generate, and return this', async () => {
      const aiText = new FigmaAiText(mockAi, mockData)
      const result = await aiText.make()

      expect(result).toBe(aiText)
      expect(mockAi.resetImages).toHaveBeenCalledTimes(1)
      expect(mockAi.addImage).toHaveBeenCalledTimes(2)
      expect(mockAi.addImage).toHaveBeenCalledWith({
        mime: FIGMA_IMAGE_TYPE,
        base64: expect.any(String)
      })
      expect(mockAi.generate).toHaveBeenCalledWith(
        expect.stringContaining('Source Text 1\r\nSource Text 2')
      )
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should safely process empty screenshots and empty texts array', async () => {
      const emptyData = { screenshot: [], texts: [] }
      const aiText = new FigmaAiText(mockAi, emptyData as any)

      await aiText.make()

      expect(mockAi.resetImages).toHaveBeenCalled()
      expect(mockAi.addImage).not.toHaveBeenCalled()
      expect(mockAi.generate).toHaveBeenCalled()
    })

    it('should process a single screenshot and single text item', async () => {
      const singleData = {
        screenshot: [new Uint8Array([])],
        texts: [{ text: 'Single Item', id: ['id-1'] }]
      }
      const aiText = new FigmaAiText(mockAi, singleData as any)

      await aiText.make()

      expect(mockAi.addImage).toHaveBeenCalledTimes(1)
      expect(mockAi.addImage).toHaveBeenCalledWith({
        mime: FIGMA_IMAGE_TYPE,
        base64: ''
      })
      expect(mockAi.generate).toHaveBeenCalledWith(expect.stringContaining('Single Item'))
    })

    it('should propagate errors if ai.generate fails', async () => {
      mockAi.generate.mockRejectedValue(new Error('AI generation failed'))

      const aiText = new FigmaAiText(mockAi, mockData)

      await expect(aiText.make()).rejects.toThrow('AI generation failed')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should format multilingual text strings (Cyrillic, Vietnamese, Emoji) correctly', async () => {
      const multilingualData = {
        screenshot: [],
        texts: [
          { text: 'Привет, как дела?', id: ['ru'] },
          { text: 'Xin chào, bạn khỏe không?', id: ['vi'] },
          { text: 'Hello! 👋🚀', id: ['emoji'] }
        ]
      }
      const aiText = new FigmaAiText(mockAi, multilingualData as any)

      await aiText.make()

      expect(mockAi.generate).toHaveBeenCalledWith(
        expect.stringContaining('Привет, как дела?\r\nXin chào, bạn khỏe không?\r\nHello! 👋🚀')
      )
    })
  })
})
