// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ImageCrop } from '../ImageCrop'
import type { ImageCropProps } from '../props'

describe('ImageCrop (Unit)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should instantiate dependencies lazily and respect canCreate guards', () => {
    const elementRef = ref<HTMLDivElement | undefined>(document.createElement('div'))
    const props = reactive<ImageCropProps>({
      value: [5, 10, 15, 20],
      disabled: false,
      readonly: true
    })

    const scope = effectScope()
    let instance!: ImageCrop

    scope.run(() => {
      instance = new ImageCrop(
        props,
        elementRef,
        new DesignName('d1.imageCrop')
      )
    })

    expect(instance.hasInstance('cropArea')).toBe(false)
    expect(instance.hasInstance('cropImage')).toBe(false)
    expect(instance.hasInstance('image')).toBe(false)
    expect(instance.hasInstance('model')).toBe(false)
    expect(instance.hasInstance('progress')).toBe(false)

    // Guarded callInstance skips disabled/absent features
    expect(instance.callInstance('cropArea', () => true, false)).toBe(false)
    expect(instance.callInstance('image', () => true, false)).toBe(false)
    expect(instance.callInstance('progress', () => true, false)).toBe(false)

    expect(instance.hasInstance('cropArea')).toBe(false)
    expect(instance.hasInstance('image')).toBe(false)
    expect(instance.hasInstance('progress')).toBe(false)

    expect(instance.aria).toEqual({})
    expect(instance.styles).toEqual({})
    expect(instance.hasInstance('cropImage')).toBe(true)

    scope.stop()
  })

  it('should compute aria-disabled when disabled and handle load and resize events', () => {
    const elementRef = ref<HTMLDivElement | undefined>(document.createElement('div'))
    const props = reactive<ImageCropProps>({
      image: 'photo.jpg',
      value: [0, 0, 0, 0],
      disabled: true
    })
    const emits = vi.fn()
    const scope = effectScope()
    let instance!: ImageCrop

    scope.run(() => {
      instance = new ImageCrop(
        props,
        elementRef,
        new DesignName('d1.imageCrop'),
        undefined,
        undefined,
        emits
      )
    })

    expect(instance.aria).toEqual({ 'aria-disabled': 'true' })

    instance.i('cropImage').onLoad({
      type: undefined,
      image: {
        width: 1920,
        height: 1080,
        image: {} as HTMLImageElement,
        src: 'photo.jpg'
      }
    })

    expect(instance.styles).toEqual({
      '--d1-imageCrop-sys-aspect-ratio': '1920 / 1080',
      '--d1-imageCrop-sys-width': 'auto',
      '--d1-imageCrop-sys-height': 'auto'
    })
    expect(emits).toHaveBeenCalledWith('load', expect.any(Object))

    const cropAreaBinds = instance.i('cropArea').binds.value
    const resizePayload = {
      direction: 'right',
      value: 20,
      coordinator: [0, 20, 0, 0]
    }
    cropAreaBinds.onResize?.(resizePayload as never)

    expect(emits).toHaveBeenCalledWith('update:value', [0, 20, 0, 0])
    expect(emits).toHaveBeenCalledWith('update:modelValue', [0, 20, 0, 0])
    expect(emits).toHaveBeenCalledWith('resize', resizePayload)

    scope.stop()
  })
})
