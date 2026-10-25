/**
 * @vitest-environment jsdom
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { effectScope, type EffectScope, nextTick, ref } from 'vue'
import { ServerStorage } from '@dxtmisha/functional-basic'
import { useLazyItemByMarginRef } from '../useLazyItemByMarginRef'

const scopes: EffectScope[] = []
const observers: IntersectionObserverMock[] = []

/**
 * Observer double that records observed elements and delivers intersection events.
 *
 * Подмена observer для записи наблюдаемых элементов и передачи событий пересечения.
 */
class IntersectionObserverMock {
  readonly observe = vi.fn<(element: Element) => void>()
  readonly unobserve = vi.fn<(element: Element) => void>()
  readonly disconnect = vi.fn<() => void>()

  constructor(
    readonly callback: IntersectionObserverCallback,
    readonly options?: IntersectionObserverInit
  ) {
    observers.push(this)
  }

  /**
   * Delivers a visibility update for an observed element.
   *
   * Передаёт обновление видимости наблюдаемого элемента.
   * @param target observed element / наблюдаемый элемент
   * @param isIntersecting visibility flag / признак видимости
   * @param intersectionRatio visible fraction / видимая доля
   * @returns delivered observer entry / переданная запись наблюдателя
   */
  emit(target: HTMLElement, isIntersecting: boolean = true, intersectionRatio: number = 1): IntersectionObserverEntry {
    const bounds = target.getBoundingClientRect()
    const entry: IntersectionObserverEntry = {
      target,
      isIntersecting,
      intersectionRatio,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: null,
      time: 0
    }
    this.callback([entry], this as unknown as IntersectionObserver)
    return entry
  }
}

/**
 * Runs a test registration in an owned scope.
 *
 * Выполняет тестовую регистрацию в отдельном scope.
 * @param callback registration callback / функция регистрации
 */
function runInScope<T>(callback: () => T): T {
  const scope = effectScope()
  scopes.push(scope)
  return scope.run(callback)!
}

