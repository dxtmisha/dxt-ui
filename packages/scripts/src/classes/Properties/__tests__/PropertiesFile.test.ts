import { afterEach, describe, expect, it, vi } from 'vitest'
import { PropertiesFile } from '../PropertiesFile'
import requireFs from 'node:fs'

describe('PropertiesFile', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('joins path segments with normalized separators', () => {
    const joined = PropertiesFile.joinPath(['src', 'components', 'button.ts'])
    expect(joined).toContain('button.ts')
    expect(joined).not.toContain('//')
  })

  it('generates filename with extension and joins by name', () => {
    expect(PropertiesFile.getFileName('data', 'json')).toBe('data.json')
    expect(PropertiesFile.getFileName('index', 'ts')).toBe('index.ts')

    const path = PropertiesFile.joinPathByName(['src', 'data'], 'config', 'json')
    expect(path).toContain('config.json')
  })

  it('checks existence of files with is() and isDir()', () => {
    vi.spyOn(requireFs, 'existsSync').mockReturnValue(true)
    vi.spyOn(requireFs, 'statSync').mockReturnValue({
      isDirectory: () => true
    } as any)

    expect(PropertiesFile.is('src')).toBe(true)
    expect(PropertiesFile.isDir('src')).toBe(true)
  })

  it('reads JSON and text files via readFile and readFileOnly', () => {
    vi.spyOn(requireFs, 'existsSync').mockReturnValue(true)
    vi.spyOn(requireFs, 'readFileSync').mockReturnValue('{"version":"1.0.0"}')

    const json = PropertiesFile.readFile<{ version: string }>('package.json')
    expect(json?.version).toBe('1.0.0')

    const text = PropertiesFile.readFileOnly('package.json')
    expect(text).toBe('{"version":"1.0.0"}')
  })

  it('writes text and JSON files via write and writeByPath', () => {
    vi.spyOn(requireFs, 'existsSync').mockReturnValue(true)
    vi.spyOn(requireFs, 'statSync').mockReturnValue({
      isDirectory: () => true
    } as any)
    const writeSpy = vi.spyOn(requireFs, 'writeFileSync').mockImplementation(() => {})

    PropertiesFile.write('dist', 'manifest', { ok: true }, 'json')
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining('manifest.json'),
      JSON.stringify({ ok: true }, null, 2)
    )

    PropertiesFile.writeByPath('dist/output.txt', 'Hello World', false)
    expect(writeSpy).toHaveBeenCalledWith(
      expect.stringContaining('output.txt'),
      'Hello World'
    )
  })

  it('handles directory removal and creation', () => {
    vi.spyOn(requireFs, 'existsSync').mockReturnValue(false)
    vi.spyOn(requireFs, 'statSync').mockReturnValue({
      isDirectory: () => true
    } as any)
    const rmSpy = vi.spyOn(requireFs, 'rmSync').mockImplementation(() => {})
    const mkdirSpy = vi.spyOn(requireFs, 'mkdirSync').mockImplementation(() => undefined as any)

    PropertiesFile.removeDir('temp-dir')
    expect(rmSpy).toHaveBeenCalledWith(expect.stringContaining('temp-dir'), { recursive: true, force: true })

    PropertiesFile.createDir('new-dir')
    expect(mkdirSpy).toHaveBeenCalledWith(expect.stringContaining('new-dir'))
  })
})
