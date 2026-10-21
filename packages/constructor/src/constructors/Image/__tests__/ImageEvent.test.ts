// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { nextTick, ref } from 'vue'
import { ImageEvent } from '../ImageEvent'
import { ImageTypeValue } from '../basicTypes'
import type { ImageData } from '../ImageData'
import type { ImageType } from '../ImageType'

describe('ImageEvent', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should immediately emit load event when initialized with an image object and re-emit on manual onLoad()', () => {
      const emits = vi.fn()
      const typeMock = {
        get: vi.fn().mockReturnValue(ImageTypeValue.image)
      } as unknown as ImageType

      const imageItem = { src: 'test.png', width: 100, height: 100 }
      const imageRef = ref<unknown>(imageItem)
      const dataMock = {
        image: imageRef
      } as unknown as ImageData

      const eventHelper = new ImageEvent(() => typeMock, () => dataMock, emits)

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

    it('should automatically emit load event when watched data.image updates to an object', async () => {
      const emits = vi.fn()
      const currentType = ref(ImageTypeValue.image)
      const typeMock = {
        get: () => currentType.value
      } as unknown as ImageType

      const imageRef = ref<unknown>(undefined)
      const dataMock = {
        image: imageRef
      } as unknown as ImageData

      const helper = new ImageEvent(() => typeMock, () => dataMock, emits)
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

      const eventHelper = new ImageEvent(typeGetter, () => dataMock, emits)
      eventHelper.onLoad()

      expect(emits).not.toHaveBeenCalled()
      expect(typeGetter).not.toHaveBeenCalled()
    })
  })

  describe('Optional dependency and lifecycle safety', () => {
    it('should safely execute onLoad when emits callback is undefined', () => {
      const typeMock = {
        get: vi.fn().mockReturnValue(ImageTypeValue.image)
      } as unknown as ImageType

      const imageItem = { src: 'test.png', width: 100, height: 100 }
      const imageRef = ref<unknown>(imageItem)
      const dataMock = {
        image: imageRef
      } as unknown as ImageData

      const eventHelper = new ImageEvent(() => typeMock, () => dataMock, undefined)

      expect(() => eventHelper.onLoad()).not.toThrow()
    })
  })
})
