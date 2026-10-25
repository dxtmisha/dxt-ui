/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { computed, effectScope, type EffectScope, nextTick, ref } from 'vue'
import { Translate, type TranslateInstance } from '@dxtmisha/functional-basic'
import { GeoRef } from '../../../classes/ref/GeoRef'
import { useTranslateRef, t } from '../useTranslateRef'

vi.mock('../../../classes/ref/GeoRef', () => ({
  GeoRef: {
    getLanguage: vi.fn()
  }
}))

const scopes: EffectScope[] = []

/**
 * Runs a translation fixture inside an owned reactive scope.
 *
 * Запускает тест перевода в отдельном реактивном scope.
 * @param callback fixture setup / подготовка теста
 * @returns fixture result / результат подготовки
 */
function runInScope<T>(callback: () => T): T {
  const scope = effectScope()
  scopes.push(scope)
  return scope.run(callback)!
}

/**
 * Creates a translation response whose completion is controlled by the test.
 *
 * Создаёт ответ перевода, завершением которого управляет тест.
 * @returns pending response and its resolver / ожидающий ответ и функция его завершения
 */
function createPendingTranslation(): {
  promise: Promise<{ title: string }>
  resolve: (value: { title: string }) => void
} {
  let resolve!: (value: { title: string }) => void
  const promise = new Promise<{ title: string }>((resolveResponse) => {
    resolve = resolveResponse
  })
  return { promise, resolve }
}

