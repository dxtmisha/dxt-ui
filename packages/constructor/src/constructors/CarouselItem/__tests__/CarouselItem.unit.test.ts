// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ImageInclude } from '../../Image'
import { SkeletonInclude } from '../../Skeleton'
import { CarouselItem, type CarouselItemConstructors } from '../CarouselItem'
import type { CarouselItemData } from '../CarouselItemData'
import type { CarouselItemProps } from '../props'

/**
 * Inspectable subclass of CarouselItem exposing internal lazy-instantiated instances.
 *
 * Проверяемый подкласс CarouselItem, предоставляющий доступ к внутренним лениво созданным экземплярам.
 */
class InspectableCarouselItem extends CarouselItem {
  /**
   * Returns internal instances map for lazy-evaluation verification.
   *
   * Возвращает внутреннюю карту экземпляров для проверки ленивой инициализации.
   * @returns instantiated constructors map / карта созданных экземпляров конструкторов
   */
  get instantiatedItems(): Partial<Record<keyof CarouselItemConstructors, unknown>> {
    return this.instances
  }
}

describe('CarouselItem (unit)', () => {
  const naming = new DesignName('d1.carouselItem')
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should resolve default div tag, ARIA bindings, tabindex, and slotData', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<CarouselItemProps>({})

      scope.run(() => {
        const item = new CarouselItem(props, element, naming)

        expect(item.tag).toBe('div')
        expect(item.aria).toEqual({
          'role': 'group',
          'aria-roledescription': 'slide',
          'aria-hidden': 'true',
          'tabindex': -1
        })
        expect(item.binds['data-value']).toBeUndefined()
        expect('data-value' in item.binds).toBe(false)
        expect(typeof item.binds.onClick).toBe('function')
        expect(typeof item.binds.onKeydown).toBe('function')
        expect(item.slotData).toEqual({
          selected: false,
          slide: undefined
        })
        expect(item.classes).toEqual({})
      })
    })

    it('should omit tabindex when selected is true and include -1 when unselected', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<CarouselItemProps>({
        selected: true,
        slide: 1,
        total: 4
      })

      scope.run(() => {
        const item = new CarouselItem(props, element, naming)

        expect(item.aria).toEqual({
          'role': 'group',
          'aria-roledescription': 'slide',
          'aria-label': '1 / 4',
          'aria-hidden': 'false'
        })
        expect('tabindex' in item.aria).toBe(false)
        expect(item.slotData).toEqual({
          selected: true,
          slide: 1
        })

        props.selected = false
        expect(item.aria.tabindex).toBe(-1)
        expect(item.aria['aria-hidden']).toBe('true')
        expect(item.slotData.selected).toBe(false)
      })
    })

    it('should resolve tag to "a" when href or to is provided and prioritize explicit tag', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<CarouselItemProps>({
        href: 'https://example.com/slide'
      })

      scope.run(() => {
        const item = new CarouselItem(props, element, naming)

        expect(item.tag).toBe('a')
        expect(item.binds.href).toBe('https://example.com/slide')

        props.href = undefined
        props.to = '/slides/2'
        expect(item.tag).toBe('a')

        props.to = { name: 'slides' }
        expect(item.tag).toBe('a')

        props.tag = 'article'
        expect(item.tag).toBe('article')
      })
    })

    it('should preserve numeric 0 for data-value and slide bindings', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<CarouselItemProps>({
        value: 0,
        slide: 0,
        total: 3
      })

      scope.run(() => {
        const item = new CarouselItem(props, element, naming)

        expect(item.binds['data-value']).toBe(0)
        expect(item.binds['aria-label']).toBe('0 / 3')
        expect(item.slotData.slide).toBe(0)
      })
    })
  })

  describe('Classes and skeleton integration', () => {
    it('should apply skeleton background class when isSkeleton is enabled and remove it when disabled', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<CarouselItemProps>({
        isSkeleton: true
      })

      scope.run(() => {
        const item = new CarouselItem(props, element, naming)

        expect(item.classes).toEqual({
          'd1-skeleton__background': true
        })

        props.isSkeleton = false
        expect(item.classes).toEqual({})
      })
    })
  })

  describe('Lazy loading & on-demand instantiation', () => {
    it('should not instantiate any sub-constructors eagerly on creation', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<CarouselItemProps>({})

      scope.run(() => {
        const item = new InspectableCarouselItem(props, element, naming)

        expect(Object.keys(item.instantiatedItems)).toHaveLength(0)
        expect(item.hasInstance('data')).toBe(false)
        expect(item.hasInstance('event')).toBe(false)
        expect(item.hasInstance('image')).toBe(false)
        expect(item.hasInstance('skeleton')).toBe(false)
      })
    })

    it('should not instantiate image when image prop is absent and instantiate when enabled', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<CarouselItemProps>({})

      scope.run(() => {
        const item = new InspectableCarouselItem(props, element, naming)

        expect(ImageInclude.is(props)).toBe(false)
        expect(item.callInstance('image', instance => instance.render(), [])).toEqual([])
        expect(item.instantiatedItems.image).toBeUndefined()

        props.image = '/banner.jpg'
        expect(ImageInclude.is(props)).toBe(true)
        item.callInstance('image', instance => instance.render(), [])
        expect(item.instantiatedItems.image).toBeDefined()
      })
    })

    it('should not instantiate skeleton when isSkeleton is false during classes calculation', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<CarouselItemProps>({ isSkeleton: false })

      scope.run(() => {
        const item = new InspectableCarouselItem(props, element, naming)

        expect(SkeletonInclude.is(props)).toBe(false)
        expect(item.classes).toEqual({})
        expect(item.instantiatedItems.skeleton).toBeUndefined()

        props.isSkeleton = true
        expect(SkeletonInclude.is(props)).toBe(true)
        expect(item.classes['d1-skeleton__background']).toBe(true)
        expect(item.instantiatedItems.skeleton).toBeDefined()
      })
    })
  })

  describe('Dependency Injection', () => {
    it('should allow overriding subordinate constructors via constructors parameter', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<CarouselItemProps>({ slide: 7 })

      class CustomData {
        readonly aria = { 'role': 'region', 'aria-label': 'Custom Data' }
        readonly slide = 'override-slide'
        isSelected(): boolean {
          return true
        }
      }

      scope.run(() => {
        const item = new CarouselItem(
          props,
          element,
          naming,
          undefined,
          undefined,
          undefined,
          {
            data: CustomData as unknown as typeof CarouselItemData
          }
        )

        expect(item.aria).toEqual({
          'role': 'region',
          'aria-label': 'Custom Data'
        })
        expect(item.slotData).toEqual({
          selected: true,
          slide: 'override-slide'
        })
      })
    })
  })

  describe('Click and keyboard event delegation', () => {
    it('should emit click and clickLite events with value and detail payload', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<CarouselItemProps>({
        value: 'slide-alpha',
        detail: { section: 'hero' }
      })
      const emitSpy = vi.fn()

      scope.run(() => {
        const item = new CarouselItem(
          props,
          element,
          naming,
          undefined,
          undefined,
          emitSpy
        )

        const clickEvent = new MouseEvent('click')
        item.binds.onClick(clickEvent)

        expect(emitSpy).toHaveBeenCalledTimes(2)
        expect(emitSpy).toHaveBeenNthCalledWith(1, 'click', clickEvent, {
          type: 'click',
          value: 'slide-alpha',
          detail: { section: 'hero' }
        })
        expect(emitSpy).toHaveBeenNthCalledWith(2, 'clickLite', {
          type: 'click',
          value: 'slide-alpha',
          detail: { section: 'hero' }
        })
      })
    })
  })
})
