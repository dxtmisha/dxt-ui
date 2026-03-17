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
