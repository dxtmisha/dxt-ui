// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { EventClickInclude } from '../EventClickInclude'
import { RouterItemRef } from '@dxtmisha/functional'

vi.mock('@dxtmisha/functional', async () => {
  const actual = await vi.importActual('@dxtmisha/functional') as any
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

  it('should return default href property', () => {
    const include = new EventClickInclude({ href: '/home' })
    expect(include.href).toEqual({ href: '/home' })
  })

  it('should use RouterItemRef to resolve router object destination', () => {
    const to = { name: 'profile' }
    const include = new EventClickInclude({ to })
    const hrefResult = include.href

    expect(RouterItemRef.rawToHref).toHaveBeenCalledWith(to)
    expect(hrefResult).toEqual({ href: '/mock-href' })
  })

  it('should return correct exposed data', () => {
    const include = new EventClickInclude({ value: 'val', detail: { key: 'val' } })
    expect(include.expose.getValue?.()).toBe('val')
    expect(include.expose.getDetail?.()).toEqual({ key: 'val' })
  })

  it('should return correct binds', () => {
    const include = new EventClickInclude({ href: '/test' })
    expect(include.binds.href).toBe('/test')
    expect(include.binds.onClick).toBeDefined()
    expect(include.binds.onKeydown).toBeDefined()
  })

  it('should perform router push and prevent default on click if to prop is provided', () => {
    const include = new EventClickInclude({ to: '/profile' })
    const event = { preventDefault: vi.fn() } as any
    const emits = vi.fn()
    const includeWithEmits = new EventClickInclude({ to: '/profile' }, undefined, emits)

    includeWithEmits.onClick(event)
    expect(RouterItemRef.push).toHaveBeenCalledWith('/profile')
    expect(event.preventDefault).toHaveBeenCalled()
    expect(emits).not.toHaveBeenCalled()
  })

  it('should call emits on click if options are passed directly', () => {
    const emits = vi.fn()
    const include = new EventClickInclude({}, undefined, emits)
    const event = {} as MouseEvent
    const customOptions = { type: 'custom', value: '1', detail: undefined }

    include.onClick(event, customOptions)
    expect(emits).toHaveBeenCalledWith('click', event, customOptions)
    expect(emits).toHaveBeenCalledWith('clickLite', customOptions)
  })

  it('should check enabled state and emit options correctly on click', () => {
    const emits = vi.fn()
    const enabledMock = { isEnabled: true, isDisabled: false } as any
    const include = new EventClickInclude({ value: 'val', detail: { d: 1 } }, enabledMock, emits)
    const targetElement = document.createElement('div')
    targetElement.setAttribute('data-event-type', 'button')
    const event = { target: targetElement } as any

    include.onClick(event)
    const expectedPayload = { type: 'button', value: 'val', detail: { d: 1 } }
    expect(emits).toHaveBeenCalledWith('click', event, expectedPayload)
    expect(emits).toHaveBeenCalledWith('clickLite', expectedPayload)
  })

  it('should trigger click on Keydown if Enter key is pressed', () => {
    const emits = vi.fn()
    const include = new EventClickInclude({ value: 'keydown-val' }, undefined, emits)
    const keydownEvent = { key: 'Enter', preventDefault: vi.fn() } as any

    include.onKeydown(keydownEvent)
    expect(emits).toHaveBeenCalled()
    expect(keydownEvent.preventDefault).toHaveBeenCalled()
  })
})
