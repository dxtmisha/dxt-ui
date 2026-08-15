// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import { ClockDialArrows } from '../ClockDialArrows'
import { ClockDialList } from '../ClockDialList'
import { ClockDialValue } from '../ClockDialValue'
import type { ClockDialProps } from '../props'

describe('ClockDialArrows', () => {
  it('calculates styleSelect when selected value is present', () => {
    const props: ClockDialProps = { type: '12' }
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(6))
    const list = new ClockDialList(props, 'd-clock-dial')
    const valueItem = new ClockDialValue(props, model)
    const arrows = new ClockDialArrows(props, 'd-clock-dial', list, valueItem)

    expect(arrows.styleSelect).toEqual({
      '--d-clock-dial-sys-arrowRotate': '180deg'
    })
  })

  it('returns empty styleSelect when no selected value is set', () => {
    const props: ClockDialProps = { type: '12' }
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(undefined))
    const list = new ClockDialList(props, 'd-clock-dial')
    const valueItem = new ClockDialValue(props, model)
    const arrows = new ClockDialArrows(props, 'd-clock-dial', list, valueItem)

    expect(arrows.styleSelect).toEqual({})
  })

  it('calculates styleHour with minute and second adjustments', () => {
    const props: ClockDialProps = { hour: 3, minute: 30, second: 30, type: '12' }
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(undefined))
    const list = new ClockDialList(props, 'd-clock-dial')
    const valueItem = new ClockDialValue(props, model)
    const arrows = new ClockDialArrows(props, 'd-clock-dial', list, valueItem)

    const expectedHourDeg = (360 / 12) * 3 + (360 / 12 / 60) * 30 + (360 / 12 / 3600) * 30
    expect(arrows.styleHour).toEqual({
      '--d-clock-dial-sys-arrowRotate': `${expectedHourDeg}deg`
    })
  })

  it('calculates styleMinute with second adjustment', () => {
    const props: ClockDialProps = { minute: 15, second: 30, type: '12' }
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(undefined))
    const list = new ClockDialList(props, 'd-clock-dial')
    const valueItem = new ClockDialValue(props, model)
    const arrows = new ClockDialArrows(props, 'd-clock-dial', list, valueItem)

    const expectedMinuteDeg = (360 / 60) * 15 + (360 / 3600) * 30
    expect(arrows.styleMinute).toEqual({
      '--d-clock-dial-sys-arrowRotate': `${expectedMinuteDeg}deg`
    })
  })

  it('calculates styleSecond rotation', () => {
    const props: ClockDialProps = { second: 45, type: '12' }
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(undefined))
    const list = new ClockDialList(props, 'd-clock-dial')
    const valueItem = new ClockDialValue(props, model)
    const arrows = new ClockDialArrows(props, 'd-clock-dial', list, valueItem)

    expect(arrows.styleSecond).toEqual({
      '--d-clock-dial-sys-arrowRotate': '270deg'
    })
  })

  it('returns empty styles when hands are not provided', () => {
    const props: ClockDialProps = { type: '12' }
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(undefined))
    const list = new ClockDialList(props, 'd-clock-dial')
    const valueItem = new ClockDialValue(props, model)
    const arrows = new ClockDialArrows(props, 'd-clock-dial', list, valueItem)

    expect(arrows.styleHour).toEqual({})
    expect(arrows.styleMinute).toEqual({})
    expect(arrows.styleSecond).toEqual({})
  })
})
