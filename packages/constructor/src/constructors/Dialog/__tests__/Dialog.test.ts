// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  nextTick,
  reactive,
  ref
} from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { DialogDesign } from '../DialogDesign'
import { defaultsDialog, type DialogProps } from '../props'
import type {
  DialogClasses,
  DialogComponents,
  DialogExpose,
  DialogSlots
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.useRealTimers()
  vi.restoreAllMocks()
})

const WindowMock = defineComponent({
  name: 'WindowMock',
  inheritAttrs: false,
  props: {
    open: Boolean,
    adaptive: String,
    image: [String, Object],
    imagePosition: String,
    closeButton: Boolean,
    ariaLabelledby: String,
    ariaDescribedby: String
  },
  emits: ['window'],
  setup(props, { attrs, slots, emit, expose }) {
    const openState = ref(props.open)

    const setOpen = async (value: boolean) => {
      openState.value = value
      emit('window', {
        id: 'dialog-window-1',
        element: document.body,
        control: document.body,
        open: value
      })
    }

    expose({
      getId: () => 'dialog-window-1',
      getOpen: () => Boolean(props.open || openState.value),
      getControl: () => ({ open: Boolean(props.open || openState.value) }),
      setOpen,
      toOpen: () => setOpen(true),
      toClose: () => setOpen(false),
      toggle: () => setOpen(!(props.open || openState.value))
    })

    return () => {
      const currentOpen = Boolean(props.open || openState.value)
      const controlData = {
        open: currentOpen,
        binds: { onClick: () => setOpen(!currentOpen) }
      }

      return h(
        'div',
        {
          ...attrs,
          'data-window-mock': 'true',
          'data-open': String(currentOpen),
          'data-adaptive': props.adaptive,
          'data-image': typeof props.image === 'string' ? props.image : '',
          'data-image-position': props.imagePosition,
          'data-close-button': String(Boolean(props.closeButton)),
          'aria-labelledby': props.ariaLabelledby,
          'aria-describedby': props.ariaDescribedby
        },
        [
          h('div', { class: 'window-control-slot' }, slots.control?.(controlData)),
          h('div', { class: 'window-title-slot' }, slots.title?.(controlData)),
          h('div', { class: 'window-default-slot' }, slots.default?.(controlData)),
          h('div', { class: 'window-footer-slot' }, slots.footer?.(controlData))
        ]
      )
    }
  }
})

const BarsMock = defineComponent({
  name: 'BarsMock',
  inheritAttrs: false,
  props: {
    label: [String, Number],
    description: String,
    labelId: String,
    descriptionId: String,
    backHide: Boolean,
    bars: Array
  },
  emits: ['click'],
  setup(props, { attrs, emit }) {
    return () => h(
      'div',
      {
        ...attrs,
        'data-bars-mock': 'true'
      },
      [
        props.label !== undefined ? h('h2', { id: props.labelId }, String(props.label)) : null,
        props.description !== undefined ? h('p', { id: props.descriptionId }, props.description) : null,
        h('button', {
          'type': 'button',
          'data-testid': 'bars-back-btn',
          'onClick': (event: MouseEvent) => emit('click', event, { type: 'back', value: 'back' })
        }, 'Back')
      ]
    )
  }
})

const ActionsMock = defineComponent({
  name: 'ActionsMock',
  inheritAttrs: false,
  props: {
    align: String,
    list: Array,
    listSecondary: Array
  },
  emits: ['click'],
  setup(props, { attrs, emit }) {
    return () => h(
      'div',
      {
        ...attrs,
        'data-actions-mock': 'true',
        'data-align': props.align
      },
      ((props.list as Array<{
        label?: string | number
        value?: string | number
        class?: unknown
        onClick?: () => void
      }> | undefined) ?? []).map((item, index) =>
        h('button', {
          'key': index,
          'type': 'button',
          'data-action-value': String(item.value ?? ''),
          'class': item.class,
          'onClick': (event: MouseEvent) => {
            item.onClick?.()
            emit('click', event, { type: 'click', value: item.value })
          }
        }, String(item.label ?? '')))
    )
  }
})

