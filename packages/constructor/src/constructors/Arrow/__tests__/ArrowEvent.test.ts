// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref, nextTick } from 'vue'
import { ArrowEvent } from '../ArrowEvent'

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
  let mockRefs: any

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
    mockRefs = {
      position: ref('top')
    }
    vi.clearAllMocks()
  })

  it('should call elementTarget.update and position.update on update()', async () => {
    const elementRef = ref(document.createElement('div'))
    const event = new ArrowEvent(
      { position: 'auto' },
      mockRefs,
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

  it('should trigger update on ref change', async () => {
    mockElementTarget.is.mockReturnValue(true)
    mockElementTarget.element.value = document.createElement('div')

    const elementRef = ref(document.createElement('div'))
    new ArrowEvent(
      { position: 'auto' },
      mockRefs,
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
  })
})
