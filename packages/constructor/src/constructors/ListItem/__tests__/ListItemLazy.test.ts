// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ListItemLazy } from '../ListItemLazy'
import { ListItemLazyHeight } from '../ListItemLazyHeight'
import { ListItemDesign } from '../ListItemDesign'
import type { ListItemProps } from '../props'
import type { ListItemClasses, ListItemComponents, ListItemExpose } from '../types'

type ObserverCallback = (entries: IntersectionObserverEntry[]) => void

const cleanups: Array<() => void> = []

/**
 * Installs a controllable IntersectionObserver mock for lazy visibility tests.
 *
 * Устанавливает управляемый мок IntersectionObserver для тестов ленивой видимости.
 * @returns observer mock helpers / вспомогательные методы мока наблюдателя
 */
const installIntersectionObserverMock = () => {
  const callbacks: Array<{ callback: ObserverCallback, options?: IntersectionObserverInit }> = []
  const observe = vi.fn()
  const unobserve = vi.fn()
  const disconnect = vi.fn()

  class MockIntersectionObserver {
    constructor(callback: ObserverCallback, options?: IntersectionObserverInit) {
      callbacks.push({ callback, options })
    }

    observe = observe
    unobserve = unobserve
    disconnect = disconnect
    takeRecords = () => []
    root = null
    rootMargin = ''
    thresholds = []
  }

  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

  return {
    callbacks,
    observe,
    unobserve,
    disconnect,
    trigger: (target: Element, isIntersecting: boolean, height: number = 0) => {
      callbacks.forEach(({ callback }) => {
        callback([{
          target,
          isIntersecting,
          intersectionRatio: isIntersecting ? 1 : 0,
          boundingClientRect: { height } as DOMRectReadOnly
        } as IntersectionObserverEntry])
      })
    }
  }
}

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

