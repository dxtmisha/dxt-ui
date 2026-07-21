// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { TabsNavigationFocus } from '../TabsNavigationFocus'
import { goScrollTo } from '@dxtmisha/functional'

vi.mock('@dxtmisha/functional', async () => {
  const actual = await vi.importActual('@dxtmisha/functional') as any
  return {
    ...actual,
    goScrollTo: vi.fn()
  }
})

describe('TabsNavigationFocus', () => {
  it('should get focus value', () => {
    const mockScroll = {} as any
    const mockSelected = {} as any
    const focus = new TabsNavigationFocus(mockScroll, mockSelected)

    expect(focus.get()).toBeUndefined()

    focus.item.value = 'tab-1'
    expect(focus.get()).toBe('tab-1')
  })

  it('should apply focused value to selected tab manager', () => {
    const mockScroll = {} as any
    const mockSelected = {
      set: vi.fn()
    } as any
    const focus = new TabsNavigationFocus(mockScroll, mockSelected)

    focus.item.value = 'tab-3'
    focus.apply()

    expect(mockSelected.set).toHaveBeenCalledWith('tab-3')
  })

  it('should set focus and call toScroll', () => {
    const mainEl = document.createElement('div')
    const itemEl = document.createElement('div')
    itemEl.setAttribute('data-value', 'tab-2')
    mainEl.appendChild(itemEl)

    const mockScroll = {
      elementHtml: mainEl
    } as any
    const mockSelected = {} as any
    const focus = new TabsNavigationFocus(mockScroll, mockSelected)

    const spyScroll = vi.spyOn(focus, 'toScroll')

    focus.set('tab-2')

    expect(focus.item.value).toBe('tab-2')
    expect(spyScroll).toHaveBeenCalled()
    expect(goScrollTo).toHaveBeenCalledWith(mainEl, itemEl)
  })

  it('should position focus on first selected item value', () => {
    const mockScroll = {} as any
    const mockSelected = {
      actualItem: ref(['tab-1-selected'])
    } as any
    const focus = new TabsNavigationFocus(mockScroll, mockSelected)

    focus.position()

    expect(focus.item.value).toBe('tab-1-selected')
  })

  it('should reset focus', () => {
    const mockScroll = {} as any
    const mockSelected = {} as any
    const focus = new TabsNavigationFocus(mockScroll, mockSelected)

    focus.item.value = 'active-focus'
    focus.reset()

    expect(focus.item.value).toBeUndefined()
  })
})
