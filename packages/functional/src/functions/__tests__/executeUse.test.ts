/**
 * @vitest-environment jsdom
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, getCurrentScope, h, nextTick, onScopeDispose, ref, watch, type App, type EffectScope, type VNode } from 'vue'

/** Fresh factory module used by the current test / Новый модуль фабрик для текущего теста */
let factories: typeof import('../executeUse')
/** Storage belonging to the current factory module / Хранилище текущего модуля фабрик */
let storage: typeof import('@dxtmisha/functional-basic').ServerStorage
/** Applications requiring teardown / Приложения, требующие завершения работы */
const applications = /* #__PURE__ */ new Set<App>()
/** Effect scopes requiring teardown / Области эффектов, требующие завершения работы */
const scopes = /* #__PURE__ */ new Set<EffectScope>()

/**
 * Tracks the scope selected by a factory for cleanup after the test.
 *
 * Сохраняет выбранную фабрикой область для очистки после теста.
 */
function captureScope(): void {
  const scope = getCurrentScope()

  if (scope) {
    scopes.add(scope)
  }
}

/**
 * Mounts an application in a detached container and registers its cleanup.
 *
 * Монтирует приложение в отдельный контейнер и регистрирует его очистку.
 * @param application application to mount / монтируемое приложение
 */
function mountApplication(application: App): void {
  applications.add(application)
  application.mount(document.createElement('div'))
}

beforeEach(async () => {
  vi.resetModules()
  storage = (await import('@dxtmisha/functional-basic')).ServerStorage
  factories = await import('../executeUse')
  storage.init(() => undefined)
  storage.reset()
  vi.spyOn(console, 'warn')
})

afterEach(() => {
  try {
    applications.forEach(application => application.unmount())
    scopes.forEach(scope => scope.stop())
    expect(console.warn).not.toHaveBeenCalled()
  } finally {
    applications.clear()
    scopes.clear()
    storage.reset()
    vi.restoreAllMocks()
  }
})

