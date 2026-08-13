// md5:1b72a50ecdc70595be88c3ae0ebe0710
import { ConstrClass } from '@dxtmisha/functional';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type GridComponents = {};
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type GridEmits = {};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface GridExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface GridSlots {
    /** Slot for default grid content/ Слот для основного содержимого сетки */
    default?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type GridClasses = {
    main: ConstrClass;
};
