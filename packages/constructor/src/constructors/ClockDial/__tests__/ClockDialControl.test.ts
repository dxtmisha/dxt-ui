// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { EnabledInclude } from '../../../classes/EnabledInclude'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import { ClockDialControl } from '../ClockDialControl'
import { ClockDialEmit } from '../ClockDialEmit'
import { ClockDialList } from '../ClockDialList'
import { ClockDialValue } from '../ClockDialValue'
import type { ClockDialProps } from '../props'

describe('ClockDialControl', () => {
  function createClockDialControl(props: ClockDialProps = { type: '12' }, initialValue: number = 2) {
    const emitsSpy = vi.fn()
    const enabled = new EnabledInclude(props)
    const list = new ClockDialList(props, 'd-clock-dial')
    const model = new ModelValueInclude<number>('value', emitsSpy, undefined, ref(initialValue))
    const valueItem = new ClockDialValue(props, model)
    const emitsItem = new ClockDialEmit(props, list, valueItem, emitsSpy as any)
    const control = new ClockDialControl(props, emitsItem, enabled, list, valueItem)

    return { control, model, valueItem, emitsSpy, enabled, list }
  }

  it('increases value clockwise in 12-hour mode', () => {
    const { control, model, emitsSpy } = createClockDialControl({ type: '12' }, 2)

    control.increase()
    expect(model.getValue()).toBe(3)
    expect(emitsSpy).toHaveBeenCalledWith('input', expect.anything(), 3)
    expect(emitsSpy).toHaveBeenCalledWith('change', expect.anything(), 3)

    control.increase()
    expect(model.getValue()).toBe(4)
  })

  it('decreases value counterclockwise in 12-hour mode', () => {
    const { control, model, emitsSpy } = createClockDialControl({ type: '12' }, 5)

    control.decrease()
    expect(model.getValue()).toBe(4)
    expect(emitsSpy).toHaveBeenCalledWith('input', expect.anything(), 4)
    expect(emitsSpy).toHaveBeenCalledWith('change', expect.anything(), 4)

    control.decrease()
    expect(model.getValue()).toBe(3)
  })

  it('wraps around 12 to 1 and 1 to 12 in 12-hour mode', () => {
    const { control, model } = createClockDialControl({ type: '12' }, 12)

    control.increase()
    expect(model.getValue()).toBe(1)

    control.decrease()
    expect(model.getValue()).toBe(12)
  })

  it('wraps around 23 to 0 and 0 to 23 in 24-hour mode', () => {
    const { control, model } = createClockDialControl({ type: '24' }, 23)

    control.increase()
    expect(model.getValue()).toBe(0)

    control.increase()
    expect(model.getValue()).toBe(1)

    control.decrease()
    expect(model.getValue()).toBe(0)

    control.decrease()
    expect(model.getValue()).toBe(23)
  })

  it('navigates by step in minute mode', () => {
    const { control, model } = createClockDialControl({ type: 'minute', step: 5 }, 50)

    control.increase()
    expect(model.getValue()).toBe(55)

    control.increase()
    expect(model.getValue()).toBe(0)

    control.increase()
    expect(model.getValue()).toBe(5)

    control.decrease()
    expect(model.getValue()).toBe(0)
  })

  it('handles initial undefined value on step', () => {
    const emitsSpy = vi.fn()
    const props: ClockDialProps = { type: '12' }
    const enabled = new EnabledInclude(props)
    const list = new ClockDialList(props, 'd-clock-dial')
    const model = new ModelValueInclude<number>('value', emitsSpy, undefined, ref(undefined as any))
    const valueItem = new ClockDialValue(props, model)
    const emitsItem = new ClockDialEmit(props, list, valueItem, emitsSpy as any)
    const control = new ClockDialControl(props, emitsItem, enabled, list, valueItem)

    control.increase()
    expect(model.getValue()).toBe(1)
  })

  it('handles toEdge for first and last elements', () => {
    const { control, model } = createClockDialControl({ type: '12' }, 6)

    control.toEdge(false)
    expect(model.getValue()).toBe(1)

    control.toEdge(true)
    expect(model.getValue()).toBe(12)
  })

  it('does nothing when disabled or clock mode', () => {
    const disabledInstance = createClockDialControl({ type: '12', disabled: true }, 5)
    disabledInstance.control.increase()
    expect(disabledInstance.model.getValue()).toBe(5)

    const clockInstance = createClockDialControl({ type: '12', clock: true }, 5)
    clockInstance.control.increase()
    expect(clockInstance.model.getValue()).toBe(5)
  })
})
