// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, type ConstrStyles, ServerStorage } from '@dxtmisha/functional'

import { TextLabelDesign } from '../TextLabelDesign'
import type { TextLabelPropsBasic } from '../props'
import type {
  TextLabelClasses,
  TextLabelComponents,
  TextLabelExpose
} from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const TestTextLabelSsr = defineComponent({
  name: 'TestTextLabelSsr',
  props: {
    label: {
      type: [String, Number],
      default: undefined
    },
    labelId: {
      type: String,
      default: undefined
    },
    tag: {
      type: String,
      default: 'div'
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  setup(props) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-textLabel': true,
        [`d1-textLabel--size--${props.size}`]: Boolean(props.size)
      }
    }))
    const stylesToken = computed<ConstrStyles>(() => ({
      '--d1-textLabel-fontWeight': '500'
    }))

    const design = new TextLabelDesign<
      TextLabelComponents,
      TextLabelExpose,
      TextLabelClasses,
      TextLabelPropsBasic
    >(
      'd1.textLabel',
      props,
      {
        classes: classesToken,
        styles: stylesToken
      }
    )

    return design.render()
  }
})

describe('TextLabel (SSR)', () => {
  it('should render deterministic SSR HTML with custom tag, labelId, classes, styles, and default slot without browser globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const app = createSSRApp(defineComponent({
      setup() {
        return () => h(
          TestTextLabelSsr,
          {
            'label': 'SSR Label • Tiếng Việt • Привет',
            'labelId': 'ssr-label-id',
            'tag': 'h2',
            'size': 'lg',
            'class': 'ssr-extra',
            'style': { opacity: '0.9' },
            'aria-label': 'Section title'
          },
          {
            default: () => h('span', ' (new)')
          }
        )
      }
    }))

    const html = await renderToString(app)

    expect(html).toContain('<h2 ')
    expect(html).toContain('id="ssr-label-id"')
    expect(html).toContain('aria-label="Section title"')
    expect(html).toContain('d1-textLabel__label')
    expect(html).toContain('d1-textLabel')
    expect(html).toContain('d1-textLabel--size--lg')
    expect(html).toContain('ssr-extra')
    expect(html).toContain('--d1-textLabel-fontWeight:500')
    expect(html).toContain('opacity:0.9')
    expect(html).toContain('SSR Label • Tiếng Việt • Привет')
    expect(html).toContain('<span> (new)</span>')
  })

  it('should render numeric 0, omit empty output, escape XSS, and isolate concurrent SSR requests', async () => {
    const zeroApp = createSSRApp(defineComponent({
      setup() {
        return () => h(TestTextLabelSsr, {
          label: 0,
          labelId: 'ssr-zero-label'
        })
      }
    }))

    const emptyApp = createSSRApp(defineComponent({
      setup() {
        return () => h(TestTextLabelSsr, {
          label: '   '
        })
      }
    }))

    const xssApp = createSSRApp(defineComponent({
      setup() {
        return () => h(TestTextLabelSsr, {
          label: '<script>alert(1)</script>',
          size: 'xs'
        })
      }
    }))

    const [zeroHtml, emptyHtml, xssHtml] = await Promise.all([
      renderToString(zeroApp),
      renderToString(emptyApp),
      renderToString(xssApp)
    ])

    expect(zeroHtml).toContain('id="ssr-zero-label"')
    expect(zeroHtml).toContain('>0</div>')

    expect(emptyHtml).not.toContain('d1-textLabel')

    expect(xssHtml).toContain('d1-textLabel--size--xs')
    expect(xssHtml).toContain('&lt;script&gt;alert(1)&lt;/script&gt;')
    expect(xssHtml).not.toContain('<script>')
  })
})
