// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { toRefs, reactive, nextTick } from 'vue'
import { TabsNavigationSelected } from '../TabsNavigationSelected'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

describe('TabsNavigationSelected', () => {
  it('should initialize selected values from props', () => {
    const props = reactive({
      selected: 'tab-2',
      list: [
        { value: 'tab-1', label: 'Tab 1' },
        { value: 'tab-2', label: 'Tab 2' }
      ]
    }) as any
    const refs = toRefs(props)

    const selected = new TabsNavigationSelected(props, refs)

    expect(selected.item.value).toBe('tab-2')
    expect(selected.actualItem.value).toBe('tab-2')
    expect(selected.isSelected('tab-2')).toBe(true)
    expect(selected.isSelected('tab-1')).toBe(false)
  })

  it('should fallback to first list item value if props.selected is undefined', () => {
    const props = reactive({
      selected: undefined,
      list: [
        { value: 'tab-1', label: 'Tab 1' },
        { value: 'tab-2', label: 'Tab 2' }
      ]
    }) as any
    const refs = toRefs(props)

    const selected = new TabsNavigationSelected(props, refs)

    expect(selected.item.value).toBe('tab-1')
    expect(selected.actualItem.value).toBe('tab-1')
  })

  it('should set item and actualItem values', () => {
    const props = reactive({ selected: 'tab-1' }) as any
    const selected = new TabsNavigationSelected(props, toRefs(props))

    selected.set('tab-3')
    expect(selected.item.value).toBe('tab-3')

    selected.setActual('tab-4')
    expect(selected.actualItem.value).toBe('tab-4')
  })

  it('should update selection reactively on watcher triggers', async () => {
    const props = reactive({
      selected: 'tab-1'
    }) as any
    const refs = toRefs(props)

    const selected = new TabsNavigationSelected(props, refs)

    props.selected = 'tab-2'
    await nextTick()

    expect(selected.item.value).toBe('tab-2')
  })
})
