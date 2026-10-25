/** @vitest-environment jsdom */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { type EffectScope, nextTick, type Ref } from 'vue'
import { CookieStorage, DataStorage, isString, ServerStorage } from '@dxtmisha/functional-basic'
import { useStorageRef } from '../useStorageRef'
import { useSessionRef } from '../useSessionRef'
import { useCookieRef } from '../useCookieRef'

/** Persistence backend under test / Проверяемое хранилище */
type StorageKind = 'local' | 'session' | 'cookie'

/** Stored settings with nested objects and arrays / Сохраняемые настройки с вложенными объектами и массивами */
interface Settings {
  /** Nested preferences / Вложенные настройки */
  preferences: { enabled: boolean, theme: string, optional?: string }
  /** Editable entries / Изменяемые элементы */
  entries: { id: number, label: string }[]
}

/**
 * Transport double that keeps persistence tests independent of other tabs.
 *
 * Подмена транспорта, изолирующая тесты сохранения от других вкладок.
 */
class BroadcastChannelMock {
  /** Message listener / Обработчик сообщения */
  onmessage: ((event: MessageEvent) => void) | null = null
  /** Message error listener / Обработчик ошибки сообщения */
  onmessageerror: ((event: MessageEvent) => void) | null = null
  /** Message sender / Отправка сообщения */
  postMessage = vi.fn<(message: unknown) => void>()
}

/**
 * Clears cached instances while preserving browser storage for reload checks.
 *
 * Очищает кеш экземпляров, сохраняя данные браузера для проверки восстановления.
 */
function resetContext(): void {
  if (ServerStorage.has('__ui:effect-scope-global__')) {
    ServerStorage.get<EffectScope>('__ui:effect-scope-global__').stop()
  }
  ServerStorage.reset()
  CookieStorage.reset()
}

/**
 * Creates a fresh object for each test and simulated reload.
 *
 * Создаёт новый объект для каждого теста и имитации перезагрузки.
 * @returns initial settings / исходные настройки
 */
function createSettings(): Settings {
  return {
    preferences: { enabled: false, theme: 'light', optional: 'remove' },
    entries: [{ id: 1, label: 'first' }]
  }
}

/**
 * Opens a ref using the selected persistence backend.
 *
 * Создаёт ref с выбранным хранилищем.
 * @param kind persistence backend / хранилище
 * @param name storage key / ключ хранилища
 * @returns persistent settings ref / ref сохраняемых настроек
 */
function createSettingsRef(kind: StorageKind, name: string): Ref<Settings | string | undefined> {
  if (kind === 'cookie') {
    return useCookieRef<Settings>(name, createSettings, { age: 3600, path: '/' })
  }
  if (kind === 'session') {
    return useSessionRef<Settings>(name, createSettings)
  }
  return useStorageRef<Settings>(name, createSettings)
}

/**
 * Returns object settings or fails the test if initialization did not succeed.
 *
 * Возвращает объект настроек или завершает тест при неудачной инициализации.
 * @param item settings ref / ref настроек
 * @returns settings object / объект настроек
 */
function getSettings(item: Ref<Settings | string | undefined>): Settings {
  const value = item.value
  if (value === undefined || isString(value)) {
    throw new Error('Settings were not initialized')
  }
  return value
}

/**
 * Reads serialized browser data directly, bypassing in-memory object references.
 *
 * Читает сериализованные данные браузера напрямую, обходя ссылки на объекты в памяти.
 * @param kind persistence backend / хранилище
 * @param name storage key / ключ хранилища
 * @returns persisted settings / сохранённые настройки
 */
function readSettings(kind: StorageKind, name: string): Settings | undefined {
  if (kind === 'cookie') {
    const prefix = `${encodeURIComponent(name)}=`
    const entry = document.cookie.split(';').map(value => value.trim()).find(value => value.startsWith(prefix))
    return entry ? JSON.parse(decodeURIComponent(entry.slice(prefix.length))) as Settings : undefined
  }
  const storage = kind === 'session' ? window.sessionStorage : window.localStorage
  const serialized = storage.getItem(`ui-storage__${name}`)
  return serialized ? (JSON.parse(serialized) as { value: Settings }).value : undefined
}

