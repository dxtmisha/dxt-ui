// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { getAreaValue } from '../../../functions/getAreaValue'
import { HeaderDesign } from '../../Header/HeaderDesign'
import { defaultsHeader, type HeaderProps, type HeaderPropsBasic } from '../../Header/props'
import type { HeaderClasses, HeaderComponents, HeaderExpose } from '../../Header/types'
import { GroupDesign } from '../GroupDesign'
import { defaultsGroup, type GroupProps, type GroupPropsBasic } from '../props'
import type { GroupClasses, GroupComponents, GroupExpose, GroupSlots } from '../types'

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
    return () => h('span', { class: 'ssr-group-area' }, getAreaValue() ?? 'none')
  }
})

function createSsrGroupApp(props: GroupProps, slots?: GroupSlots) {
  const SsrGroup = defineComponent({
    setup() {
      const mergedProps: GroupProps = { ...defaultsGroup, ...props }
      const classes = computed<ConstrClasses>(() => ({ main: { 'd1-group': true } }))
      const design = new GroupDesign<GroupComponents, GroupExpose, GroupClasses, GroupPropsBasic>(
        'd1.group',
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
    render: () => h(SsrGroup, null, slots as Record<string, () => unknown>)
  })
}

describe('Group (SSR)', () => {
  it('should render default div container, h4 tagHeader, group area context, and ARIA links in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderToString(createSsrGroupApp(
      {
        headline: 'SSR GROUP HEADLINE',
        label: 'SSR Group Title',
        labelId: 'ssr-grp-lbl',
        caption: 'SSR Group Caption',
        description: 'SSR Group Description',
        descriptionId: 'ssr-grp-desc'
      },
      {
        trailing: () => [h('span', { class: 'ssr-trailing' }, 'SSR Action')],
        default: () => [h(SsrAreaProbe)]
      }
    ))

    expect(html).toContain('<div')
    expect(html).toContain('class="d1-group"')
    expect(html).toContain('aria-labelledby="ssr-grp-lbl"')
    expect(html).toContain('aria-describedby="ssr-grp-desc"')
    expect(html).toContain('SSR GROUP HEADLINE')
    expect(html).toContain('<h4 id="ssr-grp-lbl" class="d1-header__label">SSR Group Title</h4>')
    expect(html).toContain('SSR Group Caption')
    expect(html).toContain('SSR Action')
    expect(html).toContain('SSR Group Description')
    expect(html).toContain('<span class="ssr-group-area">group</span>')
  })

  it('should render custom tag, tagHeader, and area without body wrapper when only default slot is provided', async () => {
    const customHtml = await renderToString(createSsrGroupApp(
      {
        tag: 'section',
        tagHeader: 'h2',
        area: 'ssr-custom-group',
        label: 'Custom Heading',
        labelId: 'ssr-custom-lbl'
      },
      {
        default: () => [h(SsrAreaProbe)]
      }
    ))

    expect(customHtml).toContain('<section')
    expect(customHtml).toContain('class="d1-group"')
    expect(customHtml).toContain('<h2 id="ssr-custom-lbl" class="d1-header__label">Custom Heading</h2>')
    expect(customHtml).toContain('<span class="ssr-group-area">ssr-custom-group</span>')

    const minimalHtml = await renderToString(createSsrGroupApp(
      {},
      {
        default: () => [h('p', 'Plain SSR Group Paragraph')]
      }
    ))

    expect(minimalHtml).toContain('<div class="d1-group"')
    expect(minimalHtml).toContain('<p>Plain SSR Group Paragraph</p>')
    expect(minimalHtml).not.toContain('d1-group__body')
    expect(minimalHtml).not.toContain('aria-labelledby')
  })

  it('should isolate SSR area state across independent ServerStorage request contexts', async () => {
    const firstHtml = await renderToString(createSsrGroupApp(
      { area: 'request-alpha' },
      { default: () => [h(SsrAreaProbe)] }
    ))

    ServerStorage.reset()
    const secondRequest: Record<string, unknown> = {}
    ServerStorage.init(() => secondRequest)

    const secondHtml = await renderToString(createSsrGroupApp(
      { area: 'request-beta' },
      { default: () => [h(SsrAreaProbe)] }
    ))

    expect(firstHtml).toContain('<span class="ssr-group-area">request-alpha</span>')
    expect(secondHtml).toContain('<span class="ssr-group-area">request-beta</span>')
    expect(secondHtml).not.toContain('request-alpha')
  })
})
