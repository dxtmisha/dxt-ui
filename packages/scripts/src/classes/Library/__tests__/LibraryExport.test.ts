import { afterEach, describe, expect, it, vi } from 'vitest'
import { LibraryExport } from '../LibraryExport'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { UI_DIRS_FILE_EXPORT, UI_DIRS_FILE_EXPORT_SUB } from '../../../config'

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

  public testIsStyle() {
    return this.isStyle()
  }

  public testIsSub() {
    return this.isSub()
  }

  public testInitStyles() {
    return this.initStyles()
  }

  public testInitFile(isSub?: boolean) {
    return this.initFile(isSub)
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

  it('respects style constructor parameter', () => {
    const defaultExporter = new TestLibraryExport()
    expect(defaultExporter.testIsStyle()).toBe(true)

    const noStyleExporter = new TestLibraryExport(false)
    expect(noStyleExporter.testIsStyle()).toBe(false)
    expect(noStyleExporter.testInitStyles()).toBe('')
  })

  it('respects sub constructor parameter', () => {
    const defaultExporter = new TestLibraryExport()
    expect(defaultExporter.testIsSub()).toBe(false)

    const subExporter = new TestLibraryExport(true, true)
    expect(subExporter.testIsSub()).toBe(true)
  })

  it('excludes components and uses parent path prefix when isSub is true in initFile()', () => {
    const exporter = new TestLibraryExport(true, true)
    vi.spyOn(PropertiesFile, 'readDirRecursiveWithIndex').mockImplementation((path: any) => {
      if (path[1] === 'components') {
        return ['Button/Button.vue']
      }
      if (path[1] === 'classes') {
        return ['MyClass.ts']
      }
      return []
    })
    vi.spyOn(PropertiesFile, 'joinPath').mockReturnValue('src/classes/MyClass.ts')
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue('export class MyClass {}')
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)

    const content = exporter.testInitFile(true)
    expect(content).toContain('export * from \'../classes/MyClass\'')
    expect(content).not.toContain('Button')
    expect(content).not.toContain('// Components')
    expect(content).not.toContain('style')
  })

  it('writes exported index file in make()', () => {
    const exporter = new LibraryExport()
    vi.spyOn(PropertiesFile, 'readDirRecursiveWithIndex').mockReturnValue([])
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
    const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

    exporter.make()
    expect(writeSpy).toHaveBeenCalledTimes(1)
    expect(writeSpy).toHaveBeenCalledWith(
      UI_DIRS_FILE_EXPORT,
      expect.any(String)
    )
  })

  it('writes both library and sub-library files when sub is true in make()', () => {
    const exporter = new LibraryExport(true, true)
    vi.spyOn(PropertiesFile, 'readDirRecursiveWithIndex').mockReturnValue([])
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
    const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

    exporter.make()
    expect(writeSpy).toHaveBeenCalledTimes(2)
    expect(writeSpy).toHaveBeenNthCalledWith(
      1,
      UI_DIRS_FILE_EXPORT,
      expect.any(String)
    )
    expect(writeSpy).toHaveBeenNthCalledWith(
      2,
      UI_DIRS_FILE_EXPORT_SUB,
      expect.any(String)
    )
  })
})
