import { describe, expect, it } from 'vitest'
import { toLower } from '../toLower'

describe('toLower', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should lowercase full URL protocol and domain while preserving path casing', () => {
      expect(toLower('HTTPS://GITHUB.COM/DxTMiShA')).toBe('https://github.com/DxTMiShA')
      expect(toLower('HTTP://VK.COM/MyProfile')).toBe('http://vk.com/MyProfile')
      expect(toLower('https://INSTAGRAM.COM/p/B_123AbC/')).toBe('https://instagram.com/p/B_123AbC/')
      expect(toLower('http://SUB.DOMAIN.EXAMPLE.COM/Path/To/Page')).toBe('http://sub.domain.example.com/Path/To/Page')
    })

    it('should lowercase protocol-relative URLs while preserving path casing', () => {
      expect(toLower('//CDN.EXAMPLE.COM/Assets/Logo.PNG')).toBe('//cdn.example.com/Assets/Logo.PNG')
      expect(toLower('//EXAMPLE.COM/Test')).toBe('//example.com/Test')
    })

    it('should lowercase www-prefixed URLs while preserving path casing', () => {
      expect(toLower('WWW.GITHUB.COM/DxTMiShA')).toBe('www.github.com/DxTMiShA')
      expect(toLower('www.LINKEDIN.COM/in/UserName')).toBe('www.linkedin.com/in/UserName')
      expect(toLower('WWW.SITE.COM')).toBe('www.site.com')
    })

    it('should lowercase bare domains followed by a path', () => {
      expect(toLower('GITHUB.COM/DxTMiShA')).toBe('github.com/DxTMiShA')
      expect(toLower('GITLAB.COM/Group/Project_Name')).toBe('gitlab.com/Group/Project_Name')
      expect(toLower('MY-SUB.DOMAIN.ORG/Path')).toBe('my-sub.domain.org/Path')
    })

    it('should lowercase non-slashed protocols (e.g. skype, mailto, tel)', () => {
      expect(toLower('SKYPE:DxTMiShA')).toBe('skype:DxTMiShA')
      expect(toLower('MAILTO:Support@Example.com')).toBe('mailto:Support@Example.com')
      expect(toLower('TEL:+84987654321')).toBe('tel:+84987654321')
    })

    it('should preserve non-URL string casing and leading symbols', () => {
      expect(toLower('@DxTMiShA')).toBe('@DxTMiShA')
      expect(toLower('DxTMiShA')).toBe('DxTMiShA')
      expect(toLower('userName123')).toBe('userName123')
      expect(toLower('User Name')).toBe('User Name')
    })
  })

  describe('Boundary values and structural URL components', () => {
    it('should lowercase URLs with ports and preserve path casing', () => {
      expect(toLower('HTTPS://LOCALHOST:3000/ApiPath')).toBe('https://localhost:3000/ApiPath')
      expect(toLower('HTTP://SERVER.LOCAL:8080/Index')).toBe('http://server.local:8080/Index')
      expect(toLower('EXAMPLE.COM:8080/API/V1/Users')).toBe('example.com:8080/API/V1/Users')
    })

    it('should preserve casing of query parameters and hash fragments', () => {
      expect(toLower('HTTPS://GITHUB.COM/Search?Q=TypeScript&Sort=Stars'))
        .toBe('https://github.com/Search?Q=TypeScript&Sort=Stars')
      expect(toLower('HTTPS://GITHUB.COM/dxtmisha#MySection'))
        .toBe('https://github.com/dxtmisha#MySection')
    })

    it('should handle root URLs with trailing slash', () => {
      expect(toLower('HTTPS://GITHUB.COM/')).toBe('https://github.com/')
      expect(toLower('HTTP://EXAMPLE.ORG/')).toBe('http://example.org/')
      expect(toLower('GITHUB.COM/')).toBe('github.com/')
    })

    it('should leave bare domain without slash unchanged when lookahead is not satisfied', () => {
      expect(toLower('GITHUB.COM')).toBe('GITHUB.COM')
    })

    it('should lowercase IPv6 URLs with protocols', () => {
      expect(toLower('HTTP://[::1]:8080/ApiPath')).toBe('http://[::1]:8080/ApiPath')
      expect(toLower('HTTPS://[2001:DB8::1]/Test/Path')).toBe('https://[2001:db8::1]/Test/Path')
    })

    it('should lowercase URLs containing credentials/userinfo', () => {
      expect(toLower('HTTPS://USER:PASS@GITHUB.COM/DxTMiShA'))
        .toBe('https://user:pass@github.com/DxTMiShA')
    })

    it('should lowercase internationalized domain names (Punycode)', () => {
      expect(toLower('HTTPS://XN--80AK6AA92E.COM/Path')).toBe('https://xn--80ak6aa92e.com/Path')
    })

    it('should handle URLs with query and hash combined without trailing slash', () => {
      expect(toLower('HTTPS://GITHUB.COM?Search=Dev#Top')).toBe('https://github.com?Search=Dev#Top')
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return empty string for null and undefined', () => {
      expect(toLower(null)).toBe('')
      expect(toLower(undefined)).toBe('')
    })

    it('should return empty string when called without arguments', () => {
      expect(toLower()).toBe('')
    })

    it('should return empty string for empty string and whitespace-only strings', () => {
      expect(toLower('')).toBe('')
      expect(toLower(' ')).toBe('')
      expect(toLower('   ')).toBe('')
      expect(toLower('\t')).toBe('')
      expect(toLower('\n')).toBe('')
      expect(toLower('\r\n   \t')).toBe('')
    })

    it('should trim surrounding whitespace from URL before conversion', () => {
      expect(toLower('   HTTPS://GITHUB.COM/DxTMiShA   ')).toBe('https://github.com/DxTMiShA')
      expect(toLower('\t\nHTTPS://GITHUB.COM/DxTMiShA\n')).toBe('https://github.com/DxTMiShA')
      expect(toLower('   @DxTMiShA   ')).toBe('@DxTMiShA')
    })
  })

  describe('Type coercion and numeric inputs', () => {
    it('should correctly handle zero (0) without treating it as falsy or empty', () => {
      expect(toLower(0)).toBe('0')
    })

    it('should convert numbers to string representations', () => {
      expect(toLower(12345)).toBe('12345')
      expect(toLower(-42)).toBe('-42')
      expect(toLower(3.14159)).toBe('3.14159')
      expect(toLower(NaN)).toBe('NaN')
      expect(toLower(Infinity)).toBe('Infinity')
      expect(toLower(-Infinity)).toBe('-Infinity')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should preserve non-Latin paths in URLs', () => {
      expect(toLower('HTTPS://VK.COM/Михаил')).toBe('https://vk.com/Михаил')
      expect(toLower('HTTPS://ZALO.ME/TiếngViệt')).toBe('https://zalo.me/TiếngViệt')
      expect(toLower('HTTPS://WEIBO.COM/用户/主页')).toBe('https://weibo.com/用户/主页')
      expect(toLower('HTTPS://T.ME/🚀Rocket')).toBe('https://t.me/🚀Rocket')
    })

    it('should preserve non-URL non-Latin strings untouched', () => {
      expect(toLower('@Михаил')).toBe('@Михаил')
      expect(toLower('@NguyễnVănA')).toBe('@NguyễnVănA')
      expect(toLower('日本語ユーザー')).toBe('日本語ユーザー')
    })
  })

  describe('Security and script payloads', () => {
    it('should lowercase dangerous protocols', () => {
      expect(toLower('JAVASCRIPT:alert(1)')).toBe('javascript:alert(1)')
      expect(toLower('DATA:text/html,<H1>Test</H1>')).toBe('data:text/html,<H1>Test</H1>')
    })

    it('should safely process HTML/XSS payloads in URL paths', () => {
      expect(toLower('HTTPS://EXAMPLE.COM/<script>alert(1)</script>'))
        .toBe('https://example.com/<script>alert(1)</script>')
    })
  })

  describe('Deep links and custom protocols', () => {
    it('should lowercase custom slash-based deep link schemes while preserving query casing', () => {
      expect(toLower('TG://resolve?domain=DxTMiShA')).toBe('tg://resolve?domain=DxTMiShA')
      expect(toLower('VIBER://chat?number=%2B84987654321')).toBe('viber://chat?number=%2B84987654321')
      expect(toLower('WHATSAPP://send?text=HelloWorld')).toBe('whatsapp://send?text=HelloWorld')
      expect(toLower('FB://profile/12345')).toBe('fb://profile/12345')
      expect(toLower('INTENT://scan/#Intent;scheme=zxing;package=com.google.zxing.client.android;end'))
        .toBe('intent://scan/#Intent;scheme=zxing;package=com.google.zxing.client.android;end')
    })

    it('should preserve query parameters when no trailing slash is present', () => {
      expect(toLower('HTTPS://GITHUB.COM?Q=TypeScript')).toBe('https://github.com?Q=TypeScript')
      expect(toLower('WWW.SITE.COM?Param=Value')).toBe('www.site.com?Param=Value')
    })
  })

  describe('Determinism and idempotence', () => {
    it('should return identical results for repeated calls with same input', () => {
      const input = 'HTTPS://GITHUB.COM/DxTMiShA'
      expect(toLower(input)).toBe('https://github.com/DxTMiShA')
      expect(toLower(input)).toBe('https://github.com/DxTMiShA')
      expect(toLower(input)).toBe('https://github.com/DxTMiShA')
    })

    it('should be idempotent across repeated applications', () => {
      const input = 'HTTPS://GITHUB.COM/DxTMiShA'
      const once = toLower(input)
      expect(toLower(once)).toBe(once)
    })
  })
})
