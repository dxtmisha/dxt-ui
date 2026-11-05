// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ErrorCenter } from '../ErrorCenter'
import { Geo } from '../Geo'
import { GeoList } from '../GeoList'
import { GeoUnit } from '../GeoUnit'

describe('GeoUnit', () => {
  beforeEach(() => {
    ErrorCenter.setIsConsole(false)
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

    expect(GeoUnit.getInstance('toString')).toBe(firstInstance)
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

  it('should keep the converted unit while applying display options', () => {
    const geoUnit = new GeoUnit('en-US')

    expect(geoUnit.meter(1, { unit: 'meter' })).toBe('3.281 ft')
    expect(geoUnit.meter(1, { style: 'percent' })).toBe('3.281 ft')
    expect(geoUnit.meter(1, { maximumFractionDigits: 1, unitDisplay: 'long' })).toBe('3.3 feet')
    expect(geoUnit.squareMeter(10, { style: 'percent', maximumFractionDigits: 1 })).toBe('107.6 sq ft')
  })

  it('should keep the source unit when the configured conversion is unavailable', () => {
    Geo.add('GB', { unit: { meter: 'yard' } })

    try {
      expect(new GeoUnit('en-GB').meter(1)).toBe('1 m')
    } finally {
      GeoList.reset()
    }
  })

  it('should format area and tonnes without sending errors for text fallback units', () => {
    const callback = vi.fn()
    ErrorCenter.addCallback(callback)

    try {
      const imperial = new GeoUnit('en-US')
      const metric = new GeoUnit('ru-RU')

      expect(imperial.squareMeter(10)).toBe('107.639 sq ft')
      expect(imperial.tonne(10)).toBe('11.023 tn')
      expect(metric.squareMeter(1)).toBe('1 m²')
      expect(metric.squareMeter(1.5)).toBe('1,5 m²')
      expect(metric.tonne(1)).toBe('1 t')
      expect(metric.tonne(10)).toBe('10 t')
      expect(callback).not.toHaveBeenCalled()
    } finally {
      ErrorCenter.removeCallback(callback)
    }
  })
})
