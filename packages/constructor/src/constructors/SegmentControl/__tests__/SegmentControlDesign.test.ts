// @vitest-environment jsdom
import { describe, it, expect, afterEach } from 'vitest'
import { createApp, defineComponent, h, reactive } from 'vue'

import { TabsNavigationDesign } from '../../TabsNavigation'
import { SegmentControl } from '../SegmentControl'
import { SegmentControlDesign } from '../SegmentControlDesign'
import type { SegmentControlPropsBasic } from '../props'

const MockHorizontalScroll = defineComponent({
  name: 'MockHorizontalScroll',
  props: {
    bleed: { type: Boolean, default: undefined },
    align: { type: String, default: undefined }
  },
  setup(props, { slots, attrs, expose }) {
    expose({
      getElement: () => undefined,
      toSelected: () => undefined
    })

    return () => h(
      'div',
      {
        ...attrs,
        'data-mock-scroll': 'true',
        'data-bleed': String(props.bleed),
        'data-align': String(props.align)
      },
      slots.default?.({
        classItem: 'mock-scroll__item',
        classItemSelected: 'mock-scroll__item--selected',
        binds: { class: 'mock-scroll__item' }
      })
    )
  }
})

const MockSegmentControlItem = defineComponent({
  name: 'MockSegmentControlItem',
  props: {
    label: { type: [String, Number], default: undefined },
    value: { type: [String, Number], default: undefined },
    selected: { type: Boolean, default: false },
    tag: { type: String, default: undefined }
  },
  setup(props, { attrs }) {
    return () => h(
      'button',
      {
        ...attrs,
        'data-mock-segment-item': 'true',
        'data-label': String(props.label ?? ''),
        'data-value': String(props.value ?? ''),
        'data-selected': String(props.selected),
        'data-tag': String(props.tag ?? '')
      },
      String(props.label ?? '')
    )
  }
})

describe('SegmentControlDesign (unit)', () => {
  const containers: HTMLElement[] = []

  afterEach(() => {
    containers.splice(0).forEach(container => container.remove())
  })

  it('should render items via segmentControlItem component key and preserve slots, attrs, and tag', () => {
    const props = reactive<SegmentControlPropsBasic>({
      list: [
        { label: 'Alpha', value: 'alpha' },
        { label: 'Beta', value: 'beta' }
      ],
      selected: 'beta',
      horizontalScrollAlign: 'block',
      horizontalScrollBleed: false,
      tag: 'a',
      itemAttrs: { 'data-extra': 'yes' }
    })

    let design!: SegmentControlDesign<any, any, any, SegmentControlPropsBasic>

    const Host = defineComponent({
      setup() {
        design = new SegmentControlDesign(
          'd1.segmentControl',
          props,
          {
            components: {
              horizontalScroll: MockHorizontalScroll,
              segmentControlItem: MockSegmentControlItem
            }
          },
          SegmentControl
        )

        const render = design.render()
        return () => render()
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    containers.push(container)

    const app = createApp(Host)
    app.mount(container)

    expect(design).toBeInstanceOf(TabsNavigationDesign)

    const root = container.querySelector('[data-mock-scroll="true"]')
    expect(root?.getAttribute('role')).toBe('tablist')
    expect(root?.getAttribute('aria-orientation')).toBe('horizontal')
    expect(root?.getAttribute('data-align')).toBe('block')
    expect(root?.getAttribute('data-bleed')).toBe('false')

    const items = container.querySelectorAll('[data-mock-segment-item="true"]')
    expect(items).toHaveLength(2)
    expect(items[0]?.getAttribute('data-extra')).toBe('yes')
    expect(items[0]?.getAttribute('data-tag')).toBe('a')
    expect(items[1]?.getAttribute('data-selected')).toBe('true')
    expect(items[1]?.classList.contains('mock-scroll__item--selected')).toBe(true)

    app.unmount()
  })
})
