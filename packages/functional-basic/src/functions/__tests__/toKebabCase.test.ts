import { describe, it, expect } from 'vitest'
import { toKebabCase } from '../toKebabCase'

describe('toKebabCase', () => {
  describe('Standard case conversions (Happy path)', () => {
    it('should convert camelCase to kebab-case', () => {
      expect(toKebabCase('helloWorld')).toBe('hello-world')
      expect(toKebabCase('userProfileCard')).toBe('user-profile-card')
    })

    it('should convert PascalCase to kebab-case', () => {
      expect(toKebabCase('HelloWorld')).toBe('hello-world')
      expect(toKebabCase('UserProfileCard')).toBe('user-profile-card')
    })

    it('should preserve existing lowercase kebab-case', () => {
      expect(toKebabCase('some-variable')).toBe('some-variable')
      expect(toKebabCase('button-primary-large')).toBe('button-primary-large')
    })

    it('should convert space-separated strings to kebab-case', () => {
      expect(toKebabCase('Hello World')).toBe('hello-world')
      expect(toKebabCase('custom component view')).toBe('custom-component-view')
    })

    it('should convert dot-separated strings to kebab-case', () => {
      expect(toKebabCase('flag.active')).toBe('flag-active')
      expect(toKebabCase('system.config.user')).toBe('system-config-user')
    })

    it('should convert snake_case to kebab-case', () => {
      expect(toKebabCase('hello_world')).toBe('hello-world')
      expect(toKebabCase('user_auth_token')).toBe('user-auth-token')
    })

    it('should collapse multiple consecutive spaces, dots, and underscores into a single dash', () => {
      expect(toKebabCase('hello   world')).toBe('hello-world')
      expect(toKebabCase('hello...world___test . _ case')).toBe('hello-world-test-case')
    })
  })

  describe('Acronyms and uppercase sequences', () => {
    it('should handle acronyms in PascalCase and camelCase', () => {
      expect(toKebabCase('XMLHttpRequest')).toBe('xmlhttp-request')
      expect(toKebabCase('getAPIResponse')).toBe('get-apiresponse')
      expect(toKebabCase('ALLCAPS')).toBe('allcaps')
    })

    it('should lowercase uppercase characters preceded by dashes', () => {
      expect(toKebabCase('Hello-World')).toBe('hello-world')
      expect(toKebabCase('Custom-Element-Name')).toBe('custom-element-name')
      expect(toKebabCase('--LeadingUpper')).toBe('--leading-upper')
    })
  })

  describe('Special characters and invalid character stripping', () => {
    it('should strip non-word characters except dashes, dots, and spaces', () => {
      expect(toKebabCase('hello@world!')).toBe('helloworld')
      expect(toKebabCase('price$100#discount%')).toBe('price100discount')
      expect(toKebabCase('user/profile:settings?active=true')).toBe('userprofilesettingsactivetrue')
    })

    it('should return an empty string if input contains only invalid characters', () => {
      expect(toKebabCase('@#$%^&*()+=!')).toBe('')
    })
  })

  describe('Alphanumeric and single-character inputs', () => {
    it('should handle single-character strings', () => {
      expect(toKebabCase('a')).toBe('a')
      expect(toKebabCase('Z')).toBe('z')
    })

    it('should handle identifiers starting with or containing numbers', () => {
      expect(toKebabCase('123Hello')).toBe('123-hello')
      expect(toKebabCase('1stPlace')).toBe('1st-place')
      expect(toKebabCase('version2Update10')).toBe('version2-update10')
      expect(toKebabCase('12345')).toBe('12345')
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return an empty string for empty string, undefined, or omitted argument', () => {
      expect(toKebabCase('')).toBe('')
      expect(toKebabCase(undefined)).toBe('')
      expect(toKebabCase()).toBe('')
    })

    it('should trim surrounding whitespace and return an empty string for whitespace-only inputs', () => {
      expect(toKebabCase('   ')).toBe('')
      expect(toKebabCase('\t\n\r')).toBe('')
      expect(toKebabCase('  helloWorld  ')).toBe('hello-world')
    })
  })
})
