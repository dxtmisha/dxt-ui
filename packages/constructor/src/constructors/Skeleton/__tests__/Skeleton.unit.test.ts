// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  effectScope,
  h,
  inject,
  nextTick,
  provide,
  reactive,
  ref,
  type ComputedRef
} from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { Skeleton, type SkeletonConstructors } from '../Skeleton'
import { SKELETON_NAME_STATUS } from '../const'
import { defaultsSkeleton, type SkeletonProps } from '../props'

/**
 * Inspectable subclass exposing DesignLogicAbstract protected members for unit testing.
 *
 * Подкласс для доступа к защищённым членам DesignLogicAbstract в модульных тестах.
 */
class InspectableSkeleton extends Skeleton {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof SkeletonConstructors, unknown>> {
    return this.instances
  }

  /**
   * Returns internal reactive visible state.
   *
   * Возвращает внутреннее реактивное состояние видимости.
   * @returns visible state boolean / булево состояние видимости
   */
  get isVisibleState(): boolean {
    return this.visible.value
  }

  /**
   * Returns active timer handle if scheduled.
   *
   * Возвращает дескриптор активного таймера, если он запланирован.
   * @returns timer handle or undefined / дескриптор таймера или undefined
   */
  get activeTimeout(): ReturnType<typeof setTimeout> | undefined {
    return this.timeout
  }

  /**
   * Simulates component mount lifecycle inside active scope.
   *
   * Симулирует жизненный цикл монтирования компонента внутри активной области.
   */
  triggerMounted(): void {
    this.isMounted.value = true
    this.scope?.run(() => {
      this.callLifecycle('onMounted')
      this.initConditions()
      this.onMounted?.()
    })
  }

  /**
   * Simulates component unmount lifecycle.
   *
   * Симулирует жизненный цикл размонтирования компонента.
   */
  triggerUnmounted(): void {
    this.isMounted.value = false
    this.callLifecycle('onUnmounted')
    this.onUnmounted?.()
  }
}

/** Mounted application cleanup callbacks / Обработчики очистки смонтированных приложений */
const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.useRealTimers()
})

