// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { reactive } from 'vue'
import { ImageBackground } from '../ImageBackground'
import { ImageTypeValue } from '../basicTypes'
import { browser, flushUpdates, loadImage, mountImageGraph } from './domFixtures'
import type { ImageProps } from '../props'

describe('ImageBackground', () => {
  describe('Static type guard (ImageBackground.is)', () => {
    it.each([
      [ImageTypeValue.file, true],
      [ImageTypeValue.image, true],
      [ImageTypeValue.array, true],
      [ImageTypeValue.icon, true],
      [ImageTypeValue.flag, true],
      [ImageTypeValue.public, true],
      [ImageTypeValue.pdf, false],
      [ImageTypeValue.color, false],
      [ImageTypeValue.flagCompressed, false],
      [ImageTypeValue.filled, false],
      [ImageTypeValue.outlined, false],
      [ImageTypeValue.round, false],
      [ImageTypeValue.sharp, false],
      [ImageTypeValue.twoTone, false],
      [ImageTypeValue.material, false],
      [undefined, false]
    ] as const)('should return %s for ImageBackground.is(%s)', (type, expected) => {
      expect(ImageBackground.is(type)).toBe(expected)
    })
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should handle an absent source and update from initial URL to decoded ImageItem data', async () => {
      const empty = mountImageGraph(reactive<ImageProps>({}))
      expect(empty.item.background.imageSrc).toBeNull()
      expect(empty.item.background.image).toBeNull()
      expect(empty.item.background.isImage()).toBe(false)

      const props = reactive<ImageProps>({ value: '/photo.png' })
      const fixture = mountImageGraph(props)

      expect(fixture.item.background.imageSrc).toBe('/photo.png')
      expect(fixture.item.background.image).toBe('url("/photo.png")')
      expect(fixture.item.background.isImage()).toBe(true)

      await flushUpdates()
      loadImage(browser.images[0]!)
      await flushUpdates()

      expect(fixture.item.background.imageSrc).toBe(browser.images[0]!.src)
      expect(fixture.item.background.image).toBe(`url("${browser.images[0]!.src}")`)
      expect(fixture.item.background.isImage()).toBe(true)

      props.value = undefined
      await flushUpdates()
      expect(fixture.item.background.image).toBeNull()
      expect(fixture.item.background.isImage()).toBe(false)
    })

    it.each(['auto', 'contain', 'cover'] as const)('should preserve keyword size mode %s', async (size) => {
      const fixture = mountImageGraph(reactive({ value: '/photo.png', size }))
      await flushUpdates()
      expect(fixture.item.background.size.value).toBe(size)
    })
  })

  describe('Aspect-aware percentage sizing and crop coordinates', () => {
    it.each([
      [400, 200, 'auto 80%'],
      [200, 400, '80% auto'],
      [200, 200, '80% auto']
    ])('should calculate aspect-aware size for a %i by %i image when size is a percentage', async (width, height, expected) => {
      const fixture = mountImageGraph(reactive({ value: '/photo.png', size: '80%' as ImageProps['size'] }))
      expect(fixture.item.background.size.value).toBeNull()

      await flushUpdates()
      loadImage(browser.images[0]!, width, height)
      await flushUpdates()

      expect(fixture.item.background.size.value).toBe(expected)
    })

    it.each([
      [400, 200, 'auto 166.66666666666669%'],
      [200, 400, '250% auto'],
      [200, 200, '250% auto']
    ])('should size a %i by %i image using crop coordinates', async (width, height, expected) => {
      const fixture = mountImageGraph(reactive({ value: '/photo.png', coordinator: [10, 20, 30, 40] }))
      expect(fixture.item.background.size.value).toBeNull()

      await flushUpdates()
      loadImage(browser.images[0]!, width, height)
      await flushUpdates()

      expect(fixture.item.background.size.value).toBe(expected)
    })
  })

  describe('Priority resolution and fallback chain', () => {
    it('should resolve priority in order: coordinator -> adaptive -> size', async () => {
      const props = reactive<ImageProps>({
        value: '/photo.png',
        adaptive: true,
        adaptiveAlways: true,
        objectWidth: 100,
        size: 'cover'
      })
      const fixture = mountImageGraph(props)
      Object.defineProperties(fixture.element.value!, {
        offsetWidth: { configurable: true, value: 100 },
        offsetHeight: { configurable: true, value: 100 }
      })
      fixture.item.adaptive.onMounted()
      await flushUpdates()
      loadImage(browser.images[0]!, 400, 200)
      await flushUpdates()

      expect(fixture.item.background.size.value).toBe('100% auto')

      props.coordinator = [10, 20, 30, 40]
      expect(fixture.item.background.size.value).toBe('auto 166.66666666666669%')

      props.coordinator = undefined
      props.adaptive = false
      await flushUpdates()
      expect(fixture.item.background.size.value).toBe('cover')
    })

    it('should fall back to the requested size when adaptation is inactive and return null when size is cleared', async () => {
      const props = reactive<ImageProps>({ value: '/photo.png', size: 'cover' })
      const fixture = mountImageGraph(props)
      await flushUpdates()
      loadImage(browser.images[0]!)
      await flushUpdates()

      expect(fixture.item.background.size.value).toBe('cover')

      props.size = undefined
      expect(fixture.item.background.size.value).toBeNull()
    })

    it('should fall back to the item size when adaptive mode is active but adaptive backgroundSize is null', async () => {
      const props = reactive<ImageProps>({
        value: '/photo.png',
        adaptive: true,
        adaptiveAlways: true,
        objectWidth: 100,
        size: 'contain'
      })
      const fixture = mountImageGraph(props)
      Object.defineProperties(fixture.element.value!, {
        offsetWidth: { configurable: true, value: 0 },
        offsetHeight: { configurable: true, value: 0 }
      })
      fixture.item.adaptive.onMounted()
      await flushUpdates()
      loadImage(browser.images[0]!, 400, 200)
      await flushUpdates()

      expect(fixture.item.adaptive.is()).toBe(true)
      expect(fixture.item.adaptive.backgroundSize).toBeNull()
      expect(fixture.item.background.size.value).toBe('contain')
    })
  })
})
