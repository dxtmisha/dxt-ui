// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { nextTick, ref } from 'vue'
import { ImageEvent } from '../ImageEvent'
import { ImageTypeValue } from '../basicTypes'
import type { ImageData } from '../ImageData'
import type { ImageType } from '../ImageType'

describe('ImageEvent', () => {
  describe('Decoded source activation', () => {
    it.each([
      [ImageTypeValue.file, true],
      [ImageTypeValue.image, true],
      [ImageTypeValue.array, true],
      [ImageTypeValue.pdf, false],
      [ImageTypeValue.public, false],
      [ImageTypeValue.icon, false],
      [ImageTypeValue.flag, false],
      [ImageTypeValue.flagCompressed, false],
      [ImageTypeValue.color, false],
      [ImageTypeValue.filled, false],
      [ImageTypeValue.outlined, false],
      [ImageTypeValue.round, false],
      [ImageTypeValue.sharp, false],
      [ImageTypeValue.twoTone, false],
      [ImageTypeValue.material, false],
      [undefined, false]
    ] as const)('should activate %s events only for decoded sources', (type, expected) => {
      expect(ImageEvent.is(type)).toBe(expected)
    })
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should not invoke data() or emits() in constructor before onMounted is called', () => {
      const emits = vi.fn()
      const dataGetter = vi.fn()
      const typeGetter = vi.fn()

      const eventHelper = new ImageEvent(dataGetter, typeGetter, emits)

      expect(eventHelper).toBeDefined()
      expect(dataGetter).not.toHaveBeenCalled()
      expect(typeGetter).not.toHaveBeenCalled()
      expect(emits).not.toHaveBeenCalled()
    })

    it('should immediately emit load event on onMounted() when initialized with an image object and re-emit on manual onLoad()', () => {
      const emits = vi.fn()
      const typeMock = {
        get: vi.fn().mockReturnValue(ImageTypeValue.image)
      } as unknown as ImageType

      const imageItem = { src: 'test.png', width: 100, height: 100 }
      const imageRef = ref<unknown>(imageItem)
      const dataMock = {
        image: imageRef
      } as unknown as ImageData

      const eventHelper = new ImageEvent(() => dataMock, () => typeMock, emits)
      eventHelper.onMounted()

      expect(emits).toHaveBeenCalledExactlyOnceWith('load', {
        type: ImageTypeValue.image,
        image: imageItem
      })

      emits.mockClear()
      eventHelper.onLoad()

      expect(emits).toHaveBeenCalledExactlyOnceWith('load', {
        type: ImageTypeValue.image,
        image: imageItem
      })
    })

    it('should automatically emit load event when watched data.image updates to an object after onMounted()', async () => {
      const emits = vi.fn()
      const currentType = ref(ImageTypeValue.image)
      const typeMock = {
        get: () => currentType.value
      } as unknown as ImageType

      const imageRef = ref<unknown>(undefined)
      const dataMock = {
        image: imageRef
      } as unknown as ImageData

      const helper = new ImageEvent(() => dataMock, () => typeMock, emits)
      helper.onMounted()
      expect(helper).toBeDefined()
      expect(emits).not.toHaveBeenCalled()

      const firstItem = { src: 'first.png', width: 100, height: 100 }
      imageRef.value = firstItem
      await nextTick()

      expect(emits).toHaveBeenCalledExactlyOnceWith('load', {
        type: ImageTypeValue.image,
        image: firstItem
      })

      currentType.value = ImageTypeValue.file
      const secondItem = { src: 'second.png', width: 200, height: 150 }
      imageRef.value = secondItem
      await nextTick()

      expect(emits).toHaveBeenCalledTimes(2)
      expect(emits).toHaveBeenLastCalledWith('load', {
        type: ImageTypeValue.file,
        image: secondItem
      })
    })
  })

  describe('Empty, primitive, and non-object inputs', () => {
    it.each([
      undefined,
      null,
      '',
      '/path/to/image.png',
      0,
      false
    ])('should ignore non-object image value %j without calling type() or emits()', (nonObjectValue) => {
      const emits = vi.fn()
      const typeGetter = vi.fn(() => ({
        get: () => ImageTypeValue.image
      }) as unknown as ImageType)

      const imageRef = ref<unknown>(nonObjectValue)
      const dataMock = {
        image: imageRef
      } as unknown as ImageData

      const eventHelper = new ImageEvent(() => dataMock, typeGetter, emits)
      eventHelper.onMounted()
      eventHelper.onLoad()

      expect(emits).not.toHaveBeenCalled()
      expect(typeGetter).not.toHaveBeenCalled()
    })
  })

  describe('Optional dependency and lifecycle safety', () => {
    it('should safely execute onMounted and onLoad when emits callback is undefined', () => {
      const typeMock = {
        get: vi.fn().mockReturnValue(ImageTypeValue.image)
      } as unknown as ImageType

      const imageItem = { src: 'test.png', width: 100, height: 100 }
      const imageRef = ref<unknown>(imageItem)
      const dataMock = {
        image: imageRef
      } as unknown as ImageData

      const eventHelper = new ImageEvent(() => dataMock, () => typeMock, undefined)

      expect(() => eventHelper.onMounted()).not.toThrow()
      expect(() => eventHelper.onLoad()).not.toThrow()
    })
  })
})
