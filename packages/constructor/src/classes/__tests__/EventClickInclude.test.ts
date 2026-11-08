// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { RouterItemRef } from '@dxtmisha/functional'

import { EventClickInclude } from '../EventClickInclude'
import { EnabledInclude } from '../EnabledInclude'

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
  })
})
