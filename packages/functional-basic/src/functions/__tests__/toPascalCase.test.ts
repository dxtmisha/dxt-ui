import { describe, it, expect } from 'vitest'
import { toPascalCase } from '../toPascalCase'

describe('toPascalCase', () => {
  describe('Standard case conversions (Happy path)', () => {
    it('should convert kebab-case to PascalCase', () => {
      expect(toPascalCase('hello-world')).toBe('HelloWorld')
      expect(toPascalCase('user-profile-card')).toBe('UserProfileCard')
    })

    it('should capitalize the first character of a camelCase string', () => {
      expect(toPascalCase('helloWorld')).toBe('HelloWorld')
      expect(toPascalCase('userProfileCard')).toBe('UserProfileCard')
    })

    it('should preserve strings that are already in PascalCase', () => {
      expect(toPascalCase('HelloWorld')).toBe('HelloWorld')
      expect(toPascalCase('UserProfile')).toBe('UserProfile')
    })

    it('should convert snake_case to PascalCase', () => {
      expect(toPascalCase('hello_world')).toBe('HelloWorld')
      expect(toPascalCase('user_auth_token')).toBe('UserAuthToken')
    })

    it('should convert space-separated strings to PascalCase', () => {
      expect(toPascalCase('hello world')).toBe('HelloWorld')
      expect(toPascalCase('custom component view')).toBe('CustomComponentView')
    })

    it('should convert dot-separated strings to PascalCase', () => {
      expect(toPascalCase('flag.active')).toBe('FlagActive')
      expect(toPascalCase('system.config.user')).toBe('SystemConfigUser')
    })

    it('should convert strings with mixed separators to PascalCase', () => {
      expect(toPascalCase('hello_world-test.case space')).toBe('HelloWorldTestCaseSpace')
    })
  })

  describe('Single-character, alphanumeric, and multi-separator inputs', () => {
    it('should handle single-character inputs', () => {
      expect(toPascalCase('a')).toBe('A')
      expect(toPascalCase('Z')).toBe('Z')
      expect(toPascalCase('  a  ')).toBe('A')
    })

    it('should handle multiple consecutive and leading/trailing separators', () => {
      expect(toPascalCase('--hello---world--')).toBe('HelloWorld')
      expect(toPascalCase('__component_name__')).toBe('ComponentName')
      expect(toPascalCase('...system..config...')).toBe('SystemConfig')
    })

    it('should handle identifiers starting with or containing digits', () => {
      expect(toPascalCase('123-component')).toBe('123Component')
      expect(toPascalCase('1st-place')).toBe('1stPlace')
      expect(toPascalCase('v2-release-10')).toBe('V2Release10')
    })
  })

  describe('Empty, whitespace-only, separator-only, and nullish inputs', () => {
    it('should return an empty string for empty string, undefined, or omitted argument', () => {
      expect(toPascalCase('')).toBe('')
      expect(toPascalCase()).toBe('')
      expect(toPascalCase(undefined)).toBe('')
    })

    it('should return an empty string for whitespace-only strings', () => {
      expect(toPascalCase('   ')).toBe('')
      expect(toPascalCase('\t\n\r')).toBe('')
    })

    it('should return an empty string for strings containing only separators', () => {
      expect(toPascalCase('---')).toBe('')
      expect(toPascalCase('___')).toBe('')
      expect(toPascalCase('...')).toBe('')
      expect(toPascalCase(' - _ . ')).toBe('')
    })
  })
})
