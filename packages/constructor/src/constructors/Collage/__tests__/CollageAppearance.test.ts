// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref, toRefs } from 'vue'
import { CollageAppearance } from '../CollageAppearance'
import { CollageElement } from '../CollageElement'
import { CollageEven } from '../CollageEven'
import { CollageStyle } from '../CollageStyle'
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
    const style = new CollageStyle('d-collage', elementItem)
    const even = new CollageEven('d-collage')
    const woven = new CollageWoven('d-collage', elementItem, even)
    const appearance = new CollageAppearance(props, refs, elementItem, style, woven)

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
    const style = new CollageStyle('d-collage', elementItem)
    const even = new CollageEven('d-collage')
    const woven = new CollageWoven('d-collage', elementItem, even)
    const appearance = new CollageAppearance(props, refs, elementItem, style, woven)

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
    const style = new CollageStyle('d-collage', elementItem)
    const even = new CollageEven('d-collage')
    const woven = new CollageWoven('d-collage', elementItem, even)
    const appearance = new CollageAppearance(props, refs, elementItem, style, woven)

    expect(() => appearance.update()).not.toThrow()
  })
})
