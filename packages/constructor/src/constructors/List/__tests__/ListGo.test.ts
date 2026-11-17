// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { ListGo } from '../ListGo'
import type { ListFocus } from '../ListFocus'
import type { ListDataRef } from '@dxtmisha/functional'

describe('ListGo', () => {
  afterEach(() => {
    document.body.replaceChildren()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('sets indices, prepares selection, and navigates next/previous/first/last', () => {
      const container = document.createElement('div')
      const itemA = document.createElement('div')
      itemA.setAttribute('data-value', 'a')
      const itemB = document.createElement('div')
      itemB.setAttribute('data-value', 'b')
      container.append(itemA, itemB)
      document.body.appendChild(container)

      const currentItem = ref<{ index: string, type: string, parent?: string } | undefined>()
      const mockFocus = {
        item: currentItem,
        toElementSelected: vi.fn(),
        set: vi.fn((item) => {
          currentItem.value = item
        }),
        reset: vi.fn(() => {
          currentItem.value = undefined
        }),
        isElementFocus: vi.fn(() => Boolean(currentItem.value)),
        isElement: vi.fn(() => Boolean(currentItem.value)),
        isItem: vi.fn(() => currentItem.value?.type === 'item'),
        isGroup: vi.fn(() => currentItem.value?.type === 'group'),
        isMenu: vi.fn(() => currentItem.value?.type === 'menu'),
        isOpen: vi.fn(() => false),
        getElement: vi.fn(),
        click: vi.fn()
      } as unknown as ListFocus

      const mapItems = [
        { index: 'a', type: 'item' },
        { index: 'b', type: 'item' }
      ]
      const mockData = {
        map: ref(mapItems),
        getLengthByMap: () => mapItems.length,
        getFirstItemByParent: () => mapItems[0],
        getLastItemByParent: () => mapItems[1],
        getItemByIndex: (index: string) => ({ key: index === 'a' ? 0 : 1, item: mapItems[index === 'a' ? 0 : 1] })
      } as unknown as ListDataRef

      const emits = vi.fn()
      const go = new ListGo({ selected: 'b' }, ref(container), () => mockData, () => mockFocus, emits)

      go.preparation('b')
      expect(mockFocus.toElementSelected).toHaveBeenCalledWith('b')

      expect(go.set(0)).toBe(true)
      expect(go.set(0)).toBe(false)
      expect(mockFocus.set).toHaveBeenCalledWith(mapItems[0])

      go.next()
      expect(currentItem.value).toEqual(mapItems[1])

      go.previous()
      expect(currentItem.value).toEqual(mapItems[0])

      go.last()
      expect(currentItem.value).toEqual(mapItems[1])

      go.first()
      expect(currentItem.value).toEqual(mapItems[0])

      go.open()
      expect(mockFocus.click).toHaveBeenCalledTimes(1)

      go.close()
      expect(emits).toHaveBeenCalledWith('close')

      expect(go.set(-1)).toBe(true)
      expect(mockFocus.reset).toHaveBeenCalled()
    })

    it('handles highlighted item lookup and parent group open/close navigation', () => {
      const container = document.createElement('div')
      const highlighted = document.createElement('div')
      highlighted.setAttribute('data-highlight', '1')
      highlighted.setAttribute('data-value', 'sub1')
      container.appendChild(highlighted)

      const parentButton = document.createElement('div')
      parentButton.setAttribute('data-value', 'grp')
      const parentClick = vi.spyOn(parentButton, 'click')

      const currentItem = ref<{ index: string, type: string, parent?: string } | undefined>()
      const mockFocus = {
        item: currentItem,
        toElementSelected: vi.fn(),
        set: vi.fn((item) => {
          currentItem.value = item
        }),
        reset: vi.fn(() => {
          currentItem.value = undefined
        }),
        isItem: vi.fn(() => currentItem.value?.type === 'item'),
        isGroup: vi.fn(() => currentItem.value?.type === 'group'),
        isMenu: vi.fn(() => currentItem.value?.type === 'menu'),
        isOpen: vi.fn(() => false),
        getElement: vi.fn((id?: string) => (id === 'grp' ? parentButton : undefined)),
        click: vi.fn()
      } as unknown as ListFocus

      const mapItems = [
        { index: 'grp', type: 'group' },
        { index: 'sub1', type: 'item', parent: 'grp' }
      ]
      const mockData = {
        map: ref(mapItems),
        getLengthByMap: () => mapItems.length,
        getItemByIndex: (id: string) => (id === 'grp' ? { key: 0, item: mapItems[0] } : undefined)
      } as unknown as ListDataRef

      const go = new ListGo({}, ref(container), () => mockData, () => mockFocus)

      go.toHighlight()
      expect(currentItem.value).toEqual(mapItems[1])

      go.close()
      expect(parentClick).toHaveBeenCalledTimes(1)
      expect(currentItem.value).toEqual(mapItems[0])

      go.open()
      expect(mockFocus.click).toHaveBeenCalledTimes(1)
      expect(currentItem.value).toEqual(mapItems[1])
    })
  })

  describe('Boundary conditions and infinite recursion protection', () => {
    it('terminates cleanly without stack overflow when no items can receive focus', () => {
      const container = document.createElement('div')
      const decoy = document.createElement('div')
      decoy.setAttribute('data-value', 'decoy')
      container.appendChild(decoy)

      const mockFocus = {
        item: ref(undefined),
        toElementSelected: vi.fn(),
        set: vi.fn(),
        reset: vi.fn(),
        isElementFocus: vi.fn(() => false),
        isElement: vi.fn(() => false),
        isItem: vi.fn(() => false),
        isGroup: vi.fn(() => false),
        isMenu: vi.fn(() => false)
      } as unknown as ListFocus

      const mapItems = [
        { index: 's1', type: 'subtitle' },
        { index: 'l1', type: 'line' }
      ]
      const mockData = {
        map: ref(mapItems),
        getLengthByMap: () => mapItems.length
      } as unknown as ListDataRef

      const go = new ListGo({}, ref(container), () => mockData, () => mockFocus)

      expect(() => go.next()).not.toThrow()
      expect(() => go.previous()).not.toThrow()
      expect(mockFocus.reset).toHaveBeenCalled()
    })

    it('schedules and cancels preparation animation frame on stop and unmount', () => {
      const rafSpy = vi.spyOn(globalThis, 'requestAnimationFrame').mockReturnValue(42)
      const cancelSpy = vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {})
      const mockFocus = { reset: vi.fn() } as unknown as ListFocus
      const mockData = {} as unknown as ListDataRef

      const go = new ListGo({ selected: 0 }, ref(undefined), () => mockData, () => mockFocus)
      go.preparationBySelected()
      expect(rafSpy).toHaveBeenCalledTimes(1)

      go.onUnmounted()
      expect(cancelSpy).toHaveBeenCalledWith(42)
    })
  })
})
