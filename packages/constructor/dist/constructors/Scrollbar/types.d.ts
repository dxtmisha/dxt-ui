import { ConstrClass } from '@dxtmisha/functional';
import { ScrollbarEdgeType } from './basicTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ScrollbarComponents = {};
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ScrollbarEmits = {
    top: [isTop: boolean];
    reachTop: [];
    leaveTop: [];
    bottom: [isBottom: boolean];
    reachBottom: [];
    leaveBottom: [];
    edge: [isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ScrollbarExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ScrollbarSlots {
    default?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ScrollbarClasses = {
    main: ConstrClass;
};
