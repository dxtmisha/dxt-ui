// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { getAreaValue } from '../../../functions/getAreaValue'
import { HeaderDesign } from '../../Header/HeaderDesign'
import { defaultsHeader, type HeaderProps, type HeaderPropsBasic } from '../../Header/props'
import type { HeaderClasses, HeaderComponents, HeaderExpose } from '../../Header/types'
import { BlockDesign } from '../BlockDesign'
import { defaultsBlock, type BlockProps, type BlockPropsBasic } from '../props'
import type { BlockClasses, BlockComponents, BlockExpose, BlockSlots } from '../types'

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
    return () => h('span', { class: 'ssr-block-area' }, getAreaValue() ?? 'none')
  }
})

function createSsrBlockApp(props: BlockProps, slots?: BlockSlots) {
  const SsrBlock = defineComponent({
    setup() {
      const mergedProps: BlockProps = { ...defaultsBlock, ...props }
      const classes = computed<ConstrClasses>(() => ({ main: { 'd1-block': true } }))
      const design = new BlockDesign<BlockComponents, BlockExpose, BlockClasses, BlockPropsBasic>(
        'd1.block',
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
    render: () => h(SsrBlock, null, slots as Record<string, () => unknown>)
  })
}

describe('Block (SSR)', () => {
  it('should render semantic container, headline, header, description, ARIA links, and area context in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderToString(createSsrBlockApp(
      {
        tag: 'article',
        headline: 'SSR HEADLINE',
        label: 'SSR Block Title',
        labelId: 'ssr-blk-lbl',
        caption: 'SSR Caption',
        description: 'SSR Block Description',
        descriptionId: 'ssr-blk-desc',
        tagHeader: 'h2',
        area: 'ssr-block-zone'
      },
      {
        default: () => [h(SsrAreaProbe)]
      }
    ))

    expect(html).toContain('<article')
    expect(html).toContain('aria-labelledby="ssr-blk-lbl"')
    expect(html).toContain('aria-describedby="ssr-blk-desc"')
    expect(html).toContain('SSR HEADLINE')
    expect(html).toContain('<h2 id="ssr-blk-lbl" class="d1-header__label">SSR Block Title</h2>')
    expect(html).toContain('SSR Block Description')
    expect(html).toContain('<span class="ssr-block-area">ssr-block-zone</span>')
  })

  it('should render minimal block without body wrapper when only default slot is provided in SSR', async () => {
    const html = await renderToString(createSsrBlockApp(
      {},
      {
        default: () => [h('p', 'Plain SSR Paragraph')]
      }
    ))

    expect(html).toContain('<div class="d1-block"')
    expect(html).toContain('<p>Plain SSR Paragraph</p>')
    expect(html).not.toContain('d1-block__body')
    expect(html).not.toContain('aria-labelledby')
  })
})
