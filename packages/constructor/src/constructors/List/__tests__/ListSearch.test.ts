// @vitest-environment jsdom
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { ListSearch } from '../ListSearch'

describe('ListSearch', () => {
  let originalSetTimeout: typeof setTimeout

  beforeAll(() => {
    originalSetTimeout = window.setTimeout
    window.setTimeout = ((cb: () => void) => {
      cb()
      return 0
    }) as any
  })

  afterAll(() => {
    window.setTimeout = originalSetTimeout
  })

  it('should manage search values', () => {
    const search = new ListSearch({})
    expect(search.highlight.value).toBeUndefined()
    expect(search.is()).toBe(false)

    search.set('  test  ')
    expect(search.highlight.value).toBe('test')
    expect(search.is()).toBe(true)

    search.reset()
    expect(search.highlight.value).toBeUndefined()
    expect(search.is()).toBe(false)
  })

  it('should append chars when timeout is active', () => {
    const search = new ListSearch({})
    ;(search as any).timeout = 123
    search.set('test')

    search.add('a')
    expect(search.highlight.value).toBe('testa')
  })
})
