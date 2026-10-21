import { describe, it, expect } from 'vitest'
import { toKebabCase } from '../toKebabCase'

describe('toKebabCase', () => {
  describe('Стандартные сценарии преобразования (Happy path)', () => {
    it('должен преобразовывать camelCase в kebab-case', () => {
      expect(toKebabCase('helloWorld')).toBe('hello-world')
      expect(toKebabCase('userProfileCard')).toBe('user-profile-card')
    })

    it('должен преобразовывать PascalCase в kebab-case', () => {
      expect(toKebabCase('HelloWorld')).toBe('hello-world')
      expect(toKebabCase('UserProfileCard')).toBe('user-profile-card')
    })

    it('должен сохранять уже существующий kebab-case', () => {
      expect(toKebabCase('some-variable')).toBe('some-variable')
      expect(toKebabCase('btn-primary-large')).toBe('btn-primary-large')
    })

    it('должен преобразовывать строки с пробелами в kebab-case', () => {
      expect(toKebabCase('Hello World')).toBe('hello-world')
      expect(toKebabCase('custom component view')).toBe('custom-component-view')
    })

    it('должен преобразовывать строки с точками в kebab-case', () => {
      expect(toKebabCase('flag.active')).toBe('flag-active')
      expect(toKebabCase('system.config.user')).toBe('system-config-user')
    })

    it('должен преобразовывать snake_case в kebab-case (Регрессионная защита)', () => {
      expect(toKebabCase('hello_world')).toBe('hello-world')
      expect(toKebabCase('user_auth_token')).toBe('user-auth-token')
    })
  })

  describe('Аббревиатуры и акронимы', () => {
    it('должен корректно обрабатывать аббревиатуры в CamelCase', () => {
      expect(toKebabCase('XMLHttpRequest')).toBe('xmlhttp-request')
    })
  })

  describe('Краевые случаи и граничные значения', () => {
    it('должен безопасно возвращать пустую строку для пустой строки или undefined', () => {
      expect(toKebabCase('')).toBe('')
      expect(toKebabCase(undefined)).toBe('')
      expect(toKebabCase()).toBe('')
    })

    it('должен удалять пробелы и возвращать пустую строку при пробельных строках', () => {
      expect(toKebabCase('   ')).toBe('')
      expect(toKebabCase('\t\n')).toBe('')
    })

    it('должен корректно обрабатывать одиночные символы', () => {
      expect(toKebabCase('a')).toBe('a')
      expect(toKebabCase('Z')).toBe('z')
    })

    it('должен корректно обрабатывать идентификаторы, начинающиеся с цифр', () => {
      expect(toKebabCase('123Hello')).toBe('123-hello')
      expect(toKebabCase('1stPlace')).toBe('1st-place')
    })
  })
})
