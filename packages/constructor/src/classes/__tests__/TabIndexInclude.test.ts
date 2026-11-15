// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import * as functional from '@dxtmisha/functional'
import { TabIndexInclude } from '../TabIndexInclude'

vi.mock('@dxtmisha/functional', async () => {
  const actual = await vi.importActual<typeof import('@dxtmisha/functional')>('@dxtmisha/functional')
  return {
    ...actual,
    isDomRuntime: vi.fn().mockReturnValue(true),
    isElementVisible: vi.fn().mockReturnValue(true)
  }
})

describe('TabIndexInclude', () => {
  let parentElement: HTMLElement
  let button1: HTMLButtonElement
  let button2: HTMLButtonElement
  const instances: TabIndexInclude[] = []

  const createInstance = (
    ...args: ConstructorParameters<typeof TabIndexInclude>
  ): TabIndexInclude => {
    const instance = new TabIndexInclude(...args)
    instances.push(instance)
    return instance
  }

  beforeEach(() => {
    parentElement = document.createElement('div')
    button1 = document.createElement('button')
    button1.tabIndex = 0
    button2 = document.createElement('button')
    button2.tabIndex = 0

    parentElement.append(button1, button2)
    document.body.appendChild(parentElement)
  })

  afterEach(() => {
    instances.splice(0).forEach(instance => instance.destroy())
    document.body.innerHTML = ''
    vi.restoreAllMocks()
    vi.mocked(functional.isDomRuntime).mockReturnValue(true)
    vi.mocked(functional.isElementVisible).mockReturnValue(true)
  })

  describe('Standard functional requirements (Initialization, lookup, goTo, reset, toggle)', () => {
    it('should find first and last focusable elements with Ref and getter function', () => {
      const refInstance = createInstance(ref(parentElement))
      expect(refInstance.findFirstElement()).toBe(button1)
      expect(refInstance.findLastElement()).toBe(button2)

      const getterInstance = createInstance(() => parentElement)
      expect(getterInstance.findFirstElement()).toBe(button1)
      expect(getterInstance.findLastElement()).toBe(button2)

      const emptyInstance = createInstance(() => undefined)
      expect(emptyInstance.findFirstElement()).toBeUndefined()
      expect(emptyInstance.findLastElement()).toBeUndefined()
    })

    it('should focus the first focusable element on goTo()', () => {
      const tabIndexInc = createInstance(ref(parentElement))

      expect(tabIndexInc.goTo()).toBe(tabIndexInc)
      expect(document.activeElement).toBe(button1)
    })

    it('should save and return focus to oldElement on reset() when focus is lost to body or detached element', async () => {
      const tabIndexInc = createInstance(ref(parentElement))

      button2.focus()
      tabIndexInc.updateOldElement()

      const outsideButton = document.createElement('button')
      outsideButton.tabIndex = 0
      document.body.appendChild(outsideButton)
      outsideButton.focus()
      document.body.removeChild(outsideButton)

      tabIndexInc.reset()

      await new Promise(resolve => requestAnimationFrame(resolve))
      expect(document.activeElement).toBe(button2)
    })

    it('should save active element inside ShadowRoot on updateOldElement()', async () => {
      const host = document.createElement('div')
      const shadowRoot = host.attachShadow({ mode: 'open' })
      const shadowButton = document.createElement('button')
      shadowButton.tabIndex = 0
      shadowRoot.appendChild(shadowButton)
      document.body.appendChild(host)
      shadowButton.focus()

      const tabIndexInc = createInstance(ref(parentElement))
      tabIndexInc.updateOldElement()

      document.body.focus()
      tabIndexInc.reset()

      await new Promise(resolve => requestAnimationFrame(resolve))
      expect(shadowRoot.activeElement).toBe(shadowButton)
    })

    it('should NOT overwrite focus on reset() when activeElement moved intentionally to another connected element in body', async () => {
      const previousButton = document.createElement('button')
      const targetInput = document.createElement('input')
      document.body.append(previousButton, targetInput)
      previousButton.focus()

      const tabIndexInc = createInstance(ref(parentElement))
      tabIndexInc.updateOldElement()
      targetInput.focus()

      tabIndexInc.reset()
      await new Promise(resolve => requestAnimationFrame(resolve))

      expect(document.activeElement).toBe(targetInput)
    })

    it('should toggle focus management via toggle(true) and toggle(false)', async () => {
      const previousButton = document.createElement('button')
      document.body.appendChild(previousButton)
      previousButton.focus()

      const tabIndexInc = createInstance(ref(parentElement))
      tabIndexInc.updateOldElement()

      tabIndexInc.toggle(true)
      expect(document.activeElement).toBe(button1)

      button1.remove()
      button2.remove()
      tabIndexInc.toggle(false)
      await new Promise(resolve => requestAnimationFrame(resolve))

      expect(document.activeElement).toBe(previousButton)
    })
  })

  describe('Tab trapping, keyboard navigation & IME guard', () => {
    it('should wrap focus forward on Tab and backward on Shift+Tab', () => {
      const tabIndexInc = createInstance(ref(parentElement))
      tabIndexInc.goTo()

      button2.focus()
      const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true })
      const forwardPreventSpy = vi.spyOn(tabEvent, 'preventDefault')
      document.body.dispatchEvent(tabEvent)

      expect(document.activeElement).toBe(button1)
      expect(forwardPreventSpy).toHaveBeenCalledTimes(1)

      const shiftTabEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true })
      const backwardPreventSpy = vi.spyOn(shiftTabEvent, 'preventDefault')
      document.body.dispatchEvent(shiftTabEvent)

      expect(document.activeElement).toBe(button2)
      expect(backwardPreventSpy).toHaveBeenCalledTimes(1)
    })

    it('should redirect Tab from document.body to first focusable element', () => {
      const tabIndexInc = createInstance(ref(parentElement))
      tabIndexInc.goTo()

      button1.blur()
      const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true })
      const preventSpy = vi.spyOn(tabEvent, 'preventDefault')
      document.body.dispatchEvent(tabEvent)

      expect(document.activeElement).toBe(button1)
      expect(preventSpy).toHaveBeenCalledTimes(1)
    })

    it('should not call preventDefault on Tab from document.body when container has no focusable elements', () => {
      button1.remove()
      button2.remove()

      const tabIndexInc = createInstance(ref(parentElement))
      tabIndexInc.goTo()
      document.body.focus()

      const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true })
      const preventSpy = vi.spyOn(tabEvent, 'preventDefault')
      document.body.dispatchEvent(tabEvent)

      expect(preventSpy).not.toHaveBeenCalled()
    })

    it('should keep focus on single focusable element for both Tab and Shift+Tab', () => {
      button2.remove()
      const tabIndexInc = createInstance(ref(parentElement))
      tabIndexInc.goTo()

      const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true })
      document.body.dispatchEvent(tabEvent)
      expect(document.activeElement).toBe(button1)

      const shiftTabEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true })
      document.body.dispatchEvent(shiftTabEvent)
      expect(document.activeElement).toBe(button1)
    })

    it('should ignore Tab keydown during IME composition and non-Tab keys', () => {
      const tabIndexInc = createInstance(ref(parentElement))
      tabIndexInc.goTo()

      button2.focus()
      const composingEvent = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true })
      Object.defineProperty(composingEvent, 'isComposing', { value: true })
      const composingPreventSpy = vi.spyOn(composingEvent, 'preventDefault')
      document.body.dispatchEvent(composingEvent)
      expect(composingPreventSpy).not.toHaveBeenCalled()

      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })
      const enterPreventSpy = vi.spyOn(enterEvent, 'preventDefault')
      document.body.dispatchEvent(enterEvent)
      expect(enterPreventSpy).not.toHaveBeenCalled()
    })
  })

  describe('Callback gates (active, activeOpen, activeClose) & boundary conditions', () => {
    it('should skip disabled, inert, and invisible elements when scanning focusables', () => {
      const tabIndexInc = createInstance(ref(parentElement))

      button1.disabled = true
      expect(tabIndexInc.findFirstElement()).toBe(button2)
      expect(tabIndexInc.findLastElement()).toBe(button2)

      button1.disabled = false
      button2.disabled = true
      expect(tabIndexInc.findFirstElement()).toBe(button1)
      expect(tabIndexInc.findLastElement()).toBe(button1)

      button2.disabled = false
      button2.setAttribute('inert', '')
      expect(tabIndexInc.findLastElement()).toBe(button1)

      vi.mocked(functional.isElementVisible).mockReturnValue(false)
      expect(tabIndexInc.findFirstElement()).toBeUndefined()
    })

    it('should skip non-focusable clutter nodes, hidden inputs, and tabindex=-1 without checking visibility on plain divs/spans', () => {
      const container = document.createElement('div')
      const span = document.createElement('span')
      const hiddenInput = document.createElement('input')
      hiddenInput.type = 'hidden'
      const negativeTab = document.createElement('button')
      negativeTab.tabIndex = -1
      const link = document.createElement('a')
      link.href = '#target'
      const focusableDiv = document.createElement('div')
      focusableDiv.tabIndex = 0

      container.append(span, hiddenInput, negativeTab, link, focusableDiv)
      document.body.appendChild(container)

      const visibleSpy = vi.mocked(functional.isElementVisible)
      visibleSpy.mockClear()

      const tabIndexInc = createInstance(ref(container))
      expect(tabIndexInc.findFirstElement()).toBe(link)
      expect(tabIndexInc.findLastElement()).toBe(focusableDiv)
      expect(visibleSpy).not.toHaveBeenCalledWith(span)
      expect(visibleSpy).not.toHaveBeenCalledWith(hiddenInput)
      expect(visibleSpy).not.toHaveBeenCalledWith(negativeTab)
    })

    it('should preserve pre-existing tabindex or remove temporary tabindex on container fallback', async () => {
      const presetContainer = document.createElement('div')
      presetContainer.setAttribute('tabindex', '0')
      document.body.appendChild(presetContainer)

      const presetInstance = createInstance(ref(presetContainer))
      presetInstance.goTo()
      expect(document.activeElement).toBe(presetContainer)

      await new Promise(resolve => requestAnimationFrame(resolve))
      expect(presetContainer.getAttribute('tabindex')).toBe('0')

      const plainContainer = document.createElement('div')
      document.body.appendChild(plainContainer)

      const plainInstance = createInstance(ref(plainContainer))
      plainInstance.goTo()
      expect(document.activeElement).toBe(plainContainer)
      expect(plainContainer.getAttribute('tabindex')).toBe('-1')

      await new Promise(resolve => requestAnimationFrame(resolve))
      expect(plainContainer.hasAttribute('tabindex')).toBe(false)
    })

    it('should respect active=false and activeOpen=false gates', () => {
      const inactiveInstance = createInstance(ref(parentElement), () => false)
      inactiveInstance.goTo()
      expect(document.activeElement).not.toBe(button1)

      const closedOpenInstance = createInstance(ref(parentElement), () => true, () => false)
      closedOpenInstance.goTo()
      expect(document.activeElement).not.toBe(button1)
    })

    it('should skip restoring focus to oldElement on reset() when activeClose returns false, while stopping Tab listener', async () => {
      const previousButton = document.createElement('button')
      document.body.appendChild(previousButton)
      previousButton.focus()

      const tabIndexInc = createInstance(ref(parentElement), () => true, () => true, () => false)
      tabIndexInc.updateOldElement()
      tabIndexInc.goTo()

      const fallbackButton = document.createElement('button')
      document.body.appendChild(fallbackButton)
      fallbackButton.focus()
      document.body.removeChild(fallbackButton)

      tabIndexInc.reset()
      await new Promise(resolve => requestAnimationFrame(resolve))

      expect(document.activeElement).not.toBe(previousButton)

      button2.focus()
      const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true })
      const preventDefaultSpy = vi.spyOn(tabEvent, 'preventDefault')
      document.body.dispatchEvent(tabEvent)
      expect(preventDefaultSpy).not.toHaveBeenCalled()
    })
  })

  describe('Lifecycle cleanup, SSR safety & resource disposal', () => {
    it('should cancel pending rAF focus restoration when destroy() or onUnmounted() is called', async () => {
      const previousButton = document.createElement('button')
      document.body.appendChild(previousButton)
      previousButton.focus()

      const tabIndexInc = createInstance(ref(parentElement))
      tabIndexInc.updateOldElement()
      tabIndexInc.goTo()

      const fallbackButton = document.createElement('button')
      document.body.appendChild(fallbackButton)
      fallbackButton.focus()
      document.body.removeChild(fallbackButton)

      tabIndexInc.reset()
      tabIndexInc.onUnmounted()

      await new Promise(resolve => requestAnimationFrame(resolve))
      expect(document.activeElement).not.toBe(previousButton)

      button2.focus()
      const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true })
      const preventSpy = vi.spyOn(tabEvent, 'preventDefault')
      document.body.dispatchEvent(tabEvent)
      expect(preventSpy).not.toHaveBeenCalled()
    })

    it('should operate safely without errors in non-DOM (SSR) runtime', () => {
      vi.mocked(functional.isDomRuntime).mockReturnValue(false)
      const tabIndexInc = createInstance(ref(parentElement))

      expect(() => tabIndexInc.updateOldElement()).not.toThrow()
      expect(() => tabIndexInc.goTo()).not.toThrow()
      expect(() => tabIndexInc.reset()).not.toThrow()
      expect(() => tabIndexInc.onUnmounted()).not.toThrow()
    })
  })
})
