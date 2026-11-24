// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { reactive } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ClockDialList } from '../ClockDialList'
import type { ClockDialProps } from '../props'

describe('ClockDialList', () => {
  const createNaming = () => new DesignName('d.clock-dial')

  describe('Standard functional requirements (Modes & Mark generation)', () => {
    it('generates 12 marks for type 12 with padded names and 30deg rotation step', () => {
      const listManager = new ClockDialList({ type: '12' }, createNaming())
      const items = listManager.marks.value

      expect(items).toHaveLength(12)
      expect(items[0]).toEqual({
        name: '01',
        rotate: '30deg',
        section: false,
        style: { '--d-clockDial-sys-valueRotate': '30deg' },
        value: 1,
        disabled: false
      })
      expect(items[11]).toEqual({
        name: '12',
        rotate: '360deg',
        section: false,
        style: { '--d-clockDial-sys-valueRotate': '360deg' },
        value: 12,
        disabled: false
      })
      expect(listManager.maxCount).toBe(12)
      expect(listManager.rotate).toBe(30)
    })

    it('generates 24 marks for type 24 with outer (1..12) and inner (13..23, 0) section flags', () => {
      const listManager = new ClockDialList({ type: '24' }, createNaming())
      const items = listManager.marks.value

      expect(items).toHaveLength(24)
      expect(items[0]?.value).toBe(1)
      expect(items[0]?.section).toBe(false)
      expect(items[11]?.value).toBe(12)
      expect(items[11]?.section).toBe(false)
      expect(items[12]?.value).toBe(13)
      expect(items[12]?.section).toBe(true)
      expect(items[23]?.value).toBe(0)
      expect(items[23]?.name).toBe('00')
      expect(items[23]?.section).toBe(true)
      expect(listManager.maxCount).toBe(24)
      expect(listManager.rotate).toBe(30)
    })

    it.each(['minute', 'second', undefined] as const)(
      'generates 60 marks with 6deg step for type %s',
      (type) => {
        const listManager = new ClockDialList({ type }, createNaming())
        const items = listManager.marks.value

        expect(items).toHaveLength(60)
        expect(items[0]?.value).toBe(1)
        expect(items[0]?.name).toBe('01')
        expect(items[59]?.value).toBe(0)
        expect(items[59]?.name).toBe('00')
        expect(items[59]?.rotate).toBe('360deg')
        expect(listManager.maxCount).toBe(60)
        expect(listManager.rotate).toBe(6)
      }
    )

    it('reactively updates marks when props change', () => {
      const props = reactive<ClockDialProps>({ type: '12', min: 1, max: 12 })
      const listManager = new ClockDialList(props, createNaming())

      expect(listManager.marks.value).toHaveLength(12)

      props.type = '24'
      expect(listManager.marks.value).toHaveLength(24)
      expect(listManager.isSection(15)).toBe(true)
    })
  })

  describe('Boundary constraints (min, max, step, disabled)', () => {
    it('marks items outside min/max bounds as disabled, including string bounds and 0', () => {
      const listManager = new ClockDialList(
        { type: '12', min: '3', max: '8' },
        createNaming()
      )
      const items = listManager.marks.value

      expect(items[0]?.disabled).toBe(true)
      expect(items[1]?.disabled).toBe(true)
      expect(items[2]?.disabled).toBe(false)
      expect(items[7]?.disabled).toBe(false)
      expect(items[8]?.disabled).toBe(true)
    })

    it('marks items not matching step constraint as disabled and allows 0 when aligned', () => {
      const listManager = new ClockDialList(
        { type: 'minute', min: 0, step: 5 },
        createNaming()
      )
      const items = listManager.marks.value

      expect(items[0]?.value).toBe(1)
      expect(items[0]?.disabled).toBe(true)
      expect(items[4]?.value).toBe(5)
      expect(items[4]?.disabled).toBe(false)
      expect(items[9]?.value).toBe(10)
      expect(items[9]?.disabled).toBe(false)
      expect(items[59]?.value).toBe(0)
      expect(items[59]?.disabled).toBe(false)
    })

    it('treats step <= 1 (0, -2) as allowing all marks within bounds', () => {
      const zeroStepList = new ClockDialList({ type: '12', step: 0 }, createNaming())
      const negativeStepList = new ClockDialList({ type: '12', step: -2 }, createNaming())

      expect(zeroStepList.marks.value.every(item => !item.disabled)).toBe(true)
      expect(negativeStepList.marks.value.every(item => !item.disabled)).toBe(true)
    })

    it('marks all items as disabled when disabled prop is true', () => {
      const listManager = new ClockDialList({ type: '12', disabled: true }, createNaming())

      expect(listManager.marks.value.every(item => item.disabled)).toBe(true)
    })
  })

  describe('Lookup methods (find and isSection)', () => {
    it('finds clock mark items by value and returns undefined for missing, -1, or undefined values', () => {
      const listManager = new ClockDialList({ type: '24' }, createNaming())

      expect(listManager.find(5)?.value).toBe(5)
      expect(listManager.find(0)?.value).toBe(0)
      expect(listManager.find(-1)).toBeUndefined()
      expect(listManager.find(99)).toBeUndefined()
      expect(listManager.find(undefined)).toBeUndefined()
    })

    it('correctly identifies inner section values in 24-hour mode', () => {
      const listManager = new ClockDialList({ type: '24' }, createNaming())

      expect(listManager.isSection(5)).toBe(false)
      expect(listManager.isSection(12)).toBe(false)
      expect(listManager.isSection(13)).toBe(true)
      expect(listManager.isSection(0)).toBe(true)
      expect(listManager.isSection(undefined)).toBe(false)
      expect(listManager.isSection(-1)).toBe(false)
    })
  })
})
