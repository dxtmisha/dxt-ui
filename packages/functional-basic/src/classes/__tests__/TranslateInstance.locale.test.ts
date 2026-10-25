/** @vitest-environment jsdom */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Api } from '../Api'
import { ErrorCenter } from '../ErrorCenter'
import { Geo } from '../Geo'
import { ServerStorage } from '../ServerStorage'
import { TranslateFile } from '../TranslateFile'
import { TranslateInstance } from '../TranslateInstance'
import { TRANSLATE_TIME_OUT, type TranslateDataFile } from '../../types/translateTypes'

/** Controlled dictionary load / Управляемая загрузка словаря */
interface DeferredDictionary {
  /** Loading promise / Промис загрузки */
  promise: Promise<Record<string, string>>
  /** Completes loading / Завершает загрузку */
  resolve: (value: Record<string, string>) => void
  /** Rejects loading / Отклоняет загрузку */
  reject: (error: Error) => void
}

/**
 * Creates a dictionary whose completion order is controlled by the test.
 *
 * Создаёт словарь с управляемым в тесте порядком завершения загрузки.
 * @returns deferred dictionary / отложенный словарь
 */
function createDictionary(): DeferredDictionary {
  let resolve!: DeferredDictionary['resolve']
  let reject!: DeferredDictionary['reject']
  const promise = new Promise<Record<string, string>>((resolvePromise, rejectPromise) => {
    resolve = resolvePromise
    reject = rejectPromise
  })
  return { promise, resolve, reject }
}

