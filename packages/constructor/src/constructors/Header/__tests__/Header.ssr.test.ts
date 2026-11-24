// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { getAreaValue } from '../../../functions/getAreaValue'
import { HeaderDesign } from '../HeaderDesign'
import { defaultsHeader, type HeaderProps, type HeaderPropsBasic } from '../props'
import type { HeaderClasses, HeaderComponents, HeaderExpose, HeaderSlots } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const MockIconSsr = defineComponent({
  name: 'MockIconSsr',
  props: { icon: String },
  setup(props, { attrs }) {
    return () => h('span', { class: ['mock-icon', attrs.class] }, props.icon)
  }
})

const AreaReaderSsr = defineComponent({
  name: 'AreaReaderSsr',
  setup() {
    return () => h('span', { class: 'ssr-area' }, getAreaValue() ?? 'none')
  }
})

function createSsrHeaderApp(props: HeaderProps, slots?: HeaderSlots) {
  const SsrHeader = defineComponent({
    setup() {
      const mergedProps = { ...defaultsHeader, ...props }
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-header': true,
          [`d1-header--tag--${mergedProps.tag}`]: Boolean(mergedProps.tag)
        }
      }))
      const design = new HeaderDesign<HeaderComponents, HeaderExpose, HeaderClasses, HeaderPropsBasic>(
        'd1.header',
        mergedProps,
        {
          classes,
          components: { icon: MockIconSsr }
        }
      )
      return design.render()
    }
  })

  return createSSRApp({
    render: () => h(SsrHeader, null, slots as Record<string, () => unknown>)
  })
}

describe('Header (SSR)', () => {
  it('should render semantic heading, icon, caption ARIA attributes, trailing slot, and area context in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderToString(createSsrHeaderApp(
      {
        tag: 'h2',
        label: 'Server Heading',
        labelId: 'ssr-hdr-1',
        caption: 'SSR Caption',
        icon: 'cloud',
        area: 'ssr-header'
      },
      {
        trailing: () => [h(AreaReaderSsr)]
      }
    ))

    expect(html).toContain('d1-header')
    expect(html).toContain('d1-header--tag--h2')
    expect(html).toContain('<h2 id="ssr-hdr-1" class="d1-header__label">Server Heading</h2>')
    expect(html).toContain('aria-live="polite"')
    expect(html).toContain('>SSR Caption<')
    expect(html).toContain('>cloud<')
    expect(html).toContain('d1-header__space')
    expect(html).toContain('<span class="ssr-area">ssr-header</span>')
  })

  it('should isolate area context across independent SSR requests and support decorative caption', async () => {
    const [htmlA, htmlB] = await Promise.all([
      renderToString(createSsrHeaderApp(
        { label: 'A', caption: 'Dec', captionDecorative: true, area: 'area-a' },
        { trailing: () => [h(AreaReaderSsr)] }
      )),
      renderToString(createSsrHeaderApp(
        { label: 'B', area: 'area-b' },
        { trailing: () => [h(AreaReaderSsr)] }
      ))
    ])

    expect(htmlA).toContain('aria-hidden="true"')
    expect(htmlA).toContain('<span class="ssr-area">area-a</span>')
    expect(htmlB).toContain('<span class="ssr-area">area-b</span>')
  })
})
