import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { MaskView } from '../MaskView'
import { MASK_CHAR_DELETE, MASK_VIEW_DEFAULT } from '../basicTypes'
import type { MaskType } from '../MaskType'
import type { MaskDate } from '../MaskDate'
import type { MaskFormat } from '../MaskFormat'
import type { MaskSpecial } from '../MaskSpecial'
import type { MaskRubber } from '../MaskRubber'
import type { MaskItem } from '../MaskItem'
import type { MaskValueBasic } from '../MaskValueBasic'
import type { MaskValidation } from '../MaskValidation'
import type { MaskProps } from '../props'

describe('MaskView', () => {
  let mockProps: MaskProps
  let mockType: MaskType
  let mockDate: MaskDate
  let mockFormat: MaskFormat
  let mockSpecial: MaskSpecial
  let mockRubber: MaskRubber
  let mockMask: MaskItem
  let mockValueBasic: MaskValueBasic
  let mockValidation: MaskValidation
  let maskView: MaskView

  beforeEach(() => {
    mockProps = {
      view: '_'
    }

    mockType = {
      isDate: vi.fn().mockReturnValue(false),
      isCurrencyOrNumber: vi.fn().mockReturnValue(false)
    } as unknown as MaskType

    mockDate = {
      getView: vi.fn()
    } as unknown as MaskDate

    mockFormat = {
      view: '0'
    } as unknown as MaskFormat

    mockSpecial = {
      isSpecial: vi.fn((char: string) => char === '*'),
      getView: vi.fn()
    } as unknown as MaskSpecial

    mockRubber = {
      isTransition: vi.fn().mockReturnValue(false)
    } as unknown as MaskRubber

    mockMask = {
      item: ref(['+', '*', '*'])
    } as unknown as MaskItem

    mockValueBasic = {
      item: ref('+5')
    } as unknown as MaskValueBasic

    mockValidation = {
      isError: vi.fn().mockReturnValue(false)
    } as unknown as MaskValidation

    maskView = new MaskView(
      mockProps,
      mockType,
      mockDate,
      mockFormat,
      mockSpecial,
      mockRubber,
      mockMask,
      mockValueBasic,
      mockValidation,
      'd1-mask'
    )
  })

  it('should generate view list items with proper CSS classes and values', () => {
    const items = maskView.item.value

    expect(items.length).toBe(3)

    // First item is '+', which is standard filled character
    expect(items[0].value).toBe('+')
    expect(items[0].className).toContain('d1-mask__character__item--standard')

    // Second item is '*', filled with '5', special character
    expect(items[1].value).toBe('5')
    expect(items[1].className).toContain('d1-mask__character__item--special')

    // Third item is '*', not filled, placeholder
    expect(items[2].value).toBe('_')
    expect(items[2].className).toContain('d1-mask__character__item--placeholder')
  })

  it('should assign error class when validation detects error for special character', () => {
    vi.mocked(mockValidation.isError).mockReturnValue(true)

    const items = maskView.item.value
    expect(items[1].className).toContain('d1-mask__character__item--error')
  })

  it('should assign transition class when character is a rubber transition delimiter', () => {
    vi.mocked(mockRubber.isTransition).mockReturnValue(true)

    const items = maskView.item.value
    // Third item is unfilled, so it checks isTransition
    expect(items[2].className).toContain('d1-mask__character__item--transition')
  })

  it('should assemble input string replacing deleted character placeholders', () => {
    (mockValueBasic.item as any).value = `+${MASK_CHAR_DELETE}`

    const inputString = maskView.input.value
    expect(inputString).toBe('+_')
  })

  it('should fallback to MASK_VIEW_DEFAULT when view prop is undefined', () => {
    mockProps.view = undefined

    const items = maskView.item.value
    expect(items[2].value).toBe(MASK_VIEW_DEFAULT)
  })
})