const IconMock = defineComponent({
  name: 'IconMock',
  inheritAttrs: false,
  props: {
    icon: [String, Object],
    size: String
  },
  setup(props, { attrs }) {
    return () => h('span', {
      ...attrs,
      'data-icon-mock': 'true',
      'data-icon': typeof props.icon === 'string' ? props.icon : '',
      'data-size': props.size
    })
  }
})

const mountDialog = (
  initialProps: DialogProps = {},
  slots: DialogSlots = {},
  attrs: Record<string, unknown> = {}
) => {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const props = reactive<DialogProps>({
    ...(defaultsDialog as DialogProps),
    iconSuccess: 'check_circle',
    iconError: 'error',
    iconAttrs: { size: '4xl' },
    ...initialProps
  })
  const emitted: Array<{ name: string, payload: unknown[] }> = []
  let exposedApi: DialogExpose | undefined

  const Inner = defineComponent({
    inheritAttrs: false,
    setup() {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-dialog': true,
          'd1-dialog--success': Boolean(props.success),
          'd1-dialog--error': Boolean(props.error)
        }
      }))
      const styles = computed<ConstrStyles>(() => ({}))

      const design = new DialogDesign<
        DialogComponents,
        DialogExpose,
        DialogClasses,
        DialogProps
      >(
        'd1.dialog',
        props,
        {
          classes,
          styles,
          emits: ((name: string, ...payload: unknown[]) => {
            emitted.push({ name, payload })
          }) as never,
          components: {
            window: WindowMock,
            bars: BarsMock,
            actions: ActionsMock,
            icon: IconMock
          }
        }
      )

      exposedApi = design.expose()
      return design.render()
    }
  })

  const Host = defineComponent({
    setup() {
      return () => h(Inner, attrs, slots as Record<string, () => unknown>)
    }
  })

  const app = createApp(Host)
  app.mount(container)
  cleanups.push(() => {
    app.unmount()
    container.remove()
  })

  return { container, props, emitted, exposedApi: exposedApi! }
}

