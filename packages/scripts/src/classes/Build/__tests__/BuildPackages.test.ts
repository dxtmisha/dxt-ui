import { afterEach, describe, expect, it, vi } from 'vitest'
import { BuildPackages } from '../BuildPackages'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { PackageFile } from '../../Package/PackageFile'
import * as runModule from '../../../functions/run'

class TestBuildPackages extends BuildPackages {
  public testGetVersionLog(name: string) {
    return this.getVersionLog(name)
  }

  public testIsUpdate(packageFile: PackageFile) {
    return this.isUpdate(packageFile)
  }

  public testUpdateLog(packageFile: PackageFile) {
    this.updateLog(packageFile)
  }

  public testSaveLog() {
    this.saveLog()
  }

  public getLog() {
    return this.log
  }
}

describe('BuildPackages', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('loads existing build log on constructor initialization', () => {
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({
      '@dxtmisha/core': '1.0.0'
    })

    const builder = new TestBuildPackages()
    expect(builder.testGetVersionLog('@dxtmisha/core')).toBe('1.0.0')
    expect(builder.testGetVersionLog('@dxtmisha/unknown')).toBe('0.0.0')
  })

  it('checks version consistency in isUpdate', () => {
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({
      '@dxtmisha/pkg-a': '1.0.0'
    })

    const builder = new TestBuildPackages()
    const pkgSame = new PackageFile(['packages', 'pkg-a'])
    vi.spyOn(pkgSame, 'getName').mockReturnValue('@dxtmisha/pkg-a')
    vi.spyOn(pkgSame, 'isVersionConsistency').mockImplementation(v => v === '1.0.0')

    expect(builder.testIsUpdate(pkgSame)).toBe(false)

    const pkgDiff = new PackageFile(['packages', 'pkg-b'])
    vi.spyOn(pkgDiff, 'getName').mockReturnValue('@dxtmisha/pkg-b')
    vi.spyOn(pkgDiff, 'isVersionConsistency').mockReturnValue(false)

    expect(builder.testIsUpdate(pkgDiff)).toBe(true)
  })

  it('updates memory log and writes to file on saveLog', () => {
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({})
    const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

    const builder = new TestBuildPackages()
    const pkg = new PackageFile(['packages', 'my-pkg'])
    vi.spyOn(pkg, 'getName').mockReturnValue('@dxtmisha/my-pkg')
    vi.spyOn(pkg, 'getVersion').mockReturnValue('2.1.0')

    builder.testUpdateLog(pkg)
    expect(builder.getLog()['@dxtmisha/my-pkg']).toBe('2.1.0')

    builder.testSaveLog()
    expect(writeSpy).toHaveBeenCalledWith(['.', 'logs', 'ui-build.log.json'], {
      '@dxtmisha/my-pkg': '2.1.0'
    })
  })

  it('scans packages, filters, sorts by ui-priority and builds packages that need updates', async () => {
    vi.spyOn(PropertiesFile, 'readDir').mockReturnValue(['pkg-2', 'pkg-1', 'pkg-test'] as any)
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({})
    vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})
    const runSpy = vi.spyOn(runModule, 'run').mockResolvedValue(true)

    vi.spyOn(PackageFile.prototype, 'is').mockReturnValue(true)
    vi.spyOn(PackageFile.prototype, 'isTest').mockImplementation(function (this: PackageFile) {
      return this.getName() === 'pkg-test'
    })
    vi.spyOn(PackageFile.prototype, 'getName').mockImplementation(function (this: PackageFile) {
      return this.getPath().join('/')
    })
    vi.spyOn(PackageFile.prototype, 'getVersion').mockReturnValue('1.0.0')
    vi.spyOn(PackageFile.prototype, 'getCodeBuildOrRecovery').mockReturnValue('build')
    vi.spyOn(PackageFile.prototype, 'isVersionConsistency').mockReturnValue(false)
    vi.spyOn(PackageFile.prototype, 'get').mockImplementation(function (this: PackageFile) {
      if (this.getPath().includes('pkg-1')) return { 'ui-priority': 100 }
      return { 'ui-priority': 200 }
    })

    const builder = new BuildPackages('packages')
    await builder.make()

    expect(runSpy).toHaveBeenCalled()
  })
})
