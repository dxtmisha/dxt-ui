// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { nextTick, reactive } from 'vue'
import { ClockPeriodValue } from '../ClockPeriodValue'
import { ClockPeriodType } from '../basicTypes'
import type { ClockPeriodProps } from '../props'

describe('ClockPeriodValue', () => {
  it('returns props value if set', () => {
    const props: ClockPeriodProps = { value: ClockPeriodType.pm }
    const periodValue = new ClockPeriodValue(props)

    expect(periodValue.value.value).toBe(ClockPeriodType.pm)
    expect(periodValue.isPm()).toBe(true)
    expect(periodValue.isAm()).toBe(false)
  })

  it('sets period value by hour', () => {
    const props: ClockPeriodProps = {}
    const periodValue = new ClockPeriodValue(props)

    expect(periodValue.value.value).toBe(ClockPeriodType.am)

    periodValue.setByHour(14)
    expect(periodValue.value.value).toBe(ClockPeriodType.pm)
    expect(periodValue.isPm()).toBe(true)

    periodValue.setByHour(9)
    expect(periodValue.value.value).toBe(ClockPeriodType.am)
    expect(periodValue.isAm()).toBe(true)

    periodValue.setByHour(0)
    expect(periodValue.value.value).toBe(ClockPeriodType.am)
    expect(periodValue.isAm()).toBe(true)

    periodValue.setByHour(12)
    expect(periodValue.value.value).toBe(ClockPeriodType.pm)
    expect(periodValue.isPm()).toBe(true)
  })

  it('defaults to am when value is not provided', () => {
    const props: ClockPeriodProps = {}
    const periodValue = new ClockPeriodValue(props)

    expect(periodValue.value.value).toBe(ClockPeriodType.am)
  })

  it('toggles between am and pm', () => {
    const props: ClockPeriodProps = { value: ClockPeriodType.am }
    const periodValue = new ClockPeriodValue(props)

    expect(periodValue.isAm()).toBe(true)

    periodValue.toggle()
    expect(periodValue.value.value).toBe(ClockPeriodType.pm)

    periodValue.toggle()
    expect(periodValue.value.value).toBe(ClockPeriodType.am)
  })

  it('sets am and pm explicitly', () => {
    const props: ClockPeriodProps = {}
    const periodValue = new ClockPeriodValue(props)

    periodValue.setPm()
    expect(periodValue.value.value).toBe(ClockPeriodType.pm)

    periodValue.setAm()
    expect(periodValue.value.value).toBe(ClockPeriodType.am)
  })

  it('updates reactive value when props change', async () => {
    const props = reactive<ClockPeriodProps>({ value: ClockPeriodType.am })
    const periodValue = new ClockPeriodValue(props)

    expect(periodValue.value.value).toBe(ClockPeriodType.am)

    props.value = ClockPeriodType.pm
    await nextTick()

    expect(periodValue.value.value).toBe(ClockPeriodType.pm)
    expect(periodValue.isPm()).toBe(true)

    props.modelValue = ClockPeriodType.am
    await nextTick()

    expect(periodValue.value.value).toBe(ClockPeriodType.am)
    expect(periodValue.isAm()).toBe(true)
  })
})
