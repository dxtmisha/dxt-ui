// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { SuffixInclude } from '../SuffixInclude'
import { SkeletonInclude } from '../../constructors/Skeleton'

describe('SuffixInclude', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should return correct is state and static is predicate', () => {
      expect(SuffixInclude.is({ suffix: 'Suf' })).toBe(true)
      expect(SuffixInclude.is({}, { suffix: () => h('span', 'Slot') })).toBe(true)
      expect(SuffixInclude.is({})).toBe(false)

      const include = new SuffixInclude({ suffix: 'Suf' }, new DesignName('suffix'))
      expect(include.is).toBe(true)

      const includeEmpty = new SuffixInclude({}, new DesignName('suffix'))
      expect(includeEmpty.is).toBe(false)
    })

    it('should return correct id and describedby', () => {
      const include = new SuffixInclude({ suffix: 'Suf', suffixId: 'suf-id' }, new DesignName('suffix'))
      expect(include.id).toBe('suf-id')
      expect(include.describedby).toBe('suf-id')

      const includeDefault = new SuffixInclude({ suffix: 'Suf' }, new DesignName('suffix'))
      expect(includeDefault.id).toBeTruthy()
      expect(includeDefault.describedby).toBe(includeDefault.id)

      const includeEmpty = new SuffixInclude({}, new DesignName('suffix'))
      expect(includeEmpty.describedby).toBe('')
    })

    it('should render suffix correctly with props, slots, and skeleton', () => {
      const skeleton = new SkeletonInclude({ isSkeleton: true }, new DesignName('d1.field'), ['classText'])
      const include = new SuffixInclude(
        { suffix: 'Suf', suffixId: 'suf-id' },
        new DesignName('my.class'),
        { suffix: () => h('span', 'SlotSuf') },
        () => skeleton
      )
      const nodes = include.render()

      expect(nodes).toHaveLength(1)
      expect(nodes[0]?.type).toBe('div')
      expect(nodes[0]?.props).toEqual({
        'id': 'suf-id',
        'class': 'my-class__suffix d1-skeleton__text',
        'data-event-type': 'suffix',
        'key': 'div.suffix.suf-id'
      })
      expect(nodes[0]?.children).toHaveLength(2)
      expect(nodes[0]?.children).toContain('Suf')
    })

    it('should return empty array when no suffix prop or slot is provided', () => {
      const include = new SuffixInclude({}, new DesignName('my.class'))
      expect(include.render()).toEqual([])
    })
  })

  describe('Boundary values, zero/falsy traps, and multilingual inputs', () => {
    it('should treat 0 and empty string consistently via isFilled', () => {
      expect(SuffixInclude.is({ suffix: 0 })).toBe(false)
      expect(SuffixInclude.is({ suffix: 1 })).toBe(true)

      const includeNumber = new SuffixInclude({ suffix: 1, suffixId: 'num-suf' }, new DesignName('my.class'))
      expect(includeNumber.is).toBe(true)
      expect(includeNumber.describedby).toBe('num-suf')

      const nodes = includeNumber.render()
      expect(nodes).toHaveLength(1)
      expect(nodes[0]?.children).toContain(1)
    })

    it('should treat empty string as absent suffix', () => {
      expect(SuffixInclude.is({ suffix: '' })).toBe(false)

      const include = new SuffixInclude({ suffix: '' }, new DesignName('my.class'))
      expect(include.is).toBe(false)
      expect(include.describedby).toBe('')
      expect(include.render()).toEqual([])
    })

    it('should handle Unicode and Cyrillic suffix values', () => {
      const include = new SuffixInclude({ suffix: 'кг / кг' }, new DesignName('my.class'))
      const nodes = include.render()
      expect(nodes[0]?.children).toContain('кг / кг')
    })
  })
})
