// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { FieldMessageMessage } from '../FieldMessageMessage'
import type { FieldMessageSlots } from '../types'

describe('FieldMessageMessage', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return active message from item getter with validation priority over helper', () => {
      const empty = new FieldMessageMessage({})
      expect(empty.item).toBeUndefined()

      const helperOnly = new FieldMessageMessage({ helperMessage: 'Helper' })
      expect(helperOnly.item).toBe('Helper')

      const validationOnly = new FieldMessageMessage({ validationMessage: 'Validation' })
      expect(validationOnly.item).toBe('Validation')

      const both = new FieldMessageMessage({
        helperMessage: 'Helper',
        validationMessage: 'Validation'
      })
      expect(both.item).toBe('Validation')
    })

    it('should evaluate is(), isHelper(), and isValidation() from props and slots', () => {
      const empty = new FieldMessageMessage({})
      expect(empty.is()).toBe(false)
      expect(empty.isHelper()).toBe(false)
      expect(empty.isValidation()).toBe(false)

      const helperOnly = new FieldMessageMessage({ helperMessage: 'Helper' })
      expect(helperOnly.is()).toBe(true)
      expect(helperOnly.isHelper()).toBe(true)
      expect(helperOnly.isValidation()).toBe(false)

      const validationOnly = new FieldMessageMessage({ validationMessage: 'Validation' })
      expect(validationOnly.is()).toBe(true)
      expect(validationOnly.isHelper()).toBe(false)
      expect(validationOnly.isValidation()).toBe(true)

      const helperSlot: FieldMessageSlots = { helper: () => [] }
      const withHelperSlot = new FieldMessageMessage({}, helperSlot)
      expect(withHelperSlot.is()).toBe(true)
      expect(withHelperSlot.isHelper()).toBe(true)
      expect(withHelperSlot.isValidation()).toBe(false)

      const validationSlot: FieldMessageSlots = { validation: () => [] }
      const withValidationSlot = new FieldMessageMessage({}, validationSlot)
      expect(withValidationSlot.is()).toBe(true)
      expect(withValidationSlot.isHelper()).toBe(false)
      expect(withValidationSlot.isValidation()).toBe(true)
    })
  })

  describe('Boundary values, whitespace-only, and multilingual strings', () => {
    it('should treat empty and whitespace-only messages as inactive', () => {
      const whitespaceBoth = new FieldMessageMessage({
        helperMessage: '   \t\n',
        validationMessage: '   '
      })

      expect(whitespaceBoth.item).toBeUndefined()
      expect(whitespaceBoth.is()).toBe(false)
      expect(whitespaceBoth.isHelper()).toBe(false)
      expect(whitespaceBoth.isValidation()).toBe(false)
    })

    it('should fall back to helperMessage when validationMessage is whitespace-only', () => {
      const fallback = new FieldMessageMessage({
        helperMessage: 'Valid helper',
        validationMessage: '   '
      })

      expect(fallback.item).toBe('Valid helper')
      expect(fallback.is()).toBe(true)
      expect(fallback.isHelper()).toBe(true)
      expect(fallback.isValidation()).toBe(false)
    })

    it('should preserve Unicode, Cyrillic, Vietnamese diacritics, and Emoji strings', () => {
      const multilingual = new FieldMessageMessage({
        helperMessage: 'Подсказка tiếng Việt 🚀',
        validationMessage: 'Ошибка Nguyễn 🔒'
      })

      expect(multilingual.item).toBe('Ошибка Nguyễn 🔒')
      expect(multilingual.isHelper()).toBe(true)
      expect(multilingual.isValidation()).toBe(true)
    })
  })
})
