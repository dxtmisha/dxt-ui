/**
 * @vitest-environment jsdom
 */

import { describe, it, expect } from 'vitest'
import { nextTick, ref, watchEffect } from 'vue'

import { computedAsync } from '../computedAsync'

describe('computedAsync', () => {
  it('should resolve an async getter and expose the value', async () => {
    const result = computedAsync(async () => 'async value')

    await nextTick()
    await nextTick()

    expect(result.value).toBe('async value')
  })

  it('should resolve a synchronous getter and expose the value', async () => {
    const result = computedAsync(() => 'sync value')

    await nextTick()

    expect(result.value).toBe('sync value')
  })

  it('should accept a raw value and expose it directly', async () => {
    const result = computedAsync(42)

    await nextTick()

    expect(result.value).toBe(42)
  })

  it('should return a ComputedRef', () => {
    const result = computedAsync(() => 'value')
    expect(typeof result.value).toBeDefined()
    expect('effect' in result).toBe(true)
  })

  it('should re-compute when a reactive dependency changes', async () => {
    const count = ref(0)
    const result = computedAsync(async () => count.value * 2)

    await nextTick()
    await nextTick()

    expect(result.value).toBe(0)

    count.value = 5

    await nextTick()
    await nextTick()

    expect(result.value).toBe(10)
  })

  it('should propagate the computed value to a watcher', async () => {
    const values: number[] = []
    const source = ref(1)
    const result = computedAsync(async () => source.value + 10)

    await nextTick()
    await nextTick()

    watchEffect(() => {
      values.push(result.value)
    })

    source.value = 2

    await nextTick()
    await nextTick()
    await nextTick()

    expect(values).toContain(11)
    expect(values).toContain(12)
  })
})
