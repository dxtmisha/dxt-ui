// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { reactive } from 'vue'
import { browser, flushUpdates, loadImage, mountImageGraph } from './domFixtures'
import type { ImageProps } from '../props'

describe('ImageBackground', () => {
  it('handles an absent source and updates from initial URL to decoded data', async () => {
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
    [400, 200, 'auto 80%'],
    [200, 400, '80% auto'],
    [200, 200, '80% auto']
  ])('calculates aspect-aware size for a %s by %s image when size is a percentage', async (width, height, expected) => {
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
  ])('sizes a %s by %s image using crop coordinates', async (width, height, expected) => {
    const fixture = mountImageGraph(reactive({ value: '/photo.png', coordinator: [10, 20, 30, 40] }))
    expect(fixture.item.background.size.value).toBeNull()
    await flushUpdates()
    loadImage(browser.images[0]!, width, height)
    await flushUpdates()
    expect(fixture.item.background.size.value).toBe(expected)
  })

  it('resolves priority coordinator -> adaptive -> size', async () => {
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
