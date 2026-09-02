import { afterEach, describe, expect, it, vi } from 'vitest'
import { LibraryExport } from '../LibraryExport'
import { PropertiesFile } from '../../Properties/PropertiesFile'

class TestLibraryExport extends LibraryExport {
  public testGetPath(dir: string) {
    return this.getPath(dir)
  }

  public testIsExport(path: string | string[]) {
    return this.isExport(path)
  }

  public testGetName(name: string) {
    return this.getName(name)
  }

  public testInitStyles() {
    return this.initStyles()
  }

  public testInitFile() {
    return this.initFile()
  }
}

describe('LibraryExport', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('builds path array from directory name', () => {
    const exporter = new TestLibraryExport()
    expect(exporter.testGetPath('components')).toEqual(['src', 'components'])
  })

  it('capitalizes folder names with testGetName', () => {
    const exporter = new TestLibraryExport()
    expect(exporter.testGetName('components')).toBe('Components')
    expect(exporter.testGetName('functions')).toBe('Functions')
  })

  it('checks if file is eligible for export', () => {
    const exporter = new TestLibraryExport()
    vi.spyOn(PropertiesFile, 'joinPath').mockReturnValue('src/components/Button.ts')
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue('export const Button = {}')

    expect(exporter.testIsExport('src/components/Button.ts')).toBe(true)

    vi.spyOn(PropertiesFile, 'joinPath').mockReturnValue('src/components/Button.test.ts')
    expect(exporter.testIsExport('src/components/Button.test.ts')).toBe(false)
  })

  it('generates style imports in testInitStyles()', () => {
    const exporter = new TestLibraryExport()
    vi.spyOn(PropertiesFile, 'is').mockImplementation((path: any) => {
      return path[1] === 'style.scss'
    })

    const styles = exporter.testInitStyles()
    expect(styles).toContain('import \'./style.scss\'')
    expect(styles).not.toContain('import \'./style.css\'')
  })

  it('writes exported index file in make()', () => {
    const exporter = new LibraryExport()
    vi.spyOn(PropertiesFile, 'readDirRecursiveWithIndex').mockReturnValue([])
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
    const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

    exporter.make()
    expect(writeSpy).toHaveBeenCalledWith(
      expect.anything(),
      expect.any(String)
    )
  })
})
