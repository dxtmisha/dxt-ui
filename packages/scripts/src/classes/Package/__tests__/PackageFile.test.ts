import { afterEach, describe, expect, it, vi } from 'vitest'
import { PackageFile } from '../PackageFile'
import { PropertiesFile } from '../../Properties/PropertiesFile'

describe('PackageFile', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('checks file existence and reads package.json', () => {
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({
      name: '@dxtmisha/core',
      version: '1.2.3',
      scripts: { build: 'vite build' }
    })

    const pkg = new PackageFile(['packages', 'core'])
    expect(pkg.is()).toBe(true)
    expect(pkg.getName()).toBe('@dxtmisha/core')
    expect(pkg.getVersion()).toBe('1.2.3')
    expect(pkg.getScripts()).toEqual({ build: 'vite build' })
  })

  it('verifies version consistency', () => {
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({
      name: 'pkg',
      version: '2.0.0'
    })

    const pkg = new PackageFile('packages/pkg')
    expect(pkg.isVersionConsistency('2.0.0')).toBe(true)
    expect(pkg.isVersionConsistency('1.0.0')).toBe(false)
    expect(pkg.isVersionConsistency(undefined)).toBe(false)
  })

  it('checks ui-test and ui-no-publish / private flags', () => {
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({
      name: 'test-pkg',
      'ui-test': true,
      'ui-no-publish': true
    })

    const pkg = new PackageFile(['packages', 'test-pkg'])
    expect(pkg.isTest()).toBe(true)
    expect(pkg.isNoPublish()).toBe(true)
  })

  it('resolves build and recovery command names', () => {
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)

    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({
      scripts: { prepublishOnly: 'npm run build' }
    })
    const pkg1 = new PackageFile('pkg1')
    expect(pkg1.getCodeBuildOrRecovery()).toBe('prepublishOnly')

    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({
      scripts: { 'build-recovery': 'npm run build' }
    })
    const pkg2 = new PackageFile('pkg2')
    expect(pkg2.getCodeBuildOrRecovery()).toBe('build-recovery')

    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({
      scripts: { build: 'vite build' }
    })
    const pkg3 = new PackageFile('pkg3')
    expect(pkg3.getCodeBuildOrRecovery()).toBe('build')

    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({
      scripts: {}
    })
    const pkg4 = new PackageFile('pkg4')
    expect(pkg4.getCodeBuildOrRecovery()).toBeUndefined()
  })

  it('resolves publish commands', () => {
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)

    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({
      scripts: { 'publish-to-npm': 'custom-publish' }
    })
    const pkgCustom = new PackageFile('pkgCustom')
    expect(pkgCustom.getCodePublish()).toBe('npm run publish-to-npm')

    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue({
      scripts: {}
    })
    const pkgDefault = new PackageFile('pkgDefault')
    expect(pkgDefault.getCodePublish()).toBe('npm publish --access public')
  })
})
