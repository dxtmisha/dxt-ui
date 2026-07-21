// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ImageFile } from '../ImageFile'

describe('ImageFile', () => {
  it('should verify image files types', () => {
    const f1 = new File([], 'img.png', { type: 'image/png' })
    expect(ImageFile.isImage(f1)).toBe(true)

    const f2 = new File([], 'img.pdf', { type: 'application/pdf' })
    expect(ImageFile.isImage(f2)).toBe(false)
  })
})
