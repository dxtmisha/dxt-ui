// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type Ref } from 'vue'

import { ListItemDesign } from '../../ListItem'
import { NavigationItem } from '../NavigationItem'
import { NavigationItemDesign } from '../NavigationItemDesign'
import { defaultsNavigationItem, type NavigationItemProps } from '../props'
import type { NavigationItemClasses, NavigationItemComponents, NavigationItemExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockCheckbox = defineComponent({
  name: 'MockCheckbox',
  props: { value: Boolean, label: String },
  setup(props) {
    return () => h('input', { 'type': 'checkbox', 'class': 'mock-checkbox', 'data-checked': String(Boolean(props.value)) })
  }
})

const MockRadio = defineComponent({
  name: 'MockRadio',
  props: { value: Boolean, name: String },
  setup(props) {
    return () => h('input', { 'type': 'radio', 'class': 'mock-radio', 'data-checked': String(Boolean(props.value)) })
  }
})

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: { icon: [String, Object], end: Boolean },
  setup(props) {
    return () => h('i', { 'class': 'mock-icon', 'data-icon': String(props.icon ?? ''), 'data-end': String(Boolean(props.end)) })
  }
})

describe('NavigationItemDesign', () => {
  it('should inherit ListItemDesign, instantiate NavigationItem by default, merge attrs, and compose click handlers', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let elementHtmlRef!: Ref<HTMLDivElement | undefined>
    let exposed!: NavigationItemExpose
    let createdLogic!: NavigationItem
    const externalClick = vi.fn()
    const internalClick = vi.fn()

    class InspectableNavigationItemDesign extends NavigationItemDesign<
      NavigationItemComponents,
      NavigationItemExpose,
      NavigationItemClasses,
      NavigationItemProps
    > {
      get logic(): NavigationItem {
        return this.item as NavigationItem
      }
    }

    const TestComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<NavigationItemProps>({
          ...defaultsNavigationItem,
          label: 'Home',
          value: 'home-route',
          detail: { group: 'primary' }
        })

        const design = new InspectableNavigationItemDesign(
          'd1.navigationItem',
          props,
          {
            emits: (type: string, ...args: unknown[]) => {
              if (type === 'click') {
                internalClick(...args)
              }
            },
            classes: computed(() => ({
              main: { 'd1-navigationItem': true }
            }))
          } as unknown as ConstructorParameters<typeof NavigationItemDesign>[2]
        )

        expect(design).toBeInstanceOf(NavigationItemDesign)
        expect(design).toBeInstanceOf(ListItemDesign)
        expect(design.logic).toBeInstanceOf(NavigationItem)
        expect(typeof design.renderBody).toBe('function')
        expect(typeof design.renderContext).toBe('function')
        expect(typeof design.renderTrailing).toBe('function')
        expect(typeof design.renderControl).toBe('function')

        createdLogic = design.logic
        exposed = design.expose()
        elementHtmlRef = (exposed as NavigationItemExpose & { elementHtml: Ref<HTMLDivElement | undefined> }).elementHtml

        return design.render()
      }
    })

    const app = createApp({
      render: () => h(TestComponent, {
        'class': 'custom-nav-item',
        'style': { paddingLeft: '12px' },
        'data-testid': 'nav-item-root',
        'onClick': externalClick
      })
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.firstElementChild as HTMLElement
    expect(createdLogic).toBeInstanceOf(NavigationItem)
    expect(rootElement).not.toBeNull()
    expect(rootElement.tagName.toLowerCase()).toBe('a')
    expect(rootElement.classList.contains('d1-navigationItem')).toBe(true)
    expect(rootElement.classList.contains('custom-nav-item')).toBe(true)
    expect(rootElement.style.paddingLeft).toBe('12px')
    expect(rootElement.dataset.testid).toBe('nav-item-root')
    expect(rootElement.dataset.value).toBe('home-route')
    expect(elementHtmlRef.value).toBe(rootElement)
    expect(exposed.getValue?.()).toBe('home-route')
    expect(exposed.getDetail?.()).toEqual({ group: 'primary' })

    rootElement.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
    expect(internalClick).toHaveBeenCalledTimes(1)
  })

  it('should render selectionStyle controls (checkbox, radio, checkmark) and support filterMode hiding', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const props = reactive<NavigationItemProps>({
      ...defaultsNavigationItem,
      label: 'Item One',
      selectionStyle: 'checkbox',
      selected: true,
      iconCheckbox: 'check'
    })

    const TestComponent = defineComponent({
      setup() {
        const design = new NavigationItemDesign<
          NavigationItemComponents,
          NavigationItemExpose,
          NavigationItemClasses,
          NavigationItemProps
        >(
          'd1.navigationItem',
          props,
          {
            classes: computed(() => ({
              main: { 'd1-navigationItem': true }
            })),
            components: {
              checkbox: MockCheckbox,
              radio: MockRadio,
              icon: MockIcon
            }
          } as unknown as ConstructorParameters<typeof NavigationItemDesign>[2]
        )

        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()
    expect(host.querySelector('.d1-navigationItem__control .mock-checkbox')?.getAttribute('data-checked')).toBe('true')

    props.selectionStyle = 'radio'
    await nextTick()
    expect(host.querySelector('.d1-navigationItem__control .mock-radio')?.getAttribute('data-checked')).toBe('true')

    props.selectionStyle = 'checkmark'
    await nextTick()
    expect(host.querySelector('.d1-navigationItem__control .mock-icon')?.getAttribute('data-icon')).toBe('check')

    props.selected = false
    await nextTick()
    expect(host.querySelector('.d1-navigationItem__control')).toBeNull()

    props.filterMode = true
    props.highlight = 'nomatch'
    await nextTick()
    expect(host.querySelector('.d1-navigationItem')).toBeNull()
  })

  it('should support ItemConstructor DI override extending NavigationItem', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    class CustomNavigationItem extends NavigationItem {
      override get tag(): string {
        return 'li'
      }
    }

    const TestComponent = defineComponent({
      setup() {
        const design = new NavigationItemDesign<
          NavigationItemComponents,
          NavigationItemExpose,
          NavigationItemClasses,
          NavigationItemProps
        >(
          'd1.navigationItem',
          reactive({ label: 'Custom' }),
          undefined,
          CustomNavigationItem
        )
        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()
    expect(host.firstElementChild?.tagName.toLowerCase()).toBe('li')
  })
})
