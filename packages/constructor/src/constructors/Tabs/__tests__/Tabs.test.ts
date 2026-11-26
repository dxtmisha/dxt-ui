// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  nextTick,
  reactive,
  type App,
  type VNode
} from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { HorizontalScrollDesign, type HorizontalScrollProps } from '../../HorizontalScroll'
import {
  defaultsMotionAxis,
  MotionAxisDesign,
  type MotionAxisEmits,
  type MotionAxisProps
} from '../../MotionAxis'
import { defaultsTabItem, TabItemDesign, type TabItemPropsBasic } from '../../TabItem'
import {
  defaultsTabsNavigation,
  TabsNavigationDesign,
  type TabsNavigationEmits,
  type TabsNavigationProps
} from '../../TabsNavigation'
import { defaultsTabs, type TabsProps } from '../props'
import { TabsDesign } from '../TabsDesign'
import type {
  TabsClasses,
  TabsComponents,
  TabsEmits,
  TabsExpose
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

const RealTabsNavigation = defineComponent({
  name: 'RealTabsNavigation',
  inheritAttrs: false,
  props: {
    selected: { type: [String, Number, Boolean, Array], default: undefined },
    modelSelected: { type: [String, Number, Boolean, Array], default: undefined },
    list: { type: [Array, Object], default: undefined },
    tag: { type: String, default: undefined },
    keyLabel: { type: String, default: undefined },
    keyValue: { type: String, default: undefined },
    itemAttrs: { type: Object, default: undefined },
    divider: { type: Boolean, default: false },
    horizontalScrollBleed: { type: Boolean, default: defaultsTabsNavigation.horizontalScrollBleed },
    horizontalScrollAlign: { type: String, default: defaultsTabsNavigation.horizontalScrollAlign }
  },
  emits: ['click', 'clickLite', 'update:selected', 'update:modelSelected'],
  setup(componentProps, { emit, expose }) {
    const design = new TabsNavigationDesign(
      'd1.tabsNavigation',
      componentProps as Readonly<TabsNavigationProps>,
      {
        classes: computed<ConstrClasses>(() => ({
          main: {
            'd1-tabsNavigation': true,
            'd1-tabsNavigation--divider': Boolean(componentProps.divider)
          }
        })),
        components: {
          horizontalScroll: RealHorizontalScroll,
          tabItem: RealTabItem
        },
        emits: emit as unknown as (event: keyof TabsNavigationEmits, ...args: unknown[]) => void
      }
    )

    expose(design.expose())
    return design.render()
  }
})

const RealMotionAxis = defineComponent({
  name: 'RealMotionAxis',
  inheritAttrs: false,
  props: {
    selected: { type: String, default: undefined },
    modelSelected: { type: String, default: undefined },
    axis: { type: String, default: defaultsMotionAxis.axis },
    direction: { type: String, default: defaultsMotionAxis.direction },
    animationHeight: { type: Boolean, default: false },
    inDom: { type: Boolean, default: false },
    inDomSlide: { type: Array, default: undefined }
  },
  emits: ['motionAxis', 'start', 'end', 'update:selected', 'update:modelSelected'],
  setup(componentProps, { emit, expose }) {
    const design = new MotionAxisDesign(
      'd1.motionAxis',
      componentProps as Readonly<MotionAxisProps>,
      {
        classes: computed<ConstrClasses>(() => ({
          main: { 'd1-motionAxis': true }
        })),
        emits: emit as unknown as (event: keyof MotionAxisEmits, ...args: unknown[]) => void
      }
    )

    expose(design.expose())
    return design.render()
  }
})

describe('Tabs (integration)', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []
  let frameQueue: Map<number, FrameRequestCallback>
  let nextFrameId: number
  let warnSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    vi.useFakeTimers()
    frameQueue = new Map()
    nextFrameId = 1

    vi.stubGlobal('requestAnimationFrame', vi.fn((callback: FrameRequestCallback) => {
      const frameId = nextFrameId++
      frameQueue.set(frameId, callback)
      return frameId
    }))

    vi.stubGlobal('cancelAnimationFrame', vi.fn((frameId: number) => {
      frameQueue.delete(frameId)
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
    vi.unstubAllGlobals()
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  const flushFrames = async () => {
    await nextTick()
    const callbacks = Array.from(frameQueue.entries())
    frameQueue.clear()
    callbacks.forEach(([, callback]) => callback(0))
    await nextTick()
  }

  const mountTabs = async (
    initialProps: TabsProps,
    slots: Record<string, () => VNode[]> = {}
  ) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const props = reactive<TabsProps>({
      ...defaultsTabs,
      ...initialProps
    })
    const emitted: Array<{ event: keyof TabsEmits, args: unknown[] }> = []

    const Host = defineComponent({
      inheritAttrs: false,
      setup() {
        const design = new TabsDesign<
          TabsComponents,
          TabsExpose,
          TabsClasses,
          TabsProps
        >(
          'd1.tabs',
          props,
          {
            classes: computed<ConstrClasses>(() => ({
              main: { 'd1-tabs': true }
            })),
            components: {
              tabsNavigation: RealTabsNavigation,
              motionAxis: RealMotionAxis
            },
            emits: ((event: keyof TabsEmits, ...args: unknown[]) => {
              emitted.push({ event, args })
            }) as never
          }
        )

        return design.render()
      }
    })

    const app = createApp({
      render: () => h(Host, {}, slots)
    })
    app.mount(container)
    mountedApps.push({ app, container })
    await nextTick()
    await nextTick()

    return {
      app,
      container,
      props,
      emitted
    }
  }

  it('should render full Tabs hierarchy with accessible tablist, tabs, and aria-labelledby tabpanel linkage', async () => {
    const { container } = await mountTabs(
      {
        tabs: [
          { value: 'home', label: 'Home' },
          { value: 'search', label: 'Search' },
          { value: 'settings', label: 'Settings', disabled: true }
        ]
      },
      {
        home: () => [h('p', 'Home panel content')],
        search: () => [h('p', 'Search panel content')],
        settings: () => [h('p', 'Settings panel content')]
      }
    )

    const tablist = container.querySelector('[role="tablist"]')
    const tabs = container.querySelectorAll('[role="tab"]')
    const activePanel = container.querySelector('[role="tabpanel"]')

    expect(tablist).not.toBeNull()
    expect(tabs).toHaveLength(3)
    expect(tabs[0]?.getAttribute('aria-selected')).toBe('true')
    expect(tabs[1]?.getAttribute('aria-selected')).toBe('false')
    expect(tabs[2]?.getAttribute('aria-disabled')).toBe('true')

    expect(activePanel).not.toBeNull()
    expect(activePanel?.classList.contains('d1-tabs__slide')).toBe(true)
    expect(activePanel?.textContent).toBe('Home panel content')

    // Tabpanel aria-labelledby must match the active tab's DOM id
    const homeTabId = tabs[0]?.getAttribute('id')
    expect(homeTabId).toBeTruthy()
    expect(activePanel?.getAttribute('aria-labelledby')).toBe(homeTabId)
  })

  it('should switch active tab and panel on click, ignore disabled tabs, and emit model and click events', async () => {
    const { container, emitted } = await mountTabs(
      {
        selected: 'home',
        tabs: [
          { value: 'home', label: 'Home' },
          { value: 'search', label: 'Search' },
          { value: 'settings', label: 'Settings', disabled: true }
        ],
        motionAxisAttrs: { inDom: true }
      },
      {
        home: () => [h('span', 'Home slide')],
        search: () => [h('span', 'Search slide')],
        settings: () => [h('span', 'Settings slide')]
      }
    )

    const tabs = container.querySelectorAll<HTMLElement>('[role="tab"]')

    // Clicking disabled tab must not change selection or emit click
    tabs[2]?.click()
    await nextTick()
    expect(emitted).toHaveLength(0)

    // Clicking enabled tab switches selection and emits expected events
    tabs[1]?.click()
    await nextTick()
    await nextTick()

    expect(emitted.some(item => item.event === 'update:selected' && item.args[0] === 'search')).toBe(true)
    expect(emitted.some(item => item.event === 'update:modelSelected' && item.args[0] === 'search')).toBe(true)
    expect(emitted.some(item => item.event === 'click')).toBe(true)
    expect(emitted.some(item => item.event === 'clickLite')).toBe(true)

    const panels = container.querySelectorAll('[role="tabpanel"]')
    expect(panels).toHaveLength(3)
    expect(panels[1]?.getAttribute('aria-labelledby')).toBe(tabs[1]?.getAttribute('id'))
  })

  it('should synchronize selection when parent updates props.selected or props.modelSelected without feedback emits', async () => {
    const { container, props, emitted } = await mountTabs(
      {
        selected: 'home',
        tabs: [
          { value: 'home', label: 'Home' },
          { value: 'profile', label: 'Profile' }
        ],
        motionAxisAttrs: { inDom: true }
      },
      {
        home: () => [h('span', 'Home')],
        profile: () => [h('span', 'Profile')]
      }
    )

    props.selected = 'profile'
    await flushFrames()
    await flushFrames()

    const tabs = container.querySelectorAll('[role="tab"]')
    expect(tabs[1]?.getAttribute('aria-selected')).toBe('true')
    expect(emitted.filter(item => item.event === 'update:selected')).toHaveLength(0)

    props.modelSelected = 'home'
    await flushFrames()
    await flushFrames()

    expect(tabs[0]?.getAttribute('aria-selected')).toBe('true')
    expect(emitted.filter(item => item.event === 'update:modelSelected')).toHaveLength(0)
  })

  it('should support numeric 0 tab values, config object tabs, custom keyValue, and Unicode labels', async () => {
    const { container } = await mountTabs(
      {
        tabs: {
          divider: true,
          keyValue: 'code',
          list: [
            { code: 0, label: 'Số không · Ноль' },
            { code: 1, label: 'Một · Один 🚀' }
          ] as unknown as NonNullable<TabsProps['tabsNavigationAttrs']>['list']
        },
        tabItemAttrs: { 'data-custom': 'yes' },
        motionAxisAttrs: { axis: 'y' }
      },
      {
        0: () => [h('span', 'Zero panel content')],
        1: () => [h('span', 'One panel content')]
      }
    )

    const tabs = container.querySelectorAll('[role="tab"]')
    expect(tabs).toHaveLength(2)
    expect(tabs[0]?.getAttribute('data-custom')).toBe('yes')
    expect(tabs[0]?.getAttribute('aria-selected')).toBe('true')
    expect(tabs[0]?.textContent).toContain('Số không · Ноль')

    const panel = container.querySelector('[role="tabpanel"]')
    expect(panel?.textContent).toBe('Zero panel content')
    expect(panel?.getAttribute('aria-labelledby')).toBe(tabs[0]?.getAttribute('id'))
  })

  it('should clean up watchers on unmount without throwing or leaking updates', async () => {
    const { app, container, props } = await mountTabs(
      {
        selected: 'home',
        tabs: [
          { value: 'home', label: 'Home' },
          { value: 'profile', label: 'Profile' }
        ]
      },
      {
        home: () => [h('span', 'Home')],
        profile: () => [h('span', 'Profile')]
      }
    )

    app.unmount()
    container.remove()
    mountedApps.pop()

    props.selected = 'profile'
    await nextTick()
  })
})
