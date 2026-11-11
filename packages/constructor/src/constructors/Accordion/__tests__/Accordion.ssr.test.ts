// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { ServerStorage } from '@dxtmisha/functional'

import { AccordionDesign } from '../AccordionDesign'
import type {
  AccordionComponents,
  AccordionProps,
  AccordionSlots
} from '../index'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const CellMock = defineComponent({
  name: 'CellMock',
  inheritAttrs: false,
  props: {
    ariaDescribedby: String,
    ariaLabelledby: String,
    caption: [String, Number],
    description: [String, Number],
    iconTurn: Boolean,
    label: [String, Number]
  },
  setup(props, { attrs, slots }) {
    return () => h(
      'div',
      {
        ...attrs,
        'aria-labelledby': props.ariaLabelledby,
        'aria-describedby': props.ariaDescribedby,
        'data-icon-turn': props.iconTurn ? 'true' : undefined
      },
      [
        slots.label ? slots.label() : props.label,
        slots.caption ? slots.caption() : props.caption,
        slots.description ? slots.description() : props.description,
        slots.trailing ? slots.trailing() : undefined
      ]
    )
  }
})

const MotionTransformMock = defineComponent({
  name: 'MotionTransformMock',
  inheritAttrs: false,
  props: {
    'aria-expanded': [Boolean, String],
    'adaptive': String,
    'ariaDescribedby': String,
    'ariaLabelledby': String,
    'dataDivider': [Boolean, String],
    'inDom': Boolean,
    'modelOpen': Boolean,
    'open': Boolean,
    'section': Boolean,
    'tag': String
  },
  emits: ['transform', 'transformLite'],
  setup(props, { attrs, slots }) {
    return () => h(
      props.tag ?? 'div',
      {
        ...attrs,
        'data-divider': props.dataDivider ? 'true' : undefined
      },
      [
        slots.head?.({
          isOpen: props.open,
          binds: {
            'id': 'ssr-head-id',
            'aria-expanded': props.open ? 'true' : 'false'
          }
        }),
        props.inDom || props.open
          ? slots.body?.({
              isOpen: props.open,
              binds: {
                'role': 'region',
                'aria-labelledby': props.ariaLabelledby,
                'aria-describedby': props.ariaDescribedby
              }
            })
          : undefined
      ]
    )
  }
})

const defaultComponents: AccordionComponents = {
  cell: CellMock,
  motionTransform: MotionTransformMock
}

/**
 * Renders the AccordionDesign component in a server-side Node environment without browser globals.
 *
 * Рендерит компонент AccordionDesign в серверном окружении Node без браузерных глобальных объектов.
 * @param properties component properties / свойства компонента
 * @param slots component slots / слоты компонента
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderAccordionSsr(
  properties: AccordionProps = {},
  slots?: AccordionSlots
): Promise<string> {
  const Component = defineComponent({
    setup() {
      const props = reactive<AccordionProps>({ ...properties })
      // @ts-expect-error TS2589 workaround for mock components in test
      const design = new AccordionDesign('d1.accordion', props, {
        components: defaultComponents as any
      })

      return design.render()
    }
  })

  const Root = defineComponent({
    setup() {
      return () => h(Component, null, slots ? (slots as Record<string, unknown>) : undefined)
    }
  })

  return renderToString(createSSRApp(Root))
}

describe('Accordion (SSR)', () => {
  it('renders AccordionDesign without error in SSR (node environment)', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderAccordionSsr({
      label: 'SSR Accordion',
      description: 'SSR Description'
    })

    expect(typeof html).toBe('string')
    expect(html).toContain('d1-accordion')
    expect(html).toContain('d1-accordion__head')
    expect(html).toContain('d1-accordion__body')
    expect(html).toContain('aria-expanded="false"')
    expect(html).toContain('SSR Accordion')
    expect(html).toContain('SSR Description')
  })

  it('renders closed state (open: false) with correct ARIA attributes in SSR', async () => {
    const html = await renderAccordionSsr({
      open: false,
      label: 'Closed Accordion'
    })

    expect(html).toContain('aria-expanded="false"')
  })

  it('renders opened state (open: true) with correct ARIA attributes in SSR', async () => {
    const html = await renderAccordionSsr({
      open: true,
      label: 'Open Accordion'
    })

    expect(html).toContain('aria-expanded="true"')
    expect(html).toContain('data-icon-turn="true"')
  })

  it('renders divider attribute when divider prop is set in SSR', async () => {
    const html = await renderAccordionSsr({
      divider: true,
      label: 'Divider Accordion'
    })

    expect(html).toContain('data-divider="true"')
  })

  it('renders custom slots in SSR correctly', async () => {
    const html = await renderAccordionSsr(
      {
        open: true
      },
      {
        default: () => h('div', { class: 'custom-ssr-body' }, 'Custom Body Content'),
        label: () => h('span', { class: 'custom-ssr-label' }, 'Custom Label'),
        caption: () => h('span', { class: 'custom-ssr-caption' }, 'Custom Caption'),
        description: () => h('span', { class: 'custom-ssr-desc' }, 'Custom Description'),
        trailing: () => h('span', { class: 'custom-ssr-trailing' }, 'Custom Trailing')
      }
    )

    expect(html).toContain('custom-ssr-body')
    expect(html).toContain('Custom Body Content')
    expect(html).toContain('custom-ssr-label')
    expect(html).toContain('Custom Label')
    expect(html).toContain('custom-ssr-caption')
    expect(html).toContain('Custom Caption')
    expect(html).toContain('custom-ssr-desc')
    expect(html).toContain('Custom Description')
    expect(html).toContain('custom-ssr-trailing')
    expect(html).toContain('Custom Trailing')
  })

  it('handles multiple sequential SSR renders without leaking state or crashing', async () => {
    for (const open of [false, true]) {
      for (const divider of [false, true]) {
        const html = await renderAccordionSsr({
          open,
          divider,
          label: `Accordion open=${open} divider=${divider}`
        })

        expect(typeof html).toBe('string')
        expect(html).toContain('d1-accordion')
        if (open) {
          expect(html).toContain('aria-expanded="true"')
        } else {
          expect(html).toContain('aria-expanded="false"')
        }
        if (divider) {
          expect(html).toContain('data-divider="true"')
        }
      }
    }
  })
})
