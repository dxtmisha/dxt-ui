// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref, nextTick } from 'vue'
import { WindowPersistent } from '../WindowPersistent'
import type { WindowProps } from '../props'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (callback: () => void) => callback()
  }
})

describe('WindowPersistent', () => {
  let mockProps: Partial<WindowProps>
  let mockClasses: any
  let mockElement: any
  let mainElement: HTMLDivElement

  beforeEach(() => {
    mainElement = document.createElement('div')
    mockProps = {
      persistent: false
    }
    mockClasses = {
      list: {
        persistent: 'd1-window--persistent'
      }
    }
    mockElement = {
      getMain: vi.fn().mockReturnValue(mainElement)
    }
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should ignore request to enable persistent animation if persistent prop is false', () => {
    const persistent = new WindowPersistent(mockProps as WindowProps, mockClasses, mockElement)
    const result = persistent.on()

    expect(result).toBe(false)
    expect(persistent.item.value).toBe(false)
  })

  it('should enable persistent animation and add class/event listener if persistent prop is true', async () => {
    mockProps.persistent = true
    const persistent = new WindowPersistent(mockProps as WindowProps, mockClasses, mockElement)

    // Spy on event listener
    const addEventListenerSpy = vi.spyOn(mainElement, 'addEventListener')

    const result = persistent.on()
    expect(result).toBe(true)
    expect(persistent.item.value).toBe(true)

    await nextTick()

    expect(mainElement.classList.contains('d1-window--persistent')).toBe(true)
    expect(addEventListenerSpy).toHaveBeenCalledWith('animationend', expect.any(Function))
  })

  it('should disable persistent animation and remove class', async () => {
    mockProps.persistent = true
    const persistent = new WindowPersistent(mockProps as WindowProps, mockClasses, mockElement)

    persistent.on()
    await nextTick()

    persistent.disabled()
    await nextTick()

    expect(persistent.item.value).toBe(false)
    expect(mainElement.classList.contains('d1-window--persistent')).toBe(false)
  })

  it('should clean up event listener on animationend', async () => {
    mockProps.persistent = true
    const persistent = new WindowPersistent(mockProps as WindowProps, mockClasses, mockElement)

    persistent.on()
    await nextTick()

    const removeEventListenerSpy = vi.spyOn(mainElement, 'removeEventListener')

    // Dispatch animationend event
    const animationEndEvent = new Event('animationend')
    mainElement.dispatchEvent(animationEndEvent)

    await nextTick()

    expect(persistent.item.value).toBe(false)
    expect(removeEventListenerSpy).toHaveBeenCalledWith('animationend', expect.any(Function))
  })
})
