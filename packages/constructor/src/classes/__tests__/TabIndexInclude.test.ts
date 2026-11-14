// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
import { TabIndexInclude } from '../TabIndexInclude'

vi.mock('@dxtmisha/functional', async () => {
  const actual = await vi.importActual('@dxtmisha/functional') as any
  return {
    ...actual,
    isElementVisible: vi.fn().mockReturnValue(true)
  }
})

describe('TabIndexInclude', () => {
  let parentElement: HTMLElement
  let button1: HTMLButtonElement
  let button2: HTMLButtonElement

  beforeEach(() => {
    parentElement = document.createElement('div')
    button1 = document.createElement('button')
    button1.tabIndex = 0
    button2 = document.createElement('button')
    button2.tabIndex = 0

    parentElement.appendChild(button1)
    parentElement.appendChild(button2)
    document.body.appendChild(parentElement)
  })

  afterEach(() => {
    document.body.removeChild(parentElement)
    vi.restoreAllMocks()
  })

  it('should find first and last focusable elements', () => {
    const parentRef = ref(parentElement)
    const tabIndexInc = new TabIndexInclude(parentRef)

    expect(tabIndexInc.findFirstElement()).toBe(button1)
    expect(tabIndexInc.findLastElement()).toBe(button2)
  })

  it('should focus the first element on goTo()', () => {
    const parentRef = ref(parentElement)
    const tabIndexInc = new TabIndexInclude(parentRef)

    tabIndexInc.goTo()
    expect(document.activeElement).toBe(button1)
  })

  it('should save and return focus to oldElement on reset()', async () => {
    const parentRef = ref(parentElement)
    const tabIndexInc = new TabIndexInclude(parentRef)

    button2.focus()
    tabIndexInc.updateOldElement()

    // Focus an outside button and remove it to simulate focus leaving the page
    const outsideButton = document.createElement('button')
    outsideButton.tabIndex = 0
    document.body.appendChild(outsideButton)
    outsideButton.focus()
    document.body.removeChild(outsideButton)

    tabIndexInc.reset()

    await new Promise(resolve => requestAnimationFrame(resolve))
    expect(document.activeElement).toBe(button2)
  })

  it('should wrap focus around on Tab key events', () => {
    const parentRef = ref(parentElement)
    const tabIndexInc = new TabIndexInclude(parentRef)
    tabIndexInc.goTo()

    button2.focus()
    const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true })
    const preventDefaultSpy = vi.spyOn(tabEvent, 'preventDefault')
    document.body.dispatchEvent(tabEvent)

    expect(document.activeElement).toBe(button1)
    expect(preventDefaultSpy).toHaveBeenCalled()
  })

  it('should wrap focus backwards on Shift+Tab key events', () => {
    const parentRef = ref(parentElement)
    const tabIndexInc = new TabIndexInclude(parentRef)
    tabIndexInc.goTo()

    const shiftTabEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true })
    const preventDefaultSpy = vi.spyOn(shiftTabEvent, 'preventDefault')
    document.body.dispatchEvent(shiftTabEvent)

    expect(document.activeElement).toBe(button2)
    expect(preventDefaultSpy).toHaveBeenCalled()
  })

  it('should skip disabled and inert elements in findFirstElement, findLastElement, and Tab trapping', () => {
    const parentRef = ref(parentElement)
    const tabIndexInc = new TabIndexInclude(parentRef)

    button1.disabled = true
    expect(tabIndexInc.findFirstElement()).toBe(button2)
    expect(tabIndexInc.findLastElement()).toBe(button2)

    button1.disabled = false
    button2.disabled = true
    expect(tabIndexInc.findFirstElement()).toBe(button1)
    expect(tabIndexInc.findLastElement()).toBe(button1)

    tabIndexInc.goTo()
    button1.focus()
    const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true })
    const preventDefaultSpy = vi.spyOn(tabEvent, 'preventDefault')
    document.body.dispatchEvent(tabEvent)

    expect(preventDefaultSpy).toHaveBeenCalled()
    expect(document.activeElement).toBe(button1)

    button2.disabled = false
    button2.setAttribute('inert', '')
    expect(tabIndexInc.findLastElement()).toBe(button1)
  })

  it('should cancel pending rAF focus restoration when destroy() is called', async () => {
    const previousButton = document.createElement('button')
    document.body.appendChild(previousButton)
    previousButton.focus()

    const parentRef = ref(parentElement)
    const tabIndexInc = new TabIndexInclude(parentRef)
    tabIndexInc.updateOldElement()

    const fallbackButton = document.createElement('button')
    document.body.appendChild(fallbackButton)
    fallbackButton.focus()
    document.body.removeChild(fallbackButton)

    tabIndexInc.reset()
    tabIndexInc.destroy()

    await new Promise(resolve => requestAnimationFrame(resolve))
    expect(document.activeElement).not.toBe(previousButton)

    document.body.removeChild(previousButton)
  })

  it('should ignore Tab keydown during IME composition', () => {
    const parentRef = ref(parentElement)
    const tabIndexInc = new TabIndexInclude(parentRef)
    tabIndexInc.goTo()

    button2.focus()
    const composingEvent = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true })
    Object.defineProperty(composingEvent, 'isComposing', { value: true })
    const preventDefaultSpy = vi.spyOn(composingEvent, 'preventDefault')
    document.body.dispatchEvent(composingEvent)

    expect(preventDefaultSpy).not.toHaveBeenCalled()
  })

  it('should preserve pre-existing tabindex on container element when toFocus() falls back to container', async () => {
    const emptyContainer = document.createElement('div')
    emptyContainer.setAttribute('tabindex', '0')
    document.body.appendChild(emptyContainer)

    const tabIndexInc = new TabIndexInclude(ref(emptyContainer))
    tabIndexInc.goTo()

    expect(document.activeElement).toBe(emptyContainer)
    await new Promise(resolve => requestAnimationFrame(resolve))
    expect(emptyContainer.getAttribute('tabindex')).toBe('0')

    tabIndexInc.destroy()
    document.body.removeChild(emptyContainer)
  })
})
