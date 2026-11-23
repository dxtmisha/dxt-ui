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

import { ModalDesign } from '../ModalDesign'
import type { ModalProps } from '../props'
import type { ModalComponents } from '../types'

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
    image: String,
    imagePosition: String,
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
    list: Array
  },
  setup(props, { attrs }) {
    return () => h(
      'div',
      { ...attrs, 'data-ssr-actions': 'true' },
      ((props.list as Array<{ label?: string | number }> | undefined) ?? []).map((item, index) =>
        h('button', { key: index }, String(item.label ?? '')))
    )
  }
})

describe('Modal SSR (Server-Side Rendering)', () => {
  it('should render full Modal hierarchy with Bars, Actions, slots, and ARIA linkage in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const ModalHost = defineComponent({
      setup() {
        const props = reactive<ModalProps>({
          open: true,
          barsLabel: 'SSR Modal Title',
          barsDescription: 'SSR Modal Description',
          actionsList: [{ label: 'Confirm' }, { label: 0 }]
        })
        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-modal': true }
        }))
        const stylesToken = computed<ConstrStyles>(() => ({
          '--sys-modal-width': '480px'
        }))
        const design = new ModalDesign('d1.modal', props, {
          classes: classesToken,
          styles: stylesToken,
          components: {
            window: WindowSsrMock,
            bars: BarsSsrMock,
            actions: ActionsSsrMock
          } as ModalComponents
        })

        return design.render()
      }
    })

    const Root = defineComponent({
      setup() {
        return () => h(ModalHost, { class: 'ssr-extra-class' }, {
          control: () => h('button', 'Trigger'),
          title: () => h('span', 'Title Extra'),
          header: () => h('div', 'Header Slot'),
          default: () => h('p', 'Body Slot'),
          footer: () => h('div', 'Footer Slot')
        })
      }
    })

    const html = await renderToString(createSSRApp(Root))

    expect(html).toContain('data-ssr-window="true"')
    expect(html).toContain('data-open="true"')
    expect(html).toContain('data-adaptive="modal"')
    expect(html).toContain('d1-modal')
    expect(html).toContain('ssr-extra-class')
    expect(html).toContain('--sys-modal-width:480px')
    expect(html).toContain('SSR Modal Title')
    expect(html).toContain('SSR Modal Description')
    expect(html).toContain('Confirm')
    expect(html).toContain('>0</button>')
    expect(html).toContain('d1-modal__title')
    expect(html).toContain('d1-modal__header')
    expect(html).toContain('d1-modal__body')
    expect(html).toContain('d1-modal__footer')
  })

  it('should safely escape XSS and render multilingual content in SSR', async () => {
    const ModalHost = defineComponent({
      setup() {
        const props = reactive<ModalProps>({
          modelOpen: true,
          barsLabel: '<script>alert("xss")</script>',
          barsDescription: 'Подтверждение действия — Học tiếng Việt'
        })
        const design = new ModalDesign('d1.modal', props, {
          components: {
            window: WindowSsrMock,
            bars: BarsSsrMock,
            actions: ActionsSsrMock
          } as ModalComponents
        })

        return design.render()
      }
    })

    const html = await renderToString(createSSRApp(ModalHost))

    expect(html).toContain('data-open="true"')
    expect(html).not.toContain('<script>alert("xss")</script>')
    expect(html).toContain('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;')
    expect(html).toContain('Подтверждение действия — Học tiếng Việt')
  })

  it('should maintain strict SSR request isolation across separate requests', async () => {
    const request1: Record<string, unknown> = { id: 'req-1' }
    ServerStorage.init(() => request1)

    const App1 = defineComponent({
      setup() {
        const design = new ModalDesign(
          'd1.modal',
          reactive<ModalProps>({ barsLabel: 'Request 1 Modal' }),
          { components: { window: WindowSsrMock, bars: BarsSsrMock } as ModalComponents }
        )
        return design.render()
      }
    })
    const html1 = await renderToString(createSSRApp(App1))

    ServerStorage.reset()
    const request2: Record<string, unknown> = { id: 'req-2' }
    ServerStorage.init(() => request2)

    const App2 = defineComponent({
      setup() {
        const design = new ModalDesign(
          'd1.modal',
          reactive<ModalProps>({ barsLabel: 'Request 2 Modal' }),
          { components: { window: WindowSsrMock, bars: BarsSsrMock } as ModalComponents }
        )
        return design.render()
      }
    })
    const html2 = await renderToString(createSSRApp(App2))

    expect(html1).toContain('Request 1 Modal')
    expect(html1).not.toContain('Request 2 Modal')
    expect(html2).toContain('Request 2 Modal')
    expect(html2).not.toContain('Request 1 Modal')
  })
})
