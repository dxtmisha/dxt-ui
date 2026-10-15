// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { nextTick, reactive } from 'vue'
import { ImageAdaptiveGroup } from '../ImageAdaptiveGroup'
import { ImageCalculationList } from '../ImageCalculationList'
import { browser, flushUpdates, intersect, loadImage, mountImageGraph } from './domFixtures'

describe('ImageAdaptiveGroup', () => {
  it('deduplicates active items and batches repeated recalculations into one frame', async () => {
    const fixture = mountImageGraph(reactive({
      value: '/photo.png', adaptive: true, adaptiveAlways: true, objectWidth: 200, adaptiveGroup: 'gallery'
    }))
    await flushUpdates()
    loadImage(browser.images[0]!)
    await flushUpdates()
    expect(ImageAdaptiveGroup.is(fixture.item.adaptive)).toBe(true)
    const make = vi.spyOn(fixture.item.adaptive, 'make')
    ImageAdaptiveGroup.add(fixture.item.adaptive)
    ImageAdaptiveGroup.add(fixture.item.adaptive)
    await nextTick()
    expect(browser.frames.size).toBe(1)
    await flushUpdates()
    expect(make).toHaveBeenCalledTimes(1)
    expect(ImageCalculationList.get('gallery').width).toBe(200)
  })

  it('excludes invisible items until intersection and recalculates when they leave', async () => {
    const fixture = mountImageGraph(reactive({
      value: '/photo.png', adaptive: true, adaptiveAlways: false, objectWidth: 200, adaptiveGroup: 'gallery'
    }))
    await flushUpdates()
    loadImage(browser.images[0]!)
    await flushUpdates()
    expect(fixture.item.adaptive.isBeyond()).toBe(false)
    expect(ImageCalculationList.get('gallery').width).toBe(0)
    intersect(fixture.element.value!)
    await flushUpdates()
    expect(fixture.item.adaptive.isBeyond()).toBe(true)
    expect(ImageCalculationList.get('gallery').width).toBe(200)
    intersect(fixture.element.value!, false)
    await flushUpdates()
    expect(ImageCalculationList.get('gallery').width).toBe(0)
  })

  it('removes the last item, resets calculations and disposes platform subscriptions', async () => {
    const fixture = mountImageGraph(reactive({
      value: '/photo.png', adaptive: true, adaptiveAlways: true, objectWidth: 200, adaptiveGroup: 'gallery'
    }))
    await flushUpdates()
    loadImage(browser.images[0]!)
    await flushUpdates()
    fixture.unmount()
    await flushUpdates()
    expect(ImageAdaptiveGroup.is(fixture.item.adaptive)).toBe(false)
    expect(ImageCalculationList.isSize()).toBe(false)
    expect(browser.resizes.every(observation => observation.targets.size === 0)).toBe(true)
    expect(browser.intersections.every(observation => observation.targets.size === 0)).toBe(true)
    ImageAdaptiveGroup.remove(fixture.item.adaptive)
    ImageAdaptiveGroup.reset()
    expect(ImageCalculationList.isSize()).toBe(false)
  })
})
