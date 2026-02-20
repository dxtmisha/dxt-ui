import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp, executeFunction, isFilled } from '@dxtmisha/functional'

import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'

import { MenuInclude } from '../Menu'
import { FieldInclude } from '../Field/FieldInclude'

import { SelectInput } from './SelectInput'
import { SelectFilter } from './SelectFilter'

import type { SelectComponents, SelectEmits, SelectSlots } from './types'
import type { SelectProps } from './props'
import type { IconValue } from '../Icon'

/**
 * Select
 */
export class Select {
  readonly attributes: FieldAttributesInclude

  readonly elementItem: FieldElementInclude
  readonly change: FieldChangeInclude

  readonly value: FieldValueInclude

  readonly code: FieldCodeInclude
  readonly validation: FieldValidationInclude
  readonly event: FieldEventInclude

  readonly field: FieldInclude
  readonly menu: MenuInclude
  readonly input: SelectInput

  readonly filter: SelectFilter

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
   * @param constructors object with classes/ объект с классами
   * @param constructors.FieldAttributesIncludeConstructor class for working with field attributes/ класс для работы с атрибутами поля
   * @param constructors.FieldChangeIncludeConstructor class for working with field change/ класс для работы с изменением поля
   * @param constructors.FieldCodeIncludeConstructor class for working with field code/ класс для работы с кодом поля
   * @param constructors.FieldElementIncludeConstructor class for working with field element/ класс для работы с элементом поля
   * @param constructors.FieldEventIncludeConstructor class for working with field event/ класс для работы с событием поля
   * @param constructors.FieldIncludeConstructor class for working with field/ класс для работы с полем
   * @param constructors.FieldValidationIncludeConstructor class for working with field validation/ класс для работы с валидацией поля
   * @param constructors.FieldValueIncludeConstructor class for working with field value/ класс для работы со значением поля
   * @param constructors.MenuIncludeConstructor class for working with menu/ класс для работы с меню
   * @param constructors.SelectFilterConstructor class for working with select filter/ класс для работы с фильтром выбора
   * @param constructors.SelectInputConstructor class for working with select input/ класс для работы с вводом выбора
   */
  constructor(
    protected readonly props: SelectProps,
    protected readonly refs: ToRefs<SelectProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<SelectComponents, SelectProps>,
    protected readonly slots?: SelectSlots,
    protected readonly emits?: ConstrEmit<SelectEmits>,
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
    const {
      FieldAttributesIncludeConstructor = FieldAttributesInclude,
      FieldChangeIncludeConstructor = FieldChangeInclude,
      FieldCodeIncludeConstructor = FieldCodeInclude,
      FieldElementIncludeConstructor = FieldElementInclude,
      FieldEventIncludeConstructor = FieldEventInclude,
      FieldIncludeConstructor = FieldInclude,
      FieldValidationIncludeConstructor = FieldValidationInclude,
      FieldValueIncludeConstructor = FieldValueInclude,
      MenuIncludeConstructor = MenuInclude,
      SelectFilterConstructor = SelectFilter,
      SelectInputConstructor = SelectInput
    } = constructors ?? {}

    this.attributes = new FieldAttributesIncludeConstructor(this.props)

    this.change = new FieldChangeIncludeConstructor(this.props)
    this.elementItem = new FieldElementIncludeConstructor(
      this.props,
      this.element
    )

    this.value = new FieldValueIncludeConstructor(
      this.props,
      this.refs,
      this.elementItem
    )

    this.code = new FieldCodeIncludeConstructor(this.props)
    this.validation = new FieldValidationIncludeConstructor(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code
    )
    this.event = new FieldEventIncludeConstructor(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits
    )

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
    this.menu = new MenuIncludeConstructor(
      this.props,
      this.className,
      this.components,
      computed(() => ({
        windowAttrs: {
          hide: !isFilled(this.props.option) && !this.isSlot.value,
          widthMatch: true
        },
        tag: 'span',
        barsLabel: this.props.label,
        barsDescription: this.props.helperMessage,
        disabled: this.props.disabled || this.props.readonly,
        autoClose: !this.props.multiple,
        list: executeFunction(this.props.option),
        max: this.props.max,
        filterMode: this.props.filterMode,
        hideList: this.props.hideList,
        onClick: this.event.onSelect,
        onClickSlot: this.onClick,
        onUpdateValue: this.isArrow() ? this.event.onValue : undefined,
        isSelectedByValue: true,
        ariaMultiselectable: this.props.multiple
      }))
    )
    this.input = new SelectInputConstructor(this.props, this.attributes, this.value, this.event)

    this.filter = new SelectFilterConstructor()
  }

  /** Checks whether there are slots for context areas/ Проверяет, есть ли слоты для контекстных областей */
  protected readonly isSlot = computed<boolean>(() => {
    return Boolean(
      this.slots?.contextTop
      || this.slots?.contextBottom
    )
  })

  /** Computes the trailing icon value/ Вычисляет значение иконки трейлинга */
  protected readonly iconTrailing = computed<IconValue | undefined>(() => {
    if (!this.props.disabled && !this.isArrow()) {
      return this.props.iconTrailing ?? this.props.iconArrowDown
    }

    return undefined
  })

  /** Handles click on option in slot/ Обрабатывает клик по опции в слоте */
  protected readonly onClick = (value?: string) => {
    if (value) {
      this.value.set(value)
    }
  }

  /**
   * Checks whether arrow is set.
   *
   * Проверяет, установлена ли стрелка.
   */
  protected isArrow(): boolean {
    return Boolean(this.props.arrow) && this.props.arrow !== 'none'
  }
}
