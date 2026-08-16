// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { GeoIntl } from '@dxtmisha/functional'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import { ClockDialValue } from '../ClockDialValue'

describe('ClockDialValue', () => {
  it('returns hour, minute, second values and visibility flags', () => {
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(5))
    const valueManager = new ClockDialValue({ hour: 5, minute: 30, second: 15 }, model)

    expect(valueManager.value).toBe(5)
    expect(valueManager.hour).toBe(5)
    expect(valueManager.minute).toBe(30)
    expect(valueManager.second).toBe(15)
    expect(valueManager.isSelectVisible()).toBe(true)
    expect(valueManager.isHourVisible()).toBe(true)
    expect(valueManager.isMinuteVisible()).toBe(true)
    expect(valueManager.isSecondVisible()).toBe(true)
    expect(valueManager.isTextVisible()).toBe(false)
    expect(valueManager.text).toBe(new GeoIntl().date(new Date(1970, 0, 1, 5, 30, 15), 'time'))
  })

  it('checks isTextVisible based on clock and showTime props', () => {
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(5))
    const textClock = new ClockDialValue({ clock: true, showTime: true, hour: 10, minute: 15 }, model)
    const textNoClock = new ClockDialValue({ clock: false, showTime: true, hour: 10, minute: 15 }, model)
    const clockNoText = new ClockDialValue({ clock: true, showTime: false, hour: 10, minute: 15 }, model)

    expect(textClock.isTextVisible()).toBe(true)
    expect(textNoClock.isTextVisible()).toBe(false)
    expect(clockNoText.isTextVisible()).toBe(false)
  })

  it('formats text without seconds when second is not provided', () => {
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(5))
    const valueManager = new ClockDialValue({ type: '24', hour: 14, minute: 5 }, model)

    expect(valueManager.text).toBe(new GeoIntl().date(new Date(1970, 0, 1, 14, 5), 'hour-minute', undefined, true))
  })

  it('handles defaults when props are unset', () => {
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(undefined))
    const valueManager = new ClockDialValue({}, model)

    expect(valueManager.value).toBe(0)
    expect(valueManager.hour).toBe(0)
    expect(valueManager.minute).toBe(0)
    expect(valueManager.second).toBe(0)
    expect(valueManager.isSelectVisible()).toBe(false)
    expect(valueManager.isHourVisible()).toBe(false)
    expect(valueManager.isMinuteVisible()).toBe(false)
    expect(valueManager.isSecondVisible()).toBe(false)
    expect(valueManager.isTextVisible()).toBe(false)
    expect(valueManager.text).toBe(new GeoIntl().date(new Date(1970, 0, 1, 0, 0), 'hour-minute'))
  })

  it('correctly handles 0 as a valid numeric value for hands', () => {
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(0))
    const valueManager = new ClockDialValue({ type: 'minute', hour: 0, minute: 0, second: 0 }, model)

    expect(valueManager.value).toBe(0)
    expect(valueManager.hour).toBe(0)
    expect(valueManager.isSelectVisible()).toBe(true)
    expect(valueManager.isHourVisible()).toBe(true)
    expect(valueManager.isMinuteVisible()).toBe(true)
    expect(valueManager.isSecondVisible()).toBe(true)
  })

  it('hides arrowSelect when value is 0 for type 12', () => {
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(0))
    const valueManager = new ClockDialValue({ type: '12' }, model)

    expect(valueManager.isSelectVisible()).toBe(true)
    expect(valueManager.isArrowSelectVisible()).toBe(false)
  })

  it('shows arrowSelect when value is greater than 0 for type 12', () => {
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(3))
    const valueManager = new ClockDialValue({ type: '12' }, model)

    expect(valueManager.isSelectVisible()).toBe(true)
    expect(valueManager.isArrowSelectVisible()).toBe(true)
  })

  it('shows arrowSelect when value is 0 for type minute', () => {
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(0))
    const valueManager = new ClockDialValue({ type: 'minute' }, model)

    expect(valueManager.isSelectVisible()).toBe(true)
    expect(valueManager.isArrowSelectVisible()).toBe(true)
  })

  it('hides selection and arrow when clock prop is true', () => {
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(5))
    const valueManager = new ClockDialValue({ clock: true, hour: 5, minute: 30 }, model)

    expect(valueManager.isSelectVisible()).toBe(false)
    expect(valueManager.isArrowSelectVisible()).toBe(false)
    expect(valueManager.isHourVisible()).toBe(true)
    expect(valueManager.isMinuteVisible()).toBe(true)
  })

  it('sets model value via set method', () => {
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(4))
    const valueManager = new ClockDialValue({}, model)

    expect(valueManager.value).toBe(4)

    valueManager.set(9)
    expect(valueManager.value).toBe(9)

    valueManager.set(undefined)
    expect(valueManager.value).toBe(0)
  })
})
