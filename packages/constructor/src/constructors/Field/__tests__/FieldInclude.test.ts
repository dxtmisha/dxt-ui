// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { FieldInclude } from '../FieldInclude'

describe('FieldInclude', () => {
  it('should merge attributes and bindings correctly', () => {
    const mockValue = {
      is: () => true,
      item: { value: 'input-value' },
      boolean: true,
      length: 11
    } as any

    const mockArrow = {
      disabledPrevious: true,
      disabledNext: false,
      isCarousel: () => true,
      isStepper: () => false,
      align: () => 'left'
    } as any

    const fieldInclude = new FieldInclude(
      'field-class',
      { focus: true, label: 'My Label' },
      undefined,
      undefined,
      undefined,
      mockValue,
      undefined,
      mockArrow
    )

    const attrs = (fieldInclude as any).getAttrs()
    expect(attrs.isValue).toBe(true)
    expect(attrs.value).toBe('input-value')
    expect(attrs.cancelShow).toBe(true)
    expect(attrs.counter).toBe(11)
    expect(attrs.disabledPrevious).toBe(true)
    expect(attrs.disabledNext).toBe(false)

    const binds = (fieldInclude as any).toBinds()
    expect(binds.focus).toBe(true)
    expect(binds.label).toBe('My Label')
    expect(binds.arrowCarousel).toBe(true)
    expect(binds.arrowStepper).toBe(false)
    expect(binds.arrowAlign).toBe('left')
  })

  it('should trigger events callbacks appropriately', () => {
    const onIcon = vi.fn()
    const onTrailing = vi.fn()
    const onNext = vi.fn()
    const onPrevious = vi.fn()

    const mockEvent = {
      isEnabled: () => true,
      onClear: vi.fn(),
      on: vi.fn()
    } as any

    const mockArrow = {
      next: vi.fn(),
      previous: vi.fn()
    } as any

    const fieldInclude = new FieldInclude(
      'field-class',
      {},
      undefined,
      undefined,
      undefined,
      undefined,
      mockEvent,
      mockArrow,
      onIcon,
      onTrailing,
      onNext,
      onPrevious
    )

    const mockTarget = document.createElement('div')
    mockTarget.setAttribute('data-element', 'scoreboard')
    
    const event1 = new MouseEvent('click')
    Object.defineProperty(event1, 'target', { value: mockTarget })
    ;(fieldInclude as any).on(event1, { type: 'icon' })
    expect(onIcon).toHaveBeenCalled()

    const event2 = new MouseEvent('click')
    Object.defineProperty(event2, 'target', { value: mockTarget })
    ;(fieldInclude as any).on(event2, { type: 'next' })
    expect(onNext).toHaveBeenCalled()
    expect(mockArrow.next).toHaveBeenCalled()
    expect(mockEvent.on).toHaveBeenCalled()
  })
})
