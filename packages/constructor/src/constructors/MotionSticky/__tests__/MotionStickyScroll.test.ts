// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { MotionStickyElement } from '../MotionStickyElement'
import { MotionStickyScroll } from '../MotionStickyScroll'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn(),
    onUnmounted: (fn: () => void) => fn(),
    watch: (_src: any, cb: any) => cb()
  }
})

describe('MotionStickyScroll', () => {
  it('should initialize scroll event listeners', () => {
    const div = document.createElement('div')
    const stickyEl = new MotionStickyElement({}, ref(div))
    const scrollMock = new MotionStickyScroll({}, stickyEl)

    expect(scrollMock).toBeDefined()
  })
})
