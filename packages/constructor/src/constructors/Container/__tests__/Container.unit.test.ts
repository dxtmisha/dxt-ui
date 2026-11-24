// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { AreaInclude } from '../../../classes/AreaInclude'
import { getAreaValue } from '../../../functions/getAreaValue'
import { Container } from '../Container'
import type { ContainerProps } from '../props'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('Container (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should eagerly instantiate AreaInclude during setup and provide reactive area context', async () => {
      const props = reactive<ContainerProps>({ area: 'container' })
      let containerInstance: Container | undefined

      const Child = defineComponent({
        setup() {
          return () => h('span', { class: 'child-area' }, getAreaValue() ?? 'undefined')
        }
      })

      const Parent = defineComponent({
        setup() {
          const element = ref<HTMLElement | undefined>(undefined)
          const naming = new DesignName('d1.container')
          containerInstance = new Container(props, element, naming)

          return () => h('div', [h(Child)])
        }
      })

      const host = document.createElement('div')
      const app = createApp(Parent)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(containerInstance).toBeDefined()
      expect(containerInstance?.hasInstance('area')).toBe(true)
      expect(containerInstance?.i('area')).toBeInstanceOf(AreaInclude)
      expect(containerInstance?.isMounted.value).toBe(true)
      expect(host.querySelector('.child-area')?.textContent).toBe('container')

      props.area = 'section'
      await nextTick()
      expect(host.querySelector('.child-area')?.textContent).toBe('section')

      props.area = undefined
      await nextTick()
      expect(host.querySelector('.child-area')?.textContent).toBe('undefined')
    })

    it('should support Dependency Injection via constructors override for AreaInclude', () => {
      const constructorSpy = vi.fn()

      class CustomAreaInclude extends AreaInclude {
        constructor(props: Readonly<ContainerProps>) {
          super(props)
          constructorSpy(props)
        }
      }

      let containerInstance: Container | undefined
      const props = reactive<ContainerProps>({ area: 'custom-area' })

      const Host = defineComponent({
        setup() {
          const element = ref<HTMLElement | undefined>(undefined)
          const naming = new DesignName('d1.container')

          containerInstance = new Container(
            props,
            element,
            naming,
            undefined,
            undefined,
            undefined,
            { area: CustomAreaInclude }
          )

          return () => h('div')
        }
      })

      const host = document.createElement('div')
      const app = createApp(Host)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(constructorSpy).toHaveBeenCalledTimes(1)
      expect(constructorSpy).toHaveBeenCalledWith(props)
      expect(containerInstance?.hasInstance('area')).toBe(true)
      expect(containerInstance?.i('area')).toBeInstanceOf(CustomAreaInclude)
    })
  })

  describe('Boundary values, isolation, and lifecycle cleanup', () => {
    it('should handle empty string and undefined area values without throwing', async () => {
      const props = reactive<ContainerProps>({ area: '' })

      const Child = defineComponent({
        setup() {
          return () => {
            const value = getAreaValue()
            return h('span', { class: 'value' }, value === undefined ? '<undef>' : `[${value}]`)
          }
        }
      })

      const Parent = defineComponent({
        setup() {
          const element = ref<HTMLElement | undefined>(undefined)
          const naming = new DesignName('d1.container')
          new Container(props, element, naming)

          return () => h('div', [h(Child)])
        }
      })

      const host = document.createElement('div')
      const app = createApp(Parent)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(host.querySelector('.value')?.textContent).toBe('[]')

      props.area = 'контейнер_tiếng_Việt_🚀'
      await nextTick()
      expect(host.querySelector('.value')?.textContent).toBe('[контейнер_tiếng_Việt_🚀]')

      props.area = undefined
      await nextTick()
      expect(host.querySelector('.value')?.textContent).toBe('<undef>')
    })

    it('should isolate state across two independent Container instances', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      let firstInstance: Container | undefined
      let secondInstance: Container | undefined

      const Child = defineComponent({
        props: {
          marker: {
            type: String,
            required: true
          }
        },
        setup(props) {
          return () => h('span', { class: props.marker }, getAreaValue() ?? 'none')
        }
      })

      const createBranch = (area: string, marker: string, onInit: (instance: Container) => void) => defineComponent({
        setup() {
          const instance = new Container(
            reactive<ContainerProps>({ area }),
            ref<HTMLElement | undefined>(undefined),
            new DesignName('d1.container')
          )
          onInit(instance)

          return () => h('div', [h(Child, { marker })])
        }
      })

      const FirstBranch = createBranch('first', 'first-area', (instance) => {
        firstInstance = instance
      })
      const SecondBranch = createBranch('second', 'second-area', (instance) => {
        secondInstance = instance
      })

      const Host = defineComponent({
        setup() {
          return () => h('div', [h(FirstBranch), h(SecondBranch)])
        }
      })

      const host = document.createElement('div')
      const app = createApp(Host)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(firstInstance?.hasInstance('area')).toBe(true)
      expect(secondInstance?.hasInstance('area')).toBe(true)
      expect(firstInstance?.i('area')).not.toBe(secondInstance?.i('area'))
      expect(host.querySelector('.first-area')?.textContent).toBe('first')
      expect(host.querySelector('.second-area')?.textContent).toBe('second')
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should emit zero Vue warnings when instantiated inside component setup and clean up on unmount', async () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const props = reactive<ContainerProps>({ area: 'initial' })
      let mountState: Container | undefined

      const Host = defineComponent({
        setup() {
          mountState = new Container(
            props,
            ref<HTMLElement | undefined>(undefined),
            new DesignName('d1.container')
          )

          return () => h('div')
        }
      })

      const host = document.createElement('div')
      const app = createApp(Host)
      app.mount(host)

      expect(mountState?.isMounted.value).toBe(true)
      expect(warnSpy).not.toHaveBeenCalled()

      app.unmount()

      props.area = 'after-unmount'
      await nextTick()
      expect(warnSpy).not.toHaveBeenCalled()
    })
  })
})
