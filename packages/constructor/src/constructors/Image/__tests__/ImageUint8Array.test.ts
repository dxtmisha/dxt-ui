// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { ImageUint8Array } from '../ImageUint8Array'
import type { ImageProps } from '../props'
import { browser, loadImage } from './domFixtures'

describe('ImageUint8Array', () => {
  it.each([undefined, null, '', 0, {}, [], new Uint16Array(1)].map(value => ({ value })))('rejects unsupported input %j', async ({ value }) => {
    // Exercise runtime input from untyped callers / Проверяем входные данные нетипизированных потребителей
    const helper = new ImageUint8Array({ value } as ImageProps)
    expect(ImageUint8Array.is(value)).toBe(false)
    expect(helper.is()).toBe(false)
    expect(await helper.createImage()).toBeUndefined()
    expect(URL.createObjectURL).not.toHaveBeenCalled()
    expect(browser.images).toHaveLength(0)
  })

  it('preserves typed-array views and their byte offsets', () => {
    class TestImageUint8Array extends ImageUint8Array {
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

  it.each(['array', 'buffer'] as const)('decodes %s and returns actual dimensions', async (kind) => {
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

  it('revokes the previous URL before replacement and disposes the final URL once', async () => {
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

  it('settles decode errors and allows explicit cleanup', async () => {
    const helper = new ImageUint8Array({ value: new Uint8Array([1]) })
    const pending = helper.createImage()
    browser.images[0]!.dispatchEvent(new Event('error'))
    expect(await pending).toBeUndefined()
    helper.reset()
    expect(URL.revokeObjectURL).toHaveBeenCalledExactlyOnceWith('blob:image-1')
  })

  it('settles an empty buffer decode failure and frees the allocated URL', async () => {
    const helper = new ImageUint8Array({ value: new Uint8Array() })
    const pending = helper.createImage()
    expect(URL.createObjectURL).toHaveBeenCalledWith(expect.objectContaining({ size: 0 }))
    browser.images[0]!.dispatchEvent(new Event('error'))
    expect(await pending).toBeUndefined()
    helper.reset()
    expect(URL.revokeObjectURL).toHaveBeenCalledExactlyOnceWith('blob:image-1')
  })
})
