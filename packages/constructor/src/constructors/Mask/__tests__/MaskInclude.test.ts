import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { MaskInclude } from '../MaskInclude'
import type { MaskPropsInclude } from '../basicTypes'
import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import type { FieldTypeInclude } from '../../classes/Field/FieldTypeInclude'

describe('MaskInclude', () => {
  let mockPropsRef: ReturnType<typeof ref<MaskPropsInclude>>
  let mockValue: FieldValueInclude
  let mockType: FieldTypeInclude
  let maskInclude: MaskInclude

  beforeEach(() => {
    mockPropsRef = ref<MaskPropsInclude>({
      mask: '+1 (___) ___-____',
      maskNone: false,
      name: 'phoneInput',
      currency: 'USD',
      fraction: 2,
      modelValue: '123'
    })

    mockValue = {
      setFull: vi.fn()
    } as unknown as FieldValueInclude

    mockType = {
      get: vi.fn().mockReturnValue('text')
    } as unknown as FieldTypeInclude

    maskInclude = new MaskInclude(
      'd1-mask',
      () => mockPropsRef.value,
      undefined,
      undefined,
      undefined,
      mockValue,
      '',
      mockType
    )
  })

  it('should be active when mask string is provided', () => {
    expect(maskInclude.is).toBe(true)
    expect(maskInclude.active.value).toBe(true)
  })

  it('should not be active when maskNone is true', () => {
    mockPropsRef.value = {
      ...mockPropsRef.value,
      maskNone: true
    }
    expect(maskInclude.is).toBe(false)
  })

  it('should be active when type is a masked type even without explicit mask prop', () => {
    mockPropsRef.value = {
      ...mockPropsRef.value,
      mask: undefined
    }
    vi.mocked(mockType.get).mockReturnValue('currency')

    expect(maskInclude.is).toBe(true)
  })

  it('should assemble binds correctly via toBinds()', () => {
    const bindings = (maskInclude as any).toBinds()

    expect(bindings.name).toBe('phoneInput')
    expect(bindings.currency).toBe('USD')
    expect(bindings.fraction).toBe(2)
    expect(bindings.value).toBe('123')
  })

  it('should watch active state and call value.setFull(true) when deactivated', () => {
    mockPropsRef.value = {
      ...mockPropsRef.value,
      mask: undefined,
      maskNone: true
    }

    const active = maskInclude.active.value
    expect(active).toBe(false)
  })
})
