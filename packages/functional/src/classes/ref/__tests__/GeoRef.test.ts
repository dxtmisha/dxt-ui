import { describe, expect, it } from 'vitest'
import { GeoRef } from '../GeoRef'

describe('GeoRef', () => {
  it('should return initial values', () => {
    const item = GeoRef.get()
    expect(item.value).toBeDefined()
    expect(item.value.country).toBeDefined()
    expect(item.value.language).toBeDefined()
  })

  it('should return computed values', () => {
    expect(GeoRef.getCountry().value).toBe(GeoRef.get().value.country)
    expect(GeoRef.getLanguage().value).toBe(GeoRef.get().value.language)
    expect(GeoRef.getStandard().value).toBe(GeoRef.get().value.standard)
    expect(GeoRef.getFirstDay().value).toBe(GeoRef.get().value.firstDay)
  })

  it('should update values when set is called', () => {
    GeoRef.set('en-US')
    expect(GeoRef.getCountry().value).toBe('US')
    expect(GeoRef.getLanguage().value).toBe('en')
    expect(GeoRef.getStandard().value).toBe('en-US')

    GeoRef.set('ru-RU')
    expect(GeoRef.getCountry().value).toBe('RU')
    expect(GeoRef.getLanguage().value).toBe('ru')
    expect(GeoRef.getStandard().value).toBe('ru-RU')
  })

  it('should maintain reactivity', () => {
    GeoRef.set('en-GB')
    const country = GeoRef.getCountry()
    expect(country.value).toBe('GB')

    GeoRef.set('vi-VN')
    expect(country.value).toBe('VN')
  })
})
