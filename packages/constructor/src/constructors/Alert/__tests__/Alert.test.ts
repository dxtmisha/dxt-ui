// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  nextTick,
  type PropType,
  reactive
} from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { Alert } from '../Alert'
import { AlertDesign } from '../AlertDesign'
import type { AlertProps } from '../props'
import type {
  AlertClasses,
  AlertComponents,
  AlertExpose,
  AlertSlots
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

/** Mock AlertLink component / Мок компонента ссылки оповещения */
const AlertLinkMock = defineComponent({
  name: 'AlertLinkMock',
  inheritAttrs: false,
  props: {
    label: [String, Number],
    href: String,
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
      'a',
      {
        ...attrs,
        class: props.class,
        href: props.href,
        onClick: handleClick
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
      { ...attrs, class: props.class },
      [
        ...(props.list ?? []).map((item, index) => h('button', { key: `p-${index}`, class: 'mock-action-primary', onClick: triggerItem(item) }, item.label)),
        ...(props.listSecondary ?? []).map((item, index) => h('button', { key: `s-${index}`, class: 'mock-action-secondary', onClick: triggerItem(item) }, item.label))
      ]
    )
  }
})

/**
 * Mounts integrated AlertDesign component with mock child components.
 *
 * Монтирует интегрированный компонент AlertDesign с моками дочерних компонентов.
 */
function mountAlertComponent(options: {
  attrs?: Record<string, unknown>
  initialProps?: AlertProps
  slots?: AlertSlots
} = {}) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  cleanups.push(() => host.remove())

  const props = reactive<AlertProps>({ role: 'alert', itemCenter: true, ...options.initialProps })
  const emitted: Array<{ type: string, args: unknown[] }> = []

  const AlertComponent = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-alert': true,
          'd1-alert--itemCenter': props.itemCenter
        }
      }))
      const stylesToken = computed<ConstrStyles>(() => ({
        '--d1-alert-linkGap': '8px'
      }))

      const design = new AlertDesign<
        AlertComponents,
        AlertExpose,
        AlertClasses,
        AlertProps
      >(
        'd1.alert',
        props,
        {
          classes: classesToken,
          components: {
            actions: ActionsMock,
            alertLink: AlertLinkMock,
            button: ButtonMock,
            icon: IconMock
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
      return () => h(AlertComponent, options.attrs ?? {}, options.slots as any)
    }
  })

  const app = createApp(Wrapper)
  app.mount(host)
  cleanups.push(() => app.unmount())

  return { emitted, host, props }
}

