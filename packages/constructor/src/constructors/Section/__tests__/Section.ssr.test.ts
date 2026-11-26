// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { getAreaValue } from '../../../functions/getAreaValue'
import { HeaderDesign } from '../../Header/HeaderDesign'
import { defaultsHeader, type HeaderProps, type HeaderPropsBasic } from '../../Header/props'
import type { HeaderClasses, HeaderComponents, HeaderExpose } from '../../Header/types'
import { SectionDesign } from '../SectionDesign'
import { defaultsSection, type SectionProps, type SectionPropsBasic } from '../props'
import type { SectionClasses, SectionComponents, SectionExpose, SectionSlots } from '../types'

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
    return () => h('span', { class: 'ssr-section-area' }, getAreaValue() ?? 'none')
  }
})

function createSsrSectionApp(props: SectionProps, slots?: SectionSlots) {
  const SsrSection = defineComponent({
    setup() {
      const mergedProps: SectionProps = { ...defaultsSection, ...props }
      const classes = computed<ConstrClasses>(() => ({ main: { 'd1-section': true } }))
      const design = new SectionDesign<SectionComponents, SectionExpose, SectionClasses, SectionPropsBasic>(
        'd1.section',
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
    render: () => h(SsrSection, null, slots as Record<string, () => unknown>)
  })
}

describe('Section (SSR)', () => {
  it('should render semantic section container, h2 header, description, ARIA links, and area context in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderToString(createSsrSectionApp(
      {
        headline: 'SSR SECTION',
        label: 'SSR Section Title',
        labelId: 'ssr-sec-lbl',
        caption: 'SSR Caption',
        description: 'SSR Section Description',
        descriptionId: 'ssr-sec-desc'
      },
      {
        default: () => [h(SsrAreaProbe)]
      }
    ))

    expect(html).toContain('<section')
    expect(html).toContain('aria-labelledby="ssr-sec-lbl"')
    expect(html).toContain('aria-describedby="ssr-sec-desc"')
    expect(html).toContain('SSR SECTION')
    expect(html).toContain('<h2 id="ssr-sec-lbl" class="d1-header__label">SSR Section Title</h2>')
    expect(html).toContain('SSR Section Description')
    expect(html).toContain('<span class="ssr-section-area">section</span>')
  })

  it('should render minimal section without body wrapper when only default slot is provided in SSR', async () => {
    const html = await renderToString(createSsrSectionApp(
      {},
      {
        default: () => [h('p', 'Plain SSR Section')]
      }
    ))

    expect(html).toContain('<section class="d1-section"')
    expect(html).toContain('<p>Plain SSR Section</p>')
    expect(html).not.toContain('d1-section__body')
    expect(html).not.toContain('aria-labelledby')
  })
})
