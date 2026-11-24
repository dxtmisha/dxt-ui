// @vitest-environment jsdom
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  createSSRApp,
  defineComponent,
  h,
  nextTick,
  reactive,
  ref,
  type VNode
} from 'vue'
import { renderToString } from 'vue/server-renderer'
import { ComponentStorage, type ConstrItem } from '@dxtmisha/functional'

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

/** Mounted application cleanup callbacks / Обработчики очистки смонтированных приложений */
const mountedCleanups: Array<() => void> = []

beforeEach(() => {
  clearComponentStorage()
})

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  clearComponentStorage()
  vi.restoreAllMocks()
})

/**
 * Mounts the complete ComponentOutlet component (`ComponentOutlet` + `ComponentOutletDesign`) into a DOM host.
 *
 * Монтирует полный компонент ComponentOutlet (`ComponentOutlet` + `ComponentOutletDesign`) в DOM-контейнер.
 * @param props reactive component properties / реактивные свойства компонента
 * @param attrs optional fallthrough attributes / необязательные пробрасываемые атрибуты
 * @param slots optional slots map / необязательная карта слотов
 * @param ItemConstructor optional custom logic constructor / необязательный пользовательский конструктор логики
 * @returns mounted host container and exposed component API / смонтированный контейнер и открытый API компонента
 */
function mountCompleteOutlet(
  props: ComponentOutletProps,
  attrs?: ConstrItem,
  slots?: Record<string, (slotProps: ConstrItem) => VNode[]>,
  ItemConstructor?: typeof ComponentOutlet
): {
  host: HTMLDivElement
  getExposed: () => ReturnType<ComponentOutletDesign<
    ComponentOutletComponents,
    ComponentOutletExpose,
    ComponentOutletClasses,
    ComponentOutletProps
  >['expose']>
} {
  let exposedApi!: ReturnType<ComponentOutletDesign<
    ComponentOutletComponents,
    ComponentOutletExpose,
    ComponentOutletClasses,
    ComponentOutletProps
  >['expose']>

  const classes = computed<ComponentOutletClasses>(() => ({
    main: { 'd1-component-outlet': true }
  }))
  const styles = computed(() => ({
    '--d1-outlet-mounted': '1'
  }))

  const OutletComponent = defineComponent({
    name: 'D1ComponentOutletTest',
    setup(_componentProps, { expose }) {
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
        },
        ItemConstructor
      )

      exposedApi = design.expose()
      expose(exposedApi)
      return design.render()
    }
  })

  const HostApp = defineComponent({
    setup() {
      return () => h(OutletComponent, attrs ?? null, slots)
    }
  })

  const host = document.createElement('div')
  document.body.appendChild(host)
  const app = createApp(HostApp)
  app.mount(host)

  mountedCleanups.push(() => {
    app.unmount()
    host.remove()
  })

  return {
    host,
    getExposed: () => exposedApi
  }
}