describe('Dialog (integration)', () => {
  it('should render full Dialog hierarchy with icon, label, description, ARIA linkage, actions, and all slots', () => {
    const { container } = mountDialog(
      {
        open: true,
        success: true,
        label: 'Operation Successful',
        description: 'Your changes have been saved.',
        image: '/banner.png',
        imagePosition: 'left',
        closeButton: true
      },
      {
        control: () => h('button', { type: 'button' }, 'Open Dialog'),
        title: () => h('span', 'Extra Title'),
        header: () => h('div', 'Header Note'),
        default: () => h('p', 'Dialog Body Content'),
        footer: () => h('span', 'Extra Footer')
      },
      {
        'class': 'host-dialog-class',
        'data-testid': 'dialog-window'
      }
    )

    const windowElement = container.querySelector<HTMLElement>('[data-window-mock="true"]')
    expect(windowElement).not.toBeNull()
    expect(windowElement?.getAttribute('data-open')).toBe('true')
    expect(windowElement?.getAttribute('data-adaptive')).toBe('modal')
    expect(windowElement?.getAttribute('data-image')).toBe('/banner.png')
    expect(windowElement?.getAttribute('data-image-position')).toBe('left')
    expect(windowElement?.getAttribute('data-close-button')).toBe('true')
    expect(windowElement?.className).toContain('host-dialog-class')
    expect(windowElement?.className).toContain('d1-dialog')
    expect(windowElement?.className).toContain('d1-dialog--success')

    const labelledBy = windowElement?.getAttribute('aria-labelledby')
    const describedBy = windowElement?.getAttribute('aria-describedby')
    expect(container.querySelector(`#${labelledBy}`)?.textContent).toBe('Operation Successful')
    expect(container.querySelector(`#${describedBy}`)?.textContent).toBe('Your changes have been saved.')

    const iconElement = container.querySelector<HTMLElement>('[data-icon-mock="true"]')
    expect(iconElement?.getAttribute('data-icon')).toBe('check_circle')
    expect(iconElement?.getAttribute('data-size')).toBe('4xl')

    expect(container.querySelector('.d1-dialog__information')).not.toBeNull()
    expect(container.querySelector('.d1-dialog__title')?.textContent).toBe('Extra Title')
    expect(container.querySelector('.d1-dialog__header')?.textContent).toBe('Header Note')
    expect(container.querySelector('.d1-dialog__body')?.textContent).toBe('Dialog Body Content')
    expect(container.querySelector('.d1-dialog__footer')?.textContent).toBe('Extra Footer')

    // Bars stays hidden by default (barsHide: true)
    expect(container.querySelector('[data-bars-mock="true"]')).toBeNull()

    const actionsElement = container.querySelector('[data-actions-mock="true"]')
    expect(actionsElement?.getAttribute('data-align')).toBe('center')
    expect(actionsElement?.querySelectorAll('button')).toHaveLength(2)
  })

  it('should emit ok, close, actions, bars, and window events and synchronize modelOpen reactively', async () => {
    const { container, props, emitted, exposedApi } = mountDialog({
      modelOpen: true,
      barsHide: false,
      barsLabel: 'Top Bar',
      label: 0,
      description: 0,
      textClose: 'Cancel',
      textOk: 'Confirm'
    })

    expect(container.querySelector('[data-window-mock="true"]')?.getAttribute('data-open')).toBe('true')
    expect(container.querySelector('.d1-dialog__label')?.textContent).toBe('0')
    expect(container.querySelector('.d1-dialog__description')?.textContent).toBe('0')

    const closeBtn = container.querySelector<HTMLButtonElement>('[data-action-value="close"]')
    const okBtn = container.querySelector<HTMLButtonElement>('[data-action-value="ok"]')
    expect(closeBtn?.textContent).toBe('Cancel')
    expect(closeBtn?.className).toContain('d1-window--close')
    expect(okBtn?.textContent).toBe('Confirm')
    expect(okBtn?.className).toContain('d1-window--close')

    closeBtn?.click()
    okBtn?.click()
    container.querySelector<HTMLButtonElement>('[data-testid="bars-back-btn"]')?.click()
    await exposedApi.toClose()
    await nextTick()

    expect(emitted.some(entry => entry.name === 'close')).toBe(true)
    expect(emitted.some(entry => entry.name === 'ok')).toBe(true)
    expect(emitted.some(entry => entry.name === 'actions')).toBe(true)
    expect(emitted.some(entry => entry.name === 'actionsLite')).toBe(true)
    expect(emitted.some(entry => entry.name === 'bars')).toBe(true)
    expect(emitted.some(entry => entry.name === 'barsBack')).toBe(true)
    expect(emitted.some(entry => entry.name === 'window')).toBe(true)
    expect(emitted.some(entry => entry.name === 'update:open' && entry.payload[0] === false)).toBe(true)
    expect(emitted.some(entry => entry.name === 'update:modelOpen' && entry.payload[0] === false)).toBe(true)

    props.modelOpen = false
    await nextTick()
    expect(container.querySelector('[data-window-mock="true"]')?.getAttribute('data-open')).toBe('false')
  })

  it('should render label/description slots, switch error/success/default icons, and handle multilingual Unicode content', async () => {
    const { container, props } = mountDialog(
      {
        open: true,
        error: true,
        clickOkAndClose: false,
        buttonClose: null,
        buttonOk: 'Подтвердить / Xác nhận 🚀'
      },
      {
        label: () => h('strong', 'Tiếng Việt — Подтверждение'),
        description: () => h('em', 'Học tiếng Việt & Привет мир 🔥')
      }
    )

    expect(container.querySelector('[data-icon-mock="true"]')?.getAttribute('data-icon')).toBe('error')
    expect(container.querySelector('.d1-dialog__label strong')?.textContent).toBe('Tiếng Việt — Подтверждение')
    expect(container.querySelector('.d1-dialog__description em')?.textContent).toBe('Học tiếng Việt & Привет мир 🔥')

    const buttons = container.querySelectorAll<HTMLButtonElement>('[data-actions-mock="true"] button')
    expect(buttons).toHaveLength(1)
    expect(buttons[0]?.textContent).toBe('Подтвердить / Xác nhận 🚀')
    expect(buttons[0]?.className).not.toContain('d1-window--close')

    props.error = false
    props.icon = 'help'
    await nextTick()
    expect(container.querySelector('[data-icon-mock="true"]')?.getAttribute('data-icon')).toBe('help')
  })
})
