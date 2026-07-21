// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { InputCodeItemTabIndex } from '../InputCodeItemTabIndex'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    watch: (src: () => any, cb: (val: any) => void, opts: any) => {
      if (opts?.immediate) {
        cb(src())
      }
    }
  }
})

describe('InputCodeItemTabIndex', () => {
  it('should initialize and watch props tabindex changes', () => {
    const props = { tabindex: 1 }
    const tabIndex = new InputCodeItemTabIndex(props)

    expect(tabIndex.get()).toBe(1)

    tabIndex.set(2)
    expect(tabIndex.get()).toBe(2)

    tabIndex.reset()
    expect(tabIndex.get()).toBe(1)
  })
})