describe('executeUse', () => {
  describe('Local initialization and arguments', () => {
    it('creates one instance lazily and reuses it on repeated calls', () => {
      const initialize = vi.fn(() => {
        captureScope()
        return { name: 'shared' }
      })
      const useService = factories.executeUse(initialize, factories.ExecuteUseType.local)

      expect(initialize).not.toHaveBeenCalled()
      const first = useService()

      expect(first.name).toBe('shared')
      expect(useService()).toBe(first)
      expect(initialize).toHaveBeenCalledTimes(1)
    })

    it('uses arguments only for the first initialization', () => {
      const initialize = vi.fn((prefix: string, identifier: number) => {
        captureScope()
        return { identifier: `${prefix}:${identifier}` }
      })
      const useProfile = factories.executeUseLocal(initialize)
      const first = useProfile('user', 123)
      const second = useProfile('ignored', 456)

      expect(first.identifier).toBe('user:123')
      expect(second).toBe(first)
      expect(initialize).toHaveBeenCalledExactlyOnceWith('user', 123)
    })

    it('keeps separate factory definitions isolated', () => {
      const useFirst = factories.executeUseLocal(() => {
        captureScope()
        return { count: ref(0) }
      })
      const useSecond = factories.executeUseLocal(() => {
        captureScope()
        return { count: ref(0) }
      })
      const first = useFirst()
      const second = useSecond()

      first.count.value = 2

      expect(second).not.toBe(first)
      expect(second.count.value).toBe(0)
      expect(useFirst()).toBe(first)
      expect(useSecond()).toBe(second)
    })

    it('allows retrying after an initializer throws', () => {
      const failure = new Error('Initialization failed')
      let attempts = 0
      const useService = factories.executeUseLocal(() => {
        captureScope()
        attempts++

        if (attempts === 1) {
          throw failure
        }

        return { ready: true }
      })

      expect(() => useService()).toThrow(failure)
      const managed = useService()

      expect(managed.ready).toBe(true)
      expect(useService()).toBe(managed)
      expect(attempts).toBe(2)
    })
  })

  describe('Readonly containers and init()', () => {
    it('returns the original frozen result without adding management methods to it', () => {
      const original = { endpoint: '/api', version: 'v1' }
      const useService = factories.executeUseLocal(() => {
        captureScope()
        return original
      })
      const managed = useService()

      expect(managed.init()).toBe(original)
      expect(managed).not.toBe(original)
      expect(Object.isFrozen(managed)).toBe(true)
      expect(Object.isFrozen(original)).toBe(true)
      expect(Object.hasOwn(original, 'init')).toBe(false)
      expect(Object.hasOwn(original, 'destroyExecute')).toBe(false)
    })

    it('prevents replacing container properties while preserving mutable refs', () => {
      const count = ref(0)
      const useService = factories.executeUseLocal(() => {
        captureScope()
        return { count, name: 'original' }
      })
      const managed = useService()

      expect(Reflect.set(managed, 'name', 'changed')).toBe(false)
      expect(managed.name).toBe('original')
      managed.count.value = 3
      expect(managed.init().count.value).toBe(3)
      expect(managed.count).toBe(count)
    })
  })

  describe('Local cache reset and effect ownership', () => {
    it('reinitializes with new arguments after the local cache is reset', () => {
      const initialize = vi.fn((name: string) => {
        captureScope()
        return { name }
      })
      const useService = factories.executeUseLocal(initialize)
      const first = useService('first')

      expect(first.destroyExecute).toEqual(expect.any(Function))
      first.destroyExecute?.()
      const second = useService('second')

      expect(second).not.toBe(first)
      expect(second.name).toBe('second')
      expect(first.name).toBe('first')
      expect(useService('ignored')).toBe(second)
      expect(initialize.mock.calls).toEqual([['first'], ['second']])
    })

    it('keeps local effects active after the calling scope stops', async () => {
      const source = ref(0)
      const changed = vi.fn()
      const disposed = vi.fn()
      const owner = effectScope()
      scopes.add(owner)
      const useService = factories.executeUseLocal(() => {
        captureScope()
        watch(source, changed)
        onScopeDispose(disposed)
        return { source }
      })

      owner.run(() => useService())
      owner.stop()
      source.value = 1
      await nextTick()

      expect(changed).toHaveBeenCalledExactlyOnceWith(1, 0, expect.any(Function))
      expect(disposed).not.toHaveBeenCalled()
    })
  })

  describe('Global initialization registry', () => {
    it('reuses initialized instances and discovers registrations made after startup', () => {
      const firstInitialize = vi.fn(() => {
        captureScope()
        return { name: 'first' }
      })
      const useFirst = factories.executeUseGlobal(firstInitialize)

      expect(firstInitialize).not.toHaveBeenCalled()
      factories.executeUseGlobalInit()
      const first = useFirst()
      const secondInitialize = vi.fn(() => {
        captureScope()
        return { name: 'second' }
      })
      const useSecond = factories.executeUseGlobal(secondInitialize)
      factories.executeUseGlobalInit()
      factories.executeUseGlobalInit()

      expect(useFirst()).toBe(first)
      expect(useSecond().name).toBe('second')
      expect(firstInitialize).toHaveBeenCalledTimes(1)
      expect(secondInitialize).toHaveBeenCalledTimes(1)
    })

    it('preserves registrations when batch initialization fails and retries them later', () => {
      const failure = new Error('Startup failed')
      let attempts = 0
      const useFirst = factories.executeUseGlobal(() => {
        captureScope()
        attempts++

        if (attempts === 1) {
          throw failure
        }

        return { ready: true }
      })
      const secondInitialize = vi.fn(() => {
        captureScope()
        return { ready: true }
      })
      const useSecond = factories.executeUseGlobal(secondInitialize)

      expect(() => factories.executeUseGlobalInit()).toThrow(failure)
      expect(secondInitialize).not.toHaveBeenCalled()
      factories.executeUseGlobalInit()

      expect(useFirst().ready).toBe(true)
      expect(useSecond().ready).toBe(true)
      expect(attempts).toBe(2)
      expect(secondInitialize).toHaveBeenCalledTimes(1)
    })
  })

  describe('Provided component state and lifecycle', () => {
    it('defaults to provide and shares an instance between owner and descendants', () => {
      const initialize = vi.fn(() => ({ count: ref(0) }))
      const useService = factories.executeUse(initialize)
      const received: ReturnType<typeof useService>[] = []
      const child = defineComponent({
        setup(): () => null {
          received.push(useService())
          return () => null
        }
      })
      mountApplication(createApp({
        setup(): () => VNode {
          const managed = useService()
          received.push(managed, useService())
          managed.count.value = 4
          return () => h(child)
        }
      }))

      expect(received).toHaveLength(3)
      expect(received[1]).toBe(received[0])
      expect(received[2]).toBe(received[0])
      expect(received[2]?.count.value).toBe(4)
      expect(received[0]?.destroyExecute).toBeUndefined()
      expect(initialize).toHaveBeenCalledTimes(1)
    })

    it('creates independent instances in independent component trees', () => {
      const initialize = vi.fn(() => ({ count: ref(0) }))
      const useService = factories.executeUseProvide(initialize)
      const received: ReturnType<typeof useService>[] = []
      const root = defineComponent({
        setup(): () => null {
          received.push(useService())
          return () => null
        }
      })

      mountApplication(createApp(root))
      mountApplication(createApp(root))

      expect(received).toHaveLength(2)
      expect(received[1]).not.toBe(received[0])
      expect(received[0]).toBeDefined()
      received[0]!.count.value = 2
      expect(received[1]?.count.value).toBe(0)
      expect(initialize).toHaveBeenCalledTimes(2)
    })

    it('stops provided effects when the component that created them unmounts', async () => {
      const source = ref(0)
      const changed = vi.fn()
      const disposed = vi.fn()
      const useService = factories.executeUseProvide(() => {
        watch(source, changed)
        onScopeDispose(disposed)
        return { source }
      })
      const application = createApp({
        setup(): () => null {
          useService()
          return () => null
        }
      })
      mountApplication(application)
      source.value = 1
      await nextTick()
      expect(changed).toHaveBeenCalledTimes(1)

      applications.delete(application)
      application.unmount()
      source.value = 2
      await nextTick()

      expect(changed).toHaveBeenCalledTimes(1)
      expect(disposed).toHaveBeenCalledTimes(1)
    })
  })
})
