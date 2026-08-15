// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import { ClockDialEmit } from '../ClockDialEmit'
import { ClockDialList } from '../ClockDialList'
import type { ClockDialProps } from '../props'

describe('ClockDialEmit', () => {
  it('emits input and inputLite with full payload and numeric value', () => {
    const emitsSpy = vi.fn()
    const props: ClockDialProps = { type: '12' }
    const list = new ClockDialList(props, 'd-clock-dial')
    const model = new ModelValueInclude<number>('value', emitsSpy, undefined, ref(4))
    const emitManager = new ClockDialEmit(props, list, model, emitsSpy as any)

    emitManager.emit('input', 4)

    expect(emitsSpy).toHaveBeenCalledWith(
      'input',
      expect.objectContaining({
        clock: '12',
        value: 4,
        item: expect.objectContaining({ value: 4 })
      }),
      4
    )
    expect(emitsSpy).toHaveBeenCalledWith('inputLite', 4)
  })

  it('emits change and changeLite with full payload and numeric value', () => {
    const emitsSpy = vi.fn()
    const props: ClockDialProps = { type: '24' }
    const list = new ClockDialList(props, 'd-clock-dial')
    const model = new ModelValueInclude<number>('value', emitsSpy, undefined, ref(14))
    const emitManager = new ClockDialEmit(props, list, model, emitsSpy as any)

    emitManager.emit('change', 14)

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

  it('uses current model value if explicit value is not passed', () => {
    const emitsSpy = vi.fn()
    const props: ClockDialProps = { type: '12' }
    const list = new ClockDialList(props, 'd-clock-dial')
    const model = new ModelValueInclude<number>('value', emitsSpy, undefined, ref(9))
    const emitManager = new ClockDialEmit(props, list, model, emitsSpy as any)

    emitManager.emit('input')

    expect(emitsSpy).toHaveBeenCalledWith(
      'input',
      expect.objectContaining({ value: 9 }),
      9
    )
    expect(emitsSpy).toHaveBeenCalledWith('inputLite', 9)
  })
})
