import { describe, expect, it, beforeEach } from 'vitest'
import { registerSocialIcons, socialIcons } from '../../socials'
import { MediaSocial } from '../MediaSocial'
import { MediaSocialIcon } from '../MediaSocialIcon'
import { InputSocialType, type InputSocialValue } from '../../types/socialTypes'

describe('MediaSocial', () => {
  beforeEach(() => {
    MediaSocialIcon.reset()
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

    it('should return items with custom icons applied when registered', () => {
      MediaSocialIcon.add(InputSocialType.github, 'custom-gh-icon')

      const list = MediaSocial.getList()
      const githubItem = list.find(item => item.code === InputSocialType.github)
      expect(githubItem?.icon).toBe('custom-gh-icon')
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

    it('should return undefined for icon by default when not registered', () => {
      const item = MediaSocial.get(InputSocialType.github)
      expect(item?.icon).toBeUndefined()
    })

    it('should include the registered SVG icon when registered', () => {
      registerSocialIcons()

      const item = MediaSocial.get(InputSocialType.github)
      expect(item?.icon).toBe(socialIcons[InputSocialType.github])
      expect(typeof item?.icon).toBe('string')
    })

    it('should include the registered custom icon if present', () => {
      MediaSocialIcon.add(InputSocialType.github, 'custom-github-icon')

      const item = MediaSocial.get(InputSocialType.github)
      expect(item?.icon).toBe('custom-github-icon')
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

    it('should not duplicate prefix when URL with http, https, or www is provided', () => {
      expect(MediaSocial.getUrl(InputSocialType.github, 'http://github.com/dxtmisha')).toBe('https://github.com/dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.github, 'https://www.github.com/dxtmisha')).toBe('https://github.com/dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.github, 'www.github.com/dxtmisha')).toBe('https://github.com/dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.github, 'github.com/dxtmisha')).toBe('https://github.com/dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.facebook, 'https://facebook.com/dxtmisha')).toBe('https://www.facebook.com/dxtmisha')
    })

    it('should correctly handle URLs without trailing slash and avoid duplicating prefix', () => {
      expect(MediaSocial.getUrl(InputSocialType.github, 'https://github.com')).toBe('https://github.com/')
      expect(MediaSocial.getUrl(InputSocialType.github, 'http://github.com')).toBe('https://github.com/')
      expect(MediaSocial.getUrl(InputSocialType.github, 'github.com')).toBe('https://github.com/')
      expect(MediaSocial.getUrl(InputSocialType.github, 'www.github.com')).toBe('https://github.com/')
      expect(MediaSocial.getUrl(InputSocialType.youtube, 'https://www.youtube.com')).toBe('https://www.youtube.com/@')
      expect(MediaSocial.getUrl(InputSocialType.youtube, 'youtube.com')).toBe('https://www.youtube.com/@')
    })

    it('should clean protocol or www from username if passed into value', () => {
      expect(MediaSocial.getUrl(InputSocialType.github, 'https://dxtmisha')).toBe('https://github.com/dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.github, 'http://www.dxtmisha')).toBe('https://github.com/dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.github, 'www.dxtmisha')).toBe('https://github.com/dxtmisha')
    })

    it('should strip leading @ symbol from username', () => {
      expect(MediaSocial.getUrl(InputSocialType.github, '@dxtmisha')).toBe('https://github.com/dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.github, '@@dxtmisha')).toBe('https://github.com/dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.youtube, '@dxtmisha')).toBe('https://www.youtube.com/@dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.youtube, '@@dxtmisha')).toBe('https://www.youtube.com/@dxtmisha')
    })

    it('should preserve username casing when constructing URL', () => {
      expect(MediaSocial.getUrl(InputSocialType.github, 'DxTMiShA')).toBe('https://github.com/DxTMiShA')
      expect(MediaSocial.getUrl(InputSocialType.github, '@DxTMiShA')).toBe('https://github.com/DxTMiShA')
      expect(MediaSocial.getUrl(InputSocialType.youtube, 'UC_x5XG1OV2P6uZZ5FSM9Ttw')).toBe('https://www.youtube.com/@UC_x5XG1OV2P6uZZ5FSM9Ttw')
      expect(MediaSocial.getUrl(InputSocialType.habr, 'https://habr.com/RU/USERS/DxTMiShA')).toBe('https://habr.com/ru/users/DxTMiShA')
      expect(MediaSocial.getUrl(InputSocialType.habr, 'HABR.COM/ru/users/DxTMiShA')).toBe('https://habr.com/ru/users/DxTMiShA')
      expect(MediaSocial.getUrl(InputSocialType.github, 'HTTPS://GITHUB.COM/DxTMiShA')).toBe('https://github.com/DxTMiShA')
      expect(MediaSocial.getUrl(InputSocialType.discord, 'MyUser')).toBe('MyUser')
    })

    it('should trim surrounding whitespace when constructing URL', () => {
      expect(MediaSocial.getUrl(InputSocialType.github, '  dxtmisha  ')).toBe('https://github.com/dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.github, '  @dxtmisha  ')).toBe('https://github.com/dxtmisha')
    })

    it('should safely handle number, null, or undefined values', () => {
      expect(MediaSocial.getUrl(InputSocialType.github, null)).toBe('')
      expect(MediaSocial.getUrl(InputSocialType.github, undefined)).toBe('')
      expect(MediaSocial.getUrl(InputSocialType.github, 12345)).toBe('https://github.com/12345')
      expect(MediaSocial.getUrl(InputSocialType.github, 0)).toBe('https://github.com/0')
    })

    it('should return empty string for empty or whitespace value without generating prefix', () => {
      expect(MediaSocial.getUrl(InputSocialType.github, '')).toBe('')
      expect(MediaSocial.getUrl(InputSocialType.github, '   ')).toBe('')
    })

    it('should prevent XSS and dangerous protocol execution', () => {
      expect(MediaSocial.getUrl(InputSocialType.github, 'javascript:alert(1)')).toBe('')
      expect(MediaSocial.getUrl('nonexistent' as any, 'javascript:alert(1)')).toBe('')
      expect(MediaSocial.getUrl(InputSocialType.discord, 'data:text/html;base64,PHNjcmlwdD4=')).toBe('')
      expect(MediaSocial.getUrl(InputSocialType.discord, 'vbscript:msgbox(1)')).toBe('')
      expect(MediaSocial.getUrl(InputSocialType.discord, 'java\0script:alert(1)')).toBe('')
      expect(MediaSocial.getUrl(InputSocialType.discord, '  JAVASCRIPT:alert(1)  ')).toBe('')
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

    it('should correctly format profile URLs for networks with regex prefixClear', () => {
      expect(MediaSocial.getUrl(InputSocialType.dzen, 'dxtmisha')).toBe('https://dzen.ru/dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.dzen, 'https://dzen.ru/dxtmisha')).toBe('https://dzen.ru/dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.dzen, 'dzen.ru/dxtmisha')).toBe('https://dzen.ru/dxtmisha')

      // Newly configured social networks
      expect(MediaSocial.getUrl(InputSocialType.telegram, 'dxtmisha')).toBe('https://t.me/dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.telegram, '@dxtmisha')).toBe('https://t.me/dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.instagram, 'dxtmisha')).toBe('https://www.instagram.com/dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.twitter, 'dxtmisha')).toBe('https://twitter.com/dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.x, 'dxtmisha')).toBe('https://x.com/dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.tiktok, 'dxtmisha')).toBe('https://www.tiktok.com/@dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.medium, 'dxtmisha')).toBe('https://medium.com/@dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.snapchat, 'dxtmisha')).toBe('https://www.snapchat.com/add/dxtmisha')
      expect(MediaSocial.getUrl(InputSocialType.tumblr, 'dxtmisha')).toBe('https://www.tumblr.com/dxtmisha')

      // Ensure no prefix duplication occurs across all networks when full URL is supplied
      for (const item of MediaSocial.getList()) {
        if (!item.prefixClear || !item.prefix) {
          continue
        }

        const fullUrl = `${item.prefix}testuser`
        expect(MediaSocial.getUrl(item.code, fullUrl)).toBe(fullUrl)
      }
    })
  })

  describe('getValue', () => {
    it('should extract username from full profile URL', () => {
      const val = MediaSocial.getValue(InputSocialType.github, 'https://github.com/dxtmisha')
      expect(val).toBe('dxtmisha')
    })

    it('should correctly extract username for networks with regex prefixClear and avoid false prefix matches', () => {
      expect(MediaSocial.getValue(InputSocialType.dzen, 'https://dzen.ru/dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.dzen, 'dzen.ru/dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.dzen, 'https://dzen.ru')).toBe('')
      expect(MediaSocial.getValue(InputSocialType.github, 'github.community/dxtmisha')).toBe('github.community/dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.github, 'github.com.evil.com/dxtmisha')).toBe('github.com.evil.com/dxtmisha')

      // Newly configured social networks
      expect(MediaSocial.getValue(InputSocialType.telegram, 'https://t.me/dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.telegram, 'https://telegram.me/dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.telegram, '@dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.instagram, 'https://www.instagram.com/dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.instagram, 'instagram.com/dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.twitter, 'https://twitter.com/dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.twitter, 'https://x.com/dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.x, 'https://x.com/dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.x, 'https://twitter.com/dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.tiktok, 'https://www.tiktok.com/@dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.medium, 'https://medium.com/@dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.snapchat, 'https://www.snapchat.com/add/dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.tumblr, 'https://www.tumblr.com/dxtmisha')).toBe('dxtmisha')

      // Comprehensive boundary audit for all registered social networks with prefixClear
      for (const item of MediaSocial.getList()) {
        if (!item.prefixClear || !item.prefix) {
          continue
        }

        // 1. Valid profile URL extraction
        const extracted = MediaSocial.getValue(item.code, `${item.prefix}testuser`)
        expect(extracted).toBe('testuser')

        if (item.code !== InputSocialType.skype) {
          // 2. Subdomains / phishing domains must NOT match
          const hostOnly = item.prefix
            .replace(/^https?:\/\//, '')
            .replace(/^www\./, '')
            .replace(/\/.*$/, '')
          const phishingUrl = `${hostOnly}.evil.com/testuser`
          expect(MediaSocial.getValue(item.code, phishingUrl)).toBe(phishingUrl)

          // 3. Sibling domain words sharing the prefix must NOT match
          const siblingWordUrl = `${hostOnly}community/testuser`
          expect(MediaSocial.getValue(item.code, siblingWordUrl)).toBe(siblingWordUrl)

          // 4. Root URLs without username must return empty string
          const rootWithoutSlash = item.prefix.replace(/\/+$/, '')
          expect(MediaSocial.getValue(item.code, rootWithoutSlash)).toBe('')
        }
      }
    })

    it('should extract clean username by stripping query parameters and hash fragments', () => {
      expect(MediaSocial.getValue(InputSocialType.github, 'https://github.com/dxtmisha?tab=repositories')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.github, 'https://github.com/dxtmisha?ref=badge&v=1')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.github, 'https://github.com/dxtmisha#readme')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.github, 'https://github.com/dxtmisha/#profile')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.youtube, 'https://www.youtube.com/@dxtmisha?sub_confirmation=1')).toBe('dxtmisha')
    })

    it('should strip trailing slash from URL', () => {
      expect(MediaSocial.getValue(InputSocialType.github, 'https://github.com/dxtmisha/')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.github, 'github.com/dxtmisha/')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.youtube, 'https://www.youtube.com/@dxtmisha/')).toBe('dxtmisha')
    })

    it('should return empty string when only the social network domain is provided without trailing slash', () => {
      expect(MediaSocial.getValue(InputSocialType.github, 'https://github.com')).toBe('')
      expect(MediaSocial.getValue(InputSocialType.github, 'http://github.com')).toBe('')
      expect(MediaSocial.getValue(InputSocialType.github, 'github.com')).toBe('')
      expect(MediaSocial.getValue(InputSocialType.github, 'www.github.com')).toBe('')
      expect(MediaSocial.getValue(InputSocialType.github, 'https://github.com?tab=repositories')).toBe('')
      expect(MediaSocial.getValue(InputSocialType.github, 'https://github.com#readme')).toBe('')
      expect(MediaSocial.getValue(InputSocialType.youtube, 'https://www.youtube.com')).toBe('')
      expect(MediaSocial.getValue(InputSocialType.youtube, 'https://www.youtube.com/')).toBe('')
    })

    it('should extract username from URLs with http, www, or without protocol', () => {
      expect(MediaSocial.getValue(InputSocialType.github, 'http://github.com/dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.github, 'https://www.github.com/dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.github, 'www.github.com/dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.github, 'github.com/dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.facebook, 'https://facebook.com/dxtmisha')).toBe('dxtmisha')
    })

    it('should strip leading @ from raw username or extracted URL', () => {
      expect(MediaSocial.getValue(InputSocialType.github, '@dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.github, 'https://github.com/@dxtmisha')).toBe('dxtmisha')
      expect(MediaSocial.getValue(InputSocialType.youtube, 'https://www.youtube.com/@dxtmisha')).toBe('dxtmisha')
    })

    it('should extract username and handle suffix correctly if suffix is present', () => {
      // Mock item to have prefix and suffix
      const origGet = MediaSocial.get
      MediaSocial.get = (code) => {
        const item = origGet.call(MediaSocial, code)
        if (item) {
          return { ...item, prefix: 'https://example.com/', prefixClear: /^example\.com(?:\/|$)/i, suffix: '/edit' }
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

    it('should preserve username casing when extracting from URL', () => {
      expect(MediaSocial.getValue(InputSocialType.github, 'https://github.com/DxTMiShA')).toBe('DxTMiShA')
      expect(MediaSocial.getValue(InputSocialType.youtube, 'https://www.youtube.com/@UC_x5XG1OV2P6uZZ5FSM9Ttw')).toBe('UC_x5XG1OV2P6uZZ5FSM9Ttw')
      expect(MediaSocial.getValue(InputSocialType.habr, 'https://habr.com/RU/USERS/DxTMiShA')).toBe('DxTMiShA')
      expect(MediaSocial.getValue(InputSocialType.habr, 'HABR.COM/ru/users/DxTMiShA')).toBe('DxTMiShA')
      expect(MediaSocial.getValue(InputSocialType.github, 'HTTPS://GITHUB.COM/DxTMiShA')).toBe('DxTMiShA')
      expect(MediaSocial.getValue(InputSocialType.github, '@DxTMiShA')).toBe('DxTMiShA')
    })

    it('should return input string as is if configuration is not found', () => {
      const val = MediaSocial.getValue('nonexistent' as any, 'https://example.com/dxtmisha')
      expect(val).toBe('https://example.com/dxtmisha')
      expect(MediaSocial.getValue('nonexistent' as any, 'https://example.com/DxTMiShA')).toBe('https://example.com/DxTMiShA')
      expect(MediaSocial.getValue(InputSocialType.discord, 'MyUser')).toBe('MyUser')
    })

    it('should handle number, null, or undefined values', () => {
      expect(MediaSocial.getValue(InputSocialType.github, null)).toBe('')
      expect(MediaSocial.getValue(InputSocialType.github, undefined)).toBe('')
      expect(MediaSocial.getValue(InputSocialType.github, 12345)).toBe('12345')
      expect(MediaSocial.getValue(InputSocialType.github, 0)).toBe('0')
    })
  })

  describe('getNickname', () => {
    it('should format nickname with @ prefix from plain username', () => {
      expect(MediaSocial.getNickname(InputSocialType.instagram, 'dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.telegram, 'dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.tiktok, 'dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.twitter, 'dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.x, 'dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.github, 'dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.facebook, 'dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.vk, 'durov')).toBe('@durov')
      expect(MediaSocial.getNickname(InputSocialType.reddit, 'dxtmisha')).toBe('u/dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.habr, 'dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.pinterest, 'dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.linkedin, 'dxtmisha')).toBe('@dxtmisha')
    })

    it('should format nickname correctly when username already starts with @ or multiple @', () => {
      expect(MediaSocial.getNickname(InputSocialType.instagram, '@dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.instagram, '@@dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.telegram, '@dxtmisha')).toBe('@dxtmisha')
    })

    it('should extract and format nickname from full URL', () => {
      expect(MediaSocial.getNickname(InputSocialType.instagram, 'https://www.instagram.com/dxtmisha/')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.telegram, 'https://t.me/dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.tiktok, 'https://www.tiktok.com/@dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.twitter, 'https://twitter.com/dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.x, 'https://x.com/dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.youtube, 'https://www.youtube.com/@dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.medium, 'https://medium.com/@dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.github, 'https://github.com/dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.gitlab, 'https://gitlab.com/dxtmisha')).toBe('@dxtmisha')
    })

    it('should extract nickname and ignore query parameters or hashes', () => {
      expect(MediaSocial.getNickname(InputSocialType.instagram, 'https://www.instagram.com/dxtmisha?igsh=123#story')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.telegram, 'https://t.me/dxtmisha?start=ref')).toBe('@dxtmisha')
    })

    it('should clean extra subpaths using nicknameClear', () => {
      expect(MediaSocial.getNickname(InputSocialType.instagram, 'https://www.instagram.com/dxtmisha/reels')).toBe('@dxtmisha')
      expect(MediaSocial.getNickname(InputSocialType.telegram, 'dxtmisha/123')).toBe('@dxtmisha')
    })

    it('should preserve user case in nickname', () => {
      expect(MediaSocial.getNickname(InputSocialType.instagram, 'https://www.instagram.com/DxTMiShA/')).toBe('@DxTMiShA')
      expect(MediaSocial.getNickname(InputSocialType.telegram, '@DxTMiShA')).toBe('@DxTMiShA')
    })

    it('should return empty string for social networks without nickname support', () => {
      expect(MediaSocial.getNickname(InputSocialType.whatsapp, '+1234567890')).toBe('')
      expect(MediaSocial.getNickname(InputSocialType.alipay, 'account')).toBe('')
      expect(MediaSocial.getNickname(InputSocialType.viber, '+1234567890')).toBe('')
      expect(MediaSocial.getNickname(InputSocialType.zalo, '+1234567890')).toBe('')
    })

    it('should return empty string for invalid nickname value according to nicknameClear', () => {
      // Telegram username must not start with + (e.g. phone number)
      expect(MediaSocial.getNickname(InputSocialType.telegram, '+79991234567')).toBe('')
      expect(MediaSocial.getNickname(InputSocialType.telegram, 'https://t.me/+AbCdEfGh')).toBe('')
    })

    it('should return empty string for empty, null, undefined, or domain-only URLs', () => {
      expect(MediaSocial.getNickname(InputSocialType.instagram, '')).toBe('')
      expect(MediaSocial.getNickname(InputSocialType.instagram, null)).toBe('')
      expect(MediaSocial.getNickname(InputSocialType.instagram, undefined)).toBe('')
      expect(MediaSocial.getNickname(InputSocialType.instagram, '   ')).toBe('')
      expect(MediaSocial.getNickname(InputSocialType.instagram, '@')).toBe('')
      expect(MediaSocial.getNickname(InputSocialType.instagram, '@@')).toBe('')
      expect(MediaSocial.getNickname(InputSocialType.instagram, 'https://www.instagram.com')).toBe('')
      expect(MediaSocial.getNickname(InputSocialType.instagram, 'https://www.instagram.com/')).toBe('')
    })

    it('should return empty string for dangerous protocols', () => {
      expect(MediaSocial.getNickname(InputSocialType.instagram, 'javascript:alert(1)')).toBe('')
      expect(MediaSocial.getNickname(InputSocialType.telegram, 'data:text/html,test')).toBe('')
    })

    it('should return empty string for non-existent social network codes', () => {
      expect(MediaSocial.getNickname('nonexistent' as any, 'dxtmisha')).toBe('')
    })

    it('should handle numbers correctly when matching nicknameClear', () => {
      expect(MediaSocial.getNickname(InputSocialType.instagram, 12345)).toBe('@12345')
      expect(MediaSocial.getNickname(InputSocialType.github, 12345)).toBe('@12345')
    })

    it('should support custom nickname prefix and custom nicknameClear with capture group', () => {
      const origGet = MediaSocial.get
      MediaSocial.get = (code) => {
        if (code === ('custom' as any)) {
          return {
            code: 'custom' as any,
            name: 'Custom',
            nickname: '~',
            nicknameClear: /^([a-z0-9]+)/i
          }
        }
        if (code === ('no-prefix' as any)) {
          return {
            code: 'no-prefix' as any,
            name: 'No Prefix',
            nicknameClear: /^[a-z0-9]+/i
          }
        }
        return origGet.call(MediaSocial, code)
      }

      try {
        expect(MediaSocial.getNickname('custom' as any, 'myUser')).toBe('~myUser')
        expect(MediaSocial.getNickname('custom' as any, '~myUser')).toBe('~myUser')
        expect(MediaSocial.getNickname('no-prefix' as any, 'rawName')).toBe('rawName')
      } finally {
        MediaSocial.get = origGet
      }
    })
  })

  describe('addIcon and addIcons', () => {
    it('should register a custom icon via MediaSocialIcon and enrich retrieved items', () => {
      const chainingResult = MediaSocial.addIcon(InputSocialType.github, '<svg class="custom-gh"></svg>')
      expect(chainingResult).toBe(MediaSocial)

      const item = MediaSocial.get(InputSocialType.github)
      expect(item?.icon).toBe('<svg class="custom-gh"></svg>')

      const inList = MediaSocial.getList().find(social => social.code === InputSocialType.github)
      expect(inList?.icon).toBe('<svg class="custom-gh"></svg>')
    })

    it('should register multiple custom icons via addIcons', () => {
      const chainingResult = MediaSocial.addIcons({
        [InputSocialType.telegram]: '<svg class="custom-tg"></svg>',
        [InputSocialType.discord]: '<svg class="custom-dc"></svg>'
      })
      expect(chainingResult).toBe(MediaSocial)

      expect(MediaSocial.get(InputSocialType.telegram)?.icon).toBe('<svg class="custom-tg"></svg>')
      expect(MediaSocial.get(InputSocialType.discord)?.icon).toBe('<svg class="custom-dc"></svg>')
    })

    it('should support chaining multiple addIcon and addIcons calls', () => {
      MediaSocial
        .addIcon(InputSocialType.vk, 'vk-icon')
        .addIcons({ [InputSocialType.x]: 'x-icon' })

      expect(MediaSocial.get(InputSocialType.vk)?.icon).toBe('vk-icon')
      expect(MediaSocial.get(InputSocialType.x)?.icon).toBe('x-icon')
    })
  })
})
