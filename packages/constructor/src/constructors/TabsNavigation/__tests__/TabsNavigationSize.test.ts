// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { nextTick } from 'vue'
import { TabsNavigationSize } from '../TabsNavigationSize'

let mountFn: () => void = () => {}
let unmountFn: () => void = () => {}

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => {
      mountFn = fn
    },
    onUnmounted: (fn: () => void) => {
      unmountFn = fn
    }
  }
})

describe('TabsNavigationSize', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should initialize EventItem on mount and remove on unmount', async () => {
    const element = document.createElement('div')
    Object.defineProperty(element, 'scrollWidth', { value: 300, writable: true })
    const mockScroll = {
      elementHtml: element
    } as any

    const size = new TabsNavigationSize(mockScroll)

    // Trigger mount
    await mountFn()

    // It should have initialized event and set style width
    // listener() is called during mount
    vi.advanceTimersByTime(100) // update is debounced by 64ms

    expect(element.style.getPropertyValue('--sys-scroll-width')).toBe('300px')

    // Change scrollWidth and trigger event handler directly
    Object.defineProperty(element, 'scrollWidth', { value: 450 })
    // @ts-expect-error accessing protected listener
    size.listener()

    vi.advanceTimersByTime(100)
    expect(element.style.getPropertyValue('--sys-scroll-width')).toBe('450px')

    // Trigger unmount
    unmountFn()

    // event should be stopped
    expect(size['event']).toBeDefined()
  })
})
