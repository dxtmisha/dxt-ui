import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { MaskValidation } from '../MaskValidation'
import type { MaskPattern } from '../MaskPattern'
import type { MaskValue } from '../MaskValue'

describe('MaskValidation', () => {
  let mockPattern: MaskPattern
  let mockValue: MaskValue
  let maskValidation: MaskValidation

  beforeEach(() => {
    mockPattern = {
      item: ref({
        num: {
          group: 'num',
          check: vi.fn((value: string) => {
            if (value === '99') {
              return { status: false, message: 'Invalid number' }
            }
            return { status: true }
          })
        }
      }),
      isCheck: vi.fn().mockReturnValue(false),
      getInput: vi.fn()
    } as unknown as MaskPattern

    mockValue = {
      getInfoItem: vi.fn((group: string) => {
        if (group === 'num') {
          return { full: true, value: '10' }
        }
        return undefined
      }),
      item: ref('10'),
      isFull: ref(true),
      getForCheck: vi.fn().mockReturnValue({ group: 'check', value: '10' })
    } as unknown as MaskValue

    maskValidation = new MaskValidation(mockPattern, mockValue)
  })

  it('should validate values and return valid status', () => {
    expect(maskValidation.checkValidity()).toBe(true)
    expect(maskValidation.isError('num')).toBe(false)
  })

  it('should detect error when pattern check fails', () => {
    vi.mocked(mockValue.getInfoItem).mockReturnValue({
      full: true,
      value: '99'
    } as any)

    expect(maskValidation.checkValidity()).toBe(false)
    expect(maskValidation.isError('num')).toBe(false) // Error does not set group name unless provided by check result
  })

  it('should return error for group when groupError matches groupName', () => {
    const errorCheck = {
      status: false,
      group: 'num',
      message: 'Too big'
    }

    vi.mocked(mockPattern.item).value = {
      num: {
        group: 'num',
        check: vi.fn().mockReturnValue(errorCheck)
      } as any
    }

    expect(maskValidation.isError('num')).toBe(true)
    expect(maskValidation.isError('other')).toBe(false)
  })
})
