import { describe, expect, it } from 'vitest'
import { toCamelCase } from '../toCamelCase'

describe('toCamelCase', () => {
  it('should return empty string immediately when value is falsy or undefined', () => {
    expect(toCamelCase('')).toBe('')
    expect(toCamelCase(undefined)).toBe('')
    expect(toCamelCase()).toBe('')
    expect(toCamelCase('   ')).toBe('')
  })

  it('should convert kebab-case strings to camelCase', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld')
    expect(toCamelCase('user-profile-data')).toBe('userProfileData')
    expect(toCamelCase('some-long-variable-name')).toBe('someLongVariableName')
  })

  it('should convert snake_case strings to camelCase', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld')
    expect(toCamelCase('user_profile_id')).toBe('userProfileId')
    expect(toCamelCase('user_profile_data')).toBe('userProfileData')
    expect(toCamelCase('some_long_variable_name')).toBe('someLongVariableName')
  })

  it('should convert space-separated strings to camelCase', () => {
    expect(toCamelCase('Hello world')).toBe('helloWorld')
    expect(toCamelCase('Hello World')).toBe('helloWorld')
    expect(toCamelCase('hello world')).toBe('helloWorld')
    expect(toCamelCase('multiple   spaces   between')).toBe('multipleSpacesBetween')
  })

  it('should convert PascalCase strings to camelCase', () => {
    expect(toCamelCase('HelloWorld')).toBe('helloWorld')
    expect(toCamelCase('UserProfileData')).toBe('userProfileData')
  })

  it('should convert dot-separated strings to camelCase', () => {
    expect(toCamelCase('data.value.123')).toBe('dataValue123')
    expect(toCamelCase('config.theme.primaryColor')).toBe('configThemePrimaryColor')
  })

  it('should handle strings with numbers', () => {
    expect(toCamelCase('data-v-123')).toBe('dataV123')
    expect(toCamelCase('col-12')).toBe('col12')
    expect(toCamelCase('item-1-sub-2')).toBe('item1Sub2')
  })

  it('should handle uppercase strings and acronyms', () => {
    expect(toCamelCase('UPPER_CASE')).toBe('upperCase')
    expect(toCamelCase('HELLO_WORLD')).toBe('helloWorld')
    expect(toCamelCase('JSON_DATA')).toBe('jsonData')
  })

  it('should handle mixed delimiters and repetitive separators', () => {
    expect(toCamelCase('__test__variable__')).toBe('testVariable')
    expect(toCamelCase('--kebab--case--')).toBe('kebabCase')
    expect(toCamelCase('some_mixed-case text.value')).toBe('someMixedCaseTextValue')
    expect(toCamelCase('  --leading-and-trailing--  ')).toBe('leadingAndTrailing')
  })

  it('should handle special characters removal like in Storybook documentation', () => {
    expect(toCamelCase('Some_Special@String')).toBe('someSpecialString')
    expect(toCamelCase('user#name$test')).toBe('usernametest')
  })

  it('should handle single words and single characters', () => {
    expect(toCamelCase('word')).toBe('word')
    expect(toCamelCase('Word')).toBe('word')
    expect(toCamelCase('a')).toBe('a')
    expect(toCamelCase('A')).toBe('a')
  })

  it('should handle already camelCase strings', () => {
    expect(toCamelCase('camelCase')).toBe('camelCase')
    expect(toCamelCase('alreadyCamelCase')).toBe('alreadyCamelCase')
  })

  it('should return empty string when input has only delimiters or special characters', () => {
    expect(toCamelCase('---')).toBe('')
    expect(toCamelCase('___')).toBe('')
    expect(toCamelCase('@@@')).toBe('')
  })
})
