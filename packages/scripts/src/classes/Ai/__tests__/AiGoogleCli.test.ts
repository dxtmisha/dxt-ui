import { afterEach, describe, expect, it, vi } from 'vitest'
import { exec } from 'node:child_process'
import { AiGoogleCli } from '../AiGoogleCli'
import { AiGoogleCliLite } from '../AiGoogleCliLite'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'
import { PropertiesFile } from '../../Properties/PropertiesFile'

vi.mock('node:child_process', () => ({
  exec: vi.fn()
}))

class TestAiGoogleCliLite extends AiGoogleCliLite {
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

describe('AiGoogleCliLite and AiGoogleCli', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('returns empty array for toImages()', () => {
    const ai = new TestAiGoogleCliLite('key', 'gemini-2.5-flash')
    ai.addImage({ mime: 'image/png', base64: 'abc' })
    expect(ai.testToImages()).toEqual([])
  })

  it('creates temporary prompt files in toContents()', () => {
    const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})
    const ai = new TestAiGoogleCliLite('key', 'gemini-2.5-flash')
    ai.addContent('Google CLI content block')

    const contents = ai.testToContents()
    expect(contents).toHaveLength(1)
    expect(contents[0]).toContain('@./ai-tmp/Prompt-')
    expect(writeSpy).toHaveBeenCalled()
  })

  it('executes child_process.exec and returns stdout', async () => {
    vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})
    const removeDirSpy = vi.spyOn(PropertiesFile, 'removeDir').mockImplementation(() => {})

    vi.mocked(exec).mockImplementation(((
      cmd: string,
      options: any,
      callback?: (error: any, stdout: string, stderr: string) => void
    ) => {
      if (callback) {
        callback(null, '  Generated Gemini CLI response  \n', '')
      }
      return {} as any
    }) as any)

    const ai = new TestAiGoogleCliLite('key', 'gemini-2.5-flash')
    const result = await ai.testResponse('gemini-2.5-flash', 'User instruction')

    expect(result).toBe('Generated Gemini CLI response')
    expect(removeDirSpy).toHaveBeenCalledWith('./ai-tmp')
  })

  it('handles child_process.exec error gracefully', async () => {
    vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})
    const removeDirSpy = vi.spyOn(PropertiesFile, 'removeDir').mockImplementation(() => {})

    vi.mocked(exec).mockImplementation(((
      cmd: string,
      options: any,
      callback?: (error: any, stdout: string, stderr: string) => void
    ) => {
      if (callback) {
        callback(new Error('Gemini CLI failed'), '', 'Error output')
      }
      return {} as any
    }) as any)

    const ai = new TestAiGoogleCliLite('key', 'gemini-2.5-flash')
    const result = await ai.testResponse('gemini-2.5-flash', 'User instruction')

    expect(result).toBe('')
    expect(removeDirSpy).toHaveBeenCalledWith('./ai-tmp')
  })

  it('initializes AiGoogleCli with credentials from PropertiesConfig', () => {
    vi.spyOn(PropertiesConfig, 'getAiKey').mockReturnValue('config-cli-key')
    vi.spyOn(PropertiesConfig, 'getAiModel').mockReturnValue('gemini-2.5-pro')
    vi.spyOn(PropertiesConfig, 'getAiConfig').mockReturnValue({})

    const cli = new AiGoogleCli()
    expect(cli).toBeInstanceOf(AiGoogleCliLite)
  })
})
