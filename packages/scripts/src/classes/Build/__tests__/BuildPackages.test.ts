import { afterEach, describe, expect, it, vi } from 'vitest'
import { BuildPackages } from '../BuildPackages'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { PackageFile } from '../../Package/PackageFile'
import { GitIgnore } from '../../Git/GitIgnore'
import * as runModule from '../../../functions/run'

class TestBuildPackages extends BuildPackages {
  public override getDate(packageFile: PackageFile): string {
    return super.getDate(packageFile)
  }

  public testGetCode(packageFile: PackageFile) {
    return this.getCode(packageFile)
  }

  public testGetDateLog(name: string) {
    return this.getDateLog(name)
  }

  public testGetLogPath() {
    return this.getLogPath()
  }

  public testGetVersionLog(name: string) {
    return this.getVersionLog(name)
  }

  public testInitGitIgnore() {
    this.initGitIgnore()
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
      '@dxtmisha/core': '1.0.0',
      '@dxtmisha/modern': {
        version: '2.0.0',
        date: '2026-10-07 00:00:00 +0700'
      }
    })

    const builder = new TestBuildPackages()
    expect(builder.testGetVersionLog('@dxtmisha/core')).toBe('1.0.0')
    expect(builder.testGetDateLog('@dxtmisha/core')).toBeUndefined()
    expect(builder.testGetVersionLog('@dxtmisha/modern')).toBe('2.0.0')
    expect(builder.testGetDateLog('@dxtmisha/modern')).toBe('2026-10-07 00:00:00 +0700')
    expect(builder.testGetVersionLog('@dxtmisha/unknown')).toBe('0.0.0')
    expect(builder.testGetDateLog('@dxtmisha/unknown')).toBeUndefined()
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

  it('checks date comparison in isUpdate when date option is enabled', () => {
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({
      '@dxtmisha/pkg-date': {
        version: '1.0.0',
        date: '2026-10-06 12:00:00 +0700'
      }
    })

    const pkg = new PackageFile(['packages', 'pkg-date'])
    vi.spyOn(pkg, 'getName').mockReturnValue('@dxtmisha/pkg-date')
    vi.spyOn(pkg, 'isVersionConsistency').mockReturnValue(true)

    const defaultBuilder = new TestBuildPackages()
    vi.spyOn(defaultBuilder, 'getDate').mockReturnValue('2026-10-07 00:00:00 +0700')
    expect(defaultBuilder.testIsUpdate(pkg)).toBe(false)

    const dateBuilder = new TestBuildPackages({ date: true })
    const dateSpy = vi.spyOn(dateBuilder, 'getDate').mockReturnValue('2026-10-07 00:00:00 +0700')
    expect(dateBuilder.testIsUpdate(pkg)).toBe(true)

    dateSpy.mockReturnValue('2026-10-06 12:00:00 +0700')
    expect(dateBuilder.testIsUpdate(pkg)).toBe(false)
  })

  it('updates memory log and writes to file on saveLog', () => {
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({})
    const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

    const builder = new TestBuildPackages()
    const pkg = new PackageFile(['packages', 'my-pkg'])
    vi.spyOn(pkg, 'getName').mockReturnValue('@dxtmisha/my-pkg')
    vi.spyOn(pkg, 'getVersion').mockReturnValue('2.1.0')
    vi.spyOn(builder, 'getDate').mockReturnValue('2026-10-07 00:39:49 +0700')

    builder.testUpdateLog(pkg)
    expect(builder.getLog()['@dxtmisha/my-pkg']).toEqual({
      version: '2.1.0',
      date: '2026-10-07 00:39:49 +0700'
    })

    builder.testSaveLog()
    expect(writeSpy).toHaveBeenCalledWith(['.', 'logs', 'ui-build.log.json'], {
      '@dxtmisha/my-pkg': {
        version: '2.1.0',
        date: '2026-10-07 00:39:49 +0700'
      }
    })
  })

  it('scans packages, filters, sorts by ui-priority and builds packages that need updates', async () => {
    vi.spyOn(PropertiesFile, 'readDir').mockReturnValue(['pkg-2', 'pkg-1', 'pkg-test'] as any)
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({})
    vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})
    vi.spyOn(GitIgnore.prototype, 'make').mockReturnValue(true)
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

    const builder = new BuildPackages({ path: 'packages' })
    await builder.make()

    expect(runSpy).toHaveBeenCalled()
  })

  it('resolves default and custom build codes in getCode', () => {
    const pkg = new PackageFile(['packages', 'pkg-custom'])
    vi.spyOn(pkg, 'getCodeBuildOrRecovery').mockReturnValue('npm run build')
    vi.spyOn(pkg, 'getScripts').mockReturnValue({
      types: 'dxt-types',
      build: 'vite build'
    })

    const defaultBuilder = new TestBuildPackages()
    expect(defaultBuilder.testGetCode(pkg)).toBe('npm run build')

    const scriptBuilder = new TestBuildPackages({ code: 'types' })
    expect(scriptBuilder.testGetCode(pkg)).toBe('npm run types')

    const customCommandBuilder = new TestBuildPackages({ code: 'npm run build:prod' })
    expect(customCommandBuilder.testGetCode(pkg)).toBeUndefined()

    const unknownScriptBuilder = new TestBuildPackages({ code: 'custom' })
    expect(unknownScriptBuilder.testGetCode(pkg)).toBeUndefined()
  })

  it('resolves default and custom log paths in getLogPath', () => {
    const defaultBuilder = new TestBuildPackages()
    expect(defaultBuilder.testGetLogPath()).toEqual(['.', 'logs', 'ui-build.log.json'])

    const nameOnlyBuilder = new TestBuildPackages({ logFile: 'ui-types' })
    expect(nameOnlyBuilder.testGetLogPath()).toEqual(['.', 'logs', 'ui-types.log.json'])

    const jsonNameBuilder = new TestBuildPackages({ logFile: 'ui-types.log.json' })
    expect(jsonNameBuilder.testGetLogPath()).toEqual(['.', 'logs', 'ui-types.log.json'])

    const relativePathBuilder = new TestBuildPackages({ logFile: 'custom/logs/types.json' })
    expect(relativePathBuilder.testGetLogPath()).toEqual(['custom/logs/types.json'])
  })

  it('initializes gitignore with log file path', () => {
    const gitIgnoreSpy = vi.spyOn(GitIgnore.prototype, 'make').mockReturnValue(true)

    const builder = new TestBuildPackages({ logFile: 'ui-types' })
    builder.testInitGitIgnore()

    expect(gitIgnoreSpy).toHaveBeenCalled()
  })

  it('executes custom build command during make when code is specified', async () => {
    vi.spyOn(PropertiesFile, 'readDir').mockReturnValue(['pkg-1'] as any)
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({})
    vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})
    vi.spyOn(GitIgnore.prototype, 'make').mockReturnValue(true)
    const runSpy = vi.spyOn(runModule, 'run').mockResolvedValue(true)

    vi.spyOn(PackageFile.prototype, 'is').mockReturnValue(true)
    vi.spyOn(PackageFile.prototype, 'isTest').mockReturnValue(false)
    vi.spyOn(PackageFile.prototype, 'getName').mockReturnValue('@dxtmisha/pkg-1')
    vi.spyOn(PackageFile.prototype, 'getVersion').mockReturnValue('1.0.0')
    vi.spyOn(PackageFile.prototype, 'isVersionConsistency').mockReturnValue(false)
    vi.spyOn(PackageFile.prototype, 'getScripts').mockReturnValue({ types: 'dxt-types' })

    const builder = new BuildPackages({ path: 'packages', code: 'types', logFile: 'ui-types' })
    await builder.make()

    expect(runSpy).toHaveBeenCalledWith(expect.any(PackageFile), 'npm run types')
  })
})
