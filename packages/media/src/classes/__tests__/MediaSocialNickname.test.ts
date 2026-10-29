import { describe, expect, it } from 'vitest'
import { InputSocialType } from '../../types/socialTypes'
import { MediaSocialNickname } from '../MediaSocialNickname'
import { MediaSocials } from '../MediaSocials'

class TestMediaSocialNickname extends MediaSocialNickname {
  static override toClean(
    value: string,
    nicknameClear?: RegExp
  ): string {
    return super.toClean(value, nicknameClear)
  }
}

describe('MediaSocialNickname', () => {
  describe('constructor', () => {
    it('should allow subclass instantiation with protected constructor', () => {
      class CustomMediaSocialNickname extends MediaSocialNickname {
        static create(): CustomMediaSocialNickname {
          return new CustomMediaSocialNickname()
        }
      }

      const instance = CustomMediaSocialNickname.create()
      expect(instance).toBeInstanceOf(MediaSocialNickname)
    })
  })

  describe('get', () => {
    it('should format nickname with @ prefix from plain username', () => {
      expect(MediaSocialNickname.get(InputSocialType.instagram, 'dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.telegram, 'dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.tiktok, 'dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.twitter, 'dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.x, 'dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.github, 'dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.facebook, 'dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.vk, 'durov')).toBe('@durov')
      expect(MediaSocialNickname.get(InputSocialType.reddit, 'dxtmisha')).toBe('u/dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.habr, 'dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.pinterest, 'dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.linkedin, 'dxtmisha')).toBe('@dxtmisha')
    })

    it('should format nickname correctly when username already starts with @ or multiple @', () => {
      expect(MediaSocialNickname.get(InputSocialType.instagram, '@dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.instagram, '@@dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.telegram, '@dxtmisha')).toBe('@dxtmisha')
    })

    it('should extract and format nickname from full URL', () => {
      expect(MediaSocialNickname.get(InputSocialType.instagram, 'https://www.instagram.com/dxtmisha/')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.telegram, 'https://t.me/dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.tiktok, 'https://www.tiktok.com/@dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.twitter, 'https://twitter.com/dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.x, 'https://x.com/dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.youtube, 'https://www.youtube.com/@dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.medium, 'https://medium.com/@dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.github, 'https://github.com/dxtmisha')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.gitlab, 'https://gitlab.com/dxtmisha')).toBe('@dxtmisha')
    })

    it('should extract nickname and ignore query parameters or hashes', () => {
      expect(MediaSocialNickname.get(InputSocialType.instagram, 'https://www.instagram.com/dxtmisha?igsh=123#story')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.telegram, 'https://t.me/dxtmisha?start=ref')).toBe('@dxtmisha')
    })

    it('should clean extra subpaths using nicknameClear', () => {
      expect(MediaSocialNickname.get(InputSocialType.instagram, 'https://www.instagram.com/dxtmisha/reels')).toBe('@dxtmisha')
      expect(MediaSocialNickname.get(InputSocialType.telegram, 'dxtmisha/123')).toBe('@dxtmisha')
    })

    it('should preserve user case in nickname', () => {
      expect(MediaSocialNickname.get(InputSocialType.instagram, 'https://www.instagram.com/DxTMiShA/')).toBe('@DxTMiShA')
      expect(MediaSocialNickname.get(InputSocialType.telegram, '@DxTMiShA')).toBe('@DxTMiShA')
    })

    it('should return empty string for social networks without nickname support', () => {
      expect(MediaSocialNickname.get(InputSocialType.whatsapp, '+1234567890')).toBe('')
      expect(MediaSocialNickname.get(InputSocialType.alipay, 'account')).toBe('')
      expect(MediaSocialNickname.get(InputSocialType.viber, '+1234567890')).toBe('')
      expect(MediaSocialNickname.get(InputSocialType.zalo, '+1234567890')).toBe('')
    })

    it('should return empty string for invalid nickname value according to nicknameClear', () => {
      expect(MediaSocialNickname.get(InputSocialType.telegram, '+79991234567')).toBe('')
      expect(MediaSocialNickname.get(InputSocialType.telegram, 'https://t.me/+AbCdEfGh')).toBe('')
    })

    it('should return empty string for empty, null, undefined, or domain-only URLs', () => {
      expect(MediaSocialNickname.get(InputSocialType.instagram, '')).toBe('')
      expect(MediaSocialNickname.get(InputSocialType.instagram, null)).toBe('')
      expect(MediaSocialNickname.get(InputSocialType.instagram, undefined)).toBe('')
      expect(MediaSocialNickname.get(InputSocialType.instagram, '   ')).toBe('')
      expect(MediaSocialNickname.get(InputSocialType.instagram, '@')).toBe('')
      expect(MediaSocialNickname.get(InputSocialType.instagram, '@@')).toBe('')
      expect(MediaSocialNickname.get(InputSocialType.instagram, 'https://www.instagram.com')).toBe('')
      expect(MediaSocialNickname.get(InputSocialType.instagram, 'https://www.instagram.com/')).toBe('')
    })

    it('should return empty string for dangerous protocols', () => {
      expect(MediaSocialNickname.get(InputSocialType.instagram, 'javascript:alert(1)')).toBe('')
      expect(MediaSocialNickname.get(InputSocialType.telegram, 'data:text/html,test')).toBe('')
    })

    it('should return empty string for non-existent social network codes', () => {
      expect(MediaSocialNickname.get('nonexistent' as any, 'dxtmisha')).toBe('')
    })

    it('should handle numbers correctly when matching nicknameClear', () => {
      expect(MediaSocialNickname.get(InputSocialType.instagram, 12345)).toBe('@12345')
      expect(MediaSocialNickname.get(InputSocialType.github, 12345)).toBe('@12345')
    })

    it('should support custom nickname prefix and custom nicknameClear with capture group', () => {
      const origGet = MediaSocials.get
      MediaSocials.get = (code) => {
        if (code === ('custom' as any)) {
          return {
            code: 'custom' as any,
            name: 'Custom',
            nickname: '~',
            nicknameClear: /^~*([a-z0-9]+)/i
          }
        }
        if (code === ('no-prefix' as any)) {
          return {
            code: 'no-prefix' as any,
            name: 'No Prefix',
            nicknameClear: /^[a-z0-9]+/i
          }
        }
        return origGet.call(MediaSocials, code)
      }

      try {
        expect(MediaSocialNickname.get('custom' as any, 'myUser')).toBe('~myUser')
        expect(MediaSocialNickname.get('custom' as any, '~myUser')).toBe('~myUser')
        expect(MediaSocialNickname.get('no-prefix' as any, 'rawName')).toBe('rawName')
      } finally {
        MediaSocials.get = origGet
      }
    })
  })

  describe('toClean', () => {
    it('should strip existing nickname prefix if present in pattern', () => {
      expect(TestMediaSocialNickname.toClean('@dxtmisha', /^@*([a-z0-9_.-]+)/i)).toBe('dxtmisha')
      expect(TestMediaSocialNickname.toClean('u/dxtmisha', /^(?:u\/)*(?!$|u\/)([a-z0-9_-]+)/i)).toBe('dxtmisha')
    })

    it('should return empty string if value equals nickname prefix', () => {
      expect(TestMediaSocialNickname.toClean('@', /^@*([a-z0-9_.-]+)/i)).toBe('')
      expect(TestMediaSocialNickname.toClean('u/', /^(?:u\/)*(?!$|u\/)([a-z0-9_-]+)/i)).toBe('')
    })

    it('should match and extract using nicknameClear pattern', () => {
      expect(TestMediaSocialNickname.toClean('dxtmisha/extra/path', /^@*([a-z0-9_.-]+)/i)).toBe('dxtmisha')
    })

    it('should return empty string if nicknameClear does not match', () => {
      expect(TestMediaSocialNickname.toClean('---', /^@*([a-z0-9]+)/i)).toBe('')
    })
  })
})
