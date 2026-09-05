import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { FieldFormInclude } from '../../classes/Field/FieldFormInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import { MenuInclude } from '../Menu'
import { ChipInclude } from '../Chip'

import { SelectAbstract } from '../Select/SelectAbstract'

import type { MenuChipComponents, MenuChipEmits, MenuChipSlots } from './types'
import type { MenuChipProps } from './props'

/**
 * MenuChip
 */
export class MenuChip extends SelectAbstract {
  /** Controller for the chip aspect of the menu chip / Контроллер для чипа в составе чипа меню */
  readonly chip: ChipInclude

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors optional override constructors / необязательные переопределяющие конструкторы
   * @param constructors.ChipConstructor chip include class constructor / конструктор класса chip include
   * @param constructors.FieldAttributesIncludeConstructor class for working with field attributes / класс для работы с атрибутами поля
   * @param constructors.FieldChangeIncludeConstructor class for working with field change / класс для работы с изменением поля
   * @param constructors.FieldCodeIncludeConstructor class for working with field code / класс для работы с кодом поля
   * @param constructors.FieldElementIncludeConstructor class for working with field element / класс для работы с элементом поля
   * @param constructors.FieldEventIncludeConstructor class for working with field event / класс для работы с событием поля
   * @param constructors.FieldFormIncludeConstructor class for working with form / класс для работы с формой
   * @param constructors.FieldValidationIncludeConstructor class for working with field validation / класс для работы с валидацией поля
   * @param constructors.FieldValueIncludeConstructor class for working with field value / класс для работы со значением поля
   * @param constructors.MenuIncludeConstructor class for working with menu / класс для работы с меню
   */
  constructor(
    protected readonly props: MenuChipProps,
    protected readonly refs: ToRefs<MenuChipProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<MenuChipComponents, MenuChipProps>,
    protected readonly slots?: MenuChipSlots,
    protected readonly emits?: ConstrEmit<MenuChipEmits>,
    constructors: {
      ChipConstructor?: typeof ChipInclude
      FieldAttributesIncludeConstructor?: typeof FieldAttributesInclude
      FieldChangeIncludeConstructor?: typeof FieldChangeInclude
      FieldCodeIncludeConstructor?: typeof FieldCodeInclude
      FieldElementIncludeConstructor?: typeof FieldElementInclude
      FieldEventIncludeConstructor?: typeof FieldEventInclude
      FieldFormIncludeConstructor?: typeof FieldFormInclude
      FieldValidationIncludeConstructor?: typeof FieldValidationInclude
      FieldValueIncludeConstructor?: typeof FieldValueInclude
      MenuIncludeConstructor?: typeof MenuInclude
    } = {}
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
      ChipConstructor = ChipInclude
    } = constructors

    this.chip = new ChipConstructor(
      this.className,
      this.props,
      this.components,
      () => ({
        icon: this.props.icon,
        disabled: this.props.disabled,
        readonly: this.props.readonly,
        iconTrailing: this.iconTrailing
      })
    )
  }
}
