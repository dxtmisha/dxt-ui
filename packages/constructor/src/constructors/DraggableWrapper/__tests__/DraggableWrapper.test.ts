// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { DraggableWrapper, type DraggableWrapperConstructors } from '../DraggableWrapper'
import { DraggableWrapperClassesData } from '../DraggableWrapperClassesData'
import { DraggableWrapperClient } from '../DraggableWrapperClient'
import { DraggableWrapperDelay } from '../DraggableWrapperDelay'
import { DraggableWrapperEmit } from '../DraggableWrapperEmit'
import { DraggableWrapperEvents } from '../DraggableWrapperEvents'
import { DraggableWrapperItem } from '../DraggableWrapperItem'
import { DraggableWrapperPosition } from '../DraggableWrapperPosition'
import { DraggableWrapperSelection } from '../DraggableWrapperSelection'
import { DraggableWrapperSquare } from '../DraggableWrapperSquare'
import type { DraggableWrapperProps } from '../props'

/**
 * Inspectable subclass exposing instances map for lazy-loading verification.
 *
 * Подкласс для проверки карты экземпляров зависимостей.
 */
class InspectableDraggableWrapper extends DraggableWrapper {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof DraggableWrapperConstructors, unknown>> {
    return this.instances
  }

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

describe('DraggableWrapper', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize successfully with default properties', () => {
      const scope = effectScope()
      const props = reactive<DraggableWrapperProps>({})
      const element = ref<HTMLElement>()
      const naming = new DesignName('d1.draggableWrapper')

      const wrapper = scope.run(() => new DraggableWrapper(props, element, naming))!

      expect(wrapper).toBeDefined()
      expect(wrapper.i('classesData')).toBeInstanceOf(DraggableWrapperClassesData)
      expect(wrapper.i('delay')).toBeInstanceOf(DraggableWrapperDelay)
      expect(wrapper.i('item')).toBeInstanceOf(DraggableWrapperItem)
      expect(wrapper.i('client')).toBeInstanceOf(DraggableWrapperClient)
      expect(wrapper.i('square')).toBeInstanceOf(DraggableWrapperSquare)
      expect(wrapper.i('emit')).toBeInstanceOf(DraggableWrapperEmit)
      expect(wrapper.i('selection')).toBeInstanceOf(DraggableWrapperSelection)
      expect(wrapper.i('position')).toBeInstanceOf(DraggableWrapperPosition)
      expect(wrapper.i('events')).toBeInstanceOf(DraggableWrapperEvents)

      expect(wrapper.classes['d1-draggableWrapper--disabled']).toBe(false)
      expect(wrapper.tag).toBe('div')

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

    it('should delegate toNewPosition to DraggableWrapperItem', () => {
      const scope = effectScope()
      const props = reactive<DraggableWrapperProps>({})
      const element = ref<HTMLElement>()
      const naming = new DesignName('d1.draggableWrapper')

      const wrapper = scope.run(() => new DraggableWrapper(props, element, naming))!

      const { toNewPosition } = wrapper

      const values = [{ value: 'a' }, { value: 'b' }, { value: 'c' }]
      const result = toNewPosition(values, {
        active: document.createElement('div'),
        value: ['a', 'c'],
        valueTo: 'c',
        valueSelection: ['a'],
        before: false
      })

      expect(result.map(item => item.value)).toEqual(['b', 'c', 'a'])

      scope.stop()
    })
  })

  describe('Lazy loading and dependency injection', () => {
    it('should lazily instantiate sub-constructors only when accessed', () => {
      const scope = effectScope()
      const props = reactive<DraggableWrapperProps>({})
      const element = ref<HTMLElement>()
      const naming = new DesignName('d1.draggableWrapper')

      const wrapper = scope.run(() => new InspectableDraggableWrapper(props, element, naming))!

      expect(wrapper.instantiatedItems.delay).toBeUndefined()
      expect(wrapper.instantiatedItems.square).toBeUndefined()

      const delay = wrapper.i('delay')
      expect(delay).toBeInstanceOf(DraggableWrapperDelay)
      expect(wrapper.instantiatedItems.delay).toBe(delay)

      const square = wrapper.i('square')
      expect(square).toBeInstanceOf(DraggableWrapperSquare)
      expect(wrapper.instantiatedItems.square).toBe(square)

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

      const wrapper = scope.run(() => new InspectableDraggableWrapper(
        props,
        element,
        naming,
        undefined,
        undefined,
        undefined,
        { delay: CustomDelay }
      ))!

      expect(wrapper.instantiatedItems.delay).toBeUndefined()
      const delayInstance = wrapper.i('delay')
      expect(delayInstance).toBeInstanceOf(CustomDelay)
      expect(delayInstance.delay).toBe(9999)

      scope.stop()
    })
  })

  describe('Lifecycle delegation', () => {
    it('should clean up delay and events on unmount lifecycle hook', () => {
      const scope = effectScope()
      const props = reactive<DraggableWrapperProps>({})
      const element = ref<HTMLElement>()
      const naming = new DesignName('d1.draggableWrapper')

      const wrapper = scope.run(() => new InspectableDraggableWrapper(props, element, naming))!

      const delay = wrapper.i('delay')
      const delayStopSpy = vi.spyOn(delay, 'stop')

      wrapper.callLifecycleHook('onUnmounted')

      expect(delayStopSpy).toHaveBeenCalled()

      scope.stop()
    })
  })
})
