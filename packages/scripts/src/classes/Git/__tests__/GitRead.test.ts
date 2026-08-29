import { afterEach, describe, expect, it, vi } from 'vitest'
import { GitRead } from '../GitRead'
import { PropertiesFile } from '../../Properties/PropertiesFile'

describe('GitRead', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('splits path into non-empty segments with splitPath()', () => {
    expect(GitRead.splitPath('src/classes/Git/GitRead.ts')).toEqual([
      'src',
      'classes',
      'Git',
      'GitRead.ts'
    ])
    expect(GitRead.splitPath('/a//b/c/')).toEqual(['a', 'b', 'c'])
  })

  it('merges two lists and preserves uniqueness by pathFull', () => {
    const listA = [
      { path: 'a.ts', pathFull: 'packages/a.ts' },
      { path: 'b.ts', pathFull: 'packages/b.ts' }
    ] as any
    const listB = [
      { path: 'b.ts', pathFull: 'packages/b.ts' },
      { path: 'c.ts', pathFull: 'packages/c.ts' }
    ] as any

    const merged = GitRead.mergeUnique(listA, listB)
    expect(merged).toHaveLength(3)
    expect(merged.map(i => i.pathFull)).toEqual([
      'packages/a.ts',
      'packages/b.ts',
      'packages/c.ts'
    ])
  })

  it('formats dates with getDate()', () => {
    const formatted = GitRead.getDate('2026-08-29 07:00:00 +0700')
    expect(typeof formatted).toBe('string')
    expect(formatted.length).toBeGreaterThan(0)
  })

  it('filters git files by directory prefix with filterByDirectory()', () => {
    vi.spyOn(GitRead as any, 'exec').mockImplementation((cmd: string) => {
      if (cmd.includes('rev-parse')) return 'packages/scripts/'
      return ''
    })

    const list = [
      { pathFull: 'packages/scripts/src/a.ts' },
      { pathFull: 'packages/mcp/src/b.ts' }
    ] as any

    const filtered = GitRead.filterByDirectory(list)
    expect(filtered).toHaveLength(1)
    expect(filtered[0].pathFull).toBe('packages/scripts/src/a.ts')
  })

  it('retrieves file paths using git ls-tree', () => {
    vi.spyOn(GitRead as any, 'exec').mockReturnValue('src/index.ts\nsrc/classes/GitRead.ts')

    const files = GitRead.getFilesPath()
    expect(files).toEqual(['src/index.ts', 'src/classes/GitRead.ts'])
  })

  it('retrieves porcelain file status lines', () => {
    vi.spyOn(GitRead as any, 'exec').mockReturnValue(' M src/index.ts\n?? src/new.ts')

    const files = GitRead.getFilesPorcelain()
    expect(files).toEqual(['M src/index.ts', '?? src/new.ts'])
  })

  it('retrieves and parses porcelain list with getListPorcelain()', () => {
    vi.spyOn(GitRead as any, 'exec').mockImplementation((cmd: string) => {
      if (cmd.includes('rev-parse')) return ''
      if (cmd.includes('status')) return 'M  packages/scripts/src/file.ts'
      return ''
    })
    vi.spyOn(PropertiesFile, 'getTime').mockReturnValue('2026-08-29 07:00:00')

    const list = GitRead.getListPorcelain()
    expect(list).toHaveLength(1)
    expect(list[0].status).toBe('M')
    expect(list[0].path).toBe('packages/scripts/src/file.ts')
  })
})
