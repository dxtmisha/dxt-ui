import { describe, expect, it, vi } from 'vitest'
import { ServerStorage, Cookie } from '@dxtmisha/functional-basic'
import { GeoRef } from '../GeoRef'

vi.mock('@dxtmisha/functional-basic', async (importOriginal) => {
  const original = await importOriginal<typeof import('@dxtmisha/functional-basic')>()
  return {
    ...original,
    isDomRuntime: vi.fn(() => false)
  }
})

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

  it('should set default value via setValueDefault', () => {
    Cookie.getInstance('ui-geo-code').remove()
    ServerStorage.remove('__ui:geo-instance__')

    GeoRef.setValueDefault('de-DE')
    expect(GeoRef.getStandard().value).toBe('de-DE')
  })
})
