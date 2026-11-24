// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { type ConstrEmit, DesignName } from '@dxtmisha/functional'

import { EnabledInclude } from '../../../classes/EnabledInclude'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import { ClockDialControl } from '../ClockDialControl'
import { ClockDialEmit } from '../ClockDialEmit'
import { ClockDialList } from '../ClockDialList'
import { ClockDialValue } from '../ClockDialValue'
import type { ClockDialProps } from '../props'
import type { ClockDialEmits } from '../types'

describe('ClockDialControl', () => {
  const createClockDialControl = (
    props: ClockDialProps = { type: '12' },
    initialValue?: number
  ) => {
    const emitsSpy = vi.fn()
    const emits = emitsSpy as unknown as ConstrEmit<ClockDialEmits>
    const enabled = new EnabledInclude(props)
    const list = new ClockDialList(props, new DesignName('d.clock-dial'))
    const model = new ModelValueInclude<number>('value', emits, undefined, ref(initialValue))
    const valueItem = new ClockDialValue(props, () => model)
    const emitsItem = new ClockDialEmit(props, () => list, () => valueItem, emits)
    const control = new ClockDialControl(
      props,
      () => emitsItem,
      () => enabled,
      () => list,
      () => valueItem
    )

    return { control, model, valueItem, emitsSpy, enabled, list }
  }

  describe('Step navigation (increase & decrease)', () => {
    it('increases value clockwise in 12-hour mode and emits input and change', () => {
      const { control, model, emitsSpy } = createClockDialControl({ type: '12' }, 2)

      control.increase()
      expect(model.get()).toBe(3)
      expect(emitsSpy).toHaveBeenCalledWith('input', expect.anything(), 3)
      expect(emitsSpy).toHaveBeenCalledWith('change', expect.anything(), 3)

      control.increase()
      expect(model.get()).toBe(4)
    })

    it('decreases value counterclockwise in 12-hour mode and emits input and change', () => {
      const { control, model, emitsSpy } = createClockDialControl({ type: '12' }, 5)

      control.decrease()
      expect(model.get()).toBe(4)
      expect(emitsSpy).toHaveBeenCalledWith('input', expect.anything(), 4)
      expect(emitsSpy).toHaveBeenCalledWith('change', expect.anything(), 4)

      control.decrease()
      expect(model.get()).toBe(3)
    })

    it('wraps around 12 <-> 1 in 12-hour mode and 23 <-> 0 <-> 1 in 24-hour mode', () => {
      const twelveHours = createClockDialControl({ type: '12' }, 12)
      twelveHours.control.increase()
      expect(twelveHours.model.get()).toBe(1)
      twelveHours.control.decrease()
      expect(twelveHours.model.get()).toBe(12)

      const twentyFourHours = createClockDialControl({ type: '24' }, 23)
      twentyFourHours.control.increase()
      expect(twentyFourHours.model.get()).toBe(0)
      twentyFourHours.control.increase()
      expect(twentyFourHours.model.get()).toBe(1)
      twentyFourHours.control.decrease()
      expect(twentyFourHours.model.get()).toBe(0)
      twentyFourHours.control.decrease()
      expect(twentyFourHours.model.get()).toBe(23)
    })

    it('navigates by step in minute mode and snaps from an unaligned/disabled value to closest mark', () => {
      const stepped = createClockDialControl({ type: 'minute', step: 5 }, 50)

      stepped.control.increase()
      expect(stepped.model.get()).toBe(55)
      stepped.control.increase()
      expect(stepped.model.get()).toBe(0)
      stepped.control.increase()
      expect(stepped.model.get()).toBe(5)
      stepped.control.decrease()
      expect(stepped.model.get()).toBe(0)

      const unaligned = createClockDialControl({ type: 'minute', step: 5 }, 7)
      unaligned.control.increase()
      expect(unaligned.model.get()).toBe(10)
    })

    it('handles initial undefined value on increase (first mark) and decrease (last mark)', () => {
      const incCase = createClockDialControl({ type: '12' }, undefined)
      incCase.control.increase()
      expect(incCase.model.get()).toBe(1)

      const decCase = createClockDialControl({ type: '12' }, undefined)
      decCase.control.decrease()
      expect(decCase.model.get()).toBe(12)
    })
  })

  describe('Edge navigation (toEdge) and guards', () => {
    it('navigates to first and last enabled marks via toEdge', () => {
      const { control, model } = createClockDialControl({ type: '12', min: 3, max: 9 }, 6)

      control.toEdge(false)
      expect(model.get()).toBe(3)

      control.toEdge(true)
      expect(model.get()).toBe(9)
    })

    it('does nothing when disabled, readonly, clock mode, or all marks are out of range', () => {
      const disabledCase = createClockDialControl({ type: '12', disabled: true }, 5)
      disabledCase.control.increase()
      disabledCase.control.decrease()
      disabledCase.control.toEdge(true)
      expect(disabledCase.model.get()).toBe(5)
      expect(disabledCase.emitsSpy).not.toHaveBeenCalled()

      const readonlyCase = createClockDialControl({ type: '12', readonly: true }, 5)
      readonlyCase.control.increase()
      readonlyCase.control.decrease()
      readonlyCase.control.toEdge(false)
      expect(readonlyCase.model.get()).toBe(5)
      expect(readonlyCase.emitsSpy).not.toHaveBeenCalled()

      const clockCase = createClockDialControl({ type: '12', clock: true }, 5)
      clockCase.control.increase()
      clockCase.control.decrease()
      clockCase.control.toEdge(true)
      expect(clockCase.model.get()).toBe(5)
      expect(clockCase.emitsSpy).not.toHaveBeenCalled()

      const noValidMarks = createClockDialControl({ type: '12', min: 20, max: 30 }, 5)
      noValidMarks.control.increase()
      noValidMarks.control.toEdge(false)
      expect(noValidMarks.model.get()).toBe(5)
      expect(noValidMarks.emitsSpy).not.toHaveBeenCalled()
    })
  })
})
