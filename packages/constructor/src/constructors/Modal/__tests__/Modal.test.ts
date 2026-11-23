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

import { ModalDesign } from '../ModalDesign'
import type { ModalProps } from '../props'
import type {
  ModalClasses,
  ModalComponents,
  ModalExpose,
  ModalSlots
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

/** Mock Window component forwarding slots, ARIA, open state, and expose / Мок-компонент окна */
const WindowMock = defineComponent({
  name: 'WindowMock',
  inheritAttrs: false,
  props: {
    open: Boolean,
    adaptive: String,
    image: String,
    imagePosition: String,
    closeButton: Boolean,
    ariaLabelledby: String,
    ariaDescribedby: String,
    disabled: Boolean,
    autoClose: Boolean,
    disableFocusReturn: Boolean
  },
  emits: ['window'],
  setup(props, { attrs, slots, emit, expose }) {
    const openState = ref(props.open)

    const setOpen = async (value: boolean) => {
      openState.value = value
      emit('window', {
        id: 'modal-window-1',
        element: document.body,
        control: document.body,
        open: value
      })
    }

    expose({
      getId: () => 'modal-window-1',
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
          'data-image': props.image,
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

/** Mock Bars component / Мок-компонент панелей */
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
        'data-bars-mock': 'true',
        'data-back-hide': String(Boolean(props.backHide))
      },
      [
        props.label !== undefined ? h('h2', { id: props.labelId }, String(props.label)) : null,
        props.description !== undefined ? h('p', { id: props.descriptionId }, props.description) : null,
        h('button', {
          type: 'button',
          class: 'bars-back-btn',
          onClick: (event: MouseEvent) => emit('click', event, { type: 'back', value: 'back' })
        }, 'Back')
      ]
    )
  }
})

/** Mock Actions component / Мок-компонент действий */
const ActionsMock = defineComponent({
  name: 'ActionsMock',
  inheritAttrs: false,
  props: {
    list: Array,
    listSecondary: Array
  },
  emits: ['click'],
  setup(props, { attrs, emit }) {
    return () => h(
      'div',
      {
        ...attrs,
        'data-actions-mock': 'true'
      },
      [
        ...((props.list as Array<{ label?: string | number, value?: unknown }> | undefined) ?? []).map((item, index) =>
          h('button', {
            key: `primary-${index}`,
            type: 'button',
            class: 'actions-primary-btn',
            onClick: (event: MouseEvent) => emit('click', event, { type: 'click', value: item.value })
          }, String(item.label ?? ''))),
        ...((props.listSecondary as Array<{ label?: string | number, value?: unknown }> | undefined) ?? []).map((item, index) =>
          h('button', {
            key: `secondary-${index}`,
            type: 'button',
            class: 'actions-secondary-btn',
            onClick: (event: MouseEvent) => emit('click', event, { type: 'click', value: item.value })
          }, String(item.label ?? '')))
      ]
    )
  }
})

/**
 * Mounts full ModalDesign component with mock Window, Bars, and Actions sub-components.
 *
 * Монтирует полный компонент ModalDesign с мок-подкомпонентами Window, Bars и Actions.
 */
function mountModalComponent(options: {
  attrs?: Record<string, unknown>
  initialProps?: ModalProps
  slots?: ModalSlots
} = {}) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  cleanups.push(() => host.remove())

  const props = reactive<ModalProps>({
    barsBackHide: true,
    ...options.initialProps
  })
  const emitted: Array<{ type: string, args: unknown[] }> = []
  let exposed!: ModalExpose

  const ModalComponent = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-modal': true,
          [`d1-modal--imagePosition--${props.imagePosition ?? 'top'}`]: true
        }
      }))
      const stylesToken = computed<ConstrStyles>(() => ({
        '--modal-gap': '12px'
      }))

      const design = new ModalDesign<
        ModalComponents,
        ModalExpose,
        ModalClasses,
        ModalProps
      >(
        'd1.modal',
        props,
        {
          classes: classesToken,
          styles: stylesToken,
          components: {
            window: WindowMock,
            bars: BarsMock,
            actions: ActionsMock
          },
          emits: (type: string, ...args: unknown[]) => {
            emitted.push({ type, args })
          }
        }
      )

      exposed = design.expose()
      return design.render()
    }
  })

  const Wrapper = defineComponent({
    setup() {
      return () => h(ModalComponent, options.attrs ?? {}, options.slots as Record<string, unknown>)
    }
  })

  const app = createApp(Wrapper)
  app.mount(host)
  cleanups.push(() => app.unmount())

  return { host, props, emitted, getExpose: () => exposed }
}

