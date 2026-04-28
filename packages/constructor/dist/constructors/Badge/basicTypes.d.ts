import { ConstrBind } from '@dxtmisha/functional';
import { BadgePropsBasic } from './props';
/**
 * Component map for including the Badge component/
 * Карта компонентов для подключения компонента Badge
 */
export type BadgeComponentInclude = {
    /** Badge component configuration/ Конфигурация компонента значка */
    badge?: object;
};
/**
 * Props used to include and configure the Badge component/
 * Свойства для подключения и настройки компонента Badge
 */
export type BadgePropsInclude<Badge extends BadgePropsBasic = BadgePropsBasic> = {
    /** Badge value or properties/ Значение или свойства значка */
    badge?: string | number | ConstrBind<Badge>;
    /** Whether to show only a dot/ Показывать ли только точку */
    badgeDot?: boolean;
};
