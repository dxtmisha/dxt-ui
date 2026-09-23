import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MaskSpecial } from '../MaskSpecial'
import type { MaskType } from '../MaskType'
import type { MaskDate } from '../MaskDate'
import type { MaskFormat } from '../MaskFormat'
import type { MaskProps } from '../props'

describe('MaskSpecial', () => {
  let mockProps: MaskProps
  let mockType: MaskType
  let mockDate: MaskDate
  let mockFormat: MaskFormat
  let maskSpecial: MaskSpecial

  beforeEach(() => {
    mockProps = {
      special: {
        d: { match: /[0-9]/, defaultValue: '0', rubber: true },
        w: { match: /[a-zA-Z]/, view: 'A' }
      }
    }

    mockType = {
      isCurrencyOrNumber: vi.fn().mockReturnValue(false),
      isTime: vi.fn().mockReturnValue(false),
      isDate: vi.fn().mockReturnValue(false)
    } as unknown as MaskType

    mockDate = {
      getSpecialFull: vi.fn().mockReturnValue(['Y', 'M', 'D', 'h', 'm', 's']),
      getSpecialDate: vi.fn().mockReturnValue(['Y', 'M', 'D'])
    } as unknown as MaskDate

    mockFormat = {
      getSpecial: vi.fn().mockReturnValue(['n', 'f'])
    } as unknown as MaskFormat

    maskSpecial = new MaskSpecial(
      mockProps,
      mockType,
      mockDate,
      mockFormat
    )
  })

  it('should list special character groups based on props', () => {
    expect(maskSpecial.item.value).toEqual(['d', 'w'])
  })

  it('should list special groups for currency/number type', () => {
    vi.mocked(mockType.isCurrencyOrNumber).mockReturnValue(true)

    expect(maskSpecial.item.value).toEqual(['n', 'f'])
  })

  it('should list special groups for time type', () => {
    vi.mocked(mockType.isTime).mockReturnValue(true)
    expect(maskSpecial.item.value).toEqual(['Y', 'M', 'D', 'h', 'm', 's'])
  })

  it('should list special groups for date type', () => {
    vi.mocked(mockType.isTime).mockReturnValue(false)
    vi.mocked(mockType.isDate).mockReturnValue(true)
    expect(maskSpecial.item.value).toEqual(['Y', 'M', 'D'])
  })

  it('should identify special characters via isSpecial()', () => {
    expect(maskSpecial.isSpecial('d')).toBe(true)
    expect(maskSpecial.isSpecial('w')).toBe(true)
    expect(maskSpecial.isSpecial('x')).toBe(false)
  })

  it('should return rubber list containing only rubber-configured items', () => {
    const rubberList = maskSpecial.rubberList

    expect(rubberList.d).toBeDefined()
    expect(rubberList.w).toBeUndefined()
  })

  it('should check and return default values for groups', () => {
    expect(maskSpecial.isDefault('d')).toBe(true)
    expect(maskSpecial.getDefault('d')).toBe('0')

    expect(maskSpecial.isDefault('w')).toBe(false)
    expect(maskSpecial.getDefault('w')).toBeUndefined()
  })

  it('should return match rule and view representation for group', () => {
    expect(maskSpecial.getMatch('d')).toEqual(/[0-9]/)
    expect(maskSpecial.getView('w')).toBe('A')
  })
})
