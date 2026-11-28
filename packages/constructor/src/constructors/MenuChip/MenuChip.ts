import type { Ref } from 'vue'
import type { ConstrEmit, ConstrItems, DesignComp, DesignName, ListSelectedList } from '@dxtmisha/functional'

import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { FieldFormInclude } from '../../classes/Field/FieldFormInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import { ChipInclude } from '../Chip'
import { MenuInclude } from '../Menu'
import { SelectAbstract, type SelectAbstractConstructors } from '../Select/SelectAbstract'

import type { MenuChipProps } from './props'
import type { MenuChipComponents, MenuChipEmits, MenuChipSlots } from './types'

/**
 * MenuChip dependency constructors type.
 *
 * Тип конструкторов зависимостей MenuChip.
 */
export type MenuChipConstructors = SelectAbstractConstructors & {
  /** Trigger chip include constructor / Конструктор включения чипа-триггера */
  chip: typeof ChipInclude
}

/**
 * Orchestrator class for creating and managing a MenuChip component.
 * Coordinates selection state, validation, form registration, trigger chip bindings, and dropdown menu behavior.
 *
 * Класс-оркестратор для создания и управления компонентом MenuChip.
 * Координирует состояние выбора, валидацию, регистрацию в форме, привязки чипа-триггера и поведение выпадающего меню.
 */
export class MenuChip extends SelectAbstract<
  HTMLElement,
  MenuChipComponents,
  MenuChipEmits,
  MenuChipSlots,
  MenuChipProps,
  MenuChipConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<MenuChipConstructors> = {
    attributes: {
      item: FieldAttributesInclude,
      parameters: () => [this.props]
    },
    change: {
      item: FieldChangeInclude,
      parameters: () => [this.props]
    },
    chip: {
      item: ChipInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({
          icon: this.props.icon,
          disabled: this.props.disabled,
          readonly: this.props.readonly,
          iconTrailing: this.iconTrailing
        })
      ]
    },
    code: {
      item: FieldCodeInclude,
      parameters: () => [this.props]
    },
    elementItem: {
      item: FieldElementInclude,
      parameters: () => [
        this.props,
        this.element
      ]
    },
    event: {
      item: FieldEventInclude,
      parameters: () => [
        this.props,
        () => this.i('change'),
        () => this.i('value'),
        () => this.i('validation'),
        this.emits,
        () => this.callInstance('form', item => item)
      ]
    },
    form: {
      item: FieldFormInclude,
      canCreate: () => FieldFormInclude.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('value'),
        () => this.i('validation')
      ]
    },
    menu: {
      item: MenuInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => this.getMenuExtra()
      ]
    },
    validation: {
      item: FieldValidationInclude,
      parameters: () => [
        this.props,
        () => this.i('attributes'),
        () => this.i('value'),
        () => this.i('change'),
        () => this.i('code'),
        undefined,
        this.isMounted
      ]
    },
    value: {
      item: FieldValueInclude<ListSelectedList>,
      parameters: () => [
        this.props,
        () => this.i('elementItem'),
        undefined,
        true,
        false,
        true
      ]
    }
  }

  /**
   * Initializes all required sub-controllers and includes for the MenuChip component.
   *
   * Инициализирует все необходимые суб-контроллеры и включения для компонента MenuChip.
   * @param props input properties / входные свойства
   * @param element reference to the hidden input or root HTML element / ссылка на скрытый input или корневой HTML-элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components sub-components configuration object / объект конфигурации субкомпонентов
   * @param slots slot rendering functions / функции рендеринга слотов
   * @param emits event emission function / функция отправки событий
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<MenuChipProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComp<MenuChipComponents, MenuChipProps>,
    slots?: MenuChipSlots,
    emits?: ConstrEmit<MenuChipEmits>,
    constructors?: Partial<MenuChipConstructors>
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

    this.i('event')
    this.i('validation')
    this.callInstance('form', item => item)
  }
}
