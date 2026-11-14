// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { MotionTransform, type MotionTransformConstructors } from '../MotionTransform'
import type { MotionTransformProps } from '../props'

/**
 * Inspectable subclass exposing instances map and condition lifecycle triggers for test verification.
 *
 * Подкласс для проверки карты экземпляров зависимостей и вызовов условий.
 */
class InspectableMotionTransform extends MotionTransform {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof MotionTransformConstructors, unknown>> {
    return this.instances
  }

  /**
   * Simulates component mount lifecycle.
   *
   * Симулирует жизненный цикл монтирования компонента.
   */
  triggerMounted(): void {
    this.isMounted.value = true
    this.callLifecycle('onMounted')
    this.initConditions()
    this.onMounted?.()
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

describe('MotionTransform', () => {
  it('should initialize and provide binds and slotData', () => {
    const scope = effectScope()
    const element = ref(document.createElement('div'))
    const naming = new DesignName('test-motion')

    const transform = scope.run(() => new InspectableMotionTransform(
      { clickOpen: true },
      element,
      naming
    ))!

    expect(transform.bindsHead).toBeDefined()
    expect(transform.bindsHead.key).toBe('head')
    expect(transform.bindsHead.tabindex).toBe(0)
    expect(transform.bindsHead.role).toBe('button')
    expect(typeof transform.bindsHead.onClick).toBe('function')
    expect(typeof transform.bindsHead.onKeydown).toBe('function')

    expect(transform.bindsBody).toBeDefined()
    expect(transform.bindsBody.key).toBe('body')
    expect(transform.bindsBody.role).toBe('region')

    expect(transform.instantiatedItems.model).toBeDefined()

    const slotData = transform.slotData
    expect(slotData).toBeDefined()
    expect(slotData.isOpen).toBe(false)
    expect(slotData.isShow).toBe(false)
    expect(slotData.idControl).toBeDefined()
    expect(slotData.idBody).toBeDefined()
    expect(slotData.binds).toBeDefined()

    scope.stop()
  })

  it('should omit onKeydown in bindsHead when clickOpen is false', () => {
    const scope = effectScope()
    const element = ref(document.createElement('div'))
    const naming = new DesignName('test-motion')

    const transform = scope.run(() => new InspectableMotionTransform(
      { clickOpen: false },
      element,
      naming
    ))!

    expect(transform.bindsHead.key).toBe('head')
    expect(transform.bindsHead.tabindex).toBeUndefined()
    expect(transform.bindsHead.role).toBeUndefined()
    expect(transform.bindsHead.onKeydown).toBeUndefined()

    scope.stop()
  })

  it('should track isMounted state through lifecycle triggers', () => {
    const scope = effectScope()
    const element = ref(document.createElement('div'))
    const naming = new DesignName('test-motion')

    const transform = scope.run(() => new InspectableMotionTransform(
      { clickOpen: true },
      element,
      naming
    ))!

    expect(transform.isMounted.value).toBe(false)
    transform.triggerMounted()
    expect(transform.isMounted.value).toBe(true)
    transform.triggerUnmounted()
    expect(transform.isMounted.value).toBe(false)

    scope.stop()
  })

  it('should activate esc conditionally when clickOpen is true upon mount', async () => {
    const scope = effectScope()
    const props = reactive<MotionTransformProps>({ clickOpen: true })
    const element = ref(document.createElement('div'))
    const naming = new DesignName('test-motion')

    const transform = scope.run(() => new InspectableMotionTransform(
      props,
      element,
      naming
    ))!

    expect(transform.instantiatedItems.esc).toBeUndefined()
    transform.triggerMounted()
    await nextTick()

    expect(transform.instantiatedItems.esc).toBeDefined()

    scope.stop()
  })

  it('should support dependency injection overrides', () => {
    const scope = effectScope()
    const element = ref(document.createElement('div'))
    const naming = new DesignName('test-motion')

    class MockGo {
      open = vi.fn()
      close = vi.fn()
      toggle = vi.fn()
      to = vi.fn()
    }

    const transform = scope.run(() => new InspectableMotionTransform(
      { clickOpen: true },
      element,
      naming,
      undefined,
      undefined,
      undefined,
      {
        go: MockGo as any
      }
    ))!

    expect(transform.i('go')).toBeInstanceOf(MockGo)

    scope.stop()
  })

  it('should instantiate model eagerly and emit v-model:open updates when state changes', async () => {
    const scope = effectScope()
    const element = ref(document.createElement('div'))
    const naming = new DesignName('test-motion')
    const emits = vi.fn()

    const transform = scope.run(() => new InspectableMotionTransform(
      { clickOpen: true },
      element,
      naming,
      undefined,
      undefined,
      emits
    ))!

    expect(transform.instantiatedItems.model).toBeDefined()

    transform.i('state').open.value = true
    await nextTick()

    expect(emits).toHaveBeenCalledWith('update:open', true)
    expect(emits).toHaveBeenCalledWith('update:modelOpen', true)

    scope.stop()
  })
})
