import { describe, expect, it } from 'vitest'
import { replacePrefix } from '../replacePrefix'
import { InputSocialType, type InputSocialItem } from '../../types/socialTypes'

describe('replacePrefix', () => {
  const githubItem: InputSocialItem = {
    code: InputSocialType.github,
    name: 'GitHub',
    prefixClear: /^github\.com(?:\/|$)/i,
    prefix: 'https://github.com/'
  }

  const telegramItem: InputSocialItem = {
    code: InputSocialType.telegram,
    name: 'Telegram',
    prefixClear: /^t\.me(?:\/|$)/i,
    prefix: 'https://t.me/'
  }

  const vkItem: InputSocialItem = {
    code: InputSocialType.vk,
    name: 'VKontakte',
    prefixClear: /^vk\.com(?:\/|$)/i,
    prefix: 'https://vk.com/'
  }

  describe('Standard functional requirements (Happy path)', () => {
    it('should replace prefixClear with prefix when value matches', () => {
      expect(replacePrefix('github.com/dxtmisha', githubItem)).toBe('https://github.com/dxtmisha')
      expect(replacePrefix('github.com', githubItem)).toBe('https://github.com/')
      expect(replacePrefix('t.me/durov', telegramItem)).toBe('https://t.me/durov')
      expect(replacePrefix('vk.com/id12345', vkItem)).toBe('https://vk.com/id12345')
    })

    it('should strip single and multiple leading slashes from the remainder', () => {
      expect(replacePrefix('github.com/dxtmisha', githubItem)).toBe('https://github.com/dxtmisha')
      expect(replacePrefix('github.com//dxtmisha', githubItem)).toBe('https://github.com/dxtmisha')
      expect(replacePrefix('github.com///dxtmisha', githubItem)).toBe('https://github.com/dxtmisha')
    })

    it('should strip single and multiple leading @ symbols from the remainder', () => {
      expect(replacePrefix('github.com/@dxtmisha', githubItem)).toBe('https://github.com/dxtmisha')
      expect(replacePrefix('github.com/@@dxtmisha', githubItem)).toBe('https://github.com/dxtmisha')
      expect(replacePrefix('t.me/@channel', telegramItem)).toBe('https://t.me/channel')
    })

    it('should strip mixed leading slashes and @ symbols from the remainder', () => {
      expect(replacePrefix('github.com/@/@dxtmisha', githubItem)).toBe('https://github.com/dxtmisha')
      expect(replacePrefix('github.com///@@@dxtmisha', githubItem)).toBe('https://github.com/dxtmisha')
      expect(replacePrefix('github.com/@///@dxtmisha', githubItem)).toBe('https://github.com/dxtmisha')
    })
  })

  describe('Missing or incomplete item configuration', () => {
    it('should return original value when prefixClear is missing', () => {
      const itemWithoutPrefixClear: InputSocialItem = {
        code: InputSocialType.github,
        name: 'GitHub',
        prefix: 'https://github.com/'
      }
      expect(replacePrefix('github.com/dxtmisha', itemWithoutPrefixClear)).toBe('github.com/dxtmisha')
    })

    it('should return original value when prefix is missing', () => {
      const itemWithoutPrefix: InputSocialItem = {
        code: InputSocialType.github,
        name: 'GitHub',
        prefixClear: /^github\.com(?:\/|$)/i
      }
      expect(replacePrefix('github.com/dxtmisha', itemWithoutPrefix)).toBe('github.com/dxtmisha')
    })

    it('should return original value when prefix is an empty string', () => {
      const itemWithEmptyPrefix: InputSocialItem = {
        code: InputSocialType.github,
        name: 'GitHub',
        prefixClear: /^github\.com(?:\/|$)/i,
        prefix: ''
      }
      expect(replacePrefix('github.com/dxtmisha', itemWithEmptyPrefix)).toBe('github.com/dxtmisha')
    })

    it('should return original value when both prefix and prefixClear are missing', () => {
      const bareItem: InputSocialItem = {
        code: InputSocialType.github,
        name: 'GitHub'
      }
      expect(replacePrefix('github.com/dxtmisha', bareItem)).toBe('github.com/dxtmisha')
    })
  })

  describe('Non-matching input values', () => {
    it('should return original string when value is a plain username without prefix', () => {
      expect(replacePrefix('dxtmisha', githubItem)).toBe('dxtmisha')
      expect(replacePrefix('@dxtmisha', githubItem)).toBe('@dxtmisha')
    })

    it('should return original string when domain does not match prefixClear', () => {
      expect(replacePrefix('gitlab.com/dxtmisha', githubItem)).toBe('gitlab.com/dxtmisha')
      expect(replacePrefix('mygithub.com/dxtmisha', githubItem)).toBe('mygithub.com/dxtmisha')
      expect(replacePrefix('facebook.com/user', githubItem)).toBe('facebook.com/user')
    })
  })

  describe('Boundary values and structural variations', () => {
    it('should handle exact prefix without username correctly', () => {
      expect(replacePrefix('github.com', githubItem)).toBe('https://github.com/')
      expect(replacePrefix('github.com/', githubItem)).toBe('https://github.com/')
      expect(replacePrefix('github.com///', githubItem)).toBe('https://github.com/')
    })

    it('should preserve deep nested paths in remainder', () => {
      expect(replacePrefix('github.com/dxtmisha/dxt-ui/tree/main/packages', githubItem))
        .toBe('https://github.com/dxtmisha/dxt-ui/tree/main/packages')
    })

    it('should preserve query parameters and hash fragments', () => {
      expect(replacePrefix('github.com/dxtmisha?tab=repositories', githubItem))
        .toBe('https://github.com/dxtmisha?tab=repositories')
      expect(replacePrefix('github.com/dxtmisha#readme', githubItem))
        .toBe('https://github.com/dxtmisha#readme')
      expect(replacePrefix('github.com/dxtmisha?sort=asc#activity', githubItem))
        .toBe('https://github.com/dxtmisha?sort=asc#activity')
    })

    it('should support custom non-standard schemes or URL structures without trailing slashes', () => {
      const customItem: InputSocialItem = {
        code: InputSocialType.telegram,
        name: 'Telegram Scheme',
        prefixClear: /^t\.me(?:\/|$)/i,
        prefix: 'tg://resolve?domain='
      }
      expect(replacePrefix('t.me/myuser', customItem)).toBe('tg://resolve?domain=myuser')
      expect(replacePrefix('t.me/@myuser', customItem)).toBe('tg://resolve?domain=myuser')
    })
  })

  describe('Case sensitivity and casing preservation', () => {
    it('should match case-insensitively when prefixClear has i flag and preserve remainder casing', () => {
      expect(replacePrefix('GITHUB.COM/DxTMiShA', githubItem)).toBe('https://github.com/DxTMiShA')
      expect(replacePrefix('GitHub.Com/User_Name', githubItem)).toBe('https://github.com/User_Name')
      expect(replacePrefix('T.ME/Durov', telegramItem)).toBe('https://t.me/Durov')
    })
  })

  describe('Stateful regular expressions and flags (g, y)', () => {
    it('should handle prefixClear with global flag (g) and replace prefix correctly when starting from index 0', () => {
      const itemWithGlobal: InputSocialItem = {
        code: InputSocialType.github,
        name: 'GitHub Global',
        prefixClear: /^github\.com(?:\/|$)/gi,
        prefix: 'https://github.com/'
      }

      expect(replacePrefix('github.com/dxtmisha', itemWithGlobal)).toBe('https://github.com/dxtmisha')
    })

    it('should reset prefixClear.lastIndex to 0 via String.replace and maintain deterministic behavior on repeated calls', () => {
      const itemWithGlobal: InputSocialItem = {
        code: InputSocialType.github,
        name: 'GitHub Global',
        prefixClear: /^github\.com(?:\/|$)/gi,
        prefix: 'https://github.com/'
      }

      expect(replacePrefix('github.com/first', itemWithGlobal)).toBe('https://github.com/first')
      expect(itemWithGlobal.prefixClear?.lastIndex).toBe(0)

      expect(replacePrefix('github.com/second', itemWithGlobal)).toBe('https://github.com/second')
      expect(itemWithGlobal.prefixClear?.lastIndex).toBe(0)

      expect(replacePrefix('github.com/third', itemWithGlobal)).toBe('https://github.com/third')
      expect(itemWithGlobal.prefixClear?.lastIndex).toBe(0)
    })

    it('should return original string when stateful prefixClear has non-zero lastIndex that fails prefix test', () => {
      const itemWithGlobal: InputSocialItem = {
        code: InputSocialType.github,
        name: 'GitHub Global',
        prefixClear: /^github\.com(?:\/|$)/gi,
        prefix: 'https://github.com/'
      }

      // Simulate residual state from prior regex test
      itemWithGlobal.prefixClear!.lastIndex = 10

      // When lastIndex > 0, regex.test() fails against string start and original value is returned
      expect(replacePrefix('github.com/dxtmisha', itemWithGlobal)).toBe('github.com/dxtmisha')
    })
  })

  describe('Empty, whitespace, and special characters', () => {
    it('should return empty string unchanged', () => {
      expect(replacePrefix('', githubItem)).toBe('')
    })

    it('should return string with leading whitespace unchanged when prefix is anchored', () => {
      expect(replacePrefix('   github.com/dxtmisha', githubItem)).toBe('   github.com/dxtmisha')
    })

    it('should preserve special characters in remainder', () => {
      expect(replacePrefix('github.com/user.name-123_456', githubItem))
        .toBe('https://github.com/user.name-123_456')
      expect(replacePrefix('github.com/c++_developer', githubItem))
        .toBe('https://github.com/c++_developer')
      expect(replacePrefix('github.com/tag/v1.0.0+build', githubItem))
        .toBe('https://github.com/tag/v1.0.0+build')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should preserve Cyrillic characters in path remainder', () => {
      expect(replacePrefix('vk.com/михаил_иванов', vkItem)).toBe('https://vk.com/михаил_иванов')
    })

    it('should preserve Vietnamese diacritics in path remainder', () => {
      const zaloItem: InputSocialItem = {
        code: InputSocialType.zalo,
        name: 'Zalo',
        prefixClear: /^zalo\.me(?:\/|$)/i,
        prefix: 'https://zalo.me/'
      }
      expect(replacePrefix('zalo.me/nguyễn_văn_a', zaloItem)).toBe('https://zalo.me/nguyễn_văn_a')
    })

    it('should preserve Emoji characters in path remainder', () => {
      expect(replacePrefix('t.me/🚀channel', telegramItem)).toBe('https://t.me/🚀channel')
    })
  })

  describe('Zero mutations and immutability', () => {
    it('should not mutate the item configuration object', () => {
      const originalItem: InputSocialItem = {
        code: InputSocialType.github,
        name: 'GitHub',
        prefixClear: /^github\.com(?:\/|$)/i,
        prefix: 'https://github.com/'
      }
      const itemCopy = { ...originalItem }

      replacePrefix('github.com/dxtmisha', originalItem)

      expect(originalItem.code).toBe(itemCopy.code)
      expect(originalItem.name).toBe(itemCopy.name)
      expect(originalItem.prefix).toBe(itemCopy.prefix)
      expect(originalItem.prefixClear).toBe(itemCopy.prefixClear)
    })

    it('should produce deterministic output over multiple calls', () => {
      const value = 'github.com/dxtmisha'
      expect(replacePrefix(value, githubItem)).toBe('https://github.com/dxtmisha')
      expect(replacePrefix(value, githubItem)).toBe('https://github.com/dxtmisha')
      expect(replacePrefix(value, githubItem)).toBe('https://github.com/dxtmisha')
    })
  })

  describe('isMatched parameter', () => {
    it('should bypass internal isUrlPrefix check and apply prefix replacement when isMatched is explicitly true', () => {
      const itemWithStrictPrefixClear: InputSocialItem = {
        code: InputSocialType.github,
        name: 'GitHub',
        prefixClear: /^custom-domain\.org(?:\/|$)/i,
        prefix: 'https://github.com/'
      }
      // Value does not match prefixClear, but isMatched is true
      expect(replacePrefix('myuser', itemWithStrictPrefixClear, true)).toBe('https://github.com/myuser')
      expect(replacePrefix('github.com/dxtmisha', githubItem, true)).toBe('https://github.com/dxtmisha')
    })

    it('should return value unchanged when isMatched is explicitly false even if pattern matches', () => {
      expect(replacePrefix('github.com/dxtmisha', githubItem, false)).toBe('github.com/dxtmisha')
      expect(replacePrefix('t.me/durov', telegramItem, false)).toBe('t.me/durov')
    })

    it('should evaluate isUrlPrefix when isMatched is undefined', () => {
      expect(replacePrefix('github.com/dxtmisha', githubItem, undefined)).toBe('https://github.com/dxtmisha')
      expect(replacePrefix('dxtmisha', githubItem, undefined)).toBe('dxtmisha')
    })

    it('should safely return original value if prefix or prefixClear is missing even when isMatched is true', () => {
      const itemWithoutPrefix: InputSocialItem = {
        code: InputSocialType.github,
        name: 'GitHub',
        prefixClear: /^github\.com(?:\/|$)/i
      }
      const itemWithoutPrefixClear: InputSocialItem = {
        code: InputSocialType.github,
        name: 'GitHub',
        prefix: 'https://github.com/'
      }

      expect(replacePrefix('github.com/dxtmisha', itemWithoutPrefix, true)).toBe('github.com/dxtmisha')
      expect(replacePrefix('github.com/dxtmisha', itemWithoutPrefixClear, true)).toBe('github.com/dxtmisha')
    })
  })
})
