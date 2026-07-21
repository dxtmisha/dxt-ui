// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { MaskValueBasic } from '../MaskValueBasic'
import { MaskValue } from '../MaskValue'
import { MaskView } from '../MaskView'

describe('MaskValueAndData (ValueBasic, Value, View)', () => {
  it('should test MaskValueBasic', () => {
    const mockRubber = {
      is: () => false,
      isChar: () => false
    } as any

    const mockMask = {
      item: ref(['1', '2', '*', '3']),
      getLength: () => 4
    } as any

    const mockSpecial = {
      isSpecial: (char: string) => char === '*'
    } as any

    const mockChar = {
      item: ref(['A'])
    } as any

    const valBasic = new MaskValueBasic(mockRubber, mockMask, mockSpecial, mockChar)

    expect(valBasic.item.value).toBe('12A3')
    expect(valBasic.is()).toBe(true)
    expect(valBasic.getChar(1)).toBe('2')
    expect(valBasic.getLength()).toBe(4)
  })

  it('should test MaskValue', () => {
    const mockProps = { fullOnly: false } as any
    const mockType = {
      isCurrencyOrNumber: () => false,
      isDate: () => false
    } as any
    const mockMask = {
      item: ref(['1', '2', '*', '3'])
    } as any
    const mockSpecial = {
      isSpecial: (char: string) => char === '*',
      isDefault: () => false,
      getDefault: () => undefined
    } as any
    const mockValueBasic = {
      item: ref('12A'),
      getChar: (idx: number) => '12A'[idx]
    } as any

    const value = new MaskValue(
      mockProps,
      mockType,
      {} as any,
      {} as any,
      mockMask,
      mockSpecial,
      mockValueBasic
    )

    expect(value.isFull.value).toBe(true)
    expect(value.isEnd.value).toBe(true)
  })

  it('should test MaskView', () => {
    const mockType = {
      isCurrencyOrNumber: () => false,
      isDate: () => false
    } as any
    const mockSpecial = {
      isSpecial: (char: string) => char === '*',
      getView: () => '_'
    } as any
    const mockRubber = {
      isTransition: () => false
    } as any
    const mockMask = {
      item: ref(['1', '2', '*', '3'])
    } as any
    const mockValueBasic = {
      item: ref('12A')
    } as any
    const mockValidation = {
      isError: () => false
    } as any

    const view = new MaskView(
      {},
      mockType,
      {} as any,
      {} as any,
      mockSpecial,
      mockRubber,
      mockMask,
      mockValueBasic,
      mockValidation,
      'base-class'
    )

    expect(view.item.value[0]).toEqual({
      className: 'base-class__character__item base-class__character__item--standard',
      value: '1'
    })
  })
})