describe('Alert (Component Integration)', () => {
  it('should render full alert anatomy: icons, label, description, slots, links, actions, button, and closeButton', async () => {
    const { emitted, host } = mountAlertComponent({
      initialProps: {
        icon: 'info',
        iconTrailing: 'star',
        label: 'System Update',
        labelId: 'alert-title',
        description: 'Restart required to finish installation.',
        descriptionId: 'alert-desc',
        ariaLive: 'polite',
        button: { label: 'Restart', value: 'restart' },
        closeButton: true,
        iconClose: 'close',
        textClose: 'Close notification',
        links: [
          { label: 'Release notes', href: '#', value: 'notes' },
          { label: 'Docs', href: '#', value: 'docs' }
        ],
        actionsList: [{ label: 'Confirm', value: 'confirm' }],
        actionsSecondary: [{ label: 'Later', value: 'later' }]
      },
      slots: {
        body: () => [h('p', { class: 'slot-body' }, 'Body Slot')],
        trailing: () => [h('span', { class: 'slot-trailing' }, 'Trailing Slot')]
      }
    })

    await nextTick()

    const root = host.querySelector('.d1-alert') as HTMLDivElement
    expect(root).not.toBeNull()
    expect(root.getAttribute('role')).toBe('alert')
    expect(root.getAttribute('aria-live')).toBe('polite')
    expect(root.getAttribute('aria-labelledby')).toBe('alert-title')
    expect(root.getAttribute('aria-describedby')).toBe('alert-desc')

    expect(root.querySelector('[data-icon="info"]')).not.toBeNull()
    expect(root.querySelector('[data-icon="star"]')).not.toBeNull()
    expect(root.querySelector('.d1-alert__label')?.textContent).toBe('System Update')
    expect(root.querySelector('.d1-alert__description')?.textContent).toBe('Restart required to finish installation.')
    expect(root.querySelector('.d1-alert__body .slot-body')?.textContent).toBe('Body Slot')
    expect(root.querySelector('.d1-alert__trailing .slot-trailing')?.textContent).toBe('Trailing Slot')

    // Click trailing button -> emits click & clickLite (and no duplicate class)
    const trailingButton = root.querySelector('.d1-alert__trailing button') as HTMLButtonElement
    expect(trailingButton.className.split(/\s+/).filter(name => name === 'd1-alert__button')).toHaveLength(1)
    trailingButton.click()
    expect(emitted.some(entry => entry.type === 'click')).toBe(true)
    expect(emitted.some(entry => entry.type === 'clickLite')).toBe(true)

    // Click link -> emits link & linkLite
    const linkAnchor = root.querySelector('.d1-alert__links a') as HTMLAnchorElement
    linkAnchor.click()
    expect(emitted.some(entry => entry.type === 'link')).toBe(true)
    expect(emitted.some(entry => entry.type === 'linkLite')).toBe(true)

    // Click action -> emits actions & actionsLite
    const actionButton = root.querySelector('.mock-action-primary') as HTMLButtonElement
    actionButton.click()
    expect(emitted.some(entry => entry.type === 'actions')).toBe(true)
    expect(emitted.some(entry => entry.type === 'actionsLite')).toBe(true)

    // Close flow: click close -> --hide class -> opacity transitionend -> removed from DOM + emits close
    const closeButton = root.querySelector('.d1-alert__buttonClose') as HTMLButtonElement
    expect(closeButton).not.toBeNull()
    expect(closeButton.getAttribute('aria-label')).toBe('Close notification')
    closeButton.click()
    await nextTick()

    expect(root.classList.contains('d1-alert--hide')).toBe(true)
    expect(host.querySelector('.d1-alert')).not.toBeNull()

    // Bubbled child opacity transition must be ignored
    const childEvent = new TransitionEvent('transitionend', { propertyName: 'opacity', bubbles: true })
    closeButton.dispatchEvent(childEvent)
    await nextTick()
    expect(host.querySelector('.d1-alert')).not.toBeNull()
    expect(emitted.filter(entry => entry.type === 'close')).toHaveLength(0)

    // Root opacity transitionend completes dismissal
    root.dispatchEvent(new TransitionEvent('transitionend', { propertyName: 'opacity' }))
    await nextTick()
    expect(host.querySelector('.d1-alert')).toBeNull()
    expect(emitted.filter(entry => entry.type === 'close')).toHaveLength(1)
  })

  it('should render numeric 0 label, description, and button and omit empty links/trailing wrappers', async () => {
    const { host } = mountAlertComponent({
      initialProps: {
        label: 0,
        description: 0,
        button: 0,
        links: []
      }
    })

    await nextTick()

    expect(host.querySelector('.d1-alert__label')?.textContent).toBe('0')
    expect(host.querySelector('.d1-alert__description')?.textContent).toBe('0')
    expect(host.querySelector('.d1-alert__trailing button')?.textContent).toBe('0')
    expect(host.querySelector('.d1-alert__links')).toBeNull()
    expect(host.querySelector('.d1-alert__actions')).toBeNull()
    expect(host.querySelector('.d1-alert__buttonClose')).toBeNull()
  })

  it('should keep optional helpers lazy on a minimal alert until props activate them', async () => {
    let trackedAlert!: Alert

    class InspectedAlertDesign extends AlertDesign<
      AlertComponents,
      AlertExpose,
      AlertClasses,
      AlertProps
    > {
      constructor(name: string, props: Readonly<AlertProps>) {
        super(name, props, {
          components: {
            actions: ActionsMock,
            alertLink: AlertLinkMock,
            button: ButtonMock,
            icon: IconMock
          }
        })
        trackedAlert = this.item
      }
    }

    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const props = reactive<AlertProps>({ role: 'alert' })
    const app = createApp({
      setup() {
        const design = new InspectedAlertDesign('d1.alert', props)
        return design.render()
      }
    })

    app.mount(host)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect(trackedAlert.hasInstance('icon')).toBe(false)
    expect(trackedAlert.hasInstance('label')).toBe(false)
    expect(trackedAlert.hasInstance('description')).toBe(false)
    expect(trackedAlert.hasInstance('link')).toBe(false)
    expect(trackedAlert.hasInstance('actions')).toBe(false)
    expect(trackedAlert.hasInstance('button')).toBe(false)
    expect(trackedAlert.hasInstance('buttonClose')).toBe(false)
    expect(trackedAlert.hasInstance('hide')).toBe(false)

    props.label = 'Dynamic Title'
    props.closeButton = true
    props.iconClose = 'close'
    await nextTick()

    expect(trackedAlert.hasInstance('label')).toBe(true)
    expect(trackedAlert.hasInstance('buttonClose')).toBe(true)
    expect(host.querySelector('.d1-alert__buttonClose')).not.toBeNull()

    props.closeButton = false
    await nextTick()
    expect(host.querySelector('.d1-alert__buttonClose')).toBeNull()
  })
})
