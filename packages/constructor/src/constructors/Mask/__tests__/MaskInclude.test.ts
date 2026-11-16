import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { nextTick, ref, type Ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { MaskInclude } from '../MaskInclude'
import type { MaskPropsInclude } from '../basicTypes'
import type { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import type { FieldTypeInclude } from '../../../classes/Field/FieldTypeInclude'
import type { FieldType } from '../../../types/fieldTypes'

describe('MaskInclude', () => {
  let mockPropsRef: Ref<MaskPropsInclude>
  let mockValue: FieldValueInclude
  let mockTypeValue: Ref<FieldType | undefined>
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

    mockTypeValue = ref<FieldType | undefined>('text')
    mockType = {
      get: () => mockTypeValue.value
    } as unknown as FieldTypeInclude

    maskInclude = new MaskInclude(
      () => mockPropsRef.value,
      new DesignName('d1.mask'),
      undefined,
      undefined,
      undefined,
      () => mockValue,
      '',
      () => mockType
    )
    maskInclude.onMounted()
  })

  afterEach(() => {
    maskInclude.onUnmounted()
    vi.restoreAllMocks()
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

  it.each([
    'number',
    'number-format',
    'currency',
    'datetime',
    'date',
    'year-month',
    'time',
    'hour-minute'
  ] as const)('should be active when type is "%s" even without explicit mask prop', (type) => {
    mockPropsRef.value = {
      ...mockPropsRef.value,
      mask: undefined
    }
    mockTypeValue.value = type

    expect(maskInclude.is).toBe(true)
  })

  it('should assemble binds correctly via binds computed property for string and object masks', () => {
    const stringBindings = maskInclude.binds.value
    expect(stringBindings.name).toBe('phoneInput')
    expect(stringBindings.currency).toBe('USD')
    expect(stringBindings.fraction).toBe(2)
    expect(stringBindings.value).toBe('123')
    expect(stringBindings.mask).toBe('+1 (___) ___-____')

    mockPropsRef.value = {
      ...mockPropsRef.value,
      mask: { mask: '****', view: '0' },
      modelValue: undefined,
      value: '0'
    }

    const objectBindings = maskInclude.binds.value
    expect(objectBindings.mask).toBe('****')
    expect(objectBindings.view).toBe('0')
    expect(objectBindings.value).toBe('0')
  })

  it('should watch active state and call value.setFull(true) when deactivated and stop watching after onUnmounted', async () => {
    mockPropsRef.value = {
      ...mockPropsRef.value,
      mask: undefined,
      maskNone: true
    }
    await nextTick()

    expect(maskInclude.active.value).toBe(false)
    expect(mockValue.setFull).toHaveBeenCalledTimes(1)
    expect(mockValue.setFull).toHaveBeenCalledWith(true)

    maskInclude.onUnmounted()

    mockPropsRef.value = {
      ...mockPropsRef.value,
      mask: '****',
      maskNone: false
    }
    await nextTick()

    mockPropsRef.value = {
      ...mockPropsRef.value,
      mask: undefined,
      maskNone: true
    }
    await nextTick()

    expect(mockValue.setFull).toHaveBeenCalledTimes(1)
  })
})
