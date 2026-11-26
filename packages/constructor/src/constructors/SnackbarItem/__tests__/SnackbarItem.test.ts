// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  inject,
  nextTick,
  type PropType,
  reactive,
  type Ref
} from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { AREA_PROP_NAME } from '../../../types/areaTypes'
import { SnackbarItem } from '../SnackbarItem'
import { SnackbarItemDesign } from '../SnackbarItemDesign'
import type { SnackbarItemProps } from '../props'
import type {
  SnackbarItemClasses,
  SnackbarItemComponents,
  SnackbarItemExpose,
  SnackbarItemSlots
} from '../types'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

/** Mock Icon component / Мок компонента иконки */
const IconMock = defineComponent({
  name: 'IconMock',
  inheritAttrs: false,
  props: {
    icon: [String, Object],
    class: [String, Array, Object]
  },
  setup(props, { attrs }) {
    return () => h('span', {
      ...attrs,
      'class': props.class,
      'data-icon': typeof props.icon === 'string' ? props.icon : 'object-icon'
    })
  }
})

/** Mock Button component invoking merged onClick handlers / Мок компонента кнопки */
const ButtonMock = defineComponent({
  name: 'ButtonMock',
  inheritAttrs: false,
  props: {
    label: [String, Number],
    icon: [String, Object],
    value: [String, Number],
    class: [String, Array, Object],
    onClick: [Function, Array] as PropType<((event: MouseEvent, value?: any) => void) | Array<(event: MouseEvent, value?: any) => void>>
  },
  setup(props, { attrs }) {
    const handleClick = (event: MouseEvent) => {
      const payload = { type: 'click', value: props.value ?? props.label, detail: undefined }

      if (Array.isArray(props.onClick)) {
        props.onClick.forEach(handler => handler?.(event, payload))
      } else {
        props.onClick?.(event, payload)
      }
    }

    return () => h(
      'button',
      {
        ...attrs,
        'class': props.class,
        'data-icon': typeof props.icon === 'string' ? props.icon : undefined,
        'onClick': handleClick
      },
      props.label !== undefined ? String(props.label) : ''
    )
  }
})

/** Mock Actions component / Мок компонента действий */
const ActionsMock = defineComponent({
  name: 'ActionsMock',
  inheritAttrs: false,
  props: {
    align: String,
    list: Array as PropType<Array<Record<string, any>>>,
    listSecondary: Array as PropType<Array<Record<string, any>>>,
    class: [String, Array, Object],
    onClick: [Function, Array] as PropType<((event: MouseEvent, value?: any) => void) | Array<(event: MouseEvent, value?: any) => void>>
  },
  setup(props, { attrs }) {
    const triggerItem = (item: Record<string, any>) => (event: MouseEvent) => {
      const payload = { type: 'click', value: item.value ?? item.label, detail: undefined }

      if (Array.isArray(props.onClick)) {
        props.onClick.forEach(handler => handler?.(event, payload))
      } else {
        props.onClick?.(event, payload)
      }
    }

    return () => h(
      'div',
      {
        ...attrs,
        'class': props.class,
        'data-align': props.align
      },
      [
        ...(props.list ?? []).map((item, index) => h('button', { key: `p-${index}`, class: 'mock-action-primary', onClick: triggerItem(item) }, item.label)),
        ...(props.listSecondary ?? []).map((item, index) => h('button', { key: `s-${index}`, class: 'mock-action-secondary', onClick: triggerItem(item) }, item.label))
      ]
    )
  }
})

/**
 * Mounts integrated SnackbarItemDesign component with mock child components.
 *
 * Монтирует интегрированный компонент SnackbarItemDesign с моками дочерних компонентов.
 */
function mountSnackbarItemComponent(options: {
  attrs?: Record<string, unknown>
  initialProps?: SnackbarItemProps
  slots?: SnackbarItemSlots
} = {}) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  cleanups.push(() => host.remove())

  const props = reactive<SnackbarItemProps>({
    area: 'snackbar',
    closeButton: true,
    ...options.initialProps
  })
  const emitted: Array<{ type: string, args: unknown[] }> = []

  const SnackbarItemComponent = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-snackbarItem': true,
          'd1-snackbarItem--success': props.success,
          'd1-snackbarItem--error': props.error
        }
      }))
      const stylesToken = computed<ConstrStyles>(() => ({
        '--d1-snackbarItem-gap': '12px'
      }))

      const design = new SnackbarItemDesign<
        SnackbarItemComponents,
        SnackbarItemExpose,
        SnackbarItemClasses,
        SnackbarItemProps
      >(
        'd1.snackbarItem',
        props,
        {
          classes: classesToken,
          components: {
            actions: ActionsMock,
            button: ButtonMock,
            icon: IconMock
          },
          compMod: {
            'button-close': {
              'data-close-mod': 'applied'
            }
          },
          emits: (type: string, ...args: unknown[]) => {
            emitted.push({ type, args })
          },
          styles: stylesToken
        }
      )

      return design.render()
    }
  })

  const Wrapper = defineComponent({
    setup() {
      return () => h(SnackbarItemComponent, options.attrs ?? {}, options.slots as any)
    }
  })

  const app = createApp(Wrapper)
  app.mount(host)
  cleanups.push(() => app.unmount())

  return { emitted, host, props }
}

