// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  nextTick,
  provide,
  reactive,
  ref
} from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { Skeleton } from '../Skeleton'
import { SkeletonInclude } from '../SkeletonInclude'
import { SKELETON_NAME_STATUS } from '../const'
import { defaultsSkeleton, type SkeletonProps } from '../props'
import type { SkeletonClassesList, SkeletonPropsInclude } from '../basicTypes'

/** Mounted application cleanup callbacks / Обработчики очистки смонтированных приложений */
const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.useRealTimers()
})

describe('SkeletonInclude (isolated class)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should resolve classesSkeleton by design prefix', () => {
      const props = reactive<SkeletonPropsInclude>({})
      const naming = new DesignName('d1.button')
      const include = new SkeletonInclude(props, naming)

      expect(include.classesSkeleton).toEqual(Skeleton.getClassesListByDesign('d1'))
    })

    it('should return binds reflecting isSkeleton prop', () => {
      const props = reactive<SkeletonPropsInclude>({})
      const naming = new DesignName('d1.button')
      const include = new SkeletonInclude(props, naming)

      expect(include.binds).toEqual({ isSkeleton: undefined })

      props.isSkeleton = true
      expect(include.binds).toEqual({ isSkeleton: true })

      props.isSkeleton = false
      expect(include.binds).toEqual({ isSkeleton: false })
    })

    it('should return empty classes when isSkeleton is false, undefined, or classesList is omitted/empty, and map classes when active', () => {
      const props = reactive<SkeletonPropsInclude>({ isSkeleton: false })
      const naming = new DesignName('d1.button')
      const include = new SkeletonInclude(props, naming, ['classText', 'classBackground'])

      expect(include.classes).toEqual({})

      props.isSkeleton = undefined
      expect(include.classes).toEqual({})

      props.isSkeleton = true
      expect(include.classes).toEqual({
        'd1-skeleton__text': true,
        'd1-skeleton__background': true
      })

      const includeWithoutList = new SkeletonInclude(props, naming)
      expect(includeWithoutList.classes).toEqual({})

      const includeWithEmptyList = new SkeletonInclude(props, naming, [])
      expect(includeWithEmptyList.classes).toEqual({})
    })

    it.each([
      ['classText', 'd1-skeleton__text'],
      ['classTextVariant', 'd1-skeleton__textVariant'],
      ['classBackground', 'd1-skeleton__background'],
      ['classBackgroundAfter', 'd1-skeleton__backgroundAfter'],
      ['classBackgroundBefore', 'd1-skeleton__backgroundBefore'],
      ['classBackgroundVariant', 'd1-skeleton__backgroundVariant'],
      ['classBorder', 'd1-skeleton__border'],
      ['classBorderVariant', 'd1-skeleton__borderVariant'],
      ['classNone', 'd1-skeleton__none']
    ] as Array<[keyof SkeletonClassesList, string]>)('should accurately map %s to %s', (key, expectedClass) => {
      const props = reactive<SkeletonPropsInclude>({ isSkeleton: true })
      const naming = new DesignName('d1.item')
      const include = new SkeletonInclude(props, naming, [key])

      expect(include.classes).toEqual({
        [expectedClass]: true
      })
    })
  })

  describe('Provider injection and reactive status (isSkeleton)', () => {
    it('should return false for isSkeleton() when instantiated outside a component or without provider', () => {
      const props = reactive<SkeletonPropsInclude>({ isSkeleton: true })
      const naming = new DesignName('d1.button')
      const includeOutside = new SkeletonInclude(props, naming, ['classBackground'])

      expect(includeOutside.isSkeleton()).toBe(false)

      let includeInsideWithoutProvider!: SkeletonInclude
      const StandaloneComponent = defineComponent({
        setup() {
          includeInsideWithoutProvider = new SkeletonInclude(props, naming, ['classBackground'])
          return () => h('div')
        }
      })

      const container = document.createElement('div')
      const app = createApp(StandaloneComponent)
      app.mount(container)
      mountedCleanups.push(() => app.unmount())

      expect(includeInsideWithoutProvider.isSkeleton()).toBe(false)
    })

    it('should reflect provided SKELETON_NAME_STATUS reactively inside a Vue component', async () => {
      const skeletonActive = ref(false)
      const props = reactive<SkeletonPropsInclude>({ isSkeleton: true })
      let include!: SkeletonInclude

      const ChildComponent = defineComponent({
        setup() {
          include = new SkeletonInclude(props, new DesignName('d1.button'), ['classBackground'])
          return () => h('div')
        }
      })

      const HostComponent = defineComponent({
        setup() {
          provide(SKELETON_NAME_STATUS, computed(() => skeletonActive.value))
          return () => h(ChildComponent)
        }
      })

      const container = document.createElement('div')
      const app = createApp(HostComponent)
      app.mount(container)
      mountedCleanups.push(() => app.unmount())

      expect(include.isSkeleton()).toBe(false)

      skeletonActive.value = true
      await nextTick()

      expect(include.isSkeleton()).toBe(true)

      skeletonActive.value = false
      await nextTick()

      expect(include.isSkeleton()).toBe(false)
    })

    it('should synchronize isSkeleton() with parent Skeleton delay and delayHide lifecycle', async () => {
      vi.useFakeTimers()

      const parentProps = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: false,
        delay: 200,
        delayHide: 150
      })
      const childProps = reactive<SkeletonPropsInclude>({ isSkeleton: true })
      let include!: SkeletonInclude

      const ChildComponent = defineComponent({
        setup() {
          include = new SkeletonInclude(childProps, new DesignName('d1.button'), ['classBackground'])
          return () => h('button', { class: include.classes })
        }
      })

      const ParentComponent = defineComponent({
        setup() {
          new Skeleton(parentProps, ref<HTMLDivElement>(), new DesignName('d1.skeleton'))
          return () => h('div', [h(ChildComponent)])
        }
      })

      const container = document.createElement('div')
      const app = createApp(ParentComponent)
      app.mount(container)
      mountedCleanups.push(() => app.unmount())

      expect(include.isSkeleton()).toBe(false)

      parentProps.active = true
      await nextTick()

      // Before delay (200ms) elapses, parent visible is still false
      vi.advanceTimersByTime(199)
      expect(include.isSkeleton()).toBe(false)

      vi.advanceTimersByTime(1)
      expect(include.isSkeleton()).toBe(true)

      parentProps.active = false
      await nextTick()

      // During delayHide (150ms), parent visible stays true
      vi.advanceTimersByTime(149)
      expect(include.isSkeleton()).toBe(true)

      vi.advanceTimersByTime(1)
      expect(include.isSkeleton()).toBe(false)
    })
  })
})
