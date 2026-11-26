// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import * as functional from '@dxtmisha/functional'

import type { HorizontalScrollInclude } from '../../HorizontalScroll'
import type { TabsNavigationSelected } from '../TabsNavigationSelected'
import { TabsNavigationFocus } from '../TabsNavigationFocus'

describe('TabsNavigationFocus', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const createDependencies = (
    elementHtml?: HTMLDivElement,
    actualValue?: functional.ListSelectedList
  ) => {
    const scrollInstance = { elementHtml } as unknown as HorizontalScrollInclude
    const setMock = vi.fn()
    const selectedInstance = {
      actualItem: ref(actualValue),
      set: setMock
    } as unknown as TabsNavigationSelected

    return {
      getScroll: vi.fn(() => scrollInstance),
      getSelected: vi.fn(() => selectedInstance),
      setMock,
      selectedInstance
    }
  }

  describe('Focus state management and falsy boundaries', () => {
    it('should remain lazy in constructor and return undefined when empty', () => {
      const { getScroll, getSelected } = createDependencies()
      const focus = new TabsNavigationFocus(getScroll, getSelected)

      expect(getScroll).not.toHaveBeenCalled()
      expect(getSelected).not.toHaveBeenCalled()
      expect(focus.get()).toBeUndefined()

      focus.item.value = ''
      expect(focus.get()).toBeUndefined()
    })

    it('should preserve string, numeric 0, and boolean false focus values', () => {
      const { getScroll, getSelected } = createDependencies()
      const focus = new TabsNavigationFocus(getScroll, getSelected)

      focus.item.value = 'tab-1'
      expect(focus.get()).toBe('tab-1')

      focus.item.value = 0
      expect(focus.get()).toBe(0)

      focus.item.value = false
      expect(focus.get()).toBe(false)
    })

    it('should apply focused value to selected manager and reset cleanly', () => {
      const { getScroll, getSelected, setMock } = createDependencies()
      const focus = new TabsNavigationFocus(getScroll, getSelected)

      focus.item.value = 'tab-3'
      expect(focus.apply()).toBe(focus)
      expect(setMock).toHaveBeenCalledWith('tab-3')

      expect(focus.reset()).toBe(focus)
      expect(focus.item.value).toBeUndefined()
    })

    it('should position focus from scalar, array, numeric 0, and undefined actualItem', () => {
      const { getScroll, getSelected, selectedInstance } = createDependencies(undefined, ['tab-array'])
      const focus = new TabsNavigationFocus(getScroll, getSelected)

      expect(focus.position()).toBe(focus)
      expect(focus.item.value).toBe('tab-array')

      selectedInstance.actualItem.value = 'tab-scalar'
      focus.position()
      expect(focus.item.value).toBe('tab-scalar')

      selectedInstance.actualItem.value = 0
      focus.position()
      expect(focus.item.value).toBe(0)

      selectedInstance.actualItem.value = undefined
      focus.position()
      expect(focus.item.value).toBeUndefined()
    })
  })

  describe('DOM scrolling and CSS selector escaping', () => {
    it('should scroll to matching data-value item when setting focus', () => {
      const goScrollToSpy = vi.spyOn(functional, 'goScrollTo').mockImplementation(() => undefined)
      const mainElement = document.createElement('div')
      const itemElement = document.createElement('button')
      itemElement.setAttribute('data-value', 'tab-2')
      mainElement.appendChild(itemElement)

      const { getScroll, getSelected } = createDependencies(mainElement)
      const focus = new TabsNavigationFocus(getScroll, getSelected)

      expect(focus.set('tab-2')).toBe(focus)
      expect(focus.item.value).toBe('tab-2')
      expect(goScrollToSpy).toHaveBeenCalledWith(mainElement, itemElement)
    })

    it('should scroll to numeric 0 item and safely escape quotes and backslashes in data-value', () => {
      const goScrollToSpy = vi.spyOn(functional, 'goScrollTo').mockImplementation(() => undefined)
      const mainElement = document.createElement('div')

      const zeroItem = document.createElement('button')
      zeroItem.setAttribute('data-value', '0')
      mainElement.appendChild(zeroItem)

      const specialValue = '12" display \\ edge'
      const specialItem = document.createElement('button')
      specialItem.setAttribute('data-value', specialValue)
      mainElement.appendChild(specialItem)

      const { getScroll, getSelected } = createDependencies(mainElement)
      const focus = new TabsNavigationFocus(getScroll, getSelected)

      focus.set(0)
      expect(goScrollToSpy).toHaveBeenCalledWith(mainElement, zeroItem)

      expect(() => focus.set(specialValue)).not.toThrow()
      expect(goScrollToSpy).toHaveBeenCalledWith(mainElement, specialItem)
    })

    it('should not call goScrollTo when container or matching element is missing', () => {
      const goScrollToSpy = vi.spyOn(functional, 'goScrollTo').mockImplementation(() => undefined)
      const { getScroll, getSelected } = createDependencies(undefined)
      const focus = new TabsNavigationFocus(getScroll, getSelected)

      focus.set('missing-tab')
      expect(goScrollToSpy).not.toHaveBeenCalled()
    })
  })
})
