// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, type ConstrStyles, ServerStorage } from '@dxtmisha/functional'

import { ClientOnlyDesign } from '../ClientOnlyDesign'
import { defaultsClientOnly, type ClientOnlyPropsBasic } from '../props'
import type { ClientOnlyClasses, ClientOnlyComponents, ClientOnlyExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
  vi.restoreAllMocks()
})

const TestClientOnlySsr = defineComponent({
  name: 'TestClientOnlySsr',
  props: {
    clientOnly: {
      type: Boolean,
      default: defaultsClientOnly.clientOnly
    }
  },
  setup(props) {
    const classes = computed<ConstrClasses>(() => ({
      main: { 'd1-clientOnly': true }
    }))
    const styles = computed<ConstrStyles>(() => ({}))
    const design = new ClientOnlyDesign<
      ClientOnlyComponents,
      ClientOnlyExpose,
      ClientOnlyClasses,
      ClientOnlyPropsBasic
    >(
      'd1.clientOnly',
      props,
      {
        classes,
        styles
      }
    )

    return design.render()
  }
})

describe('ClientOnly (SSR)', () => {
  it('should render empty comment and skip executing browser-only slot content when clientOnly is true', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const browserOnlySlot = vi.fn(() => {
      // Would throw ReferenceError if ever executed in Node SSR environment
      return h('div', window.location.href)
    })

    const app = createSSRApp(defineComponent({
      setup() {
        return () => h(
          TestClientOnlySsr,
          null,
          { default: browserOnlySlot }
        )
      }
    }))

    const html = await renderToString(app)

    expect(html).toBe('<!---->')
    expect(browserOnlySlot).not.toHaveBeenCalled()
    expect(warnSpy).not.toHaveBeenCalled()
    expect(errorSpy).not.toHaveBeenCalled()
  })

  it('should render default slot HTML in SSR when clientOnly is false', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const app = createSSRApp(defineComponent({
      setup() {
        return () => h(
          TestClientOnlySsr,
          { clientOnly: false },
          { default: () => h('p', { class: 'ssr-text' }, 'Привет • Tiếng Việt • 🚀') }
        )
      }
    }))

    const html = await renderToString(app)

    expect(html).toContain('<p class="ssr-text">Привет • Tiếng Việt • 🚀</p>')
    expect(warnSpy).not.toHaveBeenCalled()
  })

  it('should render cleanly in SSR when default slot is omitted', async () => {
    const appTrue = createSSRApp(defineComponent({
      setup() {
        return () => h(TestClientOnlySsr, { clientOnly: true })
      }
    }))
    const appFalse = createSSRApp(defineComponent({
      setup() {
        return () => h(TestClientOnlySsr, { clientOnly: false })
      }
    }))

    const [htmlTrue, htmlFalse] = await Promise.all([
      renderToString(appTrue),
      renderToString(appFalse)
    ])

    expect(htmlTrue).toBe('<!---->')
    expect(htmlFalse).toBe('<!---->')
  })

  it('should isolate concurrent SSR requests with different clientOnly configurations', async () => {
    const appHidden = createSSRApp(defineComponent({
      setup() {
        return () => h(
          TestClientOnlySsr,
          { clientOnly: true },
          { default: () => h('span', 'Client Secret') }
        )
      }
    }))
    const appVisible = createSSRApp(defineComponent({
      setup() {
        return () => h(
          TestClientOnlySsr,
          { clientOnly: false },
          { default: () => h('span', 'Server Visible') }
        )
      }
    }))

    const [htmlHidden, htmlVisible] = await Promise.all([
      renderToString(appHidden),
      renderToString(appVisible)
    ])

    expect(htmlHidden).toBe('<!---->')
    expect(htmlVisible).toContain('<span>Server Visible</span>')
  })
})
