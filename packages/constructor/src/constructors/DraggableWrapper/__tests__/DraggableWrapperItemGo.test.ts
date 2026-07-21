// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { DraggableWrapperItemGo } from '../DraggableWrapperItemGo'

describe('DraggableWrapperItemGo', () => {
  it('should get, set, check and reset target drop state', () => {
    const go = new DraggableWrapperItemGo()
    expect(go.is()).toBe(false)
    expect(go.get()).toBeUndefined()

    const mockElement1 = document.createElement('div')
    const mockElement2 = document.createElement('span')

    go.set(mockElement1)
    expect(go.is()).toBe(true)
    expect(go.get()).toBe(mockElement1)

    expect(go.isByItem(mockElement2)).toBe(true)
    expect(go.isByItem(mockElement1)).toBe(false)

    go.reset()
    expect(go.is()).toBe(false)
    expect(go.get()).toBeUndefined()
  })
})
