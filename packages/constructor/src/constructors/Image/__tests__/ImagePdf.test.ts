// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ImagePdf } from '../ImagePdf'
import { ImageFile } from '../ImageFile'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('ImagePdf', () => {
  it('merges viewer parameters idempotently without corrupting encoded destinations', async () => {
    const source = '/document.pdf?token=a%23b#nameddest=A%26B&zoom=125'
    const prepared = await ImagePdf.get(source)
    expect(prepared).toBe('/document.pdf?token=a%23b#nameddest=A%26B&zoom=125&toolbar=0&scrollbar=1')
    expect(await ImagePdf.get(prepared)).toBe(prepared)
  })

  it('propagates rejected file reads through its returned promise', async () => {
    const failure = new Error('PDF read failed')
    vi.spyOn(ImageFile, 'getFileReader').mockRejectedValue(failure)
    await expect(ImagePdf.get(new File([], 'document.pdf', { type: 'application/pdf' }))).rejects.toBe(failure)
  })

  it.each([
    'document.pdf',
    'DOCUMENT.PDF',
    '/document.pdf',
    'https://example.test/document.pdf',
    '/document.pdf?token=test',
    '/document.pdf#page=2',
    '/document.PDF?token=test#page=2'
  ])('recognizes the PDF path in %s', (source) => {
    expect(ImagePdf.isPdf(source)).toBe(true)
  })

  it.each([
    undefined,
    '',
    'photo.png',
    '/photo.png?file=document.pdf',
    '/photo.png#document.pdf',
    '/document.pdf/preview.png'
  ])('rejects non-PDF paths in %s', (source) => {
    expect(ImagePdf.isPdf(source)).toBe(false)
  })

  it('recognizes PDF files by MIME type', () => {
    expect(ImagePdf.isPdf(new File([], 'document', { type: 'application/pdf' }))).toBe(true)
    expect(ImagePdf.isPdf(new File([], 'photo.png', { type: 'image/png' }))).toBe(false)
  })

  it.each([
    [
      '/document.pdf',
      '/document.pdf#toolbar=0&scrollbar=1'
    ],
    [
      '/document.pdf?token=test%2Fvalue',
      '/document.pdf?token=test%2Fvalue#toolbar=0&scrollbar=1'
    ],
    [
      '/document.pdf#page=2',
      '/document.pdf#page=2&toolbar=0&scrollbar=1'
    ],
    [
      '/document.pdf?token=test#page=2&zoom=100&nameddest=Chapter1',
      '/document.pdf?token=test#page=2&zoom=100&nameddest=Chapter1&toolbar=0&scrollbar=1'
    ],
    [
      '/document.pdf#',
      '/document.pdf#toolbar=0&scrollbar=1'
    ],
    [
      'https://example.test/document.pdf',
      'https://example.test/document.pdf#toolbar=0&scrollbar=1'
    ]
  ])('preserves the source and viewer options in %s', async (source, expected) => {
    expect(await ImagePdf.get(source)).toBe(expected)
  })

  it('overrides duplicate viewer defaults without adding another fragment', async () => {
    const source = await ImagePdf.get('/document.pdf#page=2&toolbar=1&toolbar=2&scrollbar=0')

    expect(source).toBe('/document.pdf#page=2&toolbar=0&scrollbar=1')
    expect(source.match(/#/g)).toHaveLength(1)
  })

  it('preserves the remaining fragment text after the first separator', async () => {
    const source = await ImagePdf.get('/document.pdf#nameddest=Chapter#Section')

    expect(source).toBe('/document.pdf#nameddest=Chapter%23Section&toolbar=0&scrollbar=1')
    expect(source.match(/#/g)).toHaveLength(1)
  })

  it('reads a PDF file and adds viewer parameters to the data URL', async () => {
    const file = new File([], 'document.pdf', { type: 'application/pdf' })
    const readFile = vi.spyOn(ImageFile, 'getFileReader').mockResolvedValue('data:application/pdf;base64,AA')

    expect(await ImagePdf.get(file)).toBe('data:application/pdf;base64,AA#toolbar=0&scrollbar=1')
    expect(readFile).toHaveBeenCalledExactlyOnceWith(file)
  })

  it('returns an empty source when reading a PDF file fails', async () => {
    const file = new File([], 'document.pdf', { type: 'application/pdf' })
    vi.spyOn(ImageFile, 'getFileReader').mockResolvedValue('')

    expect(await ImagePdf.get(file)).toBe('')
  })

  it('does not read unsupported files', async () => {
    const file = new File([], 'photo.png', { type: 'image/png' })
    const readFile = vi.spyOn(ImageFile, 'getFileReader')

    expect(await ImagePdf.get(file)).toBe('')
    expect(readFile).not.toHaveBeenCalled()
  })

  it('does not create viewer fragments for an empty source', async () => {
    expect(await ImagePdf.get('')).toBe('')
  })
})
