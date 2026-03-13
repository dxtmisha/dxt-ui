import { describe, expect, it, vi, beforeEach } from 'vitest'
import { getNameDirByPaths } from '../getNameDirByPaths'
import { PropertiesFile } from '../../classes/Properties/PropertiesFile'

vi.mock('../../classes/Properties/PropertiesFile', () => ({
  PropertiesFile: {
    splitForDir: vi.fn(),
    joinPath: vi.fn()
  }
}))

describe('getNameDirByPaths', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return the last directory name from provided paths', () => {
    const mockPaths = ['src', 'components', 'button']
    const mockJoinedPath = 'src/components/button'
    const mockSplitDirs = ['src', 'components', 'button']

    vi.mocked(PropertiesFile.joinPath).mockReturnValue(mockJoinedPath)
    vi.mocked(PropertiesFile.splitForDir).mockReturnValue(mockSplitDirs)

    const result = getNameDirByPaths(mockPaths)

    expect(result).toBe('button')
    expect(PropertiesFile.joinPath).toHaveBeenCalledWith(mockPaths)
    expect(PropertiesFile.splitForDir).toHaveBeenCalledWith(mockJoinedPath)
  })

  it('should work with a single path segment', () => {
    const mockPaths = ['root']
    vi.mocked(PropertiesFile.joinPath).mockReturnValue('root')
    vi.mocked(PropertiesFile.splitForDir).mockReturnValue(['root'])

    const result = getNameDirByPaths(mockPaths)
    expect(result).toBe('root')
  })
})
