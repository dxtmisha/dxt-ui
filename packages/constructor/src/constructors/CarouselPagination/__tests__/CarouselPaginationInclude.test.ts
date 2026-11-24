// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h, reactive } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { CarouselPaginationInclude } from '../CarouselPaginationInclude'
import type { CarouselPaginationPropsInclude } from '../basicTypes'
import type { CarouselPaginationProps } from '../props'

describe('CarouselPaginationInclude', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const MockPagination = defineComponent({
    name: 'MockPagination',
    props: {
      count: [Number, String],
      selected: [Number, String],
      type: String
    },
    setup(props) {
      return () => h('div', {
        'class': 'mock-carousel-pagination',
        'data-count': props.count,
        'data-type': props.type
      })
    }
  })

  describe('Static predicate and visibility', () => {
    it('should evaluate static is() from carouselPaginationAttrs and extra', () => {
      expect(CarouselPaginationInclude.is(undefined)).toBe(false)
      expect(CarouselPaginationInclude.is({})).toBe(false)
      expect(CarouselPaginationInclude.is({ carouselPaginationAttrs: { count: 5 } })).toBe(true)
      expect(CarouselPaginationInclude.is({}, { count: 3 })).toBe(true)
    })

    it('should evaluate instance is getter reactively for props, getter props, and extra', () => {
      const naming = new DesignName('d1.carousel')
      const props = reactive<CarouselPaginationPropsInclude>({})

      const include = new CarouselPaginationInclude(props, naming)
      expect(include.is).toBe(false)

      props.carouselPaginationAttrs = { count: 4, type: 'dots' }
      expect(include.is).toBe(true)

      const withExtra = new CarouselPaginationInclude(
        () => ({}),
        naming,
        undefined,
        () => ({ count: 3 })
      )
      expect(withExtra.is).toBe(true)
    })
  })

  describe('Bindings and rendering', () => {
    it('should merge carouselPaginationAttrs, extra, and BEM subclass in binds and render VNode', () => {
      const naming = new DesignName('d1.carousel')
      const props = reactive<CarouselPaginationPropsInclude>({
        carouselPaginationAttrs: {
          count: 5,
          type: 'lines'
        }
      })
      const components = new DesignComponents<{ carouselPagination: typeof MockPagination }, CarouselPaginationPropsInclude>(
        { carouselPagination: MockPagination }
      )
      const extra: Partial<CarouselPaginationProps> = {
        selected: 2
      }

      const include = new CarouselPaginationInclude(
        props,
        naming,
        components,
        extra
      )

      expect(include.binds.value).toMatchObject({
        count: 5,
        selected: 2,
        type: 'lines',
        class: 'd1-carousel__carouselPagination'
      })

      const nodes = include.render()
      expect(nodes).toHaveLength(1)
      expect(nodes[0]?.props).toMatchObject({
        count: 5,
        selected: 2,
        type: 'lines'
      })
    })

    it('should return empty VNode array when is is false or components registry is absent', () => {
      const naming = new DesignName('d1.carousel')
      const components = new DesignComponents<{ carouselPagination: typeof MockPagination }, CarouselPaginationPropsInclude>(
        { carouselPagination: MockPagination }
      )

      const hiddenInclude = new CarouselPaginationInclude({}, naming, components)
      expect(hiddenInclude.render()).toEqual([])

      const noComponentsInclude = new CarouselPaginationInclude(
        { carouselPaginationAttrs: { count: 3 } },
        naming
      )
      expect(noComponentsInclude.render()).toEqual([])
    })
  })
})
