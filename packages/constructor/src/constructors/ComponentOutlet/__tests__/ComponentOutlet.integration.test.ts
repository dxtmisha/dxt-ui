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
    it('should forward event listeners, attributes, merged props, classes, styles, and expose getElement()', async () => {
      const onClickStorage = vi.fn()
      const onClickInstance = vi.fn()

      const ActionButton = defineComponent({
        name: 'ActionButton',
        props: {
          label: { type: String, default: '' },
          disabled: { type: Boolean, default: false }
        },
        setup(buttonProps, { expose }) {
          const domRef = ref<HTMLButtonElement>()
          expose({
            focusButton: () => domRef.value?.focus(),
            getButtonLabel: () => buttonProps.label
          })

          return () => h(
            'button',
            {
              ref: domRef,
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
        onClick: onClickStorage
      })

      const props = reactive<ComponentOutletProps>({
        ...defaultsComponentOutlet,
        name: 'action-button',
        props: {
          label: 'Execute Task',
          onClick: onClickInstance
        }
      })

      const fixture = mountCompleteOutlet(props, {
        'id': 'task-btn',
        'data-action': 'execute'
      })

      const button = fixture.host.querySelector<HTMLButtonElement>('button.action-button')!
      expect(button).not.toBeNull()
      expect(button.id).toBe('task-btn')
      expect(button.getAttribute('data-action')).toBe('execute')
      expect(button.classList.contains('d1-component-outlet')).toBe(true)
      expect(button.textContent).toBe('Execute Task')

      button.click()
      expect(onClickInstance).toHaveBeenCalledTimes(1)

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
