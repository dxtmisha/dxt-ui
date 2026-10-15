// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { h, reactive } from 'vue'
import { browser, flushUpdates, intersect, loadImage, mountImageGraph } from './domFixtures'
import type { ImageProps } from '../props'

describe('ImageImg', () => {
  it.each([
    ['/photo.png', true], ['image:photo.png', true], ['home', false],
    ['$home', false], ['#fff', false], [undefined, false]
  ])('enables the native image only for compatible input %s', (value, expected) => {
    const fixture = mountImageGraph(reactive({ value, tagImg: true }))
    expect(fixture.item.img.is()).toBe(expected)
    if (!expected) expect(fixture.item.img.binds.value).toEqual({ key: 'img' })
  })

  it('keeps native mode disabled unless tagImg is enabled', () => {
    const props = reactive<ImageProps>({ value: '/photo.png', tagImg: false })
    const fixture = mountImageGraph(props)
    expect(fixture.item.img.is()).toBe(false)
    props.tagImg = true
    expect(fixture.item.img.is()).toBe(true)
  })

  it.each(['high', 'low', 'auto'] as const)('preserves fetchPriority=%s for eager images without adding loading', (fetchPriority) => {
    const fixture = mountImageGraph(reactive({ value: '/photo.png', tagImg: true, fetchPriority }))
    expect(fixture.item.img.binds.value.fetchPriority).toBe(fetchPriority)
    expect(fixture.item.img.binds.value).not.toHaveProperty('loading')
  })

  it('omits an absent priority and updates lazy loading after visibility', async () => {
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

  it('normalizes srcset descriptors and recomputes source and accessibility attributes', () => {
    const props = reactive<ImageProps>({
      value: '/photo.png', tagImg: true, alt: 'Photo',
      srcset: { '320': '/small.png', '2x': '/retina.png' }
    })
    const fixture = mountImageGraph(props)
    expect(fixture.item.img.binds.value.srcset).toBe('/small.png 320w, /retina.png 2x')
    expect(fixture.item.img.binds.value.alt).toBe('Photo')
    props.srcset = '/wide.png 800w'
    props.alt = undefined
    expect(fixture.item.img.binds.value.srcset).toBe('/wide.png 800w')
    expect(fixture.item.img.binds.value.alt).toBe('')
    props.srcset = undefined
    expect(fixture.item.img.binds.value).not.toHaveProperty('srcset')
  })

  it('supports both picture forms without changing supplied source objects', () => {
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

  it.each(['array', 'buffer'] as const)('binds a decoded binary %s to actual DOM and cleans up on unmount', async (kind) => {
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

  it('derives object position and scale from actual crop and image proportions', async () => {
    const fixture = mountImageGraph(reactive({ value: '/photo.png', tagImg: true, coordinator: [10, 20, 30, 40] }))
    await flushUpdates()
    loadImage(browser.images[0]!, 400, 200)
    await flushUpdates()
    expect(fixture.item.img.styles['object-position']).toBe('60% 40%')
    expect(fixture.item.img.styles['--sys-transform-scale']).toBe('166.66666666666669%')
  })
})
