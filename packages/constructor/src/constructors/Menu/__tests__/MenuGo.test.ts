// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import type { ListDataRef } from '@dxtmisha/functional'

import { MenuGo } from '../MenuGo'
import type { MenuValue } from '../MenuValue'

describe('MenuGo', () => {
  it('should lazily resolve data and value getters only when navigating', () => {
    const getSelectedByStep = vi.fn().mockReturnValue('next-val')
    const setValue = vi.fn()
    const dataGetter = vi.fn(() => ({ getSelectedByStep }) as unknown as ListDataRef)
    const valueGetter = vi.fn(() => ({ setValue }) as unknown as MenuValue)

    const go = new MenuGo({ step: 1 }, dataGetter, valueGetter)

    expect(dataGetter).not.toHaveBeenCalled()
    expect(valueGetter).not.toHaveBeenCalled()

    expect(go.next()).toBe('next-val')
    expect(getSelectedByStep).toHaveBeenCalledWith(1)
    expect(setValue).toHaveBeenCalledWith('next-val', true)

    getSelectedByStep.mockReturnValue('prev-val')
    expect(go.previous()).toBe('prev-val')
    expect(getSelectedByStep).toHaveBeenCalledWith(-1)
    expect(setValue).toHaveBeenCalledWith('prev-val', true)
  })

  it('should support custom numeric/string step and fallback to 1 when step is invalid or 0', () => {
    const getSelectedByStep = vi.fn().mockReturnValue('item-2')
    const setValue = vi.fn()

    const goCustom = new MenuGo(
      { step: '3' },
      () => ({ getSelectedByStep }) as unknown as ListDataRef,
      () => ({ setValue }) as unknown as MenuValue
    )

    goCustom.next()
    expect(getSelectedByStep).toHaveBeenCalledWith(3)

    goCustom.previous()
    expect(getSelectedByStep).toHaveBeenCalledWith(-3)

    const goFallback = new MenuGo(
      { step: 0 },
      () => ({ getSelectedByStep }) as unknown as ListDataRef,
      () => ({ setValue }) as unknown as MenuValue
    )

    goFallback.next()
    expect(getSelectedByStep).toHaveBeenCalledWith(1)
  })

  it('should accept falsy values (0, false) and skip setValue only when undefined', () => {
    const getSelectedByStep = vi.fn()
    const setValue = vi.fn()

    const go = new MenuGo(
      { step: 1 },
      () => ({ getSelectedByStep }) as unknown as ListDataRef,
      () => ({ setValue }) as unknown as MenuValue
    )

    getSelectedByStep.mockReturnValueOnce(0)
    expect(go.next()).toBe(0)
    expect(setValue).toHaveBeenCalledWith(0, true)

    getSelectedByStep.mockReturnValueOnce(false)
    expect(go.next()).toBe(false)
    expect(setValue).toHaveBeenCalledWith(false, true)

    setValue.mockClear()
    getSelectedByStep.mockReturnValueOnce(undefined)
    expect(go.next()).toBeUndefined()
    expect(setValue).not.toHaveBeenCalled()
  })
})
