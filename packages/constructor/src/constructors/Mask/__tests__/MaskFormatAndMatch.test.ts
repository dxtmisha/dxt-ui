// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { MaskFormat } from '../MaskFormat'
import { MaskMatch } from '../MaskMatch'
import { MaskSpecial } from '../MaskSpecial'
import { MaskPattern } from '../MaskPattern'
import { MaskDate } from '../MaskDate'
import { MaskData } from '../MaskData'
import { MaskItem } from '../MaskItem'

describe('MaskFormatAndMatch (Format, Match, Special, Pattern, Date, Data, Item)', () => {
  it('should test MaskFormat', () => {
    const mockType = {
      isCurrency: () => false,
      isNumber: () => true,
      isNumberFormat: () => false
    } as any
    const mockRubber = {
      getByIndex: () => 3,
      is: () => false
    } as any

    const format = new MaskFormat({ fraction: 2 }, mockType, mockRubber)
    expect(format.fraction).toBe(2)
    expect(format.view).toBe(String.fromCharCode(8288))
    expect(format.getDecimal()).toContain('.')
  })

  it('should test MaskSpecial', () => {
    const mockType = {
      isCurrencyOrNumber: () => true
    } as any
    const mockFormat = {
      special: {
        n: { match: /[0-9]/ }
      },
      getSpecial: () => ['n']
    } as any
    const special = new MaskSpecial({}, mockType, {} as any, mockFormat)

    expect(special.isSpecial('n')).toBe(true)
    expect(special.isSpecial('x')).toBe(false)
  })

  it('should test MaskMatch', () => {
    const mockSpecial = {
      getMatch: () => /[0-9]/,
      item: ref(['n'])
    } as any
    const match = new MaskMatch({}, mockSpecial)

    expect(match.is('5', 'n')).toBe(true)
    expect(match.is('a', 'n')).toBe(false)
  })

  it('should test MaskPattern', () => {
    const mockSpecial = {
      getPattern: () => undefined
    } as any

    const pattern = new MaskPattern({}, {} as any, {} as any, mockSpecial)
    expect(pattern.isCheck()).toBe(false)
  })

  it('should test MaskDate', () => {
    const mockType = {
      isDate: () => true,
      getByDate: () => 'date'
    } as any
    const date = new MaskDate({}, mockType)
    expect(date.getValueStandard({})).toBe('2000-01-01')
  })

  it('should test MaskData', () => {
    const mockItem = {
      item: ref([])
    } as any
    const mockValue = {
      item: ref({ value: '' })
    } as any
    const mockType = {
      isDate: () => false
    } as any
    const mockCharacter = {
      reset: vi.fn(),
      is: () => true
    } as any
    const mockRubber = {
      reset: vi.fn()
    } as any

    const data = new MaskData(
      mockType,
      {} as any,
      {} as any,
      {} as any,
      {} as any,
      {} as any,
      {} as any,
      mockRubber,
      mockItem,
      {} as any,
      mockCharacter,
      {} as any,
      mockValue,
      {} as any,
      ref({} as any)
    )
    expect(data.reset().extra([])).toEqual([])
  })

  it('should test MaskItem', () => {
    const mockType = {
      isCurrencyOrNumber: () => false,
      isDate: () => false
    } as any
    const mockRubberItem = {
      expandMask: (m: string) => m
    } as any
    const mockCharLength = {} as any
    const mockSpecial = {
      isSpecial: () => false
    } as any

    const item = new MaskItem(
      { mask: '123' },
      mockType,
      mockRubberItem,
      mockCharLength,
      {} as any,
      {} as any,
      mockSpecial
    )
    expect(item.getLength()).toBe(3)
  })
})
