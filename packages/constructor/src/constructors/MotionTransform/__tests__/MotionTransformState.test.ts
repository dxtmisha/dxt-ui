// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { MotionTransformState } from '../MotionTransformState'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn(),
    onUnmounted: (fn: () => void) => fn(),
    watch: (_src: any, cb: any) => cb()
  }
})

describe('MotionTransformState', () => {
  it('should test opening calculations and visibility states', () => {
    const div = document.createElement('div')
    const mockElement = {
      element: ref(div),
      isAnimation: () => false,
      isWindow: () => false,
      getElement: () => div,
      getElementContext: () => undefined,
      style: {}
    } as any

    const state = new MotionTransformState(
      { open: true } as any,
      { open: ref(true) } as any,
      mockElement,
      { updateOldElement: vi.fn(), toggle: vi.fn() } as any,
      { update: vi.fn(), reset: vi.fn() } as any
    )
    expect(state.open.value).toBe(true)
    expect(state.isOpen()).toBe(true)
  })
})
