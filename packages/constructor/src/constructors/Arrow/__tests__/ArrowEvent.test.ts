// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { reactive, ref, nextTick } from 'vue'
import { ArrowEvent } from '../ArrowEvent'
import type { ArrowProps } from '../props'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn(),
    onUnmounted: (fn: () => void) => fn()
  }
})

describe('ArrowEvent', () => {
  let mockElementTarget: any
  let mockParent: any
  let mockPosition: any

  beforeEach(() => {
    mockElementTarget = {
      element: ref(undefined),
      update: vi.fn(),
      is: vi.fn().mockReturnValue(false)
    }
    mockParent = {}
    mockPosition = {
      update: vi.fn()
    }
    vi.clearAllMocks()
  })

  it('should call elementTarget.update and position.update on update()', async () => {
    const elementRef = ref(document.createElement('div'))
    const event = new ArrowEvent(
      { position: 'auto' },
      elementRef,
      () => mockElementTarget,
      () => mockParent,
      () => mockPosition
    )

    event.update()

    await new Promise(resolve => requestAnimationFrame(resolve))

    expect(mockElementTarget.update).toHaveBeenCalled()
    expect(mockPosition.update).toHaveBeenCalled()
  })

  it('should evaluate static is() properly', () => {
    expect(ArrowEvent.is({ position: 'auto' })).toBe(true)
    expect(ArrowEvent.is({ position: 'auto', elementTarget: '#target' })).toBe(true)
    expect(ArrowEvent.is({ position: 'bottom', elementTarget: '#target' })).toBe(false)
    expect(ArrowEvent.is({ position: 'bottom' })).toBe(false)
    expect(ArrowEvent.is(undefined)).toBe(false)
  })

  it('should update on initialization and reactive props changes', async () => {
    mockElementTarget.is.mockReturnValue(true)
    mockElementTarget.element.value = document.createElement('div')

    const elementRef = ref(document.createElement('div'))
    const props = reactive<ArrowProps>({ position: 'auto' })
    const event = new ArrowEvent(
      props,
      elementRef,
      () => mockElementTarget,
      () => mockParent,
      () => mockPosition
    )

    await event.onMounted()

    // Wait for setup tick, immediate watch trigger, and animation frame
    await nextTick()
    await nextTick()
    await new Promise(resolve => requestAnimationFrame(resolve))

    expect(mockPosition.update).toHaveBeenCalled()

    mockPosition.update.mockClear()
    mockElementTarget.update.mockClear()
    props.position = 'bottom'
    await nextTick()
    await new Promise(resolve => requestAnimationFrame(resolve))

    expect(mockPosition.update).toHaveBeenCalledTimes(1)
    expect(mockElementTarget.update).not.toHaveBeenCalled()

    event.onUnmounted()
  })

  it('should clean up listeners and cancel pending animation frame on onUnmounted()', async () => {
    const cancelSpy = vi.spyOn(window, 'cancelAnimationFrame')
    mockElementTarget.is.mockReturnValue(true)
    mockElementTarget.element.value = document.createElement('div')

    const elementRef = ref(document.createElement('div'))
    const props = reactive<ArrowProps>({ position: 'auto' })
    const event = new ArrowEvent(
      props,
      elementRef,
      () => mockElementTarget,
      () => mockParent,
      () => mockPosition
    )

    event.onMounted()
    // Schedule an update that sets a pending frameId
    event.update()

    event.onUnmounted()
    expect(cancelSpy).toHaveBeenCalled()

    cancelSpy.mockRestore()
  })
})
