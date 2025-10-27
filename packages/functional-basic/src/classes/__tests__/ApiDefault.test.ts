import { describe, it, expect, beforeEach } from 'vitest'
import { ApiDefault } from '../ApiDefault'

describe('ApiDefault', () => {
  let apiDefault: ApiDefault

  beforeEach(() => {
    apiDefault = new ApiDefault()
  })

  describe('is', () => {
    it('should return false when no default data is set', () => {
      expect(apiDefault.is()).toBe(false)
    })

    it('should return true when default data is set', () => {
      apiDefault.set({ key: 'value' })
      expect(apiDefault.is()).toBe(true)
    })

    it('should return false after setting undefined', () => {
      apiDefault.set({ key: 'value' })
      apiDefault.set(undefined as any)
      expect(apiDefault.is()).toBe(false)
    })
  })

  describe('get', () => {
    it('should return undefined when no default data is set', () => {
      expect(apiDefault.get()).toBeUndefined()
    })

    it('should return the default data', () => {
      const data = { foo: 'bar', num: 42 }
      apiDefault.set(data)
      expect(apiDefault.get()).toEqual(data)
    })

    it('should return the same reference', () => {
      const data = { key: 'value' }
      apiDefault.set(data)
      expect(apiDefault.get()).toBe(data)
    })
  })

  describe('set', () => {
    it('should set default data', () => {
      const data = { test: 'data' }
      apiDefault.set(data)
      expect(apiDefault.get()).toEqual(data)
    })

    it('should overwrite existing default data', () => {
      apiDefault.set({ old: 'data' })
      const newData = { new: 'data' }
      apiDefault.set(newData)
      expect(apiDefault.get()).toEqual(newData)
    })

    it('should accept complex objects', () => {
      const complexData = {
        string: 'text',
        number: 123,
        boolean: true,
        nested: { deep: { value: 'nested' } },
        array: [1, 2, 3]
      }
      apiDefault.set(complexData)
      expect(apiDefault.get()).toEqual(complexData)
    })
  })

  describe('request', () => {
    it('should return original request when no defaults are set', () => {
      const request = { key: 'value' }
      expect(apiDefault.request(request)).toEqual(request)
    })

    it('should merge defaults with object request', () => {
      apiDefault.set({ default1: 'value1', default2: 'value2' })
      const request = { custom: 'data' }
      const result = apiDefault.request(request)

      expect(result).toEqual({
        default1: 'value1',
        default2: 'value2',
        custom: 'data'
      })
    })

    it('should prioritize request data over defaults', () => {
      apiDefault.set({ key: 'default' })
      const request = { key: 'custom' }
      const result = apiDefault.request(request)

      expect(result).toEqual({ key: 'custom' })
    })

    it('should handle FormData requests', () => {
      apiDefault.set({ defaultKey: 'defaultValue' })
      const formData = new FormData()
      formData.set('existingKey', 'existingValue')

      const result = apiDefault.request(formData) as FormData

      expect(result).toBeInstanceOf(FormData)
      expect(result.get('existingKey')).toBe('existingValue')
      expect(result.get('defaultKey')).toBe('defaultValue')
    })

    it('should not overwrite existing FormData entries', () => {
      apiDefault.set({ key: 'default' })
      const formData = new FormData()
      formData.set('key', 'existing')

      const result = apiDefault.request(formData) as FormData

      expect(result.get('key')).toBe('existing')
    })

    it('should return FormData as-is when no defaults set', () => {
      const formData = new FormData()
      formData.set('key', 'value')

      const result = apiDefault.request(formData)

      expect(result).toBe(formData)
      expect((result as FormData).get('key')).toBe('value')
    })

    it('should handle string request without modification', () => {
      apiDefault.set({ key: 'value' })
      const stringRequest = 'some-string-data'

      expect(apiDefault.request(stringRequest)).toBe(stringRequest)
    })

    it('should handle undefined request', () => {
      apiDefault.set({ key: 'value' })
      expect(apiDefault.request(undefined)).toBeUndefined()
    })

    it('should handle array request without modification', () => {
      apiDefault.set({ key: 'value' })
      const arrayRequest = [1, 2, 3]

      expect(apiDefault.request(arrayRequest)).toBe(arrayRequest)
    })
  })

  describe('FormData integration', () => {
    it('should add default values to FormData via request', () => {
      apiDefault.set({ key1: 'value1', key2: 'value2' })
      const formData = new FormData()

      const result = apiDefault.request(formData) as FormData

      expect(result.get('key1')).toBe('value1')
      expect(result.get('key2')).toBe('value2')
    })

    it('should not overwrite existing FormData values via request', () => {
      apiDefault.set({ existing: 'default', new: 'value' })
      const formData = new FormData()
      formData.set('existing', 'original')

      const result = apiDefault.request(formData) as FormData

      expect(result.get('existing')).toBe('original')
      expect(result.get('new')).toBe('value')
    })

    it('should handle FormData with no defaults', () => {
      const formData = new FormData()
      formData.set('key', 'value')

      const result = apiDefault.request(formData) as FormData

      expect(result.get('key')).toBe('value')
    })

    it('should handle FormData with mixed existing and new values', () => {
      apiDefault.set({ b: 'overwrite', c: '3' })
      const formData = new FormData()
      formData.set('a', '1')
      formData.set('b', '2')

      const result = apiDefault.request(formData) as FormData

      expect(result.get('a')).toBe('1')
      expect(result.get('b')).toBe('2') // не перезаписывается
      expect(result.get('c')).toBe('3')
    })
  })

  describe('integration tests', () => {
    it('should work with typed generic', () => {
      interface CustomData {
        apiKey: string
        version: number
      }

      const typedDefault = new ApiDefault<CustomData>()
      typedDefault.set({ apiKey: 'secret', version: 1 })

      expect(typedDefault.get()).toEqual({ apiKey: 'secret', version: 1 })
      expect(typedDefault.is()).toBe(true)
    })

    it('should handle complete workflow', () => {
      // Установка дефолтных данных
      apiDefault.set({ token: 'abc123', userId: '42' })

      // Проверка наличия
      expect(apiDefault.is()).toBe(true)

      // Добавление к обычному объекту запроса
      const objectRequest = { action: 'getData' }
      const mergedObject = apiDefault.request(objectRequest)
      expect(mergedObject).toEqual({
        token: 'abc123',
        userId: '42',
        action: 'getData'
      })

      // Добавление к FormData
      const formData = new FormData()
      formData.set('file', 'test.jpg')
      const mergedFormData = apiDefault.request(formData) as FormData
      expect(mergedFormData.get('file')).toBe('test.jpg')
      expect(mergedFormData.get('token')).toBe('abc123')
      expect(mergedFormData.get('userId')).toBe('42')
    })
  })
})
