import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MaskFormat } from '../MaskFormat'
import type { MaskType } from '../MaskType'
import type { MaskRubberItem } from '../MaskRubberItem'
import type { MaskProps } from '../props'
import type { FieldMasks } from '../../types/fieldTypes'

describe('MaskFormat', () => {
  let mockProps: MaskProps
  let mockType: MaskType
  let mockRubberItem: MaskRubberItem
  let maskFormat: MaskFormat

  beforeEach(() => {
    mockProps = {
      fraction: 2,
      currency: 'USD',
      language: 'en-US'
    }

    mockType = {
      isNumber: vi.fn().mockReturnValue(false),
      isNumberFormat: vi.fn().mockReturnValue(false),
      isCurrency: vi.fn().mockReturnValue(false)
    } as unknown as MaskType

    mockRubberItem = {
      is: vi.fn().mockReturnValue(false),
      getByIndex: vi.fn().mockReturnValue(0)
    } as unknown as MaskRubberItem

    maskFormat = new MaskFormat(mockProps, mockType, mockRubberItem)
  })

  it('should provide special groups configuration', () => {
    expect(maskFormat.special.n).toBeDefined()
    expect(maskFormat.special.f?.defaultValue).toBe('0')
    expect(maskFormat.getSpecial()).toEqual(['n', 'f'])
  })

  it('should calculate fraction correctly', () => {
    // When fraction is number 2
    expect(maskFormat.fraction).toBe(2)

    // When currency is true
    vi.mocked(mockType.isCurrency).mockReturnValue(true)
    expect(maskFormat.fraction).toBe(2)

    // When fraction is string '3'
    vi.mocked(mockType.isCurrency).mockReturnValue(false)
    mockProps.fraction = '3'
    expect(maskFormat.fraction).toBe(3)

    // When fraction is boolean true
    mockProps.fraction = true
    expect(maskFormat.fraction).toBe(1)

    // When fraction is undefined
    mockProps.fraction = undefined
    expect(maskFormat.fraction).toBe(0)
  })

  it('should format standardized value via getValueStandard()', () => {
    const masks: FieldMasks = {
      n: { value: '100' } as any,
      f: { value: '50' } as any
    }

    expect(maskFormat.getValueStandard(masks)).toBe('100.50')

    vi.mocked(mockType.isNumber).mockReturnValue(true)
    expect(maskFormat.getValueStandard(masks)).toBe('100')
  })

  it('should return 0 when standardized value is 0.0', () => {
    const masks: FieldMasks = {
      n: { value: '0' } as any,
      f: { value: '0' } as any
    }

    expect(maskFormat.getValueStandard(masks)).toBe('0')
  })

  it('should return decimal delimiters via getDecimal()', () => {
    const decimals = maskFormat.getDecimal()
    expect(decimals).toContain('.')
  })

  it('should check if fraction is rubber', () => {
    mockProps.fraction = false
    expect(maskFormat.isFractionRubber()).toBe(false)

    mockProps.fraction = true
    expect(maskFormat.isFractionRubber()).toBe(true)
  })

  it('should generate mask for number, number-format, and currency types', () => {
    vi.mocked(mockType.isNumber).mockReturnValue(true)
    const numberMask = maskFormat.mask
    expect(numberMask).toContain('n')

    vi.mocked(mockType.isNumber).mockReturnValue(false)
    vi.mocked(mockType.isNumberFormat).mockReturnValue(true)
    const numberFormatMask = maskFormat.mask
    expect(numberFormatMask).toContain('n')

    vi.mocked(mockType.isNumberFormat).mockReturnValue(false)
    vi.mocked(mockType.isCurrency).mockReturnValue(true)
    const currencyMask = maskFormat.mask
    expect(currencyMask).toContain('n')
  })
})