describe('useLazyItemByMarginRef', () => {
  beforeEach(() => {
    ServerStorage.reset()
    observers.length = 0
    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
  })

  afterEach(() => {
    for (const scope of scopes.splice(0)) {
      scope.stop()
    }

    ServerStorage.reset()
    vi.unstubAllGlobals()
  })

  it('should observe the initial element with the requested margin', () => {
    const target = document.createElement('div')
    const lazy = runInScope(() => useLazyItemByMarginRef(ref(target), '10px'))

    expect(observers).toHaveLength(1)
    expect(observers[0]?.options).toEqual({ rootMargin: '10px' })
    expect(observers[0]?.observe).toHaveBeenCalledExactlyOnceWith(target)
    expect(lazy.lazyItemStatus.value).toBe(false)
    expect(lazy.lazyItem).toBeDefined()
  })

  it('should expose the current intersection state', () => {
    const target = document.createElement('div')
    const lazy = runInScope(() => useLazyItemByMarginRef(ref(target)))
    const observer = observers[0]!
    const entry = observer.emit(target, true, 0.5)

    expect(lazy.lazyItemStatus.value).toBe(true)
    expect(lazy.lazyItem?.ratio.value).toBe(0.5)
    expect(lazy.lazyItem?.entry.value).toBe(entry)
  })

  it('should release the registration when its owning scope stops', async () => {
    const target = document.createElement('div')
    const element = ref<HTMLElement | undefined>(target)
    const scope = effectScope()
    scopes.push(scope)
    const lazy = scope.run(() => useLazyItemByMarginRef(element))!
    const observer = observers[0]!

    scope.stop()

    expect(observer.unobserve).toHaveBeenCalledExactlyOnceWith(target)
    expect(lazy.lazyItem).toBeUndefined()

    element.value = document.createElement('div')
    await nextTick()
    expect(observer.observe).toHaveBeenCalledTimes(1)
  })

  it('should preserve other registrations sharing the same margin', () => {
    const firstTarget = document.createElement('div')
    const secondTarget = document.createElement('div')
    const firstScope = effectScope()
    scopes.push(firstScope)
    const first = firstScope.run(() => useLazyItemByMarginRef(ref(firstTarget)))!
    const second = runInScope(() => useLazyItemByMarginRef(ref(secondTarget)))
    const observer = observers[0]!

    firstScope.stop()

    expect(observers).toHaveLength(1)
    expect(observer.unobserve).toHaveBeenCalledExactlyOnceWith(firstTarget)
    expect(observer.disconnect).not.toHaveBeenCalled()
    expect(first.lazyItem).toBeUndefined()
    expect(second.lazyItem).toBeDefined()

    observer.emit(secondTarget)

    expect(second.lazyItemStatus.value).toBe(true)
  })

  it('should remove the observed element when its ref is cleared before the watcher runs', async () => {
    const target = document.createElement('div')
    const element = ref<HTMLElement | undefined>(target)
    const lazy = runInScope(() => useLazyItemByMarginRef(element))
    const observer = observers[0]!

    element.value = undefined
    lazy.removeLazyItem()
    await nextTick()

    expect(observer.unobserve).toHaveBeenCalledExactlyOnceWith(target)
    expect(lazy.lazyItem).toBeUndefined()
  })

  it('should remove the observed element when its ref is replaced before the watcher runs', async () => {
    const target = document.createElement('div')
    const element = ref<HTMLElement | undefined>(target)
    const lazy = runInScope(() => useLazyItemByMarginRef(element))
    const observer = observers[0]!

    element.value = document.createElement('div')
    lazy.removeLazyItem()
    await nextTick()

    expect(observer.unobserve).toHaveBeenCalledExactlyOnceWith(target)
    expect(observer.observe).toHaveBeenCalledTimes(1)
    expect(lazy.lazyItem).toBeUndefined()
  })

  it('should cancel an unmounted registration created outside a parent scope', async () => {
    const element = ref<HTMLElement>()
    const lazy = useLazyItemByMarginRef(element)
    const observer = observers[0]!

    try {
      lazy.removeLazyItem()
      element.value = document.createElement('div')
      await nextTick()

      expect(observer.observe).not.toHaveBeenCalled()
      expect(lazy.lazyItem).toBeUndefined()
    } finally {
      lazy.removeLazyItem()
    }
  })

  it('should allow repeated manual removal without affecting other registrations', () => {
    const firstTarget = document.createElement('div')
    const first = runInScope(() => useLazyItemByMarginRef(ref(firstTarget)))
    const second = runInScope(() => useLazyItemByMarginRef(ref(document.createElement('div'))))
    const observer = observers[0]!

    first.removeLazyItem()
    first.removeLazyItem()

    expect(observer.unobserve).toHaveBeenCalledExactlyOnceWith(firstTarget)
    expect(observer.disconnect).not.toHaveBeenCalled()
    expect(first.lazyItem).toBeUndefined()
    expect(second.lazyItem).toBeDefined()
  })

  it('should keep observing replacements and release each previous element', async () => {
    const first = document.createElement('div')
    const second = document.createElement('div')
    const third = document.createElement('div')
    const element = ref<HTMLElement | undefined>(first)
    const lazy = runInScope(() => useLazyItemByMarginRef(element))
    const observer = observers[0]!

    element.value = second
    await nextTick()
    expect(observer.unobserve).toHaveBeenNthCalledWith(1, first)
    expect(lazy.lazyItem).toBeDefined()

    element.value = undefined
    await nextTick()
    expect(observer.unobserve).toHaveBeenNthCalledWith(2, second)

    element.value = third
    await nextTick()
    expect(observer.observe.mock.calls).toEqual([[first], [second], [third]])
    expect(lazy.lazyItem).toBeDefined()

    lazy.removeLazyItem()
    expect(observer.unobserve).toHaveBeenNthCalledWith(3, third)
    expect(lazy.lazyItem).toBeUndefined()
  })

  it('should reuse the pooled observer after an earlier owner stops', () => {
    const first = runInScope(() => useLazyItemByMarginRef(ref(document.createElement('div'))))
    first.removeLazyItem()
    const target = document.createElement('div')
    const second = runInScope(() => useLazyItemByMarginRef(ref(target)))

    expect(observers).toHaveLength(1)
    expect(observers[0]?.observe).toHaveBeenLastCalledWith(target)
    expect(observers[0]?.disconnect).not.toHaveBeenCalled()
    expect(second.lazyItem).toBeDefined()
  })

  describe('Multiple registrations of the same element', () => {
    it('should update each registration with its own state and observe the element once', () => {
      const element = ref(document.createElement('div'))
      const first = runInScope(() => useLazyItemByMarginRef(element, '512px 0px'))
      const second = runInScope(() => useLazyItemByMarginRef(element, '512px 0px'))
      const observer = observers[0]!

      expect(observers).toHaveLength(1)
      expect(observer.observe).toHaveBeenCalledExactlyOnceWith(element.value)
      expect(first.lazyItemStatus).not.toBe(second.lazyItemStatus)
      expect(first.lazyItem?.status).toBe(first.lazyItemStatus)
      expect(second.lazyItem?.status).toBe(second.lazyItemStatus)

      const entry = observer.emit(element.value, true, 0.75)
      for (const registration of [first, second]) {
        expect(registration.lazyItemStatus.value).toBe(true)
        expect(registration.lazyItem?.ratio.value).toBe(0.75)
        expect(registration.lazyItem?.entry.value).toBe(entry)
      }

      observer.emit(element.value, false, 0)
      expect(first.lazyItemStatus.value).toBe(false)
      expect(second.lazyItemStatus.value).toBe(false)
    })

    it.each([0, 1])('should preserve the other owner when registration %s is removed', (index) => {
      const element = ref(document.createElement('div'))
      const registrations = [
        runInScope(() => useLazyItemByMarginRef(element)),
        runInScope(() => useLazyItemByMarginRef(element))
      ]
      const removed = registrations[index]!
      const remaining = registrations[1 - index]!
      const observer = observers[0]!

      removed.removeLazyItem()
      removed.removeLazyItem()

      expect(removed.lazyItem).toBeUndefined()
      expect(remaining.lazyItem?.status).toBe(remaining.lazyItemStatus)
      expect(observer.unobserve).not.toHaveBeenCalled()
      observer.emit(element.value)
      expect(removed.lazyItemStatus.value).toBe(false)
      expect(remaining.lazyItemStatus.value).toBe(true)

      remaining.removeLazyItem()
      remaining.removeLazyItem()
      expect(observer.unobserve).toHaveBeenCalledExactlyOnceWith(element.value)
      expect(remaining.lazyItem).toBeUndefined()
    })

    it('should release only the registration owned by a stopped parent scope', () => {
      const element = ref(document.createElement('div'))
      const firstScope = effectScope()
      scopes.push(firstScope)
      const first = firstScope.run(() => useLazyItemByMarginRef(element))!
      const second = runInScope(() => useLazyItemByMarginRef(element))
      const observer = observers[0]!

      firstScope.stop()

      expect(first.lazyItem).toBeUndefined()
      expect(observer.unobserve).not.toHaveBeenCalled()
      observer.emit(element.value)
      expect(first.lazyItemStatus.value).toBe(false)
      expect(second.lazyItemStatus.value).toBe(true)
      second.removeLazyItem()
      expect(observer.unobserve).toHaveBeenCalledExactlyOnceWith(element.value)
    })

    it('should move one registration to another element and join the shared element again', async () => {
      const sharedTarget = document.createElement('div')
      const nextTarget = document.createElement('div')
      const movingElement = ref<HTMLElement | undefined>(sharedTarget)
      const moving = runInScope(() => useLazyItemByMarginRef(movingElement))
      const remaining = runInScope(() => useLazyItemByMarginRef(ref(sharedTarget)))
      const observer = observers[0]!

      movingElement.value = nextTarget
      await nextTick()

      expect(observer.unobserve).not.toHaveBeenCalled()
      expect(observer.observe.mock.calls).toEqual([[sharedTarget], [nextTarget]])
      const sharedEntry = observer.emit(sharedTarget, true, 0.5)
      expect(remaining.lazyItemStatus.value).toBe(true)
      expect(moving.lazyItemStatus.value).toBe(false)
      const nextEntry = observer.emit(nextTarget, true, 0.25)
      expect(moving.lazyItem?.entry.value).toBe(nextEntry)
      expect(remaining.lazyItem?.entry.value).toBe(sharedEntry)
      observer.emit(sharedTarget, false, 0)

      movingElement.value = sharedTarget
      await nextTick()

      expect(observer.unobserve).toHaveBeenCalledExactlyOnceWith(nextTarget)
      expect(observer.observe).toHaveBeenCalledTimes(2)
      expect(moving.lazyItem?.status).toBe(moving.lazyItemStatus)
      expect(moving.lazyItemStatus.value).toBe(false)
      observer.emit(sharedTarget)
      expect(moving.lazyItemStatus.value).toBe(true)
      expect(remaining.lazyItemStatus.value).toBe(true)
    })

    it('should preserve the shared observation when one element ref is cleared and restored', async () => {
      const target = document.createElement('div')
      const element = ref<HTMLElement | undefined>(target)
      const first = runInScope(() => useLazyItemByMarginRef(element))
      const second = runInScope(() => useLazyItemByMarginRef(ref(target)))
      const observer = observers[0]!

      element.value = undefined
      await nextTick()

      expect(first.lazyItem).toBeUndefined()
      expect(observer.unobserve).not.toHaveBeenCalled()
      const entry = observer.emit(target)
      expect(second.lazyItemStatus.value).toBe(true)
      expect(first.lazyItemStatus.value).toBe(false)

      element.value = target
      await nextTick()

      expect(first.lazyItemStatus.value).toBe(true)
      expect(first.lazyItem?.entry.value).toBe(entry)
      expect(observer.observe).toHaveBeenCalledExactlyOnceWith(target)
    })

    it('should initialize a late registration from the latest intersection state', () => {
      const element = ref(document.createElement('div'))
      const first = runInScope(() => useLazyItemByMarginRef(element))
      const observer = observers[0]!
      const entry = observer.emit(element.value, true, 0.5)
      const second = runInScope(() => useLazyItemByMarginRef(element))

      expect(second.lazyItem?.status).toBe(second.lazyItemStatus)
      expect(second.lazyItemStatus.value).toBe(true)
      expect(second.lazyItem?.ratio.value).toBe(0.5)
      expect(second.lazyItem?.entry.value).toBe(entry)
      expect(observer.observe).toHaveBeenCalledExactlyOnceWith(element.value)
      observer.emit(element.value, false, 0)
      expect(first.lazyItemStatus.value).toBe(false)
      expect(second.lazyItemStatus.value).toBe(false)
    })
  })
})
