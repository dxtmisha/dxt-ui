import { afterEach, describe, expect, it, vi } from 'vitest'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { DesignTypesBuild } from '../DesignTypesBuild'
import { DesignTypesBuildAbstract } from '../DesignTypesBuildAbstract'

class TestDesignTypesBuild extends DesignTypesBuild {
  public testIsAllowed(file: string) {
    return this.isAllowed(file)
  }

  public testIsAllowedDeclaration(file: string) {
    return this.isAllowedDeclaration(file)
  }

  public testIsExclude(file: string) {
    return this.isExclude(file)
  }

  public testIsFileDts(file: string) {
    return this.isFileDts(file)
  }

  public testIsFileTest(file: string) {
    return this.isFileTest(file)
  }

  public testIsFileTs(file: string) {
    return this.isFileTs(file)
  }

  public testIsMatch(file: string) {
    return this.isMatch(file)
  }

  public testIsPath(file: string) {
    return this.isPath(file)
  }

  public testIsPattern(file: string, pattern?: string | string[]) {
    return this.isPattern(file, pattern)
  }

  public testGetTemporaryDirectory() {
    return this.getTemporaryDirectory()
  }

  public testGetTsConfigName() {
    return this.getTsConfigName()
  }

  public testGetTsSourceFiles() {
    return this.getTsSourceFiles()
  }

  public testGetTsConfiguration() {
    return this.getTsConfiguration()
  }

  public testBuildTs() {
    return this.buildTs()
  }

  public testBuildVue() {
    return this.buildVue()
  }

  public testCleanExcess() {
    return this.cleanExcess()
  }
}

