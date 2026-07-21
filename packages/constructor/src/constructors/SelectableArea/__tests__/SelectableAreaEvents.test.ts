// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { SelectableAreaEvents } from '../SelectableAreaEvents'

describe('SelectableAreaEvents', () => {
  it('should define binds', () => {
    const events = new SelectableAreaEvents({} as any, {} as any, {} as any, {} as any)
    expect(events.binds).toEqual({
      onMousedown: events.onMousedown,
      onTouchstart: events.onMousedown
    })
  })

  it('should verify isEnd and isNoButtons helpers', () => {
    const events = new SelectableAreaEvents({} as any, {} as any, {} as any, {} as any)

    expect(events.isEnd({ type: 'mouseup' } as any)).toBe(true)
    expect(events.isEnd({ type: 'touchend' } as any)).toBe(true)
    expect(events.isEnd({ type: 'mousemove' } as any)).toBe(false)

    expect(events.isNoButtons(new MouseEvent('mousemove', { buttons: 0 }))).toBe(true)
    expect(events.isNoButtons(new MouseEvent('mousemove', { buttons: 1 }))).toBe(false)
  })

  it('should handle onClick selection modes', () => {
    const props = { disabled: false, active: false } as any
    const mockClasses = {
      findClick: vi.fn(),
      findItem: vi.fn()
    } as any
    const mockItem = {
      selectionByClick: vi.fn(),
      selectionByMeta: vi.fn(),
      selectionByShift: vi.fn()
    } as any

    const events = new SelectableAreaEvents(props, mockClasses, mockItem, {} as any)

    // case 1: disabled
    props.disabled = true
    events.onClick({ target: {} } as any)
    expect(mockClasses.findClick).not.toHaveBeenCalled()
    props.disabled = false

    // case 2: no click element found
    mockClasses.findClick.mockReturnValue(undefined)
    events.onClick({ target: {} } as any)
    expect(mockItem.selectionByClick).not.toHaveBeenCalled()

    // case 3: click element found
    const targetElement = document.createElement('div')
    const itemElement = document.createElement('div')
    itemElement.dataset.value = '15'
    mockClasses.findClick.mockReturnValue(targetElement)
    mockClasses.findItem.mockReturnValue(itemElement)

    // shift key click
    events.onClick({ target: targetElement, shiftKey: true } as any)
    expect(mockItem.selectionByShift).toHaveBeenCalledWith('15')

    // meta key click
    events.onClick({ target: targetElement, metaKey: true } as any)
    expect(mockItem.selectionByMeta).toHaveBeenCalledWith('15')

    // standard click
    events.onClick({ target: targetElement } as any)
    expect(mockItem.selectionByClick).toHaveBeenCalledWith('15')
  })

  it('should handle onMousedown and setup listeners', () => {
    const props = { disabled: false, active: false } as any
    const element = document.createElement('div')
    const mockClasses = {
      isMain: vi.fn().mockReturnValue(true),
      getRect: vi.fn().mockReturnValue({ left: 10, top: 10, right: 110, bottom: 110 }),
      setBlockSelection: vi.fn()
    } as any
    const mockItem = {
      get: vi.fn().mockReturnValue(['current-val'])
    } as any
    const mockSquare = {
      start: vi.fn()
    } as any

    const events = new SelectableAreaEvents(props, mockClasses, mockItem, mockSquare)

    const mouseEvent = new MouseEvent('mousedown', { clientX: 25, clientY: 35 })
    Object.defineProperty(mouseEvent, 'target', { value: element })

    const addEventSpy = vi.spyOn(window, 'addEventListener')

    events.onMousedown(mouseEvent)

    expect(mockClasses.getRect).toHaveBeenCalled()
    expect(mockSquare.start).toHaveBeenCalledWith({ x: 15, y: 25 }, [])
    expect(mockClasses.setBlockSelection).toHaveBeenCalledWith(true)

    // listeners are added
    expect(addEventSpy).toHaveBeenCalledWith('mousemove', events.onMousemove)

    // Clean up window event listeners
    // @ts-expect-error accessing protected method
    events.removeListeners()
  })

  it('should handle onMousemove drag move and drag end', () => {
    const props = { disabled: false, active: false } as any
    const mockClasses = {
      getRect: vi.fn().mockReturnValue({ left: 10, top: 10 }),
      setBlockSelection: vi.fn()
    } as any
    const mockItem = {
      set: vi.fn()
    } as any
    const mockSquare = {
      move: vi.fn(),
      selectionBySquare: vi.fn(),
      end: vi.fn(),
      getSelectedCurrent: vi.fn().mockReturnValue(['val1', 'val2'])
    } as any

    const events = new SelectableAreaEvents(props, mockClasses, mockItem, mockSquare)

    // case 1: standard mouse drag move
    const mouseEvent = new MouseEvent('mousemove', { clientX: 50, clientY: 60, buttons: 1 })
    events.onMousemove(mouseEvent)

    expect(mockClasses.getRect).toHaveBeenCalled()
    expect(mockSquare.move).toHaveBeenCalledWith({ x: 40, y: 50 })
    expect(mockItem.set).toHaveBeenCalledWith(['val1', 'val2'])

    // case 2: drag end (buttons === 0)
    const endEvent = new MouseEvent('mousemove', { buttons: 0 })
    const removeEventSpy = vi.spyOn(window, 'removeEventListener')

    events.onMousemove(endEvent)

    expect(mockSquare.selectionBySquare).toHaveBeenCalled()
    expect(mockSquare.end).toHaveBeenCalled()
    expect(mockClasses.setBlockSelection).toHaveBeenCalledWith(false)
    expect(removeEventSpy).toHaveBeenCalledWith('mousemove', events.onMousemove)
  })
})
