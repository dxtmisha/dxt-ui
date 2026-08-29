import { afterEach, describe, expect, it, vi } from 'vitest'
import { BuildPublishPackages } from '../BuildPublishPackages'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { PackageFile } from '../../Package/PackageFile'
import * as runModule from '../../../functions/run'

class TestBuildPublishPackages extends BuildPublishPackages {
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

describe('BuildPublishPackages', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('loads existing publish log on constructor initialization', () => {
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({
      '@dxtmisha/core': '1.0.0'
    })

    const publisher = new TestBuildPublishPackages()
    expect(publisher.testGetVersionLog('@dxtmisha/core')).toBe('1.0.0')
    expect(publisher.testGetVersionLog('@dxtmisha/other')).toBe('0.0.0')
  })

  it('checks version consistency in isUpdate', () => {
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({
      '@dxtmisha/pkg-a': '1.0.0'
    })

    const publisher = new TestBuildPublishPackages()
    const pkgSame = new PackageFile(['packages', 'pkg-a'])
    vi.spyOn(pkgSame, 'getName').mockReturnValue('@dxtmisha/pkg-a')
    vi.spyOn(pkgSame, 'isVersionConsistency').mockImplementation(v => v === '1.0.0')

    expect(publisher.testIsUpdate(pkgSame)).toBe(false)
  })

  it('updates memory log and writes to file on saveLog', () => {
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({})
    const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => { })

    const publisher = new TestBuildPublishPackages()
    const pkg = new PackageFile(['packages', 'my-pkg'])
    vi.spyOn(pkg, 'getName').mockReturnValue('@dxtmisha/my-pkg')
    vi.spyOn(pkg, 'getVersion').mockReturnValue('3.0.0')

    publisher.testUpdateLog(pkg)
    expect(publisher.getLog()['@dxtmisha/my-pkg']).toBe('3.0.0')

    publisher.testSaveLog()
    expect(writeSpy).toHaveBeenCalledWith(['.', 'logs', 'ui-publish.log.json'], {
      '@dxtmisha/my-pkg': '3.0.0'
    })
  })

  it('scans packages and publishes unrecorded or updated packages', async () => {
    vi.spyOn(PropertiesFile, 'readDir').mockReturnValue(['pkg-1', 'pkg-no-publish'] as any)
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({})
    vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => { })
    const runSpy = vi.spyOn(runModule, 'run').mockResolvedValue(true)

    vi.spyOn(PackageFile.prototype, 'is').mockReturnValue(true)
    vi.spyOn(PackageFile.prototype, 'isNoPublish').mockImplementation(function (this: PackageFile) {
      return this.getPath().includes('pkg-no-publish')
    })
    vi.spyOn(PackageFile.prototype, 'getName').mockReturnValue('@dxtmisha/pkg-1')
    vi.spyOn(PackageFile.prototype, 'getVersion').mockReturnValue('1.1.0')
    vi.spyOn(PackageFile.prototype, 'getCodePublish').mockReturnValue('npm publish')
    vi.spyOn(PackageFile.prototype, 'isVersionConsistency').mockReturnValue(false)

    const publisher = new TestBuildPublishPackages('packages')
    await publisher.make()

    expect(publisher.getLog()['@dxtmisha/pkg-1']).toBe('1.1.0')
  })
})
