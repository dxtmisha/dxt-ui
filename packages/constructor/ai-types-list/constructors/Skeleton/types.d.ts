// md5:d9492a73b8880e5eeb1be65f609f3985
import { ConstrClass } from '@dxtmisha/functional';
import { SkeletonClassesList } from './basicTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SkeletonComponents = {};
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SkeletonEmits = {};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SkeletonExpose {
    /**
     * Whether the skeleton is currently active / Активен ли скелет в данный момент
     * @returns active status / статус активности
     */
    isActive(): boolean;
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SkeletonSlots {
    /** Slot for default skeleton content/ Слот для основного содержимого скелета */
    default?(props: SkeletonClassesList): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SkeletonClasses = {
    main: ConstrClass;
};
