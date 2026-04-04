import { ConstrBind } from '@dxtmisha/functional';
import { EventClickEmits } from '../../types/eventClickTypes';
import { ActionsPropsBasic } from './props';
/**
 * Component map for including the Actions component/
 * Карта компонентов для подключения компонента Actions
 */
export type ActionsComponentInclude = {
    /** Actions component configuration/ Конфигурация компонента действий */
    actions?: object;
};
/** Available events for Actions/ Доступные события для Actions */
export type ActionsEmitsInclude = {
    /** Click event for actions/ Событие клика для действий */
    actions: EventClickEmits['click'];
    /** Simple click event for actions/ Простое событие клика для действий */
    actionsLite: EventClickEmits['clickLite'];
};
/**
 * Props used to include and configure the Actions component/
 * Свойства для подключения и настройки компонента Actions
 */
export type ActionsPropsInclude<Actions extends ActionsPropsBasic = ActionsPropsBasic> = {
    /** Hide actions/ Скрыть действия */
    actionsHide?: boolean;
    /** List of action buttons/ Список кнопок действий */
    actionsList?: ConstrBind<Actions['list']>;
    /** List of secondary action buttons/ Список вторичных кнопок действий */
    actionsSecondary?: ConstrBind<Actions['listSecondary']>;
    /** Additional attributes for Actions component/ Дополнительные атрибуты для компонента Actions */
    actionsAttrs?: ConstrBind<Actions>;
};
