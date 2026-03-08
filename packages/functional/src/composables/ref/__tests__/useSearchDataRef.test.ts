/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi } from 'vitest'
import { nextTick, ref } from 'vue'

vi.mock('@dxtmisha/functional-basic', () => ({
  addTagHighlightMatch: (value: string, search: string, className: string) => {
    if (!search) return value
    const regex = new RegExp(`(${search})`, 'gi')
    return value.replace(regex, `<span class="${className}">$1</span>`)
  },
  anyToString: (value: any) => (value === null || value === undefined ? '' : String(value)),
  executeFunction: (value: any) => (typeof value === 'function' ? value() : value),
  forEach: (list: any[], callback: (item: any) => any) => list.map(callback),
  getItemByPath: (item: any, path: string) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], item)
  },
  isFilled: (value: any) => {
    if (Array.isArray(value)) return value.length > 0
    if (typeof value === 'object' && value !== null) return Object.keys(value).length > 0
    return value !== null && value !== undefined && value !== ''
  }
}))

import { useSearchDataRef } from '../useSearchDataRef'

describe('useSearchDataRef', () => {
  const listItems = [
    { id: 1, name: 'Apple', Category: 'Fruit', info: { color: 'red' } },
    { id: 2, name: 'Banana', Category: 'Fruit', info: { color: 'yellow' } },
    { id: 3, name: 'Carrot', Category: 'Vegetable', info: { color: 'orange' } }
  ]
  const columns = ['name', 'Category', 'info.color'] as any

  it('should initialize listCache correctly', () => {
    const searchDelay = ref('')
    const { listCache } = useSearchDataRef(listItems, columns, searchDelay)

    expect(listCache.value).toHaveLength(3)
    expect(listCache.value[0]).toEqual({
      item: listItems[0],
      value: ' Apple Fruit red'
    })
  })

  it('should react to list changes', async () => {
    const listRef = ref([...listItems])
    const searchDelay = ref('')
    const { listCache } = useSearchDataRef(listRef, columns, searchDelay)

    expect(listCache.value).toHaveLength(3)

    listRef.value.push({ id: 4, name: 'Date', Category: 'Fruit', info: { color: 'brown' } })
    await nextTick()

    expect(listCache.value).toHaveLength(4)
    expect(listCache.value[3].value).toBe(' Date Fruit brown')
  })

  it('findCacheItem should find the correct item', () => {
    const searchDelay = ref('')
    const { findCacheItem } = useSearchDataRef(listItems, columns, searchDelay)

    const cacheItem = findCacheItem(listItems[1])
    expect(cacheItem?.item).toBe(listItems[1])
    expect(cacheItem?.value).toBe(' Banana Fruit yellow')

    const nonExistent = findCacheItem({ id: 99 } as any)
    expect(nonExistent).toBeUndefined()
  })

  it('toFormatItem should format simple columns', () => {
    const searchDelay = ref('')
    const { toFormatItem } = useSearchDataRef(listItems, columns, searchDelay)

    const formatted = toFormatItem(listItems[0], false)
    expect(formatted).toHaveProperty('nameSearch', 'Apple')
    expect(formatted).toHaveProperty('CategorySearch', 'Fruit')
    expect(formatted.searchActive).toBe(false)
  })

  it('toFormatItem should format nested columns correctly', () => {
    const searchDelay = ref('')
    const { toFormatItem } = useSearchDataRef(listItems, columns, searchDelay)

    const formatted = toFormatItem(listItems[0], false)
    // info.color -> infoColorSearch
    expect(formatted).toHaveProperty('infoColorSearch', 'red')
  })

  it('toFormatItem should add highlighting when selection is true', () => {
    const searchDelay = ref('app')
    const { toFormatItem } = useSearchDataRef(listItems, columns, searchDelay)

    const formatted = toFormatItem(listItems[0], true)
    expect(formatted.nameSearch).toContain('<span class="sys-search-selection">App</span>le')
    expect(formatted.searchActive).toBe(true)
  })

  it('toFormatItem should use custom classSearchName', () => {
    const searchDelay = ref('app')
    const { toFormatItem } = useSearchDataRef(listItems, columns, searchDelay, {
      classSearchName: 'custom-highlight'
    })

    const formatted = toFormatItem(listItems[0], true)
    expect(formatted.nameSearch).toContain('<span class="custom-highlight">App</span>le')
  })
})
