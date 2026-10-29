import { describe, expect, it } from 'vitest'
import { InputSocialType } from '../../types/socialTypes'
import { MediaSocials } from '../MediaSocials'
import { MediaSocialUrl } from '../MediaSocialUrl'

class TestMediaSocialUrl extends MediaSocialUrl {
  static override toPrefix(value: string, item?: any): string | undefined {
    return super.toPrefix(value, item)
  }

  static override toSuffix(value: string, suffix?: string): string {
    return super.toSuffix(value, suffix)
  }
}

describe('MediaSocialUrl', () => {
  describe('constructor', () => {
    it('should allow subclass instantiation with protected constructor', () => {
      class CustomMediaSocialUrl extends MediaSocialUrl {
        static create(): CustomMediaSocialUrl {
          return new CustomMediaSocialUrl()
        }
      }

      const instance = CustomMediaSocialUrl.create()
      expect(instance).toBeInstanceOf(MediaSocialUrl)
    })
  })

  describe('get', () => {
    describe('standard profile URL construction (happy path)', () => {
      it('should construct full profile URL from code and username', () => {
        expect(MediaSocialUrl.get(InputSocialType.github, 'dxtmisha')).toBe('https://github.com/dxtmisha')
        expect(MediaSocialUrl.get(InputSocialType.telegram, 'dxtmisha')).toBe('https://t.me/dxtmisha')
        expect(MediaSocialUrl.get(InputSocialType.instagram, 'dxtmisha')).toBe('https://www.instagram.com/dxtmisha')
        expect(MediaSocialUrl.get(InputSocialType.x, 'dxtmisha')).toBe('https://x.com/dxtmisha')
        expect(MediaSocialUrl.get(InputSocialType.vk, 'dxtmisha')).toBe('https://vk.com/dxtmisha')
      })

      it('should return username as is if it is already a full URL without duplicating prefix', () => {
        expect(MediaSocialUrl.get(InputSocialType.github, 'https://github.com/dxtmisha')).toBe('https://github.com/dxtmisha')
        expect(MediaSocialUrl.get(InputSocialType.github, 'http://github.com/dxtmisha')).toBe('https://github.com/dxtmisha')
        expect(MediaSocialUrl.get(InputSocialType.github, 'www.github.com/dxtmisha')).toBe('https://github.com/dxtmisha')
        expect(MediaSocialUrl.get(InputSocialType.telegram, 'https://t.me/dxtmisha')).toBe('https://t.me/dxtmisha')
        expect(MediaSocialUrl.get(InputSocialType.telegram, 't.me/dxtmisha')).toBe('https://t.me/dxtmisha')
      })

      it('should correctly handle URLs without trailing slash and avoid duplicating prefix', () => {
        expect(MediaSocialUrl.get(InputSocialType.github, 'github.com/dxtmisha')).toBe('https://github.com/dxtmisha')
      })

      it('should clean protocol or www from username if passed into value', () => {
        expect(MediaSocialUrl.get(InputSocialType.github, 'http://dxtmisha')).toBe('https://github.com/dxtmisha')
        expect(MediaSocialUrl.get(InputSocialType.github, 'www.dxtmisha')).toBe('https://github.com/dxtmisha')
      })

      it('should strip leading @ symbol from username', () => {
        expect(MediaSocialUrl.get(InputSocialType.github, '@dxtmisha')).toBe('https://github.com/dxtmisha')
        expect(MediaSocialUrl.get(InputSocialType.telegram, '@dxtmisha')).toBe('https://t.me/dxtmisha')
        expect(MediaSocialUrl.get(InputSocialType.telegram, '@@@dxtmisha')).toBe('https://t.me/dxtmisha')
      })

      it('should prevent double slashes when username contains a leading slash', () => {
        expect(MediaSocialUrl.get(InputSocialType.github, '/dxtmisha')).toBe('https://github.com/dxtmisha')
        expect(MediaSocialUrl.get(InputSocialType.github, '///dxtmisha')).toBe('https://github.com/dxtmisha')
        expect(MediaSocialUrl.get(InputSocialType.github, '/@dxtmisha')).toBe('https://github.com/dxtmisha')
        expect(MediaSocialUrl.get(InputSocialType.github, '///@dxtmisha')).toBe('https://github.com/dxtmisha')
      })

      it('should preserve username casing when constructing URL', () => {
        expect(MediaSocialUrl.get(InputSocialType.github, 'DxTMiShA')).toBe('https://github.com/DxTMiShA')
        expect(MediaSocialUrl.get(InputSocialType.github, 'https://github.com/DxTMiShA')).toBe('https://github.com/DxTMiShA')
        expect(MediaSocialUrl.get(InputSocialType.habr, 'https://habr.com/RU/USERS/DxTMiShA')).toBe('https://habr.com/ru/users/DxTMiShA')
      })

      it('should trim surrounding whitespace when constructing URL', () => {
        expect(MediaSocialUrl.get(InputSocialType.github, '  dxtmisha  ')).toBe('https://github.com/dxtmisha')
        expect(MediaSocialUrl.get(InputSocialType.github, '  https://github.com/dxtmisha  ')).toBe('https://github.com/dxtmisha')
      })

      it('should correctly format profile URLs for networks with regex prefixClear', () => {
        expect(MediaSocialUrl.get(InputSocialType.dzen, 'dxtmisha')).toBe('https://dzen.ru/dxtmisha')
        expect(MediaSocialUrl.get(InputSocialType.dzen, 'dzen.ru/dxtmisha')).toBe('https://dzen.ru/dxtmisha')
        expect(MediaSocialUrl.get(InputSocialType.dzen, 'https://dzen.ru/dxtmisha')).toBe('https://dzen.ru/dxtmisha')
      })
    })

    describe('suffix handling', () => {
      it('should correctly append suffix if configured', () => {
        const origGet = MediaSocials.get
        MediaSocials.get = (code) => {
          const item = origGet.call(MediaSocials, code)
          if (item) {
            return { ...item, prefix: 'https://example.com/', prefixClear: /^example\.com(?:\/|$)/i, suffix: '/profile' }
          }
          return item
        }

        try {
          expect(MediaSocialUrl.get(InputSocialType.github, 'myuser')).toBe('https://example.com/myuser/profile')
        } finally {
          MediaSocials.get = origGet
        }
      })

      it('should preserve suffix when input matches prefixClear pattern', () => {
        const origGet = MediaSocials.get
        MediaSocials.get = (code) => {
          const item = origGet.call(MediaSocials, code)
          if (item) {
            return { ...item, prefix: 'https://example.com/', prefixClear: /^example\.com(?:\/|$)/i, suffix: '/profile' }
          }
          return item
        }

        try {
          expect(MediaSocialUrl.get(InputSocialType.github, 'example.com/myuser')).toBe('https://example.com/myuser/profile')
          expect(MediaSocialUrl.get(InputSocialType.github, 'https://example.com/myuser')).toBe('https://example.com/myuser/profile')
        } finally {
          MediaSocials.get = origGet
        }
      })

      it('should not duplicate suffix if value already ends with suffix', () => {
        const origGet = MediaSocials.get
        MediaSocials.get = (code) => {
          const item = origGet.call(MediaSocials, code)
          if (item) {
            return { ...item, prefix: 'https://example.com/', prefixClear: /^example\.com(?:\/|$)/i, suffix: '/profile' }
          }
          return item
        }

        try {
          expect(MediaSocialUrl.get(InputSocialType.github, 'myuser/profile')).toBe('https://example.com/myuser/profile')
          expect(MediaSocialUrl.get(InputSocialType.github, 'example.com/myuser/profile')).toBe('https://example.com/myuser/profile')
          expect(MediaSocialUrl.get(InputSocialType.github, 'https://example.com/myuser/profile')).toBe('https://example.com/myuser/profile')
          expect(MediaSocialUrl.get(InputSocialType.github, 'https://example.com/myuser/profile/')).toBe('https://example.com/myuser/profile')
        } finally {
          MediaSocials.get = origGet
        }
      })

      it('should prevent double slashes when base ends with slash and suffix starts with slash', () => {
        const origGet = MediaSocials.get
        MediaSocials.get = (code) => {
          const item = origGet.call(MediaSocials, code)
          if (item) {
            return { ...item, prefix: 'https://example.com/', prefixClear: /^example\.com(?:\/|$)/i, suffix: '/profile' }
          }
          return item
        }

        try {
          expect(MediaSocialUrl.get(InputSocialType.github, 'myuser/')).toBe('https://example.com/myuser/profile')
          expect(MediaSocialUrl.get(InputSocialType.github, 'example.com/myuser/')).toBe('https://example.com/myuser/profile')
          expect(MediaSocialUrl.get(InputSocialType.github, 'https://example.com/myuser/')).toBe('https://example.com/myuser/profile')
          expect(MediaSocialUrl.get(InputSocialType.github, 'https://example.com/myuser///')).toBe('https://example.com/myuser/profile')
        } finally {
          MediaSocials.get = origGet
        }
      })

      it('should position suffix before query parameters and hash fragments', () => {
        const origGet = MediaSocials.get
        MediaSocials.get = (code) => {
          const item = origGet.call(MediaSocials, code)
          if (item) {
            return { ...item, prefix: 'https://example.com/', prefixClear: /^example\.com(?:\/|$)/i, suffix: '/profile' }
          }
          return item
        }

        try {
          expect(MediaSocialUrl.get(InputSocialType.github, 'myuser?tab=repos')).toBe('https://example.com/myuser/profile?tab=repos')
          expect(MediaSocialUrl.get(InputSocialType.github, 'myuser#readme')).toBe('https://example.com/myuser/profile#readme')
          expect(MediaSocialUrl.get(InputSocialType.github, 'myuser?tab=repos#readme')).toBe('https://example.com/myuser/profile?tab=repos#readme')
          expect(MediaSocialUrl.get(InputSocialType.github, 'myuser/profile?tab=repos')).toBe('https://example.com/myuser/profile?tab=repos')
        } finally {
          MediaSocials.get = origGet
        }
      })
    })

    describe('security and dangerous protocols', () => {
      it('should prevent XSS and return empty string for dangerous protocols', () => {
        expect(MediaSocialUrl.get(InputSocialType.github, 'javascript:alert(1)')).toBe('')
        expect(MediaSocialUrl.get(InputSocialType.github, 'data:text/html;base64,...')).toBe('')
        expect(MediaSocialUrl.get(InputSocialType.github, 'vbscript:msgbox(1)')).toBe('')
        expect(MediaSocialUrl.get('nonexistent' as any, 'javascript:alert(1)')).toBe('')
      })
    })

    describe('empty, nullish, and non-standard inputs', () => {
      it('should return empty string for empty or whitespace value without generating prefix', () => {
        expect(MediaSocialUrl.get(InputSocialType.github, '')).toBe('')
        expect(MediaSocialUrl.get(InputSocialType.github, '   ')).toBe('')
        expect(MediaSocialUrl.get(InputSocialType.github, null)).toBe('')
        expect(MediaSocialUrl.get(InputSocialType.github, undefined)).toBe('')
      })

      it('should safely handle number values', () => {
        expect(MediaSocialUrl.get(InputSocialType.github, 12345)).toBe('https://github.com/12345')
        expect(MediaSocialUrl.get(InputSocialType.github, 0)).toBe('https://github.com/0')
        expect(MediaSocialUrl.get(InputSocialType.github, -42)).toBe('https://github.com/-42')
      })

      it('should return username as is if prefix is not defined or network not found', () => {
        const origGet = MediaSocials.get
        MediaSocials.get = (code) => {
          const item = origGet.call(MediaSocials, code)
          if (item) {
            return { ...item, prefix: undefined, prefixClear: undefined }
          }
          return item
        }

        try {
          expect(MediaSocialUrl.get(InputSocialType.github, 'dxtmisha')).toBe('dxtmisha')
        } finally {
          MediaSocials.get = origGet
        }

        expect(MediaSocialUrl.get('nonexistent' as any, 'dxtmisha')).toBe('dxtmisha')
      })
    })

    describe('multilingual, Unicode and special characters', () => {
      it('should support Cyrillic characters in username', () => {
        expect(MediaSocialUrl.get(InputSocialType.vk, 'миша')).toBe('https://vk.com/миша')
      })

      it('should support Vietnamese characters with diacritics', () => {
        expect(MediaSocialUrl.get(InputSocialType.zalo, 'tiếngviệt')).toBe('https://zalo.me/tiếngviệt')
      })

      it('should support CJK characters', () => {
        expect(MediaSocialUrl.get(InputSocialType.weibo, '用户')).toBe('https://weibo.com/用户')
      })

      it('should support emoji in handles', () => {
        expect(MediaSocialUrl.get(InputSocialType.telegram, 'user_🚀')).toBe('https://t.me/user_🚀')
      })
    })
  })

  describe('toPrefix', () => {
    it('should replace prefix if value already matches prefixClear pattern', () => {
      const item = {
        code: InputSocialType.github,
        name: 'GitHub',
        prefix: 'https://github.com/',
        prefixClear: /^github\.com(?:\/|$)/i
      }
      expect(TestMediaSocialUrl.toPrefix('github.com/dxtmisha', item)).toBe('https://github.com/dxtmisha')
    })

    it('should prepend prefix if value does not match prefixClear', () => {
      const item = {
        code: InputSocialType.github,
        name: 'GitHub',
        prefix: 'https://github.com/'
      }
      expect(TestMediaSocialUrl.toPrefix('dxtmisha', item)).toBe('https://github.com/dxtmisha')
    })

    it('should strip leading slashes and @ symbols from value when prepending prefix', () => {
      const item = {
        code: InputSocialType.github,
        name: 'GitHub',
        prefix: 'https://github.com/'
      }
      expect(TestMediaSocialUrl.toPrefix('/dxtmisha', item)).toBe('https://github.com/dxtmisha')
      expect(TestMediaSocialUrl.toPrefix('///dxtmisha', item)).toBe('https://github.com/dxtmisha')
      expect(TestMediaSocialUrl.toPrefix('/@dxtmisha', item)).toBe('https://github.com/dxtmisha')
      expect(TestMediaSocialUrl.toPrefix('///@dxtmisha', item)).toBe('https://github.com/dxtmisha')
    })

    it('should return undefined if item is undefined', () => {
      expect(TestMediaSocialUrl.toPrefix('dxtmisha', undefined)).toBeUndefined()
    })

    it('should return undefined if item has no prefix', () => {
      const item = {
        code: InputSocialType.github,
        name: 'GitHub'
      }
      expect(TestMediaSocialUrl.toPrefix('dxtmisha', item as any)).toBeUndefined()
    })
  })

  describe('toSuffix', () => {
    it('should append suffix if not present', () => {
      expect(TestMediaSocialUrl.toSuffix('https://example.com/myuser', '/profile')).toBe('https://example.com/myuser/profile')
    })

    it('should not duplicate suffix if already ends with suffix', () => {
      expect(TestMediaSocialUrl.toSuffix('https://example.com/myuser/profile', '/profile')).toBe('https://example.com/myuser/profile')
      expect(TestMediaSocialUrl.toSuffix('https://example.com/myuser/profile/', '/profile')).toBe('https://example.com/myuser/profile')
    })

    it('should normalize base ending with slash when suffix starts with slash', () => {
      expect(TestMediaSocialUrl.toSuffix('https://example.com/myuser/', '/profile')).toBe('https://example.com/myuser/profile')
      expect(TestMediaSocialUrl.toSuffix('https://example.com/myuser///', '/profile')).toBe('https://example.com/myuser/profile')
    })

    it('should correctly position suffix before query parameters and hash fragments', () => {
      expect(TestMediaSocialUrl.toSuffix('https://example.com/myuser?tab=repos', '/profile')).toBe('https://example.com/myuser/profile?tab=repos')
      expect(TestMediaSocialUrl.toSuffix('https://example.com/myuser#readme', '/profile')).toBe('https://example.com/myuser/profile#readme')
      expect(TestMediaSocialUrl.toSuffix('https://example.com/myuser?tab=repos#readme', '/profile')).toBe('https://example.com/myuser/profile?tab=repos#readme')
      expect(TestMediaSocialUrl.toSuffix('https://example.com/myuser/profile?tab=repos', '/profile')).toBe('https://example.com/myuser/profile?tab=repos')
    })

    it('should correctly handle suffix without leading slash (e.g. extension or suffix token)', () => {
      expect(TestMediaSocialUrl.toSuffix('https://example.com/myuser', '.html')).toBe('https://example.com/myuser.html')
      expect(TestMediaSocialUrl.toSuffix('https://example.com/myuser/', '.html')).toBe('https://example.com/myuser.html')
      expect(TestMediaSocialUrl.toSuffix('https://example.com/myuser///', '.html')).toBe('https://example.com/myuser.html')
      expect(TestMediaSocialUrl.toSuffix('https://example.com/myuser.html', '.html')).toBe('https://example.com/myuser.html')
      expect(TestMediaSocialUrl.toSuffix('https://example.com/myuser.html/', '.html')).toBe('https://example.com/myuser.html')
      expect(TestMediaSocialUrl.toSuffix('https://example.com/myuser.html?tab=1', '.html')).toBe('https://example.com/myuser.html?tab=1')
      expect(TestMediaSocialUrl.toSuffix('https://example.com/myuser/?tab=1', '.html')).toBe('https://example.com/myuser.html?tab=1')
    })

    it('should return value as is if suffix is undefined or empty', () => {
      expect(TestMediaSocialUrl.toSuffix('https://example.com/myuser', undefined)).toBe('https://example.com/myuser')
      expect(TestMediaSocialUrl.toSuffix('https://example.com/myuser', '')).toBe('https://example.com/myuser')
    })
  })
})
