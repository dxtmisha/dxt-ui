import type { WindowPropsBasic, WindowPropsInclude } from '../Window'
import type { BarsPropsBasic, BarsPropsInclude } from '../Bars'
import type { ActionsPropsBasic, ActionsPropsInclude } from '../Actions'

interface ActionSheetPropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface ActionSheetPropsBasic<
  Window extends WindowPropsBasic = WindowPropsBasic,
  Bars extends BarsPropsBasic = BarsPropsBasic,
  Actions extends ActionsPropsBasic = ActionsPropsBasic
> extends WindowPropsInclude<Window>,
  BarsPropsInclude<Bars>,
  ActionsPropsInclude<Actions> {
  // Status
  open?: boolean

  // Style
  touchClose?: boolean
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ActionSheetProps extends ActionSheetPropsBasic, ActionSheetPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsActionSheet = {
  barsBackHide: true,
  touchClose: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
