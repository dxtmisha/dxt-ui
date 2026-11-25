// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { DraggableWrapper, type DraggableWrapperConstructors } from '../DraggableWrapper'
import { DraggableWrapperClassesData } from '../DraggableWrapperClassesData'
import { DraggableWrapperClient } from '../DraggableWrapperClient'
import { DraggableWrapperDelay } from '../DraggableWrapperDelay'
import { DraggableWrapperEmit } from '../DraggableWrapperEmit'
import { DraggableWrapperEvents } from '../DraggableWrapperEvents'
import { DraggableWrapperItem } from '../DraggableWrapperItem'
import { DraggableWrapperItemActive } from '../DraggableWrapperItemActive'
import { DraggableWrapperItemFocus } from '../DraggableWrapperItemFocus'
import { DraggableWrapperItemGo } from '../DraggableWrapperItemGo'
import { DraggableWrapperItemSelection } from '../DraggableWrapperItemSelection'
import { DraggableWrapperPosition } from '../DraggableWrapperPosition'
import { DraggableWrapperSelection } from '../DraggableWrapperSelection'
import { DraggableWrapperSquare } from '../DraggableWrapperSquare'
import type { DraggableWrapperProps } from '../props'

/**
 * Inspectable subclass exposing lifecycle trigger for orchestrator unit tests.
 *
 * Подкласс с доступом к вызову хуков жизненного цикла для модульного тестирования оркестратора.
 */
class InspectableDraggableWrapper extends DraggableWrapper {
  /**
   * Invokes lifecycle hook across instantiated dependencies for testing.
   *
   * Вызывает хук жизненного цикла для созданных зависимостей для тестирования.
   * @param hook lifecycle hook name / имя хука жизненного цикла
   */
  callLifecycleHook(hook: 'onMounted' | 'onUnmounted'): void {
    this.callLifecycle(hook)
  }
}

