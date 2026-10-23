import { describe, expect, it } from 'vitest'
import { SearchList } from '../SearchList'

type MockProduct = {
  id: string
  name: string
  category: string
  stock?: number
  tags?: string[]
}

describe('SearchList', () => {
  const mockProducts: MockProduct[] = [
    { id: '1', name: 'Laptop Pro', category: 'Electronics', stock: 0, tags: ['work', 'fast'] },
    { id: '2', name: 'Gaming Mouse', category: 'Electronics', stock: 15, tags: ['gaming'] },
    { id: '3', name: 'Mechanical Keyboard', category: 'Accessories', stock: 8, tags: ['work', 'gaming'] }
  ]

  it('should initialize and expose getter methods', () => {
    const searchList = new SearchList(mockProducts, ['name', 'category'], 'mouse')

    expect(searchList.getList()).toEqual(mockProducts)
    expect(searchList.getColumns()).toEqual(['name', 'category'])
    expect(searchList.getValue()).toBe('mouse')

    expect(searchList.getData()).toBeDefined()
    expect(searchList.getItem()).toBeDefined()
    expect(searchList.getOptions()).toBeDefined()
  })

  it('should filter items correctly based on search value', () => {
    const searchList = new SearchList(mockProducts, ['name', 'category'])

    const initialResult = searchList.to()
    expect(initialResult.length).toBe(3)
    expect(initialResult[0]?.searchActive).toBe(false)

    expect(searchList.setValue('gaming')).toBe(searchList)
    const gamingResult = searchList.to()

    expect(gamingResult.length).toBe(1)
    expect(gamingResult[0]?.id).toBe('2')
    expect(gamingResult[0]?.searchActive).toBe(true)
    expect(gamingResult[0]?.nameSearch).toContain('<span class="sys-search-selection">')
  })

  it('should not re-update matcher when setValue is called with the same value', () => {
    const searchList = new SearchList(mockProducts, ['name'], 'mouse')
    const returnValue = searchList.setValue('mouse')

    expect(returnValue).toBe(searchList)
    expect(searchList.to().length).toBe(1)
  })

  it('should treat whitespace-only queries as inactive and return all items unhighlighted', () => {
    const searchList = new SearchList(mockProducts, ['name', 'category'], '   ')

    const results = searchList.to()
    expect(results.length).toBe(3)
    expect(results.every(item => item.searchActive === false)).toBe(true)
  })

  it('should allow modifying list and columns dynamically', () => {
    const searchList = new SearchList(mockProducts, ['name'])
    searchList.setValue('gaming')

    expect(searchList.to().length).toBe(1)

    // @ts-expect-error: Testing nested array index paths in setColumns
    expect(searchList.setColumns(['name', 'tags.0', 'tags.1'])).toBe(searchList)
    const updatedColumnResults = searchList.to()
    expect(updatedColumnResults.length).toBe(2)

    const replacementProducts: MockProduct[] = [
      { id: '10', name: 'Gaming Monitor', category: 'Displays' }
    ]
    expect(searchList.setList(replacementProducts)).toBe(searchList)
    expect(searchList.getList()).toEqual(replacementProducts)
    expect(searchList.to().length).toBe(1)
    expect(searchList.to()[0]?.id).toBe('10')
  })

  it('should return empty array when list is undefined', () => {
    const searchList = new SearchList<MockProduct, ['name']>(undefined, ['name'])
    expect(searchList.to()).toEqual([])
  })

  it('should handle the returnEverything option correctly', () => {
    const searchList = new SearchList(mockProducts, ['name'], 'keyboard', { returnEverything: true })

    const results = searchList.to()
    expect(results.length).toBe(3)

    const matchingItem = results.find(item => item.id === '3')
    const nonMatchingItem = results.find(item => item.id === '1')

    expect(matchingItem?.searchActive).toBe(true)
    expect(nonMatchingItem?.searchActive).toBe(false)
  })

  it('should return empty list when active search has no columns provided and returnEverything is false', () => {
    const searchList = new SearchList(mockProducts, undefined, 'Laptop')

    const results = searchList.to()
    expect(results.length).toBe(0)
  })

  it('should update options correctly and support custom classSearchName and numeric 0 search', () => {
    const searchList = new SearchList(mockProducts, ['name', 'stock'], 'lap')

    expect(searchList.to().length).toBe(1)

    expect(searchList.setOptions({ limit: 4 })).toBe(searchList)
    const unsearchedResults = searchList.to()
    expect(unsearchedResults.length).toBe(3)

    searchList.setOptions({ limit: 1, classSearchName: 'custom-highlight' })
    searchList.setValue('Laptop 0')
    const zeroResults = searchList.to()
    expect(zeroResults.length).toBe(1)
    expect(zeroResults[0]?.id).toBe('1')
    expect(zeroResults[0]?.stockSearch).toBe('<span class="custom-highlight">0</span>')
  })

  it('should support Unicode, Cyrillic, and regex special characters in search', () => {
    const unicodeProducts: MockProduct[] = [
      { id: '1', name: 'Клавиатура [Pro+]', category: 'Периферия' },
      { id: '2', name: 'Мышь (Игровая)', category: 'Периферия' }
    ]

    const searchList = new SearchList(unicodeProducts, ['name', 'category'], '[Pro+]')
    const bracketResults = searchList.to()
    expect(bracketResults.length).toBe(1)
    expect(bracketResults[0]?.id).toBe('1')

    searchList.setValue('игровая')
    const cyrillicResults = searchList.to()
    expect(cyrillicResults.length).toBe(1)
    expect(cyrillicResults[0]?.id).toBe('2')
  })
})
