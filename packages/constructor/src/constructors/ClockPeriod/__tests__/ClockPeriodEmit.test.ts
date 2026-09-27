// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { ClockPeriodEmit } from '../ClockPeriodEmit'
import type { ClockPeriodItem } from '../basicTypes'

describe('ClockPeriodEmit', () => {
  it('emits input, inputLite, and model updates', () => {
    const emitsSpy = vi.fn()
    const emitManager = new ClockPeriodEmit(emitsSpy as any)
    const item: ClockPeriodItem = {
      value: 'pm',
      label: 'PM',
      selected: true,
      disabled: false
    }

    emitManager.onInput(item, 'pm')

    expect(emitsSpy).toHaveBeenCalledWith('input', { item, value: 'pm' }, 'pm')
    expect(emitsSpy).toHaveBeenCalledWith('inputLite', 'pm')
    expect(emitsSpy).toHaveBeenCalledWith('update:value', 'pm')
    expect(emitsSpy).toHaveBeenCalledWith('update:modelValue', 'pm')
  })

  it('emits change and changeLite', () => {
    const emitsSpy = vi.fn()
    const emitManager = new ClockPeriodEmit(emitsSpy as any)
    const item: ClockPeriodItem = {
      value: 'am',
      label: 'AM',
      selected: true,
      disabled: false
    }

    emitManager.onChange(item, 'am')

    expect(emitsSpy).toHaveBeenCalledWith('change', { item, value: 'am' }, 'am')
    expect(emitsSpy).toHaveBeenCalledWith('changeLite', 'am')
  })
})
