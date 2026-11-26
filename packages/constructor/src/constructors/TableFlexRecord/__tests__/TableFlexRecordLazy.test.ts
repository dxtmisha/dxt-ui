// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { TableFlexRecordLazy } from '../TableFlexRecordLazy'
import type { TableFlexRecordProps } from '../props'

type ObserverMockState = {
  observe: ReturnType<typeof vi.fn>
  unobserve: ReturnType<typeof vi.fn>
  disconnect: ReturnType<typeof vi.fn>
  trigger: (target: Element, isIntersecting: boolean, intersectionRatio?: number) => void
  restore: () => void
}

function installIntersectionObserverMock(): ObserverMockState {
  const original = globalThis.IntersectionObserver
  const observe = vi.fn()
  const unobserve = vi.fn()
  const disconnect = vi.fn()
  let callback: IntersectionObserverCallback | undefined

  class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | Document | null = null
    readonly rootMargin: string = '128px 0px'
    readonly scrollMargin: string = '0px'
    readonly thresholds: ReadonlyArray<number> = [0]

    constructor(cb: IntersectionObserverCallback) {
      callback = cb
    }

    observe(target: Element): void {
      observe(target)
    }

    unobserve(target: Element): void {
      unobserve(target)
    }

    disconnect(): void {
      disconnect()
    }

    takeRecords(): IntersectionObserverEntry[] {
      return []
    }
  }

  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  ServerStorage.reset()

  return {
    observe,
    unobserve,
    disconnect,
    trigger(target: Element, isIntersecting: boolean, intersectionRatio: number = isIntersecting ? 1 : 0) {
      callback?.(
        [
          {
            target,
            isIntersecting,
            intersectionRatio
          } as IntersectionObserverEntry
        ],
        {} as IntersectionObserver
      )
    },
    restore() {
      vi.unstubAllGlobals()
      if (original === undefined) {
        Reflect.deleteProperty(globalThis, 'IntersectionObserver')
      } else {
        Object.defineProperty(globalThis, 'IntersectionObserver', {
          value: original,
          configurable: true,
          writable: true
        })
      }
      ServerStorage.reset()
    }
  }
}

