// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ActionsInclude, type ActionsProps } from '../../Actions'
import { BarsInclude, type BarsProps, type BarsPropsInclude } from '../../Bars'
import { ModelInclude } from '../../../classes/ModelInclude'
import { WindowInclude, type WindowProps, type WindowPropsInclude } from '../../Window'
import { ModalAbstract, type ModalConstructors } from '../ModalAbstract'
import type { ComponentIncludeExtra } from '../../../types/componentInclude'
import type { ModalProps } from '../props'

afterEach(() => {
  vi.restoreAllMocks()
})

/**
 * Concrete inspectable subclass of ModalAbstract for unit testing.
 *
 * Конкретный проверяемый подкласс ModalAbstract для модульного тестирования.
 */
class TestModalAbstract extends ModalAbstract {
  constructor(
    props: Readonly<ModalProps>,
    element = ref<HTMLElement | undefined>(),
    naming = new DesignName('d1.modal'),
    constructors?: Partial<ModalConstructors>,
    extraWindow?: () => ComponentIncludeExtra<WindowProps>,
    extraBars?: () => ComponentIncludeExtra<BarsProps>,
    extraActionsCallback?: () => ComponentIncludeExtra<ActionsProps>
  ) {
    super(
      props,
      element,
      naming,
      undefined,
      undefined,
      undefined,
      constructors,
      extraWindow,
      extraBars,
      extraActionsCallback
    )
  }

  /**
   * Exposes created instances map for laziness checks.
   *
   * Предоставляет карту созданных экземпляров для проверки ленивой инициализации.
   */
  get instantiatedItems(): Partial<Record<keyof ModalConstructors, unknown>> {
    return this.instances
  }

  /**
   * Simulates mount lifecycle inside captured scope.
   *
   * Симулирует жизненный цикл монтирования внутри сохранённой области.
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
   * Simulates unmount lifecycle.
   *
   * Симулирует жизненный цикл размонтирования.
   */
  triggerUnmounted(): void {
    this.isMounted.value = false
    this.callLifecycle('onUnmounted')
    this.onUnmounted?.()
  }
}

describe('ModalAbstract (Unit)', () => {
  it('should generate unique non-empty ARIA labelId and descriptionId and keep all dependencies lazy', () => {
    const scope = effectScope()
    const props = reactive<ModalProps>({})
    const instance = scope.run(() => new TestModalAbstract(props))!

    expect(instance.labelId).toBeTruthy()
    expect(instance.descriptionId).toBeTruthy()
    expect(instance.labelId).not.toBe(instance.descriptionId)

    expect(instance.instantiatedItems.actions).toBeUndefined()
    expect(instance.instantiatedItems.bars).toBeUndefined()
    expect(instance.instantiatedItems.model).toBeUndefined()
    expect(instance.instantiatedItems.window).toBeUndefined()

    scope.stop()
  })

  it('should synchronize open state from both props.open and props.modelOpen and stop watcher on unmount', async () => {
    const scope = effectScope()
    const props = reactive<ModalProps>({ open: false, modelOpen: true })
    const instance = scope.run(() => new TestModalAbstract(props))!

    expect(instance.open.value).toBe(true)

    instance.triggerMounted()
    props.modelOpen = false
    await nextTick()
    expect(instance.open.value).toBe(false)

    props.open = true
    await nextTick()
    expect(instance.open.value).toBe(true)

    instance.triggerUnmounted()
    props.open = false
    await nextTick()
    expect(instance.open.value).toBe(true)

    instance.update()
    expect(instance.open.value).toBe(false)

    scope.stop()
  })

  it('should guard actions and bars instantiation via canCreate and allow creation when props or extra callbacks provide data', async () => {
    const scope = effectScope()
    const props = reactive<ModalProps>({ barsBackHide: true })
    const instance = scope.run(() => new TestModalAbstract(props))!

    expect(instance.callInstance('actions', item => item)).toBeUndefined()
    expect(instance.instantiatedItems.actions).toBeUndefined()

    expect(instance.callInstance('bars', item => item)).toBeUndefined()
    expect(instance.instantiatedItems.bars).toBeUndefined()

    props.actionsList = [{ label: 'Confirm' }]
    props.barsLabel = 'Modal Title'
    await nextTick()

    expect(instance.callInstance('actions', item => item)).toBeInstanceOf(ActionsInclude)
    expect(instance.callInstance('bars', item => item)).toBeInstanceOf(BarsInclude)

    scope.stop()
  })

  it('should respect actionsHide and extraActionsCallback / extraBars in canCreate', () => {
    const scope = effectScope()
    const hiddenProps = reactive<ModalProps>({
      actionsHide: true,
      actionsList: [{ label: 'Hidden Action' }]
    })
    const hiddenInstance = scope.run(() => new TestModalAbstract(hiddenProps))!
    expect(hiddenInstance.callInstance('actions', item => item)).toBeUndefined()
    expect(hiddenInstance.instantiatedItems.actions).toBeUndefined()

    const extraInstance = scope.run(() => new TestModalAbstract(
      reactive<ModalProps>({ barsBackHide: true }),
      undefined,
      undefined,
      undefined,
      undefined,
      () => ({ label: 'Extra Bar' }),
      () => ({ list: [{ label: 'Extra Action' }] })
    ))!
    expect(extraInstance.callInstance('bars', item => item)).toBeInstanceOf(BarsInclude)
    expect(extraInstance.callInstance('actions', item => item)).toBeInstanceOf(ActionsInclude)

    scope.stop()
  })

  it('should wire extraWindow with reactive open state and allow DI constructor overrides', () => {
    const scope = effectScope()
    class CustomActions extends ActionsInclude {}
    class CustomBars<
      Props extends BarsPropsInclude = BarsPropsInclude,
      PropsExtra extends BarsProps = BarsProps
    > extends BarsInclude<Props, PropsExtra> {}
    class CustomModel extends ModelInclude<boolean> {}
    class CustomWindow<
      Props extends WindowPropsInclude = WindowPropsInclude,
      PropsExtra extends WindowProps = WindowProps
    > extends WindowInclude<Props, PropsExtra> {}

    const props = reactive<ModalProps>({ open: true })
    const instance = scope.run(() => new TestModalAbstract(
      props,
      undefined,
      undefined,
      {
        actions: CustomActions,
        bars: CustomBars,
        model: CustomModel,
        window: CustomWindow
      },
      () => ({ adaptive: 'modal', closeButton: true })
    ))!

    const windowInstance = instance.i('window')
    expect(windowInstance).toBeInstanceOf(CustomWindow)
    expect(windowInstance.binds.value.open).toBe(true)
    expect(windowInstance.binds.value.adaptive).toBe('modal')
    expect(windowInstance.binds.value.closeButton).toBe(true)
    expect(windowInstance.binds.value.ariaLabelledby).toBe(instance.labelId)
    expect(windowInstance.binds.value.ariaDescribedby).toBe(instance.descriptionId)

    expect(instance.i('actions')).toBeInstanceOf(CustomActions)
    expect(instance.i('bars')).toBeInstanceOf(CustomBars)
    expect(instance.i('model')).toBeInstanceOf(CustomModel)

    scope.stop()
  })
})
