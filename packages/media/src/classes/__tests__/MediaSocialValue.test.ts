import { describe, expect, it } from 'vitest'
import { InputSocialType } from '../../types/socialTypes'
import { MediaSocials } from '../MediaSocials'
import { MediaSocialValue } from '../MediaSocialValue'

class TestMediaSocialValue extends MediaSocialValue {
  static override toAt(value: string): string {
    return super.toAt(value)
  }

  static override toClearUrl(url: any): string {
    return super.toClearUrl(url)
  }

  static override toPrefix(value: string, prefixClear?: RegExp): string {
    return super.toPrefix(value, prefixClear)
  }

  static override toQueryOrHash(value: string): string {
    return super.toQueryOrHash(value)
  }

  static override toSlash(value: string): string {
    return super.toSlash(value)
  }

  static override toSuffix(value: string, suffix?: string): string {
    return super.toSuffix(value, suffix)
  }
}

describe('MediaSocialValue', () => {
  describe('constructor', () => {
    it('should allow subclass instantiation with protected constructor', () => {
      class CustomMediaSocialValue extends MediaSocialValue {
        static create(): CustomMediaSocialValue {
          return new CustomMediaSocialValue()
        }
      }

      const instance = CustomMediaSocialValue.create()
      expect(instance).toBeInstanceOf(MediaSocialValue)
    })
  })

  describe('get', () => {
    describe('standard profile URL extraction (happy path)', () => {
      it('should extract username from full profile URL across different networks', () => {
        expect(MediaSocialValue.get(InputSocialType.github, 'https://github.com/dxtmisha')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.telegram, 'https://t.me/dxtmisha')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.instagram, 'https://www.instagram.com/dxtmisha')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.x, 'https://x.com/dxtmisha')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.vk, 'https://vk.com/dxtmisha')).toBe('dxtmisha')
      })

      it('should extract username from URLs with http, www, or without protocol', () => {
        expect(MediaSocialValue.get(InputSocialType.github, 'http://github.com/dxtmisha')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.github, 'www.github.com/dxtmisha')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.github, 'github.com/dxtmisha')).toBe('dxtmisha')
      })

      it('should correctly extract username for networks with regex prefixClear', () => {
        expect(MediaSocialValue.get(InputSocialType.dzen, 'https://dzen.ru/dxtmisha')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.dzen, 'dzen.ru/dxtmisha')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.github, 'github.community/dxtmisha')).toBe('github.community/dxtmisha')
      })
    })

    describe('query parameters, hash fragments, and ports', () => {
      it('should extract clean username by stripping query parameters and hash fragments', () => {
        expect(MediaSocialValue.get(InputSocialType.github, 'https://github.com/dxtmisha?tab=repositories')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.github, 'https://github.com/dxtmisha#readme')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.youtube, 'https://www.youtube.com/@dxtmisha?sub_confirmation=1')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.github, 'https://github.com/dxtmisha?foo=1&bar=2#heading')).toBe('dxtmisha')
      })

      it('should extract username from URLs with ports', () => {
        expect(MediaSocialValue.get(InputSocialType.github, 'https://github.com:443/dxtmisha')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.github, 'http://github.com:80/dxtmisha')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.github, 'github.com:8080/dxtmisha')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.github, 'https://github.com:443')).toBe('')
        expect(MediaSocialValue.get(InputSocialType.github, 'https://github.com:443/')).toBe('')
      })
    })

    describe('slashes, at-symbols, and prefixes', () => {
      it('should strip trailing slashes from URL', () => {
        expect(MediaSocialValue.get(InputSocialType.github, 'https://github.com/dxtmisha/')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.github, 'https://github.com/dxtmisha///')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.youtube, 'https://www.youtube.com/@dxtmisha/')).toBe('dxtmisha')
      })

      it('should strip leading @ from username or URL', () => {
        expect(MediaSocialValue.get(InputSocialType.github, '@dxtmisha')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.telegram, '@dxtmisha')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.telegram, '@@@dxtmisha')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.github, 'https://github.com/@dxtmisha')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.youtube, 'https://www.youtube.com/@dxtmisha')).toBe('dxtmisha')
      })

      it('should return empty string when only domain is provided', () => {
        expect(MediaSocialValue.get(InputSocialType.github, 'https://github.com')).toBe('')
        expect(MediaSocialValue.get(InputSocialType.github, 'https://github.com/')).toBe('')
        expect(MediaSocialValue.get(InputSocialType.github, 'github.com')).toBe('')
        expect(MediaSocialValue.get(InputSocialType.youtube, 'https://www.youtube.com')).toBe('')
      })
    })

    describe('casing and whitespace', () => {
      it('should preserve username casing', () => {
        expect(MediaSocialValue.get(InputSocialType.github, 'https://github.com/DxTMiShA')).toBe('DxTMiShA')
        expect(MediaSocialValue.get(InputSocialType.github, '@DxTMiShA')).toBe('DxTMiShA')
        expect(MediaSocialValue.get(InputSocialType.telegram, 'https://t.me/MyAwesomeChannel')).toBe('MyAwesomeChannel')
      })

      it('should trim surrounding whitespace from URL or username', () => {
        expect(MediaSocialValue.get(InputSocialType.github, '   https://github.com/dxtmisha   ')).toBe('dxtmisha')
        expect(MediaSocialValue.get(InputSocialType.github, ' \t @dxtmisha \n ')).toBe('dxtmisha')
      })
    })

    describe('suffix handling', () => {
      it('should handle suffix correctly if configured', () => {
        const origGet = MediaSocials.get
        MediaSocials.get = (code) => {
          const item = origGet.call(MediaSocials, code)
          if (item) {
            return { ...item, prefix: 'https://example.com/', prefixClear: /^example\.com(?:\/|$)/i, suffix: '/edit' }
          }
          return item
        }

        try {
          expect(MediaSocialValue.get(InputSocialType.github, 'https://example.com/myuser/edit')).toBe('myuser')
          expect(MediaSocialValue.get(InputSocialType.github, 'https://example.com/myuser')).toBe('myuser')
        } finally {
          MediaSocials.get = origGet
        }
      })
    })

    describe('multilingual, Unicode and special characters', () => {
      it('should support Cyrillic characters in username or URL', () => {
        expect(MediaSocialValue.get(InputSocialType.vk, 'https://vk.com/миша')).toBe('миша')
        expect(MediaSocialValue.get(InputSocialType.telegram, '@миша_разработчик')).toBe('миша_разработчик')
      })

      it('should support Vietnamese characters with diacritics', () => {
        expect(MediaSocialValue.get(InputSocialType.zalo, 'https://zalo.me/tiếngviệt')).toBe('tiếngviệt')
      })

      it('should support CJK characters', () => {
        expect(MediaSocialValue.get(InputSocialType.weibo, 'https://weibo.com/用户')).toBe('用户')
        expect(MediaSocialValue.get(InputSocialType.wechat, '@微信用户')).toBe('微信用户')
      })

      it('should support emoji characters in handles', () => {
        expect(MediaSocialValue.get(InputSocialType.telegram, '@user_🚀')).toBe('user_🚀')
      })
    })

    describe('security and dangerous protocols', () => {
      it('should return empty string for dangerous protocols', () => {
        expect(MediaSocialValue.get(InputSocialType.github, 'javascript:alert(1)')).toBe('')
        expect(MediaSocialValue.get(InputSocialType.github, 'data:text/html;base64,...')).toBe('')
        expect(MediaSocialValue.get(InputSocialType.github, 'vbscript:msgbox(1)')).toBe('')
        expect(MediaSocialValue.get('nonexistent' as any, 'javascript:alert(1)')).toBe('')
        expect(MediaSocialValue.get(InputSocialType.github, 'javascript:/*--></title></style>*/<script>alert(1)</script>')).toBe('')
      })
    })

    describe('non-standard, empty, and nullish inputs', () => {
      it('should return input string as is if configuration is not found', () => {
        expect(MediaSocialValue.get('nonexistent' as any, 'https://example.com/DxTMiShA')).toBe('https://example.com/DxTMiShA')
        expect(MediaSocialValue.get('nonexistent' as any, 'customuser')).toBe('customuser')
      })

      it('should handle number, zero, negative number, null, or undefined values safely', () => {
        expect(MediaSocialValue.get(InputSocialType.github, null)).toBe('')
        expect(MediaSocialValue.get(InputSocialType.github, undefined)).toBe('')
        expect(MediaSocialValue.get(InputSocialType.github, '')).toBe('')
        expect(MediaSocialValue.get(InputSocialType.github, '   ')).toBe('')
        expect(MediaSocialValue.get(InputSocialType.github, 12345)).toBe('12345')
        expect(MediaSocialValue.get(InputSocialType.github, 0)).toBe('0')
        expect(MediaSocialValue.get(InputSocialType.github, -42)).toBe('-42')
        expect(MediaSocialValue.get(InputSocialType.github, 3.14)).toBe('3.14')
      })
    })
  })

  describe('getByItem', () => {
    it('should extract value using item object directly', () => {
      const item = MediaSocials.get(InputSocialType.github)
      expect(item).toBeDefined()
      expect(MediaSocialValue.getByItem(item, 'https://github.com/dxtmisha')).toBe('dxtmisha')
    })

    it('should return input with lowercased domain when item is undefined', () => {
      expect(MediaSocialValue.getByItem(undefined, 'HTTPS://EXAMPLE.COM/User')).toBe('https://example.com/User')
      expect(MediaSocialValue.getByItem(undefined, 'plainUser')).toBe('plainUser')
    })

    it('should return empty string for dangerous protocols even with valid item', () => {
      const item = MediaSocials.get(InputSocialType.telegram)
      expect(MediaSocialValue.getByItem(item, 'javascript:alert(1)')).toBe('')
    })
  })

  describe('toAt', () => {
    it('should strip leading @ symbols', () => {
      expect(TestMediaSocialValue.toAt('@dxtmisha')).toBe('dxtmisha')
      expect(TestMediaSocialValue.toAt('@@@dxtmisha')).toBe('dxtmisha')
      expect(TestMediaSocialValue.toAt('dxtmisha')).toBe('dxtmisha')
      expect(TestMediaSocialValue.toAt('@')).toBe('')
      expect(TestMediaSocialValue.toAt('@@@')).toBe('')
    })

    it('should not affect trailing or intermediate @ symbols', () => {
      expect(TestMediaSocialValue.toAt('dxt@misha')).toBe('dxt@misha')
      expect(TestMediaSocialValue.toAt('dxtmisha@')).toBe('dxtmisha@')
    })
  })

  describe('toClearUrl', () => {
    it('should remove query string and hash fragment', () => {
      expect(TestMediaSocialValue.toClearUrl('https://github.com/dxtmisha?tab=repos')).toBe('github.com/dxtmisha')
      expect(TestMediaSocialValue.toClearUrl('https://github.com/dxtmisha#readme')).toBe('github.com/dxtmisha')
      expect(TestMediaSocialValue.toClearUrl('https://github.com/dxtmisha?a=1#b=2')).toBe('github.com/dxtmisha')
    })

    it('should safely handle number, null, and undefined values', () => {
      expect(TestMediaSocialValue.toClearUrl(null)).toBe('')
      expect(TestMediaSocialValue.toClearUrl(undefined)).toBe('')
      expect(TestMediaSocialValue.toClearUrl('')).toBe('')
      expect(TestMediaSocialValue.toClearUrl(12345)).toBe('12345')
      expect(TestMediaSocialValue.toClearUrl(0)).toBe('0')
    })

    it('should return empty string for dangerous protocols', () => {
      expect(TestMediaSocialValue.toClearUrl('javascript:alert(1)')).toBe('')
      expect(TestMediaSocialValue.toClearUrl('vbscript:msgbox(1)')).toBe('')
      expect(TestMediaSocialValue.toClearUrl('data:text/html,test')).toBe('')
    })

    it('should strip port from URL domain', () => {
      expect(TestMediaSocialValue.toClearUrl('https://github.com:443/dxtmisha')).toBe('github.com/dxtmisha')
      expect(TestMediaSocialValue.toClearUrl('http://localhost:3000/dxtmisha')).toBe('localhost/dxtmisha')
      expect(TestMediaSocialValue.toClearUrl('https://github.com:443')).toBe('github.com')
    })
  })

  describe('toPrefix', () => {
    it('should strip matching prefix and leading slashes or @', () => {
      const regex = /^github\.com(?:\/|$)/i
      expect(TestMediaSocialValue.toPrefix('github.com/dxtmisha', regex)).toBe('dxtmisha')
      expect(TestMediaSocialValue.toPrefix('github.com/@dxtmisha', regex)).toBe('dxtmisha')
      expect(TestMediaSocialValue.toPrefix('github.com///dxtmisha', regex)).toBe('dxtmisha')
    })

    it('should return value unchanged if regex does not match or is undefined', () => {
      expect(TestMediaSocialValue.toPrefix('other.com/user', /^github\.com(?:\/|$)/i)).toBe('other.com/user')
      expect(TestMediaSocialValue.toPrefix('plainuser', undefined)).toBe('plainuser')
    })
  })

  describe('toQueryOrHash', () => {
    it('should remove query string and hash fragment', () => {
      expect(TestMediaSocialValue.toQueryOrHash('github.com/dxtmisha?tab=repos')).toBe('github.com/dxtmisha')
      expect(TestMediaSocialValue.toQueryOrHash('github.com/dxtmisha#readme')).toBe('github.com/dxtmisha')
      expect(TestMediaSocialValue.toQueryOrHash('github.com/dxtmisha?a=1#b=2')).toBe('github.com/dxtmisha')
    })

    it('should return value unchanged if query or hash are absent', () => {
      expect(TestMediaSocialValue.toQueryOrHash('github.com/dxtmisha')).toBe('github.com/dxtmisha')
    })

    it('should return empty string if input starts with question mark or hash', () => {
      expect(TestMediaSocialValue.toQueryOrHash('?query=1')).toBe('')
      expect(TestMediaSocialValue.toQueryOrHash('#hash')).toBe('')
    })
  })

  describe('toSlash', () => {
    it('should strip trailing slashes', () => {
      expect(TestMediaSocialValue.toSlash('dxtmisha/')).toBe('dxtmisha')
      expect(TestMediaSocialValue.toSlash('dxtmisha///')).toBe('dxtmisha')
      expect(TestMediaSocialValue.toSlash('dxtmisha')).toBe('dxtmisha')
      expect(TestMediaSocialValue.toSlash('/')).toBe('')
      expect(TestMediaSocialValue.toSlash('///')).toBe('')
    })

    it('should not affect leading or internal slashes', () => {
      expect(TestMediaSocialValue.toSlash('/dxtmisha')).toBe('/dxtmisha')
      expect(TestMediaSocialValue.toSlash('dxt/misha')).toBe('dxt/misha')
    })
  })

  describe('toSuffix', () => {
    it('should strip suffix from end of value', () => {
      expect(TestMediaSocialValue.toSuffix('dxtmisha/edit', '/edit')).toBe('dxtmisha')
    })

    it('should return value unchanged if suffix does not match or is undefined', () => {
      expect(TestMediaSocialValue.toSuffix('dxtmisha', '/edit')).toBe('dxtmisha')
      expect(TestMediaSocialValue.toSuffix('dxtmisha', undefined)).toBe('dxtmisha')
      expect(TestMediaSocialValue.toSuffix('dxtmisha', '')).toBe('dxtmisha')
    })

    it('should not affect suffix appearing in the middle of value', () => {
      expect(TestMediaSocialValue.toSuffix('my/edit/user', '/edit')).toBe('my/edit/user')
    })
  })
})
