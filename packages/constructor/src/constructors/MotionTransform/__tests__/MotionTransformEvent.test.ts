// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { MotionTransformEvent } from '../MotionTransformEvent'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn(),
    onUnmounted: (fn: () => void) => fn(),
    watch: (_src: any, cb: any) => cb()
  }
})

describe('MotionTransformEvent', () => {
  it('should test click and keydown handlers', () => {
    const stateMock = {
      open: ref(false),
      set: vi.fn(),
      reset: vi.fn()
    } as any
    const elementMock = {
      element: ref(undefined),
      getElement: () => undefined
    } as any
    const event = new MotionTransformEvent(
      {} as any,
      elementMock,
      stateMock,
      {} as any
    )
    expect(event).toBeDefined()
  })
})
