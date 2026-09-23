import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { MaskValueBasic } from '../MaskValueBasic'
import type { MaskRubberTransition } from '../MaskRubberTransition'
import type { MaskItem } from '../MaskItem'
import type { MaskSpecial } from '../MaskSpecial'
import type { MaskCharacter } from '../MaskCharacter'

describe('MaskValueBasic', () => {
  let mockRubberTransition: MaskRubberTransition
  let mockMask: MaskItem
  let mockSpecial: MaskSpecial
  let mockCharacter: MaskCharacter
  let maskValueBasic: MaskValueBasic

  beforeEach(() => {
    mockRubberTransition = {
      is: vi.fn().mockReturnValue(false),
      isChar: vi.fn().mockReturnValue(false)
    } as unknown as MaskRubberTransition

    mockMask = {
      item: ref(['+', '1', ' ', '*', '*', '*'])
    } as unknown as MaskItem

    mockSpecial = {
      isSpecial: vi.fn((char: string) => char === '*')
    } as unknown as MaskSpecial

    mockCharacter = {
      item: ref(['5', '6', '7'])
    } as unknown as MaskCharacter

    maskValueBasic = new MaskValueBasic(
      mockRubberTransition,
      mockMask,
      mockSpecial,
      mockCharacter
    )
  })

  it('should assemble basic standard values combining static mask characters and input characters', () => {
    expect(maskValueBasic.item.value).toBe('+1 567')
    expect(maskValueBasic.is()).toBe(true)
    expect(maskValueBasic.getLength()).toBe(6)
  })

  it('should retrieve individual character by index via getChar()', () => {
    expect(maskValueBasic.getChar(0)).toBe('+')
    expect(maskValueBasic.getChar(1)).toBe('1')
    expect(maskValueBasic.getChar(2)).toBe(' ')
    expect(maskValueBasic.getChar(3)).toBe('5')
    expect(maskValueBasic.getChar(99)).toBeUndefined()
  })

  it('should stop assembling when input characters are exhausted for special placeholders', () => {
    mockCharacter.item.value = ['5'] // Only 1 character entered

    expect(maskValueBasic.item.value).toBe('+1 5')
    expect(maskValueBasic.getLength()).toBe(4)
  })

  it('should return is() false when length is 0', () => {
    (mockMask.item as any).value = []
    mockCharacter.item.value = []

    expect(maskValueBasic.item.value).toBe('')
    expect(maskValueBasic.is()).toBe(false)
    expect(maskValueBasic.getLength()).toBe(0)
  })
})
