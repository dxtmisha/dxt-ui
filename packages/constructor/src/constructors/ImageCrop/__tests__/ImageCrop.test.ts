// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { reactive, ref, toRefs } from 'vue'

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

    const refs = toRefs(props)
    const emits = vi.fn()

    const imageCrop = new ImageCrop(
      props,
      refs,
      elementRef,
      'd1',
      'd1-image-crop',
      undefined,
      undefined,
      emits
    )

    expect(imageCrop.aria).toEqual({})
    expect(imageCrop.image).toBeDefined()
    expect(imageCrop.cropArea).toBeDefined()
  })

  it('should return aria-disabled true when disabled', () => {
    const element = document.createElement('div')
    const elementRef = ref(element)
    const props = reactive({
      value: [0, 0, 0, 0] as [number, number, number, number],
      disabled: true
    }) as ImageCropProps

    const refs = toRefs(props)
    const imageCrop = new ImageCrop(props, refs, elementRef, 'd1', 'd1-image-crop')

    expect(imageCrop.aria).toEqual({ 'aria-disabled': 'true' })
  })
})
