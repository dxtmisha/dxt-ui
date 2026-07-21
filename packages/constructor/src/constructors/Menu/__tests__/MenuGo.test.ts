// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { MenuGo } from '../MenuGo'

describe('MenuGo', () => {
  it('should navigate to next and previous items in menu', () => {
    const valueMock = {
      setValue: vi.fn()
    } as any
    const dataMock = {
      getSelectedByStep: vi.fn().mockReturnValue('next-val')
    } as any

    const go = new MenuGo({ step: 1 }, valueMock, dataMock)
    expect(go.next()).toBe('next-val')
    expect(valueMock.setValue).toHaveBeenCalledWith('next-val', true)

    dataMock.getSelectedByStep.mockReturnValue('prev-val')
    expect(go.previous()).toBe('prev-val')
  })
})
