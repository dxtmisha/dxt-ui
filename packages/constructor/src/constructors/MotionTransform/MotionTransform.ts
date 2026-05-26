import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ModelInclude } from '../../classes/ModelInclude'
import { TabIndexInclude } from '../../classes/TabIndexInclude'
import { TeleportInclude } from '../../classes/TeleportInclude'

import { MotionTransformElement } from './MotionTransformElement'
import { MotionTransformSize } from './MotionTransformSize'
import { MotionTransformState } from './MotionTransformState'
import { MotionTransformEvent } from './MotionTransformEvent'
import { MotionTransformGo } from './MotionTransformGo'

import { WindowEsc } from '../Window'

import type { MotionTransformControlItem } from './basicTypes'
import type {
  MotionTransformComponents,
  MotionTransformEmits,
  MotionTransformSlots
} from './types'
import type { MotionTransformProps } from './props'

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
  /** Teleport manager for window placement in DOM / Менеджер телепортации для размещения окна в DOM */
  readonly teleport: TeleportInclude

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
   * @param constructors.TeleportIncludeConstructor class for working with teleport/ класс для работы с телепортом
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
      TeleportIncludeConstructor?: typeof TeleportInclude
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
      TeleportIncludeConstructor = TeleportInclude,
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
      refs,
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
    this.teleport = new TeleportIncludeConstructor()

    new ModelIncludeConstructor('open', this.emits, this.state.open)
  }

  /**
   * Props for the head element.
   *
   * Свойства для элемента заголовка.
   */
  getPropsHead() {
    const props = {
      onClick: this.event.onClick
    }

    if (this.props.clickOpen) {
      return {
        ...props,
        onKeydown: this.event.onKeydown,
        ...this.getSlotData().binds
      }
    }

    return props
  }

  /**
   * Returns data for managing slot data.
   *
   * Возвращает данные для управления данными слотами.
   * @returns slot data object / объект данных слотов
   */
  getSlotData(): MotionTransformControlItem {
    return {
      isOpen: this.state.isOpen(),
      isShow: this.state.isShow(),
      classes: MotionTransformElement.getClassesList(this.className),
      idControl: this.element.idControl,
      idBody: this.element.idBody,
      binds: AriaStaticInclude.control(
        this.element.idControl,
        this.element.idBody,
        undefined,
        this.state.isOpen()
      )
    }
  }
}
