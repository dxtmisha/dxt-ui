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
      () => mockElement,
      () => ({ update: vi.fn(), reset: vi.fn() } as any),
      () => ({ updateOldElement: vi.fn(), toggle: vi.fn() } as any)
    )
    state.onMounted()
    expect(state.open.value).toBe(true)
    expect(state.isOpen()).toBe(true)
  })

  it('should restore focus to elementHead on reset when closing', async () => {
    const div = document.createElement('div')
    const head = document.createElement('div')
    head.focus = vi.fn()
    document.body.appendChild(div)
    document.body.appendChild(head)

    const mockElement = {
      element: ref(div),
      elementHead: head,
      isAnimation: () => false,
      isWindow: () => false,
      getElement: () => div,
      getElementContext: () => undefined,
      style: {}
    } as any

    const state = new MotionTransformState(
      { open: false, clickOpen: true } as any,
      () => mockElement,
      () => ({ update: vi.fn(), reset: vi.fn() } as any),
      () => ({ updateOldElement: vi.fn(), toggle: vi.fn() } as any)
    )

    state.reset()

    await new Promise((resolve) => requestAnimationFrame(resolve))
    expect(head.focus).toHaveBeenCalled()

    div.remove()
    head.remove()
  })
})
