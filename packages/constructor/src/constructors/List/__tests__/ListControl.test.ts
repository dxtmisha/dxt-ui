// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { ListControl } from '../ListControl'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn(),
    onUnmounted: vi.fn()
  }
})

describe('ListControl', () => {
  it('should toggle control status', () => {
    const searchMock = { set: vi.fn() } as any
    const dataMock = { getLength: () => 1 } as any
    const goMock = { reset: vi.fn(), stop: vi.fn() } as any

    const control = new ListControl(
      { control: true },
      ref(undefined),
      searchMock,
      dataMock,
      goMock
    )

    expect(control.isActive.value).toBe(true)

    control.onInput({ value: 'query' } as any)
    expect(searchMock.set).toHaveBeenCalledWith('query')
  })
})
