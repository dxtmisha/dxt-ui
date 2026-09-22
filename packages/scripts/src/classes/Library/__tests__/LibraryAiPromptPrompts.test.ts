import { afterEach, describe, expect, it, vi } from 'vitest'
import { LibraryAiPromptPrompts } from '../LibraryAiPromptPrompts'
import { PropertiesFile } from '../../Properties/PropertiesFile'

class TestLibraryAiPromptPrompts extends LibraryAiPromptPrompts {
  public testGetList(): string[] {
    return this.getList()
  }

  public testGetMetadata(content: string) {
    return this.getMetadata(content)
  }

  public testGetPromptLine(name: string, path: string, description: string): string {
    return this.getPromptLine(name, path, description)
  }
}

describe('LibraryAiPromptPrompts', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns undefined from make() when directory does not exist', () => {
    vi.spyOn(PropertiesFile, 'isDir').mockReturnValue(false)

    const instance = new LibraryAiPromptPrompts('ai-prompts')
    expect(instance.make()).toBeUndefined()
  })

  it('returns undefined from make() when no markdown files with frontmatter exist', () => {
    vi.spyOn(PropertiesFile, 'isDir').mockReturnValue(true)
    vi.spyOn(PropertiesFile, 'readDir').mockReturnValue(['notes.txt', 'image.png'])

    const instance = new LibraryAiPromptPrompts('ai-prompts')
    expect(instance.make()).toBeUndefined()
  })

  it('correctly extracts YAML frontmatter metadata in getMetadata', () => {
    const instance = new TestLibraryAiPromptPrompts()

    const validContent = `---
name: jdoc
description: Guidelines and standard for generating comprehensive bilingual (English and Russian) JSDoc comments for classes, methods, and types.
---

# Task: JSDoc Generation
`
    const metadata = instance.testGetMetadata(validContent)
    expect(metadata).toEqual({
      name: 'jdoc',
      description: 'Guidelines and standard for generating comprehensive bilingual (English and Russian) JSDoc comments for classes, methods, and types.'
    })
  })

  it('handles quotes and multiline indented descriptions in frontmatter', () => {
    const instance = new TestLibraryAiPromptPrompts()

    const contentWithQuotes = `---
name: "git-push"
description: 'Analyze code changes with git diff, suggest a Conventional Commits message, and stage, commit, and push changes.'
---
`
    const metadataQuotes = instance.testGetMetadata(contentWithQuotes)
    expect(metadataQuotes?.name).toBe('git-push')
    expect(metadataQuotes?.description).toBe('Analyze code changes with git diff, suggest a Conventional Commits message, and stage, commit, and push changes.')

    const contentMultiline = `---
name: storybook
description: Build Storybook documentation and copy static build
  output to the root docs directory for GitHub Pages.
---
`
    const metadataMultiline = instance.testGetMetadata(contentMultiline)
    expect(metadataMultiline?.name).toBe('storybook')
    expect(metadataMultiline?.description).toBe('Build Storybook documentation and copy static build output to the root docs directory for GitHub Pages.')
  })

  it('returns undefined for content without frontmatter or missing fields', () => {
    const instance = new TestLibraryAiPromptPrompts()

    expect(instance.testGetMetadata('# No frontmatter')).toBeUndefined()
    expect(instance.testGetMetadata(`---
name: only-name
---`)).toBeUndefined()
    expect(instance.testGetMetadata(`---
description: only-description
---`)).toBeUndefined()
  })

  it('formats prompt line correctly in getPromptLine with mandatory name and ./ prefix', () => {
    const instance = new TestLibraryAiPromptPrompts()
    const line = instance.testGetPromptLine('jdoc', 'ai-prompts/jdoc.md', 'JSDoc instructions')
    expect(line).toBe("- jdoc ('./ai-prompts/jdoc.md'): JSDoc instructions")
  })

  it('generates consolidated prompts markdown section in make()', () => {
    vi.spyOn(PropertiesFile, 'isDir').mockReturnValue(true)
    vi.spyOn(PropertiesFile, 'readDir').mockReturnValue(['jdoc.md', 'changelog.md', 'other.txt'])
    vi.spyOn(PropertiesFile, 'readFileOnly').mockImplementation((path: any) => {
      const pathString = Array.isArray(path) ? path.join('/') : path
      if (pathString.includes('jdoc.md')) {
        return `---
name: jdoc
description: Guidelines and standard for generating comprehensive bilingual JSDoc comments.
---
# JDoc`
      }
      if (pathString.includes('changelog.md')) {
        return `---
name: changelog
description: Analyze git change history and generate CHANGELOG.md.
---
# Changelog`
      }
      return ''
    })

    const instance = new LibraryAiPromptPrompts('ai-prompts')
    const result = instance.make()

    expect(result).toBeDefined()
    expect(result).toContain('# Skills')
    expect(result).toContain('## Available Skills & Tasks')
    expect(result).toContain('All skill file paths are specified relative to the project root.')
    expect(result).toContain("- changelog ('./ai-prompts/changelog.md'): Analyze git change history and generate CHANGELOG.md.")
    expect(result).toContain("- jdoc ('./ai-prompts/jdoc.md'): Guidelines and standard for generating comprehensive bilingual JSDoc comments.")
  })
})
