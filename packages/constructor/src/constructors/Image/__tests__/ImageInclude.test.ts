// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { computed, h, reactive } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { ImageInclude } from '../ImageInclude'
import { ImageTypeValue, type ImageComponentInclude, type ImageEventData, type ImagePropsInclude } from '../basicTypes'
import type { ImageProps } from '../props'

describe('ImageInclude', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should check optional image inclusion before creating an include instance', () => {
      expect(ImageInclude.is()).toBe(false)
      expect(ImageInclude.is({})).toBe(false)
      expect(ImageInclude.is({ image: '' })).toBe(false)
      expect(ImageInclude.is({ image: '/photo.png' })).toBe(true)
      expect(ImageInclude.is({ image: { value: '/photo.png', alt: 'Photo' } })).toBe(true)
    })

    it('should report display presence (is) based on the image property', () => {
      const naming = new DesignName('d1.card')

      const withString = new ImageInclude({ image: '/photo.png' }, naming)
      expect(withString.is).toBe(true)

      const withObject = new ImageInclude({ image: { value: '/photo.png', alt: 'Photo' } }, naming)
      expect(withObject.is).toBe(true)

      const withEmptyString = new ImageInclude({ image: '' }, naming)
      expect(withEmptyString.is).toBe(false)

      const withUndefined = new ImageInclude({}, naming)
      expect(withUndefined.is).toBe(false)
    })

    it('should resolve string and object image props alongside imageAttrs and extra in binds', () => {
      const naming = new DesignName('d1.card')
      const props: ImagePropsInclude = reactive({
        image: '/photo.png',
        imageAttrs: { alt: 'Banner', tagImg: true }
      })
      const extra = computed<ImageProps>(() => ({ size: 'cover', lazy: true }))
      const include = new ImageInclude(props, naming, undefined, undefined, extra)

      expect(include.binds.value).toEqual(expect.objectContaining({
        value: '/photo.png',
        alt: 'Banner',
        tagImg: true,
        size: 'cover',
        lazy: true,
        class: 'd1-card__image',
        onLoad: include.onLoad
      }))

      props.image = { value: 'home', adaptive: true }
      expect(include.binds.value).toEqual(expect.objectContaining({
        value: 'home',
        adaptive: true,
        alt: 'Banner',
        tagImg: true,
        size: 'cover',
        lazy: true,
        class: 'd1-card__image',
        onLoad: include.onLoad
      }))
    })

    it('should forward load events via emits when onLoad is triggered', () => {
      const emits = vi.fn()
      const include = new ImageInclude(
        { image: '/photo.png' },
        new DesignName('d1.card'),
        undefined,
        emits,
        { alt: 'Photo', size: 'cover' },
        'photo'
      )

      const payload: ImageEventData = {
        type: ImageTypeValue.image,
        image: '/photo.png'
      }

      expect(include.binds.value.alt).toBe('Photo')
      expect(include.binds.value.size).toBe('cover')
      include.binds.value.onLoad?.(payload)
      expect(emits).toHaveBeenCalledExactlyOnceWith('load', payload)
    })

    it('should allow extra or imageAttrs onLoad to override the default onLoad handler', () => {
      const emits = vi.fn()
      const customOnLoad = vi.fn()
      const props: ImagePropsInclude = reactive({
        image: '/photo.png'
      })

      const include = new ImageInclude(
        props,
        new DesignName('d1.card'),
        undefined,
        emits,
        () => ({ onLoad: customOnLoad })
      )

      const payload: ImageEventData = {
        type: ImageTypeValue.image,
        image: '/photo.png'
      }

      expect(include.binds.value.onLoad).toBe(customOnLoad)
      include.binds.value.onLoad?.(payload)
      expect(customOnLoad).toHaveBeenCalledExactlyOnceWith(payload)
    })

    it('should render the registered image component when is is true and return an empty array when false', () => {
      const props: ImagePropsInclude = reactive({ image: '/photo.png' })
      const components = new DesignComponents<ImageComponentInclude, ImagePropsInclude>(
        {
          image: {
            name: 'StubImage',
            setup(componentProps: Record<string, unknown>) {
              return () => h('div', { class: componentProps.class })
            }
          }
        },
        props
      )
      const include = new ImageInclude(props, new DesignName('d1.card'), components)

      const rendered = include.render()
      expect(rendered).toHaveLength(1)
      expect(rendered[0]?.props).toEqual(expect.objectContaining({
        value: '/photo.png',
        class: 'd1-card__image',
        onLoad: include.onLoad
      }))

      props.image = undefined
      expect(include.render()).toEqual([])
    })
  })

  describe('Empty, nullish, and optional dependency handling', () => {
    it('should not throw when onLoad is invoked without an emits handler', () => {
      const include = new ImageInclude(
        { image: '/photo.png' },
        new DesignName('d1.card')
      )

      expect(() => include.onLoad({
        type: ImageTypeValue.image,
        image: undefined
      })).not.toThrow()
    })

    it('should return an empty VNode array when components registry is omitted', () => {
      const include = new ImageInclude(
        { image: '/photo.png' },
        new DesignName('d1.card')
      )

      expect(include.render()).toEqual([])
    })

    it('should support getter functions for props and extra parameters', () => {
      const state = reactive({
        image: 'outlined-home',
        alt: 'Home icon'
      })
      const include = new ImageInclude(
        () => ({ image: state.image }),
        new DesignName('d1.card'),
        undefined,
        undefined,
        () => ({ alt: state.alt })
      )

      expect(include.is).toBe(true)
      expect(include.binds.value).toEqual(expect.objectContaining({
        value: 'outlined-home',
        alt: 'Home icon'
      }))

      state.image = ''
      expect(include.is).toBe(false)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it.each([
      ['image:фото.png', 'Описание изображения'],
      ['image:ảnh-đẹp.png', 'Mô tả hình ảnh'],
      ['image:图片.png', '图片说明 🚀']
    ])('should preserve Unicode source %s and alt %s in compiled bindings', (image, alt) => {
      const include = new ImageInclude(
        { image, imageAttrs: { alt } },
        new DesignName('d1.card')
      )

      expect(include.binds.value).toEqual(expect.objectContaining({
        value: image,
        alt
      }))
    })
  })
})
