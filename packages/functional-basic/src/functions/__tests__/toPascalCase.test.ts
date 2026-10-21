import { describe, it, expect } from 'vitest'
import { toPascalCase } from '../toPascalCase'

describe('toPascalCase', () => {
  describe('Стандартные сценарии преобразования (Happy path)', () => {
    it('должен преобразовывать kebab-case в PascalCase', () => {
      expect(toPascalCase('hello-world')).toBe('HelloWorld')
      expect(toPascalCase('user-profile-card')).toBe('UserProfileCard')
    })

    it('должен сохранять и капитализировать camelCase строку', () => {
      expect(toPascalCase('helloWorld')).toBe('HelloWorld')
      expect(toPascalCase('userProfileCard')).toBe('UserProfileCard')
    })

    it('должен корректно обрабатывать строки, которые уже находятся в PascalCase', () => {
      expect(toPascalCase('HelloWorld')).toBe('HelloWorld')
      expect(toPascalCase('UserProfile')).toBe('UserProfile')
    })

    it('должен преобразовывать snake_case в PascalCase', () => {
      expect(toPascalCase('hello_world')).toBe('HelloWorld')
      expect(toPascalCase('user_auth_token')).toBe('UserAuthToken')
    })

    it('должен преобразовывать строки с пробелами в PascalCase', () => {
      expect(toPascalCase('hello world')).toBe('HelloWorld')
      expect(toPascalCase('custom component view')).toBe('CustomComponentView')
    })

    it('должен преобразовывать строки с точками в PascalCase', () => {
      expect(toPascalCase('flag.active')).toBe('FlagActive')
      expect(toPascalCase('system.config.user')).toBe('SystemConfigUser')
    })
  })

  describe('Краевые случаи и нетипичные входные данные', () => {
    it('должен возвращать пустую строку для пустой строки или undefined', () => {
      expect(toPascalCase('')).toBe('')
      expect(toPascalCase()).toBe('')
      expect(toPascalCase(undefined)).toBe('')
    })

    it('должен корректно обрабатывать одиночные символы', () => {
      expect(toPascalCase('a')).toBe('A')
      expect(toPascalCase('Z')).toBe('Z')
    })

    it('должен удалять пробелы и возвращать пустую строку при пробельных строках', () => {
      expect(toPascalCase('   ')).toBe('')
      expect(toPascalCase('\t\n')).toBe('')
    })

    it('должен корректно обрабатывать строки, состоящие только из дефисов или подчеркиваний', () => {
      expect(toPascalCase('---')).toBe('')
      expect(toPascalCase('___')).toBe('')
      expect(toPascalCase(' - _ ')).toBe('')
    })

    it('должен корректно обрабатывать множественные дефисы и крайние разделители', () => {
      expect(toPascalCase('--hello---world--')).toBe('HelloWorld')
      expect(toPascalCase('__component_name__')).toBe('ComponentName')
    })

    it('должен корректно обрабатывать идентификаторы, начинающиеся с цифр', () => {
      expect(toPascalCase('123-component')).toBe('123Component')
      expect(toPascalCase('1st-place')).toBe('1stPlace')
    })
  })
})
