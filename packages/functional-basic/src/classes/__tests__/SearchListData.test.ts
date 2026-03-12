import { describe, expect, it } from 'vitest'
import { SearchListData } from '../SearchListData'
import { SearchListItem } from '../SearchListItem'
import { SearchListOptions } from '../SearchListOptions'

type MockUser = {
  id: number
  name: string
  role: string
  address?: {
    city: string
  }
}

describe('SearchListData', () => {
  const mockList: MockUser[] = [
    { id: 1, name: 'Alice', role: 'admin', address: { city: 'New York' } },
    { id: 2, name: 'Bob', role: 'user', address: { city: 'London' } },
    { id: 3, name: 'Charlie', role: 'user' }
  ]

  it('should initialize and report state correctly', () => {
    const options = new SearchListOptions()
    const item = new SearchListItem('Alice', options)
    const data = new SearchListData(mockList, ['name', 'role'], item, options)

    expect(data.isList()).toBe(true)
    expect(data.is()).toBe(true)
    expect(data.getList()).toEqual(mockList)
    expect(data.getColumns()).toEqual(['name', 'role'])
  })

  it('should handle undefined columns safely', () => {
    const options = new SearchListOptions()
    const item = new SearchListItem('test', options)
    const data = new SearchListData(mockList, undefined, item, options)

    expect(data.isList()).toBe(true)
    expect(data.is()).toBe(false) // Columns are missing

    // Testing cache generation without columns
    const cacheItem = data.findCacheItem(mockList[0] as MockUser)
    expect(cacheItem).toBeDefined()
    expect(cacheItem?.value).toBe('') // Value string is empty if no columns
  })

  it('should rebuild the cache when a list or columns change', () => {
    const options = new SearchListOptions()
    const item = new SearchListItem('test', options)
    const data = new SearchListData(mockList, ['name'], item, options)

    const initialCache = data.findCacheItem(mockList[0] as MockUser)
    expect(initialCache?.value).toContain('Alice')
    expect(initialCache?.value).not.toContain('admin')

    // Update columns
    data.setColumns(['name', 'role'])
    const updatedCacheColumns = data.findCacheItem(mockList[0] as MockUser)
    expect(updatedCacheColumns?.value).toContain('Alice')
    expect(updatedCacheColumns?.value).toContain('admin')

    // Update list
    const newList = [{ id: 4, name: 'Diana', role: 'admin' }]
    data.setList(newList)
    const newCache = data.findCacheItem(newList[0] as MockUser)
    expect(newCache?.value).toContain('Diana')
  })

  it('should accurately format item values with nested keys', () => {
    const options = new SearchListOptions()
    const item = new SearchListItem('New York', options)
    const data = new SearchListData(mockList, ['address.city'], item, options)

    const formattedItem = data.toFormatItem(mockList[0] as MockUser, true)

    // Should extract nested field and format name to camelCase + Search
    expect(formattedItem.addressCitySearch).toBeDefined()
    expect(formattedItem.searchActive).toBe(true)

    // Since 'New York' is the search value and selection is true, it should contain the HTML tag
    expect(formattedItem.addressCitySearch).toContain('<span class="sys-search-selection">')
  })

  it('should invoke callback through forEach with valid items', () => {
    const options = new SearchListOptions()
    const item = new SearchListItem('test', options)
    const data = new SearchListData(mockList, ['name'], item, options)

    let iterations = 0
    const result = data.forEach(() => {
      iterations++
      return undefined // Drop all items
    })

    expect(iterations).toBe(3)
    expect(result.length).toBe(0)

    const resultAll = data.forEach((origItem, _) => {
      return data.toFormatItem(origItem, false)
    })

    expect(resultAll.length).toBe(3)
  })
})
