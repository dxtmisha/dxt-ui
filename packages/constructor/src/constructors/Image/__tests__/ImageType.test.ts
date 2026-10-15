// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { reactive, ref } from 'vue'
import { ImageType } from '../ImageType'
import { ImageTypeValue } from '../basicTypes'
import type { ImageProps } from '../props'
import type { ClientOnlyInclude } from '../../../classes/ClientOnlyInclude'

/** Client rendering dependency for type classification / Зависимость клиентского рендеринга для определения типа */
const clientOnly = {
  isRender: (): boolean => true
} as unknown as ClientOnlyInclude

describe('ImageType', () => {
  it.each([
    ['https://example.test/photo.png', ImageTypeValue.image],
    ['photo.png', ImageTypeValue.outlined],
    ['#fff', ImageTypeValue.color],
    ['flag-us', ImageTypeValue.flag],
    ['outlined-home', ImageTypeValue.outlined],
    ['two-tone-home', ImageTypeValue.twoTone],
    ['filled-home', ImageTypeValue.filled]
  ])('preserves the classification of %s', (value, expected) => {
    expect(new ImageType({ value }, clientOnly).item.value).toBe(expected)
  })

  it.each([
    'image:photo.png',
    'image:photo.png?token=test#preview',
    'image:https://example.test/photo.png',
    'image:outlined-home',
    'image:document.pdf'
  ])('recognizes an explicitly marked image source: %s', (value) => {
    expect(new ImageType({ value }, clientOnly).item.value).toBe(ImageTypeValue.image)
  })

  it('recognizes an explicit image source before client rendering is ready', () => {
    const client = { isRender: (): boolean => false } as unknown as ClientOnlyInclude
    expect(new ImageType({ value: 'image:photo.png' }, client).item.value).toBe(ImageTypeValue.image)
  })

  it('does not treat an empty explicit image source as an image or icon', () => {
    expect(new ImageType({ value: 'image:' }, clientOnly).item.value).toBeUndefined()
  })

  it('classifies PDF files before generic files', () => {
    const file = new File([], 'document.pdf', { type: 'application/pdf' })

    expect(new ImageType({ value: file }, clientOnly).item.value).toBe(ImageTypeValue.pdf)
  })

  it('preserves the generic type of image files', () => {
    const file = new File([], 'photo.png', { type: 'image/png' })

    expect(new ImageType({ value: file }, clientOnly).item.value).toBe(ImageTypeValue.file)
  })

  it.each([
    'document.pdf',
    '/document.pdf?token=test',
    '/document.pdf#page=2',
    'https://example.test/document.PDF?token=test#page=2'
  ])('classifies PDF links with viewer or query parameters: %s', (value) => {
    expect(new ImageType({ value }, clientOnly).item.value).toBe(ImageTypeValue.pdf)
  })

  it('does not interpret PDF names in an image query as a PDF source', () => {
    expect(new ImageType({ value: '/photo.png?file=document.pdf' }, clientOnly).item.value)
      .toBe(ImageTypeValue.image)
  })

  it('preserves binary buffer classification', () => {
    expect(new ImageType({ value: new Uint8Array([1]) }, clientOnly).item.value).toBe(ImageTypeValue.array)
    expect(new ImageType({ value: new ArrayBuffer(1) }, clientOnly).item.value).toBe(ImageTypeValue.array)
  })

  it('updates the type when the reactive source changes from a PDF to an image', () => {
    const props = reactive<ImageProps>({ value: new File([], 'document.pdf', { type: 'application/pdf' }) })
    const type = new ImageType(props, clientOnly)

    expect(type.item.value).toBe(ImageTypeValue.pdf)
    props.value = '/photo.png'
    expect(type.item.value).toBe(ImageTypeValue.image)
  })

  it('defers PDF File classification until client rendering is ready', () => {
    const isClientReady = ref(false)
    const client = { isRender: (): boolean => isClientReady.value } as unknown as ClientOnlyInclude
    const file = new File([], 'document.pdf', { type: 'application/pdf' })
    const type = new ImageType({ value: file }, client)

    expect(type.item.value).toBeUndefined()
    isClientReady.value = true
    expect(type.item.value).toBe(ImageTypeValue.pdf)
  })
})
