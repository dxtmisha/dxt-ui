// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { CollageElement } from '../CollageElement'
import { CollageGrow } from '../CollageGrow'

describe('CollageGrow', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Static activation predicate (static is)', () => {
    it.each([
      ['masonryHorizontal', true],
      ['masonryVertical', true],
      ['standard', false],
      ['quilted', false],
      ['woven', false],
      [undefined, false]
    ] as const)('should return %s for variant=%s', (variant, expected) => {
      expect(CollageGrow.is({ variant })).toBe(expected)
    })

    it('should return false when props is undefined', () => {
      expect(CollageGrow.is(undefined)).toBe(false)
    })
  })

  describe('CSS custom property management', () => {
    it('should derive propertyGrow from DesignName', () => {
      const elementItem = new CollageElement(ref<HTMLElement | undefined>(undefined))
      const grow = new CollageGrow(new DesignName('d1.collage'), () => elementItem)

      expect(grow.propertyGrow).toBe('--d1-collage-sys-item-grow')
    })

    it('should set and reset grow CSS custom property on individual and all items', () => {
      const container = document.createElement('div')
      const firstItem = document.createElement('div')
      firstItem.setAttribute('data-collage-item', 'true')
      const secondItem = document.createElement('div')
      secondItem.setAttribute('data-collage-item', 'true')

      container.appendChild(firstItem)
      container.appendChild(secondItem)

      const element = ref<HTMLElement | undefined>(container)
      const elementItem = new CollageElement(element)
      const elementGetter = vi.fn(() => elementItem)
      const grow = new CollageGrow(new DesignName('d.collage'), elementGetter)

      expect(elementGetter).not.toHaveBeenCalled()

      grow.setGrow(firstItem, 5)
      grow.setGrow(secondItem, '3')

      expect(firstItem.style.getPropertyValue('--d-collage-sys-item-grow')).toBe('5')
      expect(secondItem.style.getPropertyValue('--d-collage-sys-item-grow')).toBe('3')

      grow.resetGrowItem(firstItem)
      expect(firstItem.style.getPropertyValue('--d-collage-sys-item-grow')).toBe('')
      expect(secondItem.style.getPropertyValue('--d-collage-sys-item-grow')).toBe('3')

      grow.setGrow(firstItem, 0)
      expect(firstItem.style.getPropertyValue('--d-collage-sys-item-grow')).toBe('0')

      grow.resetGrow()
      expect(elementGetter).toHaveBeenCalledTimes(1)
      expect(firstItem.style.getPropertyValue('--d-collage-sys-item-grow')).toBe('')
      expect(secondItem.style.getPropertyValue('--d-collage-sys-item-grow')).toBe('')
    })

    it('should safely handle resetGrow when container element is undefined', () => {
      const elementItem = new CollageElement(ref<HTMLElement | undefined>(undefined))
      const grow = new CollageGrow(new DesignName('d.collage'), () => elementItem)

      expect(() => grow.resetGrow()).not.toThrow()
    })
  })
})
