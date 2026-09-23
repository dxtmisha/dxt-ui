import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MaskRight } from '../MaskRight'
import type { MaskType } from '../MaskType'
import type { MaskProps } from '../props'

describe('MaskRight', () => {
  let mockProps: MaskProps
  let mockType: MaskType
  let maskRight: MaskRight

  beforeEach(() => {
    mockProps = {}

    mockType = {
      isCurrency: vi.fn().mockReturnValue(false),
      isNumberFormat: vi.fn().mockReturnValue(false)
    } as unknown as MaskType

    maskRight = new MaskRight(mockProps, mockType)
  })

  it('should return false for default alignment without rtl or numbers', () => {
    expect(maskRight.isEnd()).toBe(false)
    expect(maskRight.isRight()).toBe(false)
  })

  it('should return true for isRight when align is explicitly "right"', () => {
    mockProps.align = 'right'
    expect(maskRight.isRight()).toBe(true)
  })

  it('should return true for isEnd when dir is "rtl"', () => {
    mockProps.dir = 'rtl'
    expect(maskRight.isEnd()).toBe(true)
    expect(maskRight.isRight()).toBe(true)
  })

  it('should return true for isEnd when currency is active and currencyHide is false', () => {
    vi.mocked(mockType.isCurrency).mockReturnValue(true)
    mockProps.currencyHide = false

    expect(maskRight.isEnd()).toBe(true)
    expect(maskRight.isRight()).toBe(true)
  })

  it('should return false for isEnd when currency is active but currencyHide is true', () => {
    vi.mocked(mockType.isCurrency).mockReturnValue(true)
    mockProps.currencyHide = true

    expect(maskRight.isEnd()).toBe(false)
  })

  it('should return true for isEnd when number-format is active', () => {
    vi.mocked(mockType.isNumberFormat).mockReturnValue(true)

    expect(maskRight.isEnd()).toBe(true)
    expect(maskRight.isRight()).toBe(true)
  })

  it('should respect explicit align="left" and prevent isEnd even in RTL or currency', () => {
    mockProps.align = 'left'
    mockProps.dir = 'rtl'
    vi.mocked(mockType.isCurrency).mockReturnValue(true)

    expect(maskRight.isEnd()).toBe(false)
    expect(maskRight.isRight()).toBe(false)
  })
})
