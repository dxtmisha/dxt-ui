/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi } from 'vitest'
import { nextTick, ref } from 'vue'

import { computedEternity } from '../computedEternity'

describe('computedEternity', () => {
  it('should be undefined before access and resolved after access', async () => {
    const result = computedEternity(() => 'value')

    expect(result.value).toBeUndefined()

    await nextTick()
    await nextTick()

    expect(result.value).toBe('value')
  })

  it('should resolve an async getter', async () => {
    const result = computedEternity(async () => {
      return 'async value'
    })

    expect(result.value).toBeUndefined()

    await nextTick()
    await nextTick()
    await nextTick()

    expect(result.value).toBe('async value')
  })

  it('should re-compute when reactive dependency changes', async () => {
    const count = ref(0)
    const result = computedEternity(() => count.value * 2)

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

  it('should be lazy and not call getter until accessed', async () => {
    let called = 0
    const result = computedEternity(() => {
      called++
      return 'value'
    })

    expect(called).toBe(0)
    expect(result.value).toBeUndefined()

    await nextTick()
    await nextTick()

    expect(result.value).toBe('value')
    expect(called).toBe(1)
  })

  it('should warn when setting value', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const result = computedEternity(() => 'value')

    result.value = 'new value'

    expect(warnSpy).toHaveBeenCalledWith('computedEternity: value is read-only.')
    warnSpy.mockRestore()
  })

  it('should handle updates correctly', async () => {
    const count = ref(1)
    const result = computedEternity(() => count.value)

    expect(result.value).toBeUndefined()
    await nextTick()
    await nextTick()
    expect(result.value).toBe(1)

    count.value = 2
    await nextTick()
    await nextTick()
    await nextTick()

    expect(result.value).toBe(2)
  })
})
