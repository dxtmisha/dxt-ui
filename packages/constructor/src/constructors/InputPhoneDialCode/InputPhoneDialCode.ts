import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp, Geo } from '@dxtmisha/functional'

import { ButtonInclude } from '../Button'
import { MenuCountryInclude } from '../MenuCountry'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelValueInclude } from '../../classes/ModelValueInclude'

import type { InputPhoneDialCodeComponents, InputPhoneDialCodeEmits, InputPhoneDialCodeSlots } from './types'
import type { InputPhoneDialCodeProps } from './props'

/**
 * Constructor class for the phone dial code selector component.
 * Manages the trigger button, the country selection menu, the click event handler,
 * and the reactive model value for the selected country code.
 *
 * Класс-конструктор компонента выбора кода страны телефонного номера.
 * Управляет кнопкой-триггером, меню выбора страны, обработчиком событий клика
 * и реактивным значением модели для выбранного кода страны.
 */
export class InputPhoneDialCode {
  /** Trigger button aspect controller / Контроллер для кнопки-триггера */
  readonly button: ButtonInclude

  /** Click event handler / Обработчик события клика */
  readonly event: EventClickInclude

  /** Country selection menu inclusion manager / Менеджер включения меню выбора страны */
  readonly menu: MenuCountryInclude

  /** Model value manager for selected country / Менеджер значения модели для выбранной страны */
  readonly model: ModelValueInclude<string>

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
   * @param constructors.EventClickIncludeConstructor class for working with click events / класс для работы с событиями клика
   * @param constructors.MenuCountryConstructor menu country include class constructor / конструктор класса menu country include
   * @param constructors.ModelValueIncludeConstructor class for working with model value / класс для работы со значением модели
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
      EventClickIncludeConstructor?: typeof EventClickInclude
      MenuCountryConstructor?: typeof MenuCountryInclude
      ModelValueIncludeConstructor?: typeof ModelValueInclude
    } = {}
  ) {
    const {
      ButtonConstructor = ButtonInclude,
      EventClickIncludeConstructor = EventClickInclude,
      MenuCountryConstructor = MenuCountryInclude,
      ModelValueIncludeConstructor = ModelValueInclude
    } = constructors

    this.event = new EventClickIncludeConstructor(undefined, undefined, this.emits)
    this.model = new ModelValueIncludeConstructor<string>(
      'selected',
      this.emits,
      this.event,
      computed(() => this.props.value || Geo.getCountry())
    )

    this.menu = new MenuCountryConstructor(
      this.className,
      this.props,
      this.components,
      () => ({
        selected: this.model.value.value,
        showPhoneCode: true,
        onUpdateValue: this.onUpdate,
        onClick: this.model.onClick
      })
    )

    this.button = new ButtonConstructor(
      this.className,
      this.props,
      this.components,
      () => this.bindsButton
    )
  }

  /**
   * Computed list of currently selected country items from the menu.
   *
   * Вычисляемый список выбранных элементов страны из меню.
   */
  readonly item = computed(() => {
    return this.menu.getElement()?.getSelectedList()
  })

  /**
   * Returns the resolved props object for the trigger button.
   * Includes the icon, trailing icon, open state indicator, and optionally
   * a label derived from the selected country based on the labelType prop.
   *
   * Возвращает объект разрешённых свойств для кнопки-триггера.
   * Включает иконку, иконку-стрелку, индикатор открытия и, при необходимости,
   * метку, производную от выбранной страны на основе свойства labelType.
   * @returns resolved button props / разрешённые свойства кнопки
   */
  get bindsButton() {
    const item = this.item.value?.[0]
    const props = {
      disabled: this.props.disabled,
      icon: item?.icon,
      iconTrailing: this.props.disabled ? undefined : this.props.iconArrowDown,
      iconTurn: this.menu.getElement()?.getOpen()
    }

    if (
      item
      && this.props.labelType
    ) {
      switch (this.props.labelType) {
        case 'code':
          return {
            ...props,
            label: item?.caption
          }
        case 'name':
          return {
            ...props,
            label: item?.label
          }
      }
    }

    return props
  }

  /**
   * Updates the model value and emits the updateValue event.
   *
   * Обновляет значение модели и генерирует событие updateValue.
   * @param value new country code value / новое значение кода страны
   */
  onUpdate(value: string) {
    this.model.onUpdate(value)
    this.emits?.('updateValue', value)
  }
}
