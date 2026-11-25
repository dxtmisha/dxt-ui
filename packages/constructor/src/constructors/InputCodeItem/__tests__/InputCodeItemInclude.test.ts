// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { InputCodeItemInclude } from '../InputCodeItemInclude'
import type { InputCodeItemExpose } from '../types'

const createMockItem = (
  index: number,
  initialValue: string = ''
): InputCodeItemExpose & {
  setTabindex: ReturnType<typeof vi.fn>
  set: ReturnType<typeof vi.fn>
  focusInput: ReturnType<typeof vi.fn>
} => {
  let current = initialValue
  return {
    index,
    getValue: () => current,
    set: vi.fn((next: string) => {
      current = next
    }),
    setTabindex: vi.fn<(value: number | string | undefined) => void>(),
    reset: vi.fn(() => {
      current = ''
    }),
    focusInput: vi.fn<() => void>()
  }
}

describe('InputCodeItemInclude', () => {
  it('should filter values against match regex', () => {
    const include = new InputCodeItemInclude({ match: /^[0-9]$/ }, new DesignName('base.class'))
    expect(include.getValue('1a2b3')).toEqual(['1', '2', '3'])
  })

  it('should update tab indices of items correctly', () => {
    const include = new InputCodeItemInclude({}, new DesignName('base.class'))
    const item1 = createMockItem(0, '1')
    const item2 = createMockItem(1, '')
    const item3 = createMockItem(2, '')

    include.items.value = [item1, item2, item3]
    include.updateTabindex()

    expect(item1.setTabindex).toHaveBeenCalledWith(undefined)
    expect(item2.setTabindex).toHaveBeenCalledWith(undefined)
    expect(item3.setTabindex).toHaveBeenCalledWith(-1)
  })

  it('should collect inputs, propagate updates, and handle backspace/paste/reset', () => {
    const onUpdate = vi.fn()
    const include = new InputCodeItemInclude(
      { match: /[0-9]/ },
      new DesignName('base.class'),
      undefined,
      onUpdate
    )

    const item1 = createMockItem(0, '1')
    const item2 = createMockItem(1, '2')
    const item3 = createMockItem(2, '')
    include.items.value = [item1, item2, item3]

    include.onInput()
    expect(onUpdate).toHaveBeenCalledWith('12')

    include.onPaste(1, '89')
    expect(item2.set).toHaveBeenCalledWith('8')
    expect(item3.set).toHaveBeenCalledWith('9')
    expect(onUpdate).toHaveBeenCalledWith('189')

    item1.set('')
    include.onBackspace()
    expect(item1.set).toHaveBeenCalledWith('8')
    expect(item2.set).toHaveBeenCalledWith('9')
    expect(item3.set).toHaveBeenCalledWith('')

    include.resetValue()
    expect(onUpdate).toHaveBeenLastCalledWith('')
  })

  it('should preserve itemAttrs when parent props are undefined', () => {
    const include = new InputCodeItemInclude(
      {
        itemAttrs: {
          placeholder: '_',
          hide: true
        }
      },
      new DesignName('base.class')
    )

    expect(include.binds.value.placeholder).toBe('_')
    expect(include.binds.value.hide).toBe(true)
  })

  it('should focus first empty item or last item when all are filled', () => {
    const include = new InputCodeItemInclude({ match: /[0-9]/ }, new DesignName('base.class'))
    const item1 = createMockItem(0, '1')
    const item2 = createMockItem(1, '')

    include.items.value = [item1, item2]
    include.update('1')
    expect(item2.focusInput).toHaveBeenCalledTimes(1)

    include.update('12')
    expect(item2.focusInput).toHaveBeenCalledTimes(2)
  })
})
