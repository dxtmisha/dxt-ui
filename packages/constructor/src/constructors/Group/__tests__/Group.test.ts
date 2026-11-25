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
import { GroupDesign } from '../GroupDesign'
import { defaultsGroup, type GroupProps, type GroupPropsBasic } from '../props'
import type { GroupClasses, GroupComponents, GroupExpose, GroupSlots } from '../types'

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

describe('Group (integrated component)', () => {
  it('should integrate GroupDesign, Group, defaultsGroup, real HeaderDesign, DescriptionInclude, and AreaDesign', async () => {
    const state = reactive<GroupProps>({
      ...defaultsGroup,
      headline: 'PRIVACY',
      label: 'Data Sharing',
      caption: 'Optional',
      description: 'Control analytics and diagnostic reporting.',
      icon: 'shield',
      iconTurn: true
    })

    const InnerGroup = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({ main: { 'd1-group': true } }))
        const design = new GroupDesign<GroupComponents, GroupExpose, GroupClasses, GroupPropsBasic>(
          'd1.group',
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

    const slots: GroupSlots = {
      trailing: () => [
        h(RealAreaComponent, null, {
          header: () => [h('span', { class: 'in-header-area' }, 'Header Context')],
          group: () => [h('span', { class: 'in-group-area' }, 'Group Context')]
        })
      ],
      default: () => [
        h(RealAreaComponent, null, {
          group: () => [h('div', { class: 'body-group-area' }, 'Group Body Area')],
          compact: () => [h('div', { class: 'body-compact-area' }, 'Compact Body Area')]
        })
      ]
    }

    const Host = defineComponent({
      setup() {
        return () => h(InnerGroup, null, slots as Record<string, () => unknown>)
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    const root = container.querySelector('.d1-group')!
    expect(root.tagName).toBe('DIV')

    const labelledBy = root.getAttribute('aria-labelledby')!
    const describedBy = root.getAttribute('aria-describedby')!
    const headingEl = root.querySelector(`#${labelledBy}`)!
    const descEl = root.querySelector(`#${describedBy}`)!

    expect(headingEl.tagName).toBe('H4')
    expect(headingEl.textContent).toBe('Data Sharing')
    expect(descEl.textContent).toBe('Control analytics and diagnostic reporting.')

    expect(root.querySelector('.d1-group__headline')?.textContent).toBe('PRIVACY')
    expect(root.querySelector('.d1-header__caption')?.textContent).toBe('Optional')
    expect(root.querySelector('.d1-header__icon')?.getAttribute('data-icon')).toBe('shield')

    // Nested Header provides area="header" inside #trailing, while Group provides area="group" in #default!
    expect(root.querySelector('.in-header-area')?.textContent).toBe('Header Context')
    expect(root.querySelector('.body-group-area')?.textContent).toBe('Group Body Area')

    state.area = 'compact'
    state.headline = '<script>alert(1)</script>'
    await nextTick()

    expect(root.querySelector('.body-compact-area')?.textContent).toBe('Compact Body Area')
    expect(root.querySelector('.d1-group__headline')?.textContent).toBe('<script>alert(1)</script>')
    expect(root.querySelector('script')).toBeNull()
  })

  it('should render custom slots (#headline, #label, #caption, #description) and override defaults when props are omitted', () => {
    const InnerGroup = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({ main: { 'd1-group': true } }))
        const design = new GroupDesign<GroupComponents, GroupExpose, GroupClasses, GroupPropsBasic>(
          'd1.group',
          { ...defaultsGroup },
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

    const slots: GroupSlots = {
      headline: () => [h('span', { class: 'slot-headline' }, 'SLOT HEADLINE')],
      label: () => [h('span', { class: 'slot-label' }, 'Slot Title')],
      caption: () => [h('span', { class: 'slot-caption' }, 'Slot Sub')],
      description: () => [h('span', { class: 'slot-description' }, 'Slot Details')],
      default: () => [h('div', { class: 'slot-default' }, 'Slot Content')]
    }

    const container = document.createElement('div')
    const app = createApp({
      render: () => h(InnerGroup, null, slots as Record<string, () => unknown>)
    })
    app.mount(container)
    cleanups.push(() => app.unmount())

    const root = container.querySelector('.d1-group')!
    expect(root.querySelector('.slot-headline')?.textContent).toBe('SLOT HEADLINE')
    expect(root.querySelector('.slot-label')?.textContent).toBe('Slot Title')
    expect(root.querySelector('.slot-caption')?.textContent).toBe('Slot Sub')
    expect(root.querySelector('.slot-description')?.textContent).toBe('Slot Details')
    expect(root.querySelector('.slot-default')?.textContent).toBe('Slot Content')
    expect(root.getAttribute('aria-labelledby')).toBeTruthy()
    expect(root.getAttribute('aria-describedby')).toBeTruthy()
  })
})
