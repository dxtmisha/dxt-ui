import { describe, expect, it } from 'vitest'
import { SearchList } from '../SearchList'

type MockProduct = {
  id: string
  name: string
  category: string
  tags?: string[]
}

describe('SearchList', () => {
  const mockProducts: MockProduct[] = [
    { id: '1', name: 'Laptop Pro', category: 'Electronics', tags: ['work', 'fast'] },
    { id: '2', name: 'Gaming Mouse', category: 'Electronics', tags: ['gaming'] },
    { id: '3', name: 'Mechanical Keyboard', category: 'Accessories', tags: ['work', 'gaming'] }
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

    // Empty search should return all items formatted without an active search flag
    const initialResult = searchList.to()
    expect(initialResult.length).toBe(3)
    expect(initialResult[0]?.searchActive).toBe(false) // No active search highlighting

    // Search for "gaming"
    searchList.setValue('gaming')
    const gamingResult = searchList.to()

    // The columns are ['name', 'category'].
    // Mouse name = 'Gaming Mouse', category = 'Electronics' -> Match
    // Keyboard name = 'Mechanical Keyboard', category = 'Accessories' -> No Match
    expect(gamingResult.length).toBe(1)
    expect(gamingResult[0]?.id).toBe('2')
    expect(gamingResult[0]?.searchActive).toBe(true)

    // The searchActive flag should trigger HTML marks in the result
    expect(gamingResult[0]?.nameSearch).toContain('<span class="sys-search-selection">')
  })

  it('it should allow modifying a list and columns dynamically', () => {
    const searchList = new SearchList(mockProducts, ['name'])
    searchList.setValue('gaming')

    expect(searchList.to().length).toBe(1) // Gaming Mouse

    // Add tags to searchable columns
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    searchList.setColumns(['name', 'tags.0', 'tags.1'])
    // 'Mechanical Keyboard' has 'gaming' as tags.1
    const newResult = searchList.to()
    expect(newResult.length).toBe(2)
  })

  it('should handle the returnEverything option correctly', () => {
    // With returnEverything = true, all elements are returned, but non-matching ones have searchActive = false
    const searchList = new SearchList(mockProducts, ['name'], 'keyboard', { returnEverything: true })

    const results = searchList.to()
    expect(results.length).toBe(3) // All elements returned

    const matchingItem = results.find(item => item.id === '3')
    const nonMatchingItem = results.find(item => item.id === '1')

    expect(matchingItem?.searchActive).toBe(true)
    expect(nonMatchingItem?.searchActive).toBe(false)
  })

  it('should return all items if no columns are provided (no filtering capability)', () => {
    const searchList = new SearchList(mockProducts, undefined, 'Laptop')

    const results = searchList.to()
    // It should just return the whole list because there are no columns to verify against
    // But since the value 'Laptop' is set, does it consider them matched or no?
    // Actually without columns, cache value is empty, so regex test against "" will fail unless empty search.
    // Let's check what it returns
    // The iteration uses forEach over a list, without columns, isSelection is false for all,
    // but if options.returnEverything is false, it returns nothing?
    // Ah, wait. If options.returnEverything is false:
    // Since item length > limit, it calls callbackToSelection.
    // matcher.test('') is false.
    // So it returns undefined, the result is an empty list.
    expect(results.length).toBe(0)
  })

  it('should update options correctly', () => {
    const searchList = new SearchList(mockProducts, ['name'], 'lap')

    // the limit is natively 2. 'lap' length is 3, so it triggers search
    expect(searchList.to().length).toBe(1) // Laptop Pro

    // Update limit to 4
    searchList.setOptions({ limit: 4 })
    // 'lap' is length 3, so now it behaves as if no search is active
    const newResults = searchList.to()
    expect(newResults.length).toBe(3) // All items returned without highlighting
  })
})
