import { afterEach, describe, expect, it, vi } from 'vitest'
import { BuildPublishPackages } from '../BuildPublishPackages'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { PackageFile } from '../../Package/PackageFile'
import * as runModule from '../../../functions/run'

class TestBuildPublishPackages extends BuildPublishPackages {
  public testIsUpdate(packageFile: PackageFile) {
    return this.isUpdate(packageFile)
  }

  public testGetNpmVersion(name: string) {
    return this.getNpmVersion(name)
  }
}

describe('BuildPublishPackages', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('checks version consistency in isUpdate when package is published', async () => {
    const publisher = new TestBuildPublishPackages()
    vi.spyOn(publisher as any, 'getNpmVersion').mockResolvedValue('1.0.0')

    const pkgSame = new PackageFile(['packages', 'pkg-a'])
    vi.spyOn(pkgSame, 'getName').mockReturnValue('@dxtmisha/pkg-a')
    vi.spyOn(pkgSame, 'isVersionConsistency').mockImplementation(v => v === '1.0.0')

    expect(await publisher.testIsUpdate(pkgSame)).toBe(false)
  })

  it('flags package for update in isUpdate when version differs', async () => {
    const publisher = new TestBuildPublishPackages()
    vi.spyOn(publisher as any, 'getNpmVersion').mockResolvedValue('1.0.0')

    const pkgDiff = new PackageFile(['packages', 'pkg-b'])
    vi.spyOn(pkgDiff, 'getName').mockReturnValue('@dxtmisha/pkg-b')
    vi.spyOn(pkgDiff, 'isVersionConsistency').mockReturnValue(false)

    expect(await publisher.testIsUpdate(pkgDiff)).toBe(true)
  })

  it('flags package for update in isUpdate when package is not published on npm', async () => {
    const publisher = new TestBuildPublishPackages()
    vi.spyOn(publisher as any, 'getNpmVersion').mockResolvedValue(undefined)

    const pkgNew = new PackageFile(['packages', 'pkg-new'])
    vi.spyOn(pkgNew, 'getName').mockReturnValue('@dxtmisha/pkg-new')

    expect(await publisher.testIsUpdate(pkgNew)).toBe(true)
  })

  it('scans packages and publishes unrecorded or updated packages', async () => {
    vi.spyOn(PropertiesFile, 'readDir').mockReturnValue(['pkg-1', 'pkg-no-publish'] as any)
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
    vi.spyOn(publisher as any, 'getNpmVersion').mockResolvedValue('1.0.0')

    await publisher.make()

    expect(runSpy).toHaveBeenCalledTimes(1)
  })
})
