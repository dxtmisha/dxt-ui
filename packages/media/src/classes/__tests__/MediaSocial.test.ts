import { describe, expect, it, beforeEach } from 'vitest'
import { MediaSocial } from '../MediaSocial'
import { InputSocialType } from '../../types/socialTypes'

describe('MediaSocial', () => {
  beforeEach(() => {
    // Reset custom icons registry before each test to avoid test pollution
    for (const key in MediaSocial.icons) {
      delete MediaSocial.icons[key as InputSocialType]
    }
  })

  describe('getList', () => {
    it('should return the full list of social network configurations', () => {
      const list = MediaSocial.getList()
      expect(Array.isArray(list)).toBe(true)
      expect(list.length).toBeGreaterThan(0)

      const githubItem = list.find(item => item.code === InputSocialType.github)
      expect(githubItem).toBeDefined()
      expect(githubItem?.name).toBe('GitHub')
    })
  })

  describe('get', () => {
    it('should return undefined for a non-existent code', () => {
      expect(MediaSocial.get('nonexistent' as any)).toBeUndefined()
    })

    it('should return a new shallow copy of the social configuration item', () => {
      const item1 = MediaSocial.get(InputSocialType.github)
      const item2 = MediaSocial.get(InputSocialType.github)

      expect(item1).toBeDefined()
      expect(item2).toBeDefined()
      expect(item1).not.toBe(item2) // verify copy
      expect(item1?.code).toBe(InputSocialType.github)
      expect(item1?.name).toBe('GitHub')
    })

    it('should include the registered custom icon if present', () => {
      MediaSocial.addIcon(InputSocialType.github, 'custom-github-icon')

      const item = MediaSocial.get(InputSocialType.github)
      expect(item?.icon).toBe('custom-github-icon')
    })
  })

  describe('addIcon and addIcons', () => {
    it('should register a single custom icon', () => {
      MediaSocial.addIcon(InputSocialType.telegram, 'telegram-icon')
      expect(MediaSocial.icons[InputSocialType.telegram]).toBe('telegram-icon')

      const item = MediaSocial.get(InputSocialType.telegram)
      expect(item?.icon).toBe('telegram-icon')
    })

    it('should register multiple custom icons', () => {
      MediaSocial.addIcons({
        [InputSocialType.telegram]: 'tg-icon',
        [InputSocialType.discord]: 'dc-icon'
      })

      expect(MediaSocial.icons[InputSocialType.telegram]).toBe('tg-icon')
      expect(MediaSocial.icons[InputSocialType.discord]).toBe('dc-icon')

      expect(MediaSocial.get(InputSocialType.telegram)?.icon).toBe('tg-icon')
      expect(MediaSocial.get(InputSocialType.discord)?.icon).toBe('dc-icon')
    })
  })

  describe('getUrl', () => {
    it('should construct full profile URL from code and username', () => {
      const url = MediaSocial.getUrl(InputSocialType.github, 'dxtmisha')
      expect(url).toBe('https://github.com/dxtmisha')
    })

    it('should return username as is if it is already a full URL', () => {
      const url = MediaSocial.getUrl(InputSocialType.github, 'https://github.com/dxtmisha')
      expect(url).toBe('https://github.com/dxtmisha')
    })

    it('should return username as is if prefix is not defined', () => {
      // Mocking custom item to have no prefix
      const origGet = MediaSocial.get
      MediaSocial.get = (code) => {
        const item = origGet.call(MediaSocial, code)
        if (item) {
          return { ...item, prefix: undefined }
        }
        return item
      }

      try {
        const url = MediaSocial.getUrl(InputSocialType.github, 'dxtmisha')
        expect(url).toBe('dxtmisha')
      } finally {
        MediaSocial.get = origGet
      }
    })
  })

  describe('getValue', () => {
    it('should extract username from full profile URL', () => {
      const val = MediaSocial.getValue(InputSocialType.github, 'https://github.com/dxtmisha')
      expect(val).toBe('dxtmisha')
    })

    it('should extract username and handle suffix correctly if suffix is present', () => {
      // Mock item to have prefix and suffix
      const origGet = MediaSocial.get
      MediaSocial.get = (code) => {
        const item = origGet.call(MediaSocial, code)
        if (item) {
          return { ...item, prefix: 'https://example.com/', suffix: '/edit' }
        }
        return item
      }

      try {
        const val = MediaSocial.getValue(InputSocialType.github, 'https://example.com/dxtmisha/edit')
        expect(val).toBe('dxtmisha')
      } finally {
        MediaSocial.get = origGet
      }
    })

    it('should return input string as is if configuration is not found', () => {
      const val = MediaSocial.getValue('nonexistent' as any, 'https://example.com/dxtmisha')
      expect(val).toBe('https://example.com/dxtmisha')
    })
  })
})
