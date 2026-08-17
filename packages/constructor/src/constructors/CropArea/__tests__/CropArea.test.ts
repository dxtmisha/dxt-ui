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
    expect(cropArea.coordinator.value).toEqual([5, 10, 15, 20])
    expect(cropArea.slotProps).toEqual({
      coordinator: [5, 10, 15, 20]
    })
    expect(cropArea.classesData).toEqual({
      'd1-crop-area--disabled': false,
      'd1-crop-area--disabledTop': false,
      'd1-crop-area--disabledRight': false,
      'd1-crop-area--disabledBottom': false,
      'd1-crop-area--disabledLeft': false
    })
  })
})
