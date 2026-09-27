// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import { ClockPeriodValue } from '../ClockPeriodValue'
import type { ClockPeriodProps } from '../props'
import type { ClockPeriodType } from '../basicTypes'

describe('ClockPeriodValue', () => {
  it('returns model value if set', () => {
    const props: ClockPeriodProps = {}
    const model = new ModelValueInclude<ClockPeriodType>('value', undefined, undefined, ref('pm'))
    const periodValue = new ClockPeriodValue(props, model)

    expect(periodValue.value).toBe('pm')
    expect(periodValue.isPm()).toBe(true)
    expect(periodValue.isAm()).toBe(false)
  })

  it('deduces period from hour when modelValue is empty', () => {
    const propsPm: ClockPeriodProps = { hour: 14 }
    const modelPm = new ModelValueInclude<ClockPeriodType>('value', undefined, undefined, ref(undefined))
    const periodValuePm = new ClockPeriodValue(propsPm, modelPm)

    expect(periodValuePm.value).toBe('pm')

    const propsAm: ClockPeriodProps = { hour: 9 }
    const modelAm = new ModelValueInclude<ClockPeriodType>('value', undefined, undefined, ref(undefined))
    const periodValueAm = new ClockPeriodValue(propsAm, modelAm)

    expect(periodValueAm.value).toBe('am')
  })

  it('defaults to am when neither model nor hour is provided', () => {
    const props: ClockPeriodProps = {}
    const model = new ModelValueInclude<ClockPeriodType>('value', undefined, undefined, ref(undefined))
    const periodValue = new ClockPeriodValue(props, model)

    expect(periodValue.value).toBe('am')
  })

  it('toggles between am and pm', () => {
    const props: ClockPeriodProps = {}
    const model = new ModelValueInclude<ClockPeriodType>('value', undefined, undefined, ref('am'))
    const periodValue = new ClockPeriodValue(props, model)

    expect(periodValue.isAm()).toBe(true)

    periodValue.toggle()
    expect(model.getValue()).toBe('pm')

    periodValue.toggle()
    expect(model.getValue()).toBe('am')
  })

  it('sets am and pm explicitly', () => {
    const props: ClockPeriodProps = {}
    const model = new ModelValueInclude<ClockPeriodType>('value', undefined, undefined, ref(undefined))
    const periodValue = new ClockPeriodValue(props, model)

    periodValue.setPm()
    expect(model.getValue()).toBe('pm')

    periodValue.setAm()
    expect(model.getValue()).toBe('am')
  })
})
