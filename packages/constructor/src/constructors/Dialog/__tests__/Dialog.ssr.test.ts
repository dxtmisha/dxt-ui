// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import {
  type ConstrClasses,
  type ConstrStyles,
  ServerStorage
} from '@dxtmisha/functional'

import { DialogDesign } from '../DialogDesign'
import { defaultsDialog, type DialogProps } from '../props'
import type { DialogComponents } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const WindowSsrMock = defineComponent({
  name: 'WindowSsrMock',
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
  setup(props, { attrs, slots }) {
    return () => h(
      'div',
      {
        ...attrs,
        'data-ssr-window': 'true',
        'data-open': String(Boolean(props.open)),
        'data-adaptive': props.adaptive,
        'data-image-position': props.imagePosition,
        'aria-labelledby': props.ariaLabelledby,
        'aria-describedby': props.ariaDescribedby
      },
      [
        slots.control?.({ open: Boolean(props.open) }),
        slots.title?.({ open: Boolean(props.open) }),
        slots.default?.({ open: Boolean(props.open) }),
        slots.footer?.({ open: Boolean(props.open) })
      ]
    )
  }
})

const BarsSsrMock = defineComponent({
  name: 'BarsSsrMock',
  inheritAttrs: false,
  props: {
    label: [String, Number],
    description: String,
    labelId: String,
    descriptionId: String
  },
  setup(props, { attrs }) {
    return () => h('div', { ...attrs, 'data-ssr-bars': 'true' }, [
      props.label !== undefined ? h('h2', { id: props.labelId }, String(props.label)) : null,
      props.description !== undefined ? h('p', { id: props.descriptionId }, props.description) : null
    ])
  }
})

const ActionsSsrMock = defineComponent({
  name: 'ActionsSsrMock',
  inheritAttrs: false,
  props: {
    align: String,
    list: Array
  },
  setup(props, { attrs }) {
    return () => h(
      'div',
      {
        ...attrs,
        'data-ssr-actions': 'true',
        'data-align': props.align
      },
      ((props.list as Array<{ label?: string | number }> | undefined) ?? []).map((item, index) =>
        h('button', { key: index }, String(item.label ?? '')))
    )
  }
})

const IconSsrMock = defineComponent({
  name: 'IconSsrMock',
  inheritAttrs: false,
  props: {
    icon: [String, Object]
  },
  setup(props, { attrs }) {
    return () => h('span', {
      ...attrs,
      'data-ssr-icon': typeof props.icon === 'string' ? props.icon : ''
    })
  }
})

describe('Dialog SSR (Server-Side Rendering)', () => {
  it('should render full Dialog hierarchy with icon, label, description, actions, slots, and ARIA linkage in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const Inner = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<DialogProps>({
          ...(defaultsDialog as DialogProps),
          open: true,
          success: true,
          iconSuccess: 'check_circle',
          label: 'SSR Dialog Title',
          description: 'Server-rendered dialog description',
          textClose: 'Cancel',
          textOk: 'Confirm'
        })
        const classes = computed<ConstrClasses>(() => ({ main: { 'd1-dialog': true } }))
        const styles = computed<ConstrStyles>(() => ({}))

        const design = new DialogDesign(
          'd1.dialog',
          props,
          {
            classes,
            styles,
            components: {
              window: WindowSsrMock,
              bars: BarsSsrMock,
              actions: ActionsSsrMock,
              icon: IconSsrMock
            } as DialogComponents
          }
        )

        return design.render()
      }
    })

    const Host = defineComponent({
      setup() {
        return () => h(Inner, {}, {
          control: () => h('button', 'Open SSR Dialog'),
          header: () => h('div', 'SSR Header'),
          default: () => h('p', 'SSR Body'),
          footer: () => h('div', 'SSR Footer')
        })
      }
    })

    const html = await renderToString(createSSRApp(Host))

    expect(html).toContain('data-ssr-window="true"')
    expect(html).toContain('data-open="true"')
    expect(html).toContain('data-adaptive="modal"')
    expect(html).toContain('data-ssr-icon="check_circle"')
    expect(html).toContain('d1-dialog__information')
    expect(html).toContain('SSR Dialog Title')
    expect(html).toContain('Server-rendered dialog description')
    expect(html).toContain('data-align="center"')
    expect(html).toContain('Cancel')
    expect(html).toContain('Confirm')
    expect(html).toContain('SSR Header')
    expect(html).toContain('SSR Body')
    expect(html).toContain('SSR Footer')
    expect(html).not.toContain('data-ssr-bars="true"')
  })

  it('should omit empty information wrapper, Bars, and Actions cleanly during SSR when disabled/empty', async () => {
    const Inner = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<DialogProps>({
          ...(defaultsDialog as DialogProps),
          open: false,
          actionsHide: true
        })
        const classes = computed<ConstrClasses>(() => ({ main: { 'd1-dialog': true } }))
        const styles = computed<ConstrStyles>(() => ({}))

        const design = new DialogDesign(
          'd1.dialog',
          props,
          {
            classes,
            styles,
            components: {
              window: WindowSsrMock,
              bars: BarsSsrMock,
              actions: ActionsSsrMock,
              icon: IconSsrMock
            } as DialogComponents
          }
        )

        return design.render()
      }
    })

    const Host = defineComponent({
      setup() {
        return () => h(Inner, {}, {
          default: () => h('p', 'Minimal SSR Dialog')
        })
      }
    })

    const html = await renderToString(createSSRApp(Host))

    expect(html).toContain('data-open="false"')
    expect(html).not.toContain('d1-dialog__information')
    expect(html).not.toContain('data-ssr-icon=')
    expect(html).not.toContain('data-ssr-bars="true"')
    expect(html).not.toContain('data-ssr-actions="true"')
    expect(html).toContain('Minimal SSR Dialog')
  })

  it('should render numeric 0 and Unicode text cleanly during SSR', async () => {
    const Host = defineComponent({
      setup() {
        const props = reactive<DialogProps>({
          ...(defaultsDialog as DialogProps),
          modelOpen: true,
          error: true,
          iconError: 'error',
          label: 0,
          description: 'Tiếng Việt — Привет 🚀',
          buttonClose: null,
          buttonOk: 'OK'
        })
        const classes = computed<ConstrClasses>(() => ({ main: { 'd1-dialog': true } }))
        const styles = computed<ConstrStyles>(() => ({}))

        const design = new DialogDesign(
          'd1.dialog',
          props,
          {
            classes,
            styles,
            components: {
              window: WindowSsrMock,
              bars: BarsSsrMock,
              actions: ActionsSsrMock,
              icon: IconSsrMock
            } as DialogComponents
          }
        )

        return design.render()
      }
    })

    const html = await renderToString(createSSRApp(Host))

    expect(html).toContain('data-open="true"')
    expect(html).toContain('data-ssr-icon="error"')
    expect(html).toContain('>0</span>')
    expect(html).toContain('Tiếng Việt — Привет 🚀')
    expect(html).toContain('<button>OK</button>')
  })
})
