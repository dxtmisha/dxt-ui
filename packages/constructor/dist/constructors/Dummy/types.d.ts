import { ConstrClass } from '@dxtmisha/functional';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type DummyComponents = {};
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type DummyEmits = {};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface DummyExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface DummySlots {
    default?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type DummyClasses = {
    main: ConstrClass;
};
