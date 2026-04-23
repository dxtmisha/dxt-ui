/**
 * @vitest-environment jsdom
 */

import { describe, it, expect } from 'vitest'
import { nextTick, ref, watchEffect } from 'vue'

import { computedAsync } from '../computedAsync'

describe('computedAsync', () => {
  it('should resolve an async getter and expose the value', async () => {
    const result = computedAsync(async () => 'async value')

    expect(result.value).toBeUndefined()

    await nextTick()
    await nextTick()

    expect(result.value).toBe('async value')
  })

  it('should resolve a synchronous getter and expose the value', async () => {
    const result = computedAsync(() => 'sync value')

    expect(result.value).toBeUndefined() // Even a sync getter is async via watchEffect(async...)
    await nextTick()
    await nextTick()

    expect(result.value).toBe('sync value')
  })

  it('should accept a raw value and expose it directly', async () => {
    const result = computedAsync(42)

    expect(result.value).toBeUndefined()
    await nextTick()
    await nextTick()

    expect(result.value).toBe(42)
  })

  it('should return a ComputedRef', async () => {
    const result = computedAsync(() => 'value')
    expect('effect' in result).toBe(true)
    void result.value
    await nextTick()
    await nextTick()
    expect(result.value).toBe('value')
  })

  it('should re-compute when a reactive dependency changes', async () => {
    const count = ref(0)
    const result = computedAsync(async () => count.value * 2)

    expect(result.value).toBeUndefined()
    await nextTick()
    await nextTick()
    expect(result.value).toBe(0)

    count.value = 5

    await nextTick()
    await nextTick()
    await nextTick()

    expect(result.value).toBe(10)
  })

  it('should propagate the computed value to a watcher', async () => {
    const values: (number | undefined)[] = []
    const source = ref(1)
    const result = computedAsync(async () => source.value + 10)

    watchEffect(() => {
      values.push(result.value)
    })

    await nextTick()
    await nextTick()
    await nextTick()

    source.value = 2

    await nextTick()
    await nextTick()
    await nextTick()

    expect(values).toContain(11)
    expect(values).toContain(12)
  })

  it('should ignore values specified in the ignored parameter', async () => {
    const source = ref(1)
    const result = computedAsync(async () => source.value, undefined, 2)

    expect(result.value).toBeUndefined()
    await nextTick()
    await nextTick()
    expect(result.value).toBe(1)

    source.value = 2 // Should be ignored
    await nextTick()
    await nextTick()
    await nextTick()
    expect(result.value).toBe(1)

    source.value = 3
    await nextTick()
    await nextTick()
    await nextTick()
    expect(result.value).toBe(3)
  })

  it('should be lazy and not call getter until accessed', async () => {
    let called = 0
    const result = computedAsync(async () => {
      called++
      return 'value'
    })

    expect(called).toBe(0)
    expect(result.value).toBeUndefined()
    expect(called).toBe(1)

    await nextTick()
    await nextTick()
    expect(result.value).toBe('value')
    expect(called).toBe(1)
  })

  it('should use initialState if provided', async () => {
    const result = computedAsync(async () => 'resolved', 'loading')

    expect(result.value).toBe('loading')

    await nextTick()
    await nextTick()

    expect(result.value).toBe('resolved')
  })
})