describe('Modal (Component Integration)', () => {
  it('should render full modal hierarchy with Window, Bars, Actions, ARIA linkage, and merged attrs', async () => {
    const { host } = mountModalComponent({
      attrs: {
        'class': 'external-modal',
        'data-testid': 'full-modal',
        'style': { zIndex: '100' }
      },
      initialProps: {
        open: true,
        barsLabel: 'Confirm Settings',
        barsDescription: 'Review your changes before saving.',
        image: '/banner.png',
        imagePosition: 'left',
        actionsList: [{ label: 'Save', value: 'save' }],
        actionsSecondary: [{ label: 'Reset', value: 'reset' }]
      },
      slots: {
        control: () => h('button', { class: 'trigger-btn' }, 'Open Modal'),
        title: () => h('span', { class: 'custom-title' }, 'Extra Title'),
        header: () => h('div', { class: 'custom-header' }, 'Header Banner'),
        default: () => h('p', { class: 'custom-body' }, 'Body Content'),
        footer: () => h('div', { class: 'custom-footer' }, 'Footer Note')
      }
    })

    await nextTick()

    const windowRoot = host.querySelector('[data-window-mock]') as HTMLElement
    expect(windowRoot).not.toBeNull()
    expect(windowRoot.classList.contains('d1-modal')).toBe(true)
    expect(windowRoot.classList.contains('external-modal')).toBe(true)
    expect(windowRoot.getAttribute('data-testid')).toBe('full-modal')
    expect(windowRoot.getAttribute('data-open')).toBe('true')
    expect(windowRoot.getAttribute('data-adaptive')).toBe('modal')
    expect(windowRoot.getAttribute('data-image')).toBe('/banner.png')
    expect(windowRoot.getAttribute('data-image-position')).toBe('left')
    expect(windowRoot.getAttribute('data-close-button')).toBe('true')
    expect(windowRoot.style.zIndex).toBe('100')

    // ARIA labelledby/describedby match Bars heading and description IDs
    const labelledBy = windowRoot.getAttribute('aria-labelledby')
    const describedBy = windowRoot.getAttribute('aria-describedby')
    expect(labelledBy).toBeTruthy()
    expect(describedBy).toBeTruthy()
    expect(host.querySelector(`#${labelledBy}`)?.textContent).toBe('Confirm Settings')
    expect(host.querySelector(`#${describedBy}`)?.textContent).toBe('Review your changes before saving.')

    // All slots and subcomponents rendered
    expect(host.querySelector('.trigger-btn')?.textContent).toBe('Open Modal')
    expect(host.querySelector('.d1-modal__title .custom-title')?.textContent).toBe('Extra Title')
    expect(host.querySelector('.d1-modal__header .custom-header')?.textContent).toBe('Header Banner')
    expect(host.querySelector('.d1-modal__body .custom-body')?.textContent).toBe('Body Content')
    expect(host.querySelector('.d1-modal__footer .custom-footer')?.textContent).toBe('Footer Note')
    expect(host.querySelector('.actions-primary-btn')?.textContent).toBe('Save')
    expect(host.querySelector('.actions-secondary-btn')?.textContent).toBe('Reset')
  })

  it('should emit window, update:open, update:modelOpen, bars, barsBack, actions, and actionsLite events', async () => {
    const { host, emitted, getExpose } = mountModalComponent({
      initialProps: {
        barsLabel: 'Events Modal',
        actionsList: [{ label: 'Apply', value: 'apply' }]
      }
    })

    await nextTick()

    await getExpose().toOpen()
    await nextTick()
    expect(emitted.some(item => item.type === 'update:open' && item.args[0] === true)).toBe(true)
    expect(emitted.some(item => item.type === 'update:modelOpen' && item.args[0] === true)).toBe(true)
    expect(emitted.some(item => item.type === 'window')).toBe(true)

    const backButton = host.querySelector('.bars-back-btn') as HTMLButtonElement
    backButton.click()
    expect(emitted.some(item => item.type === 'bars')).toBe(true)
    expect(emitted.some(item => item.type === 'barsLite')).toBe(true)
    expect(emitted.some(item => item.type === 'barsBack')).toBe(true)

    const actionButton = host.querySelector('.actions-primary-btn') as HTMLButtonElement
    actionButton.click()
    expect(emitted.some(item => item.type === 'actions')).toBe(true)
    expect(emitted.some(item => item.type === 'actionsLite')).toBe(true)
  })

  it('should omit Bars and Actions when hidden or empty and mount them reactively when props update', async () => {
    const { host, props } = mountModalComponent({
      initialProps: {
        barsBackHide: true
      },
      slots: {
        default: () => h('p', 'Minimal Modal')
      }
    })

    await nextTick()
    expect(host.querySelector('[data-bars-mock]')).toBeNull()
    expect(host.querySelector('[data-actions-mock]')).toBeNull()

    props.barsLabel = 0
    props.actionsList = [{ label: 0, value: 0 }]
    await nextTick()

    expect(host.querySelector('[data-bars-mock] h2')?.textContent).toBe('0')
    expect(host.querySelector('.actions-primary-btn')?.textContent).toBe('0')
  })
})
