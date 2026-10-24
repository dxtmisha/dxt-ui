import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { GeoFlag, ServerStorage } from '@dxtmisha/functional-basic'
import { GeoFlagRef } from '../GeoFlagRef'
import { GeoRef } from '../GeoRef'
import { ref, nextTick } from 'vue'

describe('GeoFlagRef', () => {
  let geoFlagRef: GeoFlagRef
  const initialCode = 'RU'

  beforeEach(() => {
    const context: Record<string, unknown> = {}
    ServerStorage.reset()
    ServerStorage.init(() => context)
    geoFlagRef = new GeoFlagRef(initialCode)
  })

  afterEach(() => {
    ServerStorage.reset()
  })

  describe('initialization and reactivity', () => {
    it('initializes correctly with a string code', () => {
      expect(geoFlagRef.getCode()).toBe(initialCode)
    })

    it('initializes correctly with a ref code', () => {
      const codeRef = ref('EN')
      const flags = new GeoFlagRef(codeRef)
      expect(flags.getCode()).toBe('EN')
    })

    it('updates when the code ref changes', async () => {
      const codeRef = ref('RU')
      const flags = new GeoFlagRef(codeRef)
      expect(flags.getCode()).toBe('RU')

      codeRef.value = 'US'
      await nextTick()

      expect(flags.getCode()).toBe('US')
      // Check if the derived flag data also updates
      expect(flags.getFlag().value).toBeDefined()
    })
  })

  describe.each(['get', 'getLanguage', 'getFlag'] as const)('%s code reactivity', (method) => {
    it('updates saved computed values with omitted or undefined code when the constructor ref changes', () => {
      const code = ref('ru-RU')
      const flags = new GeoFlagRef(code)
      const result = flags[method]()
      const explicitUndefined = flags[method](undefined)
      const initialResult = result.value
      expect(initialResult).toEqual(new GeoFlag('ru-RU')[method]())
      expect(explicitUndefined.value).toEqual(initialResult)

      code.value = 'en-US'

      const expected = new GeoFlag('en-US')[method]()
      expect(flags.getCode()).toBe('en-US')
      expect(result.value).toEqual(expected)
      expect(explicitUndefined.value).toEqual(expected)
      expect(result.value).not.toEqual(initialResult)

      code.value = 'ru-RU'

      expect(result.value).toEqual(initialResult)
      expect(explicitUndefined.value).toEqual(initialResult)
    })

    it('updates a saved computed value when the default GeoRef location changes', () => {
      GeoRef.set('ru-RU')
      const flags = new GeoFlagRef()
      const result = flags[method]()
      const initialResult = result.value
      expect(initialResult).toEqual(new GeoFlag('ru-RU')[method]())

      GeoRef.set('en-US')

      expect(flags.getCode()).toBe('en-US')
      expect(result.value).toEqual(new GeoFlag('en-US')[method]())
      expect(result.value).not.toEqual(initialResult)
    })

    it('preserves an explicit string code when the constructor code changes', () => {
      const code = ref('ru-RU')
      const flags = new GeoFlagRef(code)
      const result = flags[method]('FR')
      expect(result.value).toEqual(new GeoFlag('ru-RU')[method]('FR'))

      code.value = 'en-US'

      expect(result.value).toEqual(new GeoFlag('en-US')[method]('FR'))
      expect(result.value).not.toEqual(new GeoFlag('en-US')[method]())
    })

    it('tracks an explicit ref code and preserves its priority when the constructor code changes', () => {
      const code = ref('ru-RU')
      const explicitCode = ref('FR')
      const flags = new GeoFlagRef(code)
      const result = flags[method](explicitCode)
      expect(result.value).toEqual(new GeoFlag('ru-RU')[method]('FR'))

      explicitCode.value = 'DE'

      expect(result.value).toEqual(new GeoFlag('ru-RU')[method]('DE'))

      code.value = 'en-US'

      expect(result.value).toEqual(new GeoFlag('en-US')[method]('DE'))
      expect(result.value).not.toEqual(new GeoFlag('en-US')[method]())
    })
  })

  describe.each(['getList', 'getListLanguage', 'getNational', 'getNationalLanguage'] as const)('%s list boundaries', (method) => {
    it('reacts to code-list replacement and accepts an empty list', () => {
      const codes = ref<string[]>(['VN', 'RU'])
      const result = geoFlagRef[method](codes)
      expect(result.value).toEqual(new GeoFlag(initialCode)[method](['VN', 'RU']))
      expect(result.value).toHaveLength(2)
      codes.value = ['US']
      expect(result.value).toEqual(new GeoFlag(initialCode)[method](['US']))
      expect(result.value).toHaveLength(1)
      codes.value = []
      expect(result.value).toEqual([])
    })

    it('uses the full base catalog when codes are omitted', () => {
      const result = geoFlagRef[method]()
      expect(result.value).toEqual(new GeoFlag(initialCode)[method]())
      expect(result.value.length).toBeGreaterThan(0)
    })
  })

  describe('Information Retrieval Methods', () => {
    it('getCode returns the reactive code', () => {
      expect(geoFlagRef.getCode()).toBe(initialCode)
    })

    it('get returns flag information for a code', () => {
      const info = geoFlagRef.get('US').value
      expect(info).toBeDefined()
      expect(info?.countryCode).toBe('US')
      expect(info?.languageCode).toBe('en')
      expect(info?.icon).toBeDefined()
    })

    it('getLanguage returns language information for a code', () => {
      const info = geoFlagRef.getLanguage('ru-RU').value
      expect(info).toBeDefined()
      expect(info?.value).toBe('ru')
      expect(info?.languageCode).toBe('ru')
      expect(info?.countryCode).toBe('RU')
      expect(info?.label).toBe('русский')
      expect(info?.country).toBe('Россия')
      expect(info?.icon).toBe('f-ru')
    })

    it('getFlag returns the flag icon link', () => {
      const icon = geoFlagRef.getFlag('FR').value
      expect(typeof icon).toBe('string')
      expect(icon).toContain('f-fr')
    })

    it('getList returns a list of country flag items', () => {
      const list = geoFlagRef.getList(['RU', 'US']).value
      expect(list.length).toBe(2)
      expect(list[0]?.icon).toBeDefined()
    })

    it('getListLanguage returns a list of language flag items', () => {
      const list = geoFlagRef.getListLanguage(['RU', 'US']).value
      expect(list.length).toBe(2)
      expect(list[0]?.icon).toBeDefined()
      expect(list[1]?.value).toBe('ru')
    })

    it('getNational returns a list of countries in national language', () => {
      const list = geoFlagRef.getNational(['RU', 'US']).value
      expect(list.length).toBe(2)
      expect(list[0]?.label).toBeDefined()
    })

    it('getNationalLanguage returns a list of languages in national language', () => {
      const list = geoFlagRef.getNationalLanguage(['RU', 'US']).value
      expect(list.length).toBe(2)
      expect(list[1]?.label).toBe('русский')
      expect(list[1]?.description).toBe('русский')
    })
  })
})
