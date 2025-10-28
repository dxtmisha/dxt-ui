import { computed } from 'vue'
import { eventStopPropagation } from '@dxtmisha/functional-basic'
import { type ConstrBind, type RefOrNormal, toBinds, getRef } from '@dxtmisha/functional'

import type { EventClickValue } from '../../types/eventClickTypes'
import type { FieldValueInclude } from '../../classes/field/FieldValueInclude'
import type { FieldEventInclude } from '../../classes/field/FieldEventInclude'
import type { FieldArrowInclude } from '../../classes/field/FieldArrowInclude'

import type { FieldPropsInclude } from './basicTypes'
import type { FieldPropsBasic } from './props'

/**
 * The class returns data for working with the Field framework.
 *
 * Класс возвращает данные для работы с каркасом поля.
 */
export class FieldInclude<
  Props extends FieldPropsInclude = FieldPropsInclude,
  PropsExtra extends ConstrBind<FieldPropsBasic> = ConstrBind<FieldPropsBasic>
> {
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly value: FieldValueInclude,
    protected readonly event: FieldEventInclude,
    protected readonly arrow?: FieldArrowInclude,
    protected readonly onIcon?: () => void,
    protected readonly onTrailing?: () => void,
    protected readonly extra?: RefOrNormal<PropsExtra>
  ) {
  }

  /** Returns properties for the field framework/ Возвращает свойства для каркаса поля */
  readonly binds = computed<PropsExtra>(
    () => toBinds<PropsExtra>(
      getRef(this.extra),
      {
        // Status
        focus: this.props.focus,
        selected: this.props.selected,
        readonly: this.props.readonly,
        disabled: this.props.disabled,

        loading: this.props.loading,
        forceShowMessage: this.props.forceShowMessage,

        // Value
        label: this.props.label,
        prefix: this.props.prefix,
        suffix: this.props.suffix,
        caption: this.props.caption,
        helperMessage: this.props.helperMessage,
        validationMessage: this.props.validationMessage,

        required: this.props.required,

        detail: this.props.detail,

        // Style
        cancel: this.props.cancel,
        counterShow: this.props.counterShow,

        icon: this.props.icon,
        iconTurn: this.props.iconTurn,
        iconHide: this.props.iconHide,
        iconDir: this.props.iconDir,
        iconPalette: this.props.iconPalette,
        iconTrailing: this.props.iconTrailing,
        iconTrailingTurnOnly: this.props.iconTrailingTurnOnly,
        iconTrailingDirOnly: this.props.iconTrailingDirOnly,
        iconTrailingPalette: this.props.iconTrailingPalette,
        iconAttrs: this.props.iconAttrs,

        isSkeleton: this.props.isSkeleton,

        fieldLabelAttrs: this.props.fieldLabelAttrs,
        fieldMessageAttrs: this.props.fieldMessageAttrs,
        fieldCounterAttrs: this.props.fieldCounterAttrs
      },
      this.props.fieldAttrs
    )
  )

  /**
   * Returns properties for working with the value of the Field framework/
   * Возвращает свойства для работы со значением каркаса поля
   */
  readonly valueBinds = computed<ConstrBind<PropsExtra>>(() => ({
    ...this.binds.value,
    isValue: this.value.is.value,
    value: this.value.item.value,
    cancelShow: this.value.boolean.value,

    counter: this.value.length.value,

    disabledPrevious: this.arrow?.disabledPrevious.value,
    disabledNext: this.arrow?.disabledNext.value
  }))

  /**
   * Method for listening to events.
   *
   * Метод для прослушивания событий.
   * @param event event object/ объект события
   * @param type type of the object that was clicked/ тип объекта, который был нажат
   */
  protected readonly on = (
    event: MouseEvent,
    { type }: EventClickValue
  ) => {
    if (
      (event.target as HTMLElement).closest('[data-element="scoreboard"]')
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
          this.event.onClear(event)
          eventStopPropagation(event)
          break
        case 'next':
          this.arrow?.next()
          this.event.on(event)
          eventStopPropagation(event)
          break
        case 'previous':
          this.arrow?.previous()
          this.event.on(event)
          eventStopPropagation(event)
          break
      }
    }
  }
}
