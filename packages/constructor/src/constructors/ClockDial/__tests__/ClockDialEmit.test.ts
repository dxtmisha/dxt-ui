// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { type ConstrEmit, DesignName } from '@dxtmisha/functional'

import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import { ClockDialEmit } from '../ClockDialEmit'
import { ClockDialList } from '../ClockDialList'
import { ClockDialValue } from '../ClockDialValue'
import type { ClockDialProps } from '../props'
import type { ClockDialEmits } from '../types'

describe('ClockDialEmit', () => {
  const createEmitManager = (
    props: ClockDialProps,
    initialValue?: number,
    withEmits = true
  ) => {
    const emitsSpy = vi.fn()
    const emits = withEmits ? (emitsSpy as unknown as ConstrEmit<ClockDialEmits>) : undefined
    const naming = new DesignName('d.clock-dial')
    const list = new ClockDialList(props, naming)
    const model = new ModelValueInclude<number>('value', emits, undefined, ref(initialValue))
    const valueItem = new ClockDialValue(props, () => model)
    const emitManager = new ClockDialEmit(props, () => list, () => valueItem, emits)

    return { emitManager, emitsSpy, list, model, valueItem }
  }

  it('emits input and inputLite by default with full payload and numeric value', () => {
    const { emitManager, emitsSpy } = createEmitManager({ type: '12' }, 4)

    emitManager.emit()

    expect(emitsSpy).toHaveBeenCalledWith(
      'input',
      expect.objectContaining({
        clock: '12',
        value: 4,
        item: expect.objectContaining({ value: 4, name: '04' })
      }),
      4
    )
    expect(emitsSpy).toHaveBeenCalledWith('inputLite', 4)
  })

  it('emits change and changeLite with 24-hour section metadata', () => {
    const { emitManager, emitsSpy } = createEmitManager({ type: '24' }, 14)

    emitManager.emit('change')

    expect(emitsSpy).toHaveBeenCalledWith(
      'change',
      expect.objectContaining({
        clock: '24',
        value: 14,
        item: expect.objectContaining({ value: 14, section: true })
      }),
      14
    )
    expect(emitsSpy).toHaveBeenCalledWith('changeLite', 14)
  })

  it('handles 0 value and undefined mark item safely', () => {
    const minuteZero = createEmitManager({ type: 'minute' }, 0)
    minuteZero.emitManager.emit('input')
    expect(minuteZero.emitsSpy).toHaveBeenCalledWith(
      'input',
      expect.objectContaining({
        clock: 'minute',
        value: 0,
        item: expect.objectContaining({ value: 0, name: '00' })
      }),
      0
    )

    const outOfRange = createEmitManager({ type: '12' }, 99)
    outOfRange.emitManager.emit('change')
    expect(outOfRange.emitsSpy).toHaveBeenCalledWith(
      'change',
      {
        clock: '12',
        value: 99,
        item: undefined
      },
      99
    )
  })

  it('does not throw when emits callback is omitted', () => {
    const { emitManager } = createEmitManager({ type: '12' }, 5, false)

    expect(() => emitManager.emit('input')).not.toThrow()
    expect(() => emitManager.emit('change')).not.toThrow()
  })
})
