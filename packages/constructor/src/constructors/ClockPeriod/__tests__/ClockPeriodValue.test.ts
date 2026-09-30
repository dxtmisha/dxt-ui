// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { nextTick, reactive } from 'vue'
import { ClockPeriodValue } from '../ClockPeriodValue'
import type { ClockPeriodProps } from '../props'

describe('ClockPeriodValue', () => {
  it('returns props value if set', () => {
    const props: ClockPeriodProps = { value: 'pm' }
    const periodValue = new ClockPeriodValue(props)

    expect(periodValue.value.value).toBe('pm')
    expect(periodValue.isPm()).toBe(true)
    expect(periodValue.isAm()).toBe(false)
  })

  it('deduces period from hour when value is empty', () => {
    const propsPm: ClockPeriodProps = { hour: 14 }
    const periodValuePm = new ClockPeriodValue(propsPm)

    expect(periodValuePm.value.value).toBe('pm')

    const propsAm: ClockPeriodProps = { hour: 9 }
    const periodValueAm = new ClockPeriodValue(propsAm)

    expect(periodValueAm.value.value).toBe('am')
  })

  it('defaults to am when neither value nor hour is provided', () => {
    const props: ClockPeriodProps = {}
    const periodValue = new ClockPeriodValue(props)

    expect(periodValue.value.value).toBe('am')
  })

  it('toggles between am and pm', () => {
    const props: ClockPeriodProps = { value: 'am' }
    const periodValue = new ClockPeriodValue(props)

    expect(periodValue.isAm()).toBe(true)

    periodValue.toggle()
    expect(periodValue.value.value).toBe('pm')

    periodValue.toggle()
    expect(periodValue.value.value).toBe('am')
  })

  it('sets am and pm explicitly', () => {
    const props: ClockPeriodProps = {}
    const periodValue = new ClockPeriodValue(props)

    periodValue.setPm()
    expect(periodValue.value.value).toBe('pm')

    periodValue.setAm()
    expect(periodValue.value.value).toBe('am')
  })

  it('updates reactive value when props change', async () => {
    const props = reactive<ClockPeriodProps>({ value: 'am' })
    const periodValue = new ClockPeriodValue(props)

    expect(periodValue.value.value).toBe('am')

    props.value = 'pm'
    await nextTick()

    expect(periodValue.value.value).toBe('pm')
    expect(periodValue.isPm()).toBe(true)

    props.modelValue = 'am'
    await nextTick()

    expect(periodValue.value.value).toBe('am')
    expect(periodValue.isAm()).toBe(true)
  })
})
