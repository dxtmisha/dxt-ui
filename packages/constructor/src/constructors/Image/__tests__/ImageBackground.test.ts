// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { reactive } from 'vue'
import { browser, flushUpdates, loadImage, mountImageGraph } from './domFixtures'
import type { ImageProps } from '../props'

describe('ImageBackground', () => {
  it('handles an absent source and updates from initial URL to decoded data', async () => {
    const props = reactive<ImageProps>({})
    const fixture = mountImageGraph(props)
    expect(fixture.item.background.imageSrc).toBeNull()
    expect(fixture.item.background.image).toBeNull()
    expect(fixture.item.background.isImage()).toBe(false)
    props.value = '/photo.png'
    await flushUpdates()
    loadImage(browser.images[0]!)
    await flushUpdates()
    expect(fixture.item.background.imageSrc).toBe(browser.images[0]!.src)
    expect(fixture.item.background.image).toBe('url("' + browser.images[0]!.src + '")')
    expect(fixture.item.background.isImage()).toBe(true)
    props.value = undefined
    await flushUpdates()
    expect(fixture.item.background.image).toBeNull()
  })

  it.each(['auto', 'contain', 'cover'] as const)('preserves the %s size mode', async (size) => {
    const fixture = mountImageGraph(reactive({ value: '/photo.png', size }))
    await flushUpdates()
    expect(fixture.item.background.size.value).toBe(size)
  })

  it.each([
    [400, 200, 'auto 166.66666666666669%'],
    [200, 400, '250% auto'],
    [200, 200, '250% auto']
  ])('sizes a %s by %s image using crop coordinates', async (width, height, expected) => {
    const fixture = mountImageGraph(reactive({ value: '/photo.png', coordinator: [10, 20, 30, 40] }))
    expect(fixture.item.background.size.value).toBeNull()
    await flushUpdates()
    loadImage(browser.images[0]!, width, height)
    await flushUpdates()
    expect(fixture.item.background.size.value).toBe(expected)
  })

  it('falls back to the requested size when adaptation is inactive', async () => {
    const props = reactive<ImageProps>({ value: '/photo.png', size: 'cover' })
    const fixture = mountImageGraph(props)
    await flushUpdates()
    loadImage(browser.images[0]!)
    await flushUpdates()
    expect(fixture.item.background.size.value).toBe('cover')
    props.size = undefined
    expect(fixture.item.background.size.value).toBeNull()
  })
})
