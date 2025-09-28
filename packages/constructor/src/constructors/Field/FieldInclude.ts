import { computed } from 'vue'
import { type ConstrBind, type RefOrNormal, toBinds, getRef } from '@dxtmisha/functional'

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
}
