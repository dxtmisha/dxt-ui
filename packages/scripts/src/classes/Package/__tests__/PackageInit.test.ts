import { afterEach, describe, expect, it, vi } from 'vitest'
import { PackageInit } from '../PackageInit'
import { PackageInitItem } from '../PackageItem'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'

class TestPackageInitItem extends PackageInitItem {
  public testGetCode() {
    return this.getCode()
  }

  public testGetFileName(filePath: string) {
    return this.getFileName(filePath)
  }

  public testGetName() {
    return this.getName()
  }

  public testGetProjectName() {
    return this.getProjectName()
  }

  public testGetSample() {
    return this.getSample()
  }

  public testWriteFile(path: string, content: string) {
    this.writeFile(path, content)
  }
}

class TestPackageInit extends PackageInit {
  public testGetDirs() {
    return this.getDirs()
  }
}

describe('PackageInit and PackageInitItem', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('PackageInitItem', () => {
    it('normalizes names and codes', () => {
      const item = new TestPackageInitItem('my-package', ['packages', 'my-package'], 'ui')
      expect(item.testGetName()).toBe('my-package')
      expect(item.testGetCode()).toBe('my-package')
      expect(item.testGetFileName('src/_.gitignore.txt')).toBe('src/.gitignore')
    })

    it('resolves project name using package prefix', () => {
      vi.spyOn(PropertiesConfig, 'getPackagePrefix').mockReturnValue('@dxtmisha')
      const item = new TestPackageInitItem('utils', ['packages', 'utils'], 'ui')
      expect(item.testGetProjectName()).toBe('@dxtmisha/utils')
    })

    it('writes files with content substitution and chmod', () => {
      vi.spyOn(PropertiesConfig, 'getPackagePrefix').mockReturnValue('@dxtmisha')
      const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})
      const chmodSpy = vi.spyOn(PropertiesFile, 'chmod').mockImplementation(() => {})

      const item = new TestPackageInitItem('widget', ['packages', 'widget'], 'ui')
      item.testWriteFile('packages/widget/src/index.ts', 'export * from \'@packages/library\'; name: [name]')

      expect(writeSpy).toHaveBeenCalledWith(
        'packages/widget/src/index.ts',
        'export * from \'@dxtmisha/widget\'; name: widget'
      )
      expect(chmodSpy).toHaveBeenCalledWith('packages/widget/src/index.ts')
    })

    it('initializes package files on make()', () => {
      vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})
      vi.spyOn(PropertiesFile, 'chmod').mockImplementation(() => {})
      vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)

      const item = new PackageInitItem('core', ['packages', 'core'], 'ui')
      item.make()
    })
  })

  describe('PackageInit', () => {
    it('discovers empty package directories and invokes PackageInitItem', () => {
      vi.spyOn(PropertiesFile, 'readDir').mockImplementation((path: any) => {
        if (Array.isArray(path)) return [] // subdirs are empty
        return ['empty-pkg']
      })
      const makeSpy = vi.spyOn(PackageInitItem.prototype, 'make').mockImplementation(() => {})

      const init = new PackageInit('ui')
      init.make()

      expect(makeSpy).toHaveBeenCalled()
    })
  })
})
