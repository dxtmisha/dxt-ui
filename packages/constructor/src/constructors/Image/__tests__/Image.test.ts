// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName, Icons } from '@dxtmisha/functional'

import { Image, type ImageConstructors } from '../Image'
import { ImageBackground } from '../ImageBackground'
import { ImagePosition } from '../ImagePosition'
import { ImageType } from '../ImageType'

import { ImageTypeValue } from '../basicTypes'
import type { ImageProps } from '../props'
import { browser, flushUpdates, loadImage, mountHelper } from './domFixtures'

/**
 * Exposes internal DesignLogicAbstract instances map for lazy-loading verification.
 *
 * Предоставляет внутреннюю карту экземпляров DesignLogicAbstract для проверки ленивой инициализации.
 */
class InspectableImage extends Image {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof ImageConstructors, unknown>> {
    return this.instances
  }
}

describe('Image', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return decorative ARIA attributes and root bindings when alt is absent or empty', () => {
      const scope = effectScope()
      const props = reactive<ImageProps>({ value: '/photo.png', alt: '' })
      const image = scope.run(() => new Image(props, ref<HTMLElement>(), new DesignName('d1.image')))!

      expect(image.aria).toEqual({
        'role': 'img',
        'aria-hidden': 'true'
      })
      expect(image.binds).toEqual({
        'translate': 'no',
        'role': 'img',
        'aria-hidden': 'true'
      })

      scope.stop()
    })

    it('should return accessible aria-label and update reactively when alt changes', () => {
      const scope = effectScope()
      const props = reactive<ImageProps>({ value: '/photo.png', alt: 'Company logo' })
      const image = scope.run(() => new Image(props, ref<HTMLElement>(), new DesignName('d1.image')))!

      expect(image.aria).toEqual({
        'role': 'img',
        'aria-label': 'Company logo'
      })
      expect(image.binds).toEqual({
        'translate': 'no',
        'role': 'img',
        'aria-label': 'Company logo'
      })

      props.alt = undefined
      expect(image.aria).toEqual({
        'role': 'img',
        'aria-hidden': 'true'
      })

      scope.stop()
    })

    it.each([
      ['filled-home', ImageTypeValue.filled, 'material-icons'],
      ['two-tone-home', ImageTypeValue.twoTone, 'material-icons-two-tone'],
      ['outlined-home', ImageTypeValue.outlined, 'material-symbols-outlined'],
      ['round-home', ImageTypeValue.round, 'material-symbols-rounded'],
      ['sharp-home', ImageTypeValue.sharp, 'material-symbols-sharp'],
      ['material-home', ImageTypeValue.material, 'material-icons'],
      ['$home', ImageTypeValue.material, 'material-icons']
    ] as const)('should compute status and material font classes for %s', (value, expectedType, expectedFontClass) => {
      const scope = effectScope()
      const props = reactive<ImageProps>({ value })
      const image = scope.run(() => new Image(props, ref<HTMLElement>(), new DesignName('d1.image')))!

      expect(image.classes).toEqual({
        [`d1-image--type--${expectedType}`]: true,
        'd1-image--background': false,
        'd1-image--img': false,
        'notranslate': true,
        [expectedFontClass]: true
      })

      scope.stop()
    })

    it.each([
      ['f-vn', ImageTypeValue.flagCompressed],
      ['#ff0000', ImageTypeValue.color]
    ] as const)('should compute classes without material font classes for %s', (value, expectedType) => {
      const scope = effectScope()
      const props = reactive<ImageProps>({ value })
      const image = scope.run(() => new Image(props, ref<HTMLElement>(), new DesignName('d1.image')))!

      expect(image.classes).toEqual({
        [`d1-image--type--${expectedType}`]: true,
        'd1-image--background': false,
        'd1-image--img': false,
        'notranslate': true
      })

      scope.stop()
    })

    it('should compute background and img status classes for image sources', () => {
      const scope = effectScope()
      const props = reactive<ImageProps>({ value: '/photo.png', tagImg: false })
      const image = scope.run(() => new Image(props, ref<HTMLElement>(), new DesignName('d1.image')))!

      expect(image.classes['d1-image--type--image']).toBe(true)
      expect(image.classes['d1-image--background']).toBe(true)
      expect(image.classes['d1-image--img']).toBe(false)

      props.tagImg = true
      expect(image.classes['d1-image--img']).toBe(true)

      scope.stop()
    })

    it('should compute styles for image, flag, public, icon, and color types', async () => {
      vi.spyOn(Icons, 'getAsync').mockReturnValue('/icon.svg')
      vi.spyOn(Icons, 'get').mockResolvedValue('/icon.svg')

      const scope = effectScope()
      const props = reactive<ImageProps>({
        value: '/photo.png',
        size: 'cover',
        x: '10%',
        y: '90%'
      })
      const image = scope.run(() => new Image(props, ref<HTMLElement>(), new DesignName('d1.image')))!

      expect(image.styles).toEqual({
        'background-image': 'url("/photo.png")',
        'background-size': 'cover',
        'background-position-x': '10%',
        'background-position-y': '90%'
      })

      props.value = 'flag-vn'
      await flushUpdates()
      expect(image.styles).toEqual({
        'background-image': 'url("/icon.svg")',
        'background-size': 'contain'
      })

      props.value = '@home'
      await flushUpdates()
      expect(image.styles).toEqual({
        'mask-image': 'url("/icon.svg")'
      })

      props.value = '#123456'
      expect(image.styles).toEqual({
        'background-color': '#123456'
      })

      props.value = 'outlined-home'
      expect(image.styles).toEqual({})

      scope.stop()
    })

    it('should compute background-image style when type is ImageTypeValue.icon', () => {
      vi.spyOn(Icons, 'getAsync').mockReturnValue('/custom-icon.svg')
      vi.spyOn(Icons, 'get').mockResolvedValue('/custom-icon.svg')

      /**
       * Custom type constructor returning ImageTypeValue.icon.
       *
       * Пользовательский конструктор типа, возвращающий ImageTypeValue.icon.
       */
      class CustomIconType extends ImageType {
        /**
         * Returns generic icon type.
         *
         * Возвращает общий тип иконки.
         * @returns generic icon type / общий тип иконки
         */
        override get(): ImageTypeValue {
          return ImageTypeValue.icon
        }
      }

      const scope = effectScope()
      const props = reactive<ImageProps>({ value: 'custom-icon' })
      const image = scope.run(() => new Image(
        props,
        ref<HTMLElement>(),
        new DesignName('d1.image'),
        undefined,
        undefined,
        undefined,
        { type: CustomIconType }
      ))!

      expect(image.styles).toEqual({
        'background-image': 'url("/custom-icon.svg")'
      })

      scope.stop()
    })

    it('should return empty styles when value is empty or color value is not a string', () => {
      /**
       * Custom type constructor returning ImageTypeValue.color.
       *
       * Пользовательский конструктор типа, возвращающий ImageTypeValue.color.
       */
      class ForcedColorType extends ImageType {
        /**
         * Returns color type.
         *
         * Возвращает тип цвета.
         * @returns color type / тип цвета
         */
        override get(): ImageTypeValue {
          return ImageTypeValue.color
        }
      }

      const scope = effectScope()
      const props = reactive<ImageProps>({ value: undefined })
      const image = scope.run(() => new Image(
        props,
        ref<HTMLElement>(),
        new DesignName('d1.image'),
        undefined,
        undefined,
        undefined,
        { type: ForcedColorType }
      ))!

      expect(image.styles).toEqual({})

      props.value = new Uint8Array([1, 2])
      expect(image.styles).toEqual({})

      scope.stop()
    })

    it('should return valueBinds with key "value" and current image data', () => {
      const scope = effectScope()
      const props = reactive<ImageProps>({ value: '/photo.png' })
      const image = scope.run(() => new Image(props, ref<HTMLElement>(), new DesignName('d1.image')))!

      expect(image.valueBinds).toEqual({
        key: 'value',
        data: '/photo.png'
      })

      scope.stop()
    })
  })

  describe('Statefulness, isolation, and lifecycle cleanup', () => {
    it('should keep all sub-constructors lazy upon construction and support custom constructor overrides', () => {
      /**
       * Custom position sub-constructor.
       *
       * Пользовательский подконструктор позиции.
       */
      class CustomPosition extends ImagePosition {
        /**
         * Returns custom X coordinate.
         *
         * Возвращает пользовательскую координату X.
         * @returns custom X position / пользовательская позиция X
         */
        override get x(): string {
          return '15%'
        }
      }

      /**
       * Custom background sub-constructor.
       *
       * Пользовательский подконструктор фона.
       */
      class CustomBackground extends ImageBackground {}

      const scope = effectScope()
      const props = reactive<ImageProps>({ value: '/photo.png' })
      const image = scope.run(() => new InspectableImage(
        props,
        ref<HTMLElement>(),
        new DesignName('d1.image'),
        undefined,
        undefined,
        undefined,
        {
          position: CustomPosition,
          background: CustomBackground
        }
      ))!

      expect(Object.keys(image.instantiatedItems)).toHaveLength(0)

      expect(image.i('position')).toBeInstanceOf(CustomPosition)
      expect(image.i('background')).toBeInstanceOf(CustomBackground)
      expect(image.styles).toEqual(expect.objectContaining({
        'background-position-x': '15%'
      }))

      scope.stop()
    })

    it('should initialize adaptiveItem and event on mount only when their activation conditions are met', async () => {
      const props = reactive<ImageProps>({
        value: '/photo.png',
        adaptive: false
      })
      const emits = vi.fn()
      const fixture = mountHelper((element) => {
        return new InspectableImage(
          props,
          element,
          new DesignName('d1.image'),
          undefined,
          undefined,
          emits
        )
      })

      await flushUpdates()
      expect(fixture.item.instantiatedItems.adaptiveItem).toBeUndefined()
      expect(fixture.item.instantiatedItems.event).toBeUndefined()

      loadImage(browser.images[0]!, 300, 150)
      await flushUpdates()
      expect(fixture.item.instantiatedItems.event).toBeDefined()
      expect(emits).toHaveBeenCalledTimes(1)

      props.adaptive = true
      await flushUpdates()
      expect(fixture.item.instantiatedItems.adaptiveItem).toBeDefined()
    })
  })

  describe('Invalid arguments, structural mutations, and non-standard types', () => {
    it.each([
      'Привет Мир',
      'Học tiếng Việt',
      '你好 世界',
      '🚀 Иконка ✨'
    ])('should preserve Unicode alt text %s in aria and binds', (alt) => {
      const scope = effectScope()
      const props = reactive<ImageProps>({ value: 'home', alt })
      const image = scope.run(() => new Image(props, ref<HTMLElement>(), new DesignName('d1.image')))!

      expect(image.aria['aria-label']).toBe(alt)
      expect(image.binds['aria-label']).toBe(alt)
      expect(image.aria['aria-hidden']).toBeUndefined()

      scope.stop()
    })
  })
})
