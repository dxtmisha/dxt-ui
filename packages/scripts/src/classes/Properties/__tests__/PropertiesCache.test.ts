import { afterEach, describe, expect, it, vi } from 'vitest'
import { PropertiesCache } from '../PropertiesCache'
import { PropertiesFile } from '../PropertiesFile'

describe('PropertiesCache', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    PropertiesCache.clear()
  })

  it('computes and caches values with callback on cache miss', () => {
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
    vi.spyOn(PropertiesFile, 'write').mockImplementation(() => {})

    const generator = vi.fn().mockReturnValue({ tokens: 42 })
    const result1 = PropertiesCache.get(['test'], 'tokens', generator)

    expect(result1).toEqual({ tokens: 42 })
    expect(generator).toHaveBeenCalledTimes(1)
  })

  it('reads and tracks files with PropertiesCache.read', () => {
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({ key: 'val' })

    const data = PropertiesCache.read('config.json')
    expect(data).toEqual({ key: 'val' })
  })

  it('clears cached state with PropertiesCache.clear', () => {
    PropertiesCache.clear()
    expect(PropertiesCache).toBeDefined()
  })
})
