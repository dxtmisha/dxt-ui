import { afterEach, describe, expect, it, vi } from 'vitest'
import { DesignFigma } from '../DesignFigma'
import { FigmaApi } from '../../FigmaApi'

describe('DesignFigma', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('initializes FigmaApi with parameters and retrieves image URLs', async () => {
    const mockFileImages = vi.spyOn(FigmaApi.prototype, 'fileImages').mockResolvedValue({
      images: { '1:2': 'https://figma.com/image.svg' }
    } as any)

    const designFigma = new DesignFigma('file-key-123', '1:2', 'token-abc')
    const images = await designFigma.initImage()

    expect(mockFileImages).toHaveBeenCalledWith({
      ids: '1:2',
      format: 'svg',
      svg_outline_text: false,
      svg_include_id: true,
      svg_include_node_id: true
    })
    expect(images).toEqual({ '1:2': 'https://figma.com/image.svg' })
  })

  it('returns undefined when FigmaApi responds with error', async () => {
    vi.spyOn(FigmaApi.prototype, 'fileImages').mockResolvedValue({
      err: 'Not found',
      images: {}
    } as any)

    const designFigma = new DesignFigma('file-key-123', '1:2', 'token-abc')
    const images = await designFigma.initImage()

    expect(images).toBeUndefined()
  })
})
