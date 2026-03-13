import { describe, expect, it, vi, beforeEach } from 'vitest'
import { getConstructorProperties } from '../getConstructorProperties'
import { PropertiesFile } from '../../classes/Properties/PropertiesFile'
import { hasNativeDirname } from '../hasNativeDirname'

vi.mock('../../classes/Properties/PropertiesFile', () => ({
  PropertiesFile: {
    readFile: vi.fn()
  }
}))

vi.mock('../hasNativeDirname', () => ({
  hasNativeDirname: vi.fn()
}))

describe('getConstructorProperties', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return properties for given constructor names', () => {
    const mockItem = { some: 'property' }
    vi.mocked(hasNativeDirname).mockReturnValue(true)
    vi.mocked(PropertiesFile.readFile).mockReturnValue(mockItem)

    const result = getConstructorProperties(['Button', 'Input'])

    expect(result).toEqual({
      Button: mockItem,
      Input: mockItem
    })
    expect(PropertiesFile.readFile).toHaveBeenCalledTimes(2)
  })

  it('should return an empty object if no constructors found or error occurs', () => {
    vi.mocked(hasNativeDirname).mockReturnValue(true)
    vi.mocked(PropertiesFile.readFile).mockReturnValue(undefined)

    const result = getConstructorProperties(['NonExistent'])

    expect(result).toEqual({})
  })

  it('should handles non-native dirname environment', () => {
    vi.mocked(hasNativeDirname).mockReturnValue(false)
    vi.mocked(PropertiesFile.readFile).mockReturnValue({ status: 'ok' })

    const result = getConstructorProperties(['Button'])
    expect(result).toEqual({ Button: { status: 'ok' } })
  })
})
