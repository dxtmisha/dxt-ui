import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { GeoUnitRef } from '../GeoUnitRef'
import { GeoRef } from '../GeoRef'
import { computed, ref, nextTick } from 'vue'
import { Geo, GeoUnit, ServerStorage } from '@dxtmisha/functional-basic'

beforeEach(() => {
  const context: Record<string, unknown> = {}
  ServerStorage.reset()
  ServerStorage.init(() => context)
  Geo.set('en-US')
})

afterEach(() => {
  ServerStorage.reset()
})

describe('GeoUnitRef', () => {
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
    const valueRef = ref(1000)

    const formattedGram = geoUnitRef.gram(valueRef)
    expect(formattedGram.value).toContain('35.274')
    expect(formattedGram.value).toContain('oz')

    valueRef.value = 2000
    await nextTick()

    expect(formattedGram.value).toContain('70.548')
    expect(formattedGram.value).toContain('oz')
  })

  it('should support reactive general format() method', async () => {
    const codeRef = ref('ru-RU')
    const unitRef = ref('gram')
    const valueRef = ref(1000)

    const geoUnitRef = new GeoUnitRef(codeRef)
    const formatted = geoUnitRef.format(valueRef, unitRef)

    // Initial: ru-RU, gram, 1000 -> 1000 g
    expect(formatted.value).toContain('1 000')
    expect(formatted.value).toContain('г')

    // Change unit reactively
    unitRef.value = 'celsius'
    valueRef.value = 0
    await nextTick()

    // Now: ru-RU, celsius, 0 -> 0 °C
    expect(formatted.value).toContain('0')
    expect(formatted.value).toContain('C')

    // Change locale reactively to US
    codeRef.value = 'en-US'
    await nextTick()

    // Now: en-US, celsius, 0 -> 32°F
    expect(formatted.value).toContain('32')
    expect(formatted.value).toContain('F')
  })
})

// Each method must preserve a saved computed while its inputs change.
describe('GeoUnitRef public unit contracts', () => {
  it.each([
    'millimeter', 'centimeter', 'meter', 'kilometer', 'squareMeter', 'hectare',
    'gram', 'kilogram', 'tonne', 'milliliter', 'liter', 'celsius', 'kilometerPerHour'
  ] as const)('keeps %s reactive for zero, negative values, options and locale changes', (method) => {
    const code = ref('ru-RU')
    const value = ref<number | string>(0)
    const formatter = new GeoUnitRef(code)
    const options: Intl.NumberFormatOptions = { maximumFractionDigits: 2 }
    const formatted = formatter[method](value, options)
    expect(formatted.value).toBe(new GeoUnit('ru-RU')[method](0, options))
    value.value = '-12.5'
    expect(formatted.value).toBe(new GeoUnit('ru-RU')[method]('-12.5', options))
    code.value = 'en-US'
    expect(formatted.value).toBe(new GeoUnit('en-US')[method]('-12.5', options))
  })

  it('returns a saved reactive location and keeps explicit locales independent', () => {
    const code = ref('en-US')
    const formatter = new GeoUnitRef(code)
    const location = formatter.getLocation()
    expect(location.value).toBe('en-US')
    code.value = 'vi-VN'
    expect(location.value).toBe('vi-VN')
    expect(new GeoUnitRef('ru-RU').getLocation().value).toBe('ru-RU')
  })

  it('tracks a computed numeric input and preserves unknown units as numeric text', () => {
    const source = ref(2)
    const value = computed(() => source.value * 10)
    const unit = ref('unsupported-unit')
    const formatter = new GeoUnitRef('en-US')
    const formatted = formatter.format(value, unit)
    expect(formatted.value).toBe('20')
    source.value = 0
    expect(formatted.value).toBe('0')
    unit.value = 'celsius'
    expect(formatted.value).toContain('32')
  })

  it('uses GeoRef only when no explicit locale was provided', () => {
    GeoRef.set('ru-RU')
    const fallback = new GeoUnitRef()
    const explicit = new GeoUnitRef('ru-RU')
    const fallbackValue = fallback.celsius(0)
    const explicitValue = explicit.celsius(0)
    expect(fallbackValue.value).toContain('C')
    GeoRef.set('en-US')
    expect(fallback.getLocation().value).toBe('en-US')
    expect(fallbackValue.value).toContain('32')
    expect(explicitValue.value).toContain('C')
  })

  it('switches between explicit locale ref and undefined GeoRef fallback dynamically', () => {
    GeoRef.set('ru-RU')
    const code = ref<string | undefined>(undefined)
    const formatter = new GeoUnitRef(code)
    const temperature = formatter.celsius(0)

    expect(formatter.getLocation().value).toBe('ru-RU')
    expect(temperature.value).toBe(new GeoUnit('ru-RU').celsius(0))

    code.value = 'en-US'
    expect(formatter.getLocation().value).toBe('en-US')
    expect(temperature.value).toBe(new GeoUnit('en-US').celsius(0))

    code.value = undefined
    expect(formatter.getLocation().value).toBe('ru-RU')
    expect(temperature.value).toBe(new GeoUnit('ru-RU').celsius(0))
  })

  it.each([
    ['millimeter', 'millimeter'],
    ['centimeter', 'centimeter'],
    ['meter', 'meter'],
    ['kilometer', 'kilometer'],
    ['square-meter', 'squareMeter'],
    ['hectare', 'hectare'],
    ['gram', 'gram'],
    ['kilogram', 'kilogram'],
    ['tonne', 'tonne'],
    ['milliliter', 'milliliter'],
    ['liter', 'liter'],
    ['celsius', 'celsius'],
    ['kilometer-per-hour', 'kilometerPerHour']
  ] as const)('delegates format("%s") identically to shortcut method %s across locales', (unitId, method) => {
    const code = ref('ru-RU')
    const value = ref<number | string>(25)
    const options: Intl.NumberFormatOptions = { maximumFractionDigits: 2 }
    const formatter = new GeoUnitRef(code)

    const viaFormat = formatter.format(value, unitId, options)
    const viaMethod = formatter[method](value, options)

    expect(viaFormat.value).toBe(viaMethod.value)

    code.value = 'en-US'
    value.value = -40
    expect(viaFormat.value).toBe(viaMethod.value)
  })
})
