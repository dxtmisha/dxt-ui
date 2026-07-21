// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { PaginationEvent } from '../PaginationEvent'

describe('PaginationEvent', () => {
  it('should delegate onClick to EventClickInclude and handle default type', () => {
    const props = {} as any
    const mockEventClickInclude = {
      onClick: vi.fn()
    } as any
    const mockEmits = vi.fn()
    const mockModelValue = {
      emit: vi.fn()
    } as any
    const mockModelRows = {
      emit: vi.fn()
    } as any

    const handler = new PaginationEvent(
      props,
      mockEventClickInclude,
      mockEmits,
      mockModelValue,
      mockModelRows
    )

    const event = new MouseEvent('click')
    const options = { type: 'page', value: 3 } as any

    handler.onClick(event, options)

    // Verify eventClick.onClick was called
    expect(mockEventClickInclude.onClick).toHaveBeenCalledWith(event, options)
    // Verify default path calls modelValue.emit
    expect(mockModelValue.emit).toHaveBeenCalledWith(3)
    // Verify modelRows was NOT called
    expect(mockModelRows.emit).not.toHaveBeenCalled()
  })

  it('should handle "more" click', () => {
    const props = {} as any
    const mockEventClickInclude = {
      onClick: vi.fn()
    } as any
    const mockEmits = vi.fn()
    const mockModelValue = {
      emit: vi.fn()
    } as any
    const mockModelRows = {
      emit: vi.fn()
    } as any

    const handler = new PaginationEvent(
      props,
      mockEventClickInclude,
      mockEmits,
      mockModelValue,
      mockModelRows
    )

    const event = new MouseEvent('click')
    const options = { type: 'more', value: 4 } as any

    handler.onClick(event, options)

    expect(mockEmits).toHaveBeenCalledWith('more', event, options)
    expect(mockEmits).toHaveBeenCalledWith('moreLite', options)
    expect(mockModelValue.emit).not.toHaveBeenCalled()
  })

  it('should handle "morePrev" click', () => {
    const props = {} as any
    const mockEventClickInclude = {
      onClick: vi.fn()
    } as any
    const mockEmits = vi.fn()
    const mockModelValue = {
      emit: vi.fn()
    } as any
    const mockModelRows = {
      emit: vi.fn()
    } as any

    const handler = new PaginationEvent(
      props,
      mockEventClickInclude,
      mockEmits,
      mockModelValue,
      mockModelRows
    )

    const event = new MouseEvent('click')
    const options = { type: 'morePrev', value: 2 } as any

    handler.onClick(event, options)

    expect(mockEmits).toHaveBeenCalledWith('morePrev', event, options)
    expect(mockEmits).toHaveBeenCalledWith('morePrevLite', options)
  })

  it('should handle "rows" click', () => {
    const props = {} as any
    const mockEventClickInclude = {
      onClick: vi.fn()
    } as any
    const mockEmits = vi.fn()
    const mockModelValue = {
      emit: vi.fn()
    } as any
    const mockModelRows = {
      emit: vi.fn()
    } as any

    const handler = new PaginationEvent(
      props,
      mockEventClickInclude,
      mockEmits,
      mockModelValue,
      mockModelRows
    )

    const event = new MouseEvent('click')
    const options = { type: 'rows', value: 25 } as any

    handler.onClick(event, options)

    expect(mockEmits).toHaveBeenCalledWith('rows', event, options)
    expect(mockEmits).toHaveBeenCalledWith('rowsLite', options)
    expect(mockModelRows.emit).toHaveBeenCalledWith(25)
    expect(mockModelValue.emit).not.toHaveBeenCalled()
  })
})
