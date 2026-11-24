// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { AreaDesign } from '../../Area/AreaDesign'
import type { AreaClasses, AreaComponents, AreaExpose } from '../../Area/types'
import type { AreaPropsBasic } from '../../Area/props'
import { HeaderDesign } from '../HeaderDesign'
import { defaultsHeader, type HeaderProps, type HeaderPropsBasic } from '../props'
import type { HeaderClasses, HeaderComponents, HeaderExpose, HeaderSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: {
    icon: [String, Object],
    turn: Boolean,
    hide: Boolean,
    dir: Boolean,
    asPalette: Boolean
  },
  setup(props, { attrs }) {
    return () => h('span', {
      'class': ['mock-icon', attrs.class],
      'data-icon': typeof props.icon === 'string' ? props.icon : 'object',
      'data-turn': String(Boolean(props.turn)),
      'data-hide': String(Boolean(props.hide)),
      'data-dir': String(Boolean(props.dir)),
      'data-palette': String(Boolean(props.asPalette))
    })
  }
})

const IntegratedArea = defineComponent({
  name: 'IntegratedArea',
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

describe('Header (integrated component)', () => {
  it('should integrate HeaderDesign, Header orchestrator, AreaInclude, IconInclude, LabelInclude, and CaptionInclude', async () => {
    const state = reactive<HeaderProps>({
      ...defaultsHeader,
      label: 'Account Overview',
      labelId: 'account-hdr-id',
      caption: 'Updated now',
      icon: 'person',
      iconTurn: true,
      iconDir: true,
      iconPalette: true
    })

    const InnerHeader = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: {
            'd1-header': true,
            [`d1-header--tag--${state.tag}`]: Boolean(state.tag)
          }
        }))

        const design = new HeaderDesign<HeaderComponents, HeaderExpose, HeaderClasses, HeaderPropsBasic>(
          'd1.header',
          state,
          {
            classes,
            components: { icon: MockIcon }
          }
        )
        return design.render()
      }
    })

    const slots: HeaderSlots = {
      trailing: () => [
        h(IntegratedArea, null, {
          header: () => [h('span', { class: 'area-in-header' }, 'Header Area Slot')],
          custom: () => [h('span', { class: 'area-in-custom' }, 'Custom Area Slot')]
        })
      ]
    }

    const Host = defineComponent({
      setup() {
        return () => h(InnerHeader, null, slots as Record<string, () => unknown>)
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    const root = container.querySelector('.d1-header')!
    expect(root.classList.contains('d1-header--tag--h3')).toBe(true)

    const heading = root.querySelector('#account-hdr-id')!
    expect(heading.tagName).toBe('H3')
    expect(heading.textContent).toBe('Account Overview')

    const icon = root.querySelector('.d1-header__icon')!
    expect(icon.getAttribute('data-icon')).toBe('person')
    expect(icon.getAttribute('data-turn')).toBe('true')
    expect(icon.getAttribute('data-dir')).toBe('true')
    expect(icon.getAttribute('data-palette')).toBe('true')

    expect(root.querySelector('.area-in-header')?.textContent).toBe('Header Area Slot')
    expect(root.querySelector('.area-in-custom')).toBeNull()

    state.area = 'custom'
    state.tag = 'h1'
    state.label = '<img src=x onerror=alert(1)>'
    await nextTick()

    expect(root.classList.contains('d1-header--tag--h1')).toBe(true)
    expect(root.querySelector('#account-hdr-id')?.tagName).toBe('H1')
    expect(root.querySelector('#account-hdr-id')?.textContent).toBe('<img src=x onerror=alert(1)>')
    expect(root.querySelector('img')).toBeNull()
    expect(root.querySelector('.area-in-custom')?.textContent).toBe('Custom Area Slot')
  })
})
