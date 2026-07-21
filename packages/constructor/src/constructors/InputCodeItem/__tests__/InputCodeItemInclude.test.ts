// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { InputCodeItemInclude } from '../InputCodeItemInclude'

describe('InputCodeItemInclude', () => {
  it('should filter values against match regex', () => {
    const include = new InputCodeItemInclude('base-class', { match: /^[0-9]$/ })
    expect(include.getValue('1a2b3')).toEqual(['1', '2', '3'])
  })

  it('should update tab indices of items correctly', () => {
    const include = new InputCodeItemInclude('base-class', {})
    const item1 = {
      getValue: () => '1',
      setTabindex: vi.fn(),
      set: vi.fn()
    } as any
    const item2 = {
      getValue: () => '',
      setTabindex: vi.fn(),
      set: vi.fn()
    } as any
    const item3 = {
      getValue: () => '',
      setTabindex: vi.fn(),
      set: vi.fn()
    } as any

    include.items.value = [item1, item2, item3]

    include.updateTabindex()

    expect(item1.setTabindex).toHaveBeenCalledWith(undefined)
    expect(item2.setTabindex).toHaveBeenCalledWith(undefined)
    expect(item3.setTabindex).toHaveBeenCalledWith(-1)
  })

  it('should collect inputs and propagate updates', () => {
    const onUpdate = vi.fn()
    const include = new InputCodeItemInclude('base-class', {}, undefined, onUpdate)

    const item1 = {
      getValue: () => 'A',
      setTabindex: vi.fn()
    } as any
    const item2 = {
      getValue: () => 'B',
      setTabindex: vi.fn()
    } as any

    include.items.value = [item1, item2]

    include.onInput()
    expect(onUpdate).toHaveBeenCalledWith('AB')
  })
})
