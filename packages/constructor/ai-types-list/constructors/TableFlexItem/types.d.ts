// md5:0139b33918b41af1d0bb7501f7792836
import { ConstrClass } from '@dxtmisha/functional';
import { TableItemComponents, TableItemEmits, TableItemExpose, TableItemSlots } from '../TableItem';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TableFlexItemComponents = TableItemComponents;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TableFlexItemEmits = TableItemEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TableFlexItemExpose extends TableItemExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface TableFlexItemSlots extends TableItemSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TableFlexItemClasses = {
    main: ConstrClass;
    label: string;
    description: string;
};
