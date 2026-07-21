// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { ListGo } from '../ListGo'

describe('ListGo', () => {
  it('should set indices and navigate elements', () => {
    const mockFocus = {
      toElementSelected: vi.fn(),
      set: vi.fn(),
      reset: vi.fn()
    } as any

    const mockData = {
      map: ref([
        { index: '1', type: 'item' },
        { index: '2', type: 'item' }
      ]),
      getLengthByMap: () => 2
    } as any

    const go = new ListGo({}, ref(undefined), mockFocus, mockData)

    go.preparation('2')
    expect(mockFocus.toElementSelected).toHaveBeenCalledWith('2')

    go.set(0)
    expect(mockFocus.set).toHaveBeenCalledWith({ index: '1', type: 'item' })

    go.reset()
    expect(mockFocus.reset).toHaveBeenCalled()
  })
})
