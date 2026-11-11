import type { Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  type DesignName,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ModelInclude } from '../../classes/ModelInclude'
import { TabIndexInclude } from '../../classes/TabIndexInclude'
import { TeleportInclude } from '../../classes/TeleportInclude'
import { WindowEsc } from '../Window'

import { MotionTransformElement } from './MotionTransformElement'
import { MotionTransformEvent } from './MotionTransformEvent'
import { MotionTransformGo } from './MotionTransformGo'
import { MotionTransformSize } from './MotionTransformSize'
import { MotionTransformState } from './MotionTransformState'

import type { MotionTransformControlItem } from './basicTypes'
import type { MotionTransformProps } from './props'
import type {
  MotionTransformComponents,
  MotionTransformEmits,
  MotionTransformSlots
} from './types'

/** MotionTransform dependency constructors type / Тип конструкторов зависимостей MotionTransform */
export type MotionTransformConstructors = {
  /** Element manager constructor / Конструктор менеджера элементов */
  element: typeof MotionTransformElement
  /** Window escape key handler constructor / Конструктор обработчика клавиши Escape для окна */
  esc: typeof WindowEsc
  /** Event listener manager constructor / Конструктор менеджера прослушивателей событий */
  event: typeof MotionTransformEvent
  /** Control actions manager constructor / Конструктор менеджера действий перехода */
  go: typeof MotionTransformGo
  /** Model synchronization constructor / Конструктор синхронизации модели */
  model: typeof ModelInclude
  /** Size calculation manager constructor / Конструктор менеджера расчёта размеров */
  size: typeof MotionTransformSize
  /** State manager constructor / Конструктор менеджера состояния */
  state: typeof MotionTransformState
  /** Tab index manager constructor / Конструктор менеджера таб-индекса */
  tabIndex: typeof TabIndexInclude<HTMLDivElement>
  /** Teleport manager constructor / Конструктор менеджера телепорта */
  teleport: typeof TeleportInclude
}

/**
 * MotionTransform.
 * The main class for managing the logic of the MotionTransform component.
 * It coordinates elements, state, sizing, events, accessibility, and transitions.
 *
 * MotionTransform.
 * Основной класс для управления логикой компонента MotionTransform.
 * Координирует элементы, состояние, размеры, события, доступность и переходы.
 */
export class MotionTransform extends DesignLogicAbstract<
  HTMLDivElement,
  MotionTransformComponents,
  MotionTransformEmits,
  MotionTransformSlots,
  MotionTransformProps,
  MotionTransformConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<MotionTransformConstructors> = {
    element: {
      item: MotionTransformElement,
      parameters: () => [
        this.props,
        this.element,
        this.naming,
        this.elementContext
      ]
    },
    esc: {
      item: WindowEsc,
      conditions: () => Boolean(this.props.clickOpen),
      parameters: () => [
        this.i('state').open,
        () => this.i('go').close(),
        () => Boolean(this.props.clickOpen)
      ]
    },
    event: {
      item: MotionTransformEvent,
      parameters: () => [
        this.props,
        () => this.i('element'),
        () => this.i('state'),
        this.emits
      ]
    },
    go: {
      item: MotionTransformGo,
      parameters: () => [
        () => this.i('state')
      ]
    },
    model: {
      item: ModelInclude,
      parameters: () => [
        'open',
        this.emits,
        this.i('state').open
      ]
    },
    size: {
      item: MotionTransformSize,
      parameters: () => [
        () => this.i('element')
      ]
    },
    state: {
      item: MotionTransformState,
      parameters: () => [
        this.props,
        () => this.i('element'),
        () => this.i('size'),
        () => this.i('tabIndex')
      ]
    },
    tabIndex: {
      item: TabIndexInclude,
      parameters: () => [
        () => this.i('element').elementBody,
        () => this.i('element').isWindow()
      ]
    },
    teleport: {
      item: TeleportInclude
    }
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input properties / входные свойства
   * @param element target window element / элемент окна
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   * @param constructors optional class constructor overrides / необязательные переопределения конструкторов классов
   * @param elementContext substrate element / элемент подложка
   */
  constructor(
    props: MotionTransformProps,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<MotionTransformComponents, MotionTransformProps>,
    slots?: MotionTransformSlots,
    emits?: ConstrEmit<MotionTransformEmits>,
    constructors?: Partial<MotionTransformConstructors>,
    protected readonly elementContext?: Ref<HTMLDivElement | undefined>
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors
    )
  }

  /**
   * Computed HTML attributes and bindings for the header element.
   *
   * Вычисляемые HTML-атрибуты и привязки для элемента заголовка.
   * @returns element binding attributes / атрибуты привязки элемента
   */
  get bindsHead(): ConstrBind {
    const props: ConstrBind = {
      key: 'head',
      onClick: this.i('event').onClick
    }

    if (this.props.clickOpen) {
      return {
        ...props,
        tabindex: 0,
        ...AriaStaticInclude.role('button'),
        onKeydown: this.i('event').onKeydown,
        ...this.slotData.binds
      }
    }

    return props
  }

  /**
   * Computed HTML attributes and bindings for the body element.
   *
   * Вычисляемые HTML-атрибуты и привязки для элемента тела.
   * @returns element binding attributes / атрибуты привязки элемента
   */
  get bindsBody(): ConstrBind {
    return {
      key: 'body',
      id: this.i('element').idBody,
      ...AriaStaticInclude.role('region'),
      ...AriaStaticInclude.modal(
        false,
        this.props.ariaLabelledby,
        this.props.ariaDescribedby
      )
    }
  }

  /**
   * Values for the class.
   *
   * Значения для класса.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    return {}
  }

  /**
   * Returns data for managing slot data.
   *
   * Возвращает данные для управления данными слотами.
   * @returns slot data object / объект данных слотов
   */
  get slotData(): MotionTransformControlItem {
    const state = this.i('state')
    const element = this.i('element')
    const isOpen = state.isOpen()

    return {
      isOpen,
      isShow: state.isShow(),
      classes: MotionTransformElement.getClassesList(this.naming.getName()),
      idControl: element.idControl,
      idBody: element.idBody,
      binds: AriaStaticInclude.control(
        element.idControl,
        element.idBody,
        undefined,
        isOpen
      )
    }
  }
}
