// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { MaskData } from '../MaskData'
import type { MaskType } from '../MaskType'
import type { MaskBuffer } from '../MaskBuffer'
import type { MaskFocus } from '../MaskFocus'
import type { MaskRubberTransition } from '../MaskRubberTransition'
import type { MaskDate } from '../MaskDate'
import type { MaskSpecial } from '../MaskSpecial'
import type { MaskMatch } from '../MaskMatch'
import type { MaskRubber } from '../MaskRubber'
import type { MaskItem } from '../MaskItem'
import type { MaskSelection } from '../MaskSelection'
import type { MaskCharacter } from '../MaskCharacter'
import type { MaskValueBasic } from '../MaskValueBasic'
import type { MaskValue } from '../MaskValue'
import type { MaskEmit } from '../MaskEmit'
import type { MaskElementInput } from '../basicTypes'

describe('MaskData', () => {
  let mockType: MaskType
  let mockBuffer: MaskBuffer
  let mockFocus: MaskFocus
  let mockRubberTransition: MaskRubberTransition
  let mockDate: MaskDate
  let mockSpecial: MaskSpecial
  let mockMatch: MaskMatch
  let mockRubber: MaskRubber
  let mockMask: MaskItem
  let mockSelection: MaskSelection
  let mockCharacter: MaskCharacter
  let mockValueBasic: MaskValueBasic
  let mockValue: MaskValue
  let mockEmit: MaskEmit
  let inputElementRef: { value: MaskElementInput }
  let inputElement: HTMLInputElement
  let maskData: MaskData

  beforeEach(() => {
    inputElement = document.createElement('input')
    inputElementRef = ref(inputElement)

    mockType = {
      isDate: vi.fn().mockReturnValue(false)
    } as unknown as MaskType

    mockBuffer = {
      is: vi.fn().mockReturnValue(false),
      get: vi.fn().mockReturnValue([]),
      reset: vi.fn(),
      resetChars: vi.fn()
    } as unknown as MaskBuffer

    mockFocus = {
      is: vi.fn().mockReturnValue(true)
    } as unknown as MaskFocus

    mockRubberTransition = {
      is: vi.fn().mockReturnValue(false),
      reset: vi.fn(),
      item: ref('')
    } as unknown as MaskRubberTransition

    mockDate = {
      getValue: vi.fn((val: string) => val)
    } as unknown as MaskDate

    mockSpecial = {
      isSpecial: vi.fn().mockReturnValue(true)
    } as unknown as MaskSpecial

    mockMatch = {
      is: vi.fn().mockReturnValue(true),
      get: vi.fn().mockReturnValue(/[0-9]/)
    } as unknown as MaskMatch

    mockRubber = {
      update: vi.fn().mockReturnValue(false),
      pop: vi.fn().mockReturnValue(false),
      reset: vi.fn()
    } as unknown as MaskRubber

    mockMask = {
      maxLength: ref(10),
      getByChar: vi.fn().mockReturnValue(0),
      getQuantity: vi.fn().mockReturnValue(1),
      item: ref(['9', '9']),
      info: ref([{ index: 0, key: 0, char: '9' }])
    } as unknown as MaskItem

    mockSelection = {
      setByMask: vi.fn(),
      setShift: vi.fn(),
      getImmediate: vi.fn().mockReturnValue(0),
      getShift: vi.fn().mockReturnValue(1)
    } as unknown as MaskSelection

    mockCharacter = {
      is: vi.fn().mockReturnValue(false),
      getFocus: vi.fn().mockReturnValue('9'),
      getImmediate: vi.fn().mockReturnValue('9'),
      isCharDelete: vi.fn().mockReturnValue(false),
      shift: vi.fn(),
      add: vi.fn(),
      pop: vi.fn(),
      reset: vi.fn()
    } as unknown as MaskCharacter

    mockValueBasic = {
      getLength: vi.fn().mockReturnValue(0),
      item: ref('')
    } as unknown as MaskValueBasic

    mockValue = {
      info: ref({}),
      item: ref('')
    } as unknown as MaskValue

    mockEmit = {
      go: vi.fn()
    } as unknown as MaskEmit

    maskData = new MaskData(
      mockType,
      mockBuffer,
      mockFocus,
      mockRubberTransition,
      mockDate,
      mockSpecial,
      mockMatch,
      mockRubber,
      mockMask,
      mockSelection,
      mockCharacter,
      mockValueBasic,
      mockValue,
      mockEmit,
      inputElementRef
    )
  })

  it('should add characters and trigger character.add() when matched', () => {
    const updated = maskData.add(0, '5', true)

    expect(mockSelection.setByMask).toHaveBeenCalledWith(0, true)
    expect(mockRubberTransition.reset).toHaveBeenCalled()
    expect(mockMatch.is).toHaveBeenCalledWith('5', '9')
    expect(mockCharacter.shift).toHaveBeenCalled()
    expect(mockCharacter.add).toHaveBeenCalledWith('5')
    expect(updated).toBe(true)
  })

  it('should not update character when match fails', () => {
    vi.mocked(mockMatch.is).mockReturnValue(false)

    const updated = maskData.add(0, 'x', true)

    expect(mockCharacter.add).not.toHaveBeenCalled()
    expect(updated).toBe(false)
  })

  it('should delete characters on pop()', () => {
    maskData.pop(0, 1, true)

    expect(mockMask.getQuantity).toHaveBeenCalledWith(0, 1)
    expect(mockSelection.setByMask).toHaveBeenCalledWith(1)
    expect(mockCharacter.pop).toHaveBeenCalled()
    expect(mockRubber.pop).toHaveBeenCalled()
  })

  it('should reset characters and rubber state on reset()', () => {
    maskData.reset()

    expect(mockCharacter.reset).toHaveBeenCalled()
    expect(mockRubber.reset).toHaveBeenCalled()
  })

  it('should apply initial value on reset(value)', () => {
    const spyAdd = vi.spyOn(maskData, 'add')
    maskData.reset('123')

    expect(spyAdd).toHaveBeenCalledWith(0, ['1', '2', '3'])
  })

  it('should return raw chars in extra() when character is already filled', () => {
    vi.mocked(mockCharacter.is).mockReturnValue(true)

    const result = maskData.extra(['1', '2'])
    expect(result).toEqual(['1', '2'])
  })

  it('should restore selection in goSelection() via requestAnimationFrame', async () => {
    inputElement.value = '12345'
    vi.mocked(mockSelection.getShift).mockReturnValue(2)
    vi.mocked(mockValueBasic.getLength).mockReturnValue(5)

    maskData.goSelection(false)

    await new Promise((resolve) => requestAnimationFrame(resolve))

    expect(inputElement.selectionStart).toBe(2)
    expect(inputElement.selectionEnd).toBe(2)
  })
})
