// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ImageCrop } from '../ImageCrop'
import type { ImageCropProps } from '../props'

describe('ImageCrop', () => {
  it('should initialize orchestrator with DI and provide getters', () => {
    const element = document.createElement('div')
    const elementRef = ref(element)
    const props = reactive({
      value: [5, 10, 15, 20] as [number, number, number, number],
      disabled: false
    }) as ImageCropProps

    const emits = vi.fn()

    const imageCrop = new ImageCrop(
      props,
      elementRef,
      new DesignName('d1.imageCrop'),
      undefined,
      undefined,
      emits
    )

    expect(imageCrop.aria).toEqual({})
    expect(imageCrop.image).toBeDefined()
    expect(imageCrop.cropArea).toBeDefined()
    expect(imageCrop.cropImage).toBeDefined()
    expect(imageCrop.progress).toBeDefined()
    expect(imageCrop.cropImage.styles).toEqual({})
  })

  it('should calculate aspect ratio and emit load on onLoad', () => {
    const element = document.createElement('div')
    const elementRef = ref(element)
    const props = reactive({
      image: 'path/to/test.jpg',
      disabled: false
    }) as ImageCropProps

    const emits = vi.fn()

    const imageCrop = new ImageCrop(
      props,
      elementRef,
      new DesignName('d1.imageCrop'),
      undefined,
      undefined,
      emits
    )

    expect(imageCrop.cropImage.styles).toEqual({})

    imageCrop.cropImage.onLoad({
      type: undefined,
      image: {
        width: 1920,
        height: 1080,
        image: {} as HTMLImageElement,
        src: 'path/to/test.jpg'
      }
    })

    expect(imageCrop.cropImage.styles).toEqual({
      '--d1-imageCrop-sys-aspect-ratio': '1920 / 1080',
      '--d1-imageCrop-sys-width': 'auto',
      '--d1-imageCrop-sys-height': 'auto'
    })
    expect(emits).toHaveBeenCalledWith('load', expect.any(Object))
  })

  it('should return aria-disabled true when disabled', () => {
    const element = document.createElement('div')
    const elementRef = ref(element)
    const props = reactive({
      value: [0, 0, 0, 0] as [number, number, number, number],
      disabled: true
    }) as ImageCropProps

    const imageCrop = new ImageCrop(props, elementRef, new DesignName('d1.imageCrop'))

    expect(imageCrop.aria).toEqual({ 'aria-disabled': 'true' })
  })

  it('should emit resize and model update when cropArea onResize is triggered', () => {
    const element = document.createElement('div')
    const elementRef = ref(element)
    const props = reactive({
      value: [0, 0, 0, 0] as [number, number, number, number],
      disabled: false
    }) as ImageCropProps

    const emits = vi.fn()

    const imageCrop = new ImageCrop(
      props,
      elementRef,
      new DesignName('d1.imageCrop'),
      undefined,
      undefined,
      emits
    )

    const cropAreaBinds = (imageCrop.cropArea as any).binds.value
    expect(cropAreaBinds.onResize).toBeDefined()

    const mockParameters = {
      direction: 'right',
      value: 20,
      coordinator: [0, 20, 0, 0]
    }

    cropAreaBinds.onResize(mockParameters)

    expect(emits).toHaveBeenCalledWith('update:value', [0, 20, 0, 0])
    expect(emits).toHaveBeenCalledWith('update:modelValue', [0, 20, 0, 0])
    expect(emits).toHaveBeenCalledWith('resize', mockParameters)
  })
})
