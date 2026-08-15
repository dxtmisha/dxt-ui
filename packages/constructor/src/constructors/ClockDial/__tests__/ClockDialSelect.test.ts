// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { EnabledInclude } from '../../../classes/EnabledInclude'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import { ClockDialList } from '../ClockDialList'
import { ClockDialSelect } from '../ClockDialSelect'
import type { ClockDialProps } from '../props'

describe('ClockDialSelect', () => {
  function createClockDialSelect(props: ClockDialProps = { type: '12' }, initialValue: number | undefined = undefined) {
    const enabled = new EnabledInclude(props)
    const list = new ClockDialList(props, 'd-clock-dial')
    const model = new ModelValueInclude<number>('value', undefined, undefined, ref(initialValue))
    const select = new ClockDialSelect(props, list, model, enabled)

    return { select, list, model, enabled }
  }

  it('registers and unregisters elements via setElement', () => {
    const { select } = createClockDialSelect()
    const element = document.createElement('span')

    select.setElement(0, element)
    // should not throw when clearing element
    select.setElement(0, null)
  })

  it('selects the closest clock item by coordinates', () => {
    const { select, model } = createClockDialSelect({ type: '12' }, 1)

    const el1 = document.createElement('span')
    const el2 = document.createElement('span')

    el1.getBoundingClientRect = () => ({
      left: 100,
      top: 100,
      right: 140,
      bottom: 140,
      width: 40,
      height: 40,
      x: 100,
      y: 100,
      toJSON: () => {}
    })

    el2.getBoundingClientRect = () => ({
      left: 200,
      top: 200,
      right: 240,
      bottom: 240,
      width: 40,
      height: 40,
      x: 200,
      y: 200,
      toJSON: () => {}
    })

    select.setElement(0, el1) // value = 1
    select.setElement(1, el2) // value = 2

    // Coordinates near el2 (center 220, 220)
    const result = select.selectByCoordinates(215, 215)

    expect(result?.value).toBe(2)
    expect(model.getValue()).toBe(2)
  })

  it('returns null when component is disabled', () => {
    const { select } = createClockDialSelect({ type: '12', disabled: true })

    const result = select.selectByCoordinates(100, 100)
    expect(result).toBeNull()
  })
})
