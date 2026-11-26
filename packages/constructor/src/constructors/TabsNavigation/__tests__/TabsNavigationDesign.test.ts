// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  mergeProps,
  nextTick,
  reactive,
  ref,
  type App
} from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import type { HorizontalScrollControlItem } from '../../HorizontalScroll'
import { defaultsTabsNavigation, type TabsNavigationProps } from '../props'
import { TabsNavigationDesign } from '../TabsNavigationDesign'
import type {
  TabsNavigationClasses,
  TabsNavigationComponents,
  TabsNavigationEmits,
  TabsNavigationExpose
} from '../types'

describe('TabsNavigationDesign', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    vi.restoreAllMocks()
  })

  const createMockScroll = () => defineComponent({
    name: 'MockHorizontalScroll',
    inheritAttrs: false,
    props: {
      bleed: Boolean,
      align: String
    },
    setup(_, { attrs, slots, expose }) {
      const rootRef = ref<HTMLDivElement>()
      const slotData: HorizontalScrollControlItem = {
        classItem: 'd1-horizontalScroll__item',
        classItemSelected: 'd1-horizontalScroll__item--selected',
        binds: {
          class: 'd1-horizontalScroll__item'
        }
      }

      expose({
        getElement: () => rootRef.value,
        toSelected: vi.fn()
      })

      return () => h(
        'div',
        mergeProps({ ref: rootRef, class: 'mock-scroll' }, attrs),
        slots.default?.(slotData)
      )
    }
  })

  const createMockTabItem = (extraClass = 'mock-tab-item') => defineComponent({
    name: 'MockTabItem',
    inheritAttrs: false,
    props: {
      label: [String, Number],
      value: [String, Number, Boolean],
      index: [String, Number, Boolean],
      tag: String,
      selected: Boolean,
      disabled: Boolean
    },
    emits: ['click'],
    setup(componentProps, { attrs, emit }) {
      return () => h(
        componentProps.tag ?? 'button',
        mergeProps(
          {
            'class': extraClass,
            'data-value': componentProps.index ?? componentProps.value,
            'data-selected': String(Boolean(componentProps.selected)),
            'onClick': (event: MouseEvent) => emit('click', event, {
              type: 'click',
              value: componentProps.value ?? componentProps.index
            })
          },
          attrs
        ),
        String(componentProps.label ?? '')
      )
    }
  })

  const mountDesign = async (
    initialProps: TabsNavigationProps = {},
    options: {
      attrs?: Record<string, unknown>
      slots?: Record<string, () => unknown>
      DesignClass?: typeof TabsNavigationDesign
      extraComponents?: Record<string, object>
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

    const DesignClass = options.DesignClass ?? TabsNavigationDesign
    const MockHorizontalScroll = createMockScroll()
    const MockTabItem = createMockTabItem()

    const Host = defineComponent({
      inheritAttrs: false,
      setup() {
        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-tabsNavigation': true,
            'd1-tabsNavigation--divider': Boolean(props.divider)
          }
        }))

        const design = new DesignClass<
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
              horizontalScroll: MockHorizontalScroll,
              tabItem: MockTabItem,
              ...options.extraComponents
            } as TabsNavigationComponents,
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

    return {
      container,
      props,
      emitted,
      exposed
    }
  }

  it('should render root container with merged external attrs, class, style, and exposed ids', async () => {
    const externalFocus = vi.fn()
    const { container, exposed } = await mountDesign(
      {
        selected: 'tab-1',
        list: [
          { value: 'tab-1', label: 'Tab 1' },
          { value: 'tab-2', label: 'Tab 2' }
        ]
      },
      {
        attrs: {
          'aria-label': 'Settings navigation',
          'class': 'external-nav',
          'style': 'margin-top: 8px',
          'onFocus': externalFocus
        }
      }
    )

    const root = container.querySelector('[role="tablist"]') as HTMLElement
    expect(root).not.toBeNull()
    expect(root.getAttribute('aria-orientation')).toBe('horizontal')
    expect(root.getAttribute('aria-label')).toBe('Settings navigation')
    expect(root.classList.contains('d1-tabsNavigation')).toBe(true)
    expect(root.classList.contains('external-nav')).toBe(true)
    expect(root.style.marginTop).toBe('8px')

    root.dispatchEvent(new FocusEvent('focus'))
    expect(externalFocus).toHaveBeenCalledTimes(1)

    const idsMap = exposed.ids()
    expect(idsMap['tab-1']).toBeTruthy()
    expect(container.querySelectorAll('.mock-tab-item')[0]?.getAttribute('id')).toBe(idsMap['tab-1'])
  })

  it('should render leading and trailing slots around tab items and compose itemAttrs without overwriting tag or onClick', async () => {
    const customItemClick = vi.fn()
    const { container, emitted } = await mountDesign(
      {
        selected: 'home',
        itemAttrs: {
          class: 'shared-item-class',
          onClick: customItemClick
        },
        list: [
          { value: 'home', label: 'Home', tag: 'a' },
          { value: 'about', label: 'About' }
        ]
      },
      {
        slots: {
          leading: () => [h('span', { class: 'slot-leading' }, 'Start')],
          trailing: () => [h('span', { class: 'slot-trailing' }, 'End')]
        }
      }
    )

    const root = container.querySelector('[role="tablist"]') as HTMLElement
    const children = Array.from(root.children)

    expect(children[0]?.classList.contains('slot-leading')).toBe(true)
    expect(children[1]?.tagName).toBe('A')
    expect(children[1]?.classList.contains('shared-item-class')).toBe(true)
    expect(children[1]?.classList.contains('d1-tabsNavigation__item')).toBe(true)
    expect(children[1]?.classList.contains('d1-horizontalScroll__item')).toBe(true)
    expect(children[1]?.classList.contains('d1-horizontalScroll__item--selected')).toBe(true)
    expect(children[1]?.classList.contains('undefined')).toBe(false)
    expect(children[2]?.tagName).toBe('BUTTON')
    expect(children[3]?.classList.contains('slot-trailing')).toBe(true)

    ;(children[2] as HTMLElement).click()
    await nextTick()

    expect(customItemClick).toHaveBeenCalledTimes(1)
    expect(emitted.some(entry => entry.event === 'update:selected')).toBe(true)
  })

  it('should allow explicit props.tag to override item tag and support subclass itemComponent override', async () => {
    class CustomTabsNavigationDesign<
      COMP extends TabsNavigationComponents,
      EXPOSE extends TabsNavigationExpose,
      CLASSES extends TabsNavigationClasses,
      P extends TabsNavigationProps
    > extends TabsNavigationDesign<COMP, EXPOSE, CLASSES, P> {
      protected override readonly itemComponent = 'segmentControlItem'
    }

    const { container } = await mountDesign(
      {
        tag: 'div',
        list: [{ value: 'one', label: 'One', tag: 'a' }]
      },
      {
        DesignClass: CustomTabsNavigationDesign as typeof TabsNavigationDesign,
        extraComponents: {
          segmentControlItem: createMockTabItem('mock-segment-item')
        }
      }
    )

    const item = container.querySelector('.mock-segment-item')
    expect(item).not.toBeNull()
    expect(item?.tagName).toBe('DIV')
  })
})
