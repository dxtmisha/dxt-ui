// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { WindowInclude, type WindowProps, type WindowPropsInclude } from '../../Window'
import { Modal, type ModalConstructors } from '../Modal'
import type { ModalProps } from '../props'

afterEach(() => {
  vi.restoreAllMocks()
})

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

describe('Modal (Unit)', () => {
  const naming = new DesignName('d1.modal')

  it('should not eagerly instantiate dependencies upon creation', () => {
    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props: ModalProps = reactive({})

    const modal = scope.run(() => new InspectableModal(props, element, naming))!

    expect(modal.instantiatedItems.window).toBeUndefined()
    expect(modal.instantiatedItems.bars).toBeUndefined()
    expect(modal.instantiatedItems.actions).toBeUndefined()
    expect(modal.instantiatedItems.model).toBeUndefined()

    scope.stop()
  })

  it('should pass adaptive="modal", image, imagePosition, and closeButton to WindowInclude without overwriting windowAttrs with undefined', () => {
    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props: ModalProps = reactive({
      barsBackHide: true,
      image: '/hero.jpg',
      imagePosition: 'left'
    })

    const modal = scope.run(() => new InspectableModal(props, element, naming))!
    const windowBinds = modal.i('window').binds.value

    expect(windowBinds.adaptive).toBe('modal')
    expect(windowBinds.image).toBe('/hero.jpg')
    expect(windowBinds.imagePosition).toBe('left')
    expect(windowBinds.closeButton).toBe(true)

    const attrsFallbackProps: ModalProps = reactive({
      windowAttrs: {
        image: '/from-window-attrs.jpg',
        imagePosition: 'top'
      }
    })
    const fallbackModal = scope.run(() => new InspectableModal(attrsFallbackProps, element, naming))!
    expect(fallbackModal.i('window').binds.value.image).toBe('/from-window-attrs.jpg')
    expect(fallbackModal.i('window').binds.value.imagePosition).toBe('top')

    scope.stop()
  })

  it('should synchronize open state reactively across props.open and props.modelOpen', async () => {
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
    props.modelOpen = true
    await nextTick()
    expect(modal.open.value).toBe(true)

    props.modelOpen = false
    await nextTick()
    expect(modal.open.value).toBe(false)

    modal.triggerUnmounted()
    scope.stop()
  })

  it('should allow overriding constructors via Dependency Injection', () => {
    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props: ModalProps = reactive({})

    class CustomWindowInclude<
      Props extends WindowPropsInclude = WindowPropsInclude,
      PropsExtra extends WindowProps = WindowProps
    > extends WindowInclude<Props, PropsExtra> {}

    const modal = scope.run(
      () => new InspectableModal(
        props,
        element,
        naming,
        undefined,
        undefined,
        undefined,
        {
          window: CustomWindowInclude
        }
      )
    )!

    expect(modal.i('window')).toBeInstanceOf(CustomWindowInclude)
    scope.stop()
  })
})
