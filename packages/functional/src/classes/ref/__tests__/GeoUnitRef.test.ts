import { describe, it, expect, beforeEach } from 'vitest'
import { GeoUnitRef } from '../GeoUnitRef'
import { ref, nextTick } from 'vue'
import { Geo } from '@dxtmisha/functional-basic'

describe('GeoUnitRef', () => {
  beforeEach(() => {
    Geo.set('en-US')
  })

  it('should initialize correctly and format units reactively', async () => {
    const codeRef = ref('ru-RU')
    const geoUnitRef = new GeoUnitRef(codeRef)

    // Initially ru-RU (metric)
    const formattedGram = geoUnitRef.gram(1000)
    expect(formattedGram.value).toContain('1 000')
    expect(formattedGram.value).toContain('г')

    // Change locale to en-US
    codeRef.value = 'en-US'
    await nextTick()

    // Now en-US (imperial, converted to oz)
    expect(formattedGram.value).toContain('35.274')
    expect(formattedGram.value).toContain('oz')
  })

  it('should convert and format temperature reactively', async () => {
    const codeRef = ref('ru-RU')
    const geoUnitRef = new GeoUnitRef(codeRef)

    const formattedTemp = geoUnitRef.celsius(0)
    expect(formattedTemp.value).toContain('0')
    expect(formattedTemp.value).toContain('C')

    codeRef.value = 'en-US'
    await nextTick()

    expect(formattedTemp.value).toContain('32')
    expect(formattedTemp.value).toContain('F')
  })

  it('should support Ref values as inputs', async () => {
    const geoUnitRef = new GeoUnitRef('en-US')
    const valRef = ref(1000)

    const formattedGram = geoUnitRef.gram(valRef)
    expect(formattedGram.value).toContain('35.274')
    expect(formattedGram.value).toContain('oz')

    valRef.value = 2000
    await nextTick()

    expect(formattedGram.value).toContain('70.548')
    expect(formattedGram.value).toContain('oz')
  })
})
