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
import { SectionDesign } from '../SectionDesign'
import { defaultsSection, type SectionProps, type SectionPropsBasic } from '../props'
import type { SectionClasses, SectionComponents, SectionExpose, SectionSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: { icon: [String, Object] },
  setup(props, { attrs }) {
    return () => h('span', {
      'class': ['mock-icon', attrs.class],
      'data-icon': typeof props.icon === 'string' ? props.icon : 'obj'
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

describe('Section (integrated component)', () => {
  it('should integrate SectionDesign, Section, HeaderDesign, DescriptionInclude, and AreaDesign safely', async () => {
    const state = reactive<SectionProps>({
      ...defaultsSection,
      headline: 'PRIVACY',
      label: 'Data Sharing',
      caption: 'Optional',
      description: 'Control analytics sharing preferences.',
      icon: 'shield'
    })

    const InnerSection = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({ main: { 'd1-section': true } }))
        const design = new SectionDesign<SectionComponents, SectionExpose, SectionClasses, SectionPropsBasic>(
          'd1.section',
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

    const slots: SectionSlots = {
      trailing: () => [
        h(RealAreaComponent, null, {
          header: () => [h('span', { class: 'in-header-area' }, 'Header Zone')],
          section: () => [h('span', { class: 'in-section-area' }, 'Section Zone')]
        })
      ],
      default: () => [
        h(RealAreaComponent, null, {
          section: () => [h('div', { class: 'body-section-area' }, 'Default Section Area')],
          compact: () => [h('div', { class: 'body-compact-area' }, 'Compact Section Area')]
        })
      ]
    }

    const Host = defineComponent({
      setup() {
        return () => h(InnerSection, null, slots as Record<string, () => unknown>)
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    const root = container.querySelector('.d1-section')!
    expect(root.tagName).toBe('SECTION')

    const labelledBy = root.getAttribute('aria-labelledby')!
    const describedBy = root.getAttribute('aria-describedby')!
    expect(root.querySelector(`#${labelledBy}`)?.tagName).toBe('H2')
    expect(root.querySelector(`#${labelledBy}`)?.textContent).toBe('Data Sharing')
    expect(root.querySelector(`#${describedBy}`)?.textContent).toBe('Control analytics sharing preferences.')
    expect(root.querySelector('.d1-section__headline')?.textContent).toBe('PRIVACY')
    expect(root.querySelector('.d1-header__caption')?.textContent).toBe('Optional')
    expect(root.querySelector('.d1-header__icon')?.getAttribute('data-icon')).toBe('shield')
    expect(root.querySelector('.in-header-area')?.textContent).toBe('Header Zone')
    expect(root.querySelector('.body-section-area')?.textContent).toBe('Default Section Area')

    state.area = 'compact'
    state.headline = '<img src=x onerror=alert(1)>'
    await nextTick()

    expect(root.querySelector('.body-compact-area')?.textContent).toBe('Compact Section Area')
    expect(root.querySelector('.d1-section__headline')?.textContent).toBe('<img src=x onerror=alert(1)>')
    expect(root.querySelector('.d1-section__headline img')).toBeNull()
  })
})