describe('ListItemLazy', () => {
  const naming = new DesignName('d1.listItem')

  it('tracks IntersectionObserver visibility, custom rootMargin, dynamic lazy toggle, and cleans up on unmount', async () => {
    const ioMock = installIntersectionObserverMock()
    const props = reactive<ListItemProps>({
      lazy: true,
      lazyMargin: '256px 0px',
      label: 'Lazy Row'
    })
    const element = ref<HTMLElement | undefined>()
    const lazy: ListItemLazy = new ListItemLazy(props, element, naming, () => lazyHeight)
    const lazyHeight: ListItemLazyHeight = new ListItemLazyHeight(props)

    expect(ListItemLazy.is(props)).toBe(true)
    expect(ListItemLazyHeight.is(props)).toBe(true)
    expect(lazy.is()).toBe(false)
    expect(lazy.classes).toEqual({
      'd1-listItem--lazy': true,
      'd1-listItem--lazy--visible': false,
      'd1-listItem--lazy--hidden': true
    })

    element.value = document.createElement('div')
    lazy.onMounted()
    await nextTick()

    expect(ioMock.observe).toHaveBeenCalledWith(element.value)
    expect(ioMock.callbacks.some(entry => entry.options?.rootMargin === '256px 0px')).toBe(true)
    expect(lazy.is()).toBe(false)

    ioMock.trigger(element.value!, true, 84)
    await nextTick()

    expect(lazy.is()).toBe(true)
    expect(lazyHeight.styles).toEqual({})
    expect(lazy.classes).toEqual({
      'd1-listItem--lazy': true,
      'd1-listItem--lazy--visible': true,
      'd1-listItem--lazy--hidden': false
    })

    ioMock.trigger(element.value!, false, 84)
    await nextTick()
    expect(lazy.is()).toBe(false)
    expect(lazyHeight.styles).toEqual({
      containIntrinsicHeight: '84px'
    })

    // Returns to view (resets cached height), then leaves with height 0 (does not cache 0px)
    ioMock.trigger(element.value!, true, 84)
    await nextTick()
    expect(lazyHeight.styles).toEqual({})

    ioMock.trigger(element.value!, false, 0)
    await nextTick()
    expect(lazyHeight.styles).toEqual({})

    props.lazy = false
    await nextTick()

    expect(ListItemLazy.is(props)).toBe(false)
    expect(ListItemLazyHeight.is(props)).toBe(false)
    expect(lazy.is()).toBe(true)
    expect(lazyHeight.styles).toEqual({})
    expect(ioMock.unobserve).toHaveBeenCalledWith(element.value)

    lazy.onUnmounted()
  })

  it('defers rendering ListItemDesign children until visible and unobserves on unmount', async () => {
    const ioMock = installIntersectionObserverMock()
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const props = reactive<ListItemProps>({
      label: 'Deferred Label',
      value: 'deferred-1',
      icon: 'star',
      lazy: true
    })

    const MockIcon = defineComponent({
      name: 'MockIcon',
      props: { icon: [String, Object] },
      setup(iconProps) {
        return () => h('i', { class: 'mock-icon' }, String(iconProps.icon ?? ''))
      }
    })

    const TestItem = defineComponent({
      setup() {
        const design = new ListItemDesign<ListItemComponents, ListItemExpose, ListItemClasses, ListItemProps>(
          'd1.listItem',
          props,
          {
            components: { icon: MockIcon },
            classes: computed(() => ({
              main: { 'd1-listItem': true }
            }))
          } as unknown as ConstructorParameters<typeof ListItemDesign>[2]
        )

        return design.render()
      }
    })

    const app = createApp(TestItem)
    app.mount(host)
    await nextTick()

    const root = host.querySelector<HTMLElement>('.d1-listItem')!
    expect(root).not.toBeNull()
    expect(root.classList.contains('d1-listItem--lazy')).toBe(true)
    expect(root.classList.contains('d1-listItem--lazy--hidden')).toBe(true)
    expect(root.querySelector('.d1-listItem__label')).toBeNull()
    expect(root.querySelector('.mock-icon')).toBeNull()
    expect(ioMock.observe).toHaveBeenCalledWith(root)

    ioMock.trigger(root, true, 72)
    await nextTick()

    expect(root.classList.contains('d1-listItem--lazy--visible')).toBe(true)
    expect(root.querySelector('.d1-listItem__label')?.textContent).toBe('Deferred Label')
    expect(root.querySelector('.mock-icon')?.textContent).toBe('star')
    expect(root.style.minHeight).toBe('')
    expect(root.style.containIntrinsicHeight).toBe('')

    ioMock.trigger(root, false, 72)
    await nextTick()

    expect(root.classList.contains('d1-listItem--lazy--hidden')).toBe(true)
    expect(root.querySelector('.d1-listItem__label')).toBeNull()
    expect(root.style.minHeight).toBe('')
    expect(root.style.containIntrinsicHeight).toBe('72px')

    app.unmount()
    expect(ioMock.unobserve).toHaveBeenCalledWith(root)
  })

  it('keeps already-rendered content visible when lazy is enabled late until observer reports off-screen', async () => {
    const ioMock = installIntersectionObserverMock()
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const props = reactive<ListItemProps>({
      label: 'Pre-rendered Label',
      value: 'pre-1',
      lazy: false,
      lazyMargin: '320px 0px'
    })

    const TestItem = defineComponent({
      setup() {
        const design = new ListItemDesign<ListItemComponents, ListItemExpose, ListItemClasses, ListItemProps>(
          'd1.listItem',
          props,
          {
            classes: computed(() => ({
              main: { 'd1-listItem': true }
            }))
          } as unknown as ConstructorParameters<typeof ListItemDesign>[2]
        )

        return design.render()
      }
    })

    const app = createApp(TestItem)
    app.mount(host)
    await nextTick()

    const root = host.querySelector<HTMLElement>('.d1-listItem')!
    expect(root.querySelector('.d1-listItem__label')?.textContent).toBe('Pre-rendered Label')

    // Enable lazy after the element is already mounted & rendered
    props.lazy = true
    await nextTick()

    // Must NOT flicker/hide before IntersectionObserver emits its first entry
    expect(root.classList.contains('d1-listItem--lazy')).toBe(true)
    expect(root.classList.contains('d1-listItem--lazy--visible')).toBe(true)
    expect(root.querySelector('.d1-listItem__label')?.textContent).toBe('Pre-rendered Label')
    expect(ioMock.observe).toHaveBeenCalledWith(root)

    // When observer reports it is off-screen, preserves its measured height before hiding
    ioMock.trigger(root, false, 68)
    await nextTick()

    expect(root.classList.contains('d1-listItem--lazy--hidden')).toBe(true)
    expect(root.querySelector('.d1-listItem__label')).toBeNull()
    expect(root.style.minHeight).toBe('')
    expect(root.style.containIntrinsicHeight).toBe('68px')

    app.unmount()
    expect(ioMock.unobserve).toHaveBeenCalledWith(root)
  })

  it('skips caching height and inline styles when lazyCacheHeight is false', async () => {
    const ioMock = installIntersectionObserverMock()
    const props = reactive<ListItemProps>({
      lazy: true,
      lazyMargin: '192px 0px',
      lazyCacheHeight: false,
      label: 'No Cached Height Row'
    })
    const element = ref<HTMLElement | undefined>()
    const lazy: ListItemLazy = new ListItemLazy(props, element, naming, () => lazyHeight)
    const lazyHeight: ListItemLazyHeight = new ListItemLazyHeight(props)

    expect(ListItemLazyHeight.is(props)).toBe(false)

    element.value = document.createElement('div')
    lazy.onMounted()
    await nextTick()

    ioMock.trigger(element.value!, true, 96)
    await nextTick()
    expect(lazy.is()).toBe(true)
    expect(lazyHeight.styles).toEqual({})

    ioMock.trigger(element.value!, false, 96)
    await nextTick()
    expect(lazy.is()).toBe(false)
    expect(lazyHeight.styles).toEqual({})

    lazy.onUnmounted()
  })

  it('prevents duplicate watchers on repeated onMounted and stops reacting after onUnmounted', async () => {
    const ioMock = installIntersectionObserverMock()
    const props = reactive<ListItemProps>({
      lazy: true,
      lazyMargin: '512px 0px',
      label: 'Idempotent Lazy Row'
    })
    const element = ref<HTMLElement | undefined>(document.createElement('div'))
    const lazy = new ListItemLazy(props, element, naming)

    lazy.onMounted()
    await nextTick()
    expect(ioMock.observe).toHaveBeenCalledTimes(1)

    lazy.onMounted()
    await nextTick()
    expect(ioMock.unobserve).toHaveBeenCalledTimes(1)
    expect(ioMock.observe).toHaveBeenCalledTimes(2)

    lazy.onUnmounted()
    expect(ioMock.unobserve).toHaveBeenCalledTimes(2)

    props.lazyMargin = '640px 0px'
    await nextTick()
    expect(ioMock.observe).toHaveBeenCalledTimes(2)
  })
})
