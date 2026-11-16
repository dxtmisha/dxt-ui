// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h, reactive } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { BadgeInclude } from '../BadgeInclude'
import type { BadgeComponentInclude, BadgePropsInclude } from '../basicTypes'

describe('BadgeInclude', () => {
  const naming = new DesignName('d1.cell')

  const MockBadge = defineComponent({
    name: 'MockBadge',
    props: {
      label: [String, Number],
      dot: Boolean,
      overlap: String,
      primary: Boolean
    },
    setup(props) {
      return () => h('span', { class: 'mock-badge' }, String(props.label ?? ''))
    }
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Static predicate BadgeInclude.is and instance is', () => {
    it('should return true for string, numeric 0, string "0", object with values, and badgeDot', () => {
      expect(BadgeInclude.is({ badge: '5' })).toBe(true)
      expect(BadgeInclude.is({ badge: 0 })).toBe(true)
      expect(BadgeInclude.is({ badge: '0' })).toBe(true)
      expect(BadgeInclude.is({ badge: { label: 'New' } })).toBe(true)
      expect(BadgeInclude.is({ badgeDot: true })).toBe(true)
    })

    it('should return false for undefined, empty string, empty object, or false dot', () => {
      expect(BadgeInclude.is(undefined)).toBe(false)
      expect(BadgeInclude.is({})).toBe(false)
      expect(BadgeInclude.is({ badge: '' })).toBe(false)
      expect(BadgeInclude.is({ badge: {} })).toBe(false)
      expect(BadgeInclude.is({ badgeDot: false })).toBe(false)
    })

    it('should match static predicate reactively via getter is', () => {
      const props = reactive<BadgePropsInclude>({})
      const include = new BadgeInclude(props, naming)

      expect(include.is).toBe(false)

      props.badge = 0
      expect(include.is).toBe(true)

      props.badge = undefined
      expect(include.is).toBe(false)

      props.badgeDot = true
      expect(include.is).toBe(true)
    })
  })

  describe('Bindings and rendering', () => {
    it('should bind string, numeric 0, object badge props, and badgeAttrs', () => {
      const components = new DesignComponents<BadgeComponentInclude, BadgePropsInclude>({
        badge: MockBadge
      })

      const zeroInclude = new BadgeInclude(
        { badge: 0, badgeAttrs: { primary: true } },
        naming,
        components,
        { overlap: 'static' }
      )
      expect(zeroInclude.binds.value).toMatchObject({
        label: 0,
        overlap: 'static',
        primary: true,
        class: 'd1-cell__badge'
      })
      expect(zeroInclude.render()).toHaveLength(1)

      const objectInclude = new BadgeInclude(
        { badge: { label: 'Hot', primary: true } },
        naming,
        components,
        { overlap: 'circular' }
      )
      expect(objectInclude.binds.value).toMatchObject({
        label: 'Hot',
        primary: true,
        overlap: 'circular',
        class: 'd1-cell__badge'
      })
    })

    it('should prioritize badgeDot over badge value and preserve extra props', () => {
      const components = new DesignComponents<BadgeComponentInclude, BadgePropsInclude>({
        badge: MockBadge
      })

      const include = new BadgeInclude(
        { badge: '9', badgeDot: true },
        naming,
        components,
        { overlap: 'static' }
      )

      expect(include.binds.value).toMatchObject({
        dot: true,
        overlap: 'static',
        class: 'd1-cell__badge'
      })
      expect(include.binds.value.label).toBeUndefined()
      expect(include.render()).toHaveLength(1)
    })

    it('should return empty array when components are missing or badge is disabled', () => {
      const noComponents = new BadgeInclude({ badge: '1' }, naming)
      expect(noComponents.render()).toEqual([])

      const components = new DesignComponents<BadgeComponentInclude, BadgePropsInclude>({
        badge: MockBadge
      })
      const emptyBadge = new BadgeInclude({}, naming, components)
      expect(emptyBadge.render()).toEqual([])
    })
  })
})