describe('useTranslateRef', () => {
  let mockTranslateInstance: TranslateInstance
  const languageRef = ref('en')

  beforeEach(() => {
    vi.clearAllMocks()
    languageRef.value = 'en'
    vi.mocked(GeoRef.getLanguage).mockReturnValue(computed(() => languageRef.value))

    mockTranslateInstance = {
      getListSync: vi.fn((names: any[]) => {
        const res: any = {}
        names.forEach((n: any) => {
          const key = Array.isArray(n) ? n[0] : n
          res[key] = key
        })
        return res
      }),
      getList: vi.fn(async (names: any[]) => {
        const res: any = {}
        const lang = languageRef.value
        names.forEach((n: any) => {
          const key = Array.isArray(n) ? n[0] : n
          res[key] = lang === 'ru' ? 'translated ru' : `translated ${key}`
        })
        return res
      })
    } as unknown as TranslateInstance

    vi.spyOn(Translate, 'getItem').mockReturnValue(mockTranslateInstance)
  })

  afterEach(() => {
    for (const scope of scopes.splice(0)) {
      scope.stop()
    }
    vi.restoreAllMocks()
  })

  it('should initialize with sync translations from TranslateInstance', () => {
    const names = ['key1', 'key2']
    const translate = runInScope(() => useTranslateRef(names))

    expect(translate.value).toEqual({ key1: 'key1', key2: 'key2' })
    expect(mockTranslateInstance.getListSync).toHaveBeenCalledWith(names, true)
  })

  it('should trigger async update if sync returned keys', async () => {
    const names = ['key1']
    const translate = runInScope(() => useTranslateRef(names))

    await vi.waitFor(() => {
      expect(translate.value.key1).toBe('translated key1')
    })
    expect(mockTranslateInstance.getList).toHaveBeenCalled()
  })

  it('should use custom translateInstance if provided', async () => {
    const customInstance = {
      getListSync: vi.fn(() => ({ custom: 'custom' })),
      getList: vi.fn(async () => ({ custom: 'custom-async' }))
    } as unknown as TranslateInstance

    const translate = runInScope(() => useTranslateRef(['custom'], customInstance))

    expect(translate.value).toEqual({ custom: 'custom' })
    expect(customInstance.getListSync).toHaveBeenCalled()
    expect(mockTranslateInstance.getListSync).not.toHaveBeenCalled()

    await vi.waitFor(() => {
      expect(translate.value.custom).toBe('custom-async')
    })
  })

  it('should update translations when language changes', async () => {
    const names = ['key1']
    const translate = runInScope(() => useTranslateRef(names))

    await vi.waitFor(() => {
      expect(translate.value.key1).toBe('translated key1')
    })

    languageRef.value = 'ru'

    await vi.waitFor(() => {
      expect(translate.value.key1).toBe('translated ru')
    }, { timeout: 2000 })
  })

  it('should work with shorthand t and use default instance', () => {
    const names = ['key1']
    const translate = runInScope(() => t(names))
    expect(translate.value).toEqual({ key1: 'key1' })
    expect(mockTranslateInstance.getListSync).toHaveBeenCalled()
  })

  it('should keep the latest translation when an earlier language finishes afterwards', async () => {
    const russian = createPendingTranslation()
    const vietnamese = createPendingTranslation()
    vi.mocked(mockTranslateInstance.getListSync).mockReturnValue({ title: 'Ready' })
    vi.mocked(mockTranslateInstance.getList)
      .mockReturnValueOnce(russian.promise)
      .mockReturnValueOnce(vietnamese.promise)
    const translate = runInScope(() => useTranslateRef(['title'], mockTranslateInstance))

    languageRef.value = 'ru'
    await nextTick()
    languageRef.value = 'vi'
    await nextTick()

    vietnamese.resolve({ title: 'Xin chào' })
    await vietnamese.promise
    await nextTick()
    expect(translate.value.title).toBe('Xin chào')

    russian.resolve({ title: 'Привет' })
    await russian.promise
    await nextTick()
    expect(translate.value.title).toBe('Xin chào')
  })

  it('should ignore an earlier language while the latest translation is still pending', async () => {
    const russian = createPendingTranslation()
    const vietnamese = createPendingTranslation()
    vi.mocked(mockTranslateInstance.getListSync).mockReturnValue({ title: 'Ready' })
    vi.mocked(mockTranslateInstance.getList)
      .mockReturnValueOnce(russian.promise)
      .mockReturnValueOnce(vietnamese.promise)
    const translate = runInScope(() => useTranslateRef(['title']))

    languageRef.value = 'ru'
    await nextTick()
    languageRef.value = 'vi'
    await nextTick()

    russian.resolve({ title: 'Привет' })
    await russian.promise
    await nextTick()
    expect(translate.value.title).toBe('Ready')

    vietnamese.resolve({ title: 'Xin chào' })
    await vietnamese.promise
    await nextTick()
    expect(translate.value.title).toBe('Xin chào')
  })

  it.each(['title', ' '])('should invalidate the initial async response for placeholder %j after a language change', async (placeholder) => {
    const initial = createPendingTranslation()
    const vietnamese = createPendingTranslation()
    vi.mocked(mockTranslateInstance.getListSync).mockReturnValue({ title: placeholder })
    vi.mocked(mockTranslateInstance.getList)
      .mockReturnValueOnce(initial.promise)
      .mockReturnValueOnce(vietnamese.promise)
    const translate = runInScope(() => useTranslateRef(['title']))
    expect(mockTranslateInstance.getList).toHaveBeenCalledTimes(1)

    languageRef.value = 'vi'
    await nextTick()

    vietnamese.resolve({ title: 'Xin chào' })
    await vietnamese.promise
    await nextTick()
    initial.resolve({ title: 'Hello' })
    await initial.promise
    await nextTick()

    expect(translate.value.title).toBe('Xin chào')
  })

  it('should ignore the first response after switching back to the same language', async () => {
    const firstRussian = createPendingTranslation()
    const vietnamese = createPendingTranslation()
    const latestRussian = createPendingTranslation()
    vi.mocked(mockTranslateInstance.getListSync).mockReturnValue({ title: 'Ready' })
    vi.mocked(mockTranslateInstance.getList)
      .mockReturnValueOnce(firstRussian.promise)
      .mockReturnValueOnce(vietnamese.promise)
      .mockReturnValueOnce(latestRussian.promise)
    const translate = runInScope(() => useTranslateRef(['title']))

    languageRef.value = 'ru'
    await nextTick()
    languageRef.value = 'vi'
    await nextTick()
    languageRef.value = 'ru'
    await nextTick()

    latestRussian.resolve({ title: 'Новый перевод' })
    await latestRussian.promise
    await nextTick()
    firstRussian.resolve({ title: 'Старый перевод' })
    vietnamese.resolve({ title: 'Xin chào' })
    await Promise.all([firstRussian.promise, vietnamese.promise])
    await nextTick()

    expect(translate.value.title).toBe('Новый перевод')
  })

  it('should invalidate a queued completion immediately when the language changes', async () => {
    const russian = createPendingTranslation()
    const vietnamese = createPendingTranslation()
    vi.mocked(mockTranslateInstance.getListSync).mockReturnValue({ title: 'Ready' })
    vi.mocked(mockTranslateInstance.getList)
      .mockReturnValueOnce(russian.promise)
      .mockReturnValueOnce(vietnamese.promise)
    const translate = runInScope(() => useTranslateRef(['title']))

    languageRef.value = 'ru'
    await nextTick()
    russian.resolve({ title: 'Привет' })
    languageRef.value = 'vi'
    await russian.promise
    await nextTick()

    expect(translate.value.title).toBe('Ready')

    vietnamese.resolve({ title: 'Xin chào' })
    await vietnamese.promise
    await nextTick()
    expect(translate.value.title).toBe('Xin chào')
  })

  it.each([true, false])('should discard pending translations and stop reacting after scope disposal (initial: %s)', async (initial) => {
    const pending = createPendingTranslation()
    const syncTitle = initial ? ' ' : 'Ready'
    vi.mocked(mockTranslateInstance.getListSync).mockReturnValue({ title: syncTitle })
    vi.mocked(mockTranslateInstance.getList).mockReturnValueOnce(pending.promise)
    const scope = effectScope()
    scopes.push(scope)
    const translate = scope.run(() => useTranslateRef(['title']))!

    if (!initial) {
      languageRef.value = 'ru'
      await nextTick()
    }
    expect(mockTranslateInstance.getList).toHaveBeenCalledTimes(1)

    scope.stop()
    pending.resolve({ title: 'Привет' })
    await pending.promise
    await nextTick()

    expect(translate.value.title).toBe(syncTitle)
    languageRef.value = 'vi'
    await nextTick()
    expect(mockTranslateInstance.getList).toHaveBeenCalledTimes(1)
  })

  it('should avoid the initial async load when synchronous translations are available', async () => {
    vi.mocked(mockTranslateInstance.getListSync).mockReturnValue({ title: 'Ready' })
    const translate = runInScope(() => useTranslateRef(['title']))
    await nextTick()

    expect(translate.value.title).toBe('Ready')
    expect(mockTranslateInstance.getList).not.toHaveBeenCalled()

    languageRef.value = 'ru'
    await nextTick()
    expect(translate.value.title).toBe('translated ru')
    expect(mockTranslateInstance.getList).toHaveBeenCalledTimes(1)
  })
})
