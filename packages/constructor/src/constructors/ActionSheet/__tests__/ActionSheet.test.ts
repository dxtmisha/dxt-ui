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

import { ActionSheetDesign } from '../ActionSheetDesign'
import type { ActionSheetProps } from '../props'
import type {
  ActionSheetClasses,
  ActionSheetComponents,
  ActionSheetExpose,
  ActionSheetSlots
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
    closeButton: Boolean,
    closeMobileHide: Boolean,
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
        id: 'action-sheet-window-1',
        element: document.body,
        control: document.body,
        open: value
      })
    }

    expose({
      getId: () => 'action-sheet-window-1',
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
          'data-close-button': String(Boolean(props.closeButton)),
          'data-close-mobile-hide': String(Boolean(props.closeMobileHide)),
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
        'data-bars-mock': 'true',
        'data-back-hide': String(Boolean(props.backHide))
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
      ((props.list as Array<{ label?: string | number, value?: unknown }> | undefined) ?? []).map((item, index) =>
        h('button', {
          key: index,
          type: 'button',
          onClick: (event: MouseEvent) => emit('click', event, { type: 'click', value: item.value })
        }, String(item.label ?? '')))
    )
  }
})

const mountActionSheet = (
  initialProps: ActionSheetProps = {},
  slots: ActionSheetSlots = {},
  attrs: Record<string, unknown> = {}
) => {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const props = reactive<ActionSheetProps>({
    barsBackHide: true,
    touchClose: true,
    ...initialProps
  })
  const emitted: Array<{ name: string, payload: unknown[] }> = []
  let exposedApi: ActionSheetExpose | undefined

  const Inner = defineComponent({
    inheritAttrs: false,
    setup() {
      const classes = computed<ConstrClasses>(() => ({
        main: { 'd1-actionSheet': true }
      }))
      const styles = computed<ConstrStyles>(() => ({}))

      const design = new ActionSheetDesign<
        ActionSheetComponents,
        ActionSheetExpose,
        ActionSheetClasses,
        ActionSheetProps
      >(
        'd1.actionSheet',
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
            actions: ActionsMock
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

describe('ActionSheet (integration)', () => {
  it('should render full ActionSheet hierarchy with touch wrapper, Bars, Actions, slots, and ARIA linkage', () => {
    const { container } = mountActionSheet(
      {
        open: true,
        barsLabel: 'Share Options',
        barsDescription: 'Choose an action',
        actionsList: [
          { label: 'Copy Link', value: 'copy' },
          { label: 'Delete', value: 'delete' }
        ]
      },
      {
        control: () => h('button', { type: 'button' }, 'Open Sheet'),
        title: () => h('span', 'Extra Title'),
        header: () => h('div', 'Header Banner'),
        default: () => h('p', 'Sheet Body Content'),
        footer: () => h('span', 'Extra Footer')
      },
      {
        'class': 'host-sheet-class',
        'data-testid': 'sheet-window'
      }
    )

    const windowElement = container.querySelector<HTMLElement>('[data-window-mock="true"]')
    expect(windowElement).not.toBeNull()
    expect(windowElement?.getAttribute('data-open')).toBe('true')
    expect(windowElement?.getAttribute('data-adaptive')).toBe('actionSheetRight')
    expect(windowElement?.getAttribute('data-touch')).toBe('touch')
    expect(windowElement?.getAttribute('data-close-mobile-hide')).toBe('true')
    expect(windowElement?.className).toContain('host-sheet-class')
    expect(windowElement?.className).toContain('d1-actionSheet')

    const labelledBy = windowElement?.getAttribute('aria-labelledby')
    const describedBy = windowElement?.getAttribute('aria-describedby')
    expect(container.querySelector(`#${labelledBy}`)?.textContent).toBe('Share Options')
    expect(container.querySelector(`#${describedBy}`)?.textContent).toBe('Choose an action')

    expect(container.querySelector('.d1-actionSheet__touch')).not.toBeNull()
    expect(container.querySelector('.d1-actionSheet__tab')?.getAttribute('aria-hidden')).toBe('true')
    expect(container.querySelector('.d1-actionSheet__title')?.textContent).toBe('Extra Title')
    expect(container.querySelector('.d1-actionSheet__header')?.textContent).toBe('Header Banner')
    expect(container.querySelector('.d1-actionSheet__body')?.textContent).toBe('Sheet Body Content')
    expect(container.querySelector('.d1-actionSheet__footer')?.textContent).toBe('Extra Footer')

    const actionsElement = container.querySelector('[data-actions-mock="true"]')
    expect(actionsElement?.getAttribute('data-align')).toBe('auto')
    expect(actionsElement?.textContent).toContain('Copy Link')
  })

  it('should synchronize open/modelOpen, forward bars/actions/window events, and support numeric 0 labels', async () => {
    const { container, props, emitted, exposedApi } = mountActionSheet({
      modelOpen: true,
      barsLabel: 0,
      actionsList: [{ label: 0, value: 0 }]
    })

    expect(container.querySelector('[data-window-mock="true"]')?.getAttribute('data-open')).toBe('true')
    expect(container.querySelector('[data-bars-mock="true"] h2')?.textContent).toBe('0')
    expect(container.querySelector('[data-actions-mock="true"] button')?.textContent).toBe('0')

    container.querySelector<HTMLButtonElement>('[data-actions-mock="true"] button')?.click()
    container.querySelector<HTMLButtonElement>('[data-testid="bars-back-btn"]')?.click()
    await exposedApi.toClose()
    await nextTick()

    expect(emitted.some(entry => entry.name === 'actions')).toBe(true)
    expect(emitted.some(entry => entry.name === 'actionsLite')).toBe(true)
    expect(emitted.some(entry => entry.name === 'bars')).toBe(true)
    expect(emitted.some(entry => entry.name === 'barsBack')).toBe(true)
    expect(emitted.some(entry => entry.name === 'window')).toBe(true)

    props.modelOpen = false
    await nextTick()
    expect(container.querySelector('[data-window-mock="true"]')?.getAttribute('data-open')).toBe('false')
  })

  it('should omit touch wrapper when touchClose is false and close on downward swipe when touchClose is true', async () => {
    const { container, props, emitted } = mountActionSheet({
      open: true,
      touchClose: false,
      barsLabel: 'Static Sheet'
    })

    expect(container.querySelector('.d1-actionSheet__touch')).toBeNull()
    expect(container.querySelector('[data-window-mock="true"]')?.getAttribute('data-close-mobile-hide')).toBe('false')

    props.touchClose = true
    await nextTick()

    const touchElement = container.querySelector<HTMLElement>('.d1-actionSheet__touch')
    expect(touchElement).not.toBeNull()

    const startEvent = new Event('touchstart', { bubbles: true })
    Object.defineProperty(startEvent, 'targetTouches', { value: [{ clientX: 20, clientY: 50 }] })
    touchElement!.dispatchEvent(startEvent)

    const moveEvent = new Event('touchmove', { bubbles: true })
    Object.defineProperty(moveEvent, 'targetTouches', { value: [{ clientX: 20, clientY: 160 }] })
    touchElement!.dispatchEvent(moveEvent)

    await Promise.resolve()
    await Promise.resolve()

    touchElement!.dispatchEvent(new Event('touchend', { bubbles: true }))
    await Promise.resolve()
    await Promise.resolve()
    await nextTick()

    expect(emitted.some(entry => entry.name === 'window' && (entry.payload[0] as { open: boolean }).open === false)).toBe(true)
  })
})
