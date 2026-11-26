// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { getAreaValue } from '../../../functions/getAreaValue'
import { HeaderDesign } from '../../Header/HeaderDesign'
import { defaultsHeader, type HeaderProps, type HeaderPropsBasic } from '../../Header/props'
import type { HeaderClasses, HeaderComponents, HeaderExpose } from '../../Header/types'
import { PageDesign } from '../PageDesign'
import { defaultsPage, type PageProps, type PagePropsBasic } from '../props'
import type { PageClasses, PageComponents, PageExpose, PageSlots } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const SsrHeaderComponent = defineComponent({
  name: 'SsrHeaderComponent',
  props: {
    label: [String, Number],
    labelId: String,
    caption: [String, Number],
    captionDecorative: Boolean,
    tag: { type: String, default: defaultsHeader.tag },
    area: { type: String, default: defaultsHeader.area }
  },
  setup(props) {
    const classes = computed<ConstrClasses>(() => ({
      main: {
        'd1-header': true,
        [`d1-header--tag--${props.tag}`]: Boolean(props.tag)
      }
    }))
    const design = new HeaderDesign<HeaderComponents, HeaderExpose, HeaderClasses, HeaderPropsBasic>(
      'd1.header',
      props as Readonly<HeaderProps>,
      { classes }
    )
    return design.render()
  }
})

const SsrAreaProbe = defineComponent({
  name: 'SsrAreaProbe',
  setup() {
    return () => h('span', { class: 'ssr-page-area' }, getAreaValue() ?? 'none')
  }
})

function createSsrPageApp(props: PageProps, slots?: PageSlots) {
  const SsrPage = defineComponent({
    setup() {
      const mergedProps: PageProps = { ...defaultsPage, ...props }
      const classes = computed<ConstrClasses>(() => ({ main: { 'd1-page': true } }))
      const design = new PageDesign<PageComponents, PageExpose, PageClasses, PagePropsBasic>(
        'd1.page',
        mergedProps,
        {
          classes,
          components: { header: SsrHeaderComponent }
        }
      )
      return design.render()
    }
  })

  return createSSRApp({
    render: () => h(SsrPage, null, slots as Record<string, () => unknown>)
  })
}

describe('Page (SSR)', () => {
  it('should render semantic main container, headline, h1 header, description, ARIA links, and page area context in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderToString(createSsrPageApp(
      {
        headline: 'SSR PAGE HEADLINE',
        label: 'SSR Page Title',
        labelId: 'ssr-pg-lbl',
        caption: 'SSR Page Caption',
        description: 'SSR Page Description',
        descriptionId: 'ssr-pg-desc'
      },
      {
        default: () => [h(SsrAreaProbe)]
      }
    ))

    expect(html).toContain('<main')
    expect(html).toContain('aria-labelledby="ssr-pg-lbl"')
    expect(html).toContain('aria-describedby="ssr-pg-desc"')
    expect(html).toContain('SSR PAGE HEADLINE')
    expect(html).toContain('<h1 id="ssr-pg-lbl" class="d1-header__label">SSR Page Title</h1>')
    expect(html).toContain('SSR Page Description')
    expect(html).toContain('<span class="ssr-page-area">page</span>')
  })

  it('should render minimal page without body wrapper when only default slot is provided in SSR', async () => {
    const html = await renderToString(createSsrPageApp(
      {},
      {
        default: () => [h('p', 'Plain SSR Page Paragraph')]
      }
    ))

    expect(html).toContain('<main class="d1-page"')
    expect(html).toContain('<p>Plain SSR Page Paragraph</p>')
    expect(html).not.toContain('d1-page__body')
    expect(html).not.toContain('aria-labelledby')
    expect(html).not.toContain('aria-describedby')
  })

  it('should isolate area state across separate SSR requests', async () => {
    const htmlA = await renderToString(createSsrPageApp(
      { area: 'ssr-page-a' },
      { default: () => [h(SsrAreaProbe)] }
    ))

    ServerStorage.reset()
    const requestB: Record<string, unknown> = {}
    ServerStorage.init(() => requestB)

    const htmlB = await renderToString(createSsrPageApp(
      { area: 'ssr-page-b' },
      { default: () => [h(SsrAreaProbe)] }
    ))

    expect(htmlA).toContain('<span class="ssr-page-area">ssr-page-a</span>')
    expect(htmlB).toContain('<span class="ssr-page-area">ssr-page-b</span>')
  })
})
