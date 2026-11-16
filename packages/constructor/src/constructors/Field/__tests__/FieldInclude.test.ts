// @vitest-environment jsdom
import './testWarnings'
import { describe, it, expect, vi } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import type { FieldArrowInclude } from '../../../classes/Field/FieldArrowInclude'
import type { FieldEventInclude } from '../../../classes/Field/FieldEventInclude'
import type { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import { FieldInclude } from '../FieldInclude'

describe('FieldInclude', () => {
  it('should merge attributes and bindings correctly including custom fieldAttrs handlers', () => {
    const customClick = vi.fn()
    const customKeydown = vi.fn()

    const mockValue = {
      is: () => true,
      item: { value: 'input-value' },
      boolean: true,
      length: 11
    } as unknown as FieldValueInclude

    const mockArrow = {
      disabledPrevious: true,
      disabledNext: false,
      isCarousel: () => true,
      isStepper: () => false,
      align: () => 'left' as const
    } as unknown as FieldArrowInclude

    const fieldInclude = new FieldInclude(
      {
        focus: true,
        label: 'My Label',
        fieldAttrs: {
          onClick: customClick,
          onKeydown: customKeydown
        }
      },
      new DesignName('field.class'),
      undefined,
      undefined,
      undefined,
      () => mockValue,
      undefined,
      () => mockArrow
    )

    const attrs = (fieldInclude as unknown as { getAttrs: () => Record<string, unknown> }).getAttrs()
    expect(attrs.isValue).toBe(true)
    expect(attrs.value).toBe('input-value')
    expect(attrs.cancelShow).toBe(true)
    expect(attrs.counter).toBe(11)
    expect(attrs.disabledPrevious).toBe(true)
    expect(attrs.disabledNext).toBe(false)

    const binds = (fieldInclude as unknown as { toBinds: () => Record<string, unknown> }).toBinds()
    expect(binds.focus).toBe(true)
    expect(binds.label).toBe('My Label')
    expect(binds.arrowCarousel).toBe(true)
    expect(binds.arrowStepper).toBe(false)
    expect(binds.arrowAlign).toBe('left')
    expect(Array.isArray(binds.onClick)).toBe(true)
    expect(Array.isArray(binds.onKeydown)).toBe(true)
  })

  it('should trigger all scoreboard action callbacks and respect IME composition guard on keydown', () => {
    const onIcon = vi.fn()
    const onTrailing = vi.fn()
    const onNext = vi.fn()
    const onPrevious = vi.fn()

    const mockEvent = {
      isEnabled: () => true,
      onClear: vi.fn(),
      on: vi.fn()
    } as unknown as FieldEventInclude

    const mockArrow = {
      next: vi.fn(),
      previous: vi.fn()
    } as unknown as FieldArrowInclude

    const fieldInclude = new FieldInclude(
      {},
      new DesignName('field.class'),
      undefined,
      undefined,
      undefined,
      undefined,
      () => mockEvent,
      () => mockArrow,
      onIcon,
      onTrailing,
      onNext,
      onPrevious
    )

    const mockInput = document.createElement('input')
    mockInput.setAttribute('data-input', 'test-id')
    const focusSpy = vi.spyOn(mockInput, 'focus')
    const mockRoot = document.createElement('label')
    mockRoot.appendChild(mockInput)
    ;(fieldInclude as unknown as { element: { value: unknown } }).element.value = {
      elementHtml: mockRoot
    }

    const mockTarget = document.createElement('div')
    mockTarget.setAttribute('data-element', 'scoreboard')

    const dispatchScoreboardClick = (type: string) => {
      const event = new MouseEvent('click')
      const stopSpy = vi.spyOn(event, 'stopPropagation')
      Object.defineProperty(event, 'target', { value: mockTarget })
      ;(fieldInclude as unknown as { on: (event: MouseEvent, options: { type: string }) => void }).on(event, { type })
      expect(stopSpy).toHaveBeenCalled()
    }

    dispatchScoreboardClick('icon')
    expect(onIcon).toHaveBeenCalledTimes(1)

    dispatchScoreboardClick('icon-trailing')
    expect(onTrailing).toHaveBeenCalledTimes(1)

    dispatchScoreboardClick('cancel')
    expect(mockEvent.onClear).toHaveBeenCalledTimes(1)
    expect(focusSpy).toHaveBeenCalledTimes(1)

    dispatchScoreboardClick('next')
    expect(onNext).toHaveBeenCalledTimes(1)
    expect(mockArrow.next).toHaveBeenCalledTimes(1)
    expect(mockEvent.on).toHaveBeenCalledTimes(1)

    dispatchScoreboardClick('previous')
    expect(onPrevious).toHaveBeenCalledTimes(1)
    expect(mockArrow.previous).toHaveBeenCalledTimes(1)
    expect(mockEvent.on).toHaveBeenCalledTimes(2)

    // IME composition Enter must be ignored
    const composingEvent = new KeyboardEvent('keydown', { key: 'Enter', isComposing: true })
    Object.defineProperty(composingEvent, 'target', { value: mockTarget })
    ;(fieldInclude as unknown as { onKeydown: (event: KeyboardEvent, options?: { type: string }) => void }).onKeydown(composingEvent, { type: 'icon' })
    expect(onIcon).toHaveBeenCalledTimes(1)

    // Non-composing Enter triggers action
    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', isComposing: false })
    Object.defineProperty(enterEvent, 'target', { value: mockTarget })
    const preventSpy = vi.spyOn(enterEvent, 'preventDefault')
    ;(fieldInclude as unknown as { onKeydown: (event: KeyboardEvent, options?: { type: string }) => void }).onKeydown(enterEvent, { type: 'icon' })
    expect(onIcon).toHaveBeenCalledTimes(2)
    expect(preventSpy).toHaveBeenCalled()
  })
})
