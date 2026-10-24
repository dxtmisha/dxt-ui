import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { effectScope, getCurrentScope, nextTick, onScopeDispose, ref, watch, type EffectScope } from 'vue'

/** Current server request context / Контекст текущего серверного запроса */
let context: Record<string, unknown> | undefined
/** Fresh singleton factory module / Заново загруженный модуль фабрик синглтонов */
let factories: typeof import('../executeUse')
/** Server storage associated with the loaded module / Серверное хранилище загруженного модуля */
let serverStorage: typeof import('@dxtmisha/functional-basic').ServerStorage
/** Error center associated with the loaded module / Центр ошибок загруженного модуля */
let errorCenter: typeof import('@dxtmisha/functional-basic').ErrorCenter
/** Effect scopes created during a test / Области эффектов, созданные в тесте */
const scopes: EffectScope[] = []

/**
 * Records the active scope for deterministic test cleanup.
 *
 * Сохраняет активную область для детерминированной очистки после теста.
 * @returns current effect scope / текущая область эффектов
 */
function captureScope(): EffectScope | undefined {
  const scope = getCurrentScope()

  if (scope && !scopes.includes(scope)) {
    scopes.push(scope)
  }

  return scope
}

beforeEach(async () => {
  vi.resetModules()
  const basic = await import('@dxtmisha/functional-basic')
  factories = await import('../executeUse')
  serverStorage = basic.ServerStorage
  errorCenter = basic.ErrorCenter
  context = undefined
  serverStorage.reset()
  serverStorage.init(() => context)
})

afterEach(() => {
  scopes.forEach(scope => scope.stop())
  scopes.length = 0
  serverStorage.reset()
  vi.restoreAllMocks()
})

describe('executeUse: process-wide SSR singletons', () => {
  it('registers factories before a request and initializes once across separate requests', () => {
    const initialize = vi.fn(() => ({ status: 'ready' }))
    const reportError = vi.spyOn(errorCenter, 'on')
    const useService = factories.executeUseGlobal(initialize)

    expect(initialize).not.toHaveBeenCalled()
    expect(reportError).not.toHaveBeenCalled()

    context = {}
    factories.executeUseGlobalInit()
    const first = useService()

    context = {}
    factories.executeUseGlobalInit()

    expect(useService()).toBe(first)
    expect(first.status).toBe('ready')
    expect(initialize).toHaveBeenCalledTimes(1)
    expect(reportError).not.toHaveBeenCalled()
  })

  it('does not access request storage when initializing or reading a global singleton', () => {
    const getStorage = vi.spyOn(serverStorage, 'get')
    const initialize = vi.fn(() => ({ status: 'ready' }))
    const useService = factories.executeUseGlobal(initialize)

    factories.executeUseGlobalInit()
    const first = useService()
    context = {}

    expect(useService()).toBe(first)
    expect(getStorage).not.toHaveBeenCalled()
    expect(initialize).toHaveBeenCalledTimes(1)
  })

  it('preserves registrations across context changes and initializes newly registered factories', () => {
    context = {}
    const firstInitialize = vi.fn(() => ({ name: 'first' }))
    const useFirst = factories.executeUseGlobal(firstInitialize)
    factories.executeUseGlobalInit()
    const first = useFirst()

    context = {}
    const secondInitialize = vi.fn(() => ({ name: 'second' }))
    const useSecond = factories.executeUseGlobal(secondInitialize)
    factories.executeUseGlobalInit()
    factories.executeUseGlobalInit()

    expect(useFirst()).toBe(first)
    expect(useSecond().name).toBe('second')
    expect(firstInitialize).toHaveBeenCalledTimes(1)
    expect(secondInitialize).toHaveBeenCalledTimes(1)
  })

  it('supports lazy global access and shares mutations across interleaved requests', async () => {
    const initialize = vi.fn(() => ({ count: ref(0) }))
    const useService = factories.executeUseGlobal(initialize)
    context = {}
    const first = useService()

    await Promise.resolve()
    context = {}
    const second = useService()
    second.count.value = 2
    factories.executeUseGlobalInit()

    expect(second).toBe(first)
    expect(first.count.value).toBe(2)
    expect(initialize).toHaveBeenCalledTimes(1)
  })

  it('keeps global effects alive after the initializing request scope stops', async () => {
    context = {}
    const source = ref(0)
    const updated = vi.fn()
    const requestScope = effectScope()
    scopes.push(requestScope)
    const useService = factories.executeUseGlobal(() => {
      captureScope()
      watch(source, updated)
      return { source }
    })

    requestScope.run(() => useService())
    requestScope.stop()
    context = {}
    source.value = 1
    await nextTick()

    expect(updated).toHaveBeenCalledExactlyOnceWith(1, 0, expect.any(Function))
  })

  it('releases global effects on reset and recreates one instance for all requests', async () => {
    const source = ref(0)
    const updated = vi.fn()
    const disposed = vi.fn()
    const initialize = vi.fn(() => {
      captureScope()
      watch(source, updated)
      onScopeDispose(disposed)
      return { source }
    })
    const useService = factories.executeUseGlobal(initialize)
    context = {}
    const first = useService()
    first.destroyExecute?.()
    expect(disposed).toHaveBeenCalledTimes(1)

    context = {}
    factories.executeUseGlobalInit()
    const second = useService()
    source.value = 1
    await nextTick()

    expect(second).not.toBe(first)
    expect(initialize).toHaveBeenCalledTimes(2)
    expect(updated).toHaveBeenCalledTimes(1)

    first.destroyExecute?.()
    expect(useService()).toBe(second)
    expect(disposed).toHaveBeenCalledTimes(1)
  })

  it('disposes a failed initialization scope and allows retrying the factory', () => {
    const failure = new Error('Initialization failed')
    const disposed = vi.fn()
    let attempts = 0
    const useService = factories.executeUseGlobal(() => {
      captureScope()
      onScopeDispose(disposed)
      attempts++

      if (attempts === 1) {
        throw failure
      }

      return { ready: true }
    })

    expect(() => useService()).toThrow(failure)
    expect(disposed).toHaveBeenCalledTimes(1)
    expect(useService().ready).toBe(true)
    expect(attempts).toBe(2)
  })

  it('keeps local instances and their effect scopes isolated per request', () => {
    const initialize = vi.fn(() => {
      return { scope: captureScope() }
    })
    const useService = factories.executeUseLocal(initialize)
    const firstContext: Record<string, unknown> = {}
    const secondContext: Record<string, unknown> = {}
    context = firstContext
    const first = useService()
    expect(useService()).toBe(first)

    context = secondContext
    const second = useService()

    expect(second).not.toBe(first)
    expect(second.scope).not.toBe(first.scope)
    expect(initialize).toHaveBeenCalledTimes(2)

    context = firstContext
    expect(useService()).toBe(first)
  })
})
