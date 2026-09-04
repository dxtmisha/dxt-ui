import { afterEach, describe, expect, it, vi } from 'vitest'
import { GitIgnore } from '../GitIgnore'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { UI_FILE_GITIGNORE } from '../../../config'

describe('GitIgnore', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('make', () => {
    it('creates .gitignore with paths when file is empty or does not exist', () => {
      vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue(undefined)
      const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

      const result = new GitIgnore(['ai-prompt.md', 'ai-packages-types']).make()

      expect(result).toBe(true)
      expect(writeSpy).toHaveBeenCalledWith(
        UI_FILE_GITIGNORE,
        'ai-prompt.md\nai-packages-types\n',
        false
      )
    })

    it('appends only missing entries to existing .gitignore content', () => {
      vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue('node_modules\nai-prompt.md\n')
      const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

      const result = new GitIgnore(['ai-prompt.md', 'ai-packages-types']).make()

      expect(result).toBe(true)
      expect(writeSpy).toHaveBeenCalledWith(
        UI_FILE_GITIGNORE,
        'node_modules\nai-prompt.md\nai-packages-types\n',
        false
      )
    })

    it('prepends comment header when comment is provided', () => {
      vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue(undefined)
      const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

      const result = new GitIgnore(['ai-prompt.md'], 'AI Resources').make()

      expect(result).toBe(true)
      expect(writeSpy).toHaveBeenCalledWith(
        UI_FILE_GITIGNORE,
        '# AI Resources\nai-prompt.md\n',
        false
      )
    })

    it('adds blank line separator before comment when appending to existing content', () => {
      vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue('node_modules\n')
      const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

      const result = new GitIgnore(['ai-prompt.md'], '# AI').make()

      expect(result).toBe(true)
      expect(writeSpy).toHaveBeenCalledWith(
        UI_FILE_GITIGNORE,
        'node_modules\n\n# AI\nai-prompt.md\n',
        false
      )
    })

    it('does not duplicate existing comment header in .gitignore', () => {
      vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue('# AI\nai-prompt.md\n')
      const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

      const result = new GitIgnore(['ai-packages-types'], 'AI').make()

      expect(result).toBe(true)
      expect(writeSpy).toHaveBeenCalledWith(
        UI_FILE_GITIGNORE,
        '# AI\nai-prompt.md\nai-packages-types\n',
        false
      )
    })

    it('returns false when empty paths are provided', () => {
      const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

      const result = new GitIgnore(['', '   ']).make()

      expect(result).toBe(false)
      expect(writeSpy).not.toHaveBeenCalled()
    })

    it('returns false when all paths already exist', () => {
      vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue('ai-prompt.md\n')
      const writeSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

      const result = new GitIgnore('ai-prompt.md').make()

      expect(result).toBe(false)
      expect(writeSpy).not.toHaveBeenCalled()
    })
  })

  describe('state mutation methods', () => {
    it('manages paths via addPaths, setPaths, getPaths', () => {
      const gitIgnore = new GitIgnore()
      expect(gitIgnore.getPaths()).toEqual([])

      gitIgnore.addPaths(['src', 'dist'])
      expect(gitIgnore.getPaths()).toEqual(['src', 'dist'])

      gitIgnore.addPaths('temp')
      expect(gitIgnore.getPaths()).toEqual(['src', 'dist', 'temp'])

      gitIgnore.setPaths(['only-this'])
      expect(gitIgnore.getPaths()).toEqual(['only-this'])
    })

    it('manages comment via setComment and getComment', () => {
      const gitIgnore = new GitIgnore([], 'Initial Comment')
      expect(gitIgnore.getComment()).toBe('Initial Comment')

      gitIgnore.setComment('New Comment')
      expect(gitIgnore.getComment()).toBe('New Comment')
    })


    it('manages gitignorePath via setGitignorePath and getGitignorePath', () => {
      const gitIgnore = new GitIgnore()
      expect(gitIgnore.getGitignorePath()).toBe(UI_FILE_GITIGNORE)

      gitIgnore.setGitignorePath('custom/.gitignore')
      expect(gitIgnore.getGitignorePath()).toBe('custom/.gitignore')
    })

    it('caches content in getContent and resets on resetContent or setGitignorePath', () => {
      const gitIgnore = new GitIgnore()
      const readSpy = vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue('cached-content\n')

      expect(gitIgnore.getContent()).toBe('cached-content')
      expect(gitIgnore.getContent()).toBe('cached-content')
      expect(readSpy).toHaveBeenCalledTimes(1)

      gitIgnore.resetContent()
      expect(gitIgnore.getContent()).toBe('cached-content')
      expect(readSpy).toHaveBeenCalledTimes(2)

      gitIgnore.setGitignorePath('other/.gitignore')
      expect(gitIgnore.getContent()).toBe('cached-content')
      expect(readSpy).toHaveBeenCalledTimes(3)
    })
  })

  describe('toPaths', () => {
    it('normalizes, trims, deduplicates and filters paths missing in .gitignore', () => {
      class TestGitIgnore extends GitIgnore {
        public testToPaths() {
          return this.toPaths()
        }
      }

      const instance = new TestGitIgnore(['  ai-prompt.md  ', '', 'ai-prompt.md', 'dist', 'src'])
      vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue('node_modules\n/dist/\n')

      expect(instance.testToPaths()).toEqual(['ai-prompt.md', 'src'])
    })
  })

  describe('toLines', () => {
    it('splits content into trimmed lines', () => {
      class TestGitIgnore extends GitIgnore {
        public testToLines() {
          return this.toLines()
        }
      }

      const instance = new TestGitIgnore()
      vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue('  node_modules  \r\n\r\n  dist\n\n')
      expect(instance.testToLines()).toEqual([
        'node_modules',
        '',
        'dist'
      ])
    })
  })
  describe('getCommentLines', () => {
    it('returns array with comment if comment is present and missing in content, else []', () => {
      class TestGitIgnore extends GitIgnore {
        public testGetCommentLines() {
          return this.getCommentLines()
        }
      }

      const instance = new TestGitIgnore([], 'AI Resources')
      vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue('node_modules\n')
      expect(instance.testGetCommentLines()).toEqual(['# AI Resources'])

      vi.spyOn(PropertiesFile, 'readFileOnly').mockReturnValue('# AI Resources\nnode_modules\n')
      instance.resetContent()
      expect(instance.testGetCommentLines()).toEqual([])

      instance.setComment(undefined)
      expect(instance.testGetCommentLines()).toEqual([])
    })
  })
})


