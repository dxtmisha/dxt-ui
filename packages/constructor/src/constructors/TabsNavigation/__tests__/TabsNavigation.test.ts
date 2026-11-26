// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  nextTick,
  reactive,
  type App
} from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { HorizontalScrollDesign, type HorizontalScrollProps } from '../../HorizontalScroll'
import { TabItemDesign, type TabItemPropsBasic, defaultsTabItem } from '../../TabItem'
import { defaultsTabsNavigation, type TabsNavigationProps } from '../props'
import { TabsNavigationDesign } from '../TabsNavigationDesign'
import type {
  TabsNavigationClasses,
  TabsNavigationComponents,
  TabsNavigationEmits,
  TabsNavigationExpose
} from '../types'

const RealHorizontalScroll = defineComponent({
  name: 'RealHorizontalScroll',
  inheritAttrs: false,
  props: {
    bleed: { type: Boolean, default: undefined },
    align: { type: String, default: undefined },
    tag: { type: String, default: undefined }
  },
  setup(componentProps, { expose }) {
    const design = new HorizontalScrollDesign(
      'd1.horizontalScroll',
      componentProps as Readonly<HorizontalScrollProps>,
      {
        classes: computed<ConstrClasses>(() => ({
          main: { 'd1-horizontalScroll': true }
        }))
      }
    )

    expose(design.expose())
    return design.render()
  }
})

const RealTabItem = defineComponent({
  name: 'RealTabItem',
  inheritAttrs: false,
  props: {
    label: { type: [String, Number], default: undefined },
    value: { type: [String, Number, Boolean], default: undefined },
    index: { type: [String, Number, Boolean], default: undefined },
    tag: { type: String, default: undefined },
    selected: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    focus: { type: Boolean, default: false },
    role: { type: String, default: defaultsTabItem.role }
  },
  emits: ['click', 'clickLite'],
  setup(componentProps, { emit, expose }) {
    const design = new TabItemDesign(
      'd1.tabItem',
      componentProps as Readonly<TabItemPropsBasic>,
      {
        classes: computed<ConstrClasses>(() => ({
          main: {
            'd1-tabItem': true,
            'd1-tabItem--selected': Boolean(componentProps.selected),
            'd1-tabItem--focus': Boolean(componentProps.focus),
            'd1-tabItem--disabled': Boolean(componentProps.disabled)
          }
        })),
        emits: emit as never
      }
    )

    expose(design.expose())
    return design.render()
  }
})

