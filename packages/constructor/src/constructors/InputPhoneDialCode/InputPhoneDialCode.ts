import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { ButtonInclude } from '../Button'
import { MenuCountryInclude } from '../MenuCountry'

import type { InputPhoneDialCodeComponents, InputPhoneDialCodeEmits, InputPhoneDialCodeSlots } from './types'
import type { InputPhoneDialCodeProps } from './props'

/**
 * InputPhoneDialCode constructor class.
 *
 * Класс-конструктор InputPhoneDialCode.
 */
export class InputPhoneDialCode {
  /** Trigger button aspect controller / Контроллер для кнопки-триггера */
  readonly button: ButtonInclude

  /** Country selection menu inclusion manager / Менеджер включения меню выбора страны */
  readonly menu: MenuCountryInclude<any, any>

  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors optional override constructors / необязательные переопределяющие конструкторы
   * @param constructors.ButtonConstructor button include class constructor / конструктор класса button include
   * @param constructors.MenuCountryConstructor menu country include class constructor / конструктор класса menu country include
   */
  constructor(
    protected readonly props: InputPhoneDialCodeProps,
    protected readonly refs: ToRefs<InputPhoneDialCodeProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<InputPhoneDialCodeComponents, InputPhoneDialCodeProps>,
    protected readonly slots?: InputPhoneDialCodeSlots,
    protected readonly emits?: ConstrEmit<InputPhoneDialCodeEmits>,
    constructors: {
      ButtonConstructor?: typeof ButtonInclude
      MenuCountryConstructor?: typeof MenuCountryInclude
    } = {}
  ) {
    const {
      ButtonConstructor = ButtonInclude,
      MenuCountryConstructor = MenuCountryInclude
    } = constructors

    this.button = new ButtonConstructor(
      this.className,
      this.props,
      this.components
    )

    this.menu = new MenuCountryConstructor(
      this.className,
      this.props,
      this.components,
      computed(() => ({
        selected: this.props.value,
        showPhoneCode: true
      }))
    )
  }
}
