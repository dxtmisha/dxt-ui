/** @vitest-environment jsdom */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { effectScope, type EffectScope } from 'vue'
import { Api, ServerStorage, TranslateFile, TranslateInstance, TRANSLATE_TIME_OUT } from '@dxtmisha/functional-basic'
import { GeoRef } from '../../../classes/ref/GeoRef'
import { useTranslateRef } from '../useTranslateRef'

/** Owned test effects / Эффекты текущего теста */
const scopes: EffectScope[] = []

/**
 * Creates a controlled dictionary loader.
 *
 * Создаёт управляемый загрузчик словаря.
 * @returns promise and its completion function / промис и функция его завершения
 */
function createDictionary(): {
  promise: Promise<Record<string, string>>
  resolve: (value: Record<string, string>) => void
} {
  let resolve!: (value: Record<string, string>) => void
  const promise = new Promise<Record<string, string>>((resolvePromise) => {
    resolve = resolvePromise
  })
  return { promise, resolve }
}

beforeEach(() => {
  ServerStorage.reset()
  vi.useFakeTimers()
  vi.spyOn(Api, 'isLocalhost').mockReturnValue(false)
})

afterEach(() => {
  for (const scope of scopes.splice(0)) {
    scope.stop()
  }
  ServerStorage.reset()
  vi.clearAllTimers()
  vi.restoreAllMocks()
  vi.useRealTimers()
})

describe('useTranslateRef with real dictionaries', () => {
  it.each([false, true])('should preserve the current locale cache for a new hook with queued loads: %s', async (queued) => {
    GeoRef.set('en-US')
    const english = createDictionary()
    const vietnamese = createDictionary()
    const files = new TranslateFile({
      en: () => english.promise,
      vi: () => vietnamese.promise
    })
    const instance = new TranslateInstance('/unused', 'list', files)
    const scope = effectScope()
    scopes.push(scope)
    const original = scope.run(() => useTranslateRef(['title'], instance))!
    if (!queued) {
      await vi.advanceTimersByTimeAsync(TRANSLATE_TIME_OUT)
    }

    GeoRef.set('vi-VN')
    await vi.advanceTimersByTimeAsync(TRANSLATE_TIME_OUT)
    vietnamese.resolve({ title: 'Tiếng Việt' })
    await vi.advanceTimersByTimeAsync(0)
    expect(original.value.title).toBe('Tiếng Việt')
    english.resolve({ title: 'English' })
    await vi.advanceTimersByTimeAsync(0)

    expect(original.value.title).toBe('Tiếng Việt')
    const fresh = scope.run(() => useTranslateRef(['title'], instance))!
    expect(fresh.value.title).toBe('Tiếng Việt')

    GeoRef.set('en-US')
    await vi.advanceTimersByTimeAsync(0)
    expect(original.value.title).toBe('English')
    expect(fresh.value.title).toBe('English')
  })
})
