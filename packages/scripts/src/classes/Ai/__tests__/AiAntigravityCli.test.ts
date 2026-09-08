import { afterEach, describe, expect, it, vi } from 'vitest'
import { execFile } from 'node:child_process'
import { AiAntigravityCli } from '../AiAntigravityCli'
import { AiAntigravityCliLite } from '../AiAntigravityCliLite'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'
import { PropertiesFile } from '../../Properties/PropertiesFile'

vi.mock('node:child_process', () => ({
  execFile: vi.fn()
}))

class TestAiAntigravityCliLite extends AiAntigravityCliLite {
  public testToImages() {
    return this.toImages()
  }

  public testToContents() {
    return this.toContents()
  }

  public testInit() {
    return this.init()
  }

  public testResponse(model: string, contents: string) {
    return this.response(model, contents)
  }
}

describe('AiAntigravityCliLite and AiAntigravityCli', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('returns empty array for toImages()', () => {
    const ai = new TestAiAntigravityCliLite('key', 'gemini-2.5-flash')
    ai.addImage({ mime: 'image/png', base64: 'abc' })
    expect(ai.testToImages()).toEqual([])
  })

  it('creates temporary prompt files in toContents()', () => {
    const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})
    const ai = new TestAiAntigravityCliLite('key', 'gemini-2.5-flash')
    ai.addContent('Antigravity CLI content block')

    const contents = ai.testToContents()
    expect(contents).toHaveLength(1)
    expect(contents[0]).toContain('@./ai-tmp/Prompt-')
    expect(writeSpy).toHaveBeenCalled()
  })

  it('executes child_process.execFile with agy command and returns stdout', async () => {
    vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})
    const removeFileSpy = vi.spyOn(PropertiesFile, 'removeFile').mockImplementation(() => {})

    vi.mocked(execFile).mockImplementation(((
      file: string,
      args: string[],
      _options: any,
      callback?: (error: any, stdout: string, stderr: string) => void
    ) => {
      expect(file).toBe('agy')
      expect(args).toContain('--yolo')
      expect(args).toContain('--model')
      expect(args).toContain('gemini-2.5-pro')
      if (callback) {
        callback(null, '  Generated Antigravity CLI response  \n', '')
      }
      return {} as any
    }) as any)

    const ai = new TestAiAntigravityCliLite('key', 'gemini-2.5-pro')
    const result = await ai.testResponse('gemini-2.5-pro', 'User instruction')

    expect(result).toBe('Generated Antigravity CLI response')
    expect(removeFileSpy).toHaveBeenCalled()
  })

  it('handles child_process.execFile error gracefully', async () => {
    vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})
    const removeFileSpy = vi.spyOn(PropertiesFile, 'removeFile').mockImplementation(() => {})

    vi.mocked(execFile).mockImplementation(((
      _file: string,
      _args: string[],
      _options: any,
      callback?: (error: any, stdout: string, stderr: string) => void
    ) => {
      if (callback) {
        callback(new Error('Antigravity CLI failed'), '', 'Error output')
      }
      return {} as any
    }) as any)

    const ai = new TestAiAntigravityCliLite('key', 'gemini-2.5-flash')
    const result = await ai.testResponse('gemini-2.5-flash', 'User instruction')

    expect(result).toBe('')
    expect(removeFileSpy).toHaveBeenCalled()
  })

  it('initializes AiAntigravityCli with credentials from PropertiesConfig', () => {
    vi.spyOn(PropertiesConfig, 'getAiKey').mockReturnValue('config-cli-key')
    vi.spyOn(PropertiesConfig, 'getAiModel').mockReturnValue('gemini-2.5-flash')
    vi.spyOn(PropertiesConfig, 'getAiConfig').mockReturnValue({})

    const cli = new AiAntigravityCli()
    expect(cli).toBeInstanceOf(AiAntigravityCliLite)
  })
})
