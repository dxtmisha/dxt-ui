import { describe, it, expect, beforeEach } from 'vitest'
import { Geo } from '../Geo'
import { GeoUnit } from '../GeoUnit'

describe('GeoUnit', () => {
  beforeEach(() => {
    // Reset to default location
    Geo.set('en-US')
  })

  it('should return request-isolated or cached instances via getInstance', () => {
    const instance1 = GeoUnit.getInstance('en-US')
    const instance2 = GeoUnit.getInstance('en-US')
    expect(instance1).toBe(instance2)
  })

  it('should format metric unit without conversion for metric countries (e.g. ru-RU)', () => {
    Geo.set('ru-RU')
    const geoUnit = new GeoUnit()

    // 1000 grams should format to 1 000 g (or 1000 g)
    const formatted = geoUnit.gram(1000)
    expect(formatted).toContain('1 000')
    expect(formatted).toContain('г')
  })

  it('should convert and format unit for non-metric countries (e.g. en-US)', () => {
    Geo.set('en-US')
    const geoUnit = new GeoUnit()

    // 1000 grams should convert to ~35.274 ounces
    const formatted = geoUnit.gram(1000)
    expect(formatted).toContain('35.274')
    expect(formatted).toContain('oz')
  })

  it('should convert and format temperature for en-US', () => {
    Geo.set('en-US')
    const geoUnit = new GeoUnit()

    // 0 celsius should be 32 fahrenheit
    const formatted = geoUnit.celsius(0)
    expect(formatted).toContain('32')
    expect(formatted).toContain('F')
  })

  it('should convert and format speed for en-US', () => {
    Geo.set('en-US')
    const geoUnit = new GeoUnit()

    // 100 km/h should be ~62.137 mph
    const formatted = geoUnit.kilometerPerHour(100)
    expect(formatted).toContain('62.137')
    expect(formatted).toContain('mph')
  })

  it('should convert and format length for en-US', () => {
    Geo.set('en-US')
    const geoUnit = new GeoUnit()

    // 100 meters should be ~328.084 ft
    const formatted = geoUnit.meter(100)
    expect(formatted).toContain('328.084')
    expect(formatted).toContain('ft')
  })

  it('should format via the general format() method', () => {
    Geo.set('en-US')
    const geoUnit = new GeoUnit()

    const formattedGram = geoUnit.format(1000, 'gram')
    expect(formattedGram).toContain('35.274')
    expect(formattedGram).toContain('oz')

    const formattedTemp = geoUnit.format(0, 'celsius')
    expect(formattedTemp).toContain('32')
    expect(formattedTemp).toContain('F')

    // fallback for unknown unit
    expect(geoUnit.format(100, 'unknown-unit')).toBe('100')
  })
})