describe('ComponentOutlet (complete component integration)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should forward merged props, compose attrs and props event listeners, classes, styles, and expose getElement()', async () => {
      const onClickStorage = vi.fn()
      const onClickInstance = vi.fn()
      const onClickAttrs = vi.fn()

      const ActionButton = defineComponent({
        name: 'ActionButton',
        props: {
          label: { type: String, default: '' },
          disabled: { type: Boolean, default: false }
        },
        setup(buttonProps, { expose }) {
          const buttonElement = ref<HTMLButtonElement>()
          expose({
            focusButton: () => buttonElement.value?.focus(),
            getButtonLabel: () => buttonProps.label
          })

          return () => h(
            'button',
            {
              ref: buttonElement,
              class: 'action-button',
              disabled: buttonProps.disabled
            },
            buttonProps.label
          )
        }
      })

      ComponentStorage.add('action-button', ActionButton, {
        label: 'Default Action',
        disabled: false,
        class: 'storage-button',
        style: { '--button-gap': '4px' },
        onClick: onClickStorage
      })

      const props = reactive<ComponentOutletProps>({
        ...defaultsComponentOutlet,
        name: 'action-button',
        props: {
          label: 'Execute Task',
          class: 'instance-button',
          style: { '--button-padding': '8px' },
          onClick: onClickInstance
        }
      })

      const fixture = mountCompleteOutlet(props, {
        'id': 'task-button',
        'data-action': 'execute',
        'class': 'attrs-button',
        'style': { '--button-border': '1px' },
        'onClick': onClickAttrs
      })

      const button = fixture.host.querySelector<HTMLButtonElement>('button.action-button')!
      expect(button).not.toBeNull()
      expect(button.id).toBe('task-button')
      expect(button.getAttribute('data-action')).toBe('execute')
      expect(button.classList.contains('d1-component-outlet')).toBe(true)
      expect(button.classList.contains('attrs-button')).toBe(true)
      expect(button.classList.contains('storage-button')).toBe(true)
      expect(button.classList.contains('instance-button')).toBe(true)
      expect(button.style.getPropertyValue('--d1-outlet-mounted')).toBe('1')
      expect(button.style.getPropertyValue('--button-border')).toBe('1px')
      expect(button.style.getPropertyValue('--button-gap')).toBe('4px')
      expect(button.style.getPropertyValue('--button-padding')).toBe('8px')
      expect(button.textContent).toBe('Execute Task')

      button.click()
      expect(onClickAttrs).toHaveBeenCalledTimes(1)
      expect(onClickInstance).toHaveBeenCalledTimes(1)
      expect(onClickStorage).not.toHaveBeenCalled()

      const exposed = fixture.getExposed().getElement<{
        focusButton: () => void
        getButtonLabel: () => string
      }>()
      expect(exposed?.getButtonLabel()).toBe('Execute Task')
    })

    it('should reactively re-render when dynamic slot set changes at runtime via onBeforeUpdate', async () => {
      const LayoutBox = defineComponent({
        name: 'LayoutBox',
        setup(_boxProps, { slots }) {
          return () => h('div', { class: 'layout-box' }, [
            slots.header ? h('header', { class: 'box-header' }, slots.header()) : null,
            h('main', { class: 'box-main' }, slots.default?.()),
            slots.footer ? h('footer', { class: 'box-footer' }, slots.footer()) : null
          ])
        }
      })

      ComponentStorage.add('layout-box', LayoutBox)

      const showFooter = ref(false)
      const props = reactive<ComponentOutletProps>({ name: 'layout-box' })

      const OutletComponent = defineComponent({
        setup() {
          const design = new ComponentOutletDesign('d1.componentOutlet', props)
          return design.render()
        }
      })

      const DynamicSlotsApp = defineComponent({
        setup() {
          return () => h(
            OutletComponent,
            null,
            showFooter.value
              ? {
                  header: () => [h('span', 'Header Text')],
                  default: () => [h('span', 'Main Text')],
                  footer: () => [h('span', 'Footer Text')]
                }
              : {
                  default: () => [h('span', 'Main Text')]
                }
          )
        }
      })

      const host = document.createElement('div')
      const app = createApp(DynamicSlotsApp)
      app.mount(host)
      mountedCleanups.push(() => app.unmount())

      expect(host.querySelector('.box-main')?.textContent).toBe('Main Text')
      expect(host.querySelector('.box-header')).toBeNull()
      expect(host.querySelector('.box-footer')).toBeNull()

      showFooter.value = true
      await nextTick()

      expect(host.querySelector('.box-header')?.textContent).toBe('Header Text')
      expect(host.querySelector('.box-footer')?.textContent).toBe('Footer Text')
    })

    it('should switch dynamically between components and fallback while resetting getElement() to undefined', async () => {
      const PanelAlpha = defineComponent({
        name: 'PanelAlpha',
        props: { title: { type: String, default: '' } },
        setup(panelProps, { expose }) {
          expose({ getPanelId: () => `alpha:${panelProps.title}` })
          return () => h('section', { class: 'panel-alpha' }, panelProps.title)
        }
      })

      const PanelBeta = defineComponent({
        name: 'PanelBeta',
        props: { title: { type: String, default: '' } },
        setup(panelProps, { expose }) {
          expose({ getPanelId: () => `beta:${panelProps.title}` })
          return () => h('aside', { class: 'panel-beta' }, panelProps.title)
        }
      })

      ComponentStorage.add('panel-alpha', PanelAlpha, { title: 'Default Alpha' })
      ComponentStorage.add('panel-beta', PanelBeta, { title: 'Default Beta' })

      const props = reactive<ComponentOutletProps>({
        name: 'panel-alpha',
        props: { title: 'Initial' }
      })

      const fixture = mountCompleteOutlet(props, undefined, {
        default: () => [h('div', { class: 'fallback-panel' }, 'Fallback Panel')]
      })

      expect(fixture.host.querySelector('.panel-alpha')?.textContent).toBe('Initial')
      expect(fixture.getExposed().getElement<{ getPanelId: () => string }>()?.getPanelId()).toBe('alpha:Initial')

      props.name = 'panel-beta'
      props.props = undefined
      await nextTick()

      expect(fixture.host.querySelector('.panel-alpha')).toBeNull()
      expect(fixture.host.querySelector('.panel-beta')?.textContent).toBe('Default Beta')
      expect(fixture.getExposed().getElement<{ getPanelId: () => string }>()?.getPanelId()).toBe('beta:Default Beta')

      props.name = 'missing-panel'
      await nextTick()

      expect(fixture.host.querySelector('.panel-beta')).toBeNull()
      expect(fixture.host.querySelector('.fallback-panel')?.textContent).toBe('Fallback Panel')
      expect(fixture.getExposed().getElement()).toBeUndefined()
    })
  })

  describe('SSR client hydration compatibility', () => {
    it('should hydrate server-rendered HTML on the client without hydration mismatch warnings', async () => {
      const HydratedBadge = defineComponent({
        props: {
          count: { type: Number, default: 0 }
        },
        setup(badgeProps, { slots }) {
          return () => h(
            'div',
            { 'class': 'hydrated-badge', 'data-count': String(badgeProps.count) },
            [
              h('strong', String(badgeProps.count)),
              slots.default?.()
            ]
          )
        }
      })

      ComponentStorage.add('hydrated-badge', HydratedBadge, { count: 7 })

      const createSharedRoot = () => defineComponent({
        setup() {
          const OutletNode = defineComponent({
            setup() {
              const props = reactive<ComponentOutletProps>({
                name: 'hydrated-badge',
                props: { count: 42 }
              })
              const design = new ComponentOutletDesign('d1.componentOutlet', props)
              return design.render()
            }
          })

          return () => h(OutletNode, { id: 'hydrated-id' }, {
            default: () => [h('span', { class: 'hydrated-label' }, 'Notifications')]
          })
        }
      })

      const serverHtml = await renderToString(createSSRApp(createSharedRoot()))
      expect(serverHtml).toContain('data-count="42"')
      expect(serverHtml).toContain('Notifications')

      const container = document.createElement('div')
      container.innerHTML = serverHtml
      document.body.appendChild(container)

      const clientApp = createSSRApp(createSharedRoot())
      clientApp.mount(container)
      mountedCleanups.push(() => {
        clientApp.unmount()
        container.remove()
      })

      const hydratedElement = container.querySelector('#hydrated-id')
      expect(hydratedElement).not.toBeNull()
      expect(hydratedElement?.getAttribute('data-count')).toBe('42')
      expect(hydratedElement?.querySelector('.hydrated-label')?.textContent).toBe('Notifications')
    })
  })
})
