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
  describe('Standard functional requirements (Happy path)', () => {
    it.each([
      ['https://example.test/photo.png', ImageTypeValue.image],
      ['/assets/photo.png', ImageTypeValue.image],
      ['photo.png', ImageTypeValue.outlined],
      ['#fff', ImageTypeValue.color],
      ['#123456', ImageTypeValue.color],
      ['flag-us', ImageTypeValue.flag],
      ['flag-vn', ImageTypeValue.flag],
      ['f-vn', ImageTypeValue.flagCompressed],
      ['outlined-home', ImageTypeValue.outlined],
      ['two-tone-home', ImageTypeValue.twoTone],
      ['filled-home', ImageTypeValue.filled],
      ['round-home', ImageTypeValue.round],
      ['sharp-home', ImageTypeValue.sharp],
      ['material-home', ImageTypeValue.material],
      ['$home', ImageTypeValue.material],
      ['@home', ImageTypeValue.public]
    ])('should classify %s as %s', (value, expected) => {
      expect(new ImageType({ value }, isMounted).get()).toBe(expected)
    })

    it.each([
      'image:photo.png',
      'image:photo.png?token=test#preview',
      'image:https://example.test/photo.png',
      'image:outlined-home',
      'image:document.pdf'
    ])('should recognize an explicitly marked image source: %s', (value) => {
      expect(new ImageType({ value }, isMounted).get()).toBe(ImageTypeValue.image)
    })

    it('should preserve binary buffer classification for Uint8Array and ArrayBuffer', () => {
      expect(new ImageType({ value: new Uint8Array([1]) }, isMounted).get()).toBe(ImageTypeValue.array)
      expect(new ImageType({ value: new ArrayBuffer(1) }, isMounted).get()).toBe(ImageTypeValue.array)
    })
  })

  describe('Precedence rules and pattern boundaries', () => {
    it('should respect registered Icons.is() before falling back to the default outlined font type', () => {
      vi.spyOn(Icons, 'is').mockImplementation(value => value === 'registered_home')

      expect(new ImageType({ value: 'registered_home' }, isMounted).get()).toBe(ImageTypeValue.public)
      expect(new ImageType({ value: 'unknown_home' }, isMounted).get()).toBe(ImageTypeValue.outlined)
    })

    it('should classify PDF files before generic File instances', () => {
      const pdfFile = new File([], 'document.pdf', { type: 'application/pdf' })
      const imageFile = new File([], 'photo.png', { type: 'image/png' })

      expect(new ImageType({ value: pdfFile }, isMounted).get()).toBe(ImageTypeValue.pdf)
      expect(new ImageType({ value: imageFile }, isMounted).get()).toBe(ImageTypeValue.file)
    })

    it.each([
      'document.pdf',
      '/document.pdf?token=test',
      '/document.pdf#page=2',
      'https://example.test/document.PDF?token=test#page=2'
    ])('should classify PDF links with viewer or query parameters before generic URLs: %s', (value) => {
      expect(new ImageType({ value }, isMounted).get()).toBe(ImageTypeValue.pdf)
    })

    it('should not interpret PDF names inside an image query string as a PDF source', () => {
      expect(new ImageType({ value: '/photo.png?file=document.pdf' }, isMounted).get())
        .toBe(ImageTypeValue.image)
    })

    it.each([
      'flag-usa',
      'flag-US',
      'flag-12',
      'f-vnm',
      'f-VN',
      'f-12'
    ])('should fall back to outlined icon when flag code %s does not match exact two-lowercase-letter syntax', (value) => {
      expect(new ImageType({ value }, isMounted).get()).toBe(ImageTypeValue.outlined)
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it.each([
      undefined,
      null,
      '',
      ' ',
      '\t\n',
      0,
      false,
      {},
      [],
      'image:',
      'image: '
    ].map(value => ({ value })))('should return undefined for unsupported or empty input %j', ({ value }) => {
      // Exercise runtime input from untyped callers / Проверяем входные данные нетипизированных потребителей
      expect(new ImageType({ value } as ImageProps, isMounted).get()).toBeUndefined()
    })
  })

  describe('SSR / unmounted state vs mounted client state and reactivity', () => {
    it('should recognize an explicit image: source even before client mounting', () => {
      const mounted = ref(false)
      expect(new ImageType({ value: 'image:photo.png' }, mounted).get()).toBe(ImageTypeValue.image)
    })

    it.each([
      ['PDF File', new File([], 'document.pdf', { type: 'application/pdf' }), ImageTypeValue.pdf],
      ['image File', new File([], 'photo.png', { type: 'image/png' }), ImageTypeValue.file],
      ['Uint8Array', new Uint8Array([1]), ImageTypeValue.array],
      ['ArrayBuffer', new ArrayBuffer(1), ImageTypeValue.array]
    ] as const)('should defer %s classification until client rendering is mounted', (_, value, expected) => {
      const mounted = ref(false)
      const type = new ImageType({ value }, mounted)

      expect(type.get()).toBeUndefined()
      mounted.value = true
      expect(type.get()).toBe(expected)
    })

    it('should reactively update the type when the source changes from a PDF File to an image URL', () => {
      const props = reactive<ImageProps>({ value: new File([], 'document.pdf', { type: 'application/pdf' }) })
      const type = new ImageType(props, isMounted)

      expect(type.get()).toBe(ImageTypeValue.pdf)
      props.value = '/photo.png'
      expect(type.get()).toBe(ImageTypeValue.image)
    })
  })
})
