import { afterEach, describe, expect, it, vi } from 'vitest'
import { getPackageJson } from '../getPackageJson'
import { PropertiesFile } from '../../classes/Properties/PropertiesFile'
import { UI_FILE_PACKAGE } from '../../config'

describe('getPackageJson', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('reads package.json from default root file when no path is provided', () => {
    const mockPackage = { name: '@dxtmisha/scripts', version: '1.0.0' }
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue(mockPackage as any)

    const result = getPackageJson()
    expect(result).toEqual(mockPackage)
    expect(PropertiesFile.readFile).toHaveBeenCalledWith(UI_FILE_PACKAGE)
  })

  it('reads package.json from directory path', () => {
    const mockPackage = { name: '@dxtmisha/core' }
    vi.spyOn(PropertiesFile, 'isDir').mockReturnValue(true)
    vi.spyOn(PropertiesFile, 'getPathFile').mockReturnValue(['packages', 'core', 'package.json'] as any)
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue(mockPackage as any)

    const result = getPackageJson(['packages', 'core'])
    expect(result).toEqual(mockPackage)
  })

  it('reads package.json directly when path points to a file', () => {
    const mockPackage = { name: '@dxtmisha/ui' }
    vi.spyOn(PropertiesFile, 'isDir').mockReturnValue(false)
    vi.spyOn(PropertiesFile, 'readFile').mockReturnValue(mockPackage as any)

    const result = getPackageJson('packages/ui/package.json')
    expect(result).toEqual(mockPackage)
    expect(PropertiesFile.readFile).toHaveBeenCalledWith('packages/ui/package.json')
  })
})
