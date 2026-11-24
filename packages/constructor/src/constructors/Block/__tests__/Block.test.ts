// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { AreaDesign } from '../../Area/AreaDesign'
import type { AreaPropsBasic } from '../../Area/props'
import type { AreaClasses, AreaComponents, AreaExpose } from '../../Area/types'
import { HeaderDesign } from '../../Header/HeaderDesign'
import { defaultsHeader, type HeaderProps, type HeaderPropsBasic } from '../../Header/props'
import type { HeaderClasses, HeaderComponents, HeaderExpose } from '../../Header/types'
import { BlockDesign } from '../BlockDesign'
import { defaultsBlock, type BlockProps, type BlockPropsBasic } from '../props'
import type { BlockClasses, BlockComponents, BlockExpose, BlockSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: { icon: [String, Object], turn: Boolean },
  setup(props, { attrs }) {
    return () => h('span', {
      'class': ['mock-icon', attrs.class],
      'data-icon': typeof props.icon === 'string' ? props.icon : 'obj',
      'data-turn': String(Boolean(props.turn))
    })
  }
})

const RealHeaderComponent = defineComponent({
  name: 'RealHeaderComponent',
  props: {
    label: [String, Number],
    labelId: String,
    caption: [String, Number],
    captionDecorative: Boolean,
    icon: [String, Object],
    iconTurn: Boolean,
    iconHide: Boolean,
    iconDir: Boolean,
    iconPalette: Boolean,
    iconAttrs: Object,
    area: { type: String, default: defaultsHeader.area },
    tag: { type: String, default: defaultsHeader.tag }
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
      {
        classes,
        components: { icon: MockIcon }
      }
    )
    return design.render()
  }
})

const RealAreaComponent = defineComponent({
  name: 'RealAreaComponent',
  setup() {
    const classes = computed<ConstrClasses>(() => ({ main: { 'd1-area': true } }))
    const design = new AreaDesign<AreaComponents, AreaExpose, AreaClasses, AreaPropsBasic>(
      'd1.area',
      {},
      { classes }
    )
    return design.render()
  }
})

describe('Block (integrated component)', () => {
  it('should integrate BlockDesign, Block, HeaderInclude + real HeaderDesign, DescriptionInclude, and AreaDesign', async () => {
    const state = reactive<BlockProps>({
      ...defaultsBlock,
      tag: 'section',
      headline: 'SECURITY',
      label: 'Two-Factor Authentication',
      caption: 'Recommended',
      description: 'Protect your account with an extra verification step.',
      icon: 'lock',
      iconTurn: true,
      tagHeader: 'h2'
    })

    const InnerBlock = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({ main: { 'd1-block': true } }))
        const design = new BlockDesign<BlockComponents, BlockExpose, BlockClasses, BlockPropsBasic>(
          'd1.block',
          state,
          {
            classes,
            components: {
              header: RealHeaderComponent
            }
          }
        )
        return design.render()
      }
    })

    const slots: BlockSlots = {
      trailing: () => [
        h(RealAreaComponent, null, {
          header: () => [h('span', { class: 'in-header-area' }, 'Header Context')],
          block: () => [h('span', { class: 'in-block-area' }, 'Block Context')]
        })
      ],
      default: () => [
        h(RealAreaComponent, null, {
          block: () => [h('div', { class: 'body-block-area' }, 'Block Body Area')],
          compact: () => [h('div', { class: 'body-compact-area' }, 'Compact Body Area')]
        })
      ]
    }

    const Host = defineComponent({
      setup() {
        return () => h(InnerBlock, null, slots as Record<string, () => unknown>)
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    const root = container.querySelector('.d1-block')!
    expect(root.tagName).toBe('SECTION')

    const labelledBy = root.getAttribute('aria-labelledby')!
    const describedBy = root.getAttribute('aria-describedby')!
    const headingEl = root.querySelector(`#${labelledBy}`)!
    const descEl = root.querySelector(`#${describedBy}`)!

    expect(headingEl.tagName).toBe('H2')
    expect(headingEl.textContent).toBe('Two-Factor Authentication')
    expect(descEl.textContent).toBe('Protect your account with an extra verification step.')

    expect(root.querySelector('.d1-block__headline')?.textContent).toBe('SECURITY')
    expect(root.querySelector('.d1-header__caption')?.textContent).toBe('Recommended')
    expect(root.querySelector('.d1-header__icon')?.getAttribute('data-icon')).toBe('lock')

    // Nested Header provides area="header" inside #trailing, while Block provides area="block" in #default!
    expect(root.querySelector('.in-header-area')?.textContent).toBe('Header Context')
    expect(root.querySelector('.body-block-area')?.textContent).toBe('Block Body Area')

    state.area = 'compact'
    state.headline = '<script>alert(1)</script>'
    await nextTick()

    expect(root.querySelector('.body-compact-area')?.textContent).toBe('Compact Body Area')
    expect(root.querySelector('.d1-block__headline')?.textContent).toBe('<script>alert(1)</script>')
    expect(root.querySelector('script')).toBeNull()
  })
})
