// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { type ConstrEmit, DesignName } from '@dxtmisha/functional'

import { ModelInclude } from '../../../classes/ModelInclude'
import { TextInclude } from '../../../classes/TextInclude'
import { CarouselPagination, type CarouselPaginationConstructors } from '../CarouselPagination'
import { CarouselPaginationFocus } from '../CarouselPaginationFocus'
import { CarouselPaginationItems } from '../CarouselPaginationItems'
import { CarouselPaginationSelected } from '../CarouselPaginationSelected'
import type { CarouselPaginationProps } from '../props'
import type { CarouselPaginationEmits } from '../types'

describe('CarouselPagination (orchestrator unit)', () => {
  const scopes: Array<ReturnType<typeof effectScope>> = []

  afterEach(() => {
    scopes.splice(0).reverse().forEach(scope => scope.stop())
    vi.restoreAllMocks()
  })

  const createInstance = (
    customProps: Partial<CarouselPaginationProps> = {},
    constructors?: Partial<CarouselPaginationConstructors>
  ) => {
    const scope = effectScope()
    scopes.push(scope)

    const props = reactive<CarouselPaginationProps>({
      count: 5,
      selected: 1,
      ...customProps
    })
    const element = ref<HTMLDivElement>()
    const emits = vi.fn()

    let instance!: CarouselPagination
    scope.run(() => {
      instance = new CarouselPagination(
        props,
        element,
        new DesignName('test.pagination'),
        undefined,
        undefined,
        emits as unknown as ConstrEmit<CarouselPaginationEmits>,
        constructors
      )
    })

    return { instance, props, element, emits, scope }
  }

  describe('Lazy instantiation and canCreate guards', () => {
    it('should not instantiate any subordinate helpers eagerly in constructor', () => {
      const { instance } = createInstance()

      expect(instance.hasInstance('focus')).toBe(false)
      expect(instance.hasInstance('items')).toBe(false)
      expect(instance.hasInstance('model')).toBe(false)
      expect(instance.hasInstance('selected')).toBe(false)
      expect(instance.hasInstance('text')).toBe(false)
    })

    it('should lazily instantiate focus when focusable and skip allocation when disabled or non-bullet type', () => {
      const { instance: focusable } = createInstance({ type: 'bullets', control: true })
      expect(focusable.hasInstance('focus')).toBe(false)
      expect(focusable.binds).toHaveProperty('onKeydown')
      expect(focusable.hasInstance('focus')).toBe(true)

      const { instance: noControl } = createInstance({ type: 'bullets', control: false })
      expect(noControl.binds).not.toHaveProperty('onKeydown')
      expect(noControl.hasInstance('focus')).toBe(false)

      const { instance: fraction } = createInstance({ type: 'fraction', control: true })
      expect(fraction.binds).not.toHaveProperty('onKeydown')
      expect(fraction.hasInstance('focus')).toBe(false)

      const { instance: progressbar } = createInstance({ type: 'progressbar', control: true })
      expect(progressbar.binds).not.toHaveProperty('onKeydown')
      expect(progressbar.hasInstance('focus')).toBe(false)
    })

    it('should keep model unallocated until slide selection changes via set', () => {
      const { instance, emits } = createInstance({ count: 5, selected: 1 })

      expect(instance.i('selected').get()).toBe(1)
      expect(instance.hasInstance('model')).toBe(false)

      instance.i('selected').set(3)
      expect(instance.hasInstance('model')).toBe(true)
      expect(emits).toHaveBeenCalledWith('change', 3)
      expect(emits).toHaveBeenCalledWith('update:selected', 3)
      expect(emits).toHaveBeenCalledWith('update:modelSelected', 3)
    })
  })

  describe('Aggregated getters and domain predicates', () => {
    it('should configure WAI-ARIA attributes with tablist, orientation, and localized label', () => {
      const { instance: horizontalInstance } = createInstance({ vertical: false })
      expect(horizontalInstance.aria).toEqual({
        'role': 'tablist',
        'aria-orientation': 'horizontal',
        'aria-label': 'Pagination'
      })

      const { instance: verticalInstance } = createInstance({
        vertical: true,
        textPagination: 'Навигация слайдов'
      })
      expect(verticalInstance.aria).toEqual({
        'role': 'tablist',
        'aria-orientation': 'vertical',
        'aria-label': 'Навигация слайдов'
      })
    })

    it('should compute dynamic hide class, percent CSS variable style, and container tag', () => {
      const { instance, props } = createInstance({
        count: 4,
        selected: 2,
        hideIfOne: true
      })

      expect(instance.isHide()).toBe(false)
      expect(instance.classes).toEqual({
        'test-pagination--hide': false
      })
      expect(instance.styles).toEqual({
        '--test-pagination-sys-percent': '50%'
      })
      expect(instance.tag).toBe('div')

      props.count = 1
      expect(instance.isHide()).toBe(true)
      expect(instance.classes).toEqual({
        'test-pagination--hide': true
      })

      props.tag = 'nav'
      expect(instance.tag).toBe('nav')
    })
  })

  describe('Dependency injection overrides', () => {
    it('should allow overriding subordinate constructors via constructors map', () => {
      class CustomFocus extends CarouselPaginationFocus {}
      class CustomItems extends CarouselPaginationItems {}
      class CustomModel extends ModelInclude<number> {}
      class CustomSelected extends CarouselPaginationSelected {}
      class CustomText extends TextInclude {}

      const { instance } = createInstance(
        { count: 5, selected: 1 },
        {
          focus: CustomFocus,
          items: CustomItems,
          model: CustomModel,
          selected: CustomSelected,
          text: CustomText
        }
      )

      expect(instance.i('focus')).toBeInstanceOf(CustomFocus)
      expect(instance.i('items')).toBeInstanceOf(CustomItems)
      expect(instance.i('model')).toBeInstanceOf(CustomModel)
      expect(instance.i('selected')).toBeInstanceOf(CustomSelected)
      expect(instance.i('text')).toBeInstanceOf(CustomText)
    })
  })
})
