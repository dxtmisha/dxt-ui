// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, reactive, ref } from 'vue'
import { MaskControl } from '../MaskControl'
import type { MaskData } from '../MaskData'
import type { MaskEmit } from '../MaskEmit'
import type { MaskRight } from '../MaskRight'
import type { MaskScroll } from '../MaskScroll'
import type { MaskValue } from '../MaskValue'
import type { MaskValueBasic } from '../MaskValueBasic'
import type { MaskView } from '../MaskView'
import type { MaskProps } from '../props'

const createMaskControl = (initialProps: Partial<MaskProps> = {}) => {
  const props = reactive<MaskProps>({ ...initialProps })
  const element = ref<HTMLInputElement | undefined>(undefined)

  const dataReset = vi.fn()
  const emitGo = vi.fn()
  const emitSet = vi.fn(() => ({ go: emitGo }))
  const scrollSync = vi.fn()

  const isRight = ref(false)
  const valueItem = ref('12')
  const valueBasicItem = ref('+1 12')
  const viewInput = ref('+1 12')
  const viewItems = ref([{ value: '+' }, { value: '1' }, { value: ' ' }, { value: '1' }, { value: '2' }, { value: '_' }])

  const control = new MaskControl(
    props,
    element,
    () => ({ reset: dataReset }) as unknown as MaskData,
    () => ({ set: emitSet }) as unknown as MaskEmit,
    () => ({ isRight: () => isRight.value }) as unknown as MaskRight,
    () => ({ sync: scrollSync }) as unknown as MaskScroll,
    () => ({ item: computed(() => valueItem.value) }) as unknown as MaskValue,
    () => ({ item: computed(() => valueBasicItem.value) }) as unknown as MaskValueBasic,
    () => ({
      input: computed(() => viewInput.value),
      item: computed(() => viewItems.value)
    }) as unknown as MaskView
  )

  return {
    control,
    props,
    element,
    dataReset,
    emitSet,
    emitGo,
    scrollSync,
    isRight,
    valueItem,
    valueBasicItem,
    viewInput
  }
}

describe('MaskControl', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should compute basic string from view.input or view.item when right-aligned', () => {
    const { control, isRight } = createMaskControl()

    expect(control.basic.value).toBe('+1 12')

    isRight.value = true
    expect(control.basic.value).toBe('+1 12_')
  })

  it('should handle reset and set according to valueDefault and current value', () => {
    const { control, dataReset, emitSet, emitGo } = createMaskControl({ valueDefault: 0 })

    expect(control.reset(0)).toBe(false)
    expect(dataReset).not.toHaveBeenCalled()

    expect(control.reset('12')).toBe(false)
    expect(dataReset).not.toHaveBeenCalled()

    expect(control.set('99')).toBe(true)
    expect(dataReset).toHaveBeenCalledWith('99')
    expect(emitSet).toHaveBeenCalledWith('reset', expect.any(Object))
    expect(emitGo).toHaveBeenCalledTimes(1)
  })

  it('should clear to valueDefault, focus input and sync scroll in animation frame, and cancel on unmount', () => {
    let frameCallback: FrameRequestCallback | undefined
    const rafSpy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      frameCallback = callback
      return 321
    })
    const cancelSpy = vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => undefined)

    const { control, element, dataReset, emitSet, emitGo, scrollSync } = createMaskControl({
      valueDefault: '9'
    })

    const input = document.createElement('input')
    input.focus = vi.fn()
    element.value = input

    expect(control.clear()).toBe(true)
    expect(dataReset).toHaveBeenCalledWith('9')
    expect(emitSet).toHaveBeenCalledWith('reset', expect.any(Object))
    expect(emitGo).toHaveBeenCalledTimes(1)
    expect(input.value).toBe('+1 12')
    expect(rafSpy).toHaveBeenCalledTimes(1)

    control.onUnmounted()
    expect(cancelSpy).toHaveBeenCalledWith(321)

    expect(control.clear()).toBe(true)
    frameCallback?.(0)
    expect(input.focus).toHaveBeenCalledTimes(1)
    expect(scrollSync).toHaveBeenCalledTimes(1)
  })
})