describe('DraggableWrapper (unit)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize and lazily instantiate all 13 sub-constructors on demand', () => {
      const scope = effectScope()
      const props = reactive<DraggableWrapperProps>({})
      const element = ref<HTMLElement>()
      const naming = new DesignName('d1.draggableWrapper')

      const wrapper = scope.run(() => new DraggableWrapper(props, element, naming))!

      expect(wrapper).toBeDefined()
      expect(wrapper.i('classesData')).toBeInstanceOf(DraggableWrapperClassesData)
      expect(wrapper.i('client')).toBeInstanceOf(DraggableWrapperClient)
      expect(wrapper.i('delay')).toBeInstanceOf(DraggableWrapperDelay)
      expect(wrapper.i('emit')).toBeInstanceOf(DraggableWrapperEmit)
      expect(wrapper.i('events')).toBeInstanceOf(DraggableWrapperEvents)
      expect(wrapper.i('item')).toBeInstanceOf(DraggableWrapperItem)
      expect(wrapper.i('itemActive')).toBeInstanceOf(DraggableWrapperItemActive)
      expect(wrapper.i('itemFocus')).toBeInstanceOf(DraggableWrapperItemFocus)
      expect(wrapper.i('itemGo')).toBeInstanceOf(DraggableWrapperItemGo)
      expect(wrapper.i('itemSelection')).toBeInstanceOf(DraggableWrapperItemSelection)
      expect(wrapper.i('position')).toBeInstanceOf(DraggableWrapperPosition)
      expect(wrapper.i('selection')).toBeInstanceOf(DraggableWrapperSelection)
      expect(wrapper.i('square')).toBeInstanceOf(DraggableWrapperSquare)

      expect(wrapper.classes['d1-draggableWrapper--disabled']).toBe(false)
      expect(wrapper.tag).toBe('div')
      expect(wrapper.binds).toHaveProperty('onMousedown')
      expect(wrapper.binds).toHaveProperty('onTouchstart')
      expect(wrapper.binds).toHaveProperty('onTransitionend')

      scope.stop()
    })

    it('should reactively update classes and tag when props change', () => {
      const scope = effectScope()
      const props = reactive<DraggableWrapperProps>({})
      const element = ref<HTMLElement>()
      const naming = new DesignName('d1.draggableWrapper')

      const wrapper = scope.run(() => new DraggableWrapper(props, element, naming))!

      props.disabled = true
      expect(wrapper.classes['d1-draggableWrapper--disabled']).toBe(true)

      props.disabled = false
      expect(wrapper.classes['d1-draggableWrapper--disabled']).toBe(false)

      props.tag = 'ul'
      expect(wrapper.tag).toBe('ul')

      scope.stop()
    })

    it('should delegate toNewPosition to DraggableWrapperItem without mutating readonly input', () => {
      const scope = effectScope()
      const props = reactive<DraggableWrapperProps>({})
      const element = ref<HTMLElement>()
      const naming = new DesignName('d1.draggableWrapper')

      const wrapper = scope.run(() => new DraggableWrapper(props, element, naming))!
      const { toNewPosition } = wrapper

      const values = [{ value: 'a' }, { value: 'b' }, { value: 'c' }] as const
      const result = toNewPosition(values, {
        active: document.createElement('div'),
        value: ['a', 'c'],
        valueTo: 'c',
        valueSelection: ['a'],
        before: false
      })

      expect(result.map(item => item.value)).toEqual(['b', 'c', 'a'])
      expect(values.map(item => item.value)).toEqual(['a', 'b', 'c'])

      scope.stop()
    })
  })

  describe('Lazy loading and dependency injection', () => {
    it('should keep all dependencies unallocated until explicitly accessed', () => {
      const scope = effectScope()
      const props = reactive<DraggableWrapperProps>({})
      const element = ref<HTMLElement>()
      const naming = new DesignName('d1.draggableWrapper')

      const wrapper = scope.run(() => new DraggableWrapper(props, element, naming))!

      const keys: (keyof DraggableWrapperConstructors)[] = [
        'classesData',
        'client',
        'delay',
        'emit',
        'events',
        'item',
        'itemActive',
        'itemFocus',
        'itemGo',
        'itemSelection',
        'position',
        'selection',
        'square'
      ]

      for (const key of keys) {
        expect(wrapper.hasInstance(key)).toBe(false)
      }

      const delay = wrapper.i('delay')
      expect(wrapper.hasInstance('delay')).toBe(true)
      expect(wrapper.i('delay')).toBe(delay)
      expect(wrapper.hasInstance('square')).toBe(false)

      const square = wrapper.i('square')
      expect(wrapper.hasInstance('square')).toBe(true)
      expect(wrapper.i('square')).toBe(square)

      scope.stop()
    })

    it('should support custom constructor override via Dependency Injection', () => {
      /**
       * Custom delay implementation for testing Dependency Injection.
       *
       * Пользовательская реализация задержки для тестирования внедрения зависимостей.
       */
      class CustomDelay extends DraggableWrapperDelay {
        override get delay(): number {
          return 9999
        }
      }

      const scope = effectScope()
      const props = reactive<DraggableWrapperProps>({})
      const element = ref<HTMLElement>()
      const naming = new DesignName('d1.draggableWrapper')

      const wrapper = scope.run(() => new DraggableWrapper(
        props,
        element,
        naming,
        undefined,
        undefined,
        undefined,
        { delay: CustomDelay }
      ))!

      expect(wrapper.hasInstance('delay')).toBe(false)
      const delayInstance = wrapper.i('delay')
      expect(delayInstance).toBeInstanceOf(CustomDelay)
      expect(delayInstance.delay).toBe(9999)

      scope.stop()
    })
  })

  describe('Lifecycle delegation', () => {
    it('should invoke onUnmounted across instantiated lifecycle dependencies (delay, emit, events)', () => {
      const scope = effectScope()
      const props = reactive<DraggableWrapperProps>({})
      const element = ref<HTMLElement>()
      const naming = new DesignName('d1.draggableWrapper')

      const wrapper = scope.run(() => new InspectableDraggableWrapper(props, element, naming))!

      const delay = wrapper.i('delay')
      const emit = wrapper.i('emit')
      const events = wrapper.i('events')

      const delayStopSpy = vi.spyOn(delay, 'stop')
      const emitStopSpy = vi.spyOn(emit, 'stop')
      const eventsUnmountSpy = vi.spyOn(events, 'onUnmounted')

      wrapper.callLifecycleHook('onUnmounted')

      expect(delayStopSpy).toHaveBeenCalledTimes(1)
      expect(emitStopSpy).toHaveBeenCalledTimes(1)
      expect(eventsUnmountSpy).toHaveBeenCalledTimes(1)

      scope.stop()
    })
  })
})
