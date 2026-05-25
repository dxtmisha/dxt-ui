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
import { ButtonInclude } from '../Button'

import { SelectAbstract } from '../Select/SelectAbstract'

import type { MenuButtonComponents, MenuButtonEmits, MenuButtonSlots } from './types'
import type { MenuButtonProps } from './props'

/**
 * Constructor class for creating and managing a MenuButton component.
 * It coordinates properties, state synchronization, input validation, selection logic,
 * and handles interactions between the activating button, the dropdown menu list, and inputs.
 *
 * Класс-конструктор для создания и управления компонентом MenuButton.
 * Координирует свойства, синхронизацию состояния, валидацию ввода, логику выбора
 * и обрабатывает взаимодействие между кнопкой-активатором, выпадающим списком меню и элементами ввода.
 */
export class MenuButton extends SelectAbstract {
  /** Controller for the trigger button aspect of the menu button / Контроллер для кнопки-триггера в составе кнопки меню */
  readonly button: ButtonInclude

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
      ButtonConstructor = ButtonInclude
    } = constructors ?? {}

    this.button = new ButtonConstructor(
      '',
      this.className,
      this.components,
      this.props,
      computed(() => ({
        icon: this.props.icon,
        disabled: this.props.disabled,
        readonly: this.props.readonly,
        iconTrailing: this.iconTrailing.value
      }))
    )
  }
}
