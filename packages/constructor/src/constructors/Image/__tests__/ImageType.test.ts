// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { Icons } from '@dxtmisha/functional'
import { reactive, ref } from 'vue'
import { ImageType } from '../ImageType'
import { ImageTypeValue } from '../basicTypes'
import type { ImageProps } from '../props'
/** Component mounted state for type classification / Состояние монтирования компонента для определения типа */
const isMounted = ref(true)

describe('ImageType', () => {
  it.each([undefined, null, '', ' ', 0, false, {}, [], 'image:', 'image: '].map(value => ({ value })))('rejects unsupported or empty input %j', ({ value }) => {
    // Exercise runtime input from untyped callers / Проверяем входные данные нетипизированных потребителей
    expect(new ImageType({ value } as ImageProps, isMounted).get()).toBeUndefined()
  })

  it('respects registered icons before the default font type', () => {
    vi.spyOn(Icons, 'is').mockImplementation(value => value === 'registered_home')
    expect(new ImageType({ value: 'registered_home' }, isMounted).get()).toBe(ImageTypeValue.public)
    expect(new ImageType({ value: 'unknown_home' }, isMounted).get()).toBe(ImageTypeValue.outlined)
  })

  it.each([
    ['https://example.test/photo.png', ImageTypeValue.image],
    ['photo.png', ImageTypeValue.outlined],
    ['#fff', ImageTypeValue.color],
    ['flag-us', ImageTypeValue.flag],
    ['outlined-home', ImageTypeValue.outlined],
    ['two-tone-home', ImageTypeValue.twoTone],
    ['filled-home', ImageTypeValue.filled],
    ['round-home', ImageTypeValue.round],
    ['sharp-home', ImageTypeValue.sharp],
    ['material-home', ImageTypeValue.material],
    ['$home', ImageTypeValue.material],
    ['@home', ImageTypeValue.public],
    ['f-vn', ImageTypeValue.flagCompressed]
  ])('preserves the classification of %s', (value, expected) => {
    expect(new ImageType({ value }, isMounted).get()).toBe(expected)
  })

  it.each([
    'image:photo.png',
    'image:photo.png?token=test#preview',
    'image:https://example.test/photo.png',
    'image:outlined-home',
    'image:document.pdf'
  ])('recognizes an explicitly marked image source: %s', (value) => {
    expect(new ImageType({ value }, isMounted).get()).toBe(ImageTypeValue.image)
  })

  it('recognizes an explicit image source before client rendering is ready', () => {
    const mounted = ref(false)
    expect(new ImageType({ value: 'image:photo.png' }, mounted).get()).toBe(ImageTypeValue.image)
  })

  it('does not treat an empty explicit image source as an image or icon', () => {
    expect(new ImageType({ value: 'image:' }, isMounted).get()).toBeUndefined()
  })

  it('classifies PDF files before generic files', () => {
    const file = new File([], 'document.pdf', { type: 'application/pdf' })

    expect(new ImageType({ value: file }, isMounted).get()).toBe(ImageTypeValue.pdf)
  })

  it('preserves the generic type of image files', () => {
    const file = new File([], 'photo.png', { type: 'image/png' })

    expect(new ImageType({ value: file }, isMounted).get()).toBe(ImageTypeValue.file)
  })

  it.each([
    'document.pdf',
    '/document.pdf?token=test',
    '/document.pdf#page=2',
    'https://example.test/document.PDF?token=test#page=2'
  ])('classifies PDF links with viewer or query parameters: %s', (value) => {
    expect(new ImageType({ value }, isMounted).get()).toBe(ImageTypeValue.pdf)
  })

  it('does not interpret PDF names in an image query as a PDF source', () => {
    expect(new ImageType({ value: '/photo.png?file=document.pdf' }, isMounted).get())
      .toBe(ImageTypeValue.image)
  })

  it('preserves binary buffer classification', () => {
    expect(new ImageType({ value: new Uint8Array([1]) }, isMounted).get()).toBe(ImageTypeValue.array)
    expect(new ImageType({ value: new ArrayBuffer(1) }, isMounted).get()).toBe(ImageTypeValue.array)
  })

  it('updates the type when the reactive source changes from a PDF to an image', () => {
    const props = reactive<ImageProps>({ value: new File([], 'document.pdf', { type: 'application/pdf' }) })
    const type = new ImageType(props, isMounted)

    expect(type.get()).toBe(ImageTypeValue.pdf)
    props.value = '/photo.png'
    expect(type.get()).toBe(ImageTypeValue.image)
  })

  it.each([
    ['PDF File', new File([], 'document.pdf', { type: 'application/pdf' }), ImageTypeValue.pdf],
    ['image File', new File([], 'photo.png', { type: 'image/png' }), ImageTypeValue.file],
    ['Uint8Array', new Uint8Array([1]), ImageTypeValue.array],
    ['ArrayBuffer', new ArrayBuffer(1), ImageTypeValue.array]
  ] as const)('defers %s classification until client rendering is ready', (_, value, expected) => {
    const mounted = ref(false)
    const type = new ImageType({ value }, mounted)

    expect(type.get()).toBeUndefined()
    mounted.value = true
    expect(type.get()).toBe(expected)
  })
})
