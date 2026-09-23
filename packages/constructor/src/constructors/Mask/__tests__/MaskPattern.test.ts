import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { MaskPattern } from '../MaskPattern'
import type { MaskType } from '../MaskType'
import type { MaskDate } from '../MaskDate'
import type { MaskSpecial } from '../MaskSpecial'
import type { MaskProps } from '../props'

describe('MaskPattern', () => {
  let mockProps: MaskProps
  let mockType: MaskType
  let mockDate: MaskDate
  let mockSpecial: MaskSpecial
  let maskPattern: MaskPattern

  beforeEach(() => {
    mockProps = {}

    mockType = {
      isDate: vi.fn().mockReturnValue(false)
    } as unknown as MaskType

    mockDate = {
      getPattern: vi.fn().mockReturnValue({
        Y: { pattern: '[0-9]{4}' }
      })
    } as unknown as MaskDate

    mockSpecial = {
      item: ref(['d', 'w']),
      getPattern: vi.fn((group: string) => {
        if (group === 'd') return '[0-9]+'
        return undefined
      })
    } as unknown as MaskSpecial

    maskPattern = new MaskPattern(
      mockProps,
      mockType,
      mockDate,
      mockSpecial
    )
  })

  it('should initialize without global check when check prop is not provided', () => {
    expect(maskPattern.isCheck()).toBe(false)
  })

  it('should detect global check when check prop is set', () => {
    mockProps.check = '^[0-9]+$'
    expect(maskPattern.isCheck()).toBe(true)
  })

  it('should build pattern list from special groups', () => {
    const list = maskPattern.list.value

    expect(list.d).toBeDefined()
    expect((list.d as any)?.pattern).toBe('[0-9]+')
    expect(list.w).toBeDefined()
  })

  it('should delegate to date.getPattern for date mask types', () => {
    vi.mocked(mockType.isDate).mockReturnValue(true)

    const list = maskPattern.list.value
    expect(list.Y).toBeDefined()
  })

  it('should retrieve FieldInputCheckInclude instance via getInput()', () => {
    const checkItem = maskPattern.getInput('d')

    expect(checkItem).toBeDefined()
    expect(checkItem?.group).toBe('d')
  })
})
