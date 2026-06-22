/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import { useQueryRef } from '../useQueryRef'

// Mock Query from functional-basic
const queryMocks = {
  get: vi.fn(),
  set: vi.fn(),
  addWatch: vi.fn()
}

vi.mock('@dxtmisha/functional-basic', async (importOriginal) => {
  const actual = await importOriginal() as any
  return {
    ...actual,
    Query: {
      get: (name: string, defaultValue: any) => queryMocks.get(name, defaultValue),
      set: (name: string, value: any) => queryMocks.set(name, value),
      addWatch: (name: string, callback: any) => queryMocks.addWatch(name, callback)
    }
  }
})

describe('useQueryRef', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize with the value from `Query.get`', () => {
    const name = 'test-query-init'
    const defaultValue = 'default'
    queryMocks.get.mockReturnValue('value-from-query')

    const item = useQueryRef(name, defaultValue)

    expect(queryMocks.get).toHaveBeenCalledWith(name, defaultValue)
    expect(item.value).toBe('value-from-query')
  })

  it('should update Query when ref value changes', async () => {
    const name = 'test-query-update'
    queryMocks.get.mockReturnValue('initial')

    const item = useQueryRef(name)
    item.value = 'new-query-value'

    await nextTick()

    expect(queryMocks.set).toHaveBeenCalledWith(name, 'new-query-value')
  })

  it('should update ref when Query changes (external change)', async () => {
    const name = 'test-query-watch'
    let watchCallback: any
    queryMocks.addWatch.mockImplementation((_n, cb) => {
      watchCallback = cb
    })

    const item = useQueryRef(name, 'initial')
    expect(queryMocks.addWatch).toHaveBeenCalled()

    watchCallback('updated-externally')
    await nextTick()

    expect(item.value).toBe('updated-externally')
  })

  it('should implement a singleton pattern per name', () => {
    const name = 'test-query-single'

    const item1 = useQueryRef(name, 'a')
    const item2 = useQueryRef(name, 'b')

    expect(item1).toBe(item2)
    expect(queryMocks.get).toHaveBeenCalledTimes(1)
  })
})
