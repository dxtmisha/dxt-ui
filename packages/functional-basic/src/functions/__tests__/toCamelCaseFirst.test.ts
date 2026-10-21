import { describe, it, expect } from 'vitest'
import { toCamelCaseFirst } from '../toCamelCaseFirst'

describe('toCamelCaseFirst', () => {
  describe('Стандартные сценарии преобразования (Happy path)', () => {
    it('должен преобразовывать kebab-case в PascalCase', () => {
      expect(toCamelCaseFirst('hello-world')).toBe('HelloWorld')
      expect(toCamelCaseFirst('user-profile-card')).toBe('UserProfileCard')
    })

    it('должен сохранять и капитализировать camelCase строку', () => {
      expect(toCamelCaseFirst('helloWorld')).toBe('HelloWorld')
      expect(toCamelCaseFirst('userProfileCard')).toBe('UserProfileCard')
    })

    it('должен корректно обрабатывать строки, которые уже находятся в PascalCase', () => {
      expect(toCamelCaseFirst('HelloWorld')).toBe('HelloWorld')
      expect(toCamelCaseFirst('UserProfile')).toBe('UserProfile')
    })

    it('должен преобразовывать snake_case в PascalCase', () => {
      expect(toCamelCaseFirst('hello_world')).toBe('HelloWorld')
      expect(toCamelCaseFirst('user_auth_token')).toBe('UserAuthToken')
    })

    it('должен преобразовывать строки с пробелами в PascalCase', () => {
      expect(toCamelCaseFirst('hello world')).toBe('HelloWorld')
      expect(toCamelCaseFirst('custom component view')).toBe('CustomComponentView')
    })

    it('должен преобразовывать строки с точками в PascalCase', () => {
      expect(toCamelCaseFirst('flag.active')).toBe('FlagActive')
      expect(toCamelCaseFirst('system.config.user')).toBe('SystemConfigUser')
    })
  })

  describe('Краевые случаи и нетипичные входные данные', () => {
    it('должен возвращать пустую строку для пустой строки или undefined', () => {
      expect(toCamelCaseFirst('')).toBe('')
      expect(toCamelCaseFirst()).toBe('')
      expect(toCamelCaseFirst(undefined)).toBe('')
    })

    it('должен корректно обрабатывать одиночные символы', () => {
      expect(toCamelCaseFirst('a')).toBe('A')
      expect(toCamelCaseFirst('Z')).toBe('Z')
    })

    it('должен удалять пробелы и возвращать пустую строку при пробельных строках', () => {
      expect(toCamelCaseFirst('   ')).toBe('')
      expect(toCamelCaseFirst('\t\n')).toBe('')
    })

    it('должен корректно обрабатывать строки, состоящие только из дефисов или подчеркиваний', () => {
      expect(toCamelCaseFirst('---')).toBe('')
      expect(toCamelCaseFirst('___')).toBe('')
      expect(toCamelCaseFirst(' - _ ')).toBe('')
    })

    it('должен корректно обрабатывать множественные дефисы и крайние разделители', () => {
      expect(toCamelCaseFirst('--hello---world--')).toBe('HelloWorld')
      expect(toCamelCaseFirst('__component_name__')).toBe('ComponentName')
    })

    it('должен корректно обрабатывать идентификаторы, начинающиеся с цифр', () => {
      expect(toCamelCaseFirst('123-component')).toBe('123Component')
      expect(toCamelCaseFirst('1st-place')).toBe('1stPlace')
    })
  })

  describe('Реальные сценарии использования в дизайн-системе', () => {
    it('должен корректно формировать имя свойства v-model (ModelInclude)', () => {
      expect(toCamelCaseFirst('value')).toBe('Value')
      expect(toCamelCaseFirst('model-value')).toBe('ModelValue')
    })

    it('должен корректно формировать имена плагинов Vite (LibraryPlugin)', () => {
      const design = 'd1'
      expect(`ui${toCamelCaseFirst(design)}VitePlugin`).toBe('uiD1VitePlugin')
    })
  })
})
