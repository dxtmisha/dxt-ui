import { afterEach, describe, expect, it, vi } from 'vitest'
import { execFile } from 'node:child_process'
import { AiClaudeCli } from '../AiClaudeCli'
import { AiClaudeCliLite } from '../AiClaudeCliLite'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'
import { PropertiesFile } from '../../Properties/PropertiesFile'

vi.mock('node:child_process', () => ({
  execFile: vi.fn()
}))

class TestAiClaudeCliLite extends AiClaudeCliLite {
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

describe('AiClaudeCliLite and AiClaudeCli', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('returns empty array for toImages()', () => {
    const ai = new TestAiClaudeCliLite('key', 'claude-3-5-sonnet')
    ai.addImage({ mime: 'image/png', base64: 'abc' })
    expect(ai.testToImages()).toEqual([])
  })

  it('creates temporary prompt files in toContents()', () => {
    const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})
    const ai = new TestAiClaudeCliLite('key', 'claude-3-5-sonnet')
    ai.addContent('Cli content block')

    const contents = ai.testToContents()
    expect(contents).toHaveLength(1)
    expect(contents[0]).toContain('@./ai-tmp/Prompt-')
    expect(writeSpy).toHaveBeenCalled()
  })

  it('executes child_process.execFile and returns stdout', async () => {
    vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})
    const removeFileSpy = vi.spyOn(PropertiesFile, 'removeFile').mockImplementation(() => {})

    vi.mocked(execFile).mockImplementation(((
      _file: string,
      _args: string[],
      _options: any,
      callback?: (error: any, stdout: string, stderr: string) => void
    ) => {
      if (callback) {
        callback(null, '  Generated CLI text response  \n', '')
      }
      return {} as any
    }) as any)

    const ai = new TestAiClaudeCliLite('key', 'claude-3-opus')
    const result = await ai.testResponse('claude-3-opus', 'User instruction')

    expect(result).toBe('Generated CLI text response')
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
        callback(new Error('CLI failed'), '', 'Error details')
      }
      return {} as any
    }) as any)

    const ai = new TestAiClaudeCliLite('key', 'claude-3-opus')
    const result = await ai.testResponse('claude-3-opus', 'User instruction')

    expect(result).toBe('')
    expect(removeFileSpy).toHaveBeenCalled()
  })

  it('initializes AiClaudeCli with credentials from PropertiesConfig', () => {
    vi.spyOn(PropertiesConfig, 'getAiKey').mockReturnValue('config-cli-key')
    vi.spyOn(PropertiesConfig, 'getAiModel').mockReturnValue('claude-3-5-sonnet')
    vi.spyOn(PropertiesConfig, 'getAiConfig').mockReturnValue({})

    const cli = new AiClaudeCli()
    expect(cli).toBeInstanceOf(AiClaudeCliLite)
  })
})
