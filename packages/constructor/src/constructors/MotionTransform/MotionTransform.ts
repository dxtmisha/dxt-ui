import { computed, onUnmounted, type Ref, type ToRefs, watch } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ModelInclude } from '../../classes/ModelInclude'
import { TabIndexInclude } from '../../classes/TabIndexInclude'

import { MotionTransformElement } from './MotionTransformElement'
import { MotionTransformSize } from './MotionTransformSize'
import { MotionTransformState } from './MotionTransformState'
import { MotionTransformEvent } from './MotionTransformEvent'
import { MotionTransformGo } from './MotionTransformGo'

import { WindowEsc } from '../Window/WindowEsc'

import type {
  MotionTransformComponents,
  MotionTransformEmits,
  MotionTransformSlots
} from './types'
import type { MotionTransformProps } from './props'
import type { MotionTransformControlItem } from './basicTypes'

/**
 * MotionTransform
 */
export class MotionTransform {
  /** Reference helper for element interactions/ Вспомогательный класс для работы с элементами */
  readonly element: MotionTransformElement
  readonly tabIndex: TabIndexInclude<HTMLDivElement>

  /** Size calculation manager/ Менеджер расчёта размеров */
  readonly size: MotionTransformSize
  /** State manager/ Менеджер состояния */
  readonly state: MotionTransformState

  /** Event manager/ Менеджер событий */
  readonly event: MotionTransformEvent
  /** Control actions manager/ Менеджер действий управления */
  readonly go: MotionTransformGo

  /** Window esc manager/ Менеджер esc окна */
  readonly esc: WindowEsc

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
   * @param constructors object with classes/ объект с классами
   * @param constructors.ModelIncludeConstructor class for working with model/ класс для работы с моделью
   * @param constructors.MotionTransformElementConstructor class for working with elements/ класс для работы с элементами
   * @param constructors.MotionTransformEventConstructor class for working with events/ класс для работы с событиями
   * @param constructors.MotionTransformGoConstructor class for working with go/ класс для работы с переходом
   * @param constructors.MotionTransformSizeConstructor class for working with size/ класс для работы с размером
   * @param constructors.MotionTransformStateConstructor class for working with state/ класс для работы с состоянием
   * @param constructors.TabIndexIncludeConstructor class for working with tab index/ класс для работы с индексом табуляции
   * @param constructors.WindowEscConstructor class for working with esc/ класс для работы с esc
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
    protected readonly emits?: ConstrEmit<MotionTransformEmits>,
    constructors?: {
      ModelIncludeConstructor?: typeof ModelInclude
      MotionTransformElementConstructor?: typeof MotionTransformElement
      MotionTransformEventConstructor?: typeof MotionTransformEvent
      MotionTransformGoConstructor?: typeof MotionTransformGo
      MotionTransformSizeConstructor?: typeof MotionTransformSize
      MotionTransformStateConstructor?: typeof MotionTransformState
      TabIndexIncludeConstructor?: typeof TabIndexInclude
      WindowEscConstructor?: typeof WindowEsc
    }
  ) {
    const {
      ModelIncludeConstructor = ModelInclude,
      MotionTransformElementConstructor = MotionTransformElement,
      MotionTransformEventConstructor = MotionTransformEvent,
      MotionTransformGoConstructor = MotionTransformGo,
      MotionTransformSizeConstructor = MotionTransformSize,
      MotionTransformStateConstructor = MotionTransformState,
      TabIndexIncludeConstructor = TabIndexInclude,
      WindowEscConstructor = WindowEsc
    } = constructors ?? {}

    this.element = new MotionTransformElementConstructor(
      props,
      element,
      elementContext,
      className
    )
    this.tabIndex = new TabIndexIncludeConstructor(
      () => this.element.getElementBody(),
      () => this.element.isWindow()
    )

    this.size = new MotionTransformSizeConstructor(this.element)
    this.state = new MotionTransformStateConstructor(
      props,
      this.element,
      this.tabIndex,
      this.size
    )

    this.event = new MotionTransformEventConstructor(props, this.element, this.state, emits)
    this.go = new MotionTransformGoConstructor(this.state)

    this.esc = new WindowEscConstructor(
      this.state.open,
      () => this.go.close(),
      () => Boolean(this.props.clickOpen)
    )

    new ModelIncludeConstructor('open', this.emits, this.state.open)

    watch([refs.open], () => this.state.set(Boolean(props.open)))

    onUnmounted(() => this.event.stop())
  }

  /**
   * Computed slot data for managing slots/
   * Вычисляемые данные слотов для управления слотами
   */
  readonly slotData = computed<MotionTransformControlItem>(() => {
    return {
      isOpen: this.state.isOpen,
      isShow: this.state.isShow,
      classes: MotionTransformElement.getClassesList(this.className),
      idControl: this.element.idControl,
      idBody: this.element.idBody,
      binds: AriaStaticInclude.control(
        this.element.idControl,
        this.element.idBody,
        undefined,
        this.state.isOpen.value
      )
    }
  })

  /**
   * Returns data for managing slot data.
   *
   * Возвращает данные для управления данными слотами.
   */
  getSlotData(): MotionTransformControlItem {
    return this.slotData.value
  }
}
