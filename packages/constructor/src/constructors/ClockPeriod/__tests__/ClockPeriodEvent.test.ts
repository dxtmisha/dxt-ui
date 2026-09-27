// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { EnabledInclude } from '../../../classes/EnabledInclude'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import { TextInclude } from '../../../classes/TextInclude'
import { ClockPeriodEmit } from '../ClockPeriodEmit'
import { ClockPeriodEvent } from '../ClockPeriodEvent'
import { ClockPeriodList } from '../ClockPeriodList'
import { ClockPeriodValue } from '../ClockPeriodValue'
import type { ClockPeriodProps } from '../props'
import type { ClockPeriodType } from '../basicTypes'

describe('ClockPeriodEvent', () => {
  it('selects new period on click and emits events', () => {
    const emitsSpy = vi.fn()
    const props: ClockPeriodProps = { value: 'am' }
    const model = new ModelValueInclude<ClockPeriodType>('value', emitsSpy, undefined, ref('am'))
    const enabled = new EnabledInclude(props)
    const text = new TextInclude(props)
    const valueItem = new ClockPeriodValue(props, model)
    const list = new ClockPeriodList(text, valueItem, enabled)
    const emitsItem = new ClockPeriodEmit(emitsSpy as any)
    const eventManager = new ClockPeriodEvent(props, enabled, valueItem, list, emitsItem, model)

    const mouseEvent = { stopPropagation: vi.fn() } as unknown as MouseEvent
    eventManager.onClick(mouseEvent, 'pm')

    expect(mouseEvent.stopPropagation).toHaveBeenCalled()
    expect(model.getValue()).toBe('pm')
    expect(emitsSpy).toHaveBeenCalledWith('input', expect.anything(), 'pm')
    expect(emitsSpy).toHaveBeenCalledWith('change', expect.anything(), 'pm')
  })

  it('ignores click if already selected', () => {
    const emitsSpy = vi.fn()
    const props: ClockPeriodProps = { value: 'am' }
    const model = new ModelValueInclude<ClockPeriodType>('value', emitsSpy, undefined, ref('am'))
    const enabled = new EnabledInclude(props)
    const text = new TextInclude(props)
    const valueItem = new ClockPeriodValue(props, model)
    const list = new ClockPeriodList(text, valueItem, enabled)
    const emitsItem = new ClockPeriodEmit(emitsSpy as any)
    const eventManager = new ClockPeriodEvent(props, enabled, valueItem, list, emitsItem, model)

    const mouseEvent = { stopPropagation: vi.fn() } as unknown as MouseEvent
    eventManager.onClick(mouseEvent, 'am')

    expect(emitsSpy).not.toHaveBeenCalled()
  })

  it('handles keyboard navigation with arrow keys and space/enter', () => {
    const emitsSpy = vi.fn()
    const props: ClockPeriodProps = { value: 'am' }
    const model = new ModelValueInclude<ClockPeriodType>('value', emitsSpy, undefined, ref('am'))
    const enabled = new EnabledInclude(props)
    const text = new TextInclude(props)
    const valueItem = new ClockPeriodValue(props, model)
    const list = new ClockPeriodList(text, valueItem, enabled)
    const emitsItem = new ClockPeriodEmit(emitsSpy as any)
    const eventManager = new ClockPeriodEvent(props, enabled, valueItem, list, emitsItem, model)

    const preventDefaultSpy = vi.fn()

    // ArrowDown switches to PM
    eventManager.onKeydown({ key: 'ArrowDown', preventDefault: preventDefaultSpy } as unknown as KeyboardEvent)
    expect(preventDefaultSpy).toHaveBeenCalled()
    expect(model.getValue()).toBe('pm')

    // ArrowUp switches to AM
    eventManager.onKeydown({ key: 'ArrowUp', preventDefault: preventDefaultSpy } as unknown as KeyboardEvent)
    expect(model.getValue()).toBe('am')

    // Space toggles
    eventManager.onKeydown({ key: ' ', preventDefault: preventDefaultSpy } as unknown as KeyboardEvent)
    expect(model.getValue()).toBe('pm')
  })
})
