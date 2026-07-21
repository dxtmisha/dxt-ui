// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { TabsNavigationControl } from '../TabsNavigationControl'

describe('TabsNavigationControl', () => {
  it('should define binds', () => {
    const mockSelected = {} as any
    const mockFocus = {} as any
    const mockData = {} as any

    const control = new TabsNavigationControl(mockSelected, mockFocus, mockData)

    expect(control.binds).toEqual({
      onFocus: control.onFocus,
      onBlur: control.onBlur
    })
  })

  it('should fetch first item identifier', () => {
    const mockSelected = {} as any
    const mockFocus = {} as any
    const mockData = {
      getFirstItemByParent: vi.fn().mockReturnValue({ index: 'tab-1' })
    } as any

    const control = new TabsNavigationControl(mockSelected, mockFocus, mockData)

    expect(control.getFirstItem()).toBe('tab-1')
    expect(mockData.getFirstItemByParent).toHaveBeenCalledWith(undefined)
  })

  it('should listen to keydown events on focus and clean up on blur', () => {
    const mockSelected = {} as any
    const mockFocus = {
      position: vi.fn(),
      reset: vi.fn()
    } as any
    const mockData = {} as any

    const control = new TabsNavigationControl(mockSelected, mockFocus, mockData)

    // Trigger focus
    control.onFocus()

    // EventItem should have been created and started
    expect(control['event']).toBeDefined()
    expect(mockFocus.position).toHaveBeenCalled()

    // Trigger blur
    control.onBlur()

    expect(control['event']).toBeUndefined()
    expect(mockFocus.reset).toHaveBeenCalled()
  })

  it('should navigate prev, next, and select item on keydown', () => {
    const mockSelected = {
      set: vi.fn()
    } as any
    const mockFocus = {
      get: vi.fn().mockReturnValue('tab-2'),
      set: vi.fn(),
      position: vi.fn(),
      reset: vi.fn()
    } as any
    const mockData = {
      getLength: () => 3,
      getFocusItem: vi.fn().mockReturnValue({ index: 'tab-2', disabled: false }),
      getFirstItemByParent: () => ({ index: 'tab-1' }),
      getIndexPrev: vi.fn().mockReturnValue({ index: 'tab-1' }),
      getIndexNext: vi.fn().mockReturnValue({ index: 'tab-3' })
    } as any

    const control = new TabsNavigationControl(mockSelected, mockFocus, mockData)

    // Trigger focus to start listener
    control.onFocus()

    // Invoke arrow left keydown handler
    const eventLeft = new KeyboardEvent('keydown', { code: 'ArrowLeft' })
    control['on'](eventLeft)

    expect(mockData.getIndexPrev).toHaveBeenCalledWith('tab-2')
    expect(mockFocus.set).toHaveBeenCalledWith('tab-1')

    // Invoke arrow right keydown handler
    const eventRight = new KeyboardEvent('keydown', { code: 'ArrowRight' })
    control['on'](eventRight)

    expect(mockData.getIndexNext).toHaveBeenCalledWith('tab-2')
    expect(mockFocus.set).toHaveBeenCalledWith('tab-3')

    // Invoke enter select keydown handler
    const eventEnter = new KeyboardEvent('keydown', { code: 'Enter' })
    const spyPreventEnter = vi.spyOn(eventEnter, 'preventDefault')
    control['on'](eventEnter)

    expect(spyPreventEnter).toHaveBeenCalled()
    expect(mockSelected.set).toHaveBeenCalledWith('tab-2')
  })
})
