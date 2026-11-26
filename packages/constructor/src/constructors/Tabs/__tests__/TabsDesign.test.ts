// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  nextTick,
  reactive,
  ref,
  type App,
  type VNode
} from 'vue'
import type { ConstrClasses, ListSelectedList } from '@dxtmisha/functional'

import type { MotionAxisEmitOptions } from '../../MotionAxis'
import type { TabsNavigationIdsList } from '../../TabsNavigation'
import { defaultsTabs, type TabsProps } from '../props'
import { Tabs } from '../Tabs'
import { TabsDesign } from '../TabsDesign'
import type {
  TabsClasses,
  TabsComponents,
  TabsEmits,
  TabsExpose
} from '../types'

describe('TabsDesign', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []
  let warnSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
  })

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    expect(warnSpy).not.toHaveBeenCalled()
    vi.restoreAllMocks()
  })

  const createMockTabsNavigation = (initialIds: TabsNavigationIdsList = {
    home: 'tab-id-home',
    profile: 'tab-id-profile'
  }) => {
    const idsRef = ref<TabsNavigationIdsList>({ ...initialIds })

    const Component = defineComponent({
      name: 'MockTabsNavigation',
      props: {
        list: [Array, Object],
        selected: [String, Number, Boolean, Array],
        itemAttrs: Object,
        divider: Boolean
      },
      emits: ['click', 'update:selected'],
      setup(componentProps, { emit, expose }) {
        expose({
          ids: () => idsRef.value
        })

        return () => h(
          'div',
          {
            'class': 'mock-tabs-navigation',
            'data-selected': String(componentProps.selected ?? ''),
            'data-divider': String(Boolean(componentProps.divider))
          },
          [
            h(
              'button',
              {
                class: 'mock-tab-home',
                onClick: (event: MouseEvent) => {
                  emit('update:selected', 'home')
                  emit('click', event, { type: 'click', value: 'home' })
                }
              },
              'Home'
            ),
            h(
              'button',
              {
                class: 'mock-tab-profile',
                onClick: (event: MouseEvent) => {
                  emit('update:selected', 'profile')
                  emit('click', event, { type: 'click', value: 'profile' })
                }
              },
              'Profile'
            )
          ]
        )
      }
    })

    return {
      Component,
      idsRef
    }
  }

  const createMockMotionAxis = () => defineComponent({
    name: 'MockMotionAxis',
    props: {
      selected: String,
      axis: String,
      inDom: Boolean
    },
    emits: ['motionAxis'],
    setup(componentProps, { slots, emit }) {
      return () => h(
        'div',
        {
          'class': 'mock-motion-axis',
          'data-selected': componentProps.selected ?? '',
          'data-axis': componentProps.axis ?? '',
          'onClick': () => emit('motionAxis', {
            type: 'end',
            selected: componentProps.selected,
            active: componentProps.selected
          } satisfies MotionAxisEmitOptions)
        },
        Object.entries(slots).map(([key, slotFn]) =>
          h(
            'section',
            {
              'key': key,
              'class': 'mock-motion-slide-wrapper',
              'data-slide-key': key
            },
            slotFn?.({})
          ))
      )
    }
  })

  const mountDesign = async (
    initialProps: TabsProps = {},
    options: {
      slots?: Record<string, () => VNode[]>
      initialIds?: TabsNavigationIdsList
      ItemConstructor?: typeof Tabs
    } = {}
  ) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const props = reactive<TabsProps>({
      ...defaultsTabs,
      ...initialProps
    })
    const emitted: Array<{ event: keyof TabsEmits, args: unknown[] }> = []
    let exposed!: TabsExpose
    let designInstance!: TabsDesign<TabsComponents, TabsExpose, TabsClasses, TabsProps>

    const { Component: MockTabsNavigation, idsRef } = createMockTabsNavigation(options.initialIds)
    const MockMotionAxis = createMockMotionAxis()

    const Host = defineComponent({
      inheritAttrs: false,
      setup() {
        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-tabs': true }
        }))

        designInstance = new TabsDesign<
          TabsComponents,
          TabsExpose,
          TabsClasses,
          TabsProps
        >(
          'd1.tabs',
          props,
          {
            classes: classesToken,
            components: {
              tabsNavigation: MockTabsNavigation,
              motionAxis: MockMotionAxis
            },
            emits: ((event: keyof TabsEmits, ...args: unknown[]) => {
              emitted.push({ event, args })
            }) as never
          },
          options.ItemConstructor
        )

        exposed = designInstance.expose()
        return designInstance.render()
      }
    })

    const app = createApp({
      render: () => h(Host, {}, options.slots ?? {})
    })
    app.mount(container)
    mountedApps.push({ app, container })
    await nextTick()

    return {
      container,
      props,
      emitted,
      exposed,
      idsRef,
      designInstance
    }
  }

  it('should render TabsNavigation and MotionAxis slides with slide class and ARIA tabpanel attributes', async () => {
    const { container, idsRef } = await mountDesign(
      {
        selected: 'home',
        tabs: [
          { value: 'home', label: 'Home' },
          { value: 'profile', label: 'Profile' }
        ],
        tabsNavigationAttrs: { divider: true },
        motionAxisAttrs: { axis: 'y' }
      },
      {
        slots: {
          home: () => [h('p', 'Home content')],
          profile: () => [h('p', 'Profile content')]
        }
      }
    )

    const navigation = container.querySelector('.mock-tabs-navigation')
    const motionAxis = container.querySelector('.mock-motion-axis')
    expect(navigation).not.toBeNull()
    expect(navigation?.getAttribute('data-selected')).toBe('home')
    expect(navigation?.getAttribute('data-divider')).toBe('true')
    expect(motionAxis).not.toBeNull()
    expect(motionAxis?.getAttribute('data-selected')).toBe('home')
    expect(motionAxis?.getAttribute('data-axis')).toBe('y')

    const panels = container.querySelectorAll('[role="tabpanel"]')
    expect(panels).toHaveLength(2)
    expect(panels[0]?.classList.contains('d1-tabs__slide')).toBe(true)
    expect(panels[0]?.getAttribute('aria-labelledby')).toBe('tab-id-home')
    expect(panels[0]?.textContent).toBe('Home content')
    expect(panels[1]?.getAttribute('aria-labelledby')).toBe('tab-id-profile')

    // Reactive update to TabsNavigation ids must update aria-labelledby
    idsRef.value = {
      home: 'tab-id-home-updated',
      profile: 'tab-id-profile-updated'
    }
    await nextTick()
    expect(container.querySelectorAll('[role="tabpanel"]')[0]?.getAttribute('aria-labelledby')).toBe('tab-id-home-updated')
  })

  it('should skip rendering TabsNavigation when neither tabs nor tabsNavigationAttrs are provided', async () => {
    const { container } = await mountDesign(
      { selected: 'home' },
      {
        slots: {
          home: () => [h('span', 'Standalone slide')]
        }
      }
    )

    expect(container.querySelector('.mock-tabs-navigation')).toBeNull()
    const panel = container.querySelector('[role="tabpanel"]')
    expect(panel).not.toBeNull()
    expect(panel?.hasAttribute('aria-labelledby')).toBe(false)
    expect(panel?.textContent).toBe('Standalone slide')
  })

  it('should forward navigation selection, click, and motionAxis events and expose EventClickExpose API', async () => {
    const { container, emitted, exposed } = await mountDesign(
      {
        selected: 'home',
        tabs: [
          { value: 'home', label: 'Home' },
          { value: 'profile', label: 'Profile' }
        ]
      },
      {
        slots: {
          home: () => [h('span', 'Home')],
          profile: () => [h('span', 'Profile')]
        }
      }
    )

    expect(exposed.getValue?.()).toBeUndefined()
    expect(exposed.getDetail?.()).toBeUndefined()

    const profileButton = container.querySelector('.mock-tab-profile') as HTMLButtonElement
    profileButton.click()
    await nextTick()

    expect(emitted.some(item => item.event === 'update:selected' && item.args[0] === 'profile')).toBe(true)
    expect(emitted.some(item => item.event === 'update:modelSelected' && item.args[0] === 'profile')).toBe(true)
    expect(emitted.some(item => item.event === 'click')).toBe(true)
    expect(emitted.some(item => item.event === 'clickLite')).toBe(true)
    expect(container.querySelector('.mock-motion-axis')?.getAttribute('data-selected')).toBe('profile')

    const motionAxis = container.querySelector('.mock-motion-axis') as HTMLDivElement
    motionAxis.click()
    await nextTick()

    expect(emitted.some(item => item.event === 'motionAxis')).toBe(true)
  })

  it('should support ItemConstructor dependency injection and handle empty slots cleanly', async () => {
    const customSpy = vi.fn()

    class CustomTabs extends Tabs {
      override get expose(): TabsExpose {
        customSpy()
        return {
          getValue: () => 'custom-value',
          getDetail: () => ({ source: 'custom' })
        }
      }
    }

    const { container, exposed, designInstance } = await mountDesign(
      {
        tabs: [{ value: 'a', label: 'A' }]
      },
      {
        ItemConstructor: CustomTabs
      }
    )

    expect(customSpy).toHaveBeenCalledTimes(1)
    expect(exposed.getValue?.()).toBe('custom-value')
    expect(exposed.getDetail?.()).toEqual({ source: 'custom' })
    expect(designInstance.renderSlides()).toEqual({})
    expect(container.querySelectorAll('[role="tabpanel"]')).toHaveLength(0)

    // Verify prototype-safe slot iteration ignores non-function entries
    const protoResult = designInstance.renderSlides()
    expect(Object.prototype.hasOwnProperty.call(protoResult, '__proto__')).toBe(false)
    expect(Object.prototype.hasOwnProperty.call(protoResult, 'constructor')).toBe(false)
  })

  it('should update selected reactively when props.selected or props.modelSelected changes externally', async () => {
    const { container, props, emitted } = await mountDesign(
      {
        selected: 'home',
        tabs: [
          { value: 'home', label: 'Home' },
          { value: 'profile', label: 'Profile' }
        ]
      },
      {
        slots: {
          home: () => [h('span', 'Home')],
          profile: () => [h('span', 'Profile')]
        }
      }
    )

    props.selected = 'profile'
    await nextTick()

    expect(container.querySelector('.mock-tabs-navigation')?.getAttribute('data-selected')).toBe('profile')
    expect(container.querySelector('.mock-motion-axis')?.getAttribute('data-selected')).toBe('profile')
    // External prop sync must not emit redundant feedback model updates
    expect(emitted.filter(item => item.event === 'update:selected')).toHaveLength(0)

    props.modelSelected = 'home' as ListSelectedList
    await nextTick()
    expect(container.querySelector('.mock-motion-axis')?.getAttribute('data-selected')).toBe('home')
  })
})
