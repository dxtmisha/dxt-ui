// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { DraggableWrapperItem } from '../DraggableWrapperItem'

describe('DraggableWrapperItem', () => {
  const createMockFocus = () => ({ reset: vi.fn() })
  const createMockActive = () => ({ get: vi.fn(), reset: vi.fn() })
  const createMockSelection = () => ({ get: vi.fn(), reset: vi.fn() })
  const createMockGo = () => ({ reset: vi.fn() })

  it('should orchestrate getters and sub-helper accessors', () => {
    const focus = createMockFocus() as any
    const active = createMockActive() as any
    const selection = createMockSelection() as any
    const go = createMockGo() as any

    const item = new DraggableWrapperItem(focus, active, selection, go)
    expect(item.getFocus()).toBe(focus)
    expect(item.getActive()).toBe(active)
    expect(item.getSelection()).toBe(selection)
    expect(item.getGo()).toBe(go)
  })

  it('should aggregate elements currently in drag action', () => {
    const focus = createMockFocus() as any
    const active = createMockActive()
    const selection = createMockSelection()
    const go = createMockGo() as any

    const item = new DraggableWrapperItem(focus, active as any, selection as any, go)

    const element1 = document.createElement('div')
    selection.get.mockReturnValue([element1])
    expect(item.get()).toEqual([element1])

    selection.get.mockReturnValue(undefined)
    const element2 = document.createElement('span')
    active.get.mockReturnValue(element2)
    expect(item.get()).toEqual([element2])

    active.get.mockReturnValue(undefined)
    expect(item.get()).toEqual([])
  })

  it('should calculate new positions with reorder list function toNewPosition', () => {
    const item = new DraggableWrapperItem({} as any, {} as any, {} as any, {} as any)
    const items = [
      { value: '1' },
      { value: '2' },
      { value: '3' },
      { value: '4' }
    ]

    let result = item.toNewPosition(items, '1', ['2', '3'], true)
    expect(result.map(x => x.value)).toEqual(['2', '3', '1', '4'])

    result = item.toNewPosition(items, '1', ['2', '3'], false)
    expect(result.map(x => x.value)).toEqual(['1', '2', '3', '4'])

    result = item.toNewPosition(items, '9', ['2', '3'], false)
    expect(result.map(x => x.value)).toEqual(['2', '3', '1', '4'])
  })
})
