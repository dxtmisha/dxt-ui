import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'

import { MenuInclude } from '../Menu'
import { FieldInclude } from '../Field'

import { SelectAbstract } from './SelectAbstract'
import { SelectInput } from './SelectInput'
import { SelectFilter } from './SelectFilter'

import type { SelectComponents, SelectEmits, SelectSlots } from './types'
import type { SelectProps } from './props'

/**
 * Select constructor class for managing dropdown select components.
 * It coordinates the main field state, dropdown menu behaviors, event management, and validation logic.
 *
 * Класс-конструктор Select для управления компонентами выпадающего списка.
 * Координирует основное состояние поля, поведение выпадающего меню, управление событиями и логику валидации.
 */
export class Select extends SelectAbstract {
  /** Object for working with field / Объект для работы с полем */
  readonly field: FieldInclude

  /**
   * Constructor for the Select component.
   *
   * Конструктор для компонента Select.
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.FieldAttributesIncludeConstructor class for working with field attributes / класс для работы с атрибутами поля
   * @param constructors.FieldChangeIncludeConstructor class for working with field change / класс для работы с изменением поля
   * @param constructors.FieldCodeIncludeConstructor class for working with field code / класс для работы с кодом поля
   * @param constructors.FieldElementIncludeConstructor class for working with field element / класс для работы с элементом поля
   * @param constructors.FieldEventIncludeConstructor class for working with field event / класс для работы с событием поля
   * @param constructors.FieldIncludeConstructor class for working with field / класс для работы с полем
   * @param constructors.FieldValidationIncludeConstructor class for working with field validation / класс для работы с валидацией поля
   * @param constructors.FieldValueIncludeConstructor class for working with field value / класс для работы со значением поля
   * @param constructors.MenuIncludeConstructor class for working with menu / класс для работы с меню
   * @param constructors.SelectFilterConstructor class for working with select filter / класс для работы с фильтром выбора
   * @param constructors.SelectInputConstructor class for working with select input / класс для работы с вводом выбора
   */
  constructor(
    props: SelectProps,
    refs: ToRefs<SelectProps>,
    element: Ref<HTMLElement | undefined>,
    classDesign: string,
    className: string,
    components?: DesignComp<SelectComponents, SelectProps>,
    slots?: SelectSlots,
    emits?: ConstrEmit<SelectEmits>,
    constructors?: {
      FieldAttributesIncludeConstructor?: typeof FieldAttributesInclude
      FieldChangeIncludeConstructor?: typeof FieldChangeInclude
      FieldCodeIncludeConstructor?: typeof FieldCodeInclude
      FieldElementIncludeConstructor?: typeof FieldElementInclude
      FieldEventIncludeConstructor?: typeof FieldEventInclude
      FieldIncludeConstructor?: typeof FieldInclude
      FieldValidationIncludeConstructor?: typeof FieldValidationInclude
      FieldValueIncludeConstructor?: typeof FieldValueInclude
      MenuIncludeConstructor?: typeof MenuInclude
      SelectFilterConstructor?: typeof SelectFilter
      SelectInputConstructor?: typeof SelectInput
    }
  ) {
    super(
      props,
      refs,
      element,
      classDesign,
      className,
      components,
      slots,
      emits,
      constructors
    )

    const {
      FieldIncludeConstructor = FieldInclude
    } = constructors ?? {}

    this.field = new FieldIncludeConstructor(
      this.props,
      this.value,
      this.components,
      this.event,
      undefined,
      undefined,
      () => this.menu.getElement()?.toggle(),
      () => this.menu.getElement()?.next(),
      () => this.menu.getElement()?.previous(),
      computed(() => ({
        iconTrailing: this.iconTrailing.value,
        maxlength: this.props.max,
        cancel: this.props.cancel ?? (this.props.multiple ? 'auto' : 'none')
      }))
    )
  }
}
