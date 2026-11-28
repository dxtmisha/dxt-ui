// @vitest-environment jsdom
import { describe, it, expect, expectTypeOf, vi, beforeEach, afterEach } from 'vitest'
import { type ConstrHrefProps, RouterItemRef } from '@dxtmisha/functional'

import { EventClickInclude } from '../EventClickInclude'
import { EnabledInclude } from '../EnabledInclude'
import type { EventClickExpose, EventClickValue } from '../../types/eventClickTypes'

vi.mock('@dxtmisha/functional', async () => {
  const actual = await vi.importActual<typeof import('@dxtmisha/functional')>('@dxtmisha/functional')
  return {
    ...actual,
    RouterItemRef: {
      rawToHref: vi.fn().mockReturnValue({ href: '/mock-href' }),
      push: vi.fn()
    }
  }
})

describe('EventClickInclude', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Href and expose getters', () => {
    it('should return default href property when href is provided or undefined', () => {
      const includeWithHref = new EventClickInclude({ href: '/home' })
      expect(includeWithHref.href).toEqual({ href: '/home' })

      const includeEmpty = new EventClickInclude()
      expect(includeEmpty.href).toEqual({ href: undefined })
    })

    it('should use RouterItemRef.rawToHref only when to is a route object containing name', () => {
      const toRoute = { name: 'profile' }
      const includeRoute = new EventClickInclude({ to: toRoute })
      expect(includeRoute.href).toEqual({ href: '/mock-href' })
      expect(RouterItemRef.rawToHref).toHaveBeenCalledWith(toRoute)

      vi.clearAllMocks()
      const includeStringTo = new EventClickInclude({ to: '/string-path', href: '/fallback-href' })
      expect(includeStringTo.href).toEqual({ href: '/fallback-href' })
      expect(RouterItemRef.rawToHref).not.toHaveBeenCalled()
    })

    it('should return exposed value (falling back to index) and detail', () => {
      const includeWithValue = new EventClickInclude({
        value: 'primary-value',
        index: 5,
        detail: { source: 'toolbar' }
      })
      expect(includeWithValue.expose.getValue?.()).toBe('primary-value')
      expect(includeWithValue.expose.getDetail?.()).toEqual({ source: 'toolbar' })

      const includeWithIndexFallback = new EventClickInclude({ index: 0 })
      expect(includeWithIndexFallback.expose.getValue?.()).toBe(0)
      expect(includeWithIndexFallback.expose.getDetail?.()).toBeUndefined()
    })

    it('should return binds with href, onClick, and onKeydown', () => {
      const include = new EventClickInclude({ href: '/test' })
      expect(include.binds.href).toBe('/test')
      expect(include.binds.onClick).toBeTypeOf('function')
      expect(include.binds.onKeydown).toBeTypeOf('function')
    })
  })

  describe('Click event handling and router navigation', () => {
    it('should perform router push and prevent default on click when to prop is provided and enabled', () => {
      const event = new MouseEvent('click', { cancelable: true })
      const preventDefaultSpy = vi.spyOn(event, 'preventDefault')
      const emits = vi.fn()
      const include = new EventClickInclude({ to: '/profile' }, undefined, emits)

      include.onClick(event)
      expect(RouterItemRef.push).toHaveBeenCalledWith('/profile')
      expect(preventDefaultSpy).toHaveBeenCalledTimes(1)
      expect(emits).not.toHaveBeenCalled()
    })

    it('should not perform router push when enabled state is false', () => {
      const event = new MouseEvent('click', { cancelable: true })
      const emits = vi.fn()
      const enabled = new EnabledInclude({ disabled: true })
      const include = new EventClickInclude({ to: '/profile' }, () => enabled, emits)

      include.onClick(event)
      expect(RouterItemRef.push).not.toHaveBeenCalled()
      expect(emits).not.toHaveBeenCalled()
    })

    it('should cancel native navigation for a disabled link with or without emits', () => {
      const emits = vi.fn()
      const enabled = new EnabledInclude({ disabled: true })

      for (const handler of [emits, undefined]) {
        const include = new EventClickInclude({ href: '/profile' }, () => enabled, handler)
        const event = new MouseEvent('click', { cancelable: true })

        include.onClick(event)
        expect(event.defaultPrevented).toBe(true)
      }

      expect(emits).not.toHaveBeenCalled()
      expect(RouterItemRef.push).not.toHaveBeenCalled()
    })

    it('should emit custom options on click only when enabled or when enabled manager is omitted', () => {
      const emits = vi.fn()
      const event = new MouseEvent('click')
      const customOptions = { type: 'custom', value: '1', detail: undefined }

      const includeWithoutEnabled = new EventClickInclude({}, undefined, emits)
      includeWithoutEnabled.onClick(event, customOptions)
      expect(emits).toHaveBeenCalledWith('click', event, customOptions)
      expect(emits).toHaveBeenCalledWith('clickLite', customOptions)

      emits.mockClear()
      const disabledManager = new EnabledInclude({ disabled: true })
      const includeDisabled = new EventClickInclude({}, () => disabledManager, emits)
      includeDisabled.onClick(event, customOptions)
      expect(emits).not.toHaveBeenCalled()
    })

    it('should resolve data-event-type from closest target element and emit click and clickLite', () => {
      const emits = vi.fn()
      const enabled = new EnabledInclude({})
      const include = new EventClickInclude(
        { value: 'item-1', detail: { count: 1 } },
        () => enabled,
        emits
      )

      const container = document.createElement('div')
      container.setAttribute('data-event-type', 'button')
      const innerSpan = document.createElement('span')
      container.appendChild(innerSpan)

      const event = new MouseEvent('click')
      Object.defineProperty(event, 'target', { value: innerSpan })

      include.onClick(event)
      const expectedPayload = { type: 'button', value: 'item-1', detail: { count: 1 } }
      expect(emits).toHaveBeenCalledWith('click', event, expectedPayload)
      expect(emits).toHaveBeenCalledWith('clickLite', expectedPayload)
    })

    it('should allow icon-trailing clicks when readonly (isEnabled: false, isDisabled: false) but block when disabled', () => {
      const emits = vi.fn()
      const trailingElement = document.createElement('span')
      trailingElement.setAttribute('data-event-type', 'icon-trailing')
      const event = new MouseEvent('click')
      Object.defineProperty(event, 'target', { value: trailingElement })

      const readonlyEnabled = new EnabledInclude({ readonly: true })
      const includeReadonly = new EventClickInclude({ value: 'clear' }, () => readonlyEnabled, emits)
      includeReadonly.onClick(event)
      expect(emits).toHaveBeenCalledWith('click', event, {
        type: 'icon-trailing',
        value: 'clear',
        detail: undefined
      })

      emits.mockClear()
      const disabledEnabled = new EnabledInclude({ disabled: true })
      const includeDisabled = new EventClickInclude({ value: 'clear' }, () => disabledEnabled, emits)
      includeDisabled.onClick(event)
      expect(emits).not.toHaveBeenCalled()
    })

    it('should safely fall back to click type when event.target is null or a non-Element node without closest()', () => {
      const emits = vi.fn()
      const include = new EventClickInclude({ index: 3 }, undefined, emits)

      const textNode = document.createTextNode('label')
      const eventWithTextTarget = new MouseEvent('click')
      Object.defineProperty(eventWithTextTarget, 'target', { value: textNode })

      expect(() => include.onClick(eventWithTextTarget)).not.toThrow()
      expect(emits).toHaveBeenCalledWith('clickLite', {
        type: 'click',
        value: 3,
        detail: undefined
      })
    })

    it('should do nothing on click when target is an <a> element (or inside <a>) matching own props.href', () => {
      const emits = vi.fn()
      const enabled = new EnabledInclude({})
      const include = new EventClickInclude({ value: 'card', href: 'https://example.com' }, () => enabled, emits)

      const anchor = document.createElement('a')
      anchor.setAttribute('href', 'https://example.com')
      const innerSpan = document.createElement('span')
      anchor.appendChild(innerSpan)

      for (const target of [anchor, innerSpan]) {
        const event = new MouseEvent('click', { cancelable: true })
        Object.defineProperty(event, 'target', { value: target })

        include.onClick(event)
        expect(event.defaultPrevented).toBe(false)
      }

      expect(emits).not.toHaveBeenCalled()
    })

    it('should still emit click when target <a href> does not match own props.href or props.href is absent', () => {
      const emits = vi.fn()
      const enabled = new EnabledInclude({})

      const nestedAnchor = document.createElement('a')
      nestedAnchor.setAttribute('href', '/other-link')
      const eventNested = new MouseEvent('click', { cancelable: true })
      Object.defineProperty(eventNested, 'target', { value: nestedAnchor })

      const includeWithOwnHref = new EventClickInclude({ value: 'card', href: '/own-link' }, () => enabled, emits)
      includeWithOwnHref.onClick(eventNested)
      expect(emits).toHaveBeenCalledTimes(2)

      emits.mockClear()
      const includeWithoutHref = new EventClickInclude({ value: 'card' }, () => enabled, emits)
      includeWithoutHref.onClick(eventNested)
      expect(emits).toHaveBeenCalledTimes(2)
    })

    it('should still run router push when to prop is set even if anchor href is present', () => {
      const emits = vi.fn()
      const enabled = new EnabledInclude({})
      const include = new EventClickInclude({ to: { name: 'profile' }, href: '/mock-href' }, () => enabled, emits)

      const anchor = document.createElement('a')
      anchor.setAttribute('href', '/mock-href')
      const event = new MouseEvent('click', { cancelable: true })
      Object.defineProperty(event, 'target', { value: anchor })

      include.onClick(event)
      expect(RouterItemRef.push).toHaveBeenCalledWith({ name: 'profile' })
      expect(event.defaultPrevented).toBe(true)
      expect(emits).not.toHaveBeenCalled()
    })

    it('should still emit click when target is an <a> element without href', () => {
      const emits = vi.fn()
      const enabled = new EnabledInclude({})
      const include = new EventClickInclude({ value: 'card' }, () => enabled, emits)

      const anchorWithoutHref = document.createElement('a')
      const event = new MouseEvent('click', { cancelable: true })
      Object.defineProperty(event, 'target', { value: anchorWithoutHref })

      include.onClick(event)
      expect(emits).toHaveBeenCalledWith('click', event, {
        type: 'click',
        value: 'card',
        detail: undefined
      })
    })

    it('should still call preventDefault for disabled <a href> before checking target href', () => {
      const emits = vi.fn()
      const enabled = new EnabledInclude({ disabled: true })
      const include = new EventClickInclude({ href: '/profile' }, () => enabled, emits)

      const anchor = document.createElement('a')
      anchor.setAttribute('href', '/profile')
      const event = new MouseEvent('click', { cancelable: true })
      Object.defineProperty(event, 'target', { value: anchor })

      include.onClick(event)
      expect(event.defaultPrevented).toBe(true)
      expect(emits).not.toHaveBeenCalled()
    })
  })

  describe('Keyboard event handling (onKeydown)', () => {
    it('should trigger onClick and preventDefault when Enter or Space key is pressed, and ignore other keys', () => {
      const emits = vi.fn()
      const include = new EventClickInclude({ value: 'keydown-value' }, undefined, emits)

      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true })
      const enterPreventSpy = vi.spyOn(enterEvent, 'preventDefault')
      include.onKeydown(enterEvent)
      expect(emits).toHaveBeenCalledTimes(2)
      expect(enterPreventSpy).toHaveBeenCalledTimes(1)

      emits.mockClear()
      const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', cancelable: true })
      const tabPreventSpy = vi.spyOn(tabEvent, 'preventDefault')
      include.onKeydown(tabEvent)
      expect(emits).not.toHaveBeenCalled()
      expect(tabPreventSpy).not.toHaveBeenCalled()
    })

    it('should do nothing on Enter when href matches target <a> element and component is enabled', () => {
      const emits = vi.fn()
      const enabled = new EnabledInclude({})
      const include = new EventClickInclude({ href: '/profile' }, () => enabled, emits)

      const anchor = document.createElement('a')
      anchor.setAttribute('href', '/profile')
      const span = document.createElement('span')
      anchor.appendChild(span)

      const anchorEvent = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true })
      Object.defineProperty(anchorEvent, 'target', { value: anchor })
      include.onKeydown(anchorEvent)
      expect(anchorEvent.defaultPrevented).toBe(false)
      expect(emits).not.toHaveBeenCalled()

      const childEvent = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true })
      Object.defineProperty(childEvent, 'target', { value: span })
      include.onKeydown(childEvent)
      expect(childEvent.defaultPrevented).toBe(false)
      expect(emits).not.toHaveBeenCalled()
    })

    it('should do nothing on Enter when component is disabled', () => {
      const emits = vi.fn()
      const enabled = new EnabledInclude({ disabled: true })
      const include = new EventClickInclude({ href: '/profile', value: 'card' }, () => enabled, emits)

      const anchor = document.createElement('a')
      anchor.setAttribute('href', '/profile')
      const anchorEvent = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true })
      Object.defineProperty(anchorEvent, 'target', { value: anchor })

      include.onKeydown(anchorEvent)
      expect(anchorEvent.defaultPrevented).toBe(false)
      expect(emits).not.toHaveBeenCalled()

      const button = document.createElement('button')
      const buttonEvent = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true })
      Object.defineProperty(buttonEvent, 'target', { value: button })

      include.onKeydown(buttonEvent)
      expect(buttonEvent.defaultPrevented).toBe(false)
      expect(emits).not.toHaveBeenCalled()
    })

    it('should trigger onClick and preventDefault on Enter when target <a> href differs or props.to is set', () => {
      const emits = vi.fn()
      const enabled = new EnabledInclude({})
      const includeHref = new EventClickInclude({ href: '/profile', value: 'card' }, () => enabled, emits)

      const nestedAnchor = document.createElement('a')
      nestedAnchor.setAttribute('href', '/other')
      const hrefEvent = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true })
      Object.defineProperty(hrefEvent, 'target', { value: nestedAnchor })

      includeHref.onKeydown(hrefEvent)
      expect(hrefEvent.defaultPrevented).toBe(true)
      expect(emits).toHaveBeenCalledWith('click', hrefEvent, {
        type: 'click',
        value: 'card',
        detail: undefined
      })

      emits.mockClear()
      const includeTo = new EventClickInclude({ href: '/profile', to: '/profile', value: 'card' }, () => enabled, emits)
      const sameAnchor = document.createElement('a')
      sameAnchor.setAttribute('href', '/profile')
      const toEvent = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true })
      Object.defineProperty(toEvent, 'target', { value: sameAnchor })

      includeTo.onKeydown(toEvent)
      expect(RouterItemRef.push).toHaveBeenCalledWith('/profile')
      expect(toEvent.defaultPrevented).toBe(true)
      expect(emits).not.toHaveBeenCalled()
    })

    it('should trigger onClick on Space key and ignore Enter during IME composition', () => {
      const emits = vi.fn()
      const include = new EventClickInclude({ value: 'space-item' }, undefined, emits)

      const spaceEvent = new KeyboardEvent('keydown', { key: ' ', cancelable: true })
      include.onKeydown(spaceEvent)
      expect(spaceEvent.defaultPrevented).toBe(true)
      expect(emits).toHaveBeenCalledWith('clickLite', {
        type: 'click',
        value: 'space-item',
        detail: undefined
      })

      emits.mockClear()
      const composingEvent = new KeyboardEvent('keydown', {
        key: 'Enter',
        isComposing: true,
        cancelable: true
      })
      include.onKeydown(composingEvent)
      expect(composingEvent.defaultPrevented).toBe(false)
      expect(emits).not.toHaveBeenCalled()
    })

    it('should forward custom options from onKeydown and handle null/non-Element target safely', () => {
      const emits = vi.fn()
      const include = new EventClickInclude({ href: '/profile' }, undefined, emits)
      const customOptions = { type: 'action', value: 42, detail: { from: 'keyboard' } }

      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true })
      Object.defineProperty(enterEvent, 'target', { value: document.createTextNode('label') })

      expect(() => include.onKeydown(enterEvent, customOptions)).not.toThrow()
      expect(enterEvent.defaultPrevented).toBe(true)
      expect(emits).toHaveBeenCalledWith('click', enterEvent, customOptions)
      expect(emits).toHaveBeenCalledWith('clickLite', customOptions)
    })
  })

  describe('Boundary values, falsy traps, and types', () => {
    it('should preserve falsy values (0, false, empty string) instead of falling back to index', () => {
      const emits = vi.fn()

      const includeZero = new EventClickInclude({ value: 0, index: 99 }, undefined, emits)
      expect(includeZero.expose.getValue?.()).toBe(0)
      includeZero.onClick(new MouseEvent('click'))
      expect(emits).toHaveBeenCalledWith('clickLite', {
        type: 'click',
        value: 0,
        detail: undefined
      })

      emits.mockClear()
      const includeFalse = new EventClickInclude({ value: false, index: 99 }, undefined, emits)
      expect(includeFalse.expose.getValue?.()).toBe(false)
      includeFalse.onClick(new MouseEvent('click'))
      expect(emits).toHaveBeenCalledWith('clickLite', {
        type: 'click',
        value: false,
        detail: undefined
      })

      emits.mockClear()
      const includeEmpty = new EventClickInclude({ value: '', index: 99 }, undefined, emits)
      expect(includeEmpty.expose.getValue?.()).toBe('')
      includeEmpty.onClick(new MouseEvent('click'))
      expect(emits).toHaveBeenCalledWith('clickLite', {
        type: 'click',
        value: '',
        detail: undefined
      })
    })

    it('should handle readonly state for custom options and router navigation, and support object to without name', () => {
      const emits = vi.fn()
      const readonlyEnabled = new EnabledInclude({ readonly: true })
      const includeReadonly = new EventClickInclude(
        { to: { path: '/settings' }, href: '/fallback' },
        () => readonlyEnabled,
        emits
      )

      expect(includeReadonly.href).toEqual({ href: '/fallback' })

      const customEvent = new MouseEvent('click', { cancelable: true })
      includeReadonly.onClick(customEvent, { type: 'custom', value: 1, detail: undefined })
      expect(emits).not.toHaveBeenCalled()
      expect(customEvent.defaultPrevented).toBe(false)

      const routerEvent = new MouseEvent('click', { cancelable: true })
      includeReadonly.onClick(routerEvent)
      expect(RouterItemRef.push).not.toHaveBeenCalled()
      expect(routerEvent.defaultPrevented).toBe(false)

      const includeEnabled = new EventClickInclude({ to: { path: '/settings' } }, undefined, emits)
      const activeEvent = new MouseEvent('click', { cancelable: true })
      includeEnabled.onClick(activeEvent)
      expect(RouterItemRef.push).toHaveBeenCalledWith({ path: '/settings' })
      expect(activeEvent.defaultPrevented).toBe(true)
    })

    it('should handle emits omitted safely when enabled and preserve Unicode/multilingual payloads', () => {
      const includeNoEmits = new EventClickInclude({ to: '/profile', value: 'x' })
      const noEmitEvent = new MouseEvent('click', { cancelable: true })
      expect(() => includeNoEmits.onClick(noEmitEvent)).not.toThrow()
      expect(RouterItemRef.push).not.toHaveBeenCalled()

      const emits = vi.fn()
      const unicodeValue = 'Nguyễn Привет 🚀'
      const unicodeDetail = { label: 'tiếng Việt', emoji: '🔥' }
      const includeUnicode = new EventClickInclude(
        { value: unicodeValue, detail: unicodeDetail },
        undefined,
        emits
      )

      const target = document.createElement('button')
      target.setAttribute('data-event-type', 'кнопка-tiếng-Việt')
      const clickEvent = new MouseEvent('click')
      Object.defineProperty(clickEvent, 'target', { value: target })

      includeUnicode.onClick(clickEvent)
      expect(emits).toHaveBeenCalledWith('clickLite', {
        type: 'кнопка-tiếng-Việt',
        value: unicodeValue,
        detail: unicodeDetail
      })
    })

    it('should evaluate enabled callback lazily across state transitions and isolate instances', () => {
      let currentEnabled = new EnabledInclude({ disabled: false })
      const emitsFirst = vi.fn()
      const emitsSecond = vi.fn()

      const includeFirst = new EventClickInclude({ value: 'first' }, () => currentEnabled, emitsFirst)
      const includeSecond = new EventClickInclude({ value: 'second' }, undefined, emitsSecond)

      includeFirst.onClick(new MouseEvent('click'))
      expect(emitsFirst).toHaveBeenCalledTimes(2)

      emitsFirst.mockClear()
      currentEnabled = new EnabledInclude({ disabled: true })
      const disabledEvent = new MouseEvent('click', { cancelable: true })
      includeFirst.onClick(disabledEvent)
      expect(disabledEvent.defaultPrevented).toBe(true)
      expect(emitsFirst).not.toHaveBeenCalled()

      includeSecond.onClick(new MouseEvent('click'))
      expect(emitsSecond).toHaveBeenCalledTimes(2)
    })

    it('should match expected TypeScript contracts for href, expose, and binds', () => {
      const include = new EventClickInclude({ href: '/docs' })

      expectTypeOf(include.href).toEqualTypeOf<ConstrHrefProps>()
      expectTypeOf(include.expose).toEqualTypeOf<EventClickExpose>()
      expectTypeOf(include.binds).toMatchTypeOf<
        ConstrHrefProps & {
          onClick: (event: MouseEvent, options?: EventClickValue) => void
          onKeydown: (event: KeyboardEvent, options?: EventClickValue) => void
        }
      >()
    })
  })
})
