// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { reactive } from 'vue'
import { ImageLazy } from '../ImageLazy'
import { browser, flushUpdates, intersect, mountHelper } from './domFixtures'
import type { ImageProps } from '../props'

describe('ImageLazy', () => {
  it('releases the previous target when its element reference changes', async () => {
    const fixture = mountHelper(element => new ImageLazy(reactive({ lazy: true, preloadOffset: '0px' }), element))
    await flushUpdates()
    const previous = fixture.element.value!
    const replacement = document.createElement('div')
    previous.replaceWith(replacement)
    fixture.element.value = replacement
    await flushUpdates()
    expect(browser.intersections.every(observation => !observation.targets.has(previous))).toBe(true)
    expect(browser.intersections.some(observation => observation.targets.has(replacement))).toBe(true)
  })

  it('does not observe eager images', async () => {
    const props = reactive({ lazy: false, preloadOffset: '100px' })
    const fixture = mountHelper(element => new ImageLazy(props, element))
    await flushUpdates()
    expect(fixture.item.isLazy()).toBe(false)
    expect(browser.intersections.every(observation => observation.targets.size === 0)).toBe(true)
  })

  it('waits for intersection, ignores invisible notifications and stops after visibility', async () => {
    const props = reactive({ lazy: true, preloadOffset: '100px' })
    const fixture = mountHelper(element => new ImageLazy(props, element))
    await flushUpdates()
    const observation = browser.intersections.find(item => item.targets.has(fixture.element.value!))
    expect(observation?.observer.rootMargin).toBe('100px 0px')
    expect(fixture.item.isLazy()).toBe(true)
    intersect(fixture.element.value!, false)
    await flushUpdates()
    expect(fixture.item.isLazy()).toBe(true)
    intersect(fixture.element.value!)
    await flushUpdates()
    expect(fixture.item.isLazy()).toBe(false)
    expect(observation?.targets.size).toBe(0)
    fixture.item.stop()
    expect(fixture.item.isLazy()).toBe(false)
    fixture.item.reset()
    expect(fixture.item.isLazy()).toBe(true)
  })

  it('reconfigures the observer when preload distance or lazy mode changes', async () => {
    const props = reactive<ImageProps>({ lazy: true, preloadOffset: '50px' })
    const fixture = mountHelper(element => new ImageLazy(props, element))
    await flushUpdates()
    const previous = browser.intersections.find(item => item.targets.has(fixture.element.value!))
    props.preloadOffset = '200px'
    await flushUpdates()
    expect(previous?.targets.size).toBe(0)
    expect(browser.intersections.some(item => item.targets.has(fixture.element.value!) && item.observer.rootMargin === '200px 0px')).toBe(true)
    props.lazy = false
    await flushUpdates()
    expect(fixture.item.isLazy()).toBe(false)
    expect(browser.intersections.every(item => item.targets.size === 0)).toBe(true)
    props.lazy = true
    await flushUpdates()
    expect(fixture.item.isLazy()).toBe(true)
    expect(browser.intersections.some(item => item.targets.has(fixture.element.value!))).toBe(true)
  })

  it('detaches observers and ignores events after unmount', async () => {
    const fixture = mountHelper(element => new ImageLazy(reactive({ lazy: true, preloadOffset: '0px' }), element))
    await flushUpdates()
    const element = fixture.element.value!
    fixture.unmount()
    expect(browser.intersections.every(item => item.targets.size === 0)).toBe(true)
    intersect(element)
    await flushUpdates()
    expect(fixture.item.isLazy()).toBe(true)
  })
})