describe('SnackbarItem (Component Integration)', () => {
  describe('Full anatomy, events, and ARIA live region', () => {
    it('should render full snackbar item anatomy: icons, label, description, body (html/slot/component), button, closeButton, and actions', async () => {
      const CustomBodyComponent = defineComponent({
        name: 'CustomBodyComponent',
        props: {
          message: String
        },
        setup(props) {
          return () => h('p', { class: 'custom-body-component' }, props.message)
        }
      })

      const { emitted, host } = mountSnackbarItemComponent({
        initialProps: {
          value: 'toast-42',
          success: true,
          icon: 'check_circle',
          iconTrailing: 'star',
          label: 'Saved',
          description: 'Changes have been synced.',
          html: '<strong class="html-body">HTML Detail</strong>',
          component: CustomBodyComponent,
          componentProps: { message: 'Injected Vue Component' },
          button: { label: 'Undo', value: 'undo' },
          closeButton: true,
          iconClose: 'close',
          textClose: 'Dismiss notification',
          actionsList: [{ label: 'View', value: 'view' }],
          actionsSecondary: [{ label: 'Ignore', value: 'ignore' }]
        },
        slots: {
          body: () => [h('span', { class: 'slot-body' }, 'Body Slot Content')]
        }
      })

      await nextTick()

      const root = host.querySelector('.d1-snackbarItem') as HTMLDivElement
      expect(root).not.toBeNull()
      expect(root.classList.contains('d1-snackbarItem--success')).toBe(true)
      expect(root.getAttribute('aria-atomic')).toBe('true')
      expect(root.getAttribute('role')).toBe('status')
      expect(root.getAttribute('aria-live')).toBe('polite')

      expect(root.querySelector('.d1-snackbarItem__tool')).not.toBeNull()
      expect(root.querySelector('.d1-snackbarItem__context')).not.toBeNull()
      expect(root.querySelector('[data-icon="check_circle"]')).not.toBeNull()
      expect(root.querySelector('[data-icon="star"]')).not.toBeNull()
      expect(root.querySelector('.d1-snackbarItem__label')?.textContent).toBe('Saved')
      expect(root.querySelector('.d1-snackbarItem__description')?.textContent).toBe('Changes have been synced.')

      // Body variants: html, slot, custom component
      expect(root.querySelector('.d1-snackbarItem__body .html-body')?.textContent).toBe('HTML Detail')
      expect(root.querySelector('.d1-snackbarItem__body .slot-body')?.textContent).toBe('Body Slot Content')
      expect(root.querySelector('.d1-snackbarItem__body .custom-body-component')?.textContent).toBe('Injected Vue Component')

      // Action button click -> emits click & clickLite
      const actionButton = root.querySelector('.d1-snackbarItem__button:not(.d1-snackbarItem__close)') as HTMLButtonElement
      expect(actionButton).not.toBeNull()
      expect(actionButton.textContent).toBe('Undo')
      actionButton.click()
      expect(emitted.some(entry => entry.type === 'click')).toBe(true)
      expect(emitted.some(entry => entry.type === 'clickLite')).toBe(true)

      // Close button -> has compMod['button-close'], aria-label, emits close with props.value
      const closeButton = root.querySelector('.d1-snackbarItem__close') as HTMLButtonElement
      expect(closeButton).not.toBeNull()
      expect(closeButton.getAttribute('aria-label')).toBe('Dismiss notification')
      expect(closeButton.getAttribute('data-close-mod')).toBe('applied')
      closeButton.click()
      expect(emitted.filter(entry => entry.type === 'close')).toEqual([
        { type: 'close', args: ['toast-42'] }
      ])

      // Actions -> align="left", emits actions & actionsLite
      const actionsContainer = root.querySelector('.d1-snackbarItem__actions') as HTMLDivElement
      expect(actionsContainer).not.toBeNull()
      expect(actionsContainer.getAttribute('data-align')).toBe('left')
      ;(actionsContainer.querySelector('.mock-action-primary') as HTMLButtonElement).click()
      expect(emitted.some(entry => entry.type === 'actions')).toBe(true)
      expect(emitted.some(entry => entry.type === 'actionsLite')).toBe(true)
    })

    it('should set assertive alert ARIA for error notifications and respect explicit ARIA overrides', async () => {
      const { host, props } = mountSnackbarItemComponent({
        initialProps: {
          error: true,
          label: 'Network Error'
        }
      })

      await nextTick()

      const root = host.querySelector('.d1-snackbarItem') as HTMLDivElement
      expect(root.getAttribute('role')).toBe('alert')
      expect(root.getAttribute('aria-live')).toBe('assertive')
      expect(root.getAttribute('aria-atomic')).toBe('true')

      props.role = 'status'
      props.ariaLive = 'polite'
      await nextTick()

      expect(root.getAttribute('role')).toBe('status')
      expect(root.getAttribute('aria-live')).toBe('polite')
    })
  })

  describe('AreaInclude provide/inject propagation', () => {
    it('should provide reactive area context to descendant slot components', async () => {
      let injectedArea: Ref<string | undefined> | undefined

      const AreaConsumer = defineComponent({
        setup() {
          injectedArea = inject<Ref<string | undefined>>(AREA_PROP_NAME)
          return () => h('span', { class: 'area-value' }, injectedArea?.value ?? 'none')
        }
      })

      const { host, props } = mountSnackbarItemComponent({
        initialProps: {
          area: 'snackbar'
        },
        slots: {
          body: () => [h(AreaConsumer)]
        }
      })

      await nextTick()
      expect(host.querySelector('.area-value')?.textContent).toBe('snackbar')

      props.area = 'snackbar-urgent'
      await nextTick()
      expect(host.querySelector('.area-value')?.textContent).toBe('snackbar-urgent')
    })
  })

  describe('Boundary values, numeric 0, Unicode, and lazy instantiation', () => {
    it('should render numeric 0 for label, description, and button and handle string button', async () => {
      const { host, props } = mountSnackbarItemComponent({
        initialProps: {
          label: 0,
          description: 0,
          button: 0,
          closeButton: false
        }
      })

      await nextTick()

      expect(host.querySelector('.d1-snackbarItem__label')?.textContent).toBe('0')
      expect(host.querySelector('.d1-snackbarItem__description')?.textContent).toBe('0')
      expect(host.querySelector('.d1-snackbarItem__button')?.textContent).toBe('0')
      expect(host.querySelector('.d1-snackbarItem__close')).toBeNull()
      expect(host.querySelector('.d1-snackbarItem__actions')).toBeNull()

      props.button = 'Повторить • Thử lại 🚀'
      await nextTick()
      expect(host.querySelector('.d1-snackbarItem__button')?.textContent).toBe('Повторить • Thử lại 🚀')

      props.button = ''
      await nextTick()
      expect(host.querySelector('.d1-snackbarItem__button')).toBeNull()

      // String HTML tag component is also supported cleanly
      props.component = 'output'
      props.componentProps = { 'data-tag-body': 'yes' }
      await nextTick()
      expect(host.querySelector('.d1-snackbarItem__body output[data-tag-body="yes"]')).not.toBeNull()
    })

    it('should keep optional helpers lazy on a minimal snackbar item until props activate them', async () => {
      let trackedItem!: SnackbarItem

      class InspectedSnackbarItemDesign extends SnackbarItemDesign<
        SnackbarItemComponents,
        SnackbarItemExpose,
        SnackbarItemClasses,
        SnackbarItemProps
      > {
        constructor(name: string, props: Readonly<SnackbarItemProps>) {
          super(name, props, {
            components: {
              actions: ActionsMock,
              button: ButtonMock,
              icon: IconMock
            }
          })
          trackedItem = this.item
        }
      }

      const host = document.createElement('div')
      document.body.appendChild(host)
      cleanups.push(() => host.remove())

      const props = reactive<SnackbarItemProps>({
        area: 'snackbar',
        closeButton: false
      })
      const app = createApp({
        setup() {
          const design = new InspectedSnackbarItemDesign('d1.snackbarItem', props)
          return design.render()
        }
      })

      app.mount(host)
      cleanups.push(() => app.unmount())
      await nextTick()

      // Area is eagerly initialized during setup; all optional inclusions stay lazy
      expect(trackedItem.hasInstance('area')).toBe(true)
      expect(trackedItem.hasInstance('actions')).toBe(false)
      expect(trackedItem.hasInstance('button')).toBe(false)
      expect(trackedItem.hasInstance('buttonClose')).toBe(false)
      expect(trackedItem.hasInstance('description')).toBe(false)
      expect(trackedItem.hasInstance('event')).toBe(false)
      expect(trackedItem.hasInstance('icon')).toBe(false)
      expect(trackedItem.hasInstance('label')).toBe(false)
      expect(trackedItem.hasInstance('text')).toBe(false)

      // Activate label, closeButton, and button reactively
      props.label = 'Dynamic Toast'
      props.closeButton = true
      props.iconClose = 'close'
      props.button = 'Retry'
      await nextTick()

      expect(trackedItem.hasInstance('label')).toBe(true)
      expect(trackedItem.hasInstance('buttonClose')).toBe(true)
      expect(trackedItem.hasInstance('button')).toBe(true)
      expect(trackedItem.hasInstance('event')).toBe(true)
      expect(trackedItem.hasInstance('text')).toBe(true)
      expect(host.querySelector('.d1-snackbarItem__close')).not.toBeNull()

      // Deactivating closeButton hides the button cleanly
      props.closeButton = false
      await nextTick()
      expect(host.querySelector('.d1-snackbarItem__close')).toBeNull()
    })
  })
})
