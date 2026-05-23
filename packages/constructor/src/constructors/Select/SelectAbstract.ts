import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp, executeFunction, isFilled } from '@dxtmisha/functional'

import type { IconValue } from '../Icon'
import type { ListItemPropsBasic } from '../ListItem'
import { MenuInclude } from '../Menu'

import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'

import { SelectInput } from './SelectInput'
import { SelectFilter } from './SelectFilter'

import type { SelectComponents, SelectEmits, SelectSlots } from './types'
import type { SelectProps } from './props'

/**
 * Abstract class representing the base logic and dependencies for a Select component.
 * It serves as a foundation for implementing standardized Select components, managing
 * field attributes, elements, change events, values, validation, filtering, and dropdown menu states.
 *
 * Абстрактный класс, представляющий базовую логику и зависимости для компонента Select.
 * Служит основой для реализации стандартизированных компонентов Select, управляя
 * атрибутами поля, элементами, событиями изменений, значениями, валидацией, фильтрацией и состояниями выпадающего меню.
 */
export abstract class SelectAbstract {
  /** Field attributes manager / Менеджер атрибутов поля */
  readonly attributes: FieldAttributesInclude

  /** Manager for working with field elements / Менеджер для работы с элементами поля */
  readonly elementItem: FieldElementInclude
  /** Field change state manager / Менеджер состояния изменения поля */
  readonly change: FieldChangeInclude

  /** Field value manager / Менеджер значения поля */
  readonly value: FieldValueInclude

  /** Field code manager / Менеджер кода поля */
  readonly code: FieldCodeInclude
  /** Field validation manager / Менеджер валидации поля */
  readonly validation: FieldValidationInclude
  /** Field event manager / Менеджер событий поля */
  readonly event: FieldEventInclude

  /** Select input manager / Менеджер ввода выбора */
  readonly input: SelectInput
  /** Select filter manager / Менеджер фильтра выбора */
  readonly filter: SelectFilter

  /** Dropdown menu inclusion manager / Менеджер включения выпадающего меню */
  readonly menu: MenuInclude

  /**
   * Constructor for SelectAbstract.
   *
   * Конструктор для SelectAbstract.
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
   * @param constructors.FieldValidationIncludeConstructor class for working with field validation / класс для работы с валидацией поля
   * @param constructors.FieldValueIncludeConstructor class for working with field value / класс для работы со значением поля
   * @param constructors.MenuIncludeConstructor class for working with menu / класс для работы с меню
   * @param constructors.SelectFilterConstructor class for working with select filter / класс для работы с фильтром выбора
   * @param constructors.SelectInputConstructor class for working with select input / класс для работы с вводом выбора
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

    this.input = new SelectInputConstructor(
      this.props,
      this.attributes,
      this.value,
      this.event
    )
    this.filter = new SelectFilterConstructor()

    this.menu = new MenuIncludeConstructor(
      this.props,
      this.className,
      this.components,
      computed(() => ({
        windowAttrs: {
          hide: !isFilled(this.props.option) && !this.isSlot(),
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
        selectionStyle: this.selectionStyle.value,
        onClick: this.event.onSelect,
        onClickSlot: this.onClick,
        onUpdateValue: this.isArrow() ? this.event.onValue : undefined,
        isSelectedByValue: true,
        ariaMultiselectable: this.props.multiple
      }))
    )
  }

  /** Computes the trailing icon value / Вычисляет значение иконки трейлинга */
  protected readonly iconTrailing = computed<IconValue | undefined>(() => {
    if (!this.props.disabled && !this.isArrow()) {
      return this.props.iconTrailing ?? this.props.iconArrowDown
    }

    return undefined
  })

  /** Selection style / Стиль выбора */
  protected readonly selectionStyle = computed<ListItemPropsBasic['selectionStyle']>(() => {
    if (this.props.selectionStyle === 'auto') {
      return this.props.multiple ? 'checkbox' : 'radio'
    }

    return this.props.selectionStyle
  })

  /**
   * Checks whether an arrow is configured for the select component.
   *
   * Проверяет, настроена ли стрелка для компонента выбора.
   * @returns true if arrow is configured, false otherwise / true, если стрелка настроена, иначе false
   */
  protected isArrow(): boolean {
    return Boolean(this.props.arrow) && this.props.arrow !== 'none'
  }

  /**
   * Checks whether there are slots defined for the context areas (top or bottom).
   *
   * Проверяет, определены ли слоты для контекстных областей (сверху или снизу).
   * @returns true if context slots are present, false otherwise / true, если контекстные слоты присутствуют, иначе false
   */
  protected isSlot(): boolean {
    return Boolean(
      this.slots?.contextTop
      || this.slots?.contextBottom
    )
  }

  /**
   * Handles click on option in slot.
   *
   * Обрабатывает клик по опции в слоте
   */
  protected readonly onClick = (value?: string) => {
    if (value) {
      this.value.set(value)
    }
  }
}
