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
      mockElementTarget,
      mockParent,
      mockPosition
    )

    event.update()

    await new Promise(resolve => requestAnimationFrame(resolve))

    expect(mockElementTarget.update).toHaveBeenCalled()
    expect(mockPosition.update).toHaveBeenCalled()
  })

  it('should update on initialization and reactive props changes', async () => {
    mockElementTarget.is.mockReturnValue(true)
    mockElementTarget.element.value = document.createElement('div')

    const elementRef = ref(document.createElement('div'))
    const props = reactive<ArrowProps>({ position: 'auto' })
    new ArrowEvent(
      props,
      elementRef,
      mockElementTarget,
      mockParent,
      mockPosition
    )

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
  })
})
