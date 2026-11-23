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

import { ActionSheetDesign } from '../ActionSheetDesign'
import type { ActionSheetProps } from '../props'
import type { ActionSheetComponents } from '../types'

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
    closeMobileHide: Boolean,
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
        'data-close-mobile-hide': String(Boolean(props.closeMobileHide)),
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

describe('ActionSheet SSR (Server-Side Rendering)', () => {
  it('should render full ActionSheet hierarchy with touch handle, Bars, Actions, and slots in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const Inner = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<ActionSheetProps>({
          open: true,
          touchClose: true,
          barsLabel: 'SSR ActionSheet',
          barsDescription: 'Server-rendered sheet description',
          actionsList: [{ label: 'Confirm', value: 'confirm' }]
        })
        const classes = computed<ConstrClasses>(() => ({ main: { 'd1-actionSheet': true } }))
        const styles = computed<ConstrStyles>(() => ({}))

        const design = new ActionSheetDesign(
          'd1.actionSheet',
          props,
          {
            classes,
            styles,
            components: {
              window: WindowSsrMock,
              bars: BarsSsrMock,
              actions: ActionsSsrMock
            } as ActionSheetComponents
          }
        )

        return design.render()
      }
    })

    const Host = defineComponent({
      setup() {
        return () => h(Inner, {}, {
          control: () => h('button', 'Open SSR Sheet'),
          header: () => h('div', 'SSR Header'),
          default: () => h('p', 'SSR Body'),
          footer: () => h('div', 'SSR Footer')
        })
      }
    })

    const html = await renderToString(createSSRApp(Host))

    expect(html).toContain('data-ssr-window="true"')
    expect(html).toContain('data-open="true"')
    expect(html).toContain('data-adaptive="actionSheetRight"')
    expect(html).toContain('data-touch="touch"')
    expect(html).toContain('d1-actionSheet__touch')
    expect(html).toContain('d1-actionSheet__tab')
    expect(html).toContain('aria-hidden="true"')
    expect(html).toContain('SSR ActionSheet')
    expect(html).toContain('Server-rendered sheet description')
    expect(html).toContain('data-align="auto"')
    expect(html).toContain('Confirm')
    expect(html).toContain('SSR Header')
    expect(html).toContain('SSR Body')
    expect(html).toContain('SSR Footer')
  })

  it('should render without touch wrapper when touchClose is false and skip lazy Bars/Actions when omitted', async () => {
    const Inner = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<ActionSheetProps>({
          open: false,
          touchClose: false,
          barsBackHide: true
        })
        const classes = computed<ConstrClasses>(() => ({ main: { 'd1-actionSheet': true } }))
        const styles = computed<ConstrStyles>(() => ({}))

        const design = new ActionSheetDesign(
          'd1.actionSheet',
          props,
          {
            classes,
            styles,
            components: {
              window: WindowSsrMock,
              bars: BarsSsrMock,
              actions: ActionsSsrMock
            } as ActionSheetComponents
          }
        )

        return design.render()
      }
    })

    const Host = defineComponent({
      setup() {
        return () => h(Inner, {}, {
          default: () => h('p', 'Minimal SSR Sheet')
        })
      }
    })

    const html = await renderToString(createSSRApp(Host))

    expect(html).toContain('data-open="false"')
    expect(html).toContain('data-close-mobile-hide="false"')
    expect(html).not.toContain('d1-actionSheet__touch')
    expect(html).not.toContain('data-ssr-bars="true"')
    expect(html).not.toContain('data-ssr-actions="true"')
    expect(html).toContain('Minimal SSR Sheet')
  })

  it('should render numeric 0 in barsLabel and actionsList cleanly during SSR', async () => {
    const Host = defineComponent({
      setup() {
        const props = reactive<ActionSheetProps>({
          modelOpen: true,
          touchClose: true,
          barsLabel: 0,
          actionsList: [{ label: 0, value: 0 }]
        })
        const classes = computed<ConstrClasses>(() => ({ main: { 'd1-actionSheet': true } }))
        const styles = computed<ConstrStyles>(() => ({}))

        const design = new ActionSheetDesign(
          'd1.actionSheet',
          props,
          {
            classes,
            styles,
            components: {
              window: WindowSsrMock,
              bars: BarsSsrMock,
              actions: ActionsSsrMock
            } as ActionSheetComponents
          }
        )

        return design.render()
      }
    })

    const html = await renderToString(createSSRApp(Host))

    expect(html).toContain('data-open="true"')
    expect(html).toContain('>0</h2>')
    expect(html).toContain('>0</button>')
  })
})
