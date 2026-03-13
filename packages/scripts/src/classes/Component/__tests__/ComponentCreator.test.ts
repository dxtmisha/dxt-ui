import { describe, expect, it, vi, beforeEach } from 'vitest'
import { ComponentCreator } from '../ComponentCreator'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { ComponentItem } from '../ComponentItem'
import { getComponentPaths } from '../../../functions/getComponentPaths'
import { UI_DIRS_COMPONENTS } from '../../../config'

vi.mock('../../Properties/PropertiesFile', () => ({
  PropertiesFile: {
    readDirOnlyRecursive: vi.fn(),
    readDir: vi.fn()
  }
}))

vi.mock('../ComponentItem', () => ({
  ComponentItem: vi.fn().mockImplementation(function () {
    return {
      make: vi.fn()
    }
  })
}))

vi.mock('../../../functions/getComponentPaths', () => ({
  getComponentPaths: vi.fn(path => [path, 'full'])
}))

describe('ComponentCreator', () => {
  let creator: ComponentCreator

  beforeEach(() => {
    vi.clearAllMocks()
    creator = new ComponentCreator()
  })

  it('make should call ComponentItem.make for each empty directory', () => {
    vi.mocked(PropertiesFile.readDirOnlyRecursive).mockReturnValue(['dir1', 'dir2', 'dir3'])
    vi.mocked(PropertiesFile.readDir).mockImplementation((path) => {
      if (Array.isArray(path) && path[0] === 'dir2') return ['file.ts']
      return []
    })

    creator.make()

    expect(ComponentItem).toHaveBeenCalledWith('dir1')
    expect(ComponentItem).not.toHaveBeenCalledWith('dir2')
    expect(ComponentItem).toHaveBeenCalledWith('dir3')

    const mockInstance1 = vi.mocked(ComponentItem).mock.results[0]?.value
    const mockInstance2 = vi.mocked(ComponentItem).mock.results[1]?.value

    expect(mockInstance1?.make).toHaveBeenCalled()
    expect(mockInstance2?.make).toHaveBeenCalled()
  })

  it('getDirs should return only empty directories', () => {
    vi.mocked(PropertiesFile.readDirOnlyRecursive).mockReturnValue(['empty', 'not-empty'])
    vi.mocked(PropertiesFile.readDir).mockImplementation((path) => {
      if (Array.isArray(path) && path[0] === 'not-empty') return ['index.ts']
      return []
    })

    // Access protected method for testing
    const dirs = (creator as any).getDirs()

    expect(dirs).toContain('empty')
    expect(dirs).not.toContain('not-empty')
    expect(dirs).toHaveLength(1)
    expect(PropertiesFile.readDirOnlyRecursive).toHaveBeenCalledWith(UI_DIRS_COMPONENTS)
    expect(getComponentPaths).toHaveBeenCalledWith('empty')
  })
})
