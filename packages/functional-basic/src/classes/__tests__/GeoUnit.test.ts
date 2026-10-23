import { describe, it, expect, beforeEach } from 'vitest'
import { Geo } from '../Geo'
import { GeoUnit } from '../GeoUnit'

describe('GeoUnit', () => {
  beforeEach(() => {
    Geo.set('en-US')
  })

  it('should return cached instances via getInstance and constructor and expose getLocation()', () => {
    const firstInstance = GeoUnit.getInstance('en-US')
    const secondInstance = GeoUnit.getInstance('en-US')
    const thirdInstance = new GeoUnit('en-US')

    expect(firstInstance).toBe(secondInstance)
    expect(firstInstance).toBe(thirdInstance)
    expect(firstInstance.getLocation()).toBe('en-US')

    const frenchInstance = GeoUnit.getInstance('fr-FR')
    expect(frenchInstance.getLocation()).toBe('fr-FR')
  })

  it('should format all metric units without conversion for metric countries (ru-RU)', () => {
    Geo.set('ru-RU')
    const geoUnit = new GeoUnit('ru-RU')

    expect(geoUnit.millimeter(10)).toContain('10')
    expect(geoUnit.centimeter(10)).toContain('10')
    expect(geoUnit.meter(10)).toContain('10')
    expect(geoUnit.kilometer(10)).toContain('10')
    expect(geoUnit.squareMeter(10)).toContain('10')
    expect(geoUnit.hectare(10)).toContain('10')
    expect(geoUnit.gram(1000)).toContain('1\u00A0000')
    expect(geoUnit.kilogram(10)).toContain('10')
    expect(geoUnit.tonne(10)).toContain('10')
    expect(geoUnit.milliliter(10)).toContain('10')
    expect(geoUnit.liter(10)).toContain('10')
    expect(geoUnit.celsius(0)).toContain('0')
    expect(geoUnit.kilometerPerHour(100)).toContain('100')
  })

  it('should convert and format distance, area, weight, volume, temperature, and speed units for non-metric countries (en-US)', () => {
    Geo.set('en-US')
    const geoUnit = new GeoUnit('en-US')

    // Distance
    expect(geoUnit.millimeter(100)).toContain('3.937')
    expect(geoUnit.millimeter(100)).toContain('in')

    expect(geoUnit.centimeter(10)).toContain('3.937')
    expect(geoUnit.centimeter(10)).toContain('in')

    expect(geoUnit.meter(100)).toContain('328.084')
    expect(geoUnit.meter(100)).toContain('ft')

    expect(geoUnit.kilometer(100)).toContain('62.137')
    expect(geoUnit.kilometer(100)).toContain('mi')

    // Area
    expect(geoUnit.squareMeter(10)).toContain('107.639')

    expect(geoUnit.hectare(10)).toContain('24.711')
    expect(geoUnit.hectare(10)).toContain('ac')

    // Weight
    expect(geoUnit.gram(1000)).toContain('35.274')
    expect(geoUnit.gram(1000)).toContain('oz')

    expect(geoUnit.kilogram(10)).toContain('22.046')
    expect(geoUnit.kilogram(10)).toContain('lb')

    expect(geoUnit.tonne(10)).toContain('11.023')

    // Volume
    expect(geoUnit.milliliter(100)).toContain('3.381')
    expect(geoUnit.milliliter(100)).toContain('fl oz')

    expect(geoUnit.liter(10)).toContain('2.642')
    expect(geoUnit.liter(10)).toContain('gal')

    // Temperature
    expect(geoUnit.celsius(0)).toContain('32')
    expect(geoUnit.celsius(0)).toContain('F')

    // Speed
    expect(geoUnit.kilometerPerHour(100)).toContain('62.137')
    expect(geoUnit.kilometerPerHour(100)).toContain('mph')
  })

  it('should format all supported units via the general format() method and fallback for unknown units', () => {
    Geo.set('en-US')
    const geoUnit = new GeoUnit('en-US')

    expect(geoUnit.format(100, 'millimeter')).toContain('in')
    expect(geoUnit.format(10, 'centimeter')).toContain('in')
    expect(geoUnit.format(100, 'meter')).toContain('ft')
    expect(geoUnit.format(100, 'kilometer')).toContain('mi')
    expect(geoUnit.format(10, 'square-meter')).toContain('107.639')
    expect(geoUnit.format(10, 'hectare')).toContain('ac')
    expect(geoUnit.format(1000, 'gram')).toContain('oz')
    expect(geoUnit.format(10, 'kilogram')).toContain('lb')
    expect(geoUnit.format(10, 'tonne')).toContain('11.023')
    expect(geoUnit.format(100, 'milliliter')).toContain('fl oz')
    expect(geoUnit.format(10, 'liter')).toContain('gal')
    expect(geoUnit.format(0, 'celsius')).toContain('32')
    expect(geoUnit.format(100, 'kilometer-per-hour')).toContain('mph')

    // Fallback for unknown unit
    expect(geoUnit.format(100, 'unknown-unit')).toBe('100')
  })
})
