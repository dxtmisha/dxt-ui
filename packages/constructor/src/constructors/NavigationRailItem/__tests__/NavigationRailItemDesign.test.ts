// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type Ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { NavigationRailItem } from '../NavigationRailItem'
import { NavigationRailItemDesign } from '../NavigationRailItemDesign'
import type { NavigationRailItemProps } from '../props'
import type {
  NavigationRailItemClasses,
  NavigationRailItemComponents,
  NavigationRailItemExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: { icon: [String, Object] },
  setup(componentProps, { attrs }) {
    return () => h('span', { ...attrs, class: ['mock-icon', attrs.class] }, String(componentProps.icon ?? ''))
  }
})

const MockBadge = defineComponent({
  name: 'MockBadge',
  props: { label: [String, Number], dot: Boolean },
  setup(componentProps, { attrs }) {
    return () => h('span', { ...attrs, class: ['mock-badge', attrs.class] }, String(componentProps.label ?? ''))
  }
})

describe('NavigationRailItemDesign', () => {
  it('should render root element, bind ref to elementHtml, and expose value/detail getters', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let elementHtmlRef!: Ref<HTMLDivElement | undefined>
    let exposedResult!: NavigationRailItemExpose

    const Component = defineComponent({
      setup() {
        const props = reactive<NavigationRailItemProps>({
          label: 'Home',
          value: 'home-val',
          detail: { route: '/home' },
          role: 'option',
          tabindex: '-1'
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-navigationRailItem': true
          }
        }))

        const design = new NavigationRailItemDesign<
          NavigationRailItemComponents,
          NavigationRailItemExpose,
          NavigationRailItemClasses,
          NavigationRailItemProps
        >('d1.navigationRailItem', props, {
          classes: classesToken
        })

        exposedResult = design.expose()
        elementHtmlRef = (exposedResult as NavigationRailItemExpose & { elementHtml: Ref<HTMLDivElement | undefined> }).elementHtml

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = container.querySelector('.d1-navigationRailItem')
    expect(rootElement).not.toBeNull()
    expect(rootElement?.tagName.toLowerCase()).toBe('div')
    expect(rootElement?.getAttribute('data-value')).toBe('home-val')
    expect(rootElement?.getAttribute('role')).toBe('option')
    expect(rootElement?.getAttribute('tabindex')).toBe('-1')
    expect(elementHtmlRef.value).toBe(rootElement)
    expect(exposedResult.getValue?.()).toBe('home-val')
    expect(exposedResult.getDetail?.()).toEqual({ route: '/home' })
  })

  it('should initialize design subclasses and empty styles', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designClasses!: Partial<NavigationRailItemClasses>
    let designStyles!: unknown

    const Component = defineComponent({
      setup() {
        const props = reactive<NavigationRailItemProps>({})

        const design = new NavigationRailItemDesign<
          NavigationRailItemComponents,
          NavigationRailItemExpose,
          NavigationRailItemClasses,
          NavigationRailItemProps
        >('d1.navigationRailItem', props)

        designClasses = (design as unknown as { initClasses: () => Partial<NavigationRailItemClasses> }).initClasses()
        designStyles = (design as unknown as { initStyles: () => unknown }).initStyles()

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(designClasses.label).toBe('d1-navigationRailItem__label')
    expect(designClasses.context).toBe('d1-navigationRailItem__context')
    expect(designClasses.contextLine).toBe('d1-navigationRailItem__contextLine')
    expect(designClasses.badge).toBe('d1-navigationRailItem__badge')
    expect(designStyles).toEqual({})
  })

  it('should render context vs contextLine depending on icon presence when badge is active', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const props = reactive<NavigationRailItemProps>({
      badge: '9',
      icon: 'inbox',
      label: 'Inbox'
    })

    const Component = defineComponent({
      setup() {
        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-navigationRailItem': true }
        }))

        const design = new NavigationRailItemDesign<
          NavigationRailItemComponents,
          NavigationRailItemExpose,
          NavigationRailItemClasses,
          NavigationRailItemProps
        >('d1.navigationRailItem', props, {
          classes: classesToken,
          components: {
            icon: MockIcon,
            badge: MockBadge
          }
        })

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()
    expect(container.querySelector('.d1-navigationRailItem__context .mock-icon')).not.toBeNull()
    expect(container.querySelector('.d1-navigationRailItem__context .mock-badge')?.textContent).toBe('9')
    expect(container.querySelector('.d1-navigationRailItem__contextLine')).toBeNull()

    props.icon = undefined
    await nextTick()
    expect(container.querySelector('.d1-navigationRailItem__context')).toBeNull()
    expect(container.querySelector('.d1-navigationRailItem__contextLine .d1-navigationRailItem__label')?.textContent).toBe('Inbox')
    expect(container.querySelector('.d1-navigationRailItem__contextLine .mock-badge')?.textContent).toBe('9')
  })

  it('should merge external class, style, and onClick handlers and support ItemConstructor DI override', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const externalClick = vi.fn()
    const emitClick = vi.fn()

    class CustomNavigationRailItem extends NavigationRailItem {
      override get tag(): string {
        return 'li'
      }
    }

    const Component = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<NavigationRailItemProps>({
          label: 'Custom Tag',
          value: 'custom'
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-navigationRailItem': true }
        }))

        const design = new NavigationRailItemDesign<
          NavigationRailItemComponents,
          NavigationRailItemExpose,
          NavigationRailItemClasses,
          NavigationRailItemProps
        >(
          'd1.navigationRailItem',
          props,
          {
            classes: classesToken,
            emits: emitClick
          },
          CustomNavigationRailItem
        )

        return design.render()
      }
    })

    const app = createApp({
      render() {
        return h(Component, {
          class: 'custom-cls',
          style: 'color: red',
          onClick: externalClick
        })
      }
    })

    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = container.querySelector('li.d1-navigationRailItem') as HTMLLIElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.classList.contains('custom-cls')).toBe(true)
    expect(rootElement.getAttribute('style')).toContain('color: red')

    rootElement.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
    expect(emitClick).toHaveBeenCalledWith('click', expect.any(Object), expect.any(Object))
    expect(emitClick).toHaveBeenCalledWith('clickLite', expect.any(Object))
  })
})
