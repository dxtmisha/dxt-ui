// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { Modal, type ModalConstructors } from '../Modal'
import type { ModalProps } from '../props'

/**
 * Inspectable subclass of Modal exposing internal lazy-instantiated instances and lifecycle triggers.
 *
 * Проверяемый подкласс Modal, предоставляющий доступ к внутренним лениво созданным экземплярам и триггерам жизненного цикла.
 */
class InspectableModal extends Modal {
  /**
   * Returns internal instances map for lazy-evaluation verification.
   *
   * Возвращает внутреннюю карту экземпляров для проверки ленивой инициализации.
   * @returns instantiated constructors map / карта созданных экземпляров конструкторов
   */
  get instantiatedItems(): Partial<Record<keyof ModalConstructors, unknown>> {
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

describe('Modal', () => {
  const naming = new DesignName('d1.modal')

  describe('Standard functional requirements (Happy path)', () => {
    it('should not eagerly instantiate dependencies upon creation', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ModalProps = reactive({})

      const modal = scope.run(() => new InspectableModal(props, element, naming))!

      expect(modal).toBeDefined()
      expect(modal.instantiatedItems.window).toBeUndefined()
      expect(modal.instantiatedItems.bars).toBeUndefined()
      expect(modal.instantiatedItems.actions).toBeUndefined()
      expect(modal.instantiatedItems.model).toBeUndefined()

      scope.stop()
    })

    it('should lazily instantiate window, bars, and actions upon first access', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ModalProps = reactive({})

      const modal = scope.run(() => new InspectableModal(props, element, naming))!

      expect(modal.instantiatedItems.window).toBeUndefined()
      const windowItem = modal.i('window')
      expect(windowItem).toBeDefined()
      expect(modal.instantiatedItems.window).toBeDefined()

      expect(modal.instantiatedItems.bars).toBeUndefined()
      const barsItem = modal.i('bars')
      expect(barsItem).toBeDefined()
      expect(modal.instantiatedItems.bars).toBeDefined()

      expect(modal.instantiatedItems.actions).toBeUndefined()
      const actionsItem = modal.i('actions')
      expect(actionsItem).toBeDefined()
      expect(modal.instantiatedItems.actions).toBeDefined()

      scope.stop()
    })

    it('should generate ARIA identifiers for label and description', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ModalProps = reactive({})

      const modal = scope.run(() => new InspectableModal(props, element, naming))!

      expect(modal.labelId).toBeDefined()
      expect(typeof modal.labelId).toBe('string')
      expect(modal.labelId.length).toBeGreaterThan(0)

      expect(modal.descriptionId).toBeDefined()
      expect(typeof modal.descriptionId).toBe('string')
      expect(modal.descriptionId.length).toBeGreaterThan(0)

      expect(modal.labelId).not.toBe(modal.descriptionId)

      scope.stop()
    })

    it('should synchronize open state with props.open reactively', async () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ModalProps = reactive({ open: false })

      const modal = scope.run(() => new InspectableModal(props, element, naming))!
      modal.triggerMounted()

      expect(modal.open.value).toBe(false)

      props.open = true
      await nextTick()
      expect(modal.open.value).toBe(true)

      props.open = false
      await nextTick()
      expect(modal.open.value).toBe(false)

      scope.stop()
    })

    it('should manually update open state with update() method', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ModalProps = { open: true }

      const modal = scope.run(() => new InspectableModal(props, element, naming))!
      modal.open.value = false

      modal.update()
      expect(modal.open.value).toBe(true)

      scope.stop()
    })
  })

  describe('Dependency Injection & Overrides', () => {
    it('should allow overriding constructors via DI', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ModalProps = reactive({})

      const mockWindowConstructor = vi.fn().mockImplementation(function () {
        return { mockWindow: true }
      })

      const modal = scope.run(
        () =>
          new InspectableModal(
            props,
            element,
            naming,
            undefined,
            undefined,
            undefined,
            {
              window: mockWindowConstructor as any
            }
          )
      )!

      const windowInstance = modal.i('window')
      expect(mockWindowConstructor).toHaveBeenCalled()
      expect(windowInstance).toEqual({ mockWindow: true })

      scope.stop()
    })
  })
})
