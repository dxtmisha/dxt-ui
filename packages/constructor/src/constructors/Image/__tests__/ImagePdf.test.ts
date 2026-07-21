// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ImagePdf } from '../ImagePdf'

describe('ImagePdf', () => {
  it('should identify pdf extension and mime types', () => {
    expect(ImagePdf.isPdf('doc.pdf')).toBe(true)
    expect(ImagePdf.isPdf('doc.png')).toBe(false)
    expect(ImagePdf.isPdf(new File([], 'doc.pdf', { type: 'application/pdf' }))).toBe(true)
  })

  it('should generate pdf path url strings', async () => {
    const res = await ImagePdf.get('http://path/to/doc.pdf')
    expect(res).toBe('http://path/to/doc.pdf#toolbar=0&scrollbar=1')
  })
})
