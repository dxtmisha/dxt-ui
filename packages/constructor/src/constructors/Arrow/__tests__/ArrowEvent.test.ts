// @vitest-environment jsdom
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { ArrowEvent } from '../ArrowEvent'
import type { ArrowElementTarget } from '../ArrowElementTarget'
import type { ArrowPosition } from '../ArrowPosition'
import type { ArrowProps } from '../props'

describe('ArrowEvent', () => {
  let mockElementTarget: {
    element: ReturnType<typeof ref<HTMLElement | undefined>>
    update: ReturnType<typeof vi.fn>
    is: ReturnType<typeof vi.fn>
  }
  let mockPosition: {
    update: ReturnType<typeof vi.fn>
  }

  beforeEach(() => {
    mockElementTarget = {
      element: ref(undefined),
      update: vi.fn(),
      is: vi.fn().mockReturnValue(false)
    }
    mockPosition = {
      update: vi.fn()
    }
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should call elementTarget.update and position.update on update()', async () => {
    const elementRef = ref(document.createElement('div'))
    const event = new ArrowEvent(
      { position: 'auto' },
      elementRef,
      () => mockElementTarget as unknown as ArrowElementTarget,
      () => mockPosition as unknown as ArrowPosition
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

  it('should update on initialization and stop events when switching away from auto', async () => {
    const scope = effectScope()
    const targetDom = document.createElement('div')
    document.body.appendChild(targetDom)
    mockElementTarget.is.mockReturnValue(true)
    mockElementTarget.element.value = targetDom

    const addListenerSpy = vi.spyOn(window, 'addEventListener')
    const removeListenerSpy = vi.spyOn(window, 'removeEventListener')

    const elementRef = ref(document.createElement('div'))
    const props = reactive<ArrowProps>({ position: 'auto' })

    const event = scope.run(() => new ArrowEvent(
      props,
      elementRef,
      () => mockElementTarget as unknown as ArrowElementTarget,
      () => mockPosition as unknown as ArrowPosition
    ))!

    event.onMounted()

    await nextTick()
    await nextTick()
    await new Promise(resolve => requestAnimationFrame(resolve))

    expect(mockPosition.update).toHaveBeenCalled()
    expect(addListenerSpy).toHaveBeenCalled()

    mockPosition.update.mockClear()
    mockElementTarget.update.mockClear()
    props.position = 'bottom'
    await nextTick()
    await new Promise(resolve => requestAnimationFrame(resolve))

    expect(mockPosition.update).toHaveBeenCalledTimes(1)
    expect(mockElementTarget.update).not.toHaveBeenCalled()
    expect(removeListenerSpy).toHaveBeenCalled()

    event.onUnmounted()
    scope.stop()
    targetDom.remove()
  })

  it('should clean up listeners and cancel pending animation frame on onUnmounted()', () => {
    const scope = effectScope()
    const cancelSpy = vi.spyOn(window, 'cancelAnimationFrame')
    mockElementTarget.is.mockReturnValue(true)
    mockElementTarget.element.value = document.createElement('div')

    const elementRef = ref(document.createElement('div'))
    const props = reactive<ArrowProps>({ position: 'auto' })
    const event = scope.run(() => new ArrowEvent(
      props,
      elementRef,
      () => mockElementTarget as unknown as ArrowElementTarget,
      () => mockPosition as unknown as ArrowPosition
    ))!

    event.onMounted()
    event.update()
    event.onUnmounted()

    expect(cancelSpy).toHaveBeenCalled()
    scope.stop()
  })
})
