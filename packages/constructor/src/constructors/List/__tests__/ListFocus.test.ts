// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { reactive, ref } from 'vue'
import { ListFocus } from '../ListFocus'
import type { ListProps } from '../props'

describe('ListFocus', () => {
  afterEach(() => {
    document.body.replaceChildren()
    vi.useRealTimers()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('tracks focus item, fallback props.focus, and type predicates', () => {
      const element = document.createElement('div')
      const props = reactive<ListProps>({ focus: 'initial' })
      const focus = new ListFocus(props, ref(element), 123)

      expect(focus.focus.value).toBe('initial')
      expect(focus.get()).toBeUndefined()
      expect(focus.getSelector('index1')).toBe('[data-list-id="123"][data-value="index1"]')

      focus.set({ index: 'index2', type: 'item' })
      expect(focus.focus.value).toBe('index2')
      expect(focus.get()).toEqual({ index: 'index2', type: 'item' })
      expect(focus.isItem()).toBe(true)
      expect(focus.isGroup()).toBe(false)
      expect(focus.isMenu()).toBe(false)

      focus.set({ index: 'grp1', type: 'group' })
      expect(focus.isGroup()).toBe(true)
      expect(focus.isItem()).toBe(false)

      focus.set({ index: 'mnu1', type: 'menu' })
      expect(focus.isMenu()).toBe(true)
      expect(focus.isGroup()).toBe(false)

      focus.reset()
      expect(focus.focus.value).toBe('initial')
      expect(focus.get()).toBeUndefined()
    })

    it('checks DOM existence, open status, click delegation, and scrolling', () => {
      const container = document.createElement('div')
      const body = document.createElement('div')
      body.setAttribute('data-window-body', '')

      const itemNode = document.createElement('div')
      itemNode.setAttribute('data-list-id', '77')
      itemNode.setAttribute('data-value', 'grp')
      itemNode.setAttribute('data-status', 'open')
      itemNode.tabIndex = 0

      const clickSpy = vi.spyOn(itemNode, 'click')
      const focusSpy = vi.spyOn(itemNode, 'focus')

      body.appendChild(itemNode)
      container.appendChild(body)
      document.body.appendChild(container)

      const focus = new ListFocus({ control: true }, ref(container), 77)
      focus.set({ index: 'grp', type: 'group' })

      expect(focus.isElement('grp')).toBe(true)
      expect(focus.isElementFocus()).toBe(true)
      expect(focus.isOpen()).toBe(true)
      expect(focusSpy).toHaveBeenCalledTimes(1)

      itemNode.setAttribute('data-status', 'close')
      expect(focus.isOpen()).toBe(false)

      focus.click()
      expect(clickSpy).toHaveBeenCalledTimes(1)

      focus.toElementSelected('grp')
      expect(focusSpy).toHaveBeenCalledTimes(2)
    })
  })

  describe('Boundary values and selector escaping', () => {
    it('escapes quotes and backslashes in data-value selectors without SyntaxError', () => {
      const container = document.createElement('div')
      const itemNode = document.createElement('div')
      itemNode.setAttribute('data-list-id', '5')
      itemNode.setAttribute('data-value', 'a"b\\c')
      container.appendChild(itemNode)
      document.body.appendChild(container)

      const focus = new ListFocus({}, ref(container), 5)

      expect(focus.getSelector('a"b\\c')).toBe('[data-list-id="5"][data-value="a\\"b\\\\c"]')
      expect(focus.getElement('a"b\\c')).toBe(itemNode)
      expect(focus.isElement('a"b\\c')).toBe(true)
    })

    it('supports numeric 0 and empty string as focus fallback/index', () => {
      const focus = new ListFocus({ focus: 0 }, ref(undefined), 1)
      expect(focus.focus.value).toBe(0)
      expect(focus.getSelector()).toBe('[data-list-id="1"][data-value=""]')
    })
  })

  describe('Lifecycle and retry timer cleanup', () => {
    it('retries focus asynchronously and clears pending timeout on reset and unmount', () => {
      vi.useFakeTimers()
      const clearSpy = vi.spyOn(globalThis, 'clearTimeout')
      const container = document.createElement('div')
      document.body.appendChild(container)

      const focus = new ListFocus({ control: true }, ref(container), 10)
      focus.set({ index: 'later', type: 'item' })

      vi.advanceTimersByTime(128)
      const itemNode = document.createElement('div')
      itemNode.setAttribute('data-list-id', '10')
      itemNode.setAttribute('data-value', 'later')
      const focusSpy = vi.spyOn(itemNode, 'focus')
      container.appendChild(itemNode)

      vi.advanceTimersByTime(128)
      expect(focusSpy).toHaveBeenCalledTimes(1)

      focus.set({ index: 'missing', type: 'item' })
      focus.onUnmounted()
      expect(clearSpy).toHaveBeenCalled()

      vi.advanceTimersByTime(5000)
    })

    it('re-scrolls across animation frames when lazy item expansion pushes target outside container', () => {
      vi.useFakeTimers()

      const container = document.createElement('div')
      container.setAttribute('data-window-body', '')
      Object.defineProperty(container, 'clientHeight', { value: 200, configurable: true })

      let currentScrollHeight = 1000
      Object.defineProperty(container, 'scrollHeight', {
        get: () => currentScrollHeight,
        configurable: true
      })

      let scrollTopValue = 0
      Object.defineProperty(container, 'scrollTop', {
        get: () => scrollTopValue,
        set: (value: number) => {
          scrollTopValue = value
        },
        configurable: true
      })

      const itemNode = document.createElement('div')
      itemNode.setAttribute('data-list-id', '99')
      itemNode.setAttribute('data-value', 'target')
      container.appendChild(itemNode)
      document.body.appendChild(container)

      let itemOffsetFromScroll = 400
      vi.spyOn(container, 'getBoundingClientRect').mockImplementation(() => ({
        top: 0,
        bottom: 200,
        height: 200,
        left: 0,
        right: 100,
        width: 100,
        x: 0,
        y: 0,
        toJSON: () => {}
      }))
      vi.spyOn(itemNode, 'getBoundingClientRect').mockImplementation(() => {
        const top = itemOffsetFromScroll - scrollTopValue
        return {
          top,
          bottom: top + 40,
          height: 40,
          left: 0,
          right: 100,
          width: 100,
          x: 0,
          y: top,
          toJSON: () => {}
        }
      })

      const focus = new ListFocus({ control: true }, ref(container), 99)
      focus.toElementSelected('target')
      expect(scrollTopValue).toBe(240)

      // Lazy items above target expand (+120px) on the next frame, pushing target outside container
      currentScrollHeight = 1120
      itemOffsetFromScroll = 520
      vi.advanceTimersByTime(16)

      expect(scrollTopValue).toBe(360)

      vi.advanceTimersByTime(100)
      focus.onUnmounted()
    })

    it('cancels scroll stabilization immediately upon user wheel interaction', () => {
      const cancelSpy = vi.spyOn(globalThis, 'cancelAnimationFrame')
      vi.spyOn(globalThis, 'requestAnimationFrame').mockReturnValue(777)

      const container = document.createElement('div')
      container.setAttribute('data-window-body', '')
      const itemNode = document.createElement('div')
      itemNode.setAttribute('data-list-id', '88')
      itemNode.setAttribute('data-value', 'opt')
      container.appendChild(itemNode)
      document.body.appendChild(container)

      const focus = new ListFocus({ control: true }, ref(container), 88)
      focus.toElementSelected('opt')

      container.dispatchEvent(new Event('wheel'))
      expect(cancelSpy).toHaveBeenCalledWith(777)
    })
  })
})
