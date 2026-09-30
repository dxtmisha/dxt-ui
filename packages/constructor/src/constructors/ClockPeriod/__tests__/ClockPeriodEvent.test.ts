// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { EnabledInclude } from '../../../classes/EnabledInclude'
import { EventClickInclude } from '../../../classes/EventClickInclude'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import { TextInclude } from '../../../classes/TextInclude'
import { ClockPeriodEvent } from '../ClockPeriodEvent'
import { ClockPeriodList } from '../ClockPeriodList'
import { ClockPeriodValue } from '../ClockPeriodValue'
import type { ClockPeriodProps } from '../props'
import type { ClockPeriodType } from '../basicTypes'

describe('ClockPeriodEvent', () => {
  it('selects new period on click and emits events', () => {
    const emitsSpy = vi.fn()
    const props: ClockPeriodProps = { value: 'am' }
    const enabled = new EnabledInclude(props)
    const eventClick = new EventClickInclude(undefined, enabled, emitsSpy as any)
    const value = new ClockPeriodValue(props)
    const model = new ModelValueInclude<ClockPeriodType>('value', emitsSpy, eventClick, value.value)
    const text = new TextInclude(props)
    const list = new ClockPeriodList(text, value, enabled)
    const eventManager = new ClockPeriodEvent(props, enabled, value, list, eventClick, model)

    const mouseEvent = { stopPropagation: vi.fn() } as unknown as MouseEvent
    eventManager.onClick(mouseEvent, 'pm')

    expect(mouseEvent.stopPropagation).toHaveBeenCalled()
    expect(model.getValue()).toBe('pm')
    expect(value.get()).toBe('pm')
    expect(emitsSpy).toHaveBeenCalledWith('click', mouseEvent, {
      type: 'item',
      value: 'pm',
      detail: undefined
    })
    expect(emitsSpy).toHaveBeenCalledWith('clickLite', {
      type: 'item',
      value: 'pm',
      detail: undefined
    })
  })

  it('ignores click if already selected', () => {
    const emitsSpy = vi.fn()
    const props: ClockPeriodProps = { value: 'am' }
    const enabled = new EnabledInclude(props)
    const eventClick = new EventClickInclude(undefined, enabled, emitsSpy as any)
    const value = new ClockPeriodValue(props)
    const model = new ModelValueInclude<ClockPeriodType>('value', emitsSpy, eventClick, value.value)
    const text = new TextInclude(props)
    const list = new ClockPeriodList(text, value, enabled)
    const eventManager = new ClockPeriodEvent(props, enabled, value, list, eventClick, model)

    const mouseEvent = { stopPropagation: vi.fn() } as unknown as MouseEvent
    eventManager.onClick(mouseEvent, 'am')

    expect(emitsSpy).not.toHaveBeenCalled()
  })

  it('handles keyboard navigation with arrow keys and space/enter', () => {
    const emitsSpy = vi.fn()
    const props: ClockPeriodProps = { value: 'am' }
    const enabled = new EnabledInclude(props)
    const eventClick = new EventClickInclude(undefined, enabled, emitsSpy as any)
    const value = new ClockPeriodValue(props)
    const model = new ModelValueInclude<ClockPeriodType>('value', emitsSpy, eventClick, value.value)
    const text = new TextInclude(props)
    const list = new ClockPeriodList(text, value, enabled)
    const eventManager = new ClockPeriodEvent(props, enabled, value, list, eventClick, model)

    const preventDefaultSpy = vi.fn()

    // ArrowDown switches to PM
    eventManager.onKeydown({ key: 'ArrowDown', preventDefault: preventDefaultSpy } as unknown as KeyboardEvent)
    expect(preventDefaultSpy).toHaveBeenCalled()
    expect(model.getValue()).toBe('pm')
    expect(value.get()).toBe('pm')

    // ArrowUp switches to AM
    eventManager.onKeydown({ key: 'ArrowUp', preventDefault: preventDefaultSpy } as unknown as KeyboardEvent)
    expect(model.getValue()).toBe('am')
    expect(value.get()).toBe('am')

    // Space toggles
    eventManager.onKeydown({ key: ' ', preventDefault: preventDefaultSpy } as unknown as KeyboardEvent)
    expect(model.getValue()).toBe('pm')
    expect(value.get()).toBe('pm')
  })
})
