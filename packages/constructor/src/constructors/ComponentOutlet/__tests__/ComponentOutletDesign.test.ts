// @vitest-environment jsdom
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createApp, createSSRApp, defineComponent, h, nextTick, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { ComponentStorage, type ComponentStorageReturn } from '@dxtmisha/functional'

import { ComponentOutlet } from '../ComponentOutlet'
import { ComponentOutletDesign } from '../ComponentOutletDesign'
import { defaultsComponentOutlet, type ComponentOutletProps } from '../props'
import type {
  ComponentOutletClasses,
  ComponentOutletComponents,
  ComponentOutletExpose
} from '../types'

/**
 * Clears all registered components in the shared ComponentStorage instance.
 *
 * Очищает все зарегистрированные компоненты в общем экземпляре ComponentStorage.
 */
function clearComponentStorage(): void {
  ;(ComponentStorage.getItem() as unknown as { items: Map<string, unknown> }).items.clear()
}

describe('ComponentOutletDesign', () => {
  beforeEach(() => {
    clearComponentStorage()
  })

  afterEach(() => {
    clearComponentStorage()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should render registered component without a wrapper, merging attrs, classes, styles, and props while forwarding slots and expose()', () => {
      const RegisteredCard = defineComponent({
        name: 'RegisteredCard',
        props: {
          title: { type: String, default: '' },
          badge: { type: String, default: '' }
        },
        setup(cardProps, { slots, expose }) {
          const cardApi = {
            getCardTitle: () => `${cardProps.title}:${cardProps.badge}`
          }

          expose(cardApi)

          return () => h(
            'article',
            {
              'data-title': cardProps.title,
              'data-badge': cardProps.badge
            },
            [
              slots.header?.({ title: cardProps.title }),
              slots.default?.({ badge: cardProps.badge })
            ]
          )
        }
      })

      ComponentStorage.add('info-card', RegisteredCard, {
        title: 'Default Title',
        badge: 'NEW',
        class: 'storage-card',
        style: { '--card-gap': '8px' }
      })

      const props = reactive<ComponentOutletProps>({
        ...defaultsComponentOutlet,
        name: 'info-card',
        props: {
          title: 'Custom Title',
          class: 'prop-card',
          style: { '--card-padding': '16px' }
        }
      })

      const styles = computed(() => ({ '--outlet-theme': 'dark' }))
      const classes = computed<ComponentOutletClasses>(() => ({
        main: { 'd1-component-outlet': true }
      }))

      let exposedValue: ReturnType<ComponentOutletDesign<
        ComponentOutletComponents,
        ComponentOutletExpose,
        ComponentOutletClasses,
        ComponentOutletProps
      >['expose']> | undefined

      const OutletWrapper = defineComponent({
        setup(_wrapperProps, { expose }) {
          const design = new ComponentOutletDesign<
            ComponentOutletComponents,
            ComponentOutletExpose,
            ComponentOutletClasses,
            ComponentOutletProps
          >(
            'd1.componentOutlet',
            props,
            {
              classes,
              styles
            }
          )

          exposedValue = design.expose()
          expose(exposedValue)
          return design.render()
        }
      })

      const RootApp = defineComponent({
        setup() {
          return () => h(
            OutletWrapper,
            {
              'id': 'outlet-host',
              'data-testid': 'card-outlet',
              'class': 'attr-card',
              'style': { '--attr-border': '1px' }
            },
            {
              header: ({ title }: { title: string }) => [h('h2', { class: 'slot-header' }, title)],
              default: ({ badge }: { badge: string }) => [h('span', { class: 'slot-body' }, badge)]
            }
          )
        }
      })

      const container = document.createElement('div')
      const app = createApp(RootApp)
      app.mount(container)

      const rootElement = container.firstElementChild as HTMLElement
      expect(rootElement).not.toBeNull()
      expect(rootElement.tagName.toLowerCase()).toBe('article')
      expect(rootElement.id).toBe('outlet-host')
      expect(rootElement.getAttribute('data-testid')).toBe('card-outlet')
      expect(rootElement.getAttribute('data-title')).toBe('Custom Title')
      expect(rootElement.getAttribute('data-badge')).toBe('NEW')

      expect(rootElement.classList.contains('d1-component-outlet')).toBe(true)
      expect(rootElement.classList.contains('attr-card')).toBe(true)
      expect(rootElement.classList.contains('storage-card')).toBe(true)
      expect(rootElement.classList.contains('prop-card')).toBe(true)

      expect(rootElement.style.getPropertyValue('--outlet-theme')).toBe('dark')
      expect(rootElement.style.getPropertyValue('--attr-border')).toBe('1px')
      expect(rootElement.style.getPropertyValue('--card-gap')).toBe('8px')
      expect(rootElement.style.getPropertyValue('--card-padding')).toBe('16px')

      expect(rootElement.querySelector('.slot-header')?.textContent).toBe('Custom Title')
      expect(rootElement.querySelector('.slot-body')?.textContent).toBe('NEW')

      const resolvedInstance = exposedValue?.getElement<{ getCardTitle: () => string }>()
      expect(resolvedInstance?.getCardTitle()).toBe('Custom Title:NEW')
      expect(exposedValue?.elementHtml?.value).toBe(resolvedInstance)

      app.unmount()
    })
  })

  describe('Fallback rendering and unregistered components', () => {
    it('should render default slot when component name is unregistered or omitted', () => {
      const props = reactive<ComponentOutletProps>({
        name: 'missing-widget'
      })

      const OutletWrapper = defineComponent({
        setup() {
          const design = new ComponentOutletDesign('d1.componentOutlet', props)
          return design.render()
        }
      })

      const RootApp = defineComponent({
        setup() {
          return () => h(
            OutletWrapper,
            {},
            {
              default: () => [h('div', { class: 'fallback-slot' }, 'Fallback Content')]
            }
          )
        }
      })

      const container = document.createElement('div')
      const app = createApp(RootApp)
      app.mount(container)

      const fallbackElement = container.querySelector('.fallback-slot')
      expect(fallbackElement).not.toBeNull()
      expect(fallbackElement?.textContent).toBe('Fallback Content')

      app.unmount()
    })

    it('should render empty output without errors when component is unregistered and no default slot is provided', () => {
      const props = reactive<ComponentOutletProps>({})

      const OutletWrapper = defineComponent({
        setup() {
          const design = new ComponentOutletDesign('d1.componentOutlet', props)
          return design.render()
        }
      })

      const container = document.createElement('div')
      const app = createApp(OutletWrapper)
      app.mount(container)

      expect(container.firstElementChild).toBeNull()
      expect(container.textContent).toBe('')

      app.unmount()
    })
  })

  describe('Reactive switching, prop updates, and ItemConstructor override', () => {
    it('should dynamically switch rendered component and fallback slot when props.name and props.props change', async () => {
      const FirstWidget = defineComponent({
        props: { label: { type: String, default: '' } },
        setup(widgetProps) {
          return () => h('button', { class: 'first-widget' }, widgetProps.label)
        }
      })

      const SecondWidget = defineComponent({
        props: { label: { type: String, default: '' } },
        setup(widgetProps) {
          return () => h('a', { class: 'second-widget' }, widgetProps.label)
        }
      })

      ComponentStorage.add('first', FirstWidget, { label: 'First Default' })
      ComponentStorage.add('second', SecondWidget, { label: 'Second Default' })

      const props = reactive<ComponentOutletProps>({
        name: 'first',
        props: { label: 'Initial First' }
      })

      const OutletWrapper = defineComponent({
        setup() {
          const design = new ComponentOutletDesign('d1.componentOutlet', props)
          return design.render()
        }
      })

      const RootApp = defineComponent({
        setup() {
          return () => h(
            OutletWrapper,
            {},
            {
              default: () => [h('span', { class: 'fallback-node' }, 'Fallback Node')]
            }
          )
        }
      })

      const container = document.createElement('div')
      const app = createApp(RootApp)
      app.mount(container)

      expect(container.querySelector('.first-widget')?.textContent).toBe('Initial First')

      props.props = { label: 'Updated First' }
      await nextTick()
      expect(container.querySelector('.first-widget')?.textContent).toBe('Updated First')

      props.name = 'second'
      props.props = undefined
      await nextTick()
      expect(container.querySelector('.first-widget')).toBeNull()
      expect(container.querySelector('.second-widget')?.textContent).toBe('Second Default')

      props.name = 'unregistered'
      await nextTick()
      expect(container.querySelector('.second-widget')).toBeNull()
      expect(container.querySelector('.fallback-node')?.textContent).toBe('Fallback Node')

      app.unmount()
    })

    it('should support custom ItemConstructor override', () => {
      const InjectedComponent = defineComponent({
        setup() {
          return () => h('section', { class: 'injected-component' }, 'Injected')
        }
      })

      /**
       * Custom ComponentOutlet logic class for testing Dependency Injection.
       *
       * Пользовательский класс логики ComponentOutlet для тестирования внедрения зависимостей.
       */
      class CustomComponentOutlet extends ComponentOutlet {
        override get component(): ComponentStorageReturn | undefined {
          return {
            component: InjectedComponent,
            props: { 'data-injected': 'true' }
          }
        }
      }

      const props = reactive<ComponentOutletProps>({})

      const HostComponent = defineComponent({
        setup() {
          const design = new ComponentOutletDesign<
            ComponentOutletComponents,
            ComponentOutletExpose,
            ComponentOutletClasses,
            ComponentOutletProps
          >(
            'd1.componentOutlet',
            props,
            undefined,
            CustomComponentOutlet
          )

          return design.render()
        }
      })

      const container = document.createElement('div')
      const app = createApp(HostComponent)
      app.mount(container)

      const rootElement = container.querySelector('.injected-component')
      expect(rootElement).not.toBeNull()
      expect(rootElement?.getAttribute('data-injected')).toBe('true')
      expect(rootElement?.textContent).toBe('Injected')

      app.unmount()
    })
  })

  describe('SSR compatibility and isomorphic rendering', () => {
    it('should render registered component and fallback slot deterministically in SSR', async () => {
      const SsrBanner = defineComponent({
        props: {
          heading: { type: String, default: '' }
        },
        setup(bannerProps, { slots }) {
          return () => h(
            'section',
            { 'class': 'ssr-banner', 'data-heading': bannerProps.heading },
            slots.default?.()
          )
        }
      })

      ComponentStorage.add('ssr-banner', SsrBanner, {
        heading: 'Server Heading'
      })

      const registeredApp = createSSRApp({
        setup() {
          const props = reactive<ComponentOutletProps>({
            name: 'ssr-banner',
            props: { id: 'banner-1' }
          })
          const design = new ComponentOutletDesign('d1.componentOutlet', props)
          return design.render()
        }
      })

      const registeredHtml = await renderToString(registeredApp)
      expect(registeredHtml).toContain('<section')
      expect(registeredHtml).toContain('class="ssr-banner"')
      expect(registeredHtml).toContain('data-heading="Server Heading"')
      expect(registeredHtml).toContain('id="banner-1"')

      const fallbackApp = createSSRApp(
        defineComponent({
          setup() {
            const InnerOutlet = defineComponent({
              setup() {
                const props = reactive<ComponentOutletProps>({ name: 'missing-ssr' })
                const design = new ComponentOutletDesign('d1.componentOutlet', props)
                return design.render()
              }
            })

            return () => h(InnerOutlet, null, {
              default: () => [h('p', { class: 'ssr-fallback' }, 'SSR Fallback')]
            })
          }
        })
      )

      const fallbackHtml = await renderToString(fallbackApp)
      expect(fallbackHtml).toContain('<p class="ssr-fallback">SSR Fallback</p>')
    })
  })
})
