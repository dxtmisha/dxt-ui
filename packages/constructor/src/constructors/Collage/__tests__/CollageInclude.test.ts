// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h, reactive } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { CollageInclude } from '../CollageInclude'
import type { CollageComponentInclude, CollagePropsInclude } from '../basicTypes'
import type { CollageProps } from '../props'

const stubCollage = defineComponent({
  name: 'StubIncludedCollage',
  props: {
    variant: { type: String, default: undefined },
    columns: { type: String, default: undefined },
    images: { type: Array, default: undefined }
  },
  setup(props, { attrs }) {
    return () => h('div', {
      ...attrs,
      'data-variant': props.variant,
      'data-columns': props.columns
    })
  }
})

describe('CollageInclude', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Static predicate (CollageInclude.is)', () => {
    it('should return true when collageAttrs contains non-empty images or variant', () => {
      expect(CollageInclude.is({
        collageAttrs: { images: [{ value: '1', label: 'One' }] }
      })).toBe(true)

      expect(CollageInclude.is({
        collageAttrs: { variant: 'woven' }
      })).toBe(true)
    })

    it('should return false when props or collageAttrs are missing or empty', () => {
      expect(CollageInclude.is(undefined)).toBe(false)
      expect(CollageInclude.is({})).toBe(false)
      expect(CollageInclude.is({ collageAttrs: {} })).toBe(false)
      expect(CollageInclude.is({ collageAttrs: { images: [] } })).toBe(false)
      expect(CollageInclude.is({ collageAttrs: { variant: '' as CollageProps['variant'] } })).toBe(false)
    })
  })

  describe('Instance reactivity, binds, and rendering', () => {
    it('should resolve binds, BEM class, and is getter reactively from props object and getter function', () => {
      const naming = new DesignName('d1.gallery')
      const components = new DesignComponents<CollageComponentInclude, CollagePropsInclude>({
        collage: stubCollage
      })
      const props = reactive<CollagePropsInclude>({})

      const include = new CollageInclude(props, naming, components)

      expect(include.is).toBe(false)
      expect(include.render()).toEqual([])

      props.collageAttrs = {
        variant: 'quilted',
        columns: '3'
      }

      expect(include.is).toBe(true)
      expect(include.binds.value).toMatchObject({
        class: 'd1-gallery__collage',
        variant: 'quilted',
        columns: '3'
      })
      expect(include.binds.value.ref).toBeUndefined()

      const rendered = include.render()
      expect(rendered).toHaveLength(1)
      expect(rendered[0].props?.variant).toBe('quilted')
      expect(rendered[0].props?.columns).toBe('3')
      expect(rendered[0].props?.class).toBe('d1-gallery__collage')
    })

    it('should support getter-based props and extra attributes', () => {
      const naming = new DesignName('d1.card')
      const components = new DesignComponents<CollageComponentInclude, CollagePropsInclude>({
        collage: stubCollage
      })

      const include = new CollageInclude(
        () => ({
          collageAttrs: {
            images: [{ value: 'img-1' }]
          }
        }),
        naming,
        components,
        () => ({
          variant: 'masonryHorizontal',
          columns: '6'
        })
      )

      expect(include.is).toBe(true)
      expect(include.binds.value).toMatchObject({
        variant: 'masonryHorizontal',
        columns: '6',
        class: 'd1-card__collage'
      })

      const rendered = include.render(undefined, { columns: '2' })
      expect(rendered).toHaveLength(1)
      expect(rendered[0].props?.columns).toBe('6')
    })

    it('should return empty array when components registry is undefined', () => {
      const naming = new DesignName('d1.gallery')
      const include = new CollageInclude(
        { collageAttrs: { variant: 'woven' } },
        naming
      )

      expect(include.is).toBe(true)
      expect(include.render()).toEqual([])
    })
  })
})
