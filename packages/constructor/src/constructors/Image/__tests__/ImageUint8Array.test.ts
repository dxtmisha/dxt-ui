// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { nextTick, reactive } from 'vue'
import { ImageUint8Array } from '../ImageUint8Array'
import type { ImageProps } from '../props'
import { browser, loadImage } from './domFixtures'

describe('ImageUint8Array', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should preserve typed-array views and their byte offsets in toUint8Array()', () => {
      /**
       * Test subclass exposing protected toUint8Array method.
       *
       * Тестовый подкласс, открывающий защищённый метод toUint8Array.
       */
      class TestImageUint8Array extends ImageUint8Array {
        /**
         * Exposes binary conversion for verification.
         *
         * Открывает бинарное преобразование для проверки.
         * @returns converted Uint8Array or undefined / преобразованный Uint8Array или undefined
         */
        override toUint8Array(): Uint8Array<ArrayBuffer> | undefined {
          return super.toUint8Array()
        }
      }

      const buffer = new Uint8Array([9, 1, 2, 9]).buffer
      const view = new Uint8Array(buffer, 1, 2)
      const helperView = new TestImageUint8Array({ value: view })
      const helperBuffer = new TestImageUint8Array({ value: buffer })

      expect(helperView.toUint8Array()).toBe(view)
      expect([...helperBuffer.toUint8Array()!]).toEqual([9, 1, 2, 9])
    })

    it.each(['array', 'buffer'] as const)('should decode %s and return actual intrinsic dimensions', async (kind) => {
      const value = kind === 'buffer' ? new Uint8Array([1, 2]).buffer : new Uint8Array([1, 2])
      const helper = new ImageUint8Array({ value })

      expect(ImageUint8Array.is(value)).toBe(true)
      expect(helper.is()).toBe(true)

      const pending = helper.createImage()
      const image = browser.images[0]!
      expect(URL.createObjectURL).toHaveBeenCalledWith(expect.objectContaining({ size: value.byteLength, type: 'image/jpeg' }))

      loadImage(image, 640, 480)
      expect(await pending).toEqual({ image, src: 'blob:image-1', width: 640, height: 480 })

      helper.reset()
      helper.reset()
      expect(URL.revokeObjectURL).toHaveBeenCalledExactlyOnceWith('blob:image-1')
    })

    it.each([
      { name: 'PNG', bytes: [0x89, 0x50, 0x4E, 0x47], mime: 'image/png' },
      { name: 'GIF', bytes: [0x47, 0x49, 0x46, 0x38], mime: 'image/gif' },
      { name: 'WebP', bytes: [0x52, 0x49, 0x46, 0x46, 0, 0, 0, 0, 0x57, 0x45, 0x42, 0x50], mime: 'image/webp' },
      { name: 'AVIF', bytes: [0, 0, 0, 0, 0x66, 0x74, 0x79, 0x70, 0x61, 0x76, 0x69, 0x66], mime: 'image/avif' },
      { name: 'SVG (<svg)', bytes: [0x3C, 0x73, 0x76, 0x67], mime: 'image/svg+xml' },
      { name: 'SVG (<?xml)', bytes: [0x3C, 0x3F, 0x78, 0x6D, 0x6C], mime: 'image/svg+xml' },
      { name: 'BMP', bytes: [0x42, 0x4D], mime: 'image/bmp' },
      { name: 'ICO', bytes: [0x00, 0x00, 0x01, 0x00], mime: 'image/x-icon' },
      { name: 'JPEG (default)', bytes: [0xFF, 0xD8, 0xFF], mime: 'image/jpeg' }
    ])('should detect $name MIME type ($mime) from magic bytes', async ({ bytes, mime }) => {
      const value = new Uint8Array(bytes)
      const helper = new ImageUint8Array({ value })

      const pending = helper.createImage()
      expect(URL.createObjectURL).toHaveBeenCalledWith(expect.objectContaining({ size: value.byteLength, type: mime }))

      loadImage(browser.images[0]!, 100, 100)
      await pending
      helper.reset()
    })
  })

  describe('Empty, unsupported, and error conditions', () => {
    it.each([
      undefined,
      null,
      '',
      0,
      false,
      {},
      [],
      new Uint16Array(1),
      new Int8Array(1)
    ].map(value => ({ value })))('should reject unsupported input %j without allocating object URLs or images', async ({ value }) => {
      // Exercise runtime input from untyped callers / Проверяем входные данные нетипизированных потребителей
      const helper = new ImageUint8Array({ value } as ImageProps)

      expect(ImageUint8Array.is(value)).toBe(false)
      expect(helper.is()).toBe(false)
      expect(await helper.createImage()).toBeUndefined()
      expect(URL.createObjectURL).not.toHaveBeenCalled()
      expect(browser.images).toHaveLength(0)
    })

    it('should settle decode errors to undefined and allow explicit URL cleanup', async () => {
      const helper = new ImageUint8Array({ value: new Uint8Array([1]) })
      const pending = helper.createImage()

      browser.images[0]!.dispatchEvent(new Event('error'))
      expect(await pending).toBeUndefined()

      helper.reset()
      expect(URL.revokeObjectURL).toHaveBeenCalledExactlyOnceWith('blob:image-1')
    })

    it('should settle an empty buffer decode failure and free the allocated URL', async () => {
      const helper = new ImageUint8Array({ value: new Uint8Array() })
      const pending = helper.createImage()

      expect(URL.createObjectURL).toHaveBeenCalledWith(expect.objectContaining({ size: 0 }))
      browser.images[0]!.dispatchEvent(new Event('error'))
      expect(await pending).toBeUndefined()

      helper.reset()
      expect(URL.revokeObjectURL).toHaveBeenCalledExactlyOnceWith('blob:image-1')
    })
  })

  describe('Statefulness, Object URL replacement, and lifecycle cleanup', () => {
    it('should revoke the previous URL before replacement and dispose the final URL once', async () => {
      const props = { value: new Uint8Array([1]) }
      const helper = new ImageUint8Array(props)

      const first = helper.createImage()
      loadImage(browser.images[0]!)
      await first

      props.value = new Uint8Array([2])
      const second = helper.createImage()
      expect(URL.revokeObjectURL).toHaveBeenCalledExactlyOnceWith('blob:image-1')

      loadImage(browser.images[1]!)
      expect((await second)?.src).toBe('blob:image-2')

      helper.reset()
      expect(URL.revokeObjectURL).toHaveBeenNthCalledWith(2, 'blob:image-2')
      expect(URL.revokeObjectURL).toHaveBeenCalledTimes(2)
    })

    it('should automatically revoke the object URL when props.value changes to a non-binary value or onUnmounted runs', async () => {
      const props = reactive<ImageProps>({ value: new Uint8Array([1, 2]) })
      const helper = new ImageUint8Array(props)

      const firstPending = helper.createImage()
      loadImage(browser.images[0]!)
      await firstPending

      expect(URL.revokeObjectURL).not.toHaveBeenCalled()

      props.value = '/photo.png'
      await nextTick()
      expect(URL.revokeObjectURL).toHaveBeenCalledExactlyOnceWith('blob:image-1')

      props.value = new Uint8Array([3, 4])
      const secondPending = helper.createImage()
      loadImage(browser.images[1]!)
      await secondPending

      helper.onUnmounted()
      expect(URL.revokeObjectURL).toHaveBeenNthCalledWith(2, 'blob:image-2')
    })
  })
})
