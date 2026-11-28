// @vitest-environment jsdom
import { describe, it, expect, expectTypeOf, beforeEach, afterEach, vi } from 'vitest'
import { createSSRApp, h, ref } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { FocusDirectionActive } from '../FocusDirectionActive'
import type { AriaList } from '../../../types/ariaTypes'

describe('FocusDirectionActive', () => {
  let parentElement: HTMLElement
  let itemFirst: HTMLElement
  let itemSecond: HTMLElement

  beforeEach(() => {
    parentElement = document.createElement('div')

    itemFirst = document.createElement('div')
    itemFirst.id = 'item-1'
    itemFirst.className = 'sys-focusDirection__item'

    itemSecond = document.createElement('div')
    itemSecond.id = 'item-2'
    itemSecond.className = 'sys-focusDirection__item'

    parentElement.append(itemFirst, itemSecond)
    document.body.appendChild(parentElement)
  })

  afterEach(() => {
    parentElement.remove()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should return empty aria and undefined id initially with strict return types', () => {
      const active = new FocusDirectionActive(ref(parentElement))

      expect(active.id).toBeUndefined()
      expect(active.aria).toEqual({})
      expect(active.is()).toBe(false)
      expect(active.get()).toBeUndefined()
      expect(active.getElement()).toBe(parentElement)

      expectTypeOf(active.id).toEqualTypeOf<string | undefined>()
      expectTypeOf(active.aria).toEqualTypeOf<AriaList>()
      expectTypeOf(active.is()).toEqualTypeOf<boolean>()
      expectTypeOf(active.get()).toEqualTypeOf<HTMLElement | undefined>()
      expectTypeOf(active.getElement()).toEqualTypeOf<HTMLElement | undefined>()
      expectTypeOf(active.set(itemFirst)).toEqualTypeOf<FocusDirectionActive<HTMLElement>>()
    })

    it('should accept Ref, raw element, getter function, and getter returning Ref', () => {
      const fromRef = new FocusDirectionActive(ref(parentElement))
      fromRef.initDefault()
      expect(fromRef.get()).toBe(itemFirst)
      fromRef.clear()

      const fromElement = new FocusDirectionActive(parentElement)
      fromElement.initDefault()
      expect(fromElement.get()).toBe(itemFirst)
      fromElement.clear()

      const fromGetter = new FocusDirectionActive(() => parentElement)
      fromGetter.initDefault()
      expect(fromGetter.get()).toBe(itemFirst)
      fromGetter.clear()

      const parentRef = ref<HTMLElement | undefined>(parentElement)
      const fromRefGetter = new FocusDirectionActive(() => parentRef)
      fromRefGetter.initDefault()
      expect(fromRefGetter.get()).toBe(itemFirst)
      fromRefGetter.clear()
    })

    it('should activate default element via activeSelector first, then selector fallback', () => {
      itemSecond.classList.add('custom--selected')

      const active = new FocusDirectionActive(
        () => parentElement,
        '.sys-focusDirection__item',
        '.custom--selected',
        'custom--focus'
      )

      active.initDefault()
      expect(active.is()).toBe(true)
      expect(active.get()).toBe(itemSecond)
      expect(itemSecond.classList.contains('custom--focus')).toBe(true)
      expect(active.id).toBe('item-2')
      expect(active.aria).toEqual({ 'aria-activedescendant': 'item-2' })

      active.clear()
      expect(itemSecond.classList.contains('custom--focus')).toBe(false)
      expect(active.id).toBeUndefined()
      expect(active.aria).toEqual({})

      itemSecond.classList.remove('custom--selected')
      active.initDefault()
      expect(active.get()).toBe(itemFirst)
      expect(itemFirst.classList.contains('custom--focus')).toBe(true)
      expect(active.id).toBe('item-1')
    })

    it('should not override already active element when initDefault() is called again', () => {
      const active = new FocusDirectionActive(ref(parentElement))

      active.set(itemSecond)
      active.initDefault()

      expect(active.get()).toBe(itemSecond)
      expect(active.id).toBe('item-2')
      expect(itemFirst.classList.contains('sys-focusDirection__item--active')).toBe(false)
      expect(itemSecond.classList.contains('sys-focusDirection__item--active')).toBe(true)
    })

    it('should set a specific active element and clear previous active classes', () => {
      const active = new FocusDirectionActive(ref(parentElement))

      active.set(itemFirst)
      expect(itemFirst.classList.contains('sys-focusDirection__item--active')).toBe(true)
      expect(active.id).toBe('item-1')

      active.set(itemSecond)
      expect(itemFirst.classList.contains('sys-focusDirection__item--active')).toBe(false)
      expect(itemSecond.classList.contains('sys-focusDirection__item--active')).toBe(true)
      expect(active.get()).toBe(itemSecond)
      expect(active.id).toBe('item-2')
    })
  })

  describe('Boundary values, empty strings, and nullish inputs', () => {
    it('should handle empty activeClass and empty selector without throwing DOMException', () => {
      const active = new FocusDirectionActive(
        ref(parentElement),
        '',
        '',
        ''
      )

      expect(() => active.initDefault()).not.toThrow()
      expect(active.get()).toBeUndefined()

      expect(() => active.set(itemFirst)).not.toThrow()
      expect(active.get()).toBe(itemFirst)
      expect(active.id).toBe('item-1')
      expect(active.aria).toEqual({ 'aria-activedescendant': 'item-1' })

      expect(() => active.clear()).not.toThrow()
      expect(active.get()).toBeUndefined()
      expect(active.id).toBeUndefined()
    })

    it('should omit aria-activedescendant when active element has empty or missing id', () => {
      itemFirst.removeAttribute('id')
      const active = new FocusDirectionActive(ref(parentElement))

      active.set(itemFirst)
      expect(active.id).toBeUndefined()
      expect(active.aria).toEqual({})

      itemSecond.id = ''
      active.set(itemSecond)
      expect(active.id).toBeUndefined()
      expect(active.aria).toEqual({})
    })

    it('should handle undefined container and empty container safely without throwing', () => {
      const emptyActive = new FocusDirectionActive(ref<HTMLElement | undefined>(undefined))
      expect(() => emptyActive.initDefault()).not.toThrow()
      expect(() => emptyActive.clear()).not.toThrow()
      expect(() => emptyActive.reset()).not.toThrow()
      expect(emptyActive.get()).toBeUndefined()
      expect(emptyActive.is()).toBe(false)

      const emptyContainer = document.createElement('div')
      document.body.appendChild(emptyContainer)
      const noItemsActive = new FocusDirectionActive(ref(emptyContainer))
      expect(() => noItemsActive.initDefault()).not.toThrow()
      expect(noItemsActive.get()).toBeUndefined()
      emptyContainer.remove()
    })
  })

  describe('Lifecycle, DOM invalidation, instance isolation, and SSR safety', () => {
    it('should reset cached reference and synced id without removing DOM classes on reset()', () => {
      const active = new FocusDirectionActive(ref(parentElement))

      active.set(itemFirst)
      expect(active.id).toBe('item-1')

      active.reset()
      expect(active.id).toBeUndefined()
      expect(active.aria).toEqual({})
      expect(itemFirst.classList.contains('sys-focusDirection__item--active')).toBe(true)

      // Subsequent get() re-discovers active class from DOM and re-syncs id
      expect(active.get()).toBe(itemFirst)
      expect(active.id).toBe('item-1')
    })

    it('should invalidate cached active element when detached or moved outside container', () => {
      const active = new FocusDirectionActive(() => parentElement)

      active.set(itemFirst)
      expect(active.get()).toBe(itemFirst)

      // Detach from DOM
      itemFirst.remove()
      expect(active.get()).toBeUndefined()
      expect(active.id).toBeUndefined()

      // Move active element outside container while still connected to document
      const externalContainer = document.createElement('div')
      document.body.appendChild(externalContainer)
      active.set(itemSecond)
      externalContainer.appendChild(itemSecond)

      expect(active.get()).toBeUndefined()
      expect(active.id).toBeUndefined()

      externalContainer.remove()
    })

    it('should isolate active state and synced ids across independent instances', () => {
      const secondContainer = document.createElement('div')
      const secondItem = document.createElement('div')
      secondItem.id = 'other-1'
      secondItem.className = 'sys-focusDirection__item'
      secondContainer.appendChild(secondItem)
      document.body.appendChild(secondContainer)

      const firstActive = new FocusDirectionActive(ref(parentElement))
      const secondActive = new FocusDirectionActive(ref(secondContainer))

      firstActive.set(itemFirst)
      expect(firstActive.id).toBe('item-1')
      expect(secondActive.id).toBeUndefined()
      expect(secondActive.get()).toBeUndefined()

      secondActive.set(secondItem)
      expect(firstActive.id).toBe('item-1')
      expect(secondActive.id).toBe('other-1')

      secondContainer.remove()
    })

    it('should execute safely in SSR renderToString without DOM globals', async () => {
      const active = new FocusDirectionActive(ref<HTMLElement | undefined>(undefined))

      const app = createSSRApp({
        render() {
          active.initDefault()
          return h('div', {
            tabindex: 0,
            ...active.aria
          })
        }
      })

      const html = await renderToString(app)
      expect(html).toContain('tabindex="0"')
      expect(html).not.toContain('aria-activedescendant')
    })
  })
})
