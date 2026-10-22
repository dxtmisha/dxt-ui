// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { computed, reactive, ref } from 'vue'
import { ImageText } from '../ImageText'
import { ImageType } from '../ImageType'
import { ImageTypeValue } from '../basicTypes'
import type { ImageData } from '../ImageData'
import type { ImageProps } from '../props'

describe('ImageText', () => {
  /** Component mounted state for type classification / Состояние монтирования компонента для определения типа */
  const isMounted = ref(true)

  /**
   * Creates an ImageText helper instance with controlled image data.
   *
   * Создаёт экземпляр помощника ImageText с управляемыми данными изображения.
   * @param props image properties / свойства изображения
   * @param imageValue resolved data value / разрешённое значение данных
   * @returns ImageText helper instance / экземпляр помощника ImageText
   */
  const createHelper = (props: ImageProps, imageValue?: unknown): ImageText => {
    const type = new ImageType(props, isMounted)
    const mockData = {
      image: computed(() => imageValue)
    } as unknown as ImageData

    return new ImageText(props, () => type, () => mockData)
  }

  describe('Static type guards (is and isIcon)', () => {
    it.each([
      [ImageTypeValue.filled, true, true],
      [ImageTypeValue.outlined, true, true],
      [ImageTypeValue.round, true, true],
      [ImageTypeValue.sharp, true, true],
      [ImageTypeValue.twoTone, true, true],
      [ImageTypeValue.material, true, true],
      [ImageTypeValue.flagCompressed, true, false],
      [ImageTypeValue.pdf, true, false],
      [ImageTypeValue.image, false, false],
      [ImageTypeValue.file, false, false],
      [ImageTypeValue.array, false, false],
      [ImageTypeValue.flag, false, false],
      [ImageTypeValue.color, false, false],
      [ImageTypeValue.public, false, false],
      [ImageTypeValue.icon, false, false],
      [undefined, false, false]
    ] as const)('should classify %s with ImageText.is()=%s and ImageText.isIcon()=%s', (type, expectedIs, expectedIsIcon) => {
      expect(ImageText.is(type)).toBe(expectedIs)
      expect(ImageText.isIcon(type)).toBe(expectedIsIcon)
    })
  })

  describe('Standard functional requirements (Happy path)', () => {
    it.each([
      ['$home', 'home'],
      ['material-home', 'home'],
      ['filled-home', 'home'],
      ['outlined-home', 'home'],
      ['round-home', 'home'],
      ['sharp-home', 'home'],
      ['two-tone-home', 'home'],
      ['$account_circle', 'account_circle'],
      ['home', 'home'],
      ['f-vn', 'VN'],
      ['f-us', 'US']
    ])('should prepare display text for %s as %s', (value, expected) => {
      const helper = createHelper({ value })
      expect(helper.get()).toBe(expected)
    })

    it('should return the PDF viewer URL when type is PDF and image data is a string', () => {
      const pdfUrl = '/document.pdf?token=test#page=2&toolbar=0&scrollbar=1'
      const helper = createHelper({ value: 'document.pdf' }, pdfUrl)
      expect(helper.get()).toBe(pdfUrl)
    })
  })

  describe('Boundary values and prefix stripping', () => {
    it.each([
      ['filled-filled-home', 'filled-home'],
      ['outlined-round-star', 'round-star'],
      ['$$home', '$home']
    ])('should strip only the single leading icon prefix from %s to produce %s', (value, expected) => {
      const helper = createHelper({ value })
      expect(helper.get()).toBe(expected)
    })

    it('should return undefined when type is PDF but data().image.value is not a string', () => {
      const helperUndefined = createHelper({ value: 'document.pdf' }, undefined)
      expect(helperUndefined.get()).toBeUndefined()

      const helperObject = createHelper({ value: 'document.pdf' }, { src: '/doc.pdf', width: 100, height: 100 })
      expect(helperObject.get()).toBeUndefined()
    })
  })

  describe('Empty, whitespace-only, and non-text inputs', () => {
    it.each([undefined, null, '', ' '].map(value => ({ value })))('should return undefined for empty input %j', ({ value }) => {
      const helper = createHelper({ value } as ImageProps)
      expect(helper.get()).toBeUndefined()
    })

    it.each([
      ['/photo.png', undefined],
      ['@home', '/cached.svg'],
      ['flag-vn', '/flag-vn.svg'],
      ['#fff', undefined],
      ['document.pdf', undefined]
    ])('should return undefined for non-text or unresolved PDF source %s', (value, imageValue) => {
      const helper = createHelper({ value }, imageValue)
      expect(helper.get()).toBeUndefined()
    })
  })

  describe('Statefulness and Vue reactivity', () => {
    it('should reactively update text output when props.value changes across types', () => {
      const props = reactive<ImageProps>({ value: '$home' })
      const type = new ImageType(props, isMounted)
      const mockData = { image: computed(() => undefined) } as unknown as ImageData
      const helper = new ImageText(props, () => type, () => mockData)

      expect(helper.get()).toBe('home')

      props.value = 'material-account_circle'
      expect(helper.get()).toBe('account_circle')

      props.value = 'f-vn'
      expect(helper.get()).toBe('VN')

      props.value = '#fff'
      expect(helper.get()).toBeUndefined()
    })
  })
})
