import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MaskRubber } from '../MaskRubber'
import type { MaskType } from '../MaskType'
import type { MaskRubberItem } from '../MaskRubberItem'
import type { MaskRubberTransition } from '../MaskRubberTransition'
import type { MaskSpecial } from '../MaskSpecial'
import type { MaskMatch } from '../MaskMatch'
import type { MaskFormat } from '../MaskFormat'
import type { MaskProps } from '../props'
import type { FieldMasks } from '../../types/fieldTypes'

describe('MaskRubber', () => {
  let mockProps: MaskProps
  let mockType: MaskType
  let mockRubberItem: MaskRubberItem
  let mockRubberTransition: MaskRubberTransition
  let mockSpecial: MaskSpecial
  let mockMatch: MaskMatch
  let mockFormat: MaskFormat
  let maskRubber: MaskRubber

  beforeEach(() => {
    mockProps = {}

    mockType = {
      isCurrencyOrNumber: vi.fn().mockReturnValue(false)
    } as unknown as MaskType

    mockRubberItem = {
      add: vi.fn(),
      pop: vi.fn().mockReturnValue(true),
      reset: vi.fn()
    } as unknown as MaskRubberItem

    mockRubberTransition = {
      set: vi.fn(),
      reset: vi.fn(),
      isChar: vi.fn().mockReturnValue(false)
    } as unknown as MaskRubberTransition

    mockSpecial = {
      rubberList: {
        num: {
          rubber: true,
          transitionChar: '.',
          maxLength: 5
        }
      }
    } as unknown as MaskSpecial

    mockMatch = {
      is: vi.fn().mockReturnValue(true)
    } as unknown as MaskMatch

    mockFormat = {
      rubber: {}
    } as unknown as MaskFormat

    maskRubber = new MaskRubber(
      mockProps,
      mockType,
      mockRubberItem,
      mockRubberTransition,
      mockSpecial,
      mockMatch,
      mockFormat
    )
  })

  it('should identify transition character', () => {
    expect(maskRubber.isTransition('.')).toBe(true)
    expect(maskRubber.isTransition('-')).toBe(false)
  })

  it('should retrieve group definition via get()', () => {
    const item = maskRubber.get('num')
    expect(item).toBeDefined()
    expect(item?.transitionChar).toBe('.')
    expect(item?.maxLength).toBe(5)
  })

  it('should set transition and return false when input matches transition character', () => {
    const data: FieldMasks = {
      num: {
        chars: ['1', '2'],
        end: true
      } as any
    }

    const updated = maskRubber.update(data, 'num', '.')

    expect(updated).toBe(false)
    expect(mockRubberTransition.set).toHaveBeenCalledWith('num')
  })

  it('should set transition and return false when maxLength is exceeded', () => {
    const data: FieldMasks = {
      num: {
        chars: ['1', '2', '3', '4', '5'],
        end: true
      } as any
    }

    const updated = maskRubber.update(data, 'num', '6')

    expect(updated).toBe(false)
    expect(mockRubberTransition.set).toHaveBeenCalledWith('num')
  })

  it('should add to rubberItem and reset transition when character matches and end is reached', () => {
    const data: FieldMasks = {
      num: {
        chars: ['1', '2'],
        end: true
      } as any
    }

    const updated = maskRubber.update(data, 'num', '3')

    expect(updated).toBe(true)
    expect(mockRubberItem.add).toHaveBeenCalledWith('num')
    expect(mockRubberTransition.reset).toHaveBeenCalled()
  })

  it('should delegate pop to rubberItem', () => {
    const popped = maskRubber.pop('num')

    expect(popped).toBe(true)
    expect(mockRubberItem.pop).toHaveBeenCalledWith('num')
  })

  it('should reset both rubberItem and rubberTransition on reset()', () => {
    maskRubber.reset()

    expect(mockRubberItem.reset).toHaveBeenCalled()
    expect(mockRubberTransition.reset).toHaveBeenCalled()
  })
})
