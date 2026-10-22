// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { h, reactive } from 'vue'
import { browser, flushUpdates, intersect, loadImage, mountImageGraph } from './domFixtures'
import { ImageImg } from '../ImageImg'
import type { ImageProps } from '../props'

describe('ImageImg', () => {
  describe('Static guards (ImageImg.is and ImageImg.isPicture)', () => {
    it('should evaluate tagImg and picture props in static is() and isPicture()', () => {
      expect(ImageImg.is(undefined)).toBe(false)
      expect(ImageImg.is({ tagImg: false })).toBe(false)
      expect(ImageImg.is({ tagImg: true })).toBe(true)

      expect(ImageImg.isPicture(undefined)).toBe(false)
      expect(ImageImg.isPicture({ tagImg: false, picture: { '600px': '/wide.png' } })).toBe(false)
      expect(ImageImg.isPicture({ tagImg: true })).toBe(false)
      expect(ImageImg.isPicture({ tagImg: true, picture: { '600px': '/wide.png' } })).toBe(true)
    })
  })

  describe('Standard functional requirements (Happy path)', () => {
    it.each([
      ['/photo.png', true],
      ['image:photo.png', true],
      ['home', false],
      ['$home', false],
      ['#fff', false],
      [undefined, false]
    ])('should enable native img mode only for compatible source %s', (value, expected) => {
      const fixture = mountImageGraph(reactive({ value, tagImg: true }))
      expect(fixture.item.img.is()).toBe(expected)

      if (!expected) {
        expect(fixture.item.img.binds.value).toEqual({ key: 'img' })
      }
    })

    it('should keep native mode disabled unless tagImg is enabled', () => {
      const props = reactive<ImageProps>({ value: '/photo.png', tagImg: false })
      const fixture = mountImageGraph(props)

      expect(fixture.item.img.is()).toBe(false)
      props.tagImg = true
      expect(fixture.item.img.is()).toBe(true)
    })

    it('should normalize srcset descriptors and recompute source and alt attributes reactively', () => {
      const props = reactive<ImageProps>({
        value: '/photo.png',
        tagImg: true,
        alt: 'Photo',
        srcset: { '320': '/small.png', '640w': '/medium.png', '2x': '/retina.png' }
      })
      const fixture = mountImageGraph(props)

      expect(fixture.item.img.binds.value.srcset).toBe('/small.png 320w, /medium.png 640w, /retina.png 2x')
      expect(fixture.item.img.binds.value.alt).toBe('Photo')

      props.srcset = '/wide.png 800w'
      props.alt = undefined
      expect(fixture.item.img.binds.value.srcset).toBe('/wide.png 800w')
      expect(fixture.item.img.binds.value.alt).toBe('')

      props.srcset = undefined
      expect(fixture.item.img.binds.value).not.toHaveProperty('srcset')
    })

    it('should support both record and array picture descriptors without mutating supplied objects', () => {
      const props = reactive<ImageProps>({ value: '/photo.png', tagImg: true, picture: { '600px': '/wide.png' } })
      const fixture = mountImageGraph(props)

      expect(fixture.item.img.isPicture()).toBe(true)
      expect(fixture.item.img.picture.value).toEqual([{ key: '600px', srcset: '/wide.png', media: '(width >= 600px)' }])

      const sources = [{ srcset: '/portrait.png', media: '(max-width: 600px)', type: 'image/png' }]
      props.picture = sources
      expect(fixture.item.img.picture.value).toBe(props.picture)
      expect(sources).toEqual([{ srcset: '/portrait.png', media: '(max-width: 600px)', type: 'image/png' }])

      props.picture = undefined
      expect(fixture.item.img.isPicture()).toBe(false)
      expect(fixture.item.img.picture.value).toBeUndefined()
    })
  })

  describe('Fetch priority, lazy loading, and binary buffer bindings', () => {
    it.each(['high', 'low', 'auto'] as const)('should preserve fetchPriority=%s for eager images without adding loading attribute', (fetchPriority) => {
      const fixture = mountImageGraph(reactive({ value: '/photo.png', tagImg: true, fetchPriority }))
      expect(fixture.item.img.binds.value.fetchPriority).toBe(fetchPriority)
      expect(fixture.item.img.binds.value).not.toHaveProperty('loading')
    })

    it.each(['async', 'sync', 'auto'] as const)('should preserve decoding=%s for native images and omit it when undefined', (decoding) => {
      const props = reactive<ImageProps>({ value: '/photo.png', tagImg: true, decoding })
      const fixture = mountImageGraph(props)
      expect(fixture.item.img.binds.value.decoding).toBe(decoding)

      props.decoding = undefined
      expect(fixture.item.img.binds.value).not.toHaveProperty('decoding')
    })

    it('should omit an absent priority and switch loading from lazy to auto after intersection', async () => {
      const props = reactive<ImageProps>({ value: '/photo.png', tagImg: true, lazy: true })
      const fixture = mountImageGraph(props)
      await flushUpdates()

      expect(fixture.item.img.binds.value).not.toHaveProperty('fetchPriority')
      expect(fixture.item.img.binds.value.loading).toBe('lazy')

      intersect(fixture.element.value!)
      await flushUpdates()
      expect(fixture.item.img.binds.value.loading).toBe('auto')

      props.lazy = false
      expect(fixture.item.img.binds.value).not.toHaveProperty('loading')
    })

    it.each(['array', 'buffer'] as const)('should bind a decoded binary %s to actual DOM and revoke its blob URL on unmount', async (kind) => {
      const value = kind === 'array' ? new Uint8Array([1, 2]) : new Uint8Array([1, 2]).buffer
      const fixture = mountImageGraph(
        reactive({ value, tagImg: true, alt: 'Binary image', fetchPriority: 'high' as const }),
        undefined,
        graph => h('img', graph.img.binds.value)
      )

      expect(fixture.host.querySelector('img')?.hasAttribute('src')).toBe(false)
      await flushUpdates()
      loadImage(browser.images[0]!)
      await flushUpdates()

      expect(fixture.host.querySelector('img')?.getAttribute('src')).toBe('blob:image-1')
      expect(fixture.host.querySelector('img')?.getAttribute('alt')).toBe('Binary image')
      expect(fixture.host.querySelector('img')?.getAttribute('fetchpriority')).toBe('high')

      fixture.unmount()
      expect(URL.revokeObjectURL).toHaveBeenCalledExactlyOnceWith('blob:image-1')
    })
  })

  describe('CSS styles, transform scale, and crop / adaptive positioning', () => {
    it('should derive object-position and --sys-transform-scale from crop coordinates and image proportions', async () => {
      const fixture = mountImageGraph(reactive({ value: '/photo.png', tagImg: true, coordinator: [10, 20, 30, 40] }))
      await flushUpdates()
      loadImage(browser.images[0]!, 400, 200)
      await flushUpdates()

      expect(fixture.item.img.styles['object-position']).toBe('60% 40%')
      expect(fixture.item.img.styles['--sys-transform-scale']).toBe('166.66666666666669%')
    })

    it('should omit --sys-transform-scale for keyword sizes and apply it for percentage size with custom x/y', async () => {
      const props = reactive<ImageProps>({
        value: '/photo.png',
        tagImg: true,
        size: 'contain',
        x: '25%',
        y: '75%'
      })
      const fixture = mountImageGraph(props)
      await flushUpdates()
      loadImage(browser.images[0]!, 400, 200)
      await flushUpdates()

      expect(fixture.item.img.styles).toEqual({
        'object-position': '25% 75%',
        '--sys-transform-originX': '25%',
        '--sys-transform-originY': '75%'
      })

      ;(props as Record<string, unknown>).size = '80%'
      expect(fixture.item.img.styles).toEqual({
        'object-position': '25% 75%',
        '--sys-transform-originX': '25%',
        '--sys-transform-originY': '75%',
        '--sys-transform-scale': '80%'
      })
    })

    it('should apply --sys-transform-scale when adaptive mode is active on a native image', async () => {
      const props = reactive<ImageProps>({
        value: '/photo.png',
        tagImg: true,
        adaptive: true,
        adaptiveAlways: true,
        objectWidth: 100
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

      expect(fixture.item.img.styles).toEqual({
        'object-position': 'center center',
        '--sys-transform-originX': 'center',
        '--sys-transform-originY': 'center',
        '--sys-transform-scale': '100%'
      })
    })
  })
})
