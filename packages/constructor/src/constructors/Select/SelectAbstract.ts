import { type Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName,
  executeFunction,
  isFilled,
  type ListSelectedList
} from '@dxtmisha/functional'

import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { FieldFormInclude } from '../../classes/Field/FieldFormInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import type { IconValue } from '../Icon'
import type { ListItemPropsBasic } from '../ListItem'
import {
  type MenuComponentInclude,
  MenuInclude,
  type MenuProps,
  type MenuPropsInclude,
  type MenuSlotInclude
} from '../Menu'

import type { FieldArrowProps, FieldBasicEmits, FieldSelectLiteProps } from '../../types/fieldTypes'

/**
 * Base properties contract shared by all Select-derived components.
 *
 * Базовый контракт свойств, общий для всех компонентов на основе Select.
 */
export type SelectAbstractProps = FieldSelectLiteProps
  & MenuPropsInclude
  & {
    /** Field or control label / Метка поля или элемента управления */
    label?: string | number
    /** Helper text displayed under the field / Вспомогательный текст под полем */
    helperMessage?: string
    /** Arrow navigation mode / Режим навигации стрелками */
    arrow?: FieldArrowProps['arrow']
    /** Custom trailing icon / Пользовательская замыкающая иконка */
    iconTrailing?: IconValue
    /** Default dropdown arrow icon / Иконка стрелки выпадающего списка по умолчанию */
    iconArrowDown?: IconValue
    /** Whether to hide the option list / Скрывать ли список опций */
    hideList?: boolean
    /** Whether to show search input inside menu / Показывать ли поле поиска в меню */
    showSearch?: boolean
    /** Whether filtering mode is enabled / Включен ли режим фильтрации */
    filterMode?: boolean
  }

/**
 * Shared dependency constructors for Select-derived components.
 *
 * Общие конструкторы зависимостей для компонентов на основе Select.
 */
export type SelectAbstractConstructors = {
  /** Field attributes constructor / Конструктор атрибутов поля */
  attributes: typeof FieldAttributesInclude
  /** Field change constructor / Конструктор изменения поля */
  change: typeof FieldChangeInclude
  /** Field code constructor / Конструктор кода поля */
  code: typeof FieldCodeInclude
  /** Field element constructor / Конструктор элемента поля */
  elementItem: typeof FieldElementInclude
  /** Field event constructor / Конструктор события поля */
  event: typeof FieldEventInclude
  /** Field form constructor / Конструктор формы поля */
  form: typeof FieldFormInclude
  /** Dropdown menu include constructor / Конструктор включения выпадающего меню */
  menu: typeof MenuInclude
  /** Field validation constructor / Конструктор валидации поля */
  validation: typeof FieldValidationInclude
  /** Field value constructor / Конструктор значения поля */
  value: typeof FieldValueInclude<ListSelectedList>
}

/**
 * Abstract base orchestrator for Select, MenuButton, and MenuChip components.
 * Coordinates shared field state, validation, form registration, and dropdown menu configuration.
 *
 * Абстрактный базовый оркестратор для компонентов Select, MenuButton и MenuChip.
 * Координирует общее состояние поля, валидацию, регистрацию в форме и конфигурацию выпадающего меню.
 */
export abstract class SelectAbstract<
  E extends HTMLElement = HTMLElement,
  COMP extends MenuComponentInclude = MenuComponentInclude,
  EMITS extends FieldBasicEmits = FieldBasicEmits,
  SLOTS extends MenuSlotInclude = MenuSlotInclude,
  P extends SelectAbstractProps = SelectAbstractProps,
  CONSTRUCTORS extends SelectAbstractConstructors & Record<string, new (...parameters: never[]) => unknown> = SelectAbstractConstructors
> extends DesignLogicAbstract<
    E,
    COMP,
    EMITS,
    SLOTS,
    P,
    CONSTRUCTORS
  > {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected abstract override readonly constructorItems: ConstrItems<CONSTRUCTORS>

  /**
   * Constructor for SelectAbstract.
   *
   * Конструктор для SelectAbstract.
   * @param props input properties / входные свойства
   * @param element reference to root or input HTML element / ссылка на корневой элемент или элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with sub-components / объект для работы с субкомпонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits event emitter function / функция отправки событий
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  protected constructor(
    props: Readonly<P>,
    element: Ref<E | undefined>,
    naming: DesignName,
    components?: DesignComp<COMP, P>,
    slots?: SLOTS,
    emits?: ConstrEmit<EMITS>,
    constructors?: Partial<CONSTRUCTORS>
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
   * Computes the trailing icon value for the trigger control.
   *
   * Вычисляет значение замыкающей иконки для элемента управления.
   * @returns trailing icon value or undefined / значение замыкающей иконки или undefined
   */
  protected get iconTrailing(): IconValue | undefined {
    if (!this.props.disabled && !this.isArrow()) {
      return this.props.iconTrailing ?? this.props.iconArrowDown
    }

    return undefined
  }

  /**
   * Computes the visual selection style for menu list items.
   *
   * Вычисляет визуальный стиль выбора для элементов списка меню.
   * @returns resolved selection style / вычисленный стиль выбора
   */
  protected get selectionStyle(): ListItemPropsBasic['selectionStyle'] {
    if (this.props.selectionStyle === 'auto') {
      return this.props.multiple ? 'checkbox' : 'radio'
    }

    return this.props.selectionStyle
  }

  /**
   * Checks whether arrow navigation mode is active.
   *
   * Проверяет, активен ли режим навигации стрелками.
   * @returns true if arrow mode is enabled / true, если режим стрелок активен
   */
  protected isArrow(): boolean {
    return Boolean(this.props.arrow) && this.props.arrow !== 'none'
  }

  /**
   * Checks whether custom context slots (top or bottom) are provided.
   *
   * Проверяет, заданы ли пользовательские контекстные слоты (верхний или нижний).
   * @returns true if at least one context slot exists / true, если задан хотя бы один контекстный слот
   */
  protected isSlot(): boolean {
    return Boolean(
      this.slots?.contextTop
      || this.slots?.contextBottom
    )
  }

  /**
   * Builds shared extra properties passed to the Menu sub-component.
   *
   * Формирует общие дополнительные свойства, передаваемые в субкомпонент Menu.
   * @returns extra menu properties / дополнительные свойства меню
   */
  protected getMenuExtra(): Partial<ConstrBind<MenuProps>> {
    return {
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
      showSearch: this.props.showSearch,
      filterMode: this.props.filterMode,
      hideList: this.props.hideList,
      selectionStyle: this.selectionStyle,
      isSelectedByValue: true,
      onClick: this.i('event').onSelect,
      onClickSlot: this.onClick,
      onUpdateValue: this.isArrow() ? this.i('event').onValue : undefined,
      ariaMultiselectable: this.props.multiple
    }
  }

  /**
   * Handles option selection clicks emitted from custom menu context slots.
   *
   * Обрабатывает клики выбора опции, переданные из пользовательских контекстных слотов меню.
   * @param value selected value from slot / выбранное значение из слота
   */
  protected readonly onClick = (value?: string): void => {
    if (value) {
      this.i('value').set(value)
    }
  }
}
