import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ModelInclude } from '../../classes/ModelInclude'
import { TabIndexInclude } from '../../classes/TabIndexInclude'
import { TeleportInclude } from '../../classes/TeleportInclude'

import { MotionTransformElement } from './MotionTransformElement'
import { MotionTransformEvent } from './MotionTransformEvent'
import { MotionTransformGo } from './MotionTransformGo'
import { MotionTransformSize } from './MotionTransformSize'
import { MotionTransformState } from './MotionTransformState'

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
  /** Reference helper for element interactions / Вспомогательный класс для работы с элементами */
  readonly element: MotionTransformElement
  /** Tab index accessibility manager / Менеджер управления фокусом табуляции */
  readonly tabIndex: TabIndexInclude<HTMLDivElement>

  /** Size calculation manager / Менеджер расчёта размеров */
  readonly size: MotionTransformSize
  /** State manager / Менеджер состояния */
  readonly state: MotionTransformState

  /** Event manager / Менеджер событий */
  readonly event: MotionTransformEvent
  /** Control actions manager / Менеджер действий перехода */
  readonly go: MotionTransformGo

  /** Window escape key event manager / Менеджер событий клавиши Escape для окна */
  readonly esc: WindowEsc
  /** Teleport manager for window placement in DOM / Менеджер телепортации для размещения окна в DOM */
  readonly teleport: TeleportInclude

  /**
   * Constructor
   * @param props input properties / входные свойства
   * @param refs input properties in the form of reactive references / входные свойства в виде реактивных ссылок
   * @param element target window element / элемент окна
   * @param elementContext substrate element / элемент подложка
   * @param classDesign design system prefix / префикс дизайна
   * @param className base class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   * @param constructors optional class constructor overrides / необязательные переопределения конструкторов классов
   * @param constructors.ModelIncludeConstructor class for working with model / класс для работы с моделью
   * @param constructors.MotionTransformElementConstructor class for working with elements / класс для работы с элементами
   * @param constructors.MotionTransformEventConstructor class for working with events / класс для работы с событиями
   * @param constructors.MotionTransformGoConstructor class for working with go / класс для работы с переходом
   * @param constructors.MotionTransformSizeConstructor class for working with size / класс для работы с размером
   * @param constructors.MotionTransformStateConstructor class for working with state / класс для работы с состоянием
   * @param constructors.TabIndexIncludeConstructor class for working with tab index / класс для работы с индексом табуляции
   * @param constructors.TeleportIncludeConstructor class for working with teleport / класс для работы с телепортом
   * @param constructors.WindowEscConstructor class for working with esc / класс для работы с esc
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
    constructors: {
      ModelIncludeConstructor?: typeof ModelInclude
      MotionTransformElementConstructor?: typeof MotionTransformElement
      MotionTransformEventConstructor?: typeof MotionTransformEvent
      MotionTransformGoConstructor?: typeof MotionTransformGo
      MotionTransformSizeConstructor?: typeof MotionTransformSize
      MotionTransformStateConstructor?: typeof MotionTransformState
      TabIndexIncludeConstructor?: typeof TabIndexInclude
      TeleportIncludeConstructor?: typeof TeleportInclude
      WindowEscConstructor?: typeof WindowEsc
    } = {}
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
    } = constructors

    this.element = new MotionTransformElementConstructor(
      props,
      element,
      elementContext,
      className
    )
    this.tabIndex = new TabIndexIncludeConstructor(
      () => this.element.elementBody,
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

    new ModelIncludeConstructor('open', emits, this.state.open)
  }

  /**
   * Computed HTML attributes and bindings for the header element.
   *
   * Вычисляемые HTML-атрибуты и привязки для элемента заголовка.
   */
  get bindsHead() {
    const props = {
      key: 'head',
      onClick: this.event.onClick
    }

    if (this.props.clickOpen) {
      return {
        ...props,
        onKeydown: this.event.onKeydown,
        ...this.slotData.binds
      }
    }

    return props
  }

  /**
   * Computed HTML attributes and bindings for the body element.
   *
   * Вычисляемые HTML-атрибуты и привязки для элемента тела.
   */
  get bindsBody() {
    return {
      key: 'body',
      id: this.element.idBody,
      ...AriaStaticInclude.role('region'),
      ...AriaStaticInclude.modal(
        false,
        this.props.ariaLabelledby,
        this.props.ariaDescribedby
      )
    }
  }

  /**
   * Returns data for managing slot data.
   *
   * Возвращает данные для управления данными слотами.
   * @returns slot data object / объект данных слотов
   */
  get slotData(): MotionTransformControlItem {
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