describe('TranslateInstance locale isolation', () => {
  let language: string
  let location: string

  /**
   * Creates a translator using the mutable locale of this test.
   *
   * Создаёт переводчик с изменяемой локалью текущего теста.
   * @param loaders dictionary loaders / загрузчики словарей
   * @returns translator / переводчик
   */
  function createTranslate(loaders: TranslateDataFile = {}): TranslateInstance {
    return new TranslateInstance('/unused', 'list', new TranslateFile(
      loaders, () => language, () => location
    ))
  }

  beforeEach(() => {
    ServerStorage.reset()
    language = 'en'
    location = 'en-US'
    vi.useFakeTimers()
    vi.spyOn(Api, 'isLocalhost').mockReturnValue(false)
    vi.spyOn(Api, 'get').mockResolvedValue({})
    vi.spyOn(Api.getStatus(), 'getStatus').mockReturnValue(200)
    vi.spyOn(ErrorCenter, 'on').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.clearAllTimers()
    ServerStorage.reset()
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
    vi.useRealTimers()
  })

  it('should cache late files under their original locale and reuse them when returning to that locale', async () => {
    const english = createDictionary()
    const vietnamese = createDictionary()
    const loadEnglish = vi.fn(() => english.promise)
    const loadVietnamese = vi.fn(() => vietnamese.promise)
    const translate = createTranslate({ en: loadEnglish, vi: loadVietnamese })
    const englishResult = translate.get('title')
    await vi.advanceTimersByTimeAsync(TRANSLATE_TIME_OUT)

    language = 'vi'
    location = 'vi-VN'
    const vietnameseResult = translate.get('title')
    await vi.advanceTimersByTimeAsync(TRANSLATE_TIME_OUT)
    vietnamese.resolve({ title: 'Tiếng Việt' })
    expect(await vietnameseResult).toBe('Tiếng Việt')

    english.resolve({ title: 'English' })
    expect(await englishResult).toBe('English')
    expect(translate.getListSync(['title'])).toEqual({ title: 'Tiếng Việt' })

    language = 'en'
    location = 'en-US'
    expect(await translate.get('title')).toBe('English')
    expect(loadEnglish).toHaveBeenCalledTimes(1)
    expect(loadVietnamese).toHaveBeenCalledTimes(1)
    expect(Api.get).not.toHaveBeenCalled()
  })

  it.each([
    ['en-US', 'vi-VN'],
    ['en', 'vi'],
    ['global', 'vi']
  ] as const)('should keep queued locales separate with %s and %s file selection', async (englishIndex, vietnameseIndex) => {
    const english = createDictionary()
    const vietnamese = createDictionary()
    const loadEnglish = vi.fn(() => english.promise)
    const loadVietnamese = vi.fn(() => vietnamese.promise)
    const translate = createTranslate({
      [englishIndex]: loadEnglish,
      [vietnameseIndex]: loadVietnamese
    })
    const englishResult = translate.get('title')
    language = 'vi'
    location = 'vi-VN'
    const vietnameseResult = translate.get('title')

    await vi.advanceTimersByTimeAsync(TRANSLATE_TIME_OUT)
    expect(loadEnglish).toHaveBeenCalledTimes(1)
    expect(loadVietnamese).toHaveBeenCalledTimes(1)

    vietnamese.resolve({ title: 'Tiếng Việt' })
    expect(await vietnameseResult).toBe('Tiếng Việt')
    english.resolve({ title: 'English' })
    expect(await englishResult).toBe('English')
    expect(translate.getSync('title')).toBe('Tiếng Việt')
    language = 'en'
    location = 'en-US'
    expect(translate.getSync('title')).toBe('English')
  })

  it('should merge repeated requests for the same locale across a rapid switch back', async () => {
    const loadEnglish = vi.fn(async () => ({ title: 'English', body: 'Body' }))
    const loadVietnamese = vi.fn(async () => ({ title: 'Tiếng Việt' }))
    const translate = createTranslate({ en: loadEnglish, vi: loadVietnamese })
    const first = translate.get('title')
    language = 'vi'
    location = 'vi-VN'
    const second = translate.get('title')
    language = 'en'
    location = 'en-US'
    const third = translate.getList(['title', 'body', 'title'])

    await vi.advanceTimersByTimeAsync(TRANSLATE_TIME_OUT)

    expect(await first).toBe('English')
    expect(await second).toBe('Tiếng Việt')
    expect(await third).toEqual({ title: 'English', body: 'Body' })
    expect(loadEnglish).toHaveBeenCalledTimes(1)
    expect(loadVietnamese).toHaveBeenCalledTimes(1)
  })

  it('should keep regions of the same language in separate batches', async () => {
    const loadAmerican = vi.fn(async () => ({ color: 'Color' }))
    const loadBritish = vi.fn(async () => ({ color: 'Colour' }))
    const translate = createTranslate({ 'en-US': loadAmerican, 'en-GB': loadBritish })
    const american = translate.get('color')
    location = 'en-GB'
    const british = translate.get('color')

    await vi.advanceTimersByTimeAsync(TRANSLATE_TIME_OUT)

    expect(await american).toBe('Color')
    expect(await british).toBe('Colour')
    expect(translate.getSync('color')).toBe('Colour')
    location = 'en-US'
    expect(translate.getSync('color')).toBe('Color')
    expect(loadAmerican).toHaveBeenCalledTimes(1)
    expect(loadBritish).toHaveBeenCalledTimes(1)
  })

  it('should load the requested locale even when the locale changes before its timer runs without another request', async () => {
    const loadEnglish = vi.fn(async () => ({ title: 'English' }))
    const loadVietnamese = vi.fn(async () => ({ title: 'Tiếng Việt' }))
    const translate = createTranslate({ en: loadEnglish, vi: loadVietnamese })
    const result = translate.get('title')
    language = 'vi'
    location = 'vi-VN'

    await vi.advanceTimersByTimeAsync(TRANSLATE_TIME_OUT)

    expect(await result).toBe('English')
    expect(translate.getSync('title')).toBe('title')
    expect(loadEnglish).toHaveBeenCalledTimes(1)
    expect(loadVietnamese).not.toHaveBeenCalled()
  })

  it('should keep reversed API responses in the locale that started each batch', async () => {
    const english = createDictionary()
    const vietnamese = createDictionary()
    vi.mocked(Api.get)
      .mockReturnValueOnce(english.promise)
      .mockReturnValueOnce(vietnamese.promise)
    const translate = createTranslate()
    const first = translate.get('title')
    await vi.advanceTimersByTimeAsync(TRANSLATE_TIME_OUT)
    language = 'vi'
    location = 'vi-VN'
    const second = translate.get('title')
    await vi.advanceTimersByTimeAsync(TRANSLATE_TIME_OUT)

    vietnamese.resolve({ title: 'Tiếng Việt' })
    expect(await second).toBe('Tiếng Việt')
    english.resolve({ title: 'English' })
    expect(await first).toBe('English')
    expect(translate.getSync('title')).toBe('Tiếng Việt')
    language = 'en'
    location = 'en-US'
    expect(translate.getSync('title')).toBe('English')
  })

  it('should resolve API URL locale placeholders before a queued language change', async () => {
    vi.mocked(Api.get).mockRestore()
    const paths: string[] = []
    vi.stubGlobal('fetch', vi.fn(async (input: RequestInfo | URL): Promise<Response> => {
      const path = new URL(String(input), 'https://example.test').pathname
      paths.push(path)
      return new Response(JSON.stringify({
        title: path.includes('/en-US/') ? 'English' : 'Tiếng Việt'
      }), { status: 200, headers: { 'content-type': 'application/json' } })
    }))
    const translate = new TranslateInstance('/translations/{locale}/{country}/{language}')
    Geo.set('en-US')
    const english = translate.get('title')
    Geo.set('vi-VN')
    const vietnamese = translate.get('title')

    await vi.advanceTimersByTimeAsync(TRANSLATE_TIME_OUT)

    expect(await english).toBe('English')
    expect(await vietnamese).toBe('Tiếng Việt')
    expect(paths).toEqual(['/translations/en-US/US/en', '/translations/vi-VN/VN/vi'])
    Geo.set('en-US')
    expect(translate.getSync('title')).toBe('English')
  })

  it('should resolve a failed old file in its own locale without affecting the current dictionary', async () => {
    const english = createDictionary()
    const translate = createTranslate({
      en: () => english.promise,
      vi: async () => ({ title: 'Tiếng Việt' })
    })
    const first = translate.get('title')
    await vi.advanceTimersByTimeAsync(TRANSLATE_TIME_OUT)
    language = 'vi'
    location = 'vi-VN'
    const second = translate.get('title')
    await vi.advanceTimersByTimeAsync(TRANSLATE_TIME_OUT)
    expect(await second).toBe('Tiếng Việt')
    english.reject(new Error('Dictionary unavailable'))

    expect(await first).toBe('title')
    expect(translate.getSync('title')).toBe('Tiếng Việt')
    expect(ErrorCenter.on).toHaveBeenCalledTimes(1)
  })
})
