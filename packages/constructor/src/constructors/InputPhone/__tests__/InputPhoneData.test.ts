// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { InputPhoneData } from '../InputPhoneData'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

describe('InputPhoneData', () => {
  it('should initialize and resolve defaults', () => {
    const mockValue = {
      item: ref(''),
      set: vi.fn()
    } as any

    const data = new InputPhoneData({ countryDefault: 'US' }, mockValue)
    expect(data.country.value).toBe('US')
  })
})