describe('TableFlexRecordLazy', () => {
  const naming = new DesignName('d1.tableFlexRecord')
  let observerMock: ObserverMockState | undefined

  afterEach(() => {
    observerMock?.restore()
    observerMock = undefined
    vi.restoreAllMocks()
  })

  describe('static is() and isLazy() predicate evaluation', () => {
    it('should return true only when lazy is truthy and both isHeader and isFoot are falsy', () => {
      expect(TableFlexRecordLazy.is()).toBe(false)
      expect(TableFlexRecordLazy.is({})).toBe(false)
      expect(TableFlexRecordLazy.is({ lazy: false })).toBe(false)
      expect(TableFlexRecordLazy.is({ lazy: true })).toBe(true)
      expect(TableFlexRecordLazy.is({ lazy: true, isHeader: false, isFoot: false })).toBe(true)
      expect(TableFlexRecordLazy.is({ lazy: true, isHeader: true })).toBe(false)
      expect(TableFlexRecordLazy.is({ lazy: true, isFoot: true })).toBe(false)
      expect(TableFlexRecordLazy.is({ lazy: false, isHeader: true })).toBe(false)
    })

    it('should keep constructor side-effect-free without registering observers before onMounted', () => {
      observerMock = installIntersectionObserverMock()
      const scope = effectScope()
      const element = ref<HTMLElement | undefined>(document.createElement('div'))
      const isMounted = ref(false)
      const props = reactive<TableFlexRecordProps>({ lazy: true })

      scope.run(() => {
        const lazy = new TableFlexRecordLazy(props, element, naming, isMounted)
        expect(observerMock?.observe).not.toHaveBeenCalled()
        expect(lazy.isLazy()).toBe(true)
        expect(lazy.is()).toBe(true)
        expect(lazy.classes).toEqual({
          'd1-tableFlexRecord--lazy': true,
          'd1-tableFlexRecord--lazy--visible': true,
          'd1-tableFlexRecord--lazy--hidden': false
        })
      })

      scope.stop()
    })
  })

  describe('Lifecycle orchestration, IntersectionObserver tracking, and resource cleanup', () => {
    it('should observe element on mount, toggle visibility on intersection changes, and unobserve on unmount', async () => {
      observerMock = installIntersectionObserverMock()
      const scope = effectScope()
      const node = document.createElement('div')
      const element = ref<HTMLElement | undefined>(node)
      const isMounted = ref(false)
      const props = reactive<TableFlexRecordProps>({ lazy: true })

      let lazy!: TableFlexRecordLazy

      scope.run(() => {
        lazy = new TableFlexRecordLazy(props, element, naming, isMounted)
        isMounted.value = true
        lazy.onMounted()
      })

      expect(observerMock.observe).toHaveBeenCalledTimes(1)
      expect(observerMock.observe).toHaveBeenCalledWith(node)
      expect(lazy.is()).toBe(false)
      expect(lazy.classes).toEqual({
        'd1-tableFlexRecord--lazy': true,
        'd1-tableFlexRecord--lazy--visible': false,
        'd1-tableFlexRecord--lazy--hidden': true
      })

      observerMock.trigger(node, true)
      await nextTick()
      expect(lazy.is()).toBe(true)
      expect(lazy.classes).toEqual({
        'd1-tableFlexRecord--lazy': true,
        'd1-tableFlexRecord--lazy--visible': true,
        'd1-tableFlexRecord--lazy--hidden': false
      })

      observerMock.trigger(node, false)
      await nextTick()
      expect(lazy.is()).toBe(false)
      expect(lazy.classes).toEqual({
        'd1-tableFlexRecord--lazy': true,
        'd1-tableFlexRecord--lazy--visible': false,
        'd1-tableFlexRecord--lazy--hidden': true
      })

      lazy.onUnmounted()
      expect(observerMock.unobserve).toHaveBeenCalledTimes(1)
      expect(observerMock.unobserve).toHaveBeenCalledWith(node)

      // Subsequent prop changes after unmount must not re-register observer
      props.lazy = false
      await nextTick()
      props.lazy = true
      await nextTick()
      expect(observerMock.observe).toHaveBeenCalledTimes(1)

      scope.stop()
    })

    it('should reactively unobserve when lazy becomes false or isHeader becomes true, and re-observe when re-enabled', async () => {
      observerMock = installIntersectionObserverMock()
      const scope = effectScope()
      const node = document.createElement('div')
      const element = ref<HTMLElement | undefined>(node)
      const isMounted = ref(true)
      const props = reactive<TableFlexRecordProps>({
        lazy: true,
        defaultHeight: 48
      })

      let lazy!: TableFlexRecordLazy

      scope.run(() => {
        lazy = new TableFlexRecordLazy(props, element, naming, isMounted)
        lazy.onMounted()
      })

      expect(observerMock.observe).toHaveBeenCalledTimes(1)
      expect(lazy.styles).toEqual({ '--d1-tableFlexRecord-sys-minHeight': '48px' })

      props.isHeader = true
      await nextTick()
      expect(observerMock.unobserve).toHaveBeenCalledTimes(1)
      expect(lazy.isLazy()).toBe(false)
      expect(lazy.is()).toBe(true)
      expect(lazy.classes).toEqual({
        'd1-tableFlexRecord--lazy': false,
        'd1-tableFlexRecord--lazy--visible': false,
        'd1-tableFlexRecord--lazy--hidden': false
      })
      expect(lazy.styles).toEqual({})

      props.isHeader = false
      await nextTick()
      expect(observerMock.observe).toHaveBeenCalledTimes(2)
      expect(lazy.isLazy()).toBe(true)
      expect(lazy.styles).toEqual({ '--d1-tableFlexRecord-sys-minHeight': '48px' })

      props.lazy = false
      await nextTick()
      expect(observerMock.unobserve).toHaveBeenCalledTimes(2)
      expect(lazy.is()).toBe(true)
      expect(lazy.styles).toEqual({})

      props.lazy = true
      await nextTick()
      expect(observerMock.observe).toHaveBeenCalledTimes(3)

      props.isFoot = true
      await nextTick()
      expect(observerMock.unobserve).toHaveBeenCalledTimes(3)
      expect(lazy.isLazy()).toBe(false)
      expect(lazy.is()).toBe(true)
      expect(lazy.styles).toEqual({})

      lazy.onUnmounted()
      scope.stop()
    })

    it('should handle delayed element ref attachment and element replacement cleanly', async () => {
      observerMock = installIntersectionObserverMock()
      const scope = effectScope()
      const element = ref<HTMLElement | undefined>(undefined)
      const isMounted = ref(true)
      const props = reactive<TableFlexRecordProps>({ lazy: true })

      let lazy!: TableFlexRecordLazy

      scope.run(() => {
        lazy = new TableFlexRecordLazy(props, element, naming, isMounted)
        lazy.onMounted()
      })

      expect(observerMock.observe).not.toHaveBeenCalled()
      expect(lazy.is()).toBe(false)

      const firstNode = document.createElement('div')
      element.value = firstNode
      await nextTick()
      expect(observerMock.observe).toHaveBeenCalledTimes(1)
      expect(observerMock.observe).toHaveBeenCalledWith(firstNode)

      const secondNode = document.createElement('div')
      element.value = secondNode
      await nextTick()
      expect(observerMock.unobserve).toHaveBeenCalledWith(firstNode)
      expect(observerMock.observe).toHaveBeenCalledWith(secondNode)

      element.value = undefined
      await nextTick()
      expect(observerMock.unobserve).toHaveBeenCalledWith(secondNode)
      expect(lazy.is()).toBe(false)

      lazy.onUnmounted()
      scope.stop()
    })

    it('should fall back to visible=true when IntersectionObserver is unavailable in the environment', () => {
      const hadObserver = 'IntersectionObserver' in globalThis
      const original = globalThis.IntersectionObserver
      Reflect.deleteProperty(globalThis, 'IntersectionObserver')
      ServerStorage.reset()

      const scope = effectScope()
      const element = ref<HTMLElement | undefined>(document.createElement('div'))
      const isMounted = ref(true)
      const props = reactive<TableFlexRecordProps>({ lazy: true })

      let lazy!: TableFlexRecordLazy

      try {
        scope.run(() => {
          lazy = new TableFlexRecordLazy(props, element, naming, isMounted)
          lazy.onMounted()
        })

        expect(lazy.is()).toBe(true)
        expect(lazy.classes['d1-tableFlexRecord--lazy--visible']).toBe(true)
        expect(lazy.classes['d1-tableFlexRecord--lazy--hidden']).toBe(false)

        lazy.onUnmounted()
      } finally {
        scope.stop()

        if (hadObserver) {
          Object.defineProperty(globalThis, 'IntersectionObserver', {
            value: original,
            configurable: true,
            writable: true
          })
        }
        ServerStorage.reset()
      }
    })

    it('should not leak watchers if onMounted is called repeatedly before onUnmounted', async () => {
      observerMock = installIntersectionObserverMock()
      const scope = effectScope()
      const node = document.createElement('div')
      const element = ref<HTMLElement | undefined>(node)
      const isMounted = ref(true)
      const props = reactive<TableFlexRecordProps>({ lazy: true })

      let lazy!: TableFlexRecordLazy

      scope.run(() => {
        lazy = new TableFlexRecordLazy(props, element, naming, isMounted)
        lazy.onMounted()
        lazy.onMounted()
      })

      expect(observerMock.observe).toHaveBeenCalledTimes(1)

      lazy.onUnmounted()
      expect(observerMock.unobserve).toHaveBeenCalledTimes(1)

      scope.stop()
    })
  })

  describe('defaultHeight style normalization and boundary values', () => {
    it.each([
      { defaultHeight: undefined, expected: {} },
      { defaultHeight: 0, expected: { '--d1-tableFlexRecord-sys-minHeight': '0px' } },
      { defaultHeight: '0', expected: { '--d1-tableFlexRecord-sys-minHeight': '0px' } },
      { defaultHeight: 48, expected: { '--d1-tableFlexRecord-sys-minHeight': '48px' } },
      { defaultHeight: ' 48 ', expected: { '--d1-tableFlexRecord-sys-minHeight': '48px' } },
      { defaultHeight: '+36', expected: { '--d1-tableFlexRecord-sys-minHeight': '36px' } },
      { defaultHeight: '3.5rem', expected: { '--d1-tableFlexRecord-sys-minHeight': '3.5rem' } },
      { defaultHeight: 'calc(2rem + 8px)', expected: { '--d1-tableFlexRecord-sys-minHeight': 'calc(2rem + 8px)' } },
      { defaultHeight: '', expected: {} },
      { defaultHeight: '   \t\n ', expected: {} },
      { defaultHeight: -10, expected: {} },
      { defaultHeight: '-10', expected: {} },
      { defaultHeight: Number.NaN, expected: {} },
      { defaultHeight: Number.POSITIVE_INFINITY, expected: {} },
      { defaultHeight: Number.NEGATIVE_INFINITY, expected: {} }
    ])('should normalize defaultHeight=$defaultHeight to $expected when lazy is active', ({ defaultHeight, expected }) => {
      const scope = effectScope()
      const element = ref<HTMLElement | undefined>()
      const isMounted = ref(false)
      const props = reactive<TableFlexRecordProps>({
        lazy: true,
        defaultHeight
      })

      scope.run(() => {
        const lazy = new TableFlexRecordLazy(props, element, naming, isMounted)
        expect(lazy.styles).toEqual(expected)
      })

      scope.stop()
    })
  })
})
