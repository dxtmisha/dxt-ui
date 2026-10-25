/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
import { FormattersType, ServerStorage } from '@dxtmisha/functional-basic'
import { GeoRef } from '../../../classes/ref/GeoRef'
import { useFormattersRef } from '../useFormattersRef'

describe('useFormattersRef', () => {
  beforeEach(() => {
    ServerStorage.reset()
    GeoRef.set('en-US')
  })

  afterEach(() => {
    ServerStorage.reset()
  })

  const options = {
    price: { type: FormattersType.currency },
    count: { type: FormattersType.number },
    custom: {
      transformation: (val: any) => `custom-${val}`
    }
  }

  const listData = [
    {
      price: 100,
      currency: 'USD',
      count: 1234.56,
      custom: 'value'
    }
  ]

  it('should format data correctly', () => {
    const list = ref([...listData])
    const { listFormat } = useFormattersRef(list, options)

    const result = listFormat.value
    expect(result).toHaveLength(1)
    expect(result[0]?.priceFormat).toContain('$100.00')
    expect(result[0]?.countFormat).toBe('1,234.56')
    expect(result[0]?.customFormat).toBe('custom-value')
  })

  it('should be reactive when the list changes', () => {
    const list = ref([...listData])
    const { listFormat } = useFormattersRef(list, options)

    expect(listFormat.value[0]?.priceFormat).toContain('$100.00')

    list.value = [
      {
        price: 200,
        currency: 'EUR',
        count: 50,
        custom: 'new'
      }
    ]

    const result = listFormat.value
    expect(result[0]?.priceFormat).toContain('€200.00')
    expect(result[0]?.countFormat).toBe('50')
    expect(result[0]?.customFormat).toBe('custom-new')
  })

  it('should handle an empty list', () => {
    const list = ref([])
    const { listFormat } = useFormattersRef(list, options)
    expect(listFormat.value).toEqual([])
  })

  it.each(['de-DE', 'fr-FR', 'vi-VN'])('should update a saved computed when the locale changes to %s', (locale) => {
    const list = ref([{ count: 1234.5 }])
    const source = list.value
    const formatters = useFormattersRef(list, { count: { type: FormattersType.number } })
    const listFormat = formatters.listFormat

    expect(listFormat.value[0]?.countFormat).toBe('1,234.5')

    GeoRef.set(locale)

    expect(formatters.listFormat).toBe(listFormat)
    expect(listFormat.value[0]?.countFormat).toBe(new Intl.NumberFormat(locale).format(1234.5))
    expect(list.value).toBe(source)
    expect(list.value).toEqual([{ count: 1234.5 }])
    expect(formatters.length.value).toBe(1)

    list.value = [{ count: 2000.5 }]
    expect(listFormat.value[0]?.countFormat).toBe(new Intl.NumberFormat(locale).format(2000.5))

    GeoRef.set('en-US')
    expect(listFormat.value[0]?.countFormat).toBe('2,000.5')
  })

  it('should update formatting for a single object when the locale changes', () => {
    const item = ref({ count: 1234.5 })
    const { listFormat, length } = useFormattersRef(item, { count: { type: FormattersType.number } })

    expect(listFormat.value?.countFormat).toBe('1,234.5')

    GeoRef.set('de-DE')

    expect(listFormat.value?.countFormat).toBe('1.234,5')
    expect(length.value).toBe(1)
    expect(item.value).toEqual({ count: 1234.5 })
  })

  it('should update currency and dates when the region changes within the same language', () => {
    const date = new Date('2024-12-31T12:00:00Z')
    const dateOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      timeZone: 'UTC'
    }
    const list = ref([{ price: 1234.5, currency: 'USD', createdAt: date.toISOString() }])
    const { listFormat } = useFormattersRef(list, {
      price: { type: FormattersType.currency },
      createdAt: { type: FormattersType.date, options: { type: 'date' as const, options: dateOptions } }
    })

    expect(listFormat.value[0]?.priceFormat).toBe('$1,234.50')
    expect(listFormat.value[0]?.createdAtFormat).toBe('12/31/2024')
    const language = GeoRef.getLanguage().value

    GeoRef.set('en-GB')

    expect(GeoRef.getLanguage().value).toBe(language)
    expect(listFormat.value[0]?.priceFormat).toBe(new Intl.NumberFormat('en-GB', {
      style: 'currency', currency: 'USD'
    }).format(1234.5))
    expect(listFormat.value[0]?.createdAtFormat).toBe('31/12/2024')
  })

  it('should return the same computed instance on multiple accesses', () => {
    const list = ref([...listData])

    // After the fix, accessing listFormat returns the same computed instance.
    const result = useFormattersRef(list, options)
    const comp1 = result.listFormat
    const comp2 = result.listFormat

    // They should now be the same instance
    expect(comp1).toBe(comp2)

    // And it should work and be reactive
    expect(comp1.value[0]?.priceFormat).toContain('$100.00')

    if (list.value[0]) {
      list.value[0].price = 300
    }

    expect(comp1.value[0]?.priceFormat).toContain('$300.00')
    expect(comp2.value[0]?.priceFormat).toContain('$300.00')
  })
})
