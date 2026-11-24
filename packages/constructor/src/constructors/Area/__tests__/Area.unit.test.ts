// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { setAreaValue } from '../../../functions/setAreaValue'
import { Area } from '../Area'
import type { AreaProps } from '../props'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('Area (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should return undefined when neither injected area nor areaDefault is provided', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())

      scope.run(() => {
        const props = reactive<AreaProps>({})
        const element = ref<HTMLDivElement | undefined>(undefined)
        const naming = new DesignName('d1.area')
        const instance = new Area(props, element, naming)

        expect(instance.area).toBeUndefined()
      })
    })

    it('should return areaDefault when no ancestor injects an area value', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())

      scope.run(() => {
        const props = reactive<AreaProps>({ areaDefault: 'sidebar' })
        const element = ref<HTMLDivElement | undefined>(undefined)
        const naming = new DesignName('d1.area')
        const instance = new Area(props, element, naming)

        expect(instance.area).toBe('sidebar')

        props.areaDefault = 'footer'
        expect(instance.area).toBe('footer')
      })
    })

    it('should prioritize injected area value over areaDefault and react to updates', async () => {
      const injectedArea = ref<string | undefined>('header')

      const Child = defineComponent({
        setup() {
          const props = reactive<AreaProps>({ areaDefault: 'fallback' })
          const element = ref<HTMLDivElement | undefined>(undefined)
          const naming = new DesignName('d1.area')
          const areaInstance = new Area(props, element, naming)

          return () => h('div', areaInstance.area ?? 'none')
        }
      })

      const Parent = defineComponent({
        setup() {
          setAreaValue(injectedArea)
          return () => h(Child)
        }
      })

      const host = document.createElement('div')
      const app = createApp(Parent)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(host.textContent).toBe('header')

      injectedArea.value = 'content'
      await nextTick()
      expect(host.textContent).toBe('content')

      injectedArea.value = undefined
      await nextTick()
      expect(host.textContent).toBe('fallback')
    })
  })

  describe('Boundary values and edge cases', () => {
    it('should preserve empty string injected value instead of falling back to areaDefault', () => {
      let resolved: string | undefined

      const Child = defineComponent({
        setup() {
          const props = reactive<AreaProps>({ areaDefault: 'defaultArea' })
          const element = ref<HTMLDivElement | undefined>(undefined)
          const naming = new DesignName('d1.area')
          const instance = new Area(props, element, naming)
          resolved = instance.area

          return () => h('div')
        }
      })

      const Parent = defineComponent({
        setup() {
          setAreaValue('')
          return () => h(Child)
        }
      })

      const host = document.createElement('div')
      const app = createApp(Parent)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(resolved).toBe('')
    })
  })
})
