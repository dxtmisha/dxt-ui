// @vitest-environment jsdom
import { describe, it, expect, expectTypeOf, vi, beforeEach, afterEach } from 'vitest'
import { createSSRApp, h, ref } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { type ConstrBind, DesignLifecycleAbstract } from '@dxtmisha/functional'
import { FocusDirectionActive } from '../FocusDirectionActive'
import { FocusDirectionCoordinates } from '../FocusDirectionCoordinates'
import { FocusDirectionInclude } from '../FocusDirectionInclude'

/**
 * Helper to mock getBoundingClientRect for deterministic 2D spatial geometry tests.
 *
 * Вспомогательная функция для мокирования getBoundingClientRect в детерминированных 2D-тестах.
 */
function mockBoundingRect(
  element: HTMLElement,
  left: number,
  top: number,
  width = 100,
  height = 100
): void {
  vi.spyOn(element, 'getBoundingClientRect').mockReturnValue({
    left,
    top,
    width,
    height,
    right: left + width,
    bottom: top + height,
    x: left,
    y: top,
    toJSON: () => {}
  })
}

describe('FocusDirectionInclude', () => {
  let parentElement: HTMLElement
  let itemTopLeft: HTMLElement
  let itemTopRight: HTMLElement
  let itemBottomLeft: HTMLElement
  let itemBottomRight: HTMLElement

  beforeEach(() => {
    parentElement = document.createElement('div')

    itemTopLeft = document.createElement('div')
    itemTopLeft.className = 'sys-focusDirection__item'
    itemTopLeft.scrollIntoView = vi.fn()
    mockBoundingRect(itemTopLeft, 0, 0) // center: (50, 50)

    itemTopRight = document.createElement('div')
    itemTopRight.className = 'sys-focusDirection__item'
    itemTopRight.scrollIntoView = vi.fn()
    mockBoundingRect(itemTopRight, 100, 0) // center: (150, 50)

    itemBottomLeft = document.createElement('div')
    itemBottomLeft.className = 'sys-focusDirection__item'
    itemBottomLeft.scrollIntoView = vi.fn()
    mockBoundingRect(itemBottomLeft, 0, 100) // center: (50, 150)

    itemBottomRight = document.createElement('div')
    itemBottomRight.className = 'sys-focusDirection__item'
    itemBottomRight.scrollIntoView = vi.fn()
    mockBoundingRect(itemBottomRight, 100, 100) // center: (150, 150)

    parentElement.append(itemTopLeft, itemTopRight, itemBottomLeft, itemBottomRight)
    document.body.appendChild(parentElement)
  })

  afterEach(() => {
    parentElement.remove()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & 2D spatial navigation)', () => {
    it('should extend DesignLifecycleAbstract and return typed container/item bindings', () => {
      const parentRef = ref<HTMLElement | undefined>(parentElement)
      const focusDirection = new FocusDirectionInclude(parentRef)

      expect(focusDirection).toBeInstanceOf(DesignLifecycleAbstract)
      expectTypeOf(focusDirection.binds).toEqualTypeOf<ConstrBind>()
      expectTypeOf(focusDirection.bindsItem()).toEqualTypeOf<ConstrBind>()
      expectTypeOf(focusDirection.getActive()).toEqualTypeOf<FocusDirectionActive<HTMLElement>>()
      expectTypeOf(focusDirection.getCoordinates()).toEqualTypeOf<FocusDirectionCoordinates<HTMLElement>>()

      expect(focusDirection.getActive()).toBeInstanceOf(FocusDirectionActive)
      expect(focusDirection.getCoordinates()).toBeInstanceOf(FocusDirectionCoordinates)
      expect(focusDirection.is()).toBe(true)
      expect(focusDirection.binds).toEqual({
        tabindex: 0,
        onFocus: focusDirection.onFocus,
        onBlur: focusDirection.onBlur
      })
      expect(focusDirection.bindsItem()).toEqual({ tabindex: -1 })
    })

    it('should accept Ref, raw element, getter function, and getter returning Ref for container element', () => {
      const focusDirectionFromGetter = new FocusDirectionInclude(() => parentElement)

      focusDirectionFromGetter.onFocus()
      expect(itemTopLeft.classList.contains('sys-focusDirection__item--active')).toBe(true)

      parentElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
      expect(itemTopRight.classList.contains('sys-focusDirection__item--active')).toBe(true)

      focusDirectionFromGetter.onBlur()
      focusDirectionFromGetter.onUnmounted()

      const parentRef = ref<HTMLElement | undefined>(parentElement)
      const focusDirectionFromRefGetter = new FocusDirectionInclude(() => parentRef)

      focusDirectionFromRefGetter.onFocus()
      expect(itemTopLeft.classList.contains('sys-focusDirection__item--active')).toBe(true)

      focusDirectionFromRefGetter.onBlur()
      focusDirectionFromRefGetter.onUnmounted()

      const focusDirectionFromElement = new FocusDirectionInclude(parentElement)

      focusDirectionFromElement.onFocus()
      expect(itemTopLeft.classList.contains('sys-focusDirection__item--active')).toBe(true)

      focusDirectionFromElement.onUnmounted()
    })

    it('should update aria-activedescendant when active element has an id', () => {
      itemTopLeft.id = 'focus-item-1'
      itemTopRight.id = 'focus-item-2'

      const focusDirection = new FocusDirectionInclude(ref<HTMLElement | undefined>(parentElement))
      expect(focusDirection.binds['aria-activedescendant']).toBeUndefined()

      focusDirection.onFocus()
      expect(focusDirection.binds['aria-activedescendant']).toBe('focus-item-1')

      parentElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
      expect(focusDirection.binds['aria-activedescendant']).toBe('focus-item-2')

      focusDirection.onBlur()
      expect(focusDirection.binds['aria-activedescendant']).toBeUndefined()
    })

    it('should activate activeSelector first, falling back to first selector item on focus', () => {
      itemTopRight.classList.add('custom--selected')

      const focusDirection = new FocusDirectionInclude(
        ref<HTMLElement | undefined>(parentElement),
        '.sys-focusDirection__item',
        '.custom--selected',
        'custom--focus'
      )

      focusDirection.onFocus()
      expect(itemTopRight.classList.contains('custom--focus')).toBe(true)
      expect(itemTopLeft.classList.contains('custom--focus')).toBe(false)

      focusDirection.onBlur()
      expect(itemTopRight.classList.contains('custom--focus')).toBe(false)

      itemTopRight.classList.remove('custom--selected')
      focusDirection.onFocus()
      expect(itemTopLeft.classList.contains('custom--focus')).toBe(true)

      focusDirection.onUnmounted()
    })

    it('should navigate across all 4 arrow directions (Right -> Down -> Left -> Up) and call scrollIntoView', () => {
      const focusDirection = new FocusDirectionInclude(ref<HTMLElement | undefined>(parentElement))
      focusDirection.onFocus()

      expect(itemTopLeft.classList.contains('sys-focusDirection__item--active')).toBe(true)

      parentElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true, cancelable: true }))
      expect(itemTopRight.classList.contains('sys-focusDirection__item--active')).toBe(true)
      expect(itemTopRight.scrollIntoView).toHaveBeenCalledWith({ block: 'nearest', inline: 'nearest' })

      parentElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, cancelable: true }))
      expect(itemBottomRight.classList.contains('sys-focusDirection__item--active')).toBe(true)

      parentElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true, cancelable: true }))
      expect(itemBottomLeft.classList.contains('sys-focusDirection__item--active')).toBe(true)

      parentElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true, cancelable: true }))
      expect(itemTopLeft.classList.contains('sys-focusDirection__item--active')).toBe(true)

      focusDirection.onUnmounted()
    })

    it('should prefer aligned candidate over closer misaligned diagonal candidate via cross-axis weight', () => {
      const misalignedNear = document.createElement('div')
      misalignedNear.className = 'sys-focusDirection__item'
      misalignedNear.scrollIntoView = vi.fn()
      // Center (120, 120): dx=70, dy=70 => weighted ArrowDown distance = 70^2 * 4 + 70^2 = 24500
      // itemBottomLeft center (50, 150): dx=0, dy=100 => weighted ArrowDown distance = 0 + 100^2 = 10000
      mockBoundingRect(misalignedNear, 70, 70)
      parentElement.appendChild(misalignedNear)

      const focusDirection = new FocusDirectionInclude(ref<HTMLElement | undefined>(parentElement))
      focusDirection.onFocus()

      parentElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
      expect(itemBottomLeft.classList.contains('sys-focusDirection__item--active')).toBe(true)
      expect(misalignedNear.classList.contains('sys-focusDirection__item--active')).toBe(false)

      focusDirection.onUnmounted()
    })

    it('should trigger click and preventDefault on Enter and Space keys', () => {
      const focusDirection = new FocusDirectionInclude(ref<HTMLElement | undefined>(parentElement))
      focusDirection.onFocus()

      const clickSpy = vi.spyOn(itemTopLeft, 'click')

      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true })
      parentElement.dispatchEvent(enterEvent)
      expect(enterEvent.defaultPrevented).toBe(true)
      expect(clickSpy).toHaveBeenCalledTimes(1)

      const spaceEvent = new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true })
      parentElement.dispatchEvent(spaceEvent)
      expect(spaceEvent.defaultPrevented).toBe(true)
      expect(clickSpy).toHaveBeenCalledTimes(2)

      focusDirection.onUnmounted()
    })
  })

  describe('Boundary values, non-destructive merging, and IME composition guard', () => {
    it('should preserve explicit tabindex 0 and prevent undefined from overwriting tabindex -1 in bindsItem', () => {
      const focusDirection = new FocusDirectionInclude(ref<HTMLElement | undefined>(parentElement))
      const extra = { class: 'card', tabindex: undefined }
      const extraCopy = { ...extra }

      expect(focusDirection.bindsItem(extra)).toEqual({ class: 'card', tabindex: -1 })
      expect(extra).toEqual(extraCopy)
      expect(focusDirection.bindsItem({ tabindex: 0, class: 'card' })).toEqual({ class: 'card', tabindex: 0 })
    })

    it('should ignore arrow and Enter keys during active IME composition (isComposing: true)', () => {
      const focusDirection = new FocusDirectionInclude(ref<HTMLElement | undefined>(parentElement))
      focusDirection.onFocus()

      const clickSpy = vi.spyOn(itemTopLeft, 'click')

      const arrowEvent = new KeyboardEvent('keydown', { key: 'ArrowRight', isComposing: true, bubbles: true, cancelable: true })
      parentElement.dispatchEvent(arrowEvent)
      expect(arrowEvent.defaultPrevented).toBe(false)
      expect(itemTopLeft.classList.contains('sys-focusDirection__item--active')).toBe(true)

      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', isComposing: true, bubbles: true, cancelable: true })
      parentElement.dispatchEvent(enterEvent)
      expect(enterEvent.defaultPrevented).toBe(false)
      expect(clickSpy).not.toHaveBeenCalled()

      focusDirection.onUnmounted()
    })

    it('should ignore arrow and Enter/Space keys when modifier/meta keys are pressed', () => {
      const focusDirection = new FocusDirectionInclude(ref<HTMLElement | undefined>(parentElement))
      focusDirection.onFocus()

      const clickSpy = vi.spyOn(itemTopLeft, 'click')

      for (const modifier of ['ctrlKey', 'altKey', 'metaKey'] as const) {
        const arrowEvent = new KeyboardEvent('keydown', {
          key: 'ArrowRight',
          [modifier]: true,
          bubbles: true,
          cancelable: true
        })
        parentElement.dispatchEvent(arrowEvent)
        expect(arrowEvent.defaultPrevented).toBe(false)
        expect(itemTopLeft.classList.contains('sys-focusDirection__item--active')).toBe(true)

        const enterEvent = new KeyboardEvent('keydown', {
          key: 'Enter',
          [modifier]: true,
          bubbles: true,
          cancelable: true
        })
        parentElement.dispatchEvent(enterEvent)
        expect(enterEvent.defaultPrevented).toBe(false)
        expect(clickSpy).not.toHaveBeenCalled()
      }

      focusDirection.onUnmounted()
    })

    it('should stay put when no candidate exists in direction', () => {
      const focusDirection = new FocusDirectionInclude(ref<HTMLElement | undefined>(parentElement))
      focusDirection.onFocus()

      parentElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }))
      expect(itemTopLeft.classList.contains('sys-focusDirection__item--active')).toBe(true)

      parentElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }))
      expect(itemTopLeft.classList.contains('sys-focusDirection__item--active')).toBe(true)

      focusDirection.onUnmounted()
    })
  })

  describe('Dynamic control toggling, detached DOM recovery, and empty/undefined containers', () => {
    it('should return empty binds and skip starting listener when control is false', () => {
      const addSpy = vi.spyOn(parentElement, 'addEventListener')
      const focusDirection = new FocusDirectionInclude(
        ref<HTMLElement | undefined>(parentElement),
        undefined,
        undefined,
        undefined,
        false
      )

      expect(focusDirection.is()).toBe(false)
      expect(focusDirection.binds).toEqual({})
      expect(focusDirection.bindsItem({ class: 'item' })).toEqual({ class: 'item' })

      focusDirection.onFocus()
      expect(addSpy).not.toHaveBeenCalled()
    })

    it('should stop intercepting keys and clear active state if control flips from true to false while focused', () => {
      let enabled = true
      const focusDirection = new FocusDirectionInclude(
        ref<HTMLElement | undefined>(parentElement),
        undefined,
        undefined,
        undefined,
        () => enabled
      )

      focusDirection.onFocus()
      expect(itemTopLeft.classList.contains('sys-focusDirection__item--active')).toBe(true)

      enabled = false
      const clickSpy = vi.spyOn(itemTopLeft, 'click')
      const arrowEvent = new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true, cancelable: true })
      parentElement.dispatchEvent(arrowEvent)

      expect(arrowEvent.defaultPrevented).toBe(false)
      expect(itemTopLeft.classList.contains('sys-focusDirection__item--active')).toBe(false)
      expect(itemTopRight.classList.contains('sys-focusDirection__item--active')).toBe(false)
      expect(clickSpy).not.toHaveBeenCalled()
    })

    it('should immediately clear active state and stop listeners synchronously when reactive control ref flips to false', () => {
      const controlRef = ref(true)
      const removeSpy = vi.spyOn(parentElement, 'removeEventListener')
      itemTopLeft.id = 'reactive-item-1'

      const focusDirection = new FocusDirectionInclude(
        ref<HTMLElement | undefined>(parentElement),
        undefined,
        undefined,
        undefined,
        () => controlRef.value
      )

      focusDirection.onFocus()
      expect(itemTopLeft.classList.contains('sys-focusDirection__item--active')).toBe(true)
      expect(focusDirection.binds['aria-activedescendant']).toBe('reactive-item-1')

      controlRef.value = false

      expect(itemTopLeft.classList.contains('sys-focusDirection__item--active')).toBe(false)
      expect(focusDirection.binds).toEqual({})
      expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function), undefined)

      controlRef.value = true
      focusDirection.onFocus()
      expect(itemTopLeft.classList.contains('sys-focusDirection__item--active')).toBe(true)

      focusDirection.onUnmounted()
    })

    it('should stop reactive control watcher on onBlur and onUnmounted without redundant callbacks', () => {
      const controlRef = ref(true)
      const focusDirection = new FocusDirectionInclude(
        ref<HTMLElement | undefined>(parentElement),
        undefined,
        undefined,
        undefined,
        () => controlRef.value
      )

      focusDirection.onFocus()
      focusDirection.onBlur()

      const clearSpy = vi.spyOn(focusDirection.getActive(), 'clear')
      controlRef.value = false
      expect(clearSpy).not.toHaveBeenCalled()

      controlRef.value = true
      focusDirection.onFocus()
      focusDirection.onUnmounted()

      controlRef.value = false
      expect(clearSpy).not.toHaveBeenCalled()
    })

    it('should recover cleanly when active element is detached from DOM during re-render', () => {
      const focusDirection = new FocusDirectionInclude(ref<HTMLElement | undefined>(parentElement))
      focusDirection.onFocus()

      const detachedClickSpy = vi.spyOn(itemTopLeft, 'click')
      itemTopLeft.remove()

      parentElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }))
      expect(detachedClickSpy).not.toHaveBeenCalled()

      parentElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, cancelable: true }))
      expect(itemTopRight.classList.contains('sys-focusDirection__item--active')).toBe(true)

      focusDirection.onUnmounted()
    })

    it('should recover via activateDefault when container is focused before dynamic items mount', () => {
      parentElement.innerHTML = ''
      const focusDirection = new FocusDirectionInclude(ref<HTMLElement | undefined>(parentElement))
      focusDirection.onFocus()

      parentElement.append(itemTopLeft, itemTopRight)
      parentElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true, cancelable: true }))
      expect(itemTopLeft.classList.contains('sys-focusDirection__item--active')).toBe(true)

      focusDirection.onUnmounted()
    })

    it('should handle undefined element ref, empty container, and single item safely without throwing', () => {
      const emptyRef = ref<HTMLElement | undefined>(undefined)
      const focusDirection = new FocusDirectionInclude(emptyRef)

      expect(() => focusDirection.getActive().initDefault()).not.toThrow()
      expect(() => focusDirection.onFocus()).not.toThrow()
      expect(() => focusDirection.getActive().clear()).not.toThrow()
      expect(() => focusDirection.onBlur()).not.toThrow()
      expect(() => focusDirection.onUnmounted()).not.toThrow()
    })
  })

  describe('Lifecycle cleanup and listener leak prevention', () => {
    it('should detach keydown listener on onUnmounted without leaking listeners', () => {
      const addSpy = vi.spyOn(parentElement, 'addEventListener')
      const removeSpy = vi.spyOn(parentElement, 'removeEventListener')
      const focusDirection = new FocusDirectionInclude(ref<HTMLElement | undefined>(parentElement))

      focusDirection.onFocus()
      expect(addSpy).toHaveBeenCalledWith('keydown', expect.any(Function), undefined)

      focusDirection.onUnmounted()
      expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function), undefined)

      itemTopLeft.classList.add('sys-focusDirection__item--active')
      parentElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
      expect(itemTopRight.classList.contains('sys-focusDirection__item--active')).toBe(false)
    })

    it('should isolate listeners and active state across independent instances', () => {
      const secondContainer = document.createElement('div')
      const secondFirst = document.createElement('div')
      secondFirst.id = 'second-1'
      secondFirst.className = 'sys-focusDirection__item'
      secondContainer.appendChild(secondFirst)
      document.body.appendChild(secondContainer)

      itemTopLeft.id = 'first-1'

      const firstDirection = new FocusDirectionInclude(ref<HTMLElement | undefined>(parentElement))
      const secondDirection = new FocusDirectionInclude(ref<HTMLElement | undefined>(secondContainer))

      firstDirection.onFocus()
      expect(firstDirection.binds['aria-activedescendant']).toBe('first-1')
      expect(secondDirection.binds['aria-activedescendant']).toBeUndefined()

      secondDirection.onFocus()
      expect(firstDirection.binds['aria-activedescendant']).toBe('first-1')
      expect(secondDirection.binds['aria-activedescendant']).toBe('second-1')

      firstDirection.onUnmounted()
      secondDirection.onUnmounted()
      secondContainer.remove()
    })

    it('should render container and item bindings safely in SSR renderToString', async () => {
      const focusDirection = new FocusDirectionInclude(ref<HTMLElement | undefined>(undefined))

      const app = createSSRApp({
        render() {
          return h(
            'div',
            focusDirection.binds,
            [h('button', focusDirection.bindsItem({ type: 'button' }), 'Item')]
          )
        }
      })

      const html = await renderToString(app)
      expect(html).toContain('tabindex="0"')
      expect(html).toContain('tabindex="-1"')
      expect(html).not.toContain('aria-activedescendant')
      expect(() => focusDirection.onUnmounted()).not.toThrow()
    })
  })
})
