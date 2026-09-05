import { describe, it, expect, vi, beforeEach } from 'vitest'
import { inject } from 'vue'
import { FieldFormInclude } from '../FieldFormInclude'

// Mocking vue's inject function
vi.mock('vue', () => ({
  inject: vi.fn()
}))

describe('FieldFormInclude', () => {
  let mockContext: any
  let formInclude: FieldFormInclude

  beforeEach(() => {
    vi.clearAllMocks()

    // Setup a mock context object with methods
    mockContext = {
      register: vi.fn(),
      updateData: vi.fn(),
      getValue: vi.fn()
    }
  })


  describe('getElement', () => {
    it('should return undefined if name is missing', () => {
      const include = new FieldFormInclude({} as any, {} as any, {} as any)
      expect(include.getElement()).toBeUndefined()
    })

    it('should return formatted element record if props, value, and validation are provided', () => {
      const mockProps = { name: 'email' } as any
      const mockValue = {
        expose: () => ({ value: { value: 'abc' }, getValue: () => 'abc', setValue: vi.fn(), clear: vi.fn() })
      } as any
      const mockValidation = {
        item: { value: { status: true, value: 'abc' } },
        expose: () => ({ checkValidity: () => true, getValidationMessage: () => '' })
      } as any

      const include = new FieldFormInclude(mockProps, mockValue, mockValidation)
      const element = include.getElement()

      expect(element).toBeDefined()
      expect(element?.name).toBe('email')
      expect(element?.data).toEqual({ status: true, value: 'abc' })
      expect(element?.getValue?.()).toBe('abc')
      expect(element?.checkValidity?.()).toBe(true)
    })
  })

  describe('getValue', () => {
    it('should call getValue on context and return its result if context exists', () => {
      mockContext.getValue.mockReturnValue('testValue')
      vi.mocked(inject).mockReturnValue(mockContext)
      formInclude = new FieldFormInclude({} as any, {} as any, {} as any)

      const result = formInclude.getValue('username')

      expect(mockContext.getValue).toHaveBeenCalledWith('username')
      expect(mockContext.getValue).toHaveBeenCalledTimes(1)
      expect(result).toBe('testValue')
    })

    it('should return undefined if context does not exist', () => {
      vi.mocked(inject).mockReturnValue(undefined)
      formInclude = new FieldFormInclude({} as any, {} as any, {} as any)

      expect(formInclude.getValue('username')).toBeUndefined()
    })
  })

  describe('register', () => {
    const mockElement = { name: 'username', type: 'text' } as any

    it('should call register on context if context exists', () => {
      vi.mocked(inject).mockReturnValue(mockContext)
      formInclude = new FieldFormInclude({} as any, {} as any, {} as any)

      ;(formInclude as any).register(mockElement)

      expect(mockContext.register).toHaveBeenCalledWith(mockElement)
      expect(mockContext.register).toHaveBeenCalledTimes(1)
    })

    it('should do nothing if context does not exist', () => {
      vi.mocked(inject).mockReturnValue(undefined)
      formInclude = new FieldFormInclude({} as any, {} as any, {} as any)

      // Should not throw an error
      expect(() => (formInclude as any).register(mockElement)).not.toThrow()
    })
  })

  describe('updateData', () => {
    const mockData = { value: 'updated', status: false }

    it('should call updateData on context if context exists', () => {
      vi.mocked(inject).mockReturnValue(mockContext)
      formInclude = new FieldFormInclude({} as any, {} as any, {} as any)
      const mockEvent = new InputEvent('input')

      formInclude.updateData('username', mockData, mockEvent)

      expect(mockContext.updateData).toHaveBeenCalledWith('username', mockData, mockEvent)
      expect(mockContext.updateData).toHaveBeenCalledTimes(1)
    })

    it('should do nothing if context does not exist', () => {
      vi.mocked(inject).mockReturnValue(undefined)
      formInclude = new FieldFormInclude({} as any, {} as any, {} as any)

      expect(() => formInclude.updateData('username', { value: 'x', status: true })).not.toThrow()
    })
  })
})
