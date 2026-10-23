import { describe, expect, it } from 'vitest'
import { toCamelCaseFirst } from '../toCamelCaseFirst'

describe('toCamelCaseFirst', () => {
  describe('Standard functional requirements (PascalCase conversion)', () => {
    it('should convert kebab-case strings to PascalCase', () => {
      expect(toCamelCaseFirst('hello-world')).toBe('HelloWorld')
      expect(toCamelCaseFirst('user-profile-card')).toBe('UserProfileCard')
    })

    it('should capitalize the first letter of camelCase strings', () => {
      expect(toCamelCaseFirst('helloWorld')).toBe('HelloWorld')
      expect(toCamelCaseFirst('userProfileCard')).toBe('UserProfileCard')
    })

    it('should preserve strings that are already in PascalCase', () => {
      expect(toCamelCaseFirst('HelloWorld')).toBe('HelloWorld')
      expect(toCamelCaseFirst('UserProfile')).toBe('UserProfile')
    })

    it('should convert snake_case strings to PascalCase', () => {
      expect(toCamelCaseFirst('hello_world')).toBe('HelloWorld')
      expect(toCamelCaseFirst('user_auth_token')).toBe('UserAuthToken')
    })

    it('should convert space-separated and dot-separated strings to PascalCase', () => {
      expect(toCamelCaseFirst('hello world')).toBe('HelloWorld')
      expect(toCamelCaseFirst('custom component view')).toBe('CustomComponentView')
      expect(toCamelCaseFirst('flag.active')).toBe('FlagActive')
      expect(toCamelCaseFirst('system.config.user')).toBe('SystemConfigUser')
    })
  })

  describe('Uppercase acronyms, numeric tokens, and design-system conventions', () => {
    it('should convert uppercase acronyms and constants to PascalCase', () => {
      expect(toCamelCaseFirst('UPPER_CASE')).toBe('UpperCase')
      expect(toCamelCaseFirst('JSON_DATA')).toBe('JsonData')
    })

    it('should handle single characters and numeric prefixes', () => {
      expect(toCamelCaseFirst('a')).toBe('A')
      expect(toCamelCaseFirst('Z')).toBe('Z')
      expect(toCamelCaseFirst('123-component')).toBe('123Component')
      expect(toCamelCaseFirst('1st-place')).toBe('1stPlace')
    })

    it('should format v-model property names and Vite plugin identifiers accurately', () => {
      expect(toCamelCaseFirst('value')).toBe('Value')
      expect(toCamelCaseFirst('model-value')).toBe('ModelValue')

      const design = 'd1'
      expect(`ui${toCamelCaseFirst(design)}VitePlugin`).toBe('uiD1VitePlugin')
    })
  })

  describe('Boundary values, mixed delimiters, and special characters', () => {
    it('should handle repeated and leading/trailing delimiters cleanly', () => {
      expect(toCamelCaseFirst('--hello---world--')).toBe('HelloWorld')
      expect(toCamelCaseFirst('__component_name__')).toBe('ComponentName')
      expect(toCamelCaseFirst('Some_Special@String')).toBe('SomeSpecialString')
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return an empty string for empty, undefined, or whitespace-only inputs', () => {
      expect(toCamelCaseFirst('')).toBe('')
      expect(toCamelCaseFirst()).toBe('')
      expect(toCamelCaseFirst(undefined)).toBe('')
      expect(toCamelCaseFirst('   ')).toBe('')
      expect(toCamelCaseFirst('\t\n')).toBe('')
    })

    it('should return an empty string for inputs containing only delimiters or symbols', () => {
      expect(toCamelCaseFirst('---')).toBe('')
      expect(toCamelCaseFirst('___')).toBe('')
      expect(toCamelCaseFirst(' - _ ')).toBe('')
      expect(toCamelCaseFirst('@@@')).toBe('')
    })
  })
})
