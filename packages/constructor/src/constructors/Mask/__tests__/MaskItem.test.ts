import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MaskItem } from '../MaskItem'
import type { MaskType } from '../MaskType'
import type { MaskRubberItem } from '../MaskRubberItem'
import type { MaskCharacterLength } from '../MaskCharacterLength'
import type { MaskDate } from '../MaskDate'
import type { MaskFormat } from '../MaskFormat'
import type { MaskSpecial } from '../MaskSpecial'
import type { MaskProps } from '../props'

describe('MaskItem', () => {
  let mockProps: MaskProps
  let mockType: MaskType
  let mockRubberItem: MaskRubberItem
  let mockCharacterLength: MaskCharacterLength
  let mockDate: MaskDate
  let mockFormat: MaskFormat
  let mockSpecial: MaskSpecial
  let maskItem: MaskItem

  beforeEach(() => {
    mockProps = {
      mask: '+1 (***) ***-****'
    }

    mockType = {
      isCurrencyOrNumber: vi.fn().mockReturnValue(false),
      isDate: vi.fn().mockReturnValue(false)
    } as unknown as MaskType

    mockRubberItem = {
      expandMask: vi.fn((mask: string) => mask)
    } as unknown as MaskRubberItem

    mockCharacterLength = {
      get: vi.fn().mockReturnValue(0)
    } as unknown as MaskCharacterLength

    mockDate = {
      mask: ['Y', 'Y', 'Y', 'Y']
    } as unknown as MaskDate

    mockFormat = {
      mask: ['n', 'n', 'n']
    } as unknown as MaskFormat

    mockSpecial = {
      isSpecial: vi.fn((char: string) => char === '*' || char === 'Y' || char === 'n')
    } as unknown as MaskSpecial

    maskItem = new MaskItem(
      mockProps,
      mockType,
      mockRubberItem,
      mockCharacterLength,
      mockDate,
      mockFormat,
      mockSpecial
    )
  })

  it('should compute mask item array from string mask', () => {
    expect(maskItem.item.value).toEqual('+1 (***) ***-****'.split(''))
    expect(maskItem.getLength()).toBe(17)
  })

  it('should delegate to format.mask for numeric types', () => {
    vi.mocked(mockType.isCurrencyOrNumber).mockReturnValue(true)

    expect(maskItem.item.value).toEqual(['n', 'n', 'n'])
  })

  it('should delegate to date.mask for date types', () => {
    vi.mocked(mockType.isDate).mockReturnValue(true)

    expect(maskItem.item.value).toEqual(['Y', 'Y', 'Y', 'Y'])
  })

  it('should collect special character positions via info computed', () => {
    const specialInfo = maskItem.info.value

    expect(specialInfo.length).toBe(10) // 10 asterisks
    expect(specialInfo[0]).toEqual({ index: 0, key: 4, char: '*' })
    expect(maskItem.getLengthBySpecial()).toBe(10)
  })

  it('should retrieve characters by index via get()', () => {
    expect(maskItem.get(0)).toBe('+')
    expect(maskItem.get(4)).toBe('*')
    expect(maskItem.get(999)).toBe('')
  })

  it('should find index by character via getByChar()', () => {
    const hyphenIndex = maskItem.getByChar('-', 0)
    expect(hyphenIndex).toBe(12)
  })

  it('should calculate count of highlighted special characters via getQuantity()', () => {
    // Selection range covering (***) -> indices 4 to 7
    const quantity = maskItem.getQuantity(4, 7)
    expect(quantity).toBe(3)

    // When start equals end, returns 1
    expect(maskItem.getQuantity(5, 5)).toBe(1)
  })

  it('should pick matching mask from array of masks based on input length', () => {
    mockProps.mask = ['**-**', '***-***']
    vi.mocked(mockCharacterLength.get).mockReturnValue(5)

    expect(maskItem.maxLength.value).toBe(7)
    expect(maskItem.item.value).toEqual('***-***'.split(''))
  })
})