describe('DesignTypesBuild', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const build = new TestDesignTypesBuild('ai-types-temp')

  it('extends DesignTypesBuildAbstract', () => {
    expect(build).toBeInstanceOf(DesignTypesBuildAbstract)
  })

  it('identifies TypeScript source files correctly', () => {
    expect(build.testIsFileTs('src/index.ts')).toBe(true)
    expect(build.testIsFileTs('src/Button.tsx')).toBe(true)
    expect(build.testIsFileTs('src/legacy.js')).toBe(true)
    expect(build.testIsFileTs('src/Button.vue')).toBe(true)
    expect(build.testIsFileTs('src/index.d.ts')).toBe(false)
    expect(build.testIsFileTs('src/__tests__/Button.test.ts')).toBe(false)
    expect(build.testIsFileTs('src/Button.test.ts')).toBe(false)
    expect(build.testIsFileTs('src/Button.spec.ts')).toBe(false)
    expect(build.testIsFileTs('src/Button.stories.ts')).toBe(false)
    expect(build.testIsFileTs('src/Button.stories.tsx')).toBe(false)
    expect(build.testIsFileTs('src/Button.stories.vue')).toBe(false)
  })

  it('identifies declaration and test files correctly with isFileDts and isFileTest', () => {
    expect(build.testIsFileDts('src/index.d.ts')).toBe(true)
    expect(build.testIsFileDts('src/index.ts')).toBe(false)

    expect(build.testIsFileTest('src/__tests__/Button.test.ts')).toBe(true)
    expect(build.testIsFileTest('src/Button.test.ts')).toBe(true)
    expect(build.testIsFileTest('src/Button.spec.ts')).toBe(true)
    expect(build.testIsFileTest('src/Button.stories.ts')).toBe(true)
    expect(build.testIsFileTest('src/Button.stories.d.ts')).toBe(true)
    expect(build.testIsFileTest('src/Button.ts')).toBe(false)
  })

  it('checks if project contains Vue files', () => {
    expect(typeof build.isVue()).toBe('boolean')

    vi.spyOn(PropertiesConfig, 'isTypesWithoutVue').mockReturnValue(true)
    expect(build.isVue()).toBe(false)

    vi.spyOn(PropertiesConfig, 'isTypesWithoutVue').mockReturnValue(false)
    vi.spyOn(PropertiesConfig, 'getTypesPaths').mockReturnValue(['src'])
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
    vi.spyOn(PropertiesFile, 'readDirRecursive').mockReturnValue(['Button.vue', 'index.ts'])
    vi.spyOn(PropertiesFile, 'joinPath').mockImplementation((p: any) => Array.isArray(p) ? p.join('/') : String(p))

    expect(build.isVue()).toBe(true)

    vi.spyOn(PropertiesFile, 'readDirRecursive').mockReturnValue(['index.ts', 'Button.d.ts'])
    expect(build.isVue()).toBe(false)
  })

  it('checks if temporary directory exists via is()', () => {
    const isSpy = vi.spyOn(PropertiesFile, 'is')
    isSpy.mockReturnValueOnce(true)
    expect(build.is()).toBe(true)

    isSpy.mockReturnValueOnce(false)
    expect(build.is()).toBe(false)
  })

  it('resolves temporary directory correctly', () => {
    expect(build.testGetTemporaryDirectory()).toBe('ai-types-temp')
    const defaultBuild = new TestDesignTypesBuild()
    expect(defaultBuild.testGetTemporaryDirectory()).toBe('ai-types-temp')
  })

  it('executes clean() and removes temporary directory if it exists', () => {
    const isSpy = vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
    const removeDirSpy = vi.spyOn(PropertiesFile, 'removeDir').mockImplementation(() => {})

    const result = build.clean()
    expect(result).toBe(build)
    expect(isSpy).toHaveBeenCalledWith('ai-types-temp')
    expect(removeDirSpy).toHaveBeenCalledWith('ai-types-temp')

    isSpy.mockReturnValue(false)
    removeDirSpy.mockClear()
    build.clean()
    expect(removeDirSpy).not.toHaveBeenCalled()
  })

  it('executes build() by calling clean() and branching by isVue()', () => {
    const cleanSpy = vi.spyOn(build, 'clean').mockReturnValue(build)
    const isVueSpy = vi.spyOn(build, 'isVue')
    const buildVueSpy = vi.spyOn(build as any, 'buildVue').mockReturnValue(build)
    const buildTsSpy = vi.spyOn(build as any, 'buildTs').mockReturnValue(build)

    // Vue project branch
    isVueSpy.mockReturnValue(true)
    const resultVue = build.build()
    expect(resultVue).toBe(build)
    expect(cleanSpy).toHaveBeenCalledTimes(1)
    expect(buildVueSpy).toHaveBeenCalledTimes(1)
    expect(buildTsSpy).not.toHaveBeenCalled()

    cleanSpy.mockClear()
    buildVueSpy.mockClear()
    buildTsSpy.mockClear()

    // Non-Vue TypeScript project branch
    isVueSpy.mockReturnValue(false)
    const resultTs = build.build()
    expect(resultTs).toBe(build)
    expect(cleanSpy).toHaveBeenCalledTimes(1)
    expect(buildTsSpy).toHaveBeenCalledTimes(1)
    expect(buildVueSpy).not.toHaveBeenCalled()
  })

  it('resolves TypeScript config name with fallback hierarchy', () => {
    const isSpy = vi.spyOn(PropertiesFile, 'is')

    isSpy.mockImplementation((file: any) => file === 'tsconfig.app.json')
    expect(build.testGetTsConfigName()).toBe('tsconfig.app.json')

    isSpy.mockImplementation((file: any) => file === 'tsconfig.json')
    expect(build.testGetTsConfigName()).toBe('tsconfig.json')

    isSpy.mockReturnValue(false)
    expect(build.testGetTsConfigName()).toBeUndefined()
  })

  it('handles match, exclusion, and path filters correctly', () => {
    expect(build.testIsMatch('src/Button.ts')).toBe(true)
    expect(build.testIsExclude('src/Button.ts')).toBe(false)
    expect(build.testIsPath('src/Button.ts')).toBe(true)
    expect(build.testIsAllowed('src/Button.ts')).toBe(true)
    expect(build.testIsAllowed('src/Button.d.ts')).toBe(false)

    vi.spyOn(PropertiesConfig, 'getTypesMatch').mockReturnValue('Button')
    expect(build.testIsMatch('src/Button.ts')).toBe(true)
    expect(build.testIsMatch('src/Input.ts')).toBe(false)

    vi.spyOn(PropertiesConfig, 'getTypesExclude').mockReturnValue(['legacy'])
    expect(build.testIsExclude('src/legacy.ts')).toBe(true)
    expect(build.testIsExclude('src/Button.ts')).toBe(false)

    vi.spyOn(PropertiesConfig, 'getTypesPaths').mockReturnValue(['src/components'])
    expect(build.testIsPath('src/components/Button.ts')).toBe(true)
    expect(build.testIsPath('src/media/icon.ts')).toBe(false)
  })

  it('handles pattern matching and invalid regex fallback', () => {
    expect(build.testIsPattern('src/Button.ts')).toBe(false)
    expect(build.testIsPattern('src/Button.ts', 'Button')).toBe(true)
    expect(build.testIsPattern('src/Button.ts', ['[0-9]+', 'Button'])).toBe(true)
    expect(build.testIsPattern('src/Button.ts', '[0-9]+')).toBe(false)
    // Invalid regex fallback to substring search
    expect(build.testIsPattern('src/[invalid/file.ts', '[invalid')).toBe(true)
  })

  it('handles buildVue falling back to buildTs when tsconfig is absent', () => {
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
    const buildTsSpy = vi.spyOn(build as any, 'buildTs').mockReturnValue(build)

    const result = build.testBuildVue()
    expect(result).toBe(build)
    expect(buildTsSpy).toHaveBeenCalled()
  })

  it('identifies allowed declaration files correctly with isAllowedDeclaration', () => {
    expect(build.testIsAllowedDeclaration('components/Ui/Button/props.d.ts')).toBe(true)
    expect(build.testIsAllowedDeclaration('library/D1Button.d.ts')).toBe(true)

    // Unwanted files
    expect(build.testIsAllowedDeclaration('main.d.ts')).toBe(false)
    expect(build.testIsAllowedDeclaration('src/main.d.ts')).toBe(false)
    expect(build.testIsAllowedDeclaration('App.d.ts')).toBe(false)
    expect(build.testIsAllowedDeclaration('src/App.d.ts')).toBe(false)
    expect(build.testIsAllowedDeclaration('components/Ui/Button/__tests__/Button.test.d.ts')).toBe(false)
    expect(build.testIsAllowedDeclaration('components/Ui/Button/Button.stories.d.ts')).toBe(false)
    expect(build.testIsAllowedDeclaration('components/Ui/Button/style.css')).toBe(false)
    expect(build.testIsAllowedDeclaration('components/Ui/Button/index.ts')).toBe(false)

    vi.spyOn(PropertiesConfig, 'getTypesExclude').mockReturnValue(['legacy'])
    expect(build.testIsAllowedDeclaration('components/legacy/props.d.ts')).toBe(false)
  })

  it('cleans excess declaration files in temporary directory with cleanExcess', () => {
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
    vi.spyOn(PropertiesFile, 'readDirRecursive').mockReturnValue([
      'components/Ui/Button/props.d.ts',
      'main.d.ts',
      'App.d.ts',
      'components/Ui/Button/Button.stories.d.ts'
    ])

    const removeFileSpy = vi.spyOn(PropertiesFile, 'removeFile').mockImplementation(() => {})

    const result = build.testCleanExcess()
    expect(result).toBe(build)
    expect(removeFileSpy).toHaveBeenCalledTimes(3)
    expect(removeFileSpy).toHaveBeenCalledWith(['ai-types-temp', 'main.d.ts'])
    expect(removeFileSpy).toHaveBeenCalledWith(['ai-types-temp', 'App.d.ts'])
    expect(removeFileSpy).toHaveBeenCalledWith(['ai-types-temp', 'components/Ui/Button/Button.stories.d.ts'])
    expect(removeFileSpy).not.toHaveBeenCalledWith(['ai-types-temp', 'components/Ui/Button/props.d.ts'])
  })
})
