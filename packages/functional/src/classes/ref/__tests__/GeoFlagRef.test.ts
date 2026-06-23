import { describe, it, expect, beforeEach } from 'vitest'
import { GeoFlagRef } from '../GeoFlagRef'
import { ref, nextTick } from 'vue'

describe('GeoFlagRef', () => {
  let geoFlagRef: GeoFlagRef
  const initialCode = 'RU'

  beforeEach(() => {
    geoFlagRef = new GeoFlagRef(initialCode)
  })

  describe('initialization and reactivity', () => {
    it('initializes correctly with a string code', () => {
      expect(geoFlagRef.getCode()).toBe(initialCode)
    })

    it('initializes correctly with a ref code', () => {
      const codeRef = ref('EN')
      const gr = new GeoFlagRef(codeRef)
      expect(gr.getCode()).toBe('EN')
    })

    it('updates when the code ref changes', async () => {
      const codeRef = ref('RU')
      const gr = new GeoFlagRef(codeRef)
      expect(gr.getCode()).toBe('RU')

      codeRef.value = 'US'
      await nextTick()

      expect(gr.getCode()).toBe('US')
      // Check if the derived flag data also updates
      expect(gr.getFlag().value).toBeDefined()
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
