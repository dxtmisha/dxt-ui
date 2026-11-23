import type { Ref } from 'vue'
import type { ConstrBind, ConstrEmit, DesignComp, DesignName } from '@dxtmisha/functional'

import { TouchEventInclude } from '../../classes/TouchEventInclude'
import { ModalAbstract, type ModalConstructors } from '../Modal'

import type { TouchEventTypeY } from '../../types/touchEventTypes'
import type { ActionSheetProps } from './props'
import type { ActionSheetComponents, ActionSheetEmits, ActionSheetSlots } from './types'

/** ActionSheet dependency constructors type / Тип конструкторов зависимостей ActionSheet */
export type ActionSheetConstructors = ModalConstructors & {
  /** Touch event include constructor / Конструктор обработки жестов касания */
  touchEvent: typeof TouchEventInclude
}

/**
 * ActionSheet
 *
 * The class for working with an action sheet.
 * Класс для работы с листом действий.
 */
export class ActionSheet extends ModalAbstract {
  /** Action sheet input properties / Входные свойства листа действий */
  protected override readonly props: Readonly<ActionSheetProps>

  /** Touch event constructor for lazy instantiation / Конструктор обработки касаний для ленивой инициализации */
  protected readonly touchEventConstructor: typeof TouchEventInclude

  /** Lazily instantiated touch event manager / Лениво инициализируемый менеджер событий касания */
  protected touchEventInstance?: TouchEventInclude

  /**
   * Constructor for initializing the action sheet logic and sub-components.
   *
   * Конструктор для инициализации логики и подкомпонентов листа действий.
   * @param props input data / входные данные
   * @param element target element / целевой элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with constructor classes / объект с классами конструкторов
   */
  constructor(
    props: Readonly<ActionSheetProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComp<ActionSheetComponents, ActionSheetProps>,
    slots?: ActionSheetSlots,
    emits?: ConstrEmit<ActionSheetEmits>,
    constructors?: Partial<ActionSheetConstructors>
  ) {
    const {
      touchEvent = TouchEventInclude,
      ...modalConstructors
    } = constructors ?? {}

    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      modalConstructors,
      () => ({
        adaptive: 'actionSheetRight',
        ...(this.props.barsBackHide !== undefined ? { closeButton: this.props.barsBackHide } : {}),
        ...(this.props.touchClose !== undefined ? { closeMobileHide: this.props.touchClose } : {})
      }),
      undefined,
      () => ({
        align: 'auto'
      })
    )

    this.props = props
    this.touchEventConstructor = touchEvent
  }

  /**
   * Returns touch event handler bindings when swipe-to-close is enabled.
   *
   * Возвращает привязки обработчиков касания при включённом закрытии свайпом.
   * @returns touch event bindings object / объект привязок событий касания
   */
  get touchBinds(): ConstrBind {
    if (!this.props.touchClose) {
      return {}
    }

    if (!this.touchEventInstance) {
      this.touchEventInstance = new this.touchEventConstructor(
        undefined,
        (
          _typeX,
          _typeY,
          _clientX,
          clientY: number
        ) => clientY >= 0,
        (_typeX, typeY: TouchEventTypeY) => {
          if (typeY === 'bottom') {
            void this.i('window').expose.setOpen(false).catch(() => {})
            return false
          }

          return true
        }
      )
    }

    return this.touchEventInstance.onTouch
  }
}
