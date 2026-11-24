// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { defineComponent, h, reactive } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { CropAreaInclude } from '../CropAreaInclude'
import type { CropAreaPropsInclude } from '../basicTypes'

describe('CropAreaInclude', () => {
  const MockCropArea = defineComponent({
    name: 'MockCropArea',
    setup(_props, { attrs }) {
      return () => h('div', { 'data-mock': 'crop-area', ...attrs })
    }
  })

  const createComponents = () => new DesignComponents(
    { cropArea: MockCropArea },
    undefined
  )

  describe('Static predicate CropAreaInclude.is', () => {
    it('should return true by default or when readonly is false', () => {
      expect(CropAreaInclude.is()).toBe(true)
      expect(CropAreaInclude.is({})).toBe(true)
      expect(CropAreaInclude.is({ readonly: false })).toBe(true)
      expect(CropAreaInclude.is({ cropAreaAttrs: { readonly: false } })).toBe(true)
    })

    it('should return false when readonly is enabled on parent props or cropAreaAttrs', () => {
      expect(CropAreaInclude.is({ readonly: true })).toBe(false)
      expect(CropAreaInclude.is({ cropAreaAttrs: { readonly: true } })).toBe(false)
    })
  })

  describe('Bindings, visibility, and rendering', () => {
    it('should build BEM class and merge cropAreaAttrs with extra attributes', () => {
      const onResize = vi.fn()
      const props = reactive<CropAreaPropsInclude>({
        cropAreaAttrs: {
          min: 12,
          step: 2
        }
      })

      const include = new CropAreaInclude(
        props,
        new DesignName('d1.imageCrop'),
        createComponents(),
        () => ({
          value: [10, 10, 10, 10],
          disabled: false,
          readonly: false,
          onResize
        })
      )

      expect(include.is).toBe(true)
      expect(include.binds.value).toMatchObject({
        class: 'd1-imageCrop__cropArea',
        min: 12,
        step: 2,
        value: [10, 10, 10, 10],
        disabled: false,
        readonly: false,
        onResize
      })
      // hasInitElement is false so no ref is bound automatically
      expect(include.binds.value).not.toHaveProperty('ref')

      const nodes = include.render()
      expect(nodes).toHaveLength(1)
    })

    it('should suppress rendering when readonly is true via extra or cropAreaAttrs', () => {
      const props = reactive<CropAreaPropsInclude>({
        cropAreaAttrs: {
          readonly: true
        }
      })

      const includeFromAttrs = new CropAreaInclude(
        props,
        new DesignName('d1.imageCrop'),
        createComponents()
      )

      expect(includeFromAttrs.is).toBe(false)
      expect(includeFromAttrs.render()).toEqual([])

      const includeFromExtra = new CropAreaInclude(
        {},
        new DesignName('d1.imageCrop'),
        createComponents(),
        () => ({ readonly: true })
      )

      expect(includeFromExtra.is).toBe(false)
      expect(includeFromExtra.render()).toEqual([])
    })

    it('should accept props as a reactive getter function per ComponentIncludeProps contract', () => {
      const state = reactive<{ readonly: boolean }>({ readonly: false })

      const include = new CropAreaInclude(
        () => ({
          cropAreaAttrs: {
            readonly: state.readonly,
            min: 15
          }
        }),
        new DesignName('d1.imageCrop'),
        createComponents()
      )

      expect(include.is).toBe(true)
      expect(include.binds.value.min).toBe(15)

      state.readonly = true
      expect(include.is).toBe(false)
      expect(include.render()).toEqual([])
    })

    it('should return empty array when components registry is absent', () => {
      const include = new CropAreaInclude(
        {},
        new DesignName('d1.imageCrop')
      )

      expect(include.is).toBe(true)
      expect(include.render()).toEqual([])
    })
  })
})
