// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import { effectScope, nextTick, reactive } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ImageCropImage } from '../ImageCropImage'
import type { ImageEventData } from '../../Image'
import type { ImageCropProps } from '../props'

describe('ImageCropImage', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should initialize with empty styles and non-loading state', () => {
    const props = reactive<ImageCropProps>({ image: 'photo.jpg' })
    const cropImage = new ImageCropImage(props, new DesignName('d1.imageCrop'))

    expect(cropImage.styles).toEqual({})
    expect(cropImage.isLoading()).toBe(false)
  })

  it('should calculate aspect ratio styles and emit load for valid image dimensions', () => {
    const props = reactive<ImageCropProps>({ image: 'photo.jpg' })
    const emits = vi.fn()
    const cropImage = new ImageCropImage(props, new DesignName('d1.imageCrop'), emits)

    const payload: ImageEventData = {
      type: undefined,
      image: {
        width: 1600,
        height: 900,
        image: {} as HTMLImageElement,
        src: 'photo.jpg'
      }
    }

    cropImage.onLoad(payload)

    expect(cropImage.styles).toEqual({
      '--d1-imageCrop-sys-aspect-ratio': '1600 / 900',
      '--d1-imageCrop-sys-width': 'auto',
      '--d1-imageCrop-sys-height': 'auto'
    })
    expect(emits).toHaveBeenCalledWith('load', payload)
  })

  it('should ignore invalid, zero, negative, or non-finite dimensions on load', () => {
    const props = reactive<ImageCropProps>({ image: 'photo.jpg' })
    const emits = vi.fn()
    const cropImage = new ImageCropImage(props, new DesignName('d1.imageCrop'), emits)

    cropImage.onLoad({ type: undefined, image: { width: 0, height: 500, image: {} as HTMLImageElement, src: '' } })
    expect(cropImage.styles).toEqual({})

    cropImage.onLoad({ type: undefined, image: { width: -10, height: 500, image: {} as HTMLImageElement, src: '' } })
    expect(cropImage.styles).toEqual({})

    cropImage.onLoad({ type: undefined, image: { width: Number.NaN, height: 500, image: {} as HTMLImageElement, src: '' } })
    expect(cropImage.styles).toEqual({})

    cropImage.onLoad({ type: undefined, image: { width: Number.POSITIVE_INFINITY, height: 500, image: {} as HTMLImageElement, src: '' } })
    expect(cropImage.styles).toEqual({})

    expect(emits).toHaveBeenCalledTimes(4)
  })

  it('should reset aspectRatio when props.image changes after mount', async () => {
    const props = reactive<ImageCropProps>({ image: 'first.jpg' })
    const scope = effectScope()
    let cropImage!: ImageCropImage

    scope.run(() => {
      cropImage = new ImageCropImage(props, new DesignName('d1.imageCrop'))
      cropImage.onMounted()
    })

    cropImage.onLoad({
      type: undefined,
      image: { width: 800, height: 400, image: {} as HTMLImageElement, src: 'first.jpg' }
    })
    expect((cropImage.styles as Record<string, string>)['--d1-imageCrop-sys-aspect-ratio']).toBe('800 / 400')

    props.image = 'second.jpg'
    await nextTick()

    expect(cropImage.styles).toEqual({})
    scope.stop()
  })
})
