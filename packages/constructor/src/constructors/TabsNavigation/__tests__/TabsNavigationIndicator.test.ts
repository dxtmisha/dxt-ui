// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
import { TabsNavigationIndicator } from '../TabsNavigationIndicator'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

describe('TabsNavigationIndicator', () => {
  beforeEach(() => {
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => cb(0))
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.useRealTimers()
  })

  it('should initialize and perform selection changes animation', async () => {
    const props = {} as any
    const refs = {} as any

    const mainEl = document.createElement('div')
    const item1 = document.createElement('div')
    item1.setAttribute('data-value', 'tab-1')
    item1.getBoundingClientRect = () => ({ left: 20, width: 80 } as any)

    const item2 = document.createElement('div')
    item2.setAttribute('data-value', 'tab-2')
    item2.getBoundingClientRect = () => ({ left: 120, width: 100 } as any)

    mainEl.appendChild(item1)
    mainEl.appendChild(item2)

    const elementRef = ref(mainEl)

    const mockSelected = {
      item: ref('tab-1'),
      setActual: vi.fn()
    } as any

    const indicator = new TabsNavigationIndicator(
      props,
      refs,
      elementRef,
      'dxt-tabs',
      'dxt-tabs-item',
      mockSelected
    )

    // Trigger go manually to test transitions
    await indicator.go('tab-2', 'tab-1')

    // rectOld.left - rectNew.left = 20 - 120 = -100
    // `--dxt-tabs-item-sys-left` = '-100px + var(--dxt-tabs-item-gap, 0px)'
    expect(item2.style.getPropertyValue('--dxt-tabs-item-sys-left')).toBe('-100px + var(--dxt-tabs-item-gap, 0px)')
    expect(item2.style.getPropertyValue('--dxt-tabs-item-sys-width')).toBe('80px')

    // flush the requestAnimationFrame call inside fake timers
    vi.advanceTimersByTime(16)

    expect(mockSelected.setActual).toHaveBeenCalledWith('tab-2')

    // advance timer by 400ms to clear properties
    vi.advanceTimersByTime(400)

    expect(item2.style.getPropertyValue('--dxt-tabs-item-sys-left')).toBe('')
    expect(item2.style.getPropertyValue('--dxt-tabs-item-sys-width')).toBe('')
  })
})
