// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { toRefs, reactive, nextTick } from 'vue'
import { SelectableAreaItem } from '../SelectableAreaItem'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

describe('SelectableAreaItem', () => {
  it('should initialize item selection from props', () => {
    const props = reactive({
      selected: ['1', '2']
    }) as any
    const refs = toRefs(props)
    const mockClasses = {
      findItems: vi.fn().mockReturnValue([]),
      list: { selected: 'selected-class' }
    } as any

    const manager = new SelectableAreaItem(props, refs, mockClasses)

    expect(manager.get()).toEqual(['1', '2'])
    expect(manager.getNewArray()).toEqual(['1', '2'])
  })

  it('should set and reset values', () => {
    const props = reactive({
      selected: undefined
    }) as any
    const refs = toRefs(props)
    const mockClasses = {
      findItems: vi.fn().mockReturnValue([]),
      list: { selected: 'selected-class' }
    } as any

    const manager = new SelectableAreaItem(props, refs, mockClasses)

    expect(manager.get()).toEqual([])

    manager.set('3')
    expect(manager.get()).toEqual(['3'])

    manager.set(['4', '5'])
    expect(manager.get()).toEqual(['4', '5'])

    manager.reset()
    expect(manager.get()).toEqual([])
  })

  it('should handle single selectionByClick and updates selection classes', async () => {
    const props = reactive({
      selected: undefined
    }) as any
    const refs = toRefs(props)

    const element1 = document.createElement('div')
    element1.dataset.value = '1'
    const element2 = document.createElement('div')
    element2.dataset.value = '2'

    const mockClasses = {
      findByValue: vi.fn().mockImplementation((val) => {
        if (val === '1') return element1
        if (val === '2') return element2
        return undefined
      }),
      findItems: vi.fn().mockReturnValue([element1, element2]),
      list: { selected: 'selected-class' }
    } as any

    const manager = new SelectableAreaItem(props, refs, mockClasses)

    manager.selectionByClick('1')
    await nextTick()

    expect(manager.get()).toEqual(['1'])
    expect(mockClasses.findByValue).toHaveBeenCalledWith('1')

    // Expect class list updates to have been made by selection update watch
    expect(element1.classList.contains('selected-class')).toBe(true)
    expect(element2.classList.contains('selected-class')).toBe(false)
  })

  it('should handle selectionByMeta (toggle values)', () => {
    const props = reactive({
      selected: ['1']
    }) as any
    const refs = toRefs(props)
    const element1 = document.createElement('div')
    const mockClasses = {
      findItems: vi.fn().mockReturnValue([element1]),
      list: { selected: 'selected-class' }
    } as any

    const manager = new SelectableAreaItem(props, refs, mockClasses)

    // Toggle existing value -> removes it
    manager.selectionByMeta('1')
    expect(manager.get()).toEqual([])

    // Toggle new value -> adds it
    manager.selectionByMeta('2')
    expect(manager.get()).toEqual(['2'])
  })

  it('should handle selectionByShift (range selection)', () => {
    const props = reactive({
      selected: undefined
    }) as any
    const refs = toRefs(props)

    const item1 = document.createElement('div')
    item1.dataset.value = '10'
    const item2 = document.createElement('div')
    item2.dataset.value = '20'
    const item3 = document.createElement('div')
    item3.dataset.value = '30'

    const mockClasses = {
      findByValue: vi.fn().mockImplementation((val) => {
        if (val === '10') return item1
        if (val === '20') return item2
        if (val === '30') return item3
        return undefined
      }),
      findItems: vi.fn().mockReturnValue([item1, item2, item3]),
      list: { selected: 'selected-class' }
    } as any

    const manager = new SelectableAreaItem(props, refs, mockClasses)

    // First click sets lastSelection
    manager.selectionByClick('10')

    // Shift click to '30' should select range 10 to 30 (10, 20, 30)
    manager.selectionByShift('30')
    expect(manager.get()).toEqual(['10', '20', '30'])
  })
})
