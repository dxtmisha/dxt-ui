// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive, ref } from 'vue'
import type { ListDataRef } from '@dxtmisha/functional'
import { ListControl } from '../ListControl'
import type { ListGo } from '../ListGo'
import type { ListSearch } from '../ListSearch'
import type { ListProps } from '../props'

describe('ListControl', () => {
  afterEach(() => {
    document.body.replaceChildren()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('toggles active status, starts/stops on focus/blur, and delegates input search', () => {
      const searchMock = { set: vi.fn(), add: vi.fn() } as unknown as ListSearch
      const dataMock = { getLength: () => 2 } as unknown as ListDataRef
      const goMock = {
        reset: vi.fn(),
        stop: vi.fn(),
        previous: vi.fn(),
        next: vi.fn(),
        open: vi.fn(),
        close: vi.fn(),
        first: vi.fn(),
        last: vi.fn()
      } as unknown as ListGo

      const props = reactive<ListProps>({ control: false })
      const control = new ListControl(
        props,
        ref(undefined),
        () => dataMock,
        () => goMock,
        () => searchMock
      )

      expect(control.isActive.value).toBe(false)
      control.onFocus()
      expect(goMock.reset).toHaveBeenCalledTimes(1)

      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
      expect(goMock.next).toHaveBeenCalledTimes(1)

      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }))
      expect(goMock.previous).toHaveBeenCalledTimes(1)

      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
      expect(goMock.open).toHaveBeenCalledTimes(1)

      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }))
      expect(goMock.open).toHaveBeenCalledTimes(2)

      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true }))
      expect(goMock.first).toHaveBeenCalledTimes(1)

      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }))
      expect(goMock.last).toHaveBeenCalledTimes(1)

      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
      expect(goMock.close).toHaveBeenCalledTimes(1)

      document.body.dispatchEvent(new KeyboardEvent('keypress', { key: 'a', bubbles: true }))
      expect(searchMock.add).toHaveBeenCalledWith('a')

      control.onInput({ value: 'query' } as unknown as Parameters<ListControl['onInput']>[0])
      expect(searchMock.set).toHaveBeenCalledWith('query')

      control.onBlur()
      expect(goMock.stop).toHaveBeenCalledTimes(1)
    })

    it('reactively starts/stops via onMounted watcher and focuses menu control input', async () => {
      vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((callback) => {
        callback(0)
        return 1
      })
      vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {})

      const container = document.createElement('div')
      const input = document.createElement('input')
      input.setAttribute('data-menu-control', '1')
      const focusSpy = vi.spyOn(input, 'focus')
      container.appendChild(input)
      document.body.appendChild(container)

      const searchMock = { set: vi.fn(), add: vi.fn() } as unknown as ListSearch
      const dataMock = { getLength: () => 1 } as unknown as ListDataRef
      const goMock = { reset: vi.fn(), stop: vi.fn() } as unknown as ListGo

      const props = reactive<ListProps>({ control: true })
      const control = new ListControl(
        props,
        ref(container),
        () => dataMock,
        () => goMock,
        () => searchMock
      )

      control.onMounted()
      await nextTick()
      expect(goMock.reset).toHaveBeenCalledTimes(1)
      expect(focusSpy).toHaveBeenCalledTimes(1)

      props.control = false
      await nextTick()
      expect(goMock.stop).toHaveBeenCalledTimes(1)

      control.onUnmounted()
    })
  })

  describe('IME composition and search input isolation guards', () => {
    it('ignores keyboard navigation events during IME composition', () => {
      const dataMock = { getLength: () => 2 } as unknown as ListDataRef
      const goMock = {
        reset: vi.fn(),
        stop: vi.fn(),
        open: vi.fn(),
        close: vi.fn()
      } as unknown as ListGo

      const control = new ListControl(
        { control: true },
        ref(undefined),
        () => dataMock,
        () => goMock
      )
      control.onMounted()

      const composingEnter = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })
      Object.defineProperty(composingEnter, 'isComposing', { value: true })
      document.body.dispatchEvent(composingEnter)

      expect(goMock.open).not.toHaveBeenCalled()
      control.onUnmounted()
    })

    it('allows Space, Home, End, and ArrowLeft/Right inside active search input without hijacking', () => {
      vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((callback) => {
        callback(0)
        return 1
      })
      vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {})

      const input = document.createElement('input')
      input.setAttribute('data-menu-control', '1')
      input.value = 'hello '
      document.body.appendChild(input)
      input.focus()

      const searchMock = { set: vi.fn(), add: vi.fn() } as unknown as ListSearch
      const dataMock = { getLength: () => 2 } as unknown as ListDataRef
      const goMock = {
        reset: vi.fn(),
        stop: vi.fn(),
        open: vi.fn(),
        close: vi.fn(),
        first: vi.fn(),
        last: vi.fn(),
        next: vi.fn()
      } as unknown as ListGo

      const control = new ListControl(
        { control: true },
        ref(undefined),
        () => dataMock,
        () => goMock,
        () => searchMock
      )
      control.onMounted()

      input.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }))
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }))
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true }))
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }))

      expect(goMock.open).not.toHaveBeenCalled()
      expect(goMock.close).not.toHaveBeenCalled()
      expect(goMock.first).not.toHaveBeenCalled()
      expect(goMock.last).not.toHaveBeenCalled()

      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
      expect(goMock.close).toHaveBeenCalledTimes(1)

      input.dispatchEvent(new KeyboardEvent('keypress', { key: 'a', bubbles: true }))
      expect(searchMock.set).toHaveBeenCalledWith('hello ')

      control.onUnmounted()
    })
  })
})
