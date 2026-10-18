// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'

import { MenuValue } from '../MenuValue'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    watch: (_src: any, cb: any) => cb()
  }
})

describe('MenuValue', () => {
  it('should get and set reactive menu values', () => {
    const emits = vi.fn()

    const val = new MenuValue({ selected: 'init-selected', isSelectedByValue: true }, emits)
    expect(val.selected.value).toBe('init-selected')

    val.setValue('new-selected', true)
    expect(val.selected.value).toBe('new-selected')
    expect(emits).toHaveBeenCalledWith('updateValue', 'new-selected')
  })
})
