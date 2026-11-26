// @vitest-environment jsdom
import { describe, it, expect, afterEach, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive } from 'vue'

import { HorizontalScrollDesign } from '../../HorizontalScroll'
import { SegmentControlItemDesign } from '../../SegmentControlItem'
import { SegmentControlDesign } from '../SegmentControlDesign'
import { defaultsSegmentControl, type SegmentControlProps } from '../props'

const RealHorizontalScroll = defineComponent({
  name: 'TestHorizontalScroll',
  props: {
    bleed: { type: Boolean, default: undefined },
    align: { type: String, default: undefined },
    tag: { type: String, default: 'div' }
  },
  setup(props, { expose }) {
    const design = new HorizontalScrollDesign('d1.horizontalScroll', props)
    expose(design.expose())
    const render = design.render()
    return () => render()
  }
})

const RealSegmentControlItem = defineComponent({
  name: 'TestSegmentControlItem',
  props: {
    label: { type: [String, Number], default: undefined },
    value: { type: [String, Number], default: undefined },
    index: { type: [String, Number], default: undefined },
    selected: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    loading: { type: [Boolean, Object], default: false },
    tag: { type: String, default: undefined },
    role: { type: String, default: 'tab' }
  },
  emits: ['click', 'clickLite'],
  setup(props, { emit, expose }) {
    const design = new SegmentControlItemDesign(
      'd1.segmentControlItem',
      props,
      { emits: emit as never }
    )
    expose(design.expose())
    const render = design.render()
    return () => render()
  }
})

describe('SegmentControl (integration)', () => {
  const containers: HTMLElement[] = []

  afterEach(() => {
    containers.splice(0).forEach(container => container.remove())
  })

  it('should render segments, switch selection by click and keyboard, support numeric 0 key and leading/trailing slots', async () => {
    const onUpdateSelected = vi.fn()
    const onClick = vi.fn()
    const props = reactive<SegmentControlProps>({
      ...defaultsSegmentControl,
      list: [
        { name: 'Zero', id: 0 },
        { name: 'Disabled', id: 1, disabled: true },
        { name: 'Tiếng Việt', id: 2 }
      ] as never,
      keyLabel: 'name',
      keyValue: 'id',
      selected: 0,
      divider: true
    })

    let exposedIds: (() => Record<string | number, string>) | undefined

    const Host = defineComponent({
      setup() {
        const design = new SegmentControlDesign(
          'd1.segmentControl',
          props,
          {
            emits: ((event: string, ...args: unknown[]) => {
              if (event === 'update:selected') {
                props.selected = args[0] as number
                onUpdateSelected(args[0])
              } else if (event === 'click') {
                onClick(...args)
              }
            }) as never,
            components: {
              horizontalScroll: RealHorizontalScroll,
              segmentControlItem: RealSegmentControlItem
            }
          }
        )
        exposedIds = design.expose().ids
        const render = design.render()
        return () => render()
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    containers.push(container)

    const app = createApp({
      render: () => h(
        Host,
        { 'aria-label': 'View switcher' },
        {
          leading: () => h('span', { class: 'slot-leading' }, 'Start'),
          trailing: () => h('span', { class: 'slot-trailing' }, 'End')
        }
      )
    })

    app.mount(container)
    await nextTick()

    const tablist = container.querySelector('[role="tablist"]') as HTMLElement
    expect(tablist).not.toBeNull()
    expect(tablist.getAttribute('aria-label')).toBe('View switcher')
    expect(container.querySelector('.slot-leading')?.textContent).toBe('Start')
    expect(container.querySelector('.slot-trailing')?.textContent).toBe('End')

    const tabs = container.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    expect(tabs).toHaveLength(3)
    expect(tabs[0]?.getAttribute('aria-selected')).toBe('true')
    expect(tabs[0]?.getAttribute('data-value')).toBe('0')
    expect(tabs[1]?.getAttribute('aria-disabled')).toBe('true')
    expect(exposedIds?.()[0]).toBeTruthy()
    expect(exposedIds?.()[2]).toBeTruthy()

    // Click third segment
    tabs[2]?.click()
    await nextTick()
    expect(onUpdateSelected).toHaveBeenCalledWith(2)
    expect(onClick).toHaveBeenCalled()

    // Keyboard navigation from focus skips disabled item
    tablist.dispatchEvent(new FocusEvent('focus'))
    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true }))
    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    await nextTick()
    expect(props.selected).toBe(0)

    app.unmount()
  })
})
