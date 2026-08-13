// md5:e31f480fa5287516278a0211c5130760
import { ConstrClass } from '@dxtmisha/functional';
import { TableHeaderItemComponents, TableHeaderItemEmits, TableHeaderItemExpose, TableHeaderItemSlots } from '../TableHeaderItem';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TableFlexHeaderItemComponents = TableHeaderItemComponents;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TableFlexHeaderItemEmits = TableHeaderItemEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TableFlexHeaderItemExpose extends TableHeaderItemExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface TableFlexHeaderItemSlots extends TableHeaderItemSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TableFlexHeaderItemClasses = {
    main: ConstrClass;
    label: string;
    description: string;
    body: string;
    sort: string;
    tooltip: string;
};
