import { afterEach, describe, expect, it, vi } from 'vitest'
import { LibraryAiPromptAgents } from '../LibraryAiPromptAgents'
import { PropertiesFile } from '../../Properties/PropertiesFile'

class TestLibraryAiPromptAgents extends LibraryAiPromptAgents {
  constructor(
    targetFile: string,
    private readonly customContent?: string
  ) {
    super(targetFile)
  }

  override getContent(): string {
    return (this.customContent ?? super.getContent()).trim()
  }

  override getMd5(): string {
    return super.getMd5()
  }

  override getSection(md5?: string): string {
    return super.getSection(md5)
  }

  override isMarker(content: string): boolean {
    return super.isMarker(content)
  }
}

describe('LibraryAiPromptAgents', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('calculates md5 correctly', () => {
    const agents = new TestLibraryAiPromptAgents('AGENTS.md', 'test content')
    const md5 = agents.getMd5()
    expect(md5).toHaveLength(32)

    const agentsWhitespace = new TestLibraryAiPromptAgents('AGENTS.md', '  test content  \n')
    expect(agentsWhitespace.getMd5()).toBe(md5)
  })

  it('checks if marker exists via isMarker', () => {
    const agents = new TestLibraryAiPromptAgents('AGENTS.md')
    expect(agents.isMarker('some text <!-- START:ai-prompt --> content <!-- END:ai-prompt -->')).toBe(true)
    expect(agents.isMarker('some text <!-- START:ai-prompt md5:12345678901234567890123456789012 --> content <!-- END:ai-prompt -->')).toBe(true)
    expect(agents.isMarker('some text <!-- START:ai-prompt md5:custom_hash_123 --> content <!-- END:ai-prompt -->')).toBe(true)
    expect(agents.isMarker('no markers here')).toBe(false)
  })

  it('creates section with start and end markers and md5', () => {
    const agents = new TestLibraryAiPromptAgents('AGENTS.md', 'test content')
    const section = agents.getSection()
    expect(section).toContain(`<!-- START:ai-prompt md5:${agents.getMd5()} -->`)
    expect(section).toContain('test content')
    expect(section).toContain('<!-- END:ai-prompt -->')
  })

  it('creates new AGENTS.md if it does not exist', () => {
    vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
    const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

    const agents = new TestLibraryAiPromptAgents('AGENTS.md', 'prompt instructions')
    agents.make()

    expect(writeSpy).toHaveBeenCalledTimes(1)
    const writtenContent = writeSpy.mock.calls[0][1] as string
    expect(writtenContent).toContain('# AI Agent Rules')
    expect(writtenContent).toContain('<!-- START:ai-prompt md5:')
    expect(writtenContent).toContain('prompt instructions')
    expect(writtenContent).toContain('<!-- END:ai-prompt -->')
  })

  it('skips writing if md5 has not changed', () => {
    const content = 'prompt instructions'
    const agents = new TestLibraryAiPromptAgents('AGENTS.md', content)
    const md5 = agents.getMd5()
    const existing = `# AI Agent Rules\n\n<!-- START:ai-prompt md5:${md5} -->\n${content}\n<!-- END:ai-prompt -->\n`

    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
    vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue(existing)
    const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

    agents.make()
    expect(writeSpy).not.toHaveBeenCalled()
  })

  it('updates only marked section when md5 differs, preserving surrounding content', () => {
    const oldContent = 'old instructions'
    const newContent = 'new instructions'
    const oldAgents = new TestLibraryAiPromptAgents('AGENTS.md', oldContent)
    const oldMd5 = oldAgents.getMd5()

    const newAgents = new TestLibraryAiPromptAgents('AGENTS.md', newContent)

    const existing = `# Header\n\n## Custom User Rules\n- Custom Rule 1\n\n<!-- START:ai-prompt md5:${oldMd5} -->\n${oldContent}\n<!-- END:ai-prompt -->\n\n## Footer Rules\n- Footer Rule 1\n`

    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
    vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue(existing)
    const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

    newAgents.make()
    expect(writeSpy).toHaveBeenCalledTimes(1)

    const written = writeSpy.mock.calls[0][1] as string
    expect(written).toContain('# Header')
    expect(written).toContain('## Custom User Rules\n- Custom Rule 1')
    expect(written).toContain('new instructions')
    expect(written).not.toContain('old instructions')
    expect(written).toContain('## Footer Rules\n- Footer Rule 1')
  })

  it('appends section if file has no markers', () => {
    const agents = new TestLibraryAiPromptAgents('AGENTS.md', 'new instructions')
    const existing = `# Custom Project Rules\n\n- Rule A\n- Rule B\n`

    vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
    vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue(existing)
    const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

    agents.make()
    expect(writeSpy).toHaveBeenCalledTimes(1)

    const written = writeSpy.mock.calls[0][1] as string
    expect(written).toContain('# Custom Project Rules\n\n- Rule A\n- Rule B')
    expect(written).toContain('<!-- START:ai-prompt md5:')
    expect(written).toContain('new instructions')
    expect(written).toContain('<!-- END:ai-prompt -->')
  })
})