describe('TabsNavigation (integration)', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []
  let frameQueue: Map<number, FrameRequestCallback>
  let nextFrameId: number
  let warnSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    vi.useFakeTimers()
    frameQueue = new Map()
    nextFrameId = 1

    vi.stubGlobal('requestAnimationFrame', vi.fn((callback: FrameRequestCallback) => {
      const id = nextFrameId++
      frameQueue.set(id, callback)
      return id
    }))

    vi.stubGlobal('cancelAnimationFrame', vi.fn((id: number) => {
      frameQueue.delete(id)
    }))

    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
  })

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }

    expect(warnSpy).not.toHaveBeenCalled()

    document.dir = ''
    document.documentElement.dir = ''
    vi.unstubAllGlobals()
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  const flushFrames = () => {
    const callbacks = Array.from(frameQueue.entries())
    frameQueue.clear()
    callbacks.forEach(([, callback]) => callback(0))
  }

  const mountTabsNavigation = async (
    initialProps: TabsNavigationProps = {},
    options: {
      attrs?: Record<string, unknown>
      slots?: Record<string, () => unknown>
    } = {}
  ) => {
    const container = document.createElement('div')
    document.body.appendChild(container)

    const props = reactive<TabsNavigationProps>({
      ...defaultsTabsNavigation,
      ...initialProps
    })
    const emitted: Array<{ event: keyof TabsNavigationEmits, args: unknown[] }> = []
    let exposed!: TabsNavigationExpose

    const Host = defineComponent({
      inheritAttrs: false,
      setup() {
        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-tabsNavigation': true,
            'd1-tabsNavigation--divider': Boolean(props.divider)
          }
        }))

        const design = new TabsNavigationDesign<
          TabsNavigationComponents,
          TabsNavigationExpose,
          TabsNavigationClasses,
          TabsNavigationProps
        >(
          'd1.tabsNavigation',
          props,
          {
            classes: classesToken,
            components: {
              horizontalScroll: RealHorizontalScroll,
              tabItem: RealTabItem
            },
            emits: ((event: keyof TabsNavigationEmits, ...args: unknown[]) => {
              emitted.push({ event, args })
            }) as never
          }
        )

        exposed = design.expose()
        return design.render()
      }
    })

    const app = createApp({
      render: () => h(Host, options.attrs ?? {}, options.slots ?? {})
    })
    app.mount(container)
    mountedApps.push({ app, container })
    await nextTick()
    flushFrames()

    return {
      app,
      container,
      props,
      emitted,
      exposed
    }
  }

  it('should render full tablist hierarchy with RealHorizontalScroll and RealTabItem, update selection on click, and animate indicator', async () => {
    const { container, emitted, exposed } = await mountTabsNavigation({
      selected: 'overview',
      list: [
        { value: 'overview', label: 'Overview' },
        { value: 'billing', label: 'Billing' },
        { value: 'security', label: 'Security' }
      ]
    })

    const tablist = container.querySelector('[role="tablist"]') as HTMLElement
    expect(tablist).not.toBeNull()
    expect(tablist.getAttribute('aria-orientation')).toBe('horizontal')
    expect(tablist.getAttribute('tabindex')).toBe('0')

    const tabs = Array.from(container.querySelectorAll('[role="tab"]')) as HTMLElement[]
    expect(tabs).toHaveLength(3)
    expect(tabs[0]?.getAttribute('aria-selected')).toBe('true')
    expect(tabs[1]?.getAttribute('aria-selected')).toBe('false')
    expect(tabs[0]?.classList.contains('d1-horizontalScroll__item--selected')).toBe(true)

    const idsMap = exposed.ids()
    expect(tabs[0]?.getAttribute('id')).toBe(idsMap.overview)
    expect(tabs[1]?.getAttribute('id')).toBe(idsMap.billing)

    // Mock bounding rects for indicator calculation
    tabs[0]!.getBoundingClientRect = () => ({ left: 10, width: 100 } as DOMRect)
    tabs[1]!.getBoundingClientRect = () => ({ left: 130, width: 90 } as DOMRect)

    // Click second tab
    tabs[1]!.click()
    await nextTick()
    await nextTick()

    expect(emitted.filter(entry => entry.event === 'update:selected').map(entry => entry.args)).toEqual([['billing']])
    expect(emitted.filter(entry => entry.event === 'update:modelSelected').map(entry => entry.args)).toEqual([['billing']])
    expect(emitted.some(entry => entry.event === 'click')).toBe(true)
    expect(emitted.some(entry => entry.event === 'clickLite')).toBe(true)

    // Indicator CSS custom properties set before cleanup
    expect(tabs[1]!.style.getPropertyValue('--d1-item-sys-left')).toBe('-120px + var(--d1-item-gap, 0px)')
    expect(tabs[1]!.style.getPropertyValue('--d1-item-sys-width')).toBe('100px')

    // Flush rAF to commit actualItem
    flushFrames()
    await nextTick()

    expect(tabs[0]?.getAttribute('aria-selected')).toBe('false')
    expect(tabs[1]?.getAttribute('aria-selected')).toBe('true')
    expect(tabs[1]?.classList.contains('d1-horizontalScroll__item--selected')).toBe(true)

    // Indicator styles removed cleanly after 384ms
    vi.advanceTimersByTime(384)
    expect(tabs[1]!.style.getPropertyValue('--d1-item-sys-left')).toBe('')
    expect(tabs[1]!.style.getPropertyValue('--d1-item-sys-width')).toBe('')
  })

  it('should support keyboard navigation (ArrowRight, ArrowLeft, Home, End, Enter, Space, RTL, IME) and reactive props', async () => {
    const { container, props, emitted } = await mountTabsNavigation({
      list: [
        { value: 'first', label: 'First' },
        { value: 'second', label: 'Second' },
        { value: 'third', label: 'Third' }
      ]
    })

    const tablist = container.querySelector('[role="tablist"]') as HTMLElement
    const tabs = () => Array.from(container.querySelectorAll('[role="tab"]')) as HTMLElement[]

    // Focus tablist -> focus initializes on selected ('first')
    tablist.dispatchEvent(new FocusEvent('focus'))
    await nextTick()
    expect(tabs()[0]?.classList.contains('d1-tabItem--focus')).toBe(true)

    // ArrowRight -> 'second'
    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight', cancelable: true }))
    await nextTick()
    expect(tabs()[1]?.classList.contains('d1-tabItem--focus')).toBe(true)

    // End -> 'third'
    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'End', cancelable: true }))
    await nextTick()
    expect(tabs()[2]?.classList.contains('d1-tabItem--focus')).toBe(true)

    // IME composition must not select
    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'Enter', isComposing: true }))
    await nextTick()
    expect(emitted).toHaveLength(0)

    // Enter selects 'third'
    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'Enter', cancelable: true }))
    await nextTick()
    await nextTick()
    flushFrames()
    await nextTick()

    expect(tabs()[2]?.getAttribute('aria-selected')).toBe('true')
    expect(emitted.some(entry => entry.event === 'update:selected' && entry.args[0] === 'third')).toBe(true)

    // Home -> 'first' and Space selects 'first'
    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'Home', cancelable: true }))
    await nextTick()
    expect(tabs()[0]?.classList.contains('d1-tabItem--focus')).toBe(true)

    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space', cancelable: true }))
    await nextTick()
    await nextTick()
    flushFrames()
    await nextTick()
    expect(tabs()[0]?.getAttribute('aria-selected')).toBe('true')

    // RTL reversal: ArrowLeft moves to 'second'
    tablist.setAttribute('dir', 'rtl')
    document.body.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft', cancelable: true }))
    await nextTick()
    expect(tabs()[1]?.classList.contains('d1-tabItem--focus')).toBe(true)

    // Blur resets focus state
    tablist.dispatchEvent(new FocusEvent('blur'))
    await nextTick()
    expect(tabs()[1]?.classList.contains('d1-tabItem--focus')).toBe(false)

    // External prop reactivity
    props.selected = 'third'
    await nextTick()
    await nextTick()
    flushFrames()
    await nextTick()
    expect(tabs()[2]?.getAttribute('aria-selected')).toBe('true')
  })

  it('should support numeric 0 values, custom keyValue/keyLabel, Unicode labels, and reactive divider size tracking', async () => {
    const observe = vi.fn()
    const disconnect = vi.fn()

    class MockResizeObserver {
      observe = observe
      disconnect = disconnect
      unobserve = vi.fn()
    }
    vi.stubGlobal('ResizeObserver', MockResizeObserver)

    const { container, props } = await mountTabsNavigation({
      divider: false,
      selected: 0,
      keyValue: 'code',
      keyLabel: 'title',
      list: [
        { code: 0, title: 'Tổng quan 🚀' },
        { code: 1, title: 'Настройки' }
      ] as unknown as TabsNavigationProps['list']
    })

    const tablist = container.querySelector('[role="tablist"]') as HTMLElement
    const tabs = Array.from(container.querySelectorAll('[role="tab"]')) as HTMLElement[]

    expect(tabs[0]?.getAttribute('data-value')).toBe('0')
    expect(tabs[0]?.getAttribute('aria-selected')).toBe('true')
    expect(tabs[0]?.textContent).toContain('Tổng quan 🚀')
    expect(tabs[1]?.textContent).toContain('Настройки')

    // divider is false -> TabsNavigationSize was not activated
    expect(observe).not.toHaveBeenCalled()

    // Enabling divider activates TabsNavigationSize reactively
    Object.defineProperty(tablist, 'scrollWidth', { value: 480, configurable: true })
    props.divider = true
    await nextTick()
    await nextTick()

    expect(observe).toHaveBeenCalledWith(tablist)
    vi.advanceTimersByTime(64)
    expect(tablist.style.getPropertyValue('--sys-scroll-width')).toBe('480px')
  })

  it('should clean up body keydown listeners and ResizeObserver cleanly when unmounted while focused', async () => {
    const disconnect = vi.fn()
    class MockResizeObserver {
      observe = vi.fn()
      disconnect = disconnect
      unobserve = vi.fn()
    }
    vi.stubGlobal('ResizeObserver', MockResizeObserver)
    const removeSpy = vi.spyOn(document.body, 'removeEventListener')

    const { app, container } = await mountTabsNavigation({
      divider: true,
      list: [
        { value: 'a', label: 'A' },
        { value: 'b', label: 'B' }
      ]
    })

    const tablist = container.querySelector('[role="tablist"]') as HTMLElement
    tablist.dispatchEvent(new FocusEvent('focus'))

    app.unmount()
    container.remove()
    mountedApps.pop()

    expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function), undefined)
    expect(disconnect).toHaveBeenCalledTimes(1)
  })
})
