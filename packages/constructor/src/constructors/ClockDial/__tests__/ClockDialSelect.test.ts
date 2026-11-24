// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { EnabledInclude } from '../../../classes/EnabledInclude'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import { ClockDialList } from '../ClockDialList'
import { ClockDialSelect } from '../ClockDialSelect'
import type { ClockDialProps } from '../props'

describe('ClockDialSelect', () => {
  const createMockElement = (left: number, top: number, size = 40): HTMLSpanElement => {
    const element = document.createElement('span')

    element.getBoundingClientRect = () => ({
      left,
      top,
      right: left + size,
      bottom: top + size,
      width: size,
      height: size,
      x: left,
      y: top,
      toJSON: () => {}
    })

    return element
  }

  const createClockDialSelect = (
    props: ClockDialProps = { type: '12' },
    initialValue?: number
  ) => {
    const enabled = new EnabledInclude(props)
    const list = new ClockDialList(props, new DesignName('d.clock-dial'))
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(initialValue))
    const select = new ClockDialSelect(props, () => enabled, () => list, () => model)

    return { select, list, model, enabled }
  }

  describe('Static predicate and element registration', () => {
    it('evaluates ClockDialSelect.is based on clock prop', () => {
      expect(ClockDialSelect.is()).toBe(true)
      expect(ClockDialSelect.is({ clock: false })).toBe(true)
      expect(ClockDialSelect.is({ clock: true })).toBe(false)
    })

    it('registers, unregisters, and resets element references cleanly', () => {
      const { select, model } = createClockDialSelect({ type: '12' })
      const firstElement = createMockElement(100, 100)

      select.setElement(0, firstElement)
      expect(select.selectByCoordinates(120, 120)?.value).toBe(1)

      select.setElement(0, null)
      model.set(undefined)
      expect(select.selectByCoordinates(120, 120)).toBeNull()

      select.setElement(0, firstElement)
      expect(select.reset()).toBe(select)
      expect(select.selectByCoordinates(120, 120)).toBeNull()
    })
  })

  describe('Coordinate hit-testing and boundaries', () => {
    it('selects the closest enabled clock item by coordinates', () => {
      const { select, model } = createClockDialSelect({ type: '12' }, 1)
      const firstElement = createMockElement(100, 100)
      const secondElement = createMockElement(200, 200)

      select.setElement(0, firstElement)
      select.setElement(1, secondElement)

      const result = select.selectByCoordinates(215, 215)

      expect(result?.value).toBe(2)
      expect(model.get()).toBe(2)
    })

    it('returns null if closest item already equals current model value', () => {
      const { select, model } = createClockDialSelect({ type: '12' }, 2)
      const secondElement = createMockElement(200, 200)

      select.setElement(1, secondElement)

      expect(select.selectByCoordinates(220, 220)).toBeNull()
      expect(model.get()).toBe(2)
    })

    it('skips disabled items and selects nearest enabled item', () => {
      const { select, model } = createClockDialSelect({ type: '12', min: 2, max: 12 })
      const disabledFirstElement = createMockElement(100, 100)
      const enabledSecondElement = createMockElement(200, 200)

      select.setElement(0, disabledFirstElement)
      select.setElement(1, enabledSecondElement)

      const result = select.selectByCoordinates(105, 105)
      expect(result?.value).toBe(2)
      expect(model.get()).toBe(2)
    })

    it('returns null when disabled, readonly, clock mode, or no elements registered', () => {
      const disabledCase = createClockDialSelect({ type: '12', disabled: true })
      disabledCase.select.setElement(0, createMockElement(100, 100))
      expect(disabledCase.select.selectByCoordinates(120, 120)).toBeNull()

      const readonlyCase = createClockDialSelect({ type: '12', readonly: true })
      readonlyCase.select.setElement(0, createMockElement(100, 100))
      expect(readonlyCase.select.selectByCoordinates(120, 120)).toBeNull()

      const clockCase = createClockDialSelect({ type: '12', clock: true })
      clockCase.select.setElement(0, createMockElement(100, 100))
      expect(clockCase.select.selectByCoordinates(120, 120)).toBeNull()

      const emptyCase = createClockDialSelect({ type: '12' })
      expect(emptyCase.select.selectByCoordinates(120, 120)).toBeNull()
    })
  })
})
