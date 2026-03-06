import { ConstrClass } from '@dxtmisha/functional';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type GridItemComponents = {};
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type GridItemEmits = {};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface GridItemExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface GridItemSlots {
    default?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type GridItemClasses = {
    main: ConstrClass;
};
