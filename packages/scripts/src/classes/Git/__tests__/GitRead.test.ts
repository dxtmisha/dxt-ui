import { describe, expect, it, vi, beforeEach } from 'vitest'
import { GitRead } from '../GitRead'
import { execSync } from 'node:child_process'
import { PropertiesFile } from '../../Properties/PropertiesFile'

vi.mock('node:child_process', () => ({
  execSync: vi.fn()
}))

vi.mock('../../Properties/PropertiesFile', () => ({
  PropertiesFile: {
    getTime: vi.fn()
  }
}))

describe('GitRead', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('getDirPrefix should return the result of git rev-parse', () => {
    vi.mocked(execSync).mockReturnValue('packages/scripts/' as any)
    const result = GitRead.getDirPrefix()
    expect(execSync).toHaveBeenCalledWith('git rev-parse --show-prefix', expect.anything())
    expect(result).toBe('packages/scripts/')
  })

  it('getFilesPath should return list of HEAD files', () => {
    vi.mocked(execSync).mockReturnValue('file1.ts\nfile2.ts\n' as any)
    const result = GitRead.getFilesPath()
    expect(result).toEqual(['file1.ts', 'file2.ts'])
  })

  it('getList should return files with metadata', () => {
    vi.mocked(execSync).mockImplementation((cmd: string) => {
      if (cmd.startsWith('git rev-parse')) return 'prefix/' as any
      if (cmd.startsWith('git ls-tree')) return 'file.ts\n' as any
      if (cmd.startsWith('git log')) return '2023-10-27 12:00:00 +0300' as any
      return '' as any
    })

    const result = GitRead.getList()
    expect(result[0]).toMatchObject({
      path: 'file.ts',
      pathFull: 'prefix/file.ts',
      date: expect.stringContaining('2023-10-27')
    })
  })

  it('getListPorcelain should parse git status and metadata', () => {
    vi.mocked(execSync).mockImplementation((cmd: string) => {
      if (cmd.startsWith('git rev-parse')) return 'prefix/' as any
      if (cmd.startsWith('git status')) return 'M  file.ts\nA  new.ts\n' as any
      return '' as any
    })
    vi.mocked(PropertiesFile.getTime).mockReturnValue('2023-10-27 12:00:00' as any)

    const result = GitRead.getListPorcelain()
    expect(result).toHaveLength(2)
    expect(result[0]).toMatchObject({
      path: 'file.ts',
      status: 'M'
    })
  })

  it('splitPath should correctly split string', () => {
    expect(GitRead.splitPath('a/b/c')).toEqual(['a', 'b', 'c'])
    expect(GitRead.splitPath('/a/b/')).toEqual(['a', 'b'])
  })
})
