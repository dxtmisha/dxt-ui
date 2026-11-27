// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { h } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { PrefixInclude } from '../PrefixInclude'
import { SkeletonInclude } from '../../constructors/Skeleton'

describe('PrefixInclude', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should return correct is state and static is predicate', () => {
      expect(PrefixInclude.is({ prefix: 'Pre' })).toBe(true)
      expect(PrefixInclude.is({}, { prefix: () => h('span', 'Slot') })).toBe(true)
      expect(PrefixInclude.is({})).toBe(false)

      const include = new PrefixInclude({ prefix: 'Pre' }, new DesignName('prefix'))
      expect(include.is).toBe(true)

      const includeEmpty = new PrefixInclude({}, new DesignName('prefix'))
      expect(includeEmpty.is).toBe(false)
    })

    it('should return correct id and describedby', () => {
      const include = new PrefixInclude({ prefix: 'Pre', prefixId: 'pref-id' }, new DesignName('prefix'))
      expect(include.id).toBe('pref-id')
      expect(include.describedby).toBe('pref-id')

      const includeDefault = new PrefixInclude({ prefix: 'Pre' }, new DesignName('prefix'))
      expect(includeDefault.id).toBeTruthy()
      expect(includeDefault.describedby).toBe(includeDefault.id)

      const includeEmpty = new PrefixInclude({}, new DesignName('prefix'))
      expect(includeEmpty.describedby).toBe('')
    })

    it('should render prefix correctly with props, slots, and skeleton', () => {
      const skeleton = new SkeletonInclude({ isSkeleton: true }, new DesignName('d1.field'), ['classText'])
      const skeletonGetter = vi.fn(() => skeleton)

      const includeInactive = new PrefixInclude(
        { prefix: 'Pre', prefixId: 'pref-id' },
        new DesignName('my.class'),
        { prefix: () => h('span', 'SlotPre') },
        skeletonGetter
      )
      const inactiveNodes = includeInactive.render()
      expect(inactiveNodes[0]?.props?.class).toBe('my-class__prefix')
      expect(skeletonGetter).not.toHaveBeenCalled()

      const include = new PrefixInclude(
        { prefix: 'Pre', prefixId: 'pref-id', isSkeleton: true },
        new DesignName('my.class'),
        { prefix: () => h('span', 'SlotPre') },
        skeletonGetter
      )
      const nodes = include.render()

      expect(nodes).toHaveLength(1)
      expect(nodes[0]?.type).toBe('div')
      expect(nodes[0]?.props).toEqual({
        'id': 'pref-id',
        'class': 'my-class__prefix d1-skeleton__text',
        'data-event-type': 'prefix',
        'key': 'div.prefix.pref-id'
      })
      expect(nodes[0]?.children).toHaveLength(2)
      expect(nodes[0]?.children).toContain('Pre')
      expect(skeletonGetter).toHaveBeenCalledTimes(1)
    })

    it('should return empty array when no prefix prop or slot is provided', () => {
      const include = new PrefixInclude({}, new DesignName('my.class'))
      expect(include.render()).toEqual([])
    })
  })

  describe('Boundary values, zero/falsy traps, and multilingual inputs', () => {
    it('should treat 0 and empty string consistently via isFilled', () => {
      expect(PrefixInclude.is({ prefix: 0 })).toBe(false)
      expect(PrefixInclude.is({ prefix: 1 })).toBe(true)

      const includeNumber = new PrefixInclude({ prefix: 1, prefixId: 'num-pref' }, new DesignName('my.class'))
      expect(includeNumber.is).toBe(true)
      expect(includeNumber.describedby).toBe('num-pref')

      const nodes = includeNumber.render()
      expect(nodes).toHaveLength(1)
      expect(nodes[0]?.children).toContain(1)
    })

    it('should treat empty string as absent prefix', () => {
      expect(PrefixInclude.is({ prefix: '' })).toBe(false)

      const include = new PrefixInclude({ prefix: '' }, new DesignName('my.class'))
      expect(include.is).toBe(false)
      expect(include.describedby).toBe('')
      expect(include.render()).toEqual([])
    })

    it('should handle Unicode and Cyrillic prefix values', () => {
      const include = new PrefixInclude({ prefix: '₫ / ₽' }, new DesignName('my.class'))
      const nodes = include.render()
      expect(nodes[0]?.children).toContain('₫ / ₽')
    })
  })
})