beforeEach(() => {
  resetContext()
  DataStorage.setPrefix('ui-storage')
  window.localStorage.clear()
  window.sessionStorage.clear()
  vi.stubGlobal('BroadcastChannel', BroadcastChannelMock)
  vi.spyOn(window, 'addEventListener')
})

afterEach(() => {
  resetContext()
  for (const [type, listener] of vi.mocked(window.addEventListener).mock.calls) {
    if (type === 'storage' && listener) {
      window.removeEventListener(type, listener)
    }
  }
  for (const entry of document.cookie.split(';')) {
    const name = entry.split('=')[0]?.trim()
    if (name) {
      document.cookie = `${name}=; Max-Age=0; Path=/`
    }
  }
  window.localStorage.clear()
  window.sessionStorage.clear()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

describe.each(['local', 'session', 'cookie'] as const)('%s ref persistence', (kind) => {
  it('should persist a nested property and restore it after clearing instance caches', async () => {
    const name = `${kind}-nested-settings`
    const item = createSettingsRef(kind, name)
    getSettings(item).preferences.enabled = true
    await nextTick()

    expect(readSettings(kind, name)?.preferences.enabled).toBe(true)

    resetContext()
    expect(getSettings(createSettingsRef(kind, name)).preferences.enabled).toBe(true)
  })

  it('should persist array item changes and array mutations', async () => {
    const name = `${kind}-nested-array`
    const item = createSettingsRef(kind, name)
    const settings = getSettings(item)
    settings.entries[0]!.label = 'updated'
    settings.entries.push({ id: 2, label: 'second' })
    await nextTick()

    expect(readSettings(kind, name)?.entries).toEqual([
      { id: 1, label: 'updated' }, { id: 2, label: 'second' }
    ])

    settings.entries.splice(0, 1)
    await nextTick()
    expect(readSettings(kind, name)?.entries).toEqual([{ id: 2, label: 'second' }])
  })

  it('should persist nested property additions and deletions', async () => {
    const name = `${kind}-nested-keys`
    const item = createSettingsRef(kind, name)
    const preferences = getSettings(item).preferences
    delete preferences.optional
    await nextTick()
    expect(readSettings(kind, name)?.preferences).not.toHaveProperty('optional')

    preferences.optional = 'added'
    await nextTick()
    expect(readSettings(kind, name)?.preferences.optional).toBe('added')
  })

  it('should batch nested mutations into one write and reuse the cached ref', async () => {
    const name = `${kind}-batched-settings`
    const setItem = vi.spyOn(Storage.prototype, 'setItem')
    const setCookie = vi.spyOn(document, 'cookie', 'set')
    const item = createSettingsRef(kind, name)
    expect(createSettingsRef(kind, name)).toBe(item)
    setItem.mockClear()
    setCookie.mockClear()

    const settings = getSettings(item)
    settings.preferences.enabled = true
    settings.preferences.theme = 'dark'
    settings.entries.push({ id: 2, label: 'second' })
    await nextTick()

    expect(readSettings(kind, name)).toEqual(settings)
    if (kind === 'cookie') {
      expect(setCookie).toHaveBeenCalledTimes(1)
    } else {
      expect(setItem.mock.calls.filter(([key]) => key === `ui-storage__${name}`)).toHaveLength(1)
    }
  })

  it('should keep persisting nested changes after replacing the root value', async () => {
    const name = `${kind}-replacement-settings`
    const item = createSettingsRef(kind, name)
    item.value = { preferences: { enabled: true, theme: 'dark' }, entries: [] }
    await nextTick()
    getSettings(item).preferences.enabled = false
    await nextTick()

    expect(readSettings(kind, name)).toEqual({
      preferences: { enabled: false, theme: 'dark' }, entries: []
    })
  })

  it('should remove the persisted value when the root ref is cleared', async () => {
    const name = `${kind}-removed-settings`
    const item = createSettingsRef(kind, name)
    item.value = undefined
    await nextTick()

    expect(readSettings(kind, name)).toBeUndefined()
  })
})
