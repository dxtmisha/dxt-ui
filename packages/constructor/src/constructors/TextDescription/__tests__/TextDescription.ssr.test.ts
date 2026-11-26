// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, type ConstrStyles, ServerStorage } from '@dxtmisha/functional'

import { TextDescriptionDesign } from '../TextDescriptionDesign'
import type { TextDescriptionPropsBasic } from '../props'
import type {
  TextDescriptionClasses,
  TextDescriptionComponents,
  TextDescriptionExpose
} from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const TestTextDescriptionSsr = defineComponent({
  name: 'TestTextDescriptionSsr',
  props: {
    description: {
      type: [String, Number],
      default: undefined
    },
    descriptionId: {
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
        'd1-textDescription': true,
        [`d1-textDescription--size--${props.size}`]: Boolean(props.size)
      }
    }))
    const stylesToken = computed<ConstrStyles>(() => ({
      '--d1-textDescription-colorOpacity': '0.68'
    }))

    const design = new TextDescriptionDesign<
      TextDescriptionComponents,
      TextDescriptionExpose,
      TextDescriptionClasses,
      TextDescriptionPropsBasic
    >(
      'd1.textDescription',
      props,
      {
        classes: classesToken,
        styles: stylesToken
      }
    )

    return design.render()
  }
})

describe('TextDescription (SSR)', () => {
  it('should render deterministic SSR HTML with custom tag, descriptionId, classes, styles, and slot without browser globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const app = createSSRApp(defineComponent({
      setup() {
        return () => h(
          TestTextDescriptionSsr,
          {
            'description': 'SSR Description • Tiếng Việt • Привет',
            'descriptionId': 'ssr-desc-id',
            'tag': 'p',
            'size': 'sm',
            'class': 'ssr-extra',
            'style': { opacity: '0.8' },
            'aria-live': 'polite'
          },
          {
            description: () => h('em', ' (note)')
          }
        )
      }
    }))

    const html = await renderToString(app)

    expect(html).toContain('<p ')
    expect(html).toContain('id="ssr-desc-id"')
    expect(html).toContain('aria-live="polite"')
    expect(html).toContain('d1-textDescription__description')
    expect(html).toContain('d1-textDescription')
    expect(html).toContain('d1-textDescription--size--sm')
    expect(html).toContain('ssr-extra')
    expect(html).toContain('--d1-textDescription-colorOpacity:0.68')
    expect(html).toContain('opacity:0.8')
    expect(html).toContain('SSR Description • Tiếng Việt • Привет')
    expect(html).toContain('<em> (note)</em>')
  })

  it('should render numeric 0, omit empty output, escape XSS, and isolate concurrent SSR requests', async () => {
    const zeroApp = createSSRApp(defineComponent({
      setup() {
        return () => h(TestTextDescriptionSsr, {
          description: 0,
          descriptionId: 'ssr-zero'
        })
      }
    }))

    const emptyApp = createSSRApp(defineComponent({
      setup() {
        return () => h(TestTextDescriptionSsr, {
          description: '   '
        })
      }
    }))

    const xssApp = createSSRApp(defineComponent({
      setup() {
        return () => h(TestTextDescriptionSsr, {
          description: '<script>alert(1)</script>',
          size: 'xs'
        })
      }
    }))

    const [zeroHtml, emptyHtml, xssHtml] = await Promise.all([
      renderToString(zeroApp),
      renderToString(emptyApp),
      renderToString(xssApp)
    ])

    expect(zeroHtml).toContain('id="ssr-zero"')
    expect(zeroHtml).toContain('>0</div>')

    expect(emptyHtml).not.toContain('d1-textDescription')

    expect(xssHtml).toContain('d1-textDescription--size--xs')
    expect(xssHtml).toContain('&lt;script&gt;alert(1)&lt;/script&gt;')
    expect(xssHtml).not.toContain('<script>')
  })
})
