import type { ConstrBind } from '@dxtmisha/functional'

import type { EventClickEmits } from '../../types/eventClickTypes'
import type { ActionsPropsBasic } from './props'

/**
 * Component map for including the Actions component/
 * Карта компонентов для подключения компонента Actions
 */
export type ActionsComponentInclude = {
  actions?: object
}

/** Available events for Actions/ Доступные события для Actions */
export type ActionsEmitsInclude = {
  actions: EventClickEmits['click']
  actionsLite: EventClickEmits['clickLite']
}

/**
 * Props used to include and configure the Actions component/
 * Свойства для подключения и настройки компонента Actions
 */
export type ActionsPropsInclude<
  Actions extends ActionsPropsBasic = ActionsPropsBasic
> = {
  // Status
  /** Hide actions/ Скрыть действия */
  actionsHide?: boolean

  // Value
  /** List of action buttons/ Список кнопок действий */
  actionsList?: ConstrBind<Actions['list']>
  /** List of secondary action buttons/ Список вторичных кнопок действий */
  actionsSecondary?: ConstrBind<Actions['listSecondary']>

  // Style
  /** Additional attributes for Actions component/ Дополнительные атрибуты для компонента Actions */
  actionsAttrs?: ConstrBind<Actions>
}
