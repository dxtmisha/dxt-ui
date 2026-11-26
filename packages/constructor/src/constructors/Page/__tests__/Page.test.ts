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
import { PageDesign } from '../PageDesign'
import { defaultsPage, type PageProps, type PagePropsBasic } from '../props'
import type { PageClasses, PageComponents, PageExpose, PageSlots } from '../types'

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

describe('Page (integrated component)', () => {
  it('should integrate PageDesign, Page, HeaderInclude + real HeaderDesign, DescriptionInclude, and AreaDesign', async () => {
    const state = reactive<PageProps>({
      ...defaultsPage,
      headline: 'ADMINISTRATION',
      label: 'User Management',
      caption: 'Organization Scope',
      description: 'Configure roles, permissions, and security policies.',
      icon: 'shield',
      iconTurn: true
    })

    const InnerPage = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({ main: { 'd1-page': true } }))
        const design = new PageDesign<PageComponents, PageExpose, PageClasses, PagePropsBasic>(
          'd1.page',
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

    const slots: PageSlots = {
      trailing: () => [
        h(RealAreaComponent, null, {
          header: () => [h('span', { class: 'in-header-area' }, 'Header Context')],
          page: () => [h('span', { class: 'in-page-area' }, 'Page Context')]
        })
      ],
      default: () => [
        h(RealAreaComponent, null, {
          page: () => [h('div', { class: 'body-page-area' }, 'Page Body Area')],
          compact: () => [h('div', { class: 'body-compact-area' }, 'Compact Body Area')]
        })
      ]
    }

    const Host = defineComponent({
      setup() {
        return () => h(InnerPage, null, slots as Record<string, () => unknown>)
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    const root = container.querySelector('.d1-page')!
    expect(root.tagName).toBe('MAIN')

    const labelledBy = root.getAttribute('aria-labelledby')!
    const describedBy = root.getAttribute('aria-describedby')!
    const headingElement = root.querySelector(`#${labelledBy}`)!
    const descriptionElement = root.querySelector(`#${describedBy}`)!

    expect(headingElement.tagName).toBe('H1')
    expect(headingElement.textContent).toBe('User Management')
    expect(descriptionElement.textContent).toBe('Configure roles, permissions, and security policies.')

    expect(root.querySelector('.d1-page__headline')?.textContent).toBe('ADMINISTRATION')
    expect(root.querySelector('.d1-header__caption')?.textContent).toBe('Organization Scope')
    expect(root.querySelector('.d1-header__icon')?.getAttribute('data-icon')).toBe('shield')

    // Nested Header provides area="header" inside #trailing, while Page provides area="page" in #default!
    expect(root.querySelector('.in-header-area')?.textContent).toBe('Header Context')
    expect(root.querySelector('.body-page-area')?.textContent).toBe('Page Body Area')

    state.area = 'compact'
    state.tag = 'article'
    state.headline = '<script>alert(1)</script>'
    await nextTick()

    const updatedRoot = container.querySelector('.d1-page')!
    expect(updatedRoot.tagName).toBe('ARTICLE')
    expect(updatedRoot.querySelector('.body-compact-area')?.textContent).toBe('Compact Body Area')
    expect(updatedRoot.querySelector('.d1-page__headline')?.textContent).toBe('<script>alert(1)</script>')
    expect(updatedRoot.querySelector('script')).toBeNull()
  })
})
