import { onUnmounted, type Ref, type ToRefs, watch } from 'vue'
import { type ConstrEmit, DesignComp } from '@dxtmisha/functional'

import { MotionTransformElement } from './MotionTransformElement'
import { MotionTransformSize } from './MotionTransformSize'
import { MotionTransformState } from './MotionTransformState'
import { MotionTransformEvent } from './MotionTransformEvent'
import { MotionTransformGo } from './MotionTransformGo'

import type { MotionTransformComponents, MotionTransformEmits, MotionTransformSlots } from './types'
import type { MotionTransformProps } from './props'
import type { MotionTransformControlItem } from './basicTypes'
import { ModelInclude } from '../../classes/ModelInclude'

/**
 * MotionTransform
 */
export class MotionTransform {
  /** Reference helper for element interactions/ Вспомогательный класс для работы с элементами */
  readonly element: MotionTransformElement

  /** Size calculation manager/ Менеджер расчёта размеров */
  readonly size: MotionTransformSize
  /** State manager/ Менеджер состояния */
  readonly state: MotionTransformState

  /** Event manager/ Менеджер событий */
  readonly event: MotionTransformEvent
  /** Control actions manager/ Менеджер действий управления */
  readonly go: MotionTransformGo

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param elementContext substrate element / элемент подложка
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: MotionTransformProps,
    protected readonly refs: ToRefs<MotionTransformProps>,
    element: Ref<HTMLDivElement | undefined>,
    elementContext: Ref<HTMLDivElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<MotionTransformComponents, MotionTransformProps>,
    protected readonly slots?: MotionTransformSlots,
    protected readonly emits?: ConstrEmit<MotionTransformEmits>
  ) {
    this.element = new MotionTransformElement(
      props,
      element,
      elementContext,
      className
    )

    this.size = new MotionTransformSize(this.element)
    this.state = new MotionTransformState(props, this.element, this.size)

    this.event = new MotionTransformEvent(props, this.element, this.state, emits)
    this.go = new MotionTransformGo(this.state)

    new ModelInclude('open', this.emits, this.state.open)

    watch([refs.open], () => this.state.set(Boolean(props.open)))

    onUnmounted(() => this.event.stop())
  }

  /**
   * Returns data for managing slot data.
   *
   * Возвращает данные для управления данными слотами.
   */
  getSlotData(): MotionTransformControlItem {
    return {
      isOpen: this.state.isOpen,
      isShow: this.state.isShow,
      classes: MotionTransformElement.getClassesList(this.className)
    }
  }
}
