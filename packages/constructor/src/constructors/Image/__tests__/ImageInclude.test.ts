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
    it('should report display presence (is) based on the image property', () => {
      const naming = new DesignName('d1.card')

      const withString = new ImageInclude(naming, { image: '/photo.png' })
      expect(withString.is).toBe(true)

      const withObject = new ImageInclude(naming, { image: { value: '/photo.png', alt: 'Photo' } })
      expect(withObject.is).toBe(true)

      const withEmptyString = new ImageInclude(naming, { image: '' })
      expect(withEmptyString.is).toBe(false)

      const withUndefined = new ImageInclude(naming, {})
      expect(withUndefined.is).toBe(false)
    })

    it('should resolve string and object image props alongside imageAttrs and extra in binds', () => {
      const naming = new DesignName('d1.card')
      const props = reactive<ImagePropsInclude>({
        image: '/photo.png',
        imageAttrs: { alt: 'Banner', tagImg: true }
      })
      const extra = computed<ImageProps>(() => ({ size: 'cover', lazy: true }))
      const include = new ImageInclude(naming, props, undefined, extra)

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
        new DesignName('d1.card'),
        { image: '/photo.png' },
        undefined,
        undefined,
        emits
      )

      const payload: ImageEventData = {
        type: ImageTypeValue.image,
        image: '/photo.png'
      }

      include.onLoad(payload)
      expect(emits).toHaveBeenCalledExactlyOnceWith('load', payload)
    })

    it('should render the registered image component when is is true and return an empty array when false', () => {
      const props = reactive<ImagePropsInclude>({ image: '/photo.png' })
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
      const include = new ImageInclude(new DesignName('d1.card'), props, components)

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
        new DesignName('d1.card'),
        { image: '/photo.png' }
      )

      expect(() => include.onLoad({
        type: ImageTypeValue.image,
        image: undefined
      })).not.toThrow()
    })

    it('should return an empty VNode array when components registry is omitted', () => {
      const include = new ImageInclude(
        new DesignName('d1.card'),
        { image: '/photo.png' }
      )

      expect(include.render()).toEqual([])
    })

    it('should support getter functions for props and extra parameters', () => {
      const state = reactive({
        image: 'outlined-home',
        alt: 'Home icon'
      })
      const include = new ImageInclude(
        new DesignName('d1.card'),
        () => ({ image: state.image }),
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
        new DesignName('d1.card'),
        { image, imageAttrs: { alt } }
      )

      expect(include.binds.value).toEqual(expect.objectContaining({
        value: image,
        alt
      }))
    })
  })
})
