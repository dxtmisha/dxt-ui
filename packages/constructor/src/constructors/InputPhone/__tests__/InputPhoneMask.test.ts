// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { InputPhoneMask } from '../InputPhoneMask'

describe('InputPhoneMask', () => {
  it('should resolve mask and maskProps', () => {
    const mockData = {
      item: ref(undefined),
      valueDefault: ref('1')
    } as any
    const mockValue = {
      item: ref('123')
    } as any

    const mask = new InputPhoneMask({ countryBlock: true }, mockData, mockValue)
    expect(mask.mask).toBe('+************')
    expect(mask.maskProps.modelValue).toBeUndefined()
    expect(mask.maskProps.value).toBe('123')
  })
})
