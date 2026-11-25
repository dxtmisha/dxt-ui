// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, type PropType } from 'vue'
import { renderToString } from '@vue/server-renderer'
import {
  type ConstrClasses,
  type ConstrStyles,
  GeoIntl,
  GeoRef,
  type NumberOrString,
  ServerStorage
} from '@dxtmisha/functional'

import { FormattedNumberDesign } from '../FormattedNumberDesign'
import { defaultsFormattedNumber, type FormattedNumberPropsBasic } from '../props'
import type { FormattedNumberClasses, FormattedNumberComponents, FormattedNumberExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
  GeoRef.set('en-US')
})

afterEach(() => {
  ServerStorage.reset()
})

const TestFormattedNumberSsr = defineComponent({
  name: 'TestFormattedNumberSsr',
  props: {
    value: {
      type: [Number, String] as PropType<NumberOrString | undefined>,
      default: undefined
    },
    currency: {
      type: String,
      default: undefined
    },
    unit: {
      type: String,
      default: undefined
    },
    formatting: {
      type: Boolean,
      default: defaultsFormattedNumber.formatting
    },
    language: {
      type: String,
      default: undefined
    }
  },
  setup(props) {
    const classes = computed<ConstrClasses>(() => ({
      main: {
        'd1-formattedNumber': true
      }
    }))
    const styles = computed<ConstrStyles>(() => ({}))
    const design = new FormattedNumberDesign<
      FormattedNumberComponents,
      FormattedNumberExpose,
      FormattedNumberClasses,
      FormattedNumberPropsBasic
    >(
      'd1.formattedNumber',
      props,
      { classes, styles }
    )

    return design.render()
  }
})

describe('FormattedNumber (SSR)', () => {
  it('should render valid deterministic SSR HTML across number, currency, unit, zero, negative, and raw modes with no browser API leaks', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const app = createSSRApp(defineComponent({
      setup() {
        return () => h('div', [
          h(TestFormattedNumberSsr, {
            'data-mode': 'number',
            'value': 1234567.89,
            'language': 'en-US',
            'class': 'ssr-number',
            'style': { opacity: '0.9' }
          }),
          h(TestFormattedNumberSsr, {
            'data-mode': 'currency',
            'value': 0,
            'currency': 'USD',
            'language': 'en-US'
          }),
          h(TestFormattedNumberSsr, {
            'data-mode': 'unit',
            'value': -15,
            'unit': 'celsius',
            'language': 'en-US'
          }),
          h(TestFormattedNumberSsr, {
            'data-mode': 'raw',
            'value': '<script>alert(1)</script>',
            'formatting': false
          }),
          h(TestFormattedNumberSsr, {
            'data-mode': 'empty'
          })
        ])
      }
    }))

    const html = await renderToString(app)

    expect(html).toContain('<span ')
    expect(html).toContain('d1-formattedNumber')
    expect(html).toContain('ssr-number')
    expect(html).toContain('opacity:0.9')
    expect(html).toContain(`>${new GeoIntl('en-US').number(1234567.89)}</span>`)
    expect(html).toContain(`>${new GeoIntl('en-US').currency(0, 'USD')}</span>`)
    expect(html).toContain(`>${new GeoIntl('en-US').unit(-15, 'celsius')}</span>`)
    expect(html).toContain('&lt;script&gt;alert(1)&lt;/script&gt;')
    expect(html).not.toContain('<script>alert(1)</script>')
    expect(html).toMatch(/<span[^>]*data-mode="empty"[^>]*><\/span>/)
  })

  it('should isolate global GeoRef locale state across separate SSR requests', async () => {
    const firstRequest: Record<string, unknown> = {}
    ServerStorage.reset()
    ServerStorage.init(() => firstRequest)
    GeoRef.set('en-US')

    const firstHtml = await renderToString(createSSRApp(defineComponent({
      setup() {
        return () => h(TestFormattedNumberSsr, {
          value: 1234.56
        })
      }
    })))

    const secondRequest: Record<string, unknown> = {}
    ServerStorage.reset()
    ServerStorage.init(() => secondRequest)
    GeoRef.set('de-DE')

    const secondHtml = await renderToString(createSSRApp(defineComponent({
      setup() {
        return () => h(TestFormattedNumberSsr, {
          value: 1234.56
        })
      }
    })))

    expect(firstHtml).toContain(`>${new GeoIntl('en-US').number(1234.56)}</span>`)
    expect(secondHtml).toContain(`>${new GeoIntl('de-DE').number(1234.56)}</span>`)
  })
})
