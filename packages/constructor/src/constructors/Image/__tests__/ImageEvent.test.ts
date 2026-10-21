// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { nextTick, ref } from 'vue'
import { ImageEvent } from '../ImageEvent'
import { ImageTypeValue } from '../basicTypes'
import type { ImageData } from '../ImageData'
import type { ImageType } from '../ImageType'

describe('ImageEvent', () => {
  it('emits load event when image data is an object', () => {
    const emits = vi.fn()
    const typeMock = {
      get: vi.fn().mockReturnValue(ImageTypeValue.image)
    } as unknown as ImageType

    const imageObj = { src: 'test.png', width: 100, height: 100 }
    const imageRef = ref<unknown>(imageObj)
    const dataMock = {
      image: imageRef
    } as unknown as ImageData

    const eventHelper = new ImageEvent(() => typeMock, () => dataMock, emits)

    eventHelper.onLoad()

    expect(emits).toHaveBeenCalledWith('load', {
      type: ImageTypeValue.image,
      image: imageObj
    })
  })

  it('automatically emits load event when watched data.image updates to an object', async () => {
    const emits = vi.fn()
    const typeMock = {
      get: vi.fn().mockReturnValue(ImageTypeValue.image)
    } as unknown as ImageType

    const imageRef = ref<unknown>(undefined)
    const dataMock = {
      image: imageRef
    } as unknown as ImageData

    const helper = new ImageEvent(() => typeMock, () => dataMock, emits)
    expect(helper).toBeDefined()

    const imageObj = { src: 'test.png', width: 100, height: 100 }
    imageRef.value = imageObj
    await nextTick()

    expect(emits).toHaveBeenCalledWith('load', {
      type: ImageTypeValue.image,
      image: imageObj
    })
  })

  it('ignores string and undefined values', () => {
    const emits = vi.fn()
    const typeMock = {
      get: vi.fn().mockReturnValue(ImageTypeValue.image)
    } as unknown as ImageType

    const imageRef = ref<unknown>('/path/to/image.png')
    const dataMock = {
      image: imageRef
    } as unknown as ImageData

    const eventHelper = new ImageEvent(() => typeMock, () => dataMock, emits)

    eventHelper.onLoad()
    imageRef.value = undefined
    eventHelper.onLoad()

    expect(emits).not.toHaveBeenCalled()
  })

  it('is safe when emits function is undefined', () => {
    const typeMock = {
      get: vi.fn().mockReturnValue(ImageTypeValue.image)
    } as unknown as ImageType

    const imageObj = { src: 'test.png', width: 100, height: 100 }
    const imageRef = ref<unknown>(imageObj)
    const dataMock = {
      image: imageRef
    } as unknown as ImageData

    const eventHelper = new ImageEvent(() => typeMock, () => dataMock, undefined)

    expect(() => eventHelper.onLoad()).not.toThrow()
  })
})
