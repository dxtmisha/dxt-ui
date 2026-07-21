// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { toRefs, reactive, nextTick } from 'vue'
import { TabsSelected } from '../TabsSelected'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

describe('TabsSelected', () => {
  it('should initialize selected item from props.selected', () => {
    const props = reactive({
      selected: 'tab-2',
      tabs: [
        { value: 'tab-1', label: 'Tab 1' },
        { value: 'tab-2', label: 'Tab 2' }
      ]
    }) as any
    const refs = toRefs(props)

    const tabsSelected = new TabsSelected(props, refs)

    expect(tabsSelected.item.value).toBe('tab-2')
    expect(tabsSelected.is('tab-2')).toBe(true)
    expect(tabsSelected.is('tab-1')).toBe(false)
  })

  it('should fallback to first tab if props.selected is undefined', () => {
    const props = reactive({
      selected: undefined,
      tabs: [
        { value: 'tab-1', label: 'Tab 1' },
        { value: 'tab-2', label: 'Tab 2' }
      ]
    }) as any
    const refs = toRefs(props)

    const tabsSelected = new TabsSelected(props, refs)

    expect(tabsSelected.item.value).toBe('tab-1')
    expect(tabsSelected.is('tab-1')).toBe(true)
  })

  it('should set selection manually', () => {
    const props = reactive({
      selected: 'tab-1'
    }) as any
    const refs = toRefs(props)

    const tabsSelected = new TabsSelected(props, refs)
    expect(tabsSelected.item.value).toBe('tab-1')

    tabsSelected.set('tab-3')
    expect(tabsSelected.item.value).toBe('tab-3')
  })

  it('should update selection reactively when refs.selected changes', async () => {
    const props = reactive({
      selected: 'tab-1',
      tabs: [
        { value: 'tab-1', label: 'Tab 1' },
        { value: 'tab-2', label: 'Tab 2' }
      ]
    }) as any
    const refs = toRefs(props)

    const tabsSelected = new TabsSelected(props, refs)
    expect(tabsSelected.item.value).toBe('tab-1')

    // change selection prop
    props.selected = 'tab-2'
    await nextTick()

    expect(tabsSelected.item.value).toBe('tab-2')
  })
})
