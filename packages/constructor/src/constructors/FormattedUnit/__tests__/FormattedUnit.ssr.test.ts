// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, type PropType } from 'vue'
import { renderToString } from '@vue/server-renderer'
import {
  type ConstrClasses,
  type ConstrStyles,
  GeoRef,
  GeoUnit,
  type NumberOrString,
  ServerStorage
} from '@dxtmisha/functional'

import { FormattedUnitDesign } from '../FormattedUnitDesign'
import { defaultsFormattedUnit, type FormattedUnitPropsBasic } from '../props'
import type { FormattedUnitClasses, FormattedUnitComponents, FormattedUnitExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
  GeoRef.set('en-US')
})

afterEach(() => {
  ServerStorage.reset()
})

const TestFormattedUnitSsr = defineComponent({
  name: 'TestFormattedUnitSsr',
  props: {
    value: {
      type: [Number, String] as PropType<NumberOrString | undefined>,
      default: undefined
    },
    unit: {
      type: String,
      default: undefined
    },
    formatting: {
      type: Boolean,
      default: defaultsFormattedUnit.formatting
    },
    language: {
      type: String,
      default: undefined
    }
  },
  setup(props) {
    const classes = computed<ConstrClasses>(() => ({
      main: {
        'd1-formattedUnit': true
      }
    }))
    const styles = computed<ConstrStyles>(() => ({}))
    const design = new FormattedUnitDesign<
      FormattedUnitComponents,
      FormattedUnitExpose,
      FormattedUnitClasses,
      FormattedUnitPropsBasic
    >(
      'd1.formattedUnit',
      props,
      { classes, styles }
    )

    return design.render()
  }
})

describe('FormattedUnit (SSR)', () => {
  it('should render valid deterministic SSR HTML across converted, metric, zero, negative, unknown, and raw modes with no browser API leaks', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const app = createSSRApp(defineComponent({
      setup() {
        return () => h('div', [
          h(TestFormattedUnitSsr, {
            'data-mode': 'imperial',
            'value': 100,
            'unit': 'celsius',
            'language': 'en-US',
            'class': 'ssr-unit',
            'style': { opacity: '0.9' }
          }),
          h(TestFormattedUnitSsr, {
            'data-mode': 'zero',
            'value': 0,
            'unit': 'kilogram',
            'language': 'ru-RU'
          }),
          h(TestFormattedUnitSsr, {
            'data-mode': 'negative',
            'value': -15,
            'unit': 'celsius',
            'language': 'en-US'
          }),
          h(TestFormattedUnitSsr, {
            'data-mode': 'unknown',
            'value': 50,
            'unit': 'parsecs',
            'language': 'en-US'
          }),
          h(TestFormattedUnitSsr, {
            'data-mode': 'raw',
            'value': '<script>alert(1)</script>',
            'unit': 'meter',
            'formatting': false
          }),
          h(TestFormattedUnitSsr, {
            'data-mode': 'empty'
          })
        ])
      }
    }))

    const html = await renderToString(app)

    expect(html).toContain('<span ')
    expect(html).toContain('d1-formattedUnit')
    expect(html).toContain('ssr-unit')
    expect(html).toContain('opacity:0.9')
    expect(html).toContain(`>${GeoUnit.getInstance('en-US').format(100, 'celsius')}</span>`)
    expect(html).toContain(`>${GeoUnit.getInstance('ru-RU').format(0, 'kilogram')}</span>`)
    expect(html).toContain(`>${GeoUnit.getInstance('en-US').format(-15, 'celsius')}</span>`)
    expect(html).toContain('>50</span>')
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
        return () => h(TestFormattedUnitSsr, {
          value: 10,
          unit: 'kilogram'
        })
      }
    })))

    const secondRequest: Record<string, unknown> = {}
    ServerStorage.reset()
    ServerStorage.init(() => secondRequest)
    GeoRef.set('ru-RU')

    const secondHtml = await renderToString(createSSRApp(defineComponent({
      setup() {
        return () => h(TestFormattedUnitSsr, {
          value: 10,
          unit: 'kilogram'
        })
      }
    })))

    expect(firstHtml).toContain(`>${GeoUnit.getInstance('en-US').format(10, 'kilogram')}</span>`)
    expect(secondHtml).toContain(`>${GeoUnit.getInstance('ru-RU').format(10, 'kilogram')}</span>`)
  })
})
