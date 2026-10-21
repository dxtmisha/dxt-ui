// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { reactive } from 'vue'
import { ErrorCenter, Icons } from '@dxtmisha/functional'
import { ImageData } from '../ImageData'
import { ImageFile } from '../ImageFile'
import { ImageTypeValue } from '../basicTypes'
import type { ImageProps } from '../props'
import { browser, flushUpdates, intersect, loadImage, mountImageGraph } from './domFixtures'

describe('ImageData', () => {
  describe('Static type guard (ImageData.isImage)', () => {
    it.each([
      [ImageTypeValue.file, true],
      [ImageTypeValue.image, true],
      [ImageTypeValue.array, true],
      [ImageTypeValue.pdf, false],
      [ImageTypeValue.flag, false],
      [ImageTypeValue.flagCompressed, false],
      [ImageTypeValue.color, false],
      [ImageTypeValue.public, false],
      [ImageTypeValue.icon, false],
      [ImageTypeValue.filled, false],
      [ImageTypeValue.outlined, false],
      [ImageTypeValue.round, false],
      [ImageTypeValue.sharp, false],
      [ImageTypeValue.twoTone, false],
      [ImageTypeValue.material, false],
      [undefined, false]
    ] as const)('should return %s for ImageData.isImage(%s)', (type, expected) => {
      expect(ImageData.isImage(type)).toBe(expected)
    })
  })

  describe('Standard functional requirements (Happy path)', () => {
    it.each(['/photo.png', 'image:photo.png', 'image:https://example.test/photo.png'])('should decode %s and emit intrinsic image data once', async (value) => {
      const emits = vi.fn()
      const fixture = mountImageGraph(reactive({ value }), emits)

      expect(fixture.item.data.isLink()).toBe(true)
      await flushUpdates()
      expect(browser.images).toHaveLength(1)

      const image = browser.images[0]!
      expect(image.getAttribute('src')).toBe(value.replace(/^image:/, ''))
      loadImage(image, 600, 400)
      await flushUpdates()

      expect(fixture.item.data.image.value).toEqual({ image, src: image.src, width: 600, height: 400 })
      expect(fixture.item.data.isImage()).toBe(true)
      expect(fixture.item.data.isLink()).toBe(false)
      expect(emits).toHaveBeenCalledExactlyOnceWith('load', {
        type: ImageTypeValue.image,
        image: { image, src: image.src, width: 600, height: 400 }
      })
    })

    it('should replace the initial PDF URL with the prepared viewer source after frame skip', async () => {
      const fixture = mountImageGraph(reactive({ value: '/document.pdf?token=test#page=2' }))
      expect(fixture.item.text.get()).toBe('/document.pdf?token=test#page=2')

      await flushUpdates()
      expect(fixture.item.type.get()).toBe(ImageTypeValue.pdf)
      expect(fixture.item.text.get()).toBe('/document.pdf?token=test#page=2&toolbar=0&scrollbar=1')
      expect(browser.images).toHaveLength(0)
    })

    it('should read a PDF File through its FileReader workflow', async () => {
      const fixture = mountImageGraph(reactive({
        value: new File(['pdf'], 'document.pdf', { type: 'application/pdf' })
      }))
      await flushUpdates()

      await vi.waitFor(() => {
        expect(fixture.item.text.get()).toBe('data:application/pdf;base64,cGRm#toolbar=0&scrollbar=1')
      })
    })

    it.each([
      ['@home', ImageTypeValue.public],
      ['flag-vn', ImageTypeValue.flag]
    ] as const)('should use cached icon data initially and publish the asynchronously resolved icon for %s', async (value, expectedType) => {
      vi.spyOn(Icons, 'getAsync').mockReturnValue('/cached.svg')
      const icons = vi.spyOn(Icons, 'get').mockResolvedValue('/resolved.svg')
      const fixture = mountImageGraph(reactive({ value, url: '/icons/' }))

      expect(fixture.item.type.get()).toBe(expectedType)
      expect(fixture.item.data.is()).toBe(true)
      expect(fixture.item.data.isImage()).toBe(false)
      expect(fixture.item.data.isLink()).toBe(true)
      expect(fixture.item.data.image.value).toBe('/cached.svg')

      await flushUpdates()
      expect(icons).toHaveBeenCalledWith(value, '/icons/')
      expect(fixture.item.data.image.value).toBe('/resolved.svg')
    })

    it.each(['array', 'buffer'] as const)('should decode a binary %s and dispose its blob URL on unmount', async (kind) => {
      const value = kind === 'array' ? new Uint8Array([1, 2]) : new Uint8Array([1, 2]).buffer
      const fixture = mountImageGraph(reactive({ value }))

      await flushUpdates()
      loadImage(browser.images[0]!)
      await flushUpdates()

      expect(fixture.item.data.image.value).toEqual({
        image: browser.images[0], src: 'blob:image-1', width: 200, height: 100
      })

      fixture.unmount()
      expect(URL.revokeObjectURL).toHaveBeenCalledExactlyOnceWith('blob:image-1')
    })
  })

  describe('Lazy loading deferral and race condition protection', () => {
    it.each([false, true])('should defer decoding until visibility while tagImg=%s controls the initial SSR link', async (tagImg) => {
      const emits = vi.fn()
      const fixture = mountImageGraph(reactive({ value: 'image:photo.png', lazy: true, tagImg }), emits)
      await flushUpdates()

      expect(fixture.item.data.image.value).toBe(tagImg ? 'photo.png' : undefined)
      expect(browser.images).toHaveLength(0)
      expect(emits).not.toHaveBeenCalled()

      intersect(fixture.element.value!, false)
      await flushUpdates()
      expect(browser.images).toHaveLength(0)

      intersect(fixture.element.value!)
      await flushUpdates()
      expect(browser.images).toHaveLength(1)

      loadImage(browser.images[0]!)
      await flushUpdates()
      expect(fixture.item.data.isImage()).toBe(true)
      expect(emits).toHaveBeenCalledTimes(1)
    })

    it('should defer File reading until visibility and never publish a raw File in the image event', async () => {
      const file = new File(['image'], 'photo.png', { type: 'image/png' })
      const emits = vi.fn()
      const readFile = vi.spyOn(ImageFile, 'getFileReader')
      const fixture = mountImageGraph(reactive({ value: file, lazy: true, tagImg: true }), emits)

      await flushUpdates()
      expect(fixture.item.data.image.value).toBeUndefined()
      expect(readFile).not.toHaveBeenCalled()

      intersect(fixture.element.value!)
      await vi.waitFor(() => expect(browser.images).toHaveLength(1))

      const image = browser.images[0]!
      loadImage(image, 120, 80)
      await flushUpdates()

      expect(readFile).toHaveBeenCalledExactlyOnceWith(file)
      expect(fixture.item.data.image.value).toEqual({ image, src: image.src, width: 120, height: 80 })
      expect(emits).toHaveBeenCalledExactlyOnceWith('load', {
        type: ImageTypeValue.file,
        image: { image, src: image.src, width: 120, height: 80 }
      })
    })

    it('should retain the newest result when decoding finishes out of order', async () => {
      const props = reactive<ImageProps>({ value: '/first.png' })
      const emits = vi.fn()
      const fixture = mountImageGraph(props, emits)

      await flushUpdates()
      const first = browser.images[0]!
      props.value = '/second.png'
      await flushUpdates()
      const second = browser.images[1]!

      loadImage(second, 300, 200)
      await flushUpdates()
      loadImage(first, 100, 100)
      await flushUpdates()

      expect(fixture.item.data.image.value).toEqual({ image: second, src: second.src, width: 300, height: 200 })
      expect(emits).toHaveBeenCalledTimes(1)
    })
  })

  describe('Empty, unsupported, and error conditions', () => {
    it.each([undefined, null, '', false, 0, {}, []].map(value => ({ value })))('should leave unsupported or empty input %j unloaded', async ({ value }) => {
      // Exercise runtime input from untyped callers / Проверяем входные данные нетипизированных потребителей
      const fixture = mountImageGraph(reactive({ value } as ImageProps))
      await flushUpdates()

      expect(fixture.item.data.image.value).toBeUndefined()
      expect(fixture.item.text.get()).toBeUndefined()
      expect(fixture.item.data.is()).toBe(false)
      expect(fixture.item.data.isImage()).toBe(false)
      expect(fixture.item.data.isLink()).toBe(false)
      expect(browser.images).toHaveLength(0)
    })

    it('should settle decoding errors without emitting a successful load event', async () => {
      const emits = vi.fn()
      const fixture = mountImageGraph(reactive({ value: '/broken.png' }), emits)

      await flushUpdates()
      browser.images[0]!.dispatchEvent(new Event('error'))
      await flushUpdates()

      expect(fixture.item.data.image.value).toBeUndefined()
      expect(emits).not.toHaveBeenCalled()
    })

    it('should report source processing exceptions to ErrorCenter and recover on the next source', async () => {
      const failure = new Error('source processing failed')
      vi.spyOn(ImageFile, 'createImage').mockRejectedValueOnce(failure)
      const errors = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => undefined)
      const props = reactive<ImageProps>({ value: '/broken.png' })
      const fixture = mountImageGraph(props)

      await flushUpdates()
      expect(errors).toHaveBeenCalledWith(expect.objectContaining({ code: 'image-data' }))
      expect(fixture.item.data.image.value).toBeUndefined()

      props.value = '/valid.png'
      await flushUpdates()
      loadImage(browser.images[0]!)
      await flushUpdates()
      expect(fixture.item.data.isImage()).toBe(true)
    })

    it('should not publish a pending result or continue observing after unmount', async () => {
      const emits = vi.fn()
      const fixture = mountImageGraph(reactive({ value: '/photo.png' }), emits)

      await flushUpdates()
      const image = browser.images[0]!
      fixture.unmount()
      loadImage(image)
      await flushUpdates()

      expect(emits).not.toHaveBeenCalled()
      expect(fixture.item.data.isImage()).toBe(false)
    })
  })
})
