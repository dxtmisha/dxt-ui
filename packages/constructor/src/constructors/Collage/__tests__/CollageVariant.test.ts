// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref, toRefs } from 'vue'
import { CollageVariant } from '../CollageVariant'
import { CollageElement } from '../CollageElement'
import { CollageMasonryHorizontal } from '../CollageMasonryHorizontal'
import { CollageMasonryVertical } from '../CollageMasonryVertical'
import { CollageGrow } from '../CollageGrow'
import { CollageWoven } from '../CollageWoven'
import type { CollageProps } from '../props'

describe('CollageVariant', () => {
  it('should initialize with update handlers', () => {
    const element = ref<HTMLElement | undefined>(document.createElement('div'))
    const props: CollageProps = {
      variant: 'standard'
    }
    const refs = toRefs(props)
    const elementItem = new CollageElement(element)
    const grow = new CollageGrow('d-collage', elementItem)
    const woven = new CollageWoven('d-collage', elementItem)
    const masonryHorizontal = new CollageMasonryHorizontal(grow, elementItem)
    const masonryVertical = new CollageMasonryVertical(grow, elementItem)
    const variant = new CollageVariant(props, refs, elementItem, woven, masonryHorizontal, masonryVertical)

    expect(typeof variant.update).toBe('function')
    expect(typeof variant.updateByTime).toBe('function')
  })

  it('should not throw on update when variant is woven', () => {
    const container = document.createElement('div')
    const item1 = document.createElement('div')
    item1.setAttribute('data-value', 'val-1')
    container.appendChild(item1)

    const element = ref<HTMLElement | undefined>(container)
    const props: CollageProps = {
      variant: 'woven'
    }
    const refs = toRefs(props)
    const elementItem = new CollageElement(element)
    const grow = new CollageGrow('d-collage', elementItem)
    const woven = new CollageWoven('d-collage', elementItem)
    const masonryHorizontal = new CollageMasonryHorizontal(grow, elementItem)
    const masonryVertical = new CollageMasonryVertical(grow, elementItem)
    const variant = new CollageVariant(props, refs, elementItem, woven, masonryHorizontal, masonryVertical)

    expect(() => variant.update()).not.toThrow()
  })

  it('should not throw on update when variant is masonryHorizontal', () => {
    const container = document.createElement('div')
    const item1 = document.createElement('div')
    item1.setAttribute('data-value', 'val-1')
    item1.setAttribute('data-width', '10')
    container.appendChild(item1)

    const element = ref<HTMLElement | undefined>(container)
    const props: CollageProps = {
      variant: 'masonryHorizontal'
    }
    const refs = toRefs(props)
    const elementItem = new CollageElement(element)
    const grow = new CollageGrow('d-collage', elementItem)
    const woven = new CollageWoven('d-collage', elementItem)
    const masonryHorizontal = new CollageMasonryHorizontal(grow, elementItem)
    const masonryVertical = new CollageMasonryVertical(grow, elementItem)
    const variant = new CollageVariant(props, refs, elementItem, woven, masonryHorizontal, masonryVertical)

    expect(() => variant.update()).not.toThrow()
  })

  it('should not throw on update when variant is masonryVertical', () => {
    const container = document.createElement('div')
    const item1 = document.createElement('div')
    item1.setAttribute('data-value', 'val-1')
    item1.setAttribute('data-height', '2')
    container.appendChild(item1)

    const element = ref<HTMLElement | undefined>(container)
    const props: CollageProps = {
      variant: 'masonryVertical'
    }
    const refs = toRefs(props)
    const elementItem = new CollageElement(element)
    const grow = new CollageGrow('d-collage', elementItem)
    const woven = new CollageWoven('d-collage', elementItem)
    const masonryHorizontal = new CollageMasonryHorizontal(grow, elementItem)
    const masonryVertical = new CollageMasonryVertical(grow, elementItem)
    const variant = new CollageVariant(props, refs, elementItem, woven, masonryHorizontal, masonryVertical)

    expect(() => variant.update()).not.toThrow()
  })

  it('should return true for isResize() when variant is woven, masonryHorizontal, or masonryVertical', () => {
    class TestCollageVariant extends CollageVariant {
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

    const propsWoven: CollageProps = { variant: 'woven' }
    const variantWoven = new TestCollageVariant(propsWoven, toRefs(propsWoven), elementItem, woven, masonryHorizontal, masonryVertical)
    expect(variantWoven.isResize()).toBe(true)

    const propsHorizontal: CollageProps = { variant: 'masonryHorizontal' }
    const variantHorizontal = new TestCollageVariant(propsHorizontal, toRefs(propsHorizontal), elementItem, woven, masonryHorizontal, masonryVertical)
    expect(variantHorizontal.isResize()).toBe(true)

    const propsVertical: CollageProps = { variant: 'masonryVertical' }
    const variantVertical = new TestCollageVariant(propsVertical, toRefs(propsVertical), elementItem, woven, masonryHorizontal, masonryVertical)
    expect(variantVertical.isResize()).toBe(true)
  })

  it('should return false for isResize() when variant is standard, quilted, or undefined', () => {
    class TestCollageVariant extends CollageVariant {
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

    const propsStandard: CollageProps = { variant: 'standard' }
    const variantStandard = new TestCollageVariant(propsStandard, toRefs(propsStandard), elementItem, woven, masonryHorizontal, masonryVertical)
    expect(variantStandard.isResize()).toBe(false)

    const propsQuilted: CollageProps = { variant: 'quilted' }
    const variantQuilted = new TestCollageVariant(propsQuilted, toRefs(propsQuilted), elementItem, woven, masonryHorizontal, masonryVertical)
    expect(variantQuilted.isResize()).toBe(false)

    const propsUndefined: CollageProps = {}
    const variantUndefined = new TestCollageVariant(propsUndefined, toRefs(propsUndefined), elementItem, woven, masonryHorizontal, masonryVertical)
    expect(variantUndefined.isResize()).toBe(false)
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

    const props: CollageProps = { variant: 'woven' }
    const variant = new CollageVariant(props, toRefs(props), elementItem, woven, masonryHorizontal, masonryVertical)

    expect(() => variant.updateByTime()).not.toThrow()
  })
})
