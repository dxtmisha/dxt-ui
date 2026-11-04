// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { inject } from 'vue'
import { FieldFormInclude } from '../FieldFormInclude'
import type { FieldValidationInclude } from '../FieldValidationInclude'
import type { FieldValueInclude } from '../FieldValueInclude'
import type { FormElementRegistration } from '../../../constructors/Form/basicTypes'

// Mocking vue's inject function
vi.mock('vue', () => ({
  inject: vi.fn()
}))

describe('FieldFormInclude', () => {
  let mockContext: {
    register: ReturnType<typeof vi.fn>
    updateData: ReturnType<typeof vi.fn>
    getValue: ReturnType<typeof vi.fn>
  }
  let formInclude: FieldFormInclude

  beforeEach(() => {
    vi.clearAllMocks()

    mockContext = {
      register: vi.fn(),
      updateData: vi.fn(),
      getValue: vi.fn()
    }
  })

  describe('static is()', () => {
    it('should return true only when props.name is non-empty', () => {
      expect(FieldFormInclude.is({ name: 'username' })).toBe(true)
      expect(FieldFormInclude.is({ name: '' })).toBe(false)
      expect(FieldFormInclude.is({})).toBe(false)
      expect(FieldFormInclude.is(undefined)).toBe(false)
    })
  })

  describe('getElement', () => {
    it('should return undefined if name is missing', () => {
      const include = new FieldFormInclude(
        {},
        () => ({}) as unknown as FieldValueInclude,
        () => ({}) as unknown as FieldValidationInclude
      )
      expect(include.getElement()).toBeUndefined()
    })

    it('should return formatted element record with extra parameters and auto-register on construction', () => {
      vi.mocked(inject).mockReturnValue(mockContext as unknown as FormElementRegistration)
      const mockProps = { name: 'email' }
      const mockValue = {
        expose: () => ({ value: { value: 'abc' }, getValue: () => 'abc', setValue: vi.fn(), clear: vi.fn() })
      } as unknown as FieldValueInclude
      const mockValidation = {
        item: { value: { status: true, value: 'abc' } },
        expose: () => ({ checkValidity: () => true, getValidationMessage: () => '' })
      } as unknown as FieldValidationInclude

      const include = new FieldFormInclude(
        mockProps,
        () => mockValue,
        () => mockValidation,
        () => ({ customExtra: true })
      )
      const element = include.getElement()

      expect(element).toBeDefined()
      expect(element?.name).toBe('email')
      expect(element?.data).toEqual({ status: true, value: 'abc' })
      expect(element?.getValue?.()).toBe('abc')
      expect(element?.checkValidity?.()).toBe(true)
      expect((element as Record<string, unknown>)?.customExtra).toBe(true)
      expect(mockContext.register).toHaveBeenCalledTimes(1)
    })
  })

  describe('getValue', () => {
    it('should call getValue on context and return its result if context exists', () => {
      mockContext.getValue.mockReturnValue('testValue')
      vi.mocked(inject).mockReturnValue(mockContext as unknown as FormElementRegistration)
      formInclude = new FieldFormInclude(
        {},
        () => ({}) as unknown as FieldValueInclude,
        () => ({}) as unknown as FieldValidationInclude
      )

      const result = formInclude.getValue('username')

      expect(mockContext.getValue).toHaveBeenCalledWith('username')
      expect(mockContext.getValue).toHaveBeenCalledTimes(1)
      expect(result).toBe('testValue')
    })

    it('should return undefined if context does not exist', () => {
      vi.mocked(inject).mockReturnValue(undefined)
      formInclude = new FieldFormInclude(
        {},
        () => ({}) as unknown as FieldValueInclude,
        () => ({}) as unknown as FieldValidationInclude
      )

      expect(formInclude.getValue('username')).toBeUndefined()
    })
  })

  describe('updateData', () => {
    const mockData = { value: 'updated', status: false }

    it('should call updateData on context if context exists', () => {
      vi.mocked(inject).mockReturnValue(mockContext as unknown as FormElementRegistration)
      formInclude = new FieldFormInclude(
        {},
        () => ({}) as unknown as FieldValueInclude,
        () => ({}) as unknown as FieldValidationInclude
      )
      const mockEvent = { type: 'input' } as unknown as InputEvent

      formInclude.updateData(mockData, mockEvent)

      expect(mockContext.updateData).toHaveBeenCalledWith(formInclude.id, mockData, mockEvent)
      expect(mockContext.updateData).toHaveBeenCalledTimes(1)
    })

    it('should do nothing if context does not exist', () => {
      vi.mocked(inject).mockReturnValue(undefined)
      formInclude = new FieldFormInclude(
        {},
        () => ({}) as unknown as FieldValueInclude,
        () => ({}) as unknown as FieldValidationInclude
      )

      expect(() => formInclude.updateData({ value: 'x', status: true })).not.toThrow()
    })
  })
})
