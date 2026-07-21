// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { MaskRubberTransition } from '../MaskRubberTransition'
import { MaskRubberItem } from '../MaskRubberItem'
import { MaskRubber } from '../MaskRubber'
import { MaskCharacter } from '../MaskCharacter'

describe('MaskRubberAndCharacter (Rubber, RubberItem, RubberTransition, Character)', () => {
  it('should test MaskRubberTransition', () => {
    const tr = new MaskRubberTransition()
    expect(tr.is()).toBe(false)
    expect(tr.isChar(',')).toBe(false)

    tr.set(',')
    expect(tr.is()).toBe(true)
    expect(tr.isChar(',')).toBe(true)

    tr.reset()
    expect(tr.is()).toBe(false)
  })

  it('should test MaskRubberItem', () => {
    const item = new MaskRubberItem()
    expect(item.is('n')).toBe(false)
    expect(item.getByIndex('n')).toBe(0)

    item.add('n')
    expect(item.is('n')).toBe(true)
    expect(item.getByIndex('n')).toBe(1)

    item.pop('n')
    expect(item.is('n')).toBe(false)

    item.add('n').add('n')
    expect(item.expandMask('n')).toBe('nnn')
  })

  it('should test MaskRubber', () => {
    const mockProps = {} as any
    const mockType = {
      isCurrencyOrNumber: () => true
    } as any
    const mockFormat = {
      rubber: { n: { rubber: true } }
    } as any
    const mockSpecial = {
      rubberList: { n: { rubber: true } }
    } as any

    const rubber = new MaskRubber(
      mockProps,
      mockType,
      {} as any,
      {} as any,
      mockSpecial,
      {} as any,
      mockFormat
    )
    expect(rubber.isTransition('n')).toBe(false)
  })

  it('should test MaskCharacter', () => {
    const mockProps = {} as any
    const mockRubberItem = {} as any
    const mockLength = {
      set: vi.fn()
    } as any
    const mockSpecial = {} as any
    const mockMask = {
      get: () => '*'
    } as any
    const mockSelection = {
      get: () => 0,
      getFocus: () => 0,
      resetImmediate: vi.fn()
    } as any

    const char = new MaskCharacter(
      mockProps,
      mockRubberItem,
      mockLength,
      mockSpecial,
      mockMask,
      mockSelection
    )

    expect(char.is()).toBe(false)
    char.item.value = ['a', 'b']
    expect(char.is()).toBe(true)
    expect(char.item.value).toEqual(['a', 'b'])
  })
})
