/** @vitest-environment jsdom */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, effectScope, type EffectScope, h, nextTick, type ShallowRef, type VNode } from 'vue'
import { Loading, ServerStorage } from '@dxtmisha/functional-basic'
import { useLoadingRef } from '../useLoadingRef'

const scopes: EffectScope[] = []

/**
 * Creates a scope owned by the test fixture.
 *
 * Создаёт область эффектов, очищаемую тестовым окружением.
 * @returns test scope / область эффектов теста
 */
function createScope(): EffectScope {
  const scope = effectScope()
  scopes.push(scope)
  return scope
}

beforeEach(() => {
  ServerStorage.reset()
  const context: Record<string, unknown> = {}
  ServerStorage.init(() => context)
  vi.spyOn(window, 'addEventListener')
  vi.spyOn(window, 'removeEventListener')
})

afterEach(() => {
  vi.unstubAllGlobals()
  scopes.splice(0).forEach(scope => scope.stop())
  for (const [type, listener] of vi.mocked(window.addEventListener).mock.calls) {
    if (type === 'ui-loading' && listener) {
      window.removeEventListener(type, listener)
    }
  }
  ServerStorage.reset()
  vi.restoreAllMocks()
})

describe('useLoadingRef', () => {
  it.each([false, true])('should initialize with loading status %s', (active) => {
    if (active) {
      Loading.show()
    }
    const loading = createScope().run(useLoadingRef)!

    expect(loading.value).toBe(active)
  })

  it('should stay active until all loading operations finish', () => {
    const loading = createScope().run(useLoadingRef)!
    Loading.show()
    Loading.show()
    expect(loading.value).toBe(true)

    Loading.hide()
    expect(loading.value).toBe(true)
    Loading.hide()
    expect(loading.value).toBe(false)
  })

  it.each([false, true])('should stop updating a disposed ref with value %s', (active) => {
    if (active) {
      Loading.show()
    }
    const scope = createScope()
    const loading = scope.run(useLoadingRef)!
    scope.stop()

    if (active) {
      Loading.hide()
    } else {
      Loading.show()
    }
    expect(loading.value).toBe(active)
  })

  it('should preserve subscriptions owned by other scopes', () => {
    const firstScope = createScope()
    const first = firstScope.run(useLoadingRef)!
    const second = createScope().run(useLoadingRef)!
    Loading.show()
    expect(first.value).toBe(true)
    expect(second.value).toBe(true)

    firstScope.stop()
    Loading.hide()
    expect(first.value).toBe(true)
    expect(second.value).toBe(false)
  })

  it('should release native listeners after repeatedly opening and closing scopes', () => {
    for (let index = 0; index < 5; index++) {
      const scope = createScope()
      scope.run(useLoadingRef)
      scope.stop()
      scope.stop()
    }

    const added = vi.mocked(window.addEventListener).mock.calls.filter(([type]) => type === 'ui-loading')
    const removed = vi.mocked(window.removeEventListener).mock.calls.filter(([type]) => type === 'ui-loading')
    expect(added).toHaveLength(5)
    expect(removed).toHaveLength(5)
    expect(removed.map(([, listener]) => listener)).toEqual(added.map(([, listener]) => listener))
  })

  it('should dispose a child scope subscription when the parent stops', () => {
    const parent = createScope()
    const loading = parent.run(() => effectScope().run(useLoadingRef))!
    parent.stop()
    Loading.show()

    expect(loading.value).toBe(false)
  })

  it('should remove the listener when its component unmounts', async () => {
    let loading: ShallowRef<boolean> | undefined
    const app = createApp({
      setup(): () => VNode {
        loading = useLoadingRef()
        return () => h('span', String(loading?.value))
      }
    })
    const container = document.createElement('div')
    app.mount(container)

    try {
      Loading.show()
      await nextTick()
      expect(container.textContent).toBe('true')
    } finally {
      app.unmount()
    }

    Loading.hide()
    expect(loading?.value).toBe(true)
  })

  it('should keep working outside a scope without Vue warnings', () => {
    const warn = vi.spyOn(console, 'warn')
    const loading = useLoadingRef()
    Loading.show()

    expect(loading.value).toBe(true)
    expect(warn).not.toHaveBeenCalled()
  })

  it('should avoid browser subscriptions when window is unavailable', () => {
    vi.stubGlobal('window', undefined)
    const registration = vi.spyOn(Loading, 'registrationEvent')
    const loading = createScope().run(useLoadingRef)!

    expect(loading.value).toBe(false)
    expect(registration).not.toHaveBeenCalled()
  })
})
