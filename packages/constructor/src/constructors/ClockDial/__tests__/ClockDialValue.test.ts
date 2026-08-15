// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
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
  })

  it('correctly handles 0 as a valid numeric value for hands', () => {
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(0))
    const valueManager = new ClockDialValue({ hour: 0, minute: 0, second: 0 }, model)

    expect(valueManager.value).toBe(0)
    expect(valueManager.hour).toBe(0)
    expect(valueManager.isSelectVisible()).toBe(true)
    expect(valueManager.isHourVisible()).toBe(true)
    expect(valueManager.isMinuteVisible()).toBe(true)
    expect(valueManager.isSecondVisible()).toBe(true)
  })
})
