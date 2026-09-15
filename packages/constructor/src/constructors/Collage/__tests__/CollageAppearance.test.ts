// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref, toRefs } from 'vue'
import { CollageAppearance } from '../CollageAppearance'
import { CollageElement } from '../CollageElement'
import { CollageMasonryHorizontal } from '../CollageMasonryHorizontal'
import { CollageMasonryVertical } from '../CollageMasonryVertical'
import { CollageGrow } from '../CollageGrow'
import { CollageWoven } from '../CollageWoven'
import type { CollageProps } from '../props'

describe('CollageAppearance', () => {
  it('should initialize with update handlers', () => {
    const element = ref<HTMLElement | undefined>(document.createElement('div'))
    const props: CollageProps = {
      appearance: 'standard'
    }
    const refs = toRefs(props)
    const elementItem = new CollageElement(element)
    const grow = new CollageGrow('d-collage', elementItem)
    const woven = new CollageWoven('d-collage', elementItem)
    const masonryHorizontal = new CollageMasonryHorizontal(grow, elementItem)
    const masonryVertical = new CollageMasonryVertical(grow, elementItem)
    const appearance = new CollageAppearance(props, refs, elementItem, woven, masonryHorizontal, masonryVertical)

    expect(typeof appearance.update).toBe('function')
    expect(typeof appearance.updateByTime).toBe('function')
  })

  it('should not throw on update when appearance is woven', () => {
    const container = document.createElement('div')
    const item1 = document.createElement('div')
    item1.setAttribute('data-value', 'val-1')
    container.appendChild(item1)

    const element = ref<HTMLElement | undefined>(container)
    const props: CollageProps = {
      appearance: 'woven'
    }
    const refs = toRefs(props)
    const elementItem = new CollageElement(element)
    const grow = new CollageGrow('d-collage', elementItem)
    const woven = new CollageWoven('d-collage', elementItem)
    const masonryHorizontal = new CollageMasonryHorizontal(grow, elementItem)
    const masonryVertical = new CollageMasonryVertical(grow, elementItem)
    const appearance = new CollageAppearance(props, refs, elementItem, woven, masonryHorizontal, masonryVertical)

    expect(() => appearance.update()).not.toThrow()
  })

  it('should not throw on update when appearance is masonryHorizontal', () => {
    const container = document.createElement('div')
    const item1 = document.createElement('div')
    item1.setAttribute('data-value', 'val-1')
    item1.setAttribute('data-width', '10')
    container.appendChild(item1)

    const element = ref<HTMLElement | undefined>(container)
    const props: CollageProps = {
      appearance: 'masonryHorizontal'
    }
    const refs = toRefs(props)
    const elementItem = new CollageElement(element)
    const grow = new CollageGrow('d-collage', elementItem)
    const woven = new CollageWoven('d-collage', elementItem)
    const masonryHorizontal = new CollageMasonryHorizontal(grow, elementItem)
    const masonryVertical = new CollageMasonryVertical(grow, elementItem)
    const appearance = new CollageAppearance(props, refs, elementItem, woven, masonryHorizontal, masonryVertical)

    expect(() => appearance.update()).not.toThrow()
  })

  it('should not throw on update when appearance is masonryVertical', () => {
    const container = document.createElement('div')
    const item1 = document.createElement('div')
    item1.setAttribute('data-value', 'val-1')
    item1.setAttribute('data-height', '2')
    container.appendChild(item1)

    const element = ref<HTMLElement | undefined>(container)
    const props: CollageProps = {
      appearance: 'masonryVertical'
    }
    const refs = toRefs(props)
    const elementItem = new CollageElement(element)
    const grow = new CollageGrow('d-collage', elementItem)
    const woven = new CollageWoven('d-collage', elementItem)
    const masonryHorizontal = new CollageMasonryHorizontal(grow, elementItem)
    const masonryVertical = new CollageMasonryVertical(grow, elementItem)
    const appearance = new CollageAppearance(props, refs, elementItem, woven, masonryHorizontal, masonryVertical)

    expect(() => appearance.update()).not.toThrow()
  })

  it('should return true for isResize() when appearance is woven, masonryHorizontal, or masonryVertical', () => {
    class TestCollageAppearance extends CollageAppearance {
      override isResize(): boolean {
        return super.isResize()
      }
    }

    const element = ref<HTMLElement | undefined>(undefined)
    const elementItem = new CollageElement(element)
    const grow = new CollageGrow('d-collage', elementItem)
    const woven = new CollageWoven('d-collage', elementItem)
    const masonryHorizontal = new CollageMasonryHorizontal(grow, elementItem)
    const masonryVertical = new CollageMasonryVertical(grow, elementItem)

    const propsWoven: CollageProps = { appearance: 'woven' }
    const appearanceWoven = new TestCollageAppearance(propsWoven, toRefs(propsWoven), elementItem, woven, masonryHorizontal, masonryVertical)
    expect(appearanceWoven.isResize()).toBe(true)

    const propsHorizontal: CollageProps = { appearance: 'masonryHorizontal' }
    const appearanceHorizontal = new TestCollageAppearance(propsHorizontal, toRefs(propsHorizontal), elementItem, woven, masonryHorizontal, masonryVertical)
    expect(appearanceHorizontal.isResize()).toBe(true)

    const propsVertical: CollageProps = { appearance: 'masonryVertical' }
    const appearanceVertical = new TestCollageAppearance(propsVertical, toRefs(propsVertical), elementItem, woven, masonryHorizontal, masonryVertical)
    expect(appearanceVertical.isResize()).toBe(true)
  })

  it('should return false for isResize() when appearance is standard, quilted, or undefined', () => {
    class TestCollageAppearance extends CollageAppearance {
      override isResize(): boolean {
        return super.isResize()
      }
    }

    const element = ref<HTMLElement | undefined>(undefined)
    const elementItem = new CollageElement(element)
    const grow = new CollageGrow('d-collage', elementItem)
    const woven = new CollageWoven('d-collage', elementItem)
    const masonryHorizontal = new CollageMasonryHorizontal(grow, elementItem)
    const masonryVertical = new CollageMasonryVertical(grow, elementItem)

    const propsStandard: CollageProps = { appearance: 'standard' }
    const appearanceStandard = new TestCollageAppearance(propsStandard, toRefs(propsStandard), elementItem, woven, masonryHorizontal, masonryVertical)
    expect(appearanceStandard.isResize()).toBe(false)

    const propsQuilted: CollageProps = { appearance: 'quilted' }
    const appearanceQuilted = new TestCollageAppearance(propsQuilted, toRefs(propsQuilted), elementItem, woven, masonryHorizontal, masonryVertical)
    expect(appearanceQuilted.isResize()).toBe(false)

    const propsUndefined: CollageProps = {}
    const appearanceUndefined = new TestCollageAppearance(propsUndefined, toRefs(propsUndefined), elementItem, woven, masonryHorizontal, masonryVertical)
    expect(appearanceUndefined.isResize()).toBe(false)
  })

  it('should trigger debounced resize in updateByTime() when elementItem.isResize() is true', async () => {
    const parent = document.createElement('div')
    const container = document.createElement('div')
    parent.appendChild(container)
    Object.defineProperty(parent, 'offsetWidth', { value: 500, configurable: true, writable: true })

    const element = ref<HTMLElement | undefined>(container)
    const elementItem = new CollageElement(element)
    const grow = new CollageGrow('d-collage', elementItem)
    const woven = new CollageWoven('d-collage', elementItem)
    const masonryHorizontal = new CollageMasonryHorizontal(grow, elementItem)
    const masonryVertical = new CollageMasonryVertical(grow, elementItem)

    const props: CollageProps = { appearance: 'woven' }
    const appearance = new CollageAppearance(props, toRefs(props), elementItem, woven, masonryHorizontal, masonryVertical)

    expect(() => appearance.updateByTime()).not.toThrow()
  })
})
