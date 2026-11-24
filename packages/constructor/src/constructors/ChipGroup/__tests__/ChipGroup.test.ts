// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrEmit } from '@dxtmisha/functional'

import { ChipDesign, defaultsChip, type ChipClasses, type ChipComponents, type ChipEmits, type ChipExpose, type ChipProps } from '../../Chip'
import { ChipGroupDesign } from '../ChipGroupDesign'
import { defaultsChipGroup, type ChipGroupProps } from '../props'
import type {
  ChipGroupClasses,
  ChipGroupComponents,
  ChipGroupEmits,
  ChipGroupExpose
} from '../types'

const IntegratedChip = defineComponent({
  name: 'IntegratedChip',
  props: {
    label: [String, Number],
    value: [String, Number],
    selected: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    icon: [String, Object],
    iconHide: Boolean,
    tag: { type: String, default: defaultsChip.tag }
  },
  emits: ['click', 'clickLite'],
  setup(props, { emit }) {
    const classes = computed<ConstrClasses>(() => ({
      main: {
        'd1-chip': true,
        'd1-chip--selected': Boolean(props.selected),
        'd1-chip--disabled': Boolean(props.disabled)
      }
    }))
    const design = new ChipDesign<ChipComponents, ChipExpose, ChipClasses, ChipProps>(
      'd1.chip',
      props as ChipProps,
      {
        emits: emit as unknown as ConstrEmit<ChipEmits>,
        classes
      }
    )
    return design.render()
  }
})

describe('ChipGroup (integrated component)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).forEach(cleanup => cleanup())
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  const mountIntegrated = (initialProps: ChipGroupProps = {}) => {
    const props = reactive<ChipGroupProps>({
      ...defaultsChipGroup,
      ...initialProps
    })
    const emits = vi.fn()

    const Host = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: { 'd1-chipGroup': true }
        }))
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
            components: {
              chip: IntegratedChip
            }
          }
        )
        return design.render()
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    return { container, props, emits }
  }

  it('should render integrated Chip components and toggle single selection on click', async () => {
    const { container, emits } = mountIntegrated({
      list: [
        { label: 'Alpha', value: 'a' },
        { label: 'Zero', value: 0 },
        { label: 'Gamma', value: 'g' }
      ],
      selected: 'a',
      readonly: false
    })

    const chips = container.querySelectorAll('.d1-chip')
    expect(chips).toHaveLength(3)
    expect(chips[0]?.classList.contains('d1-chip--selected')).toBe(true)
    expect(chips[1]?.classList.contains('d1-chip--selected')).toBe(false)

    ;(chips[1] as HTMLElement).click()
    await nextTick()

    expect(chips[0]?.classList.contains('d1-chip--selected')).toBe(false)
    expect(chips[1]?.classList.contains('d1-chip--selected')).toBe(true)
    expect(emits).toHaveBeenCalledWith('update:selected', 0)
    expect(emits).toHaveBeenCalledWith('clickLite', { type: 'click', value: 0, detail: undefined })
  })

  it('should toggle multiple selection items cleanly', async () => {
    const { container, emits } = mountIntegrated({
      list: [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' }
      ],
      selected: ['red'],
      readonly: false,
      multiple: true
    })

    const chips = container.querySelectorAll('.d1-chip')
    ;(chips[2] as HTMLElement).click()
    await nextTick()

    expect(chips[0]?.classList.contains('d1-chip--selected')).toBe(true)
    expect(chips[2]?.classList.contains('d1-chip--selected')).toBe(true)
    expect(emits).toHaveBeenCalledWith('update:selected', ['red', 'blue'])

    ;(chips[0] as HTMLElement).click()
    await nextTick()

    expect(chips[0]?.classList.contains('d1-chip--selected')).toBe(false)
    expect(emits).toHaveBeenCalledWith('update:selected', ['blue'])
  })

  it('should default to readonly=true preventing accidental selection mutation', async () => {
    const { container, emits } = mountIntegrated({
      list: [
        { label: 'One', value: '1' },
        { label: 'Two', value: '2' }
      ],
      selected: '1'
    })

    const chips = container.querySelectorAll('.d1-chip')
    ;(chips[1] as HTMLElement).click()
    await nextTick()

    expect(chips[0]?.classList.contains('d1-chip--selected')).toBe(true)
    expect(chips[1]?.classList.contains('d1-chip--selected')).toBe(false)
    expect(emits).toHaveBeenCalledWith('clickLite', { type: 'click', value: '2', detail: undefined })
  })

  it('should ignore clicks on disabled individual chip items', async () => {
    const { container, emits } = mountIntegrated({
      list: [
        { label: 'Enabled', value: 'ok' },
        { label: 'Disabled', value: 'blocked', disabled: true }
      ],
      selected: 'ok',
      readonly: false
    })

    const chips = container.querySelectorAll('.d1-chip')
    ;(chips[1] as HTMLElement).click()
    await nextTick()

    expect(chips[0]?.classList.contains('d1-chip--selected')).toBe(true)
    expect(emits).not.toHaveBeenCalled()
  })

  it('should handle reactive list and selected prop updates with Unicode labels', async () => {
    const { container, props } = mountIntegrated({
      list: [
        { label: 'Tiếng Việt', value: 'vi' },
        { label: 'Кириллица 🚀', value: 'ru' }
      ],
      selected: 'vi'
    })

    expect(container.textContent).toContain('Tiếng Việt')
    expect(container.textContent).toContain('Кириллица 🚀')

    props.selected = 'ru'
    await nextTick()

    const chips = container.querySelectorAll('.d1-chip')
    expect(chips[0]?.classList.contains('d1-chip--selected')).toBe(false)
    expect(chips[1]?.classList.contains('d1-chip--selected')).toBe(true)
  })
})
