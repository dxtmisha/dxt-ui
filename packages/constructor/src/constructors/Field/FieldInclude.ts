import {
  type DesignComponents,
  eventStopPropagation,
  isEnter
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import type { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import type { FieldArrowInclude } from '../../classes/Field/FieldArrowInclude'

import type { ComponentIncludeExtra, ComponentIncludeProps } from '../../types/componentInclude'
import type { EventClickValue } from '../../types/eventClickTypes'
import type { FieldArrowProps } from '../../types/fieldTypes'
import type { FieldComponentInclude, FieldPropsInclude } from './basicTypes'
import type { FieldSlots } from './types'
import type { FieldPropsBasic } from './props'

/**
 * The class returns data for working with the Field framework.
 * It maps properties, bindings, and click/keyboard event listeners to the component attributes.
 *
 * Класс возвращает данные для работы с каркасом поля.
 * Связывает свойства, привязки и слушатели кликов/клавиатурных событий с атрибутами компонента.
 */
export class FieldInclude extends ComponentIncludeAbstract<
  FieldPropsInclude & FieldArrowProps,
  FieldPropsBasic,
  Record<string, any>,
  FieldSlots
> {
  /** Component name / Название компонента */
  protected readonly name = 'field'

  /** Property name containing raw attributes to pass / Имя свойства, содержащего сырые атрибуты для передачи */
  protected readonly propsAttrsName = 'fieldAttrs'

  /**
   * Constructor for FieldInclude helper class.
   *
   * Конструктор для вспомогательного класса FieldInclude.
   * @param className base class name / имя базового класса
   * @param props input data / входные данные
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter or property name / дополнительный параметр или имя свойства
   * @param index index identifier / идентификатор индекса
   * @param value object for working with values / объект для работы со значениями
   * @param event object for working with events / объект для работы с событиями
   * @param arrow object for working with arrows / объект для работы со стрелками
   * @param onIcon Collection icon click handler / Обработчик клика по иконке коллекции
   * @param onTrailing Trailing icon click handler / Обработчик клика по иконке трейлинга
   * @param onNext Next arrow click handler / Обработчик клика по следующей стрелке
   * @param onPrevious Previous arrow click handler / Обработчик клика по предыдущей стрелке
   */
  constructor(
    className: string,
    props: ComponentIncludeProps<FieldPropsInclude & FieldArrowProps>,
    components?: DesignComponents<FieldComponentInclude, FieldPropsInclude & FieldArrowProps>,
    extra?: ComponentIncludeExtra<FieldPropsBasic>,
    index?: string,
    protected readonly value?: FieldValueInclude,
    protected readonly event?: FieldEventInclude,
    protected readonly arrow?: FieldArrowInclude,
    protected readonly onIcon?: () => void,
    protected readonly onTrailing?: () => void,
    protected readonly onNext?: () => void,
    protected readonly onPrevious?: () => void
  ) {
    super(
      className,
      props,
      components,
      extra,
      index
    )
  }

  /**
   * Combines input attributes with internal component bindings.
   *
   * Объединяет входные атрибуты со внутренними привязками компонента.
   * @param attrs attributes to merge / атрибуты для объединения
   * @returns merged binding attributes / объединенные атрибуты привязки
   */
  protected override getAttrs(attrs?: FieldPropsBasic) {
    return {
      ...super.getAttrs(attrs),

      isValue: this.value?.is(),
      value: this.value?.item.value,
      cancelShow: this.value?.boolean,

      counter: this.value?.length,

      disabledPrevious: this.arrow?.disabledPrevious,
      disabledNext: this.arrow?.disabledNext
    }
  }

  /**
   * Translates internal component states into direct HTML/VNode bindings.
   *
   * Преобразует внутренние состояния компонента в прямые привязки HTML/VNode.
   * @returns merged binding attributes / объединенные атрибуты привязки
   */
  protected override toBinds() {
    const props = this.getProps()

    return {
      ...super.toBinds(),

      // Status
      focus: props.focus,
      selected: props.selected,
      readonly: props.readonly,
      disabled: props.disabled,

      loading: props.loading,
      forceShowMessage: props.forceShowMessage,

      // Value
      label: props.label,
      prefix: props.prefix,
      suffix: props.suffix,
      caption: props.caption,
      helperMessage: props.helperMessage,

      required: props.required,

      detail: props.detail,

      // Style
      cancel: props.cancel,
      counterShow: props.counterShow,

      icon: props.icon,
      iconTurn: props.iconTurn,
      iconHide: props.iconHide,
      iconDir: props.iconDir,
      iconPalette: props.iconPalette,
      iconTrailing: props.iconTrailing,
      iconTrailingTurnOnly: props.iconTrailingTurnOnly,
      iconTrailingDirOnly: props.iconTrailingDirOnly,
      iconTrailingPalette: props.iconTrailingPalette,
      iconAttrs: props.iconAttrs,

      align: props.align,

      arrowCarousel: this.arrow?.isCarousel() ?? props.arrow === 'carousel',
      arrowStepper: this.arrow?.isStepper() ?? props.arrow === 'stepper',
      arrowAlign: this.arrow?.align() ?? props.arrowAlign,

      isSkeleton: props.isSkeleton,

      fieldLabelAttrs: props.fieldLabelAttrs,
      fieldMessageAttrs: props.fieldMessageAttrs,
      fieldCounterAttrs: props.fieldCounterAttrs,

      onClick: this.on,
      onKeydown: this.onKeydown
    }
  }

  /**
   * Resets focus back to the field's input element.
   *
   * Сбрасывает фокус обратно на элемент ввода поля.
   */
  protected resetFocus() {
    const element: HTMLElement = this.element.value?.elementHtml

    if (element) {
      element.querySelector<HTMLInputElement>('[data-input]')
        ?.focus()
    }
  }

  /**
   * Event listener handler for field-related user clicks and actions.
   *
   * Обработчик событий для кликов пользователей и действий с полем.
   * @param event event object / объект события
   * @param options clicked element configuration / конфигурация кликнутого элемента
   */
  protected readonly on = (
    event: MouseEvent,
    { type }: EventClickValue
  ) => {
    if (
      (event.target as HTMLElement).closest('[data-element="scoreboard"]')
      && (this.event?.isEnabled() ?? true)
    ) {
      switch (type) {
        case 'icon':
          this.onIcon?.()
          eventStopPropagation(event)
          break
        case 'icon-trailing':
          this.onTrailing?.()
          eventStopPropagation(event)
          break
        case 'cancel':
          this.event?.onClear(event)
          this.resetFocus()
          eventStopPropagation(event)
          break
        case 'next':
          this.onNext?.()
          this.arrow?.next()
          this.event?.on(event)
          eventStopPropagation(event)
          break
        case 'previous':
          this.onPrevious?.()
          this.arrow?.previous()
          this.event?.on(event)
          eventStopPropagation(event)
          break
      }
    }
  }

  /**
   * Keydown event trigger function when pressing the space bar or enter key.
   *
   * Функция вызова события клавиш при нажатии на пробел или клавишу Enter.
   * @param event event object / объект события
   * @param options clicked element configuration / конфигурация кликнутого элемента
   */
  protected readonly onKeydown = (
    event: KeyboardEvent,
    options?: EventClickValue
  ) => {
    if (isEnter(event)) {
      this.on(event as unknown as MouseEvent, options ?? {} as EventClickValue)
      event.preventDefault()
    }
  }
}
