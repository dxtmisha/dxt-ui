// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { SearchList } from '../SearchList'
import { removeTag } from '../../functions/removeTag'
import { SearchListData } from '../SearchListData'
import { SearchListItem } from '../SearchListItem'
import { SearchListOptions } from '../SearchListOptions'

type MockUser = {
  id: number
  name: string
  role: string
  score?: number | string
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

  it('should handle undefined list and undefined columns safely', () => {
    const options = new SearchListOptions()
    const item = new SearchListItem('test', options)
    const dataWithoutColumns = new SearchListData(mockList, undefined, item, options)

    expect(dataWithoutColumns.isList()).toBe(true)
    expect(dataWithoutColumns.is()).toBe(false)

    const cacheItem = dataWithoutColumns.findCacheItem(mockList[0] as MockUser)
    expect(cacheItem).toBeDefined()
    expect(cacheItem?.value).toBe('')

    const dataWithoutList = new SearchListData<MockUser, ['name']>(undefined, ['name'], item, options)
    expect(dataWithoutList.isList()).toBe(false)
    expect(dataWithoutList.is()).toBe(false)
    expect(dataWithoutList.forEach(() => undefined)).toEqual([])
  })

  it('should rebuild the cache when a list or columns change', () => {
    const options = new SearchListOptions()
    const item = new SearchListItem('test', options)
    const data = new SearchListData(mockList, ['name'], item, options)

    const initialCache = data.findCacheItem(mockList[0] as MockUser)
    expect(initialCache?.value).toContain('Alice')
    expect(initialCache?.value).not.toContain('admin')

    expect(data.setColumns(['name', 'role'])).toBe(data)
    const updatedCacheColumns = data.findCacheItem(mockList[0] as MockUser)
    expect(updatedCacheColumns?.value).toContain('Alice')
    expect(updatedCacheColumns?.value).toContain('admin')

    const newList = [{ id: 4, name: 'Diana', role: 'admin' }]
    expect(data.setList(newList)).toBe(data)
    const newCache = data.findCacheItem(newList[0] as MockUser)
    expect(newCache?.value).toContain('Diana')
  })

  it('should accurately format item values with nested keys and unhighlighted state', () => {
    const options = new SearchListOptions()
    const item = new SearchListItem('New York', options)
    const data = new SearchListData(mockList, ['address.city'], item, options)

    const highlightedItem = data.toFormatItem(mockList[0] as MockUser, true)
    expect(highlightedItem.addressCitySearch).toBeDefined()
    expect(highlightedItem.searchActive).toBe(true)
    expect(highlightedItem.addressCitySearch).toContain('<span class="sys-search-selection">')

    const unhighlightedItem = data.toFormatItem(mockList[0] as MockUser, false)
    expect(unhighlightedItem.addressCitySearch).toBe('New York')
    expect(unhighlightedItem.searchActive).toBe(false)
  })

  it('should invoke callback through forEach with valid items', () => {
    const options = new SearchListOptions()
    const item = new SearchListItem('test', options)
    const data = new SearchListData(mockList, ['name'], item, options)

    let iterations = 0
    const result = data.forEach(() => {
      iterations++
      return undefined
    })

    expect(iterations).toBe(3)
    expect(result.length).toBe(0)

    const resultAll = data.forEach((originalItem) => {
      return data.toFormatItem(originalItem, false)
    })

    expect(resultAll.length).toBe(3)
  })

  it('should include numeric 0 and string "0" in generated cache and format item with highlight', () => {
    const options = new SearchListOptions({ limit: 1 })
    const item = new SearchListItem('0', options)
    const listWithZero: MockUser[] = [
      { id: 0, name: 'ZeroNumeric', role: 'guest', score: 0 },
      { id: 1, name: 'ZeroString', role: 'guest', score: '0' }
    ]
    const data = new SearchListData(listWithZero, ['id', 'score'], item, options)

    const numericCacheItem = data.findCacheItem(listWithZero[0]!)
    expect(numericCacheItem).toBeDefined()
    expect(numericCacheItem?.value).toContain('0')

    const formattedNumeric = data.toFormatItem(listWithZero[0]!, true)
    expect(formattedNumeric.idSearch).toContain('<span class="sys-search-selection">0</span>')
    expect(formattedNumeric.scoreSearch).toContain('<span class="sys-search-selection">0</span>')

    const stringCacheItem = data.findCacheItem(listWithZero[1]!)
    expect(stringCacheItem?.value).toContain('0')

    const formattedString = data.toFormatItem(listWithZero[1]!, true)
    expect(formattedString.scoreSearch).toContain('<span class="sys-search-selection">0</span>')
  })
})

describe('SearchListData HTML boundary', () => {
  const inputs = [
    'zz <<b>img src=x onerror="alert(1)">',
    'zz <img src=x onerror="alert(1)">',
    'zz <svg onload="alert(1)"></svg>',
    'zz A & B > C "quoted"'
  ]

  it('encodes formatted fields without browser globals', () => {
    vi.stubGlobal('window', undefined)
    vi.stubGlobal('document', undefined)

    try {
      const row = { label: 'zz <<b>img src=x onerror="alert(1)">' }
      const options = new SearchListOptions()
      const item = new SearchListItem('zz', options)
      const data = new SearchListData<{ label: string }, ['label']>([row], ['label'], item, options)
      const highlighted = data.toFormatItem(row, true)
      const plain = data.toFormatItem(row, false)
      expect(highlighted.labelSearch).toContain('&lt;img')
      expect(highlighted.labelSearch).not.toContain('<img')
      expect(plain.labelSearch).not.toContain('<img')
      expect(highlighted.label).toBe(row.label)
      expect(plain.label).toBe(row.label)
    } finally {
      vi.unstubAllGlobals()
    }
  })

  describe.each([true, false])('selection %s', (selection) => {
    it.each(inputs)('renders the value as text while retaining highlight spans: %s', (input) => {
      const row = { label: input }
      const options = new SearchListOptions()
      const item = new SearchListItem('zz', options)
      const data = new SearchListData<{ label: string }, ['label']>(
        [row], ['label'], item, options
      )
      const formatted = data.toFormatItem(row, selection)
      const host = document.createElement('div')
      host.innerHTML = formatted.labelSearch

      expect(host.querySelector('img,svg,iframe,script,[onerror],[onload]')).toBeNull()
      expect(host.textContent).toBe(selection ? removeTag(input) : input)
      expect(host.querySelectorAll('span')).toHaveLength(selection ? 1 : 0)
      expect(formatted.label).toBe(input)
      expect(row.label).toBe(input)
      expect(formatted.searchActive).toBe(selection)
    })
  })

  it('keeps the public SearchList result safe for HTML rendering', () => {
    const input = 'zz <<b>img src=x onerror="alert(1)">'
    const result = new SearchList([{ label: input }], ['label'], 'zz').to()[0]!
    const host = document.createElement('div')
    host.innerHTML = result.labelSearch
    expect(host.querySelector('img')).toBeNull()
    expect(host.textContent).toBe(removeTag(input))
    expect(host.querySelector('span')?.textContent).toBe('zz')
  })

  it('encodes nonmatching rows returned by returnEverything', () => {
    const input = '<img src=x onerror="alert(1)">'
    const result = new SearchList(
      [{ label: input }], ['label'], 'missing', { returnEverything: true }
    ).to()[0]!
    const host = document.createElement('div')
    host.innerHTML = result.labelSearch
    expect(host.querySelector('img')).toBeNull()
    expect(host.textContent).toBe(input)
    expect(result.searchActive).toBe(false)
  })
})
