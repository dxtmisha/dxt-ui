// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { reactive, ref, toRefs } from 'vue'
import { CropArea } from '../CropArea'
import type { CropAreaProps } from '../props'

describe('CropArea', () => {
  it('should initialize orchestrator with DI and provide getters', () => {
    const element = document.createElement('div')
    const elementRef = ref(element)
    const props = reactive({
      value: [5, 10, 15, 20] as [number, number, number, number],
      disabled: false,
      tag: 'section'
    }) as CropAreaProps

    const refs = toRefs(props)
    const emits = vi.fn()

    const cropArea = new CropArea(
      props,
      refs,
      elementRef,
      'd1',
      'd1-crop-area',
      undefined,
      undefined,
      emits
    )

    expect(cropArea.tag).toBe('section')
    expect(cropArea.aria).toEqual({})
    expect(cropArea.binds).toHaveProperty('tabindex', 0)
    expect(cropArea.binds).toHaveProperty('onKeydown')
    expect(cropArea.binds).toHaveProperty('onMousedown')
  })

  it('should return aria-disabled true when disabled', () => {
    const element = document.createElement('div')
    const elementRef = ref(element)
    const props = reactive({
      value: [0, 0, 0, 0] as [number, number, number, number],
      disabled: true
    }) as CropAreaProps

    const refs = toRefs(props)
    const cropArea = new CropArea(props, refs, elementRef, 'd1', 'd1-crop-area')

    expect(cropArea.aria).toEqual({ 'aria-disabled': 'true' })
    expect(cropArea.binds.tabindex).toBeUndefined()
  })
})
