/** @vitest-environment node */
import { AsyncLocalStorage } from 'node:async_hooks'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createSSRApp, h, type EffectScope } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { CookieStorage, type CookieOptions, isString, ServerStorage } from '@dxtmisha/functional-basic'
import { useCookieRef } from '../useCookieRef'

/** Cookie passed to the server response writer / Cookie, переданная обработчику серверного ответа */
interface CookieWrite {
  /** Cookie name / Имя cookie */
  name: string
  /** Serialized value / Сериализованное значение */
  value: string
  /** Complete Set-Cookie value / Полное значение Set-Cookie */
  cookie: string
  /** Cookie attributes / Атрибуты cookie */
  options?: CookieOptions
}

/** Isolated request context / Изолированный контекст запроса */
interface CookieRequestContext extends Record<string, unknown> {
  /** Cookies written during rendering / Cookie, записанные при рендеринге */
  writes: CookieWrite[]
}

/** Settings with nested objects and arrays / Настройки с вложенными объектами и массивами */
interface Settings {
  /** Page preferences / Настройки страницы */
  preferences: { theme: string }
  /** Enabled sections / Включённые разделы */
  sections: string[]
}

/** Current request storage / Хранилище текущего запроса */
const contexts = /*#__PURE__*/ new AsyncLocalStorage<CookieRequestContext>()
/** Contexts whose effects need cleanup / Контексты, эффекты которых нужно остановить */
const storageContexts: CookieRequestContext[] = []

/**
 * Renders an application inside an isolated cookie request context.
 *
 * Рендерит приложение в изолированном контексте запроса cookie.
 * @param setup cookie changes performed during setup / изменения cookie во время setup
 * @returns request context with captured cookie writes / контекст запроса с записанными cookie
 */
async function renderIsolated(setup: () => void | Promise<void>): Promise<CookieRequestContext> {
  const context: CookieRequestContext = { writes: [] }
  storageContexts.push(context)

  await contexts.run(context, () => renderToString(createSSRApp({
    /**
     * Applies cookie changes before rendering.
     *
     * Применяет изменения cookie перед рендерингом.
     * @returns component render function / функция рендеринга компонента
     */
    async setup(): Promise<() => ReturnType<typeof h>> {
      await setup()
      return () => h('div')
    }
  })))

  return context
}

beforeEach(() => {
  ServerStorage.reset()
  ServerStorage.init(() => contexts.getStore())
  CookieStorage.init(undefined, undefined, (name, value, cookie, options) => {
    contexts.getStore()?.writes.push({ name, value, cookie, options })
  })
})

afterEach(() => {
  for (const context of storageContexts.splice(0)) {
    contexts.run(context, () => {
      if (ServerStorage.has('__ui:effect-scope-global__')) {
        ServerStorage.get<EffectScope>('__ui:effect-scope-global__').stop()
      }
    })
  }
  contexts.run({ writes: [] }, () => CookieStorage.reset())
  ServerStorage.reset()
})

describe('useCookieRef SSR', () => {
  it('should synchronously write a replacement and preserve cookie attributes', async () => {
    const options: CookieOptions = { path: '/', age: 3600, httpOnly: true, secure: true }
    let stored: unknown
    let writesDuringSetup = 0
    const context = await renderIsolated(() => {
      const item = useCookieRef('ssr-theme', 'initial', options)
      contexts.getStore()!.writes.length = 0
      item.value = 'updated'
      stored = CookieStorage.get('ssr-theme')
      writesDuringSetup = contexts.getStore()!.writes.length
    })

    expect(stored).toBe('updated')
    expect(writesDuringSetup).toBe(1)
    expect(context.writes).toHaveLength(1)
    expect(context.writes[0]).toMatchObject({ name: 'ssr-theme', value: 'updated', options })
    expect(context.writes[0]!.cookie).toContain('ssr-theme=updated')
    expect(context.writes[0]!.cookie).toContain('HttpOnly')
    expect(context.writes[0]!.cookie).toContain('Secure')
  })

  it.each([
    [0, '0'],
    [false, '0'],
    ['', ''],
    [undefined, '']
  ] as const)('should synchronously persist or clear a value of %s', async (value, serialized) => {
    let writesDuringSetup = 0
    const context = await renderIsolated(() => {
      const item = useCookieRef<string | number | boolean>('ssr-value', 'initial', { path: '/' })
      contexts.getStore()!.writes.length = 0
      item.value = value
      writesDuringSetup = contexts.getStore()!.writes.length
    })

    expect(writesDuringSetup).toBe(1)
    expect(context.writes).toHaveLength(1)
    expect(context.writes[0]!.value).toBe(serialized)
  })

  it('should serialize nested object and array changes before setup continues', async () => {
    let valuesDuringSetup: string[] = []
    const context = await renderIsolated(() => {
      const item = useCookieRef<Settings>('ssr-settings', {
        preferences: { theme: 'light' }, sections: []
      }, { path: '/' })
      const settings = item.value
      if (settings === undefined || isString(settings)) {
        throw new Error('Settings were not initialized')
      }
      contexts.getStore()!.writes.length = 0
      settings.preferences.theme = 'dark'
      settings.sections.push('news')
      valuesDuringSetup = contexts.getStore()!.writes.map(write => write.value)
    })

    expect(valuesDuringSetup.map(value => JSON.parse(value))).toEqual([
      { preferences: { theme: 'dark' }, sections: [] },
      { preferences: { theme: 'dark' }, sections: ['news'] }
    ])
    expect(context.writes).toHaveLength(2)
  })

  it('should isolate asynchronous writes to the same cookie across parallel SSR requests', async () => {
    const [first, second] = await Promise.all(['first', 'second'].map(value => renderIsolated(async () => {
      const item = useCookieRef('shared-name', 'initial', { path: '/' })
      contexts.getStore()!.writes.length = 0
      await Promise.resolve()
      item.value = value
    })))

    expect(first!.writes.map(write => write.value)).toEqual(['first'])
    expect(second!.writes.map(write => write.value)).toEqual(['second'])
  })
})
