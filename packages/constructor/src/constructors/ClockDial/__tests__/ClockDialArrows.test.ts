// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import { ClockDialArrows } from '../ClockDialArrows'
import { ClockDialList } from '../ClockDialList'
import { ClockDialValue } from '../ClockDialValue'
import type { ClockDialProps } from '../props'

describe('ClockDialArrows', () => {
  const createArrows = (props: ClockDialProps, initialValue?: number) => {
    const naming = new DesignName('d.clock-dial')
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(initialValue))
    const list = new ClockDialList(props, naming)
    const valueItem = new ClockDialValue(props, () => model)
    const arrows = new ClockDialArrows(naming, () => list, () => valueItem)

    return { arrows, list, model, valueItem }
  }

  describe('Selection arrow rotation (styleSelect)', () => {
    it('calculates styleSelect for 12-hour, 24-hour, and minute modes', () => {
      const twelveHours = createArrows({ type: '12' }, 6)
      const twentyFourHours = createArrows({ type: '24' }, 14)
      const minutes = createArrows({ type: 'minute' }, 15)
      const zeroMinute = createArrows({ type: 'minute' }, 0)

      expect(twelveHours.arrows.styleSelect).toEqual({
        '--d-clockDial-sys-arrowRotate': '180deg'
      })
      expect(twentyFourHours.arrows.styleSelect).toEqual({
        '--d-clockDial-sys-arrowRotate': '420deg'
      })
      expect(minutes.arrows.styleSelect).toEqual({
        '--d-clockDial-sys-arrowRotate': '90deg'
      })
      expect(zeroMinute.arrows.styleSelect).toEqual({
        '--d-clockDial-sys-arrowRotate': '0deg'
      })
    })

    it('returns empty styleSelect when value is unset, 0 in 12h mode, or in clock mode', () => {
      expect(createArrows({ type: '12' }, undefined).arrows.styleSelect).toEqual({})
      expect(createArrows({ type: '12' }, 0).arrows.styleSelect).toEqual({})
      expect(createArrows({ type: '12', clock: true }, 6).arrows.styleSelect).toEqual({})
    })
  })

  describe('Clock hand rotations (styleHour, styleMinute, styleSecond)', () => {
    it('calculates styleHour with minute and second fractional adjustments', () => {
      const { arrows } = createArrows({ hour: 3, minute: 30, second: 30, type: '12' })
      const expectedHourDegrees = (360 / 12) * 3 + (360 / 12 / 60) * 30 + (360 / 12 / 3600) * 30

      expect(arrows.styleHour).toEqual({
        '--d-clockDial-sys-arrowRotate': `${expectedHourDegrees}deg`
      })
    })

    it('calculates styleHour without minute/second when omitted and handles 0 correctly', () => {
      expect(createArrows({ hour: 0, type: '24' }).arrows.styleHour).toEqual({
        '--d-clockDial-sys-arrowRotate': '0deg'
      })
      expect(createArrows({ hour: 6, type: '12' }).arrows.styleHour).toEqual({
        '--d-clockDial-sys-arrowRotate': '180deg'
      })
    })

    it('calculates styleMinute with and without second adjustment', () => {
      const withSeconds = createArrows({ minute: 15, second: 30, type: '12' })
      const withoutSeconds = createArrows({ minute: 0, type: '12' })
      const expectedMinuteDegrees = (360 / 60) * 15 + (360 / 3600) * 30

      expect(withSeconds.arrows.styleMinute).toEqual({
        '--d-clockDial-sys-arrowRotate': `${expectedMinuteDegrees}deg`
      })
      expect(withoutSeconds.arrows.styleMinute).toEqual({
        '--d-clockDial-sys-arrowRotate': '0deg'
      })
    })

    it('calculates styleSecond rotation including 0 boundary', () => {
      expect(createArrows({ second: 45, type: '12' }).arrows.styleSecond).toEqual({
        '--d-clockDial-sys-arrowRotate': '270deg'
      })
      expect(createArrows({ second: 0, type: '12' }).arrows.styleSecond).toEqual({
        '--d-clockDial-sys-arrowRotate': '0deg'
      })
    })

    it('returns empty styles when hands are not provided', () => {
      const { arrows } = createArrows({ type: '12' })

      expect(arrows.styleHour).toEqual({})
      expect(arrows.styleMinute).toEqual({})
      expect(arrows.styleSecond).toEqual({})
    })
  })
})
