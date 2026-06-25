import type { ConstrBind } from '@dxtmisha/functional'
import type { AlertPropsBasic } from './props'

/** Type describing properties for nested alert components / Тип, описывающий свойства для вложенных компонентов оповещения */
export type AlertPropsInclude<
  AlertProps extends AlertPropsBasic = AlertPropsBasic
> = {
  /** Alert attributes / Атрибуты оповещения */
  alertAttrs?: ConstrBind<AlertProps>
}
