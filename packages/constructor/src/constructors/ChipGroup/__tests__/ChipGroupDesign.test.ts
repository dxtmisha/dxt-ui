// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { type Component, computed, createApp, defineComponent, h, reactive } from 'vue'
import type { ConstrClasses, ConstrEmit, ConstrStyles } from '@dxtmisha/functional'

import { ChipGroup } from '../ChipGroup'
import { ChipGroupDesign } from '../ChipGroupDesign'
import type { ChipGroupProps } from '../props'
import type {
  ChipGroupClasses,
  ChipGroupComponents,
  ChipGroupEmits,
  ChipGroupExpose,
  ChipGroupSlots
} from '../types'

const MockChip = defineComponent({
  name: 'MockChip',
  props: {
    label: [String, Number],
    value: [String, Number],
    selected: Boolean,
    icon: String,
    iconHide: Boolean,
    palette: String
  },
  emits: ['click'],
  setup(props, { emit, attrs }) {
    return () => h(
      'span',
      {
        ...attrs,
        'class': ['mock-chip', attrs.class],
        'data-value': props.value,
        'data-selected': String(Boolean(props.selected)),
        'data-icon-hide': String(Boolean(props.iconHide)),
        'data-palette': props.palette,
        'onClick': (event: MouseEvent) => emit('click', event, { value: props.value })
      },
      String(props.label ?? '')
    )
  }
})

describe('ChipGroupDesign (unit)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).forEach(cleanup => cleanup())
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  const mountDesign = (
    initialProps: ChipGroupProps,
    options: {
      attrs?: Record<string, unknown>
      slots?: ChipGroupSlots
      ItemConstructor?: typeof ChipGroup
    } = {}
  ) => {
    const props = reactive<ChipGroupProps>(initialProps)
    const emits = vi.fn()
    const classes = computed<ConstrClasses>(() => ({ main: { 'd1-chipGroup': true } }))
    const styles = computed<ConstrStyles>(() => ({ '--custom': '1' }))

    const Host = defineComponent({
      setup() {
        const design = new ChipGroupDesign<
          ChipGroupComponents,
          ChipGroupExpose,
          ChipGroupClasses,
          ChipGroupProps
        >(
          'd1.chipGroup',
          props,
          {
            emits: emits as unknown as ConstrEmit<ChipGroupEmits>,
            classes,
            styles,
            components: {
              chip: MockChip
            }
          },
          options.ItemConstructor
        )
        return design.render()
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp({
      render: () => h(Host as Component, options.attrs, options.slots ? { ...options.slots } : undefined)
    })
    app.mount(container)
    cleanups.push(() => app.unmount())

    return { container, props, emits }
  }

  it('should merge external attrs, class, and style on root element via mergeProps', () => {
    const { container } = mountDesign(
      { list: [{ label: 'One', value: '1' }] },
      { attrs: { 'id': 'group-1', 'class': 'custom-group', 'style': 'opacity: 0.9', 'data-testid': 'cg' } }
    )

    const root = container.querySelector('[data-testid="cg"]') as HTMLElement
    expect(root.id).toBe('group-1')
    expect(root.classList.contains('d1-chipGroup')).toBe(true)
    expect(root.classList.contains('custom-group')).toBe(true)
    expect(root.style.opacity).toBe('0.9')
  })

  it('should compose chipAttrs, item props, iconWhenSelected, and preserve chipAttrs onClick alongside model onClick', () => {
    const chipAttrsClick = vi.fn()
    const { container, emits } = mountDesign({
      list: [
        { label: 'Active', value: 'a', icon: 'check' },
        { label: 'Inactive', value: 'b', icon: 'check' }
      ],
      selected: 'a',
      readonly: false,
      iconWhenSelected: true,
      chipAttrs: {
        palette: 'purple',
        onClick: chipAttrsClick
      }
    })

    const chips = container.querySelectorAll('.mock-chip')
    expect(chips).toHaveLength(2)
    expect(chips[0]?.getAttribute('data-icon-hide')).toBe('false')
    expect(chips[1]?.getAttribute('data-icon-hide')).toBe('true')
    expect(chips[0]?.getAttribute('data-palette')).toBe('purple')

    ;(chips[1] as HTMLElement).click()
    expect(chipAttrsClick).toHaveBeenCalledTimes(1)
    expect(emits).toHaveBeenCalledWith('clickLite', { value: 'b' })
  })

  it('should not overwrite chipAttrs.iconHide when iconWhenSelected is disabled', () => {
    const { container } = mountDesign({
      list: [{ label: 'HiddenIcon', value: 'h', icon: 'star' }],
      iconWhenSelected: false,
      chipAttrs: { iconHide: true }
    })

    const chip = container.querySelector('.mock-chip')
    expect(chip?.getAttribute('data-icon-hide')).toBe('true')
  })

  it('should render default slot alongside list items and support DI ItemConstructor', () => {
    const customSpy = vi.fn()
    class CustomChipGroup extends ChipGroup {
      override getList() {
        customSpy()
        return super.getList()
      }
    }

    const { container } = mountDesign(
      { list: [{ label: 'Chip 1', value: '1' }] },
      {
        slots: { default: () => [h('span', { class: 'slot-chip' }, 'Custom Slot')] },
        ItemConstructor: CustomChipGroup
      }
    )

    expect(customSpy).toHaveBeenCalled()
    expect(container.querySelectorAll('.mock-chip')).toHaveLength(1)
    expect(container.querySelector('.slot-chip')?.textContent).toBe('Custom Slot')
  })
})
