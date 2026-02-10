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
   */
  constructor(
    protected readonly props: SelectProps,
    protected readonly refs: ToRefs<SelectProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<SelectComponents, SelectProps>,
    protected readonly slots?: SelectSlots,
    protected readonly emits?: ConstrEmit<SelectEmits>
  ) {
    this.attributes = new FieldAttributesInclude(this.props)

    this.change = new FieldChangeInclude(this.props)
    this.elementItem = new FieldElementInclude(
      this.props,
      this.element
    )

    this.value = new FieldValueInclude(
      this.props,
      this.refs,
      this.elementItem
    )

    this.code = new FieldCodeInclude(this.props)
    this.validation = new FieldValidationInclude(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code
    )
    this.event = new FieldEventInclude(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits
    )

    this.field = new FieldInclude(
      this.props,
      this.value,
      this.components,
      this.event,
      undefined,
      undefined,
      () => this.menu.getElement()?.toggle,
      () => this.menu.getElement()?.next(),
      () => this.menu.getElement()?.previous(),
      computed(() => ({
        iconTrailing: this.iconTrailing.value,
        maxlength: this.props.max,
        cancel: this.props.cancel ?? (this.props.multiple ? 'auto' : 'none')
      }))
    )
    this.menu = new MenuInclude(
      this.props,
      this.className,
      this.components,
      computed(() => ({
        windowAttrs: {
          hide: !isFilled(props.option) && !this.isSlot.value,
          widthMatch: true
        },
        tag: 'span',
        barsLabel: props.label,
        barsDescription: props.helperMessage,
        disabled: props.disabled || props.readonly,
        autoClose: !props.multiple,
        list: executeFunction(props.option),
        max: this.props.max,
        filterMode: this.props.filterMode,
        hideList: props.hideList,
        onClick: this.event.onSelect,
        onClickSlot: this.onClick,
        onUpdateValue: this.isArrow() ? this.event.onValue : undefined,
        isSelectedByValue: true,
        ariaMultiselectable: this.props.multiple
      }))
    )
    this.input = new SelectInput(this.props, this.attributes, this.value, this.event)

    this.filter = new SelectFilter()
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
