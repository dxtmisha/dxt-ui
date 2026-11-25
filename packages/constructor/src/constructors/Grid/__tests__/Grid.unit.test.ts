// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignLogicAbstract, DesignName } from '@dxtmisha/functional'

import { Grid } from '../Grid'
import { defaultsGrid, type GridProps } from '../props'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('Grid (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should extend DesignLogicAbstract and track component mount lifecycle', () => {
      const props = reactive<GridProps>({ align: 'center' })
      let gridInstance: Grid | undefined
      let isMountedDuringSetup: boolean | undefined

      const Host = defineComponent({
        setup() {
          const element = ref<HTMLDivElement | undefined>(undefined)
          const naming = new DesignName('d1.grid')
          gridInstance = new Grid(props, element, naming)
          isMountedDuringSetup = gridInstance.isMounted.value

          return () => h('div', { ref: element })
        }
      })

      const host = document.createElement('div')
      const app = createApp(Host)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(gridInstance).toBeInstanceOf(Grid)
      expect(gridInstance).toBeInstanceOf(DesignLogicAbstract)
      expect(isMountedDuringSetup).toBe(false)
      expect(gridInstance?.isMounted.value).toBe(true)
      expect(defaultsGrid).toEqual({})
    })

    it('should accept full constructor parameters including optional components, slots, emits, and constructors', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const emits = vi.fn()
      let gridInstance: Grid | undefined

      const Host = defineComponent({
        setup(_, { slots }) {
          const element = ref<HTMLDivElement | undefined>(undefined)
          const naming = new DesignName('d1.grid')
          gridInstance = new Grid(
            reactive<GridProps>({ align: 'stretch' }),
            element,
            naming,
            undefined,
            slots,
            emits,
            {}
          )

          return () => h('div', { ref: element }, slots.default?.())
        }
      })

      const host = document.createElement('div')
      const app = createApp(defineComponent({
        setup() {
          return () => h(Host, null, {
            default: () => [h('span', 'Cell')]
          })
        }
      }))
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(gridInstance).toBeInstanceOf(Grid)
      expect(gridInstance?.isMounted.value).toBe(true)
      expect(host.textContent).toBe('Cell')
      expect(warnSpy).not.toHaveBeenCalled()
    })
  })

  describe('Boundary values, isolation, and lifecycle cleanup', () => {
    it.each<GridProps['align']>([
      'center',
      'top',
      'bottom',
      'stretch',
      'baseline',
      'start',
      'end',
      undefined
    ])('should initialize safely with align=%s', (align) => {
      let gridInstance: Grid | undefined

      const Host = defineComponent({
        setup() {
          const element = ref<HTMLDivElement | undefined>(undefined)
          const naming = new DesignName('d1.grid')
          gridInstance = new Grid(reactive<GridProps>({ align }), element, naming)

          return () => h('div', { ref: element })
        }
      })

      const host = document.createElement('div')
      const app = createApp(Host)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(gridInstance).toBeInstanceOf(Grid)
      expect(gridInstance?.isMounted.value).toBe(true)
    })

    it('should isolate lifecycle state across independent Grid instances', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      let firstInstance: Grid | undefined
      let secondInstance: Grid | undefined

      const createBranch = (align: GridProps['align'], onInit: (instance: Grid) => void) => defineComponent({
        setup() {
          const element = ref<HTMLDivElement | undefined>(undefined)
          const instance = new Grid(
            reactive<GridProps>({ align }),
            element,
            new DesignName('d1.grid')
          )
          onInit(instance)

          return () => h('div', { ref: element })
        }
      })

      const FirstBranch = createBranch('start', (instance) => {
        firstInstance = instance
      })
      const SecondBranch = createBranch('end', (instance) => {
        secondInstance = instance
      })

      const firstHost = document.createElement('div')
      const secondHost = document.createElement('div')
      const firstApp = createApp(FirstBranch)
      const secondApp = createApp(SecondBranch)

      firstApp.mount(firstHost)
      secondApp.mount(secondHost)
      cleanups.push(() => secondApp.unmount())

      expect(firstInstance).not.toBe(secondInstance)
      expect(firstInstance?.isMounted).not.toBe(secondInstance?.isMounted)
      expect(firstInstance?.isMounted.value).toBe(true)
      expect(secondInstance?.isMounted.value).toBe(true)

      firstApp.unmount()

      expect(secondInstance?.isMounted.value).toBe(true)
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should emit zero Vue warnings and clean up safely on unmount', async () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const props = reactive<GridProps>({ align: 'top' })
      let gridInstance: Grid | undefined

      const Host = defineComponent({
        setup() {
          const element = ref<HTMLDivElement | undefined>(undefined)
          gridInstance = new Grid(props, element, new DesignName('d1.grid'))

          return () => h('div', { ref: element })
        }
      })

      const host = document.createElement('div')
      const app = createApp(Host)
      app.mount(host)

      expect(gridInstance?.isMounted.value).toBe(true)
      expect(warnSpy).not.toHaveBeenCalled()

      app.unmount()

      props.align = 'bottom'
      await nextTick()
      expect(warnSpy).not.toHaveBeenCalled()
    })
  })
})
