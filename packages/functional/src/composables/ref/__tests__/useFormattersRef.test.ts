/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { ref } from 'vue'
import { FormattersType, Geo } from '@dxtmisha/functional-basic'
import { useFormattersRef } from '../useFormattersRef'

describe('useFormattersRef', () => {
  beforeEach(() => {
    Geo.set('en-US')
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

  it('should create a new computed on each access to the getter (current behavior check)', () => {
    const list = ref([...listData])

    // In the current implementation, a check call to listFormat (the getter) returns a NEW computed.
    // However, the object returned by useFormattersRef is { get listFormat() { ... } }

    const result1 = useFormattersRef(list, options)
    const comp1 = result1.listFormat
    const comp2 = result1.listFormat

    // They should be different instances if my review was correct
    expect(comp1).not.toBe(comp2)

    // But they both should work and be reactive
    expect(comp1.value[0]?.priceFormat).toContain('$100.00')
    expect(comp2.value[0]?.priceFormat).toContain('$100.00')

    if (list.value[0]) {
      list.value[0].price = 300
    }

    expect(comp1.value[0]?.priceFormat).toContain('$300.00')
    expect(comp2.value[0]?.priceFormat).toContain('$300.00')
  })
})
