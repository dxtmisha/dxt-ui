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
      expect(geoFlagRef.getCode().value).toBe(initialCode)
    })

    it('initializes correctly with a ref code', () => {
      const codeRef = ref('EN')
      const gr = new GeoFlagRef(codeRef)
      expect(gr.getCode().value).toBe('EN')
    })

    it('updates when the code ref changes', async () => {
      const codeRef = ref('RU')
      const gr = new GeoFlagRef(codeRef)
      expect(gr.getCode().value).toBe('RU')

      codeRef.value = 'US'
      await nextTick()

      expect(gr.getCode().value).toBe('US')
      // Check if the derived flag data also updates
      expect(gr.getFlag().value).toBeDefined()
    })
  })

  describe('Information Retrieval Methods', () => {
    it('getCode returns the reactive code', () => {
      expect(geoFlagRef.getCode().value).toBe(initialCode)
    })

    it('get returns flag information for a code', () => {
      const info = geoFlagRef.get('US').value
      expect(info).toBeDefined()
      expect(info?.icon).toBeDefined()
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

    it('getNational returns a list of countries in national language', () => {
      const list = geoFlagRef.getNational(['RU', 'US']).value
      expect(list.length).toBe(2)
      expect(list[0]?.label).toBeDefined()
    })
  })
})
