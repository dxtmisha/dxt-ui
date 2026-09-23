import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { MaskSelection } from '../MaskSelection'
import type { MaskSpecial } from '../MaskSpecial'
import type { MaskItem } from '../MaskItem'

describe('MaskSelection', () => {
  let mockSpecial: MaskSpecial
  let mockMask: MaskItem
  let maskSelection: MaskSelection

  beforeEach(() => {
    mockSpecial = {} as MaskSpecial

    mockMask = {
      getLength: vi.fn().mockReturnValue(10),
      getLengthBySpecial: vi.fn().mockReturnValue(3),
      info: ref([
        { index: 0, key: 1, char: '9' },
        { index: 1, key: 2, char: '9' },
        { index: 2, key: 4, char: '9' }
      ])
    } as unknown as MaskItem

    maskSelection = new MaskSelection(mockSpecial, mockMask)
  })

  it('should initialize with selection at 0', () => {
    expect(maskSelection.get()).toBe(0)
  })

  it('should return first special character index via getFirst()', () => {
    expect(maskSelection.getFirst()).toBe(1)
  })

  it('should calculate focus, next, previous and immediate character positions', () => {
    maskSelection.set(1) // index 1 corresponds to key 2

    expect(maskSelection.getFocus()).toBe(2)
    expect(maskSelection.getNext()).toBe(4) // index 2 corresponds to key 4
    expect(maskSelection.getPrevious()).toBe(1) // index 0 corresponds to key 1
  })

  it('should handle shift state in getShift()', () => {
    maskSelection.set(1)

    // With shift false: returns focus key
    maskSelection.setShift(false)
    expect(maskSelection.getShift()).toBe(2)

    // With shift true: shifts to the left character key + 1
    maskSelection.setShift(true)
    expect(maskSelection.getShift()).toBe(2) // getCharacter(0) + 1 = 1 + 1 = 2
  })

  it('should update selection via setByMask()', () => {
    maskSelection.setByMask(2, true)

    expect(maskSelection.get()).toBe(1)
    expect(maskSelection.getImmediate()).toBe(2)
  })

  it('should step backwards via goBack()', () => {
    maskSelection.set(2)

    maskSelection.goBack()
    expect(maskSelection.get()).toBe(1)

    maskSelection.goBack()
    expect(maskSelection.get()).toBe(0)

    maskSelection.goBack()
    expect(maskSelection.get()).toBe(0) // Does not go negative
  })

  it('should step forwards via goNext()', () => {
    maskSelection.set(0)

    maskSelection.goNext()
    expect(maskSelection.get()).toBe(1)
  })

  it('should reset immediate pointer via resetImmediate()', () => {
    maskSelection.set(2)
    maskSelection.resetImmediate()

    expect(maskSelection.getImmediate()).toBe(2) // value - 1 = 1, key at index 1 is 2
  })
})
