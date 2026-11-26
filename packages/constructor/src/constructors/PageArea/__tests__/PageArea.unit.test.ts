// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { setAreaValue } from '../../../functions/setAreaValue'
import { PageArea } from '../PageArea'
import { defaultsPageArea, type PageAreaProps } from '../props'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

function mountPageAreaLogic(
  areaSource?: string,
  props: PageAreaProps = { ...defaultsPageArea }
) {
  let instance!: PageArea
  let observedArea: string | undefined
  let observedComponent = ''
  const reactiveArea = areaSource !== undefined ? ref<string | undefined>(areaSource) : undefined

  const Child = defineComponent({
    setup() {
      const element = ref<HTMLDivElement | undefined>(undefined)
      const naming = new DesignName('d1.pageArea')
      instance = new PageArea(props, element, naming)

      return () => {
        observedArea = instance.area
        observedComponent = instance.componentName
        return h('div', { 'data-component': observedComponent })
      }
    }
  })

  const Host = defineComponent({
    setup() {
      if (reactiveArea) {
        setAreaValue(reactiveArea)
      }
      return () => h(Child)
    }
  })

  const container = document.createElement('div')
  const app = createApp(Host)
  app.mount(container)
  cleanups.push(() => app.unmount())

  return {
    getInstance: () => instance,
    getArea: () => observedArea,
    getComponentName: () => observedComponent,
    reactiveArea
  }
}

describe('PageArea (isolated class)', () => {
  describe('Standard functional requirements and defaults', () => {
    it('should provide empty defaultsPageArea object and resolve group when no area context exists', () => {
      expect(defaultsPageArea).toEqual({})
      const { getArea, getComponentName } = mountPageAreaLogic()
      expect(getArea()).toBeUndefined()
      expect(getComponentName()).toBe('group')
    })

    it('should map each parent area level to the expected child component', () => {
      expect(mountPageAreaLogic('container').getComponentName()).toBe('page')
      expect(mountPageAreaLogic('page').getComponentName()).toBe('section')
      expect(mountPageAreaLogic('section').getComponentName()).toBe('block')
      expect(mountPageAreaLogic('block').getComponentName()).toBe('group')
    })
  })

  describe('Boundary values & state updates', () => {
    it('should fall back to group for group, header, empty, or unknown area names', () => {
      expect(mountPageAreaLogic('group').getComponentName()).toBe('group')
      expect(mountPageAreaLogic('header').getComponentName()).toBe('group')
      expect(mountPageAreaLogic('').getComponentName()).toBe('group')
      expect(mountPageAreaLogic('custom-unknown').getComponentName()).toBe('group')
    })

    it('should reflect reactive area changes dynamically', async () => {
      const { getArea, getComponentName, reactiveArea } = mountPageAreaLogic('container')
      expect(getComponentName()).toBe('page')

      reactiveArea!.value = 'section'
      await nextTick()
      expect(getArea()).toBe('section')
      expect(getComponentName()).toBe('block')

      reactiveArea!.value = undefined
      await nextTick()
      expect(getComponentName()).toBe('group')
    })
  })
})
