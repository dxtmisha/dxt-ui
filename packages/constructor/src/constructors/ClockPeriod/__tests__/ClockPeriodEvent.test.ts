// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { EnabledInclude } from '../../../classes/EnabledInclude'
import { EventClickInclude } from '../../../classes/EventClickInclude'
import { ModelInclude } from '../../../classes/ModelInclude'
import { ClockPeriodEvent } from '../ClockPeriodEvent'
import { ClockPeriodValue } from '../ClockPeriodValue'
import { ClockPeriodType } from '../basicTypes'
import type { ClockPeriodProps } from '../props'

describe('ClockPeriodEvent', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const createFixture = (props: ClockPeriodProps = { value: ClockPeriodType.am }) => {
    const emitsSpy = vi.fn()
    const enabled = new EnabledInclude(props)
    const eventClick = new EventClickInclude(undefined, () => enabled, emitsSpy)
    const model = new ModelInclude<ClockPeriodType>('value', emitsSpy)
    const value = new ClockPeriodValue(props, () => model)
    const getEnabled = vi.fn(() => enabled)
    const getEventClick = vi.fn(() => eventClick)
    const getValue = vi.fn(() => value)
    const eventManager = new ClockPeriodEvent(getEnabled, getEventClick, getValue)

    return {
      emitsSpy,
      enabled,
      eventClick,
      model,
      value,
      getEnabled,
      getEventClick,
      getValue,
      eventManager
    }
  }

  describe('Lazy dependency coupling', () => {
    it('should not invoke dependency getters eagerly during construction', () => {
      const { getEnabled, getEventClick, getValue } = createFixture()

      expect(getEnabled).not.toHaveBeenCalled()
      expect(getEventClick).not.toHaveBeenCalled()
      expect(getValue).not.toHaveBeenCalled()
    })
  })

  describe('Click interactions', () => {
    it('should select new period on click, stop propagation, and emit model and click events', () => {
      const { emitsSpy, value, eventManager } = createFixture({ value: ClockPeriodType.am })

      const targetElement = document.createElement('button')
      targetElement.dataset.value = ClockPeriodType.pm

      const mouseEvent = {
        currentTarget: targetElement,
        target: targetElement,
        stopPropagation: vi.fn()
      } as unknown as MouseEvent

      eventManager.onClick(mouseEvent)

      expect(mouseEvent.stopPropagation).toHaveBeenCalledTimes(1)
      expect(value.get()).toBe(ClockPeriodType.pm)
      expect(emitsSpy).toHaveBeenCalledWith('update:value', ClockPeriodType.pm)
      expect(emitsSpy).toHaveBeenCalledWith('update:modelValue', ClockPeriodType.pm)
      expect(emitsSpy).toHaveBeenCalledWith('click', mouseEvent, {
        type: 'item',
        value: ClockPeriodType.pm,
        detail: undefined
      })
      expect(emitsSpy).toHaveBeenCalledWith('clickLite', {
        type: 'item',
        value: ClockPeriodType.pm,
        detail: undefined
      })
    })

    it('should resolve data-value from nested child target via closest when currentTarget has no dataset value', () => {
      const { emitsSpy, value, eventManager } = createFixture({ value: ClockPeriodType.am })

      const container = document.createElement('div')
      const button = document.createElement('button')
      button.dataset.value = ClockPeriodType.pm
      const innerSpan = document.createElement('span')
      button.appendChild(innerSpan)
      container.appendChild(button)

      const mouseEvent = {
        currentTarget: container,
        target: innerSpan,
        stopPropagation: vi.fn()
      } as unknown as MouseEvent

      eventManager.onClick(mouseEvent)

      expect(value.get()).toBe(ClockPeriodType.pm)
      expect(emitsSpy).toHaveBeenCalledWith('clickLite', {
        type: 'item',
        value: ClockPeriodType.pm,
        detail: undefined
      })
    })

    it('should ignore click if period is already selected, disabled, readonly, or target data-value is invalid/null', () => {
      const selectedFixture = createFixture({ value: ClockPeriodType.am })
      const amButton = document.createElement('button')
      amButton.dataset.value = ClockPeriodType.am

      selectedFixture.eventManager.onClick({
        target: amButton,
        stopPropagation: vi.fn()
      } as unknown as MouseEvent)
      expect(selectedFixture.emitsSpy).not.toHaveBeenCalled()

      const invalidButton = document.createElement('button')
      invalidButton.dataset.value = 'invalid'
      const stopPropagationSpy = vi.fn()
      selectedFixture.eventManager.onClick({
        target: invalidButton,
        stopPropagation: stopPropagationSpy
      } as unknown as MouseEvent)
      expect(stopPropagationSpy).toHaveBeenCalledTimes(1)
      expect(selectedFixture.emitsSpy).not.toHaveBeenCalled()

      selectedFixture.eventManager.onClick({
        target: null,
        currentTarget: null,
        stopPropagation: vi.fn()
      } as unknown as MouseEvent)
      expect(selectedFixture.emitsSpy).not.toHaveBeenCalled()

      const pmButton = document.createElement('button')
      pmButton.dataset.value = ClockPeriodType.pm

      const disabledFixture = createFixture({ value: ClockPeriodType.am, disabled: true })
      disabledFixture.eventManager.onClick({
        target: pmButton,
        stopPropagation: vi.fn()
      } as unknown as MouseEvent)
      expect(disabledFixture.value.get()).toBe(ClockPeriodType.am)
      expect(disabledFixture.emitsSpy).not.toHaveBeenCalled()

      const readonlyFixture = createFixture({ value: ClockPeriodType.am, readonly: true })
      readonlyFixture.eventManager.onClick({
        target: pmButton,
        stopPropagation: vi.fn()
      } as unknown as MouseEvent)
      expect(readonlyFixture.value.get()).toBe(ClockPeriodType.am)
      expect(readonlyFixture.emitsSpy).not.toHaveBeenCalled()
    })
  })

  describe('Keyboard navigation and IME composition guard', () => {
    it('should navigate with ArrowUp, ArrowLeft, ArrowDown, ArrowRight, Space, and Enter', () => {
      const { value, eventManager } = createFixture({ value: ClockPeriodType.am })
      const preventDefault = vi.fn()

      eventManager.onKeydown({ key: 'ArrowDown', preventDefault } as unknown as KeyboardEvent)
      expect(preventDefault).toHaveBeenCalledTimes(1)
      expect(value.get()).toBe(ClockPeriodType.pm)

      eventManager.onKeydown({ key: 'ArrowUp', preventDefault } as unknown as KeyboardEvent)
      expect(preventDefault).toHaveBeenCalledTimes(2)
      expect(value.get()).toBe(ClockPeriodType.am)

      eventManager.onKeydown({ key: 'ArrowRight', preventDefault } as unknown as KeyboardEvent)
      expect(preventDefault).toHaveBeenCalledTimes(3)
      expect(value.get()).toBe(ClockPeriodType.pm)

      eventManager.onKeydown({ key: 'ArrowLeft', preventDefault } as unknown as KeyboardEvent)
      expect(preventDefault).toHaveBeenCalledTimes(4)
      expect(value.get()).toBe(ClockPeriodType.am)

      eventManager.onKeydown({ key: ' ', preventDefault } as unknown as KeyboardEvent)
      expect(preventDefault).toHaveBeenCalledTimes(5)
      expect(value.get()).toBe(ClockPeriodType.pm)

      eventManager.onKeydown({ key: 'Enter', preventDefault } as unknown as KeyboardEvent)
      expect(preventDefault).toHaveBeenCalledTimes(6)
      expect(value.get()).toBe(ClockPeriodType.am)

      eventManager.onKeydown({ key: 'Tab', preventDefault } as unknown as KeyboardEvent)
      expect(preventDefault).toHaveBeenCalledTimes(6)
      expect(value.get()).toBe(ClockPeriodType.am)
    })

    it('should ignore keyboard events during IME composition and when disabled or readonly', () => {
      const enabledFixture = createFixture({ value: ClockPeriodType.am })
      const preventDefault = vi.fn()

      enabledFixture.eventManager.onKeydown({
        key: 'Enter',
        isComposing: true,
        preventDefault
      } as unknown as KeyboardEvent)
      expect(preventDefault).not.toHaveBeenCalled()
      expect(enabledFixture.value.get()).toBe(ClockPeriodType.am)
      expect(enabledFixture.emitsSpy).not.toHaveBeenCalled()

      const disabledFixture = createFixture({ value: ClockPeriodType.am, disabled: true })
      disabledFixture.eventManager.onKeydown({
        key: 'ArrowDown',
        preventDefault
      } as unknown as KeyboardEvent)
      expect(preventDefault).not.toHaveBeenCalled()
      expect(disabledFixture.value.get()).toBe(ClockPeriodType.am)

      const readonlyFixture = createFixture({ value: ClockPeriodType.am, readonly: true })
      readonlyFixture.eventManager.onKeydown({
        key: ' ',
        preventDefault
      } as unknown as KeyboardEvent)
      expect(preventDefault).not.toHaveBeenCalled()
      expect(readonlyFixture.value.get()).toBe(ClockPeriodType.am)
    })

    it('should fall back safely when MouseEvent is unavailable (SSR / non-DOM runtime)', () => {
      const originalMouseEvent = globalThis.MouseEvent
      vi.stubGlobal('MouseEvent', undefined)

      try {
        const { emitsSpy, value, eventManager } = createFixture({ value: ClockPeriodType.am })
        eventManager.select(ClockPeriodType.pm)

        expect(value.get()).toBe(ClockPeriodType.pm)
        expect(emitsSpy).toHaveBeenCalledWith('click', {}, {
          type: 'item',
          value: ClockPeriodType.pm,
          detail: undefined
        })
      } finally {
        vi.stubGlobal('MouseEvent', originalMouseEvent)
      }
    })
  })
})
