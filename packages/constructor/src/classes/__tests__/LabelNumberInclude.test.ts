// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, ref, type VNode } from 'vue'
import { DesignName, GeoRef } from '@dxtmisha/functional'

import { LabelNumberInclude } from '../LabelNumberInclude'

function getHighlightText(nodes: VNode[]): unknown {
  const children = nodes[0]?.children as unknown as VNode[] | undefined
  return children?.[0]?.props?.innerHTML
}

describe('LabelNumberInclude', () => {
  const naming = new DesignName('d1.badge')

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should render numeric value when below labelMax', () => {
      vi.spyOn(GeoRef, 'getLanguage').mockReturnValue(computed(() => 'en'))

      const include = new LabelNumberInclude({ label: 50, labelMax: 100 }, naming)
      const nodes = include.render()

      expect(nodes).toHaveLength(1)
      expect(getHighlightText(nodes)).toBe('50')
    })

    it('should cap numeric value at labelMax with plus suffix', () => {
      vi.spyOn(GeoRef, 'getLanguage').mockReturnValue(computed(() => 'en'))

      const include = new LabelNumberInclude({ label: 150, labelMax: 100 }, naming)
      const nodes = include.render()

      expect(nodes).toHaveLength(1)
      expect(getHighlightText(nodes)).toBe('100+')
    })

    it('should format numeric string labels and apply locale formatting when enabled', () => {
      const include = new LabelNumberInclude(
        {
          label: '12500',
          labelMax: 10000,
          formatting: true,
          language: 'en-US'
        },
        naming
      )
      const nodes = include.render()

      expect(nodes).toHaveLength(1)
      expect(getHighlightText(nodes)).toBe('10,000+')
    })

    it('should render original text when label is non-numeric', () => {
      const include = new LabelNumberInclude({ label: 'New' }, naming)
      const nodes = include.render()

      expect(nodes).toHaveLength(1)
      expect(nodes[0].children).toEqual(['New'])
    })

    it('should render slot content alongside numeric label when default slot is provided', () => {
      vi.spyOn(GeoRef, 'getLanguage').mockReturnValue(computed(() => 'en'))

      const include = new LabelNumberInclude(
        { label: 42 },
        naming,
        undefined,
        { default: () => 'items' }
      )
      const nodes = include.render()

      expect(nodes).toHaveLength(1)
      expect(nodes[0].children).toHaveLength(2)
    })
  })

  describe('Boundary values, zero/falsy traps, and limit thresholds', () => {
    it('should treat numeric 0 and string "0" as valid numbers through labelReplacing', () => {
      vi.spyOn(GeoRef, 'getLanguage').mockReturnValue(computed(() => 'en'))

      const numericZero = new LabelNumberInclude({ label: 0, labelMax: 99 }, naming)
      const nodesNumeric = numericZero.render()
      expect(nodesNumeric).toHaveLength(1)
      expect(getHighlightText(nodesNumeric)).toBe('0')

      const stringZero = new LabelNumberInclude({ label: '0', labelMax: 99 }, naming)
      const nodesString = stringZero.render()
      expect(nodesString).toHaveLength(1)
      expect(getHighlightText(nodesString)).toBe('0')
    })

    it('should cap positive values when labelMax is 0', () => {
      vi.spyOn(GeoRef, 'getLanguage').mockReturnValue(computed(() => 'en'))

      const include = new LabelNumberInclude({ label: 5, labelMax: 0 }, naming)
      const nodes = include.render()

      expect(nodes).toHaveLength(1)
      expect(getHighlightText(nodes)).toBe('0+')
    })

    it('should handle exact labelMax boundary and labelMax + 1', () => {
      vi.spyOn(GeoRef, 'getLanguage').mockReturnValue(computed(() => 'en'))

      const exact = new LabelNumberInclude({ label: 99, labelMax: 99 }, naming)
      expect(getHighlightText(exact.render())).toBe('99')

      const exceeded = new LabelNumberInclude({ label: 100, labelMax: 99 }, naming)
      expect(getHighlightText(exceeded.render())).toBe('99+')
    })
  })

  describe('Empty, whitespace-only, nullish, and reactive inputs', () => {
    it('should return empty array for empty or undefined label', () => {
      expect(new LabelNumberInclude({}, naming).render()).toEqual([])
      expect(new LabelNumberInclude({ label: '' }, naming).render()).toEqual([])
      expect(new LabelNumberInclude({ label: undefined }, naming).render()).toEqual([])
    })

    it('should reactively update when props are passed as a ref or getter function', () => {
      vi.spyOn(GeoRef, 'getLanguage').mockReturnValue(computed(() => 'en'))

      const state = ref({ label: 5, labelMax: 10 })
      const include = new LabelNumberInclude(() => state.value, naming)

      expect(getHighlightText(include.render())).toBe('5')

      state.value = { label: 25, labelMax: 10 }
      expect(getHighlightText(include.render())).toBe('10+')
    })
  })
})
