import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { MaskCharacter } from '../MaskCharacter'
import { MASK_CHAR_DELETE } from '../basicTypes'
import type { MaskRubberItem } from '../MaskRubberItem'
import type { MaskCharacterLength } from '../MaskCharacterLength'
import type { MaskSpecial } from '../MaskSpecial'
import type { MaskItem } from '../MaskItem'
import type { MaskSelection } from '../MaskSelection'
import type { MaskProps } from '../props'

describe('MaskCharacter', () => {
  let mockProps: MaskProps
  let mockRubberItem: MaskRubberItem
  let mockCharacterLength: MaskCharacterLength
  let mockSpecial: MaskSpecial
  let mockMask: MaskItem
  let mockSelection: MaskSelection
  let maskCharacter: MaskCharacter

  let selectionValue = 0

  beforeEach(() => {
    selectionValue = 0
    mockProps = {
      groupSave: false
    }

    mockRubberItem = {
      is: vi.fn().mockReturnValue(false)
    } as unknown as MaskRubberItem

    mockCharacterLength = {
      set: vi.fn()
    } as unknown as MaskCharacterLength

    mockSpecial = {
      isSpecial: vi.fn((char: string) => char === '*' || char === '9')
    } as unknown as MaskSpecial

    mockMask = {
      get: vi.fn((index: number) => (index === 0 ? '*' : index === 1 ? '9' : '')),
      info: ref([
        { index: 0, key: 0, char: '*' },
        { index: 1, key: 1, char: '9' }
      ])
    } as unknown as MaskItem

    mockSelection = {
      get: vi.fn(() => selectionValue),
      set: vi.fn((index: number) => {
        selectionValue = index
        return mockSelection
      }),
      getFocus: vi.fn().mockReturnValue(0),
      getImmediate: vi.fn().mockReturnValue(0),
      getNext: vi.fn().mockReturnValue(1),
      goNext: vi.fn(() => {
        selectionValue++
        return mockSelection
      }),
      goBack: vi.fn(() => {
        if (selectionValue > 0) {
          selectionValue--
        }
        return mockSelection
      }),
      resetImmediate: vi.fn().mockReturnThis()
    } as unknown as MaskSelection

    maskCharacter = new MaskCharacter(
      mockProps,
      mockRubberItem,
      mockCharacterLength,
      mockSpecial,
      mockMask,
      mockSelection
    )
  })

  it('should initialize empty', () => {
    expect(maskCharacter.is()).toBe(false)
    expect(maskCharacter.item.value).toEqual([])
  })

  it('should add characters and update length', () => {
    maskCharacter.add('5')

    expect(maskCharacter.item.value).toEqual(['5'])
    expect(maskCharacter.is()).toBe(true)
    expect(mockSelection.goNext).toHaveBeenCalled()
    expect(mockSelection.resetImmediate).toHaveBeenCalled()
    expect(mockCharacterLength.set).toHaveBeenCalledWith(1)
  })

  it('should replace deleted character placeholder on add()', () => {
    maskCharacter.item.value = [MASK_CHAR_DELETE]
    selectionValue = 0

    expect(maskCharacter.isCharDelete()).toBe(true)

    maskCharacter.add('7')

    expect(maskCharacter.item.value).toEqual(['7'])
    expect(mockCharacterLength.set).toHaveBeenCalledWith(1)
  })

  it('should retrieve focus, immediate, and next mask characters', () => {
    expect(maskCharacter.getFocus()).toBe('*')
    expect(mockMask.get).toHaveBeenCalledWith(0)

    expect(maskCharacter.getImmediate()).toBe('*')
    expect(mockMask.get).toHaveBeenCalledWith(0)

    expect(maskCharacter.getNext()).toBe('9')
    expect(mockMask.get).toHaveBeenCalledWith(1)
  })

  it('should pop last character when groupSave is false', () => {
    maskCharacter.item.value = ['a', 'b']
    selectionValue = 2

    maskCharacter.pop()

    expect(maskCharacter.item.value).toEqual(['a'])
    expect(mockSelection.goBack).toHaveBeenCalled()
    expect(mockCharacterLength.set).toHaveBeenCalledWith(1)
  })

  it('should mark character as deleted when groupSave is enabled and next special group exists', () => {
    mockProps.groupSave = true
    maskCharacter.item.value = ['a', 'b']
    selectionValue = 1 // deleting index 0 (which has char '*')

    maskCharacter.pop()

    expect(maskCharacter.item.value[0]).toBe(MASK_CHAR_DELETE)
    expect(mockSelection.goBack).toHaveBeenCalled()
  })

  it('should shift length via shift()', () => {
    maskCharacter.item.value = ['a', 'b']

    maskCharacter.shift(1)
    expect(mockCharacterLength.set).toHaveBeenCalledWith(3)

    maskCharacter.shift(0)
    expect(mockCharacterLength.set).toHaveBeenCalledWith(2)
  })

  it('should reset all characters and selection on reset()', () => {
    maskCharacter.item.value = ['1', '2', '3']
    selectionValue = 3

    maskCharacter.reset()

    expect(maskCharacter.item.value).toEqual([])
    expect(mockSelection.set).toHaveBeenCalledWith(0)
    expect(mockSelection.resetImmediate).toHaveBeenCalled()
    expect(mockCharacterLength.set).toHaveBeenCalledWith(0)
  })
})
