import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp, executeFunction, isFilled } from '@dxtmisha/functional'

import { type ListItemPropsBasic } from '../ListItem'
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'

import { MenuInclude } from '../Menu'
import { ButtonInclude } from '../Button'

import { SelectInput } from '../Select'
import { SelectFilter } from '../Select'

import type { MenuButtonComponents, MenuButtonEmits, MenuButtonSlots } from './types'
import type { MenuButtonProps } from './props'
import type { IconValue } from '../Icon'

/**
 * Constructor class for creating and managing a MenuButton component.
 * It coordinates properties, state synchronization, input validation, selection logic,
 * and handles interactions between the activating button, the dropdown menu list, and inputs.
 *
 * Класс-конструктор для создания и управления компонентом MenuButton.
 * Координирует свойства, синхронизацию состояния, валидацию ввода, логику выбора
 * и обрабатывает взаимодействие между кнопкой-активатором, выпадающим списком меню и элементами ввода.
 */
export class MenuButton {
  /** Field accessibility and helper attributes / Атрибуты доступности и вспомогательные атрибуты поля */
  readonly attributes: FieldAttributesInclude

  /** Helper for managing the field's DOM element and its dimensions / Вспомогательный класс для управления DOM-элементом поля и его размерами */
  readonly elementItem: FieldElementInclude

  /** Manager for handling field value changes and dirty states / Менеджер для обработки изменений значений поля и состояний изменения */
  readonly change: FieldChangeInclude

  /** Manager for operating on the reactive field value / Менеджер для работы с реактивным значением поля */
  readonly value: FieldValueInclude

  /** Manager for internal validation keys and custom code identifiers / Менеджер для внутренних ключей валидации и кастомных идентификаторов кода */
  readonly code: FieldCodeInclude

  /** Validator suite managing validity states and error messages / Набор валидаторов для управления состояниями валидности и сообщениями об ошибках */
  readonly validation: FieldValidationInclude

  /** Field event handler managing focus, blur, change, and selection / Обработчик событий поля, управляющий фокусом, размытием, изменением и выбором */
  readonly event: FieldEventInclude

  /** Controller for the trigger button aspect of the menu button / Контроллер для кнопки-триггера в составе кнопки меню */
  readonly button: ButtonInclude

  /** Controller managing the dropdown menu and option items / Контроллер, управляющий выпадающим меню и элементами списка */
  readonly menu: MenuInclude

  /** Controller managing text input synchronization / Контроллер, управляющий синхронизацией текстового ввода */
  readonly input: SelectInput

  /** Utility for filtering list items based on search query / Утилита для фильтрации элементов списка на основе поискового запроса */
  readonly filter: SelectFilter

  /**
   * Initializes all required sub-controllers and includes for the MenuButton component.
   *
   * Инициализирует все необходимые суб-контроллеры и включения для компонента MenuButton.
   * @param props input properties / входные свойства
   * @param refs reactive references of the input properties / реактивные ссылки на входные свойства
   * @param element reference to the root HTML element / ссылка на корневой HTML-элемент
   * @param classDesign design style class name / имя класса стилевого оформления
   * @param className base CSS class name / базовое имя CSS-класса
   * @param components sub-components configuration object / объект конфигурации субкомпонентов
   * @param slots slot rendering functions / функции рендеринга слотов
   * @param emits event emission function / функция отправки событий
   * @param constructors optional override constructors / необязательные переопределяющие конструкторы
   * @param constructors.ButtonConstructor button include class constructor / конструктор класса button include
   * @param constructors.FieldAttributesIncludeConstructor field attributes class constructor / конструктор класса field attributes
   * @param constructors.FieldChangeIncludeConstructor field change class constructor / конструктор класса field change
   * @param constructors.FieldCodeIncludeConstructor field code class constructor / конструктор класса field code
   * @param constructors.FieldElementIncludeConstructor field element class constructor / конструктор класса field element
   * @param constructors.FieldEventIncludeConstructor field event class constructor / конструктор класса field event
   * @param constructors.FieldValidationIncludeConstructor field validation class constructor / конструктор класса field validation
   * @param constructors.FieldValueIncludeConstructor field value class constructor / конструктор класса field value
   * @param constructors.MenuIncludeConstructor menu include class constructor / конструктор класса menu include
   * @param constructors.SelectFilterConstructor select filter class constructor / конструктор класса select filter
   * @param constructors.SelectInputConstructor select input class constructor / конструктор класса select input
   */
  constructor(
    protected readonly props: MenuButtonProps,
    protected readonly refs: ToRefs<MenuButtonProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<MenuButtonComponents, MenuButtonProps>,
    protected readonly slots?: MenuButtonSlots,
    protected readonly emits?: ConstrEmit<MenuButtonEmits>,
    constructors?: {
      ButtonConstructor?: typeof ButtonInclude
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
      ButtonConstructor = ButtonInclude,
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

    this.button = new ButtonConstructor(
      '',
      this.className,
      this.components,
      undefined,
      computed(() => ({
        icon: this.props.icon,
        disabled: this.props.disabled,
        readonly: this.props.readonly,
        iconTrailing: this.iconTrailing.value
      }))
    )
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
        disabled: this.props.disabled || this.props.readonly,
        autoClose: !this.props.multiple,
        list: executeFunction(this.props.option),
        max: this.props.max,
        filterMode: this.props.filterMode,
        hideList: this.props.hideList,
        selectionStyle: this.selectionStyle.value,
        onClick: this.event.onSelect,
        onClickSlot: this.onClick,
        onUpdateValue: undefined,
        isSelectedByValue: true,
        ariaMultiselectable: this.props.multiple
      }))
    )

    this.filter = new SelectFilterConstructor()
    this.input = new SelectInputConstructor(
      this.props,
      this.attributes,
      this.value,
      this.event
    )
  }

  /** Computed style of option selection based on settings / Вычисляемый стиль выбора опций на основе настроек */
  protected readonly selectionStyle = computed<ListItemPropsBasic['selectionStyle']>(() => {
    if (this.props.selectionStyle === 'auto') {
      return this.props.multiple ? 'checkbox' : 'radio'
    }

    return this.props.selectionStyle
  })

  /** Computed trailing icon representing the arrow / Вычисляемая конечная иконка, представляющая стрелку */
  protected readonly iconTrailing = computed<IconValue | undefined>(() => {
    if (!this.props.disabled) {
      return this.props.iconArrowDown
    }

    return undefined
  })

  /**
   * Checks whether there are slots defined for context areas.
   *
   * Проверяет, определены ли слоты для контекстных областей.
   * @returns true if context slots are present / true, если контекстные слоты присутствуют
   */
  protected isSlot(): boolean {
    return Boolean(
      this.slots?.contextTop
      || this.slots?.contextBottom
    )
  }

  /** Callback handler for clicking on an option inside a custom slot / Обработчик клика по опции внутри кастомного слота */
  protected readonly onClick = (value?: string) => {
    if (value) {
      this.value.set(value)
    }
  }
}
