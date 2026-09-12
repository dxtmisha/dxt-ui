// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { CollageItemDimensions } from '../CollageItemDimensions'
import type { ImageEventData, ImageItem } from '../../Image'
import type { CollageItemProps } from '../props'

describe('CollageItemDimensions', () => {
  it('should initialize with undefined height and width', () => {
    const props: CollageItemProps = {
      value: 'test-item'
    }
    const dimensions = new CollageItemDimensions(props, 'd-collage-item')

    expect(dimensions.height.value).toBeUndefined()
    expect(dimensions.width.value).toBeUndefined()
    expect(dimensions.getHeight()).toBeUndefined()
    expect(dimensions.getWidth()).toBeUndefined()
    expect(dimensions.expose.getHeight()).toBeUndefined()
    expect(dimensions.expose.getWidth()).toBeUndefined()
    expect(dimensions.styles).toEqual({})
    expect(dimensions.binds).toEqual({
      'data-value': 'test-item',
      'data-height': undefined,
      'data-width': undefined
    })
  })

  it('should calculate aspect ratios and emit load on onLoad', () => {
    const props: CollageItemProps = {
      value: 'item-1'
    }
    const emit = vi.fn()
    const dimensions = new CollageItemDimensions(props, 'd-collage-item', emit)

    const payload: ImageEventData = {
      type: undefined,
      image: {
        width: 800,
        height: 600,
        image: {} as HTMLImageElement,
        src: 'https://example.com/test.jpg'
      } as ImageItem
    }

    dimensions.onLoad(payload)

    // height = Math.floor(600 * 10 / 800) = 7
    // width = Math.floor(800 * 10 / 600) = 13
    expect(dimensions.height.value).toBe(7)
    expect(dimensions.width.value).toBe(13)
    expect(dimensions.getHeight()).toBe(7)
    expect(dimensions.getWidth()).toBe(13)
    expect(dimensions.expose.getHeight()).toBe(7)
    expect(dimensions.expose.getWidth()).toBe(13)
    expect(emit).toHaveBeenCalledWith('load', payload)
    expect(dimensions.styles).toEqual({
      '--d-collage-item-sys-height': '7',
      '--d-collage-item-sys-width': '13'
    })
  })

  it('should call update on onLoad when available', () => {
    const props: CollageItemProps = {
      value: 'item-2'
    }
    const dimensions = new CollageItemDimensions(props, 'd-collage-item')
    const update = vi.fn()
    Object.defineProperty(dimensions, 'update', { value: update })

    const payload: ImageEventData = {
      type: undefined,
      image: {
        width: 400,
        height: 300,
        image: {} as HTMLImageElement,
        src: 'https://example.com/test2.jpg'
      } as ImageItem
    }

    dimensions.onLoad(payload)
    expect(update).toHaveBeenCalledTimes(1)
  })
})
