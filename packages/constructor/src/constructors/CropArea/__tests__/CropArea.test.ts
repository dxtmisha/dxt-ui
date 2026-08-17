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
  })
})
