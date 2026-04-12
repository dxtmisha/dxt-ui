import { describe, it, expect, beforeEach } from 'vitest'
import { ApiDefault } from '../ApiDefault'

describe('ApiDefault / Параметры запроса по умолчанию', () => {
  let apiDefault: ApiDefault

  beforeEach(() => {
    apiDefault = new ApiDefault()
  })

  // ─────────────────────────────────────────────
  // Presence Checks
  // ─────────────────────────────────────────────

  describe('is / Проверка наличия данных', () => {
    it('should return false when no default data is set / должен возвращать false, если данные по умолчанию не установлены', () => {
      expect(apiDefault.is()).toBe(false)
    })

    it('should return true when default data is set / должен возвращать true, если данные по умолчанию установлены', () => {
      apiDefault.set({ key: 'value' })
      expect(apiDefault.is()).toBe(true)
    })

    it('should return false after setting undefined / должен возвращать false после установки undefined', () => {
      apiDefault.set({ key: 'value' })
      apiDefault.set(undefined as any)
      expect(apiDefault.is()).toBe(false)
    })
  })

  // ─────────────────────────────────────────────
  // Data Accessors
  // ─────────────────────────────────────────────

  describe('get / Получение данных', () => {
    it('should return undefined when no default data is set / должен возвращать undefined, если данные по умолчанию не установлены', () => {
      expect(apiDefault.get()).toBeUndefined()
    })

    it('should return the default data / должен возвращать данные по умолчанию', () => {
      const data = { foo: 'bar', num: 42 }
      apiDefault.set(data)
      expect(apiDefault.get()).toEqual(data)
    })

    it('should return the same reference / должен возвращать ту же ссылку на объект', () => {
      const data = { key: 'value' }
      apiDefault.set(data)
      expect(apiDefault.get()).toBe(data)
    })
  })

  describe('set / Установка данных', () => {
    it('should set default data / должен устанавливать данные по умолчанию', () => {
      const data = { test: 'data' }
      apiDefault.set(data)
      expect(apiDefault.get()).toEqual(data)
    })

    it('should overwrite existing default data / должен перезаписывать существующие данные по умолчанию', () => {
      apiDefault.set({ old: 'data' })
      const newData = { new: 'data' }
      apiDefault.set(newData)
      expect(apiDefault.get()).toEqual(newData)
    })

    it('should accept complex objects / должен принимать сложные объекты', () => {
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

  // ─────────────────────────────────────────────
  // Request Transformation
  // ─────────────────────────────────────────────

  describe('request / Обработка запроса', () => {
    it('should return original request when no defaults are set / должен возвращать исходный запрос, когда данные по умолчанию не установлены', () => {
      const request = { key: 'value' }
      expect(apiDefault.request(request)).toEqual(request)
    })

    it('should merge defaults with object request / должен объединять данные по умолчанию с объектом запроса', () => {
      apiDefault.set({ default1: 'value1', default2: 'value2' })
      const request = { custom: 'data' }
      const result = apiDefault.request(request)

      expect(result).toEqual({
        default1: 'value1',
        default2: 'value2',
        custom: 'data'
      })
    })

    it('should prioritize request data over defaults / должен отдавать приоритет данным запроса перед данными по умолчанию', () => {
      apiDefault.set({ key: 'default' })
      const request = { key: 'custom' }
      const result = apiDefault.request(request)

      expect(result).toEqual({ key: 'custom' })
    })

    it('should handle FormData requests / должен обрабатывать запросы FormData', () => {
      apiDefault.set({ defaultKey: 'defaultValue' })
      const formData = new FormData()
      formData.set('existingKey', 'existingValue')

      const result = apiDefault.request(formData) as FormData

      expect(result).toBeInstanceOf(FormData)
      expect(result.get('existingKey')).toBe('existingValue')
      expect(result.get('defaultKey')).toBe('defaultValue')
    })

    it('should not overwrite existing FormData entries / не должен перезаписывать существующие записи FormData', () => {
      apiDefault.set({ key: 'default' })
      const formData = new FormData()
      formData.set('key', 'existing')

      const result = apiDefault.request(formData) as FormData

      expect(result.get('key')).toBe('existing')
    })

    it('should return FormData as-is when no defaults set / должен возвращать FormData как есть, когда данные по умолчанию не установлены', () => {
      const formData = new FormData()
      formData.set('key', 'value')

      const result = apiDefault.request(formData)

      expect(result).toBe(formData)
      expect((result as FormData).get('key')).toBe('value')
    })

    it('should handle string request without modification / должен возвращать строковый запрос без изменений', () => {
      apiDefault.set({ key: 'value' })
      const stringRequest = 'some-string-data'

      expect(apiDefault.request(stringRequest)).toBe(stringRequest)
    })

    it('should handle undefined request / должен корректно обрабатывать undefined запрос', () => {
      apiDefault.set({ key: 'value' })
      expect(apiDefault.request(undefined)).toBeUndefined()
    })

    it('should handle array request without modification / должен возвращать массив без изменений', () => {
      apiDefault.set({ key: 'value' })
      const arrayRequest = [1, 2, 3]

      expect(apiDefault.request(arrayRequest)).toBe(arrayRequest)
    })
  })

  // ─────────────────────────────────────────────
  // Interals & Integration
  // ─────────────────────────────────────────────

  describe('FormData integration / Интеграция с FormData', () => {
    it('should add default values to FormData via request / должен добавлять значения по умолчанию в FormData через метод request', () => {
      apiDefault.set({ key1: 'value1', key2: 'value2' })
      const formData = new FormData()

      const result = apiDefault.request(formData) as FormData

      expect(result.get('key1')).toBe('value1')
      expect(result.get('key2')).toBe('value2')
    })
  })

  describe('integration workflow / Рабочий процесс интеграции', () => {
    it('should handle complete workflow / должен обрабатывать полный жизненный цикл', () => {
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
