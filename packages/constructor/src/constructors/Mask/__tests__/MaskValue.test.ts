import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { MaskValue } from '../MaskValue'
import type { MaskType } from '../MaskType'
import type { MaskDate } from '../MaskDate'
import type { MaskFormat } from '../MaskFormat'
import type { MaskItem } from '../MaskItem'
import type { MaskSpecial } from '../MaskSpecial'
import type { MaskValueBasic } from '../MaskValueBasic'
import type { MaskProps } from '../props'

describe('MaskValue', () => {
  let mockProps: MaskProps
  let mockType: MaskType
  let mockDate: MaskDate
  let mockFormat: MaskFormat
  let mockMask: MaskItem
  let mockSpecial: MaskSpecial
  let mockValueBasic: MaskValueBasic
  let maskValue: MaskValue

  beforeEach(() => {
    mockProps = {}

    mockType = {
      isCurrencyOrNumber: vi.fn().mockReturnValue(false),
      isDate: vi.fn().mockReturnValue(false)
    } as unknown as MaskType

    mockDate = {
      getValueStandard: vi.fn().mockReturnValue('2026-09-23')
    } as unknown as MaskDate

    mockFormat = {
      getValueStandard: vi.fn().mockReturnValue('100.00')
    } as unknown as MaskFormat

    mockMask = {
      item: ref(['+', '1', ' ', '*', '*', '*'])
    } as unknown as MaskItem

    mockSpecial = {
      isSpecial: vi.fn((char: string) => char === '*'),
      isDefault: vi.fn().mockReturnValue(false),
      getDefault: vi.fn().mockReturnValue(undefined)
    } as unknown as MaskSpecial

    mockValueBasic = {
      item: ref('+1 123'),
      getChar: vi.fn((index: number) => ['+', '1', ' ', '1', '2', '3'][index])
    } as unknown as MaskValueBasic

    maskValue = new MaskValue(
      mockProps,
      mockType,
      mockDate,
      mockFormat,
      mockMask,
      mockSpecial,
      mockValueBasic
    )
  })

  it('should compute info for special groups and calculate fullness', () => {
    const info = maskValue.info.value

    expect(info['*']).toBeDefined()
    expect(info['*'].chars).toEqual(['1', '2', '3'])
    expect(info['*'].maxLength).toBe(3)
    expect(info['*'].end).toBe(true)
    expect(info['*'].full).toBe(true)
    expect(maskValue.isFull.value).toBe(true)
    expect(maskValue.isEnd.value).toBe(true)
  })

  it('should retrieve group item info via getInfoItem()', () => {
    const groupItem = maskValue.getInfoItem('*')

    expect(groupItem).toBeDefined()
    expect(groupItem?.value).toBe('123')
  })

  it('should provide data for global check via getForCheck()', () => {
    const checkData = maskValue.getForCheck()

    expect(checkData.value).toBe('+1 123')
    expect(checkData.full).toBe(true)
  })

  it('should delegate to format.getValueStandard for numeric types', () => {
    vi.mocked(mockType.isCurrencyOrNumber).mockReturnValue(true)

    expect(maskValue.item.value).toBe('100.00')
  })

  it('should delegate to date.getValueStandard for date types', () => {
    vi.mocked(mockType.isDate).mockReturnValue(true)

    expect(maskValue.item.value).toBe('2026-09-23')
  })

  it('should return empty string for date type if not full', () => {
    vi.mocked(mockType.isDate).mockReturnValue(true)
    ;(mockValueBasic.item as any).value = '+1 1'
    mockValueBasic.getChar = vi.fn((index: number) => ['+', '1', ' ', '1'][index])

    expect(maskValue.isFull.value).toBe(false)
    expect(maskValue.item.value).toBe('')
  })
})
