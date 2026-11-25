// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, type ConstrStyles, ServerStorage } from '@dxtmisha/functional'

import { DummyDesign } from '../DummyDesign'
import type { DummyPropsBasic } from '../props'
import type { DummyClasses, DummyComponents, DummyExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const TestDummySsr = defineComponent({
  name: 'TestDummySsr',
  props: {
    size: {
      type: String,
      default: 'md'
    },
    palette: {
      type: String,
      default: undefined
    }
  },
  setup(props) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-dummy': true,
        [`d1-dummy--size--${props.size}`]: Boolean(props.size),
        [`d1-palette d1-palette--${props.palette}`]: Boolean(props.palette)
      }
    }))
    const stylesToken = computed<ConstrStyles>(() => ({
      '--d1-dummy-borderRadius': '12px'
    }))

    const design = new DummyDesign<
      DummyComponents,
      DummyExpose,
      DummyClasses,
      DummyPropsBasic
    >(
      'd1.dummy',
      props,
      {
        classes: classesToken,
        styles: stylesToken
      }
    )

    return design.render()
  }
})

describe('Dummy (SSR)', () => {
  it('should render valid deterministic SSR HTML with classes, styles, attrs, and default slot without browser API leaks', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const app = createSSRApp(defineComponent({
      setup() {
        return () => h(
          TestDummySsr,
          {
            'id': 'ssr-dummy',
            'size': 'lg',
            'palette': 'blue',
            'class': 'ssr-extra',
            'style': { opacity: '0.9' },
            'aria-label': 'SSR Placeholder'
          },
          {
            default: () => h('p', 'SSR Content • Tiếng Việt • Привет')
          }
        )
      }
    }))

    const html = await renderToString(app)

    expect(html).toContain('<div ')
    expect(html).toContain('id="ssr-dummy"')
    expect(html).toContain('aria-label="SSR Placeholder"')
    expect(html).toContain('d1-dummy')
    expect(html).toContain('d1-dummy--size--lg')
    expect(html).toContain('d1-palette')
    expect(html).toContain('d1-palette--blue')
    expect(html).toContain('ssr-extra')
    expect(html).toContain('--d1-dummy-borderRadius:12px')
    expect(html).toContain('opacity:0.9')
    expect(html).toContain('<p>SSR Content • Tiếng Việt • Привет</p>')
  })

  it('should render empty dummy block and isolate state across concurrent SSR requests', async () => {
    const firstApp = createSSRApp(defineComponent({
      setup() {
        return () => h(TestDummySsr, {
          'size': 'xs',
          'aria-hidden': 'true'
        })
      }
    }))

    const secondApp = createSSRApp(defineComponent({
      setup() {
        return () => h(
          TestDummySsr,
          {
            size: 'xl',
            palette: 'rose'
          },
          {
            default: () => h('span', 'Request Beta')
          }
        )
      }
    }))

    const [firstHtml, secondHtml] = await Promise.all([
      renderToString(firstApp),
      renderToString(secondApp)
    ])

    expect(firstHtml).toContain('d1-dummy--size--xs')
    expect(firstHtml).toContain('aria-hidden="true"')
    expect(firstHtml).not.toContain('Request Beta')
    expect(firstHtml).not.toContain('d1-palette--rose')

    expect(secondHtml).toContain('d1-dummy--size--xl')
    expect(secondHtml).toContain('d1-palette--rose')
    expect(secondHtml).toContain('<span>Request Beta</span>')
    expect(secondHtml).not.toContain('aria-hidden="true"')
  })
})
