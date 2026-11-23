import type { WindowPropsBasic, WindowPropsInclude } from '../Window'
import type { BarsPropsBasic, BarsPropsInclude } from '../Bars'
import type { ActionsPropsBasic, ActionsPropsInclude } from '../Actions'

import type { ModelPropsOpen } from '../../types/modelTypes'

/** Token properties for ActionSheet component / Токен-свойства компонента ActionSheet */
export type ActionSheetPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/** Basic properties for ActionSheet component / Базовые свойства компонента ActionSheet */
export type ActionSheetPropsBasic<
  Window extends WindowPropsBasic = WindowPropsBasic,
  Bars extends BarsPropsBasic = BarsPropsBasic,
  Actions extends ActionsPropsBasic = ActionsPropsBasic
> = WindowPropsInclude<Window>
  & BarsPropsInclude<Bars>
  & ActionsPropsInclude<Actions>
  & ModelPropsOpen
  & {
    /** Whether the action sheet is visible / Открыт ли лист действий */
    open?: boolean

    /** Whether to close the action sheet by swiping down / Закрывать ли лист действий при свайпе вниз */
    touchClose?: boolean
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ActionSheetProps = ActionSheetPropsBasic & ActionSheetPropsToken

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