describe('Skeleton (isolated class)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should generate all 9 skeleton class names via getClassesList and getClassesListByDesign', () => {
      const classesByClassName = Skeleton.getClassesList('custom-skeleton')

      expect(classesByClassName).toEqual({
        classText: 'custom-skeleton__text',
        classTextVariant: 'custom-skeleton__textVariant',
        classBackground: 'custom-skeleton__background',
        classBackgroundAfter: 'custom-skeleton__backgroundAfter',
        classBackgroundBefore: 'custom-skeleton__backgroundBefore',
        classBackgroundVariant: 'custom-skeleton__backgroundVariant',
        classBorder: 'custom-skeleton__border',
        classBorderVariant: 'custom-skeleton__borderVariant',
        classNone: 'custom-skeleton__none'
      })

      const classesByDesign = Skeleton.getClassesListByDesign('d1')

      expect(classesByDesign).toEqual({
        classText: 'd1-skeleton__text',
        classTextVariant: 'd1-skeleton__textVariant',
        classBackground: 'd1-skeleton__background',
        classBackgroundAfter: 'd1-skeleton__backgroundAfter',
        classBackgroundBefore: 'd1-skeleton__backgroundBefore',
        classBackgroundVariant: 'd1-skeleton__backgroundVariant',
        classBorder: 'd1-skeleton__border',
        classBorderVariant: 'd1-skeleton__borderVariant',
        classNone: 'd1-skeleton__none'
      })
    })

    it('should initialize inactive state with proper classes, aria, and binds', () => {
      const scope = effectScope()
      const props = reactive<SkeletonProps>({ ...defaultsSkeleton })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.skeleton')

      const skeleton = scope.run(() => new InspectableSkeleton(props, element, naming))!

      expect(Object.keys(skeleton.instantiatedItems)).toHaveLength(0)
      expect(skeleton.isActive()).toBe(false)
      expect(skeleton.isVisibleState).toBe(false)
      expect(skeleton.classesSkeleton).toEqual(Skeleton.getClassesList('d1-skeleton'))
      expect(skeleton.classes).toEqual({
        'd1-skeleton--active': false,
        'd1-skeleton--visible': false,
        'd1-skeleton--invisible': false
      })
      expect(skeleton.aria).toEqual({
        'aria-busy': 'false',
        'aria-live': 'polite'
      })
      expect(skeleton.binds).toEqual({
        'aria-busy': 'false',
        'aria-live': 'polite'
      })

      scope.stop()
    })

    it('should initialize active state immediately when active is true and delay is 0', () => {
      const scope = effectScope()
      const props = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: true,
        delay: 0
      })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.skeleton')

      const skeleton = scope.run(() => new InspectableSkeleton(props, element, naming))!

      expect(skeleton.isActive()).toBe(true)
      expect(skeleton.isVisibleState).toBe(true)
      expect(skeleton.classes).toEqual({
        'd1-skeleton--active': true,
        'd1-skeleton--visible': true,
        'd1-skeleton--invisible': true
      })
      expect(skeleton.aria).toEqual({
        'aria-busy': 'true',
        'aria-live': 'polite'
      })
      expect(skeleton.binds).toEqual({
        'inert': true,
        'aria-busy': 'true',
        'aria-live': 'polite'
      })

      props.invisible = false
      expect(skeleton.classes).toEqual({
        'd1-skeleton--active': true,
        'd1-skeleton--visible': true,
        'd1-skeleton--invisible': false
      })

      scope.stop()
    })

    it('should initialize visible state immediately when active is true and delay is negative', () => {
      const scope = effectScope()
      const props = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: true,
        delay: -50
      })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.skeleton')

      const skeleton = scope.run(() => new InspectableSkeleton(props, element, naming))!

      expect(skeleton.isActive()).toBe(true)
      expect(skeleton.isVisibleState).toBe(true)

      scope.stop()
    })
  })

  describe('Boundary values, delays, and timer transitions', () => {
    it('should defer visibility until delay elapses when mounted with active=true and delay > 0', () => {
      vi.useFakeTimers()

      const scope = effectScope()
      const props = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: true,
        delay: 300
      })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.skeleton')

      const skeleton = scope.run(() => new InspectableSkeleton(props, element, naming))!

      expect(skeleton.isActive()).toBe(true)
      expect(skeleton.isVisibleState).toBe(false)
      expect(skeleton.classes).toEqual({
        'd1-skeleton--active': true,
        'd1-skeleton--visible': false,
        'd1-skeleton--invisible': true
      })

      skeleton.triggerMounted()

      vi.advanceTimersByTime(299)
      expect(skeleton.isVisibleState).toBe(false)

      vi.advanceTimersByTime(1)
      expect(skeleton.isVisibleState).toBe(true)
      expect(skeleton.classes['d1-skeleton--visible']).toBe(true)

      scope.stop()
    })

    it('should delay hiding by delayHide milliseconds when active transitions from true to false', async () => {
      vi.useFakeTimers()

      const scope = effectScope()
      const props = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: true,
        delay: 0,
        delayHide: 250
      })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.skeleton')

      const skeleton = scope.run(() => new InspectableSkeleton(props, element, naming))!
      skeleton.triggerMounted()

      expect(skeleton.isVisibleState).toBe(true)

      props.active = false
      await nextTick()

      // Immediately after deactivation: both invisible and visible remain true during delayHide
      expect(skeleton.isActive()).toBe(false)
      expect(skeleton.aria['aria-busy']).toBe('true')
      expect(skeleton.binds.inert).toBe(true)
      expect(skeleton.classes['d1-skeleton--invisible']).toBe(true)
      expect(skeleton.classes['d1-skeleton--visible']).toBe(true)

      vi.advanceTimersByTime(249)
      expect(skeleton.isVisibleState).toBe(true)
      expect(skeleton.aria['aria-busy']).toBe('true')
      expect(skeleton.binds.inert).toBe(true)
      expect(skeleton.classes['d1-skeleton--invisible']).toBe(true)

      vi.advanceTimersByTime(1)
      expect(skeleton.isVisibleState).toBe(false)
      expect(skeleton.aria['aria-busy']).toBe('false')
      expect(skeleton.binds.inert).toBeUndefined()
      expect(skeleton.classes['d1-skeleton--visible']).toBe(false)
      expect(skeleton.classes['d1-skeleton--invisible']).toBe(false)

      scope.stop()
    })

    it('should cancel pending show timer if deactivated before delay elapses', async () => {
      vi.useFakeTimers()

      const scope = effectScope()
      const props = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: false,
        delay: 400
      })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.skeleton')

      const skeleton = scope.run(() => new InspectableSkeleton(props, element, naming))!
      skeleton.triggerMounted()

      props.active = true
      await nextTick()

      vi.advanceTimersByTime(200)
      expect(skeleton.isVisibleState).toBe(false)

      props.active = false
      await nextTick()

      vi.advanceTimersByTime(400)
      expect(skeleton.isVisibleState).toBe(false)

      scope.stop()
    })

    it('should cancel pending hide timer and not schedule redundant show timer if reactivated before delayHide elapses', async () => {
      vi.useFakeTimers()

      const scope = effectScope()
      const props = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: true,
        delay: 300,
        delayHide: 400
      })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.skeleton')

      const skeleton = scope.run(() => new InspectableSkeleton(props, element, naming))!
      skeleton.triggerMounted()

      vi.advanceTimersByTime(300)
      expect(skeleton.isVisibleState).toBe(true)

      props.active = false
      await nextTick()

      vi.advanceTimersByTime(200)
      expect(skeleton.isVisibleState).toBe(true)

      const setTimeoutSpy = vi.spyOn(globalThis, 'setTimeout')
      props.active = true
      await nextTick()

      // Since visible is already true, reactivating during delayHide must not schedule a new setTimeout
      expect(setTimeoutSpy).not.toHaveBeenCalled()

      vi.advanceTimersByTime(400)
      expect(skeleton.isVisibleState).toBe(true)

      scope.stop()
    })

    it.each([
      ['150', '200', 150, 200],
      ['0', '0', 0, 0],
      [0, 0, 0, 0],
      [-50, -100, 0, 0],
      [undefined, undefined, 0, 0]
    ])('should handle delay=%s and delayHide=%s correctly', async (delay, delayHide, expectedShowMs, expectedHideMs) => {
      vi.useFakeTimers()

      const scope = effectScope()
      const props = reactive<SkeletonProps>({
        active: false,
        delay,
        delayHide
      })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.skeleton')

      const skeleton = scope.run(() => new InspectableSkeleton(props, element, naming))!
      skeleton.triggerMounted()

      props.active = true
      await nextTick()

      if (expectedShowMs > 0) {
        expect(skeleton.isVisibleState).toBe(false)
        vi.advanceTimersByTime(expectedShowMs)
      }
      expect(skeleton.isVisibleState).toBe(true)

      props.active = false
      await nextTick()

      if (expectedHideMs > 0) {
        expect(skeleton.isVisibleState).toBe(true)
        vi.advanceTimersByTime(expectedHideMs)
      }
      expect(skeleton.isVisibleState).toBe(false)

      scope.stop()
    })
  })

  describe('Empty, nullish, and minimal plain object inputs', () => {
    it('should resolve default fallbacks when optional properties are omitted on a minimal plain object', () => {
      const scope = effectScope()
      const props = reactive<SkeletonProps>({ active: true })
      const skeleton = scope.run(() => new InspectableSkeleton(props, ref<HTMLDivElement>(), new DesignName('d1.skeleton')))!

      expect(skeleton.isActive()).toBe(true)
      expect(skeleton.isVisibleState).toBe(true)
      expect(skeleton.classes).toEqual({
        'd1-skeleton--active': true,
        'd1-skeleton--visible': true,
        'd1-skeleton--invisible': false
      })

      scope.stop()
    })
  })

  describe('Parent-child provider injection (SKELETON_NAME_STATUS)', () => {
    it('should provide visible status to descendants and inherit active status from parent provider', async () => {
      const parentProps = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: true
      })
      const childProps = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: false
      })

      let parentSkeleton!: Skeleton
      let childSkeleton!: Skeleton
      let injectedGrandchildStatus: ComputedRef<boolean> | undefined

      const GrandchildComponent = defineComponent({
        setup() {
          injectedGrandchildStatus = inject<ComputedRef<boolean>>(SKELETON_NAME_STATUS)
          return () => h('span')
        }
      })

      const ChildComponent = defineComponent({
        setup() {
          childSkeleton = new Skeleton(
            childProps,
            ref<HTMLDivElement>(),
            new DesignName('d1.skeleton')
          )
          return () => h('div', [h(GrandchildComponent)])
        }
      })

      const ParentComponent = defineComponent({
        setup() {
          parentSkeleton = new Skeleton(
            parentProps,
            ref<HTMLDivElement>(),
            new DesignName('d1.skeleton')
          )
          return () => h('div', [h(ChildComponent)])
        }
      })

      const container = document.createElement('div')
      const app = createApp(ParentComponent)
      app.mount(container)
      mountedCleanups.push(() => app.unmount())

      expect(parentSkeleton.isActive()).toBe(true)
      expect(childSkeleton.isActive()).toBe(true)
      expect(childSkeleton.classes['d1-skeleton--active']).toBe(true)
      expect(injectedGrandchildStatus?.value).toBe(true)

      parentProps.active = false
      await nextTick()

      expect(parentSkeleton.isActive()).toBe(false)
      expect(childSkeleton.isActive()).toBe(false)
      expect(childSkeleton.classes['d1-skeleton--active']).toBe(false)
      expect(injectedGrandchildStatus?.value).toBe(false)

      childProps.active = true
      await nextTick()

      expect(parentSkeleton.isActive()).toBe(false)
      expect(childSkeleton.isActive()).toBe(true)
      expect(childSkeleton.classes['d1-skeleton--active']).toBe(true)
      expect(injectedGrandchildStatus?.value).toBe(true)
    })

    it('should reactively update child Skeleton when external SKELETON_NAME_STATUS provider toggles', async () => {
      const externalActive = ref(false)
      const props = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: false
      })

      let skeleton!: InspectableSkeleton

      const ChildComponent = defineComponent({
        setup() {
          skeleton = new InspectableSkeleton(
            props,
            ref<HTMLDivElement>(),
            new DesignName('d1.skeleton')
          )
          return () => h('div')
        }
      })

      const HostComponent = defineComponent({
        setup() {
          provide(SKELETON_NAME_STATUS, computed(() => externalActive.value))
          return () => h(ChildComponent)
        }
      })

      const container = document.createElement('div')
      const app = createApp(HostComponent)
      app.mount(container)
      mountedCleanups.push(() => app.unmount())

      expect(skeleton.isActive()).toBe(false)
      expect(skeleton.isVisibleState).toBe(false)

      externalActive.value = true
      await nextTick()

      expect(skeleton.isActive()).toBe(true)
      expect(skeleton.isVisibleState).toBe(true)
    })

    it('should synchronously initialize visible=true in constructor when parent SKELETON_NAME_STATUS is already true (SSR / pre-mount)', () => {
      const externalActive = ref(true)
      const props = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: false,
        delay: 0
      })

      let visibleDuringSetup: boolean | undefined

      const ChildComponent = defineComponent({
        setup() {
          const skeleton = new InspectableSkeleton(
            props,
            ref<HTMLDivElement>(),
            new DesignName('d1.skeleton'),
            undefined,
            undefined,
            undefined,
            undefined,
            false
          )
          visibleDuringSetup = skeleton.isVisibleState
          return () => h('div')
        }
      })

      const HostComponent = defineComponent({
        setup() {
          provide(SKELETON_NAME_STATUS, computed(() => externalActive.value))
          return () => h(ChildComponent)
        }
      })

      const container = document.createElement('div')
      const app = createApp(HostComponent)
      app.mount(container)
      mountedCleanups.push(() => app.unmount())

      expect(visibleDuringSetup).toBe(true)
    })
  })

  describe('Lifecycle cleanup and headless safety', () => {
    it('should clear pending timeout on unmount to prevent post-unmount state updates', () => {
      vi.useFakeTimers()

      const scope = effectScope()
      const props = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: true,
        delay: 500
      })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.skeleton')

      const skeleton = scope.run(() => new InspectableSkeleton(props, element, naming))!
      skeleton.triggerMounted()

      expect(skeleton.isVisibleState).toBe(false)

      skeleton.triggerUnmounted()

      vi.advanceTimersByTime(1000)
      expect(skeleton.isVisibleState).toBe(false)

      scope.stop()
    })

    it('should track isMounted state and not start watchers or timers before mount', async () => {
      vi.useFakeTimers()

      const scope = effectScope()
      const props = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: false,
        delay: 100
      })
      const element = ref<HTMLDivElement>()
      const naming = new DesignName('d1.skeleton')

      const skeleton = scope.run(() => new InspectableSkeleton(props, element, naming))!

      expect(skeleton.isMounted.value).toBe(false)

      // Mutating active before mount should not start client timers
      props.active = true
      await nextTick()
      vi.advanceTimersByTime(200)
      expect(skeleton.isVisibleState).toBe(false)

      // Once mounted, switch() runs and starts the timer
      skeleton.triggerMounted()
      expect(skeleton.isMounted.value).toBe(true)
      vi.advanceTimersByTime(100)
      expect(skeleton.isVisibleState).toBe(true)

      scope.stop()
    })

    it('should isolate state across multiple independent Skeleton instances', async () => {
      const scope = effectScope()
      const propsFirst = reactive<SkeletonProps>({ ...defaultsSkeleton, active: true })
      const propsSecond = reactive<SkeletonProps>({ ...defaultsSkeleton, active: false })

      const first = scope.run(() => new InspectableSkeleton(propsFirst, ref<HTMLDivElement>(), new DesignName('d1.skeleton')))!
      const second = scope.run(() => new InspectableSkeleton(propsSecond, ref<HTMLDivElement>(), new DesignName('d1.skeleton')))!

      first.triggerMounted()
      second.triggerMounted()

      expect(first.isActive()).toBe(true)
      expect(first.isVisibleState).toBe(true)
      expect(second.isActive()).toBe(false)
      expect(second.isVisibleState).toBe(false)

      propsFirst.active = false
      await nextTick()

      expect(first.isActive()).toBe(false)
      expect(first.isVisibleState).toBe(false)
      expect(second.isActive()).toBe(false)

      scope.stop()
    })
  })
})
