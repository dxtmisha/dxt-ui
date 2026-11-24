// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { type Component, computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { ChipDesign, defaultsChip, type ChipClasses, type ChipComponents, type ChipExpose, type ChipProps } from '../../Chip'
import { ChipGroupDesign } from '../ChipGroupDesign'
import { defaultsChipGroup, type ChipGroupProps } from '../props'
import type {
  ChipGroupClasses,
  ChipGroupComponents,
  ChipGroupExpose,
  ChipGroupSlots
} from '../types'

const SsrChip = defineComponent({
  name: 'SsrChip',
  props: {
    label: [String, Number],
    value: [String, Number],
    selected: Boolean,
    tag: { type: String, default: defaultsChip.tag }
  },
  setup(props) {
    const classes = computed<ConstrClasses>(() => ({
      main: {
        'd1-chip': true,
        'd1-chip--selected': Boolean(props.selected)
      }
    }))
    const design = new ChipDesign<ChipComponents, ChipExpose, ChipClasses, ChipProps>(
      'd1.chip',
      props as ChipProps,
      { classes }
    )
    return design.render()
  }
})

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const createSsrChipGroup = (props: ChipGroupProps, slots?: ChipGroupSlots) => {
  const Host = defineComponent({
    setup() {
      const mergedProps: ChipGroupProps = {
        ...defaultsChipGroup,
        ...props
      }
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
        mergedProps,
        {
          classes,
          components: {
            chip: SsrChip
          }
        }
      )
      return design.render()
    }
  })

  return createSSRApp({
    render: () => h(Host as Component, null, slots ? { ...slots } : undefined)
  })
}

describe('ChipGroup (SSR)', () => {
  it('should render chip list and initial selected state cleanly in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderToString(createSsrChipGroup({
      list: [
        { label: 'Vue', value: 'vue' },
        { label: 'Zero', value: 0 }
      ],
      selected: 0
    }))

    expect(html).toContain('d1-chipGroup')
    expect(html).toContain('d1-chipGroup__item')
    expect(html).toContain('d1-chip--selected')
    expect(html).toContain('Vue')
    expect(html).toContain('Zero')
  })

  it('should render custom default slot and empty list safely during SSR', async () => {
    const html = await renderToString(
      createSsrChipGroup({}, {
        default: () => [h('span', { class: 'ssr-slot' }, 'Fallback Chip')]
      })
    )

    expect(html).toContain('d1-chipGroup')
    expect(html).toContain('Fallback Chip')
  })

  it('should produce deterministic isolated SSR output across concurrent requests', async () => {
    const [htmlA, htmlB] = await Promise.all([
      renderToString(createSsrChipGroup({
        list: [{ label: 'Alpha', value: 'a' }],
        selected: 'a'
      })),
      renderToString(createSsrChipGroup({
        list: [{ label: 'Beta', value: 'b' }],
        selected: 'other'
      }))
    ])

    expect(htmlA).toContain('Alpha')
    expect(htmlA).toContain('d1-chip--selected')
    expect(htmlB).toContain('Beta')
    expect(htmlB).not.toContain('d1-chip--selected')
  })
})
