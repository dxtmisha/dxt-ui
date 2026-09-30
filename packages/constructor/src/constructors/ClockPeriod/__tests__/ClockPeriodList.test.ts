// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { EnabledInclude } from '../../../classes/EnabledInclude'
import { TextInclude } from '../../../classes/TextInclude'
import { ClockPeriodList } from '../ClockPeriodList'
import { ClockPeriodValue } from '../ClockPeriodValue'
import type { ClockPeriodProps } from '../props'
import type { ClockPeriodType } from '../basicTypes'

describe('ClockPeriodList', () => {
  it('generates AM and PM items with correct labels and selected state', () => {
    const props: ClockPeriodProps = { value: 'am' }
    const text = new TextInclude(props)
    const value = new ClockPeriodValue(props)
    const enabled = new EnabledInclude(props)
    const list = new ClockPeriodList(text, value, enabled)

    const items = list.items.value
    expect(items).toHaveLength(2)

    expect(items[0]).toEqual({
      value: 'am',
      label: 'AM',
      selected: true,
      disabled: false
    })

    expect(items[1]).toEqual({
      value: 'pm',
      label: 'PM',
      selected: false,
      disabled: false
    })
  })

  it('respects custom text for AM and PM', () => {
    const props: ClockPeriodProps = {
      textAm: 'Morning',
      textPm: 'Evening',
      value: 'pm'
    }
    const text = new TextInclude(props)
    const value = new ClockPeriodValue(props)
    const enabled = new EnabledInclude(props)
    const list = new ClockPeriodList(text, value, enabled)

    const items = list.items.value
    expect(items[0].label).toBe('Morning')
    expect(items[0].selected).toBe(false)
    expect(items[1].label).toBe('Evening')
    expect(items[1].selected).toBe(true)
  })

  it('marks items as disabled when component is disabled', () => {
    const props: ClockPeriodProps = { disabled: true }
    const text = new TextInclude(props)
    const value = new ClockPeriodValue(props)
    const enabled = new EnabledInclude(props)
    const list = new ClockPeriodList(text, value, enabled)

    const items = list.items.value
    expect(items[0].disabled).toBe(true)
    expect(items[1].disabled).toBe(true)
  })
})
