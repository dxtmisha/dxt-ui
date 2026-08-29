import { afterEach, describe, expect, it, vi } from 'vitest'
import { getConstructorProperties } from '../getConstructorProperties'
import { PropertiesFile } from '../../classes/Properties/PropertiesFile'

describe('getConstructorProperties', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('reads constructor property files and maps them by name', () => {
    const mockPropertyItem = { name: 'Button', value: { color: { value: '#000' } } }

    vi.spyOn(PropertiesFile, 'readFile').mockImplementation((path) => {
      if (Array.isArray(path) && path.includes('Button')) {
        return mockPropertyItem as any
      }
      return undefined
    })

    const result = getConstructorProperties(['Button', 'UnknownComponent'])

    expect(result.Button).toEqual(mockPropertyItem)
    expect(result.UnknownComponent).toBeUndefined()
  })

  it('handles read errors gracefully without throwing', () => {
    vi.spyOn(PropertiesFile, 'readFile').mockImplementation(() => {
      throw new Error('Read error')
    })
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const result = getConstructorProperties(['Button'])
    expect(result).toEqual({})
    expect(consoleSpy).toHaveBeenCalled()
  })
})
