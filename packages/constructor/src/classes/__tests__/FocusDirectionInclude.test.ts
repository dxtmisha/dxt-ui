// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
import { FocusDirectionInclude } from '../FocusDirectionInclude'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onUnmounted: vi.fn()
  }
})

describe('FocusDirectionInclude', () => {
  let parentElement: HTMLElement
  let itemA: HTMLElement
  let itemB: HTMLElement
  let itemC: HTMLElement

  beforeEach(() => {
    parentElement = document.createElement('div')
    itemA = document.createElement('div')
    itemA.className = 'sys-focusDirection__item sys-focusDirection__item--active'

    itemB = document.createElement('div')
    itemB.className = 'sys-focusDirection__item'

    itemC = document.createElement('div')
    itemC.className = 'sys-focusDirection__item'

    parentElement.appendChild(itemA)
    parentElement.appendChild(itemB)
    parentElement.appendChild(itemC)
    document.body.appendChild(parentElement)

    // Mock scrollIntoView
    itemA.scrollIntoView = vi.fn()
    itemB.scrollIntoView = vi.fn()
    itemC.scrollIntoView = vi.fn()

    // Mock getBoundingClientRect
    // Item A center: (50, 50)
    vi.spyOn(itemA, 'getBoundingClientRect').mockReturnValue({
      left: 0, top: 0, width: 100, height: 100, right: 100, bottom: 100, x: 0, y: 0, toJSON: () => {}
    })
    // Item B center: (50, 150)
    vi.spyOn(itemB, 'getBoundingClientRect').mockReturnValue({
      left: 0, top: 100, width: 100, height: 100, right: 100, bottom: 200, x: 0, y: 100, toJSON: () => {}
    })
    // Item C center: (150, 50)
    vi.spyOn(itemC, 'getBoundingClientRect').mockReturnValue({
      left: 100, top: 0, width: 100, height: 100, right: 200, bottom: 100, x: 100, y: 0, toJSON: () => {}
    })
  })

  afterEach(() => {
    document.body.removeChild(parentElement)
    vi.restoreAllMocks()
  })

  it('should initialize binds correctly', () => {
    const parentRef = ref(parentElement)
    const focusDir = new FocusDirectionInclude(parentRef)
    expect(focusDir.binds.tabindex).toBe(0)
    expect(focusDir.binds.onFocus).toBeDefined()
    expect(focusDir.binds.onBlur).toBeDefined()
  })

  it('should activate default element on focus', () => {
    const parentRef = ref(parentElement)
    itemA.classList.remove('sys-focusDirection__item--active')

    const focusDir = new FocusDirectionInclude(parentRef)
    focusDir.onFocus()

    expect(itemA.classList.contains('sys-focusDirection__item--active')).toBe(true)
  })

  it('should clear active elements on blur', () => {
    const parentRef = ref(parentElement)
    const focusDir = new FocusDirectionInclude(parentRef)
    focusDir.onFocus()

    expect(itemA.classList.contains('sys-focusDirection__item--active')).toBe(true)

    focusDir.onBlur()
    expect(itemA.classList.contains('sys-focusDirection__item--active')).toBe(false)
  })

  it('should navigate focus downwards on ArrowDown keypress', () => {
    const parentRef = ref(parentElement)
    const focusDir = new FocusDirectionInclude(parentRef)
    focusDir.onFocus()

    const event = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true })
    parentElement.dispatchEvent(event)

    expect(itemA.classList.contains('sys-focusDirection__item--active')).toBe(false)
    expect(itemB.classList.contains('sys-focusDirection__item--active')).toBe(true)
    expect(itemB.scrollIntoView).toHaveBeenCalled()
  })

  it('should navigate focus rightwards on ArrowRight keypress', () => {
    const parentRef = ref(parentElement)
    const focusDir = new FocusDirectionInclude(parentRef)
    focusDir.onFocus()

    const event = new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
    parentElement.dispatchEvent(event)

    expect(itemA.classList.contains('sys-focusDirection__item--active')).toBe(false)
    expect(itemC.classList.contains('sys-focusDirection__item--active')).toBe(true)
    expect(itemC.scrollIntoView).toHaveBeenCalled()
  })

  it('should trigger click on active element when Enter key is pressed', () => {
    const parentRef = ref(parentElement)
    const focusDir = new FocusDirectionInclude(parentRef)
    focusDir.onFocus()

    const clickSpy = vi.spyOn(itemA, 'click')
    const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })
    parentElement.dispatchEvent(event)

    expect(clickSpy).toHaveBeenCalled()
  })

  it('should handle control parameter as boolean and function', () => {
    const parentRef = ref(parentElement)

    const focusDirDisabled = new FocusDirectionInclude(
      parentRef,
      undefined,
      undefined,
      undefined,
      false
    )
    expect(focusDirDisabled.is()).toBe(false)
    expect(focusDirDisabled.binds).toEqual({})
    expect(focusDirDisabled.bindsItem()).toEqual({})
    expect(focusDirDisabled.tabindexItem()).toBeUndefined()

    itemA.classList.remove('sys-focusDirection__item--active')
    focusDirDisabled.activateDefault()
    expect(itemA.classList.contains('sys-focusDirection__item--active')).toBe(false)

    let controlState = false
    const focusDirFunction = new FocusDirectionInclude(
      parentRef,
      undefined,
      undefined,
      undefined,
      () => controlState
    )
    expect(focusDirFunction.is()).toBe(false)
    expect(focusDirFunction.binds).toEqual({})

    controlState = true
    expect(focusDirFunction.is()).toBe(true)
    expect(focusDirFunction.binds.tabindex).toBe(0)
    expect(focusDirFunction.bindsItem()).toEqual({ tabindex: -1 })
    expect(focusDirFunction.tabindexItem()).toBe(-1)
  })

  it('should return item binds and forbid focus when control is enabled', () => {
    const parentRef = ref(parentElement)
    const focusDir = new FocusDirectionInclude(parentRef)

    expect(focusDir.bindsItem()).toEqual({ tabindex: -1 })
    expect(focusDir.bindsItem({ class: 'test-item' })).toEqual({
      tabindex: -1,
      class: 'test-item'
    })
    expect(focusDir.tabindexItem()).toBe(-1)

    const focusDirDisabled = new FocusDirectionInclude(
      parentRef,
      undefined,
      undefined,
      undefined,
      false
    )
    expect(focusDirDisabled.bindsItem()).toEqual({})
    expect(focusDirDisabled.bindsItem({ class: 'test-item' })).toEqual({
      class: 'test-item'
    })
  })
})
