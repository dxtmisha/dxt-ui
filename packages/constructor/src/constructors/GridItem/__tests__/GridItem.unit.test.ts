// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignLogicAbstract, DesignName } from '@dxtmisha/functional'

import { GridItem, type GridItemConstructors } from '../GridItem'
import { defaultsGridItem, type GridItemProps } from '../props'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('GridItem (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should extend DesignLogicAbstract, initialize cleanly in setup, and track mount lifecycle', () => {
      expect(defaultsGridItem.base).toBe('1')
      const props = reactive<GridItemProps>({
        base: '1',
        align: 'center'
      })
      let gridItemInstance: GridItem | undefined
      let isMountedBeforeMount: boolean | undefined

      const Host = defineComponent({
        setup() {
          const element = ref<HTMLDivElement | undefined>(undefined)
          const naming = new DesignName('d1.gridItem')
          gridItemInstance = new GridItem(props, element, naming)
          isMountedBeforeMount = gridItemInstance.isMounted.value

          return () => h('div', { ref: element })
        }
      })

      const host = document.createElement('div')
      const app = createApp(Host)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(gridItemInstance).toBeDefined()
      expect(gridItemInstance).toBeInstanceOf(DesignLogicAbstract)
      expect(isMountedBeforeMount).toBe(false)
      expect(gridItemInstance?.isMounted.value).toBe(true)
    })

    it('should accept optional DesignLogicAbstract arguments including constructors override without errors', () => {
      const props = reactive<GridItemProps>({ base: '6', align: 'stretch' })
      const constructors: Partial<GridItemConstructors> = {}
      const emits = vi.fn()
      let gridItemInstance: GridItem | undefined

      const Host = defineComponent({
        setup() {
          const element = ref<HTMLDivElement | undefined>(undefined)
          const naming = new DesignName('d1.gridItem')
          gridItemInstance = new GridItem(
            props,
            element,
            naming,
            undefined,
            { default: () => [h('span', 'Slot')] },
            emits,
            constructors
          )

          return () => h('div', { ref: element })
        }
      })

      const host = document.createElement('div')
      const app = createApp(Host)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(gridItemInstance).toBeInstanceOf(GridItem)
      expect(gridItemInstance?.isMounted.value).toBe(true)
    })
  })

  describe('Boundary values, isolation, and lifecycle cleanup', () => {
    it.each<GridItemProps>([
      {},
      { base: undefined, align: undefined },
      { base: '1', align: 'center' },
      { base: '12', align: 'baseline' },
      { base: '4', align: 'top' },
      { base: '6', align: 'bottom' },
      { base: '8', align: 'stretch' },
      { base: '10', align: 'start' },
      { base: '12', align: 'end' }
    ])('should initialize safely with prop combination %o', (initialProps) => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const props = reactive<GridItemProps>({ ...initialProps })
      let gridItemInstance: GridItem | undefined

      const Host = defineComponent({
        setup() {
          const element = ref<HTMLDivElement | undefined>(undefined)
          const naming = new DesignName('d1.gridItem')
          gridItemInstance = new GridItem(props, element, naming)

          return () => h('div', { ref: element })
        }
      })

      const host = document.createElement('div')
      const app = createApp(Host)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(gridItemInstance).toBeInstanceOf(GridItem)
      expect(gridItemInstance?.isMounted.value).toBe(true)
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should isolate state across two independent GridItem instances', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      let firstInstance: GridItem | undefined
      let secondInstance: GridItem | undefined

      const createBranch = (
        initialProps: GridItemProps,
        onInit: (instance: GridItem) => void
      ) => defineComponent({
        setup() {
          const element = ref<HTMLDivElement | undefined>(undefined)
          const instance = new GridItem(
            reactive<GridItemProps>(initialProps),
            element,
            new DesignName('d1.gridItem')
          )
          onInit(instance)

          return () => h('div', { ref: element })
        }
      })

      const FirstBranch = createBranch({ base: '3', align: 'start' }, (instance) => {
        firstInstance = instance
      })
      const SecondBranch = createBranch({ base: '9', align: 'end' }, (instance) => {
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

      expect(firstInstance).toBeDefined()
      expect(secondInstance).toBeDefined()
      expect(firstInstance).not.toBe(secondInstance)
      expect(firstInstance?.isMounted.value).toBe(true)
      expect(secondInstance?.isMounted.value).toBe(true)
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should emit zero Vue warnings when mounted and unmounted cleanly', async () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const props = reactive<GridItemProps>({ base: '2', align: 'center' })
      let gridItemInstance: GridItem | undefined

      const Host = defineComponent({
        setup() {
          const element = ref<HTMLDivElement | undefined>(undefined)
          gridItemInstance = new GridItem(
            props,
            element,
            new DesignName('d1.gridItem')
          )

          return () => h('div', { ref: element })
        }
      })

      const host = document.createElement('div')
      const app = createApp(Host)
      app.mount(host)

      expect(gridItemInstance?.isMounted.value).toBe(true)
      expect(warnSpy).not.toHaveBeenCalled()

      app.unmount()

      props.base = '12'
      props.align = 'end'
      await nextTick()
      expect(warnSpy).not.toHaveBeenCalled()
    })
  })
})
