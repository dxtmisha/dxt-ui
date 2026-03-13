import { describe, expect, it, vi, beforeEach } from 'vitest'
import { getPackageJson } from '../getPackageJson'
import { PropertiesFile } from '../../classes/Properties/PropertiesFile'
import { UI_FILE_PACKAGE } from '../../config'

vi.mock('../../classes/Properties/PropertiesFile', () => ({
  PropertiesFile: {
    readFile: vi.fn()
  }
}))

describe('getPackageJson', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return package.json content via PropertiesFile.readFile', () => {
    const mockContent = { name: 'test-package', version: '1.0.0' }
    vi.mocked(PropertiesFile.readFile).mockReturnValue(mockContent)

    const result = getPackageJson()

    expect(result).toEqual(mockContent)
    expect(PropertiesFile.readFile).toHaveBeenCalledWith(UI_FILE_PACKAGE)
  })

  it('should return undefined if file reading fails', () => {
    vi.mocked(PropertiesFile.readFile).mockReturnValue(undefined)

    const result = getPackageJson()

    expect(result).toBeUndefined()
  })
})
