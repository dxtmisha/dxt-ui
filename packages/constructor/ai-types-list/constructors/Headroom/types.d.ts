// md5:7bef7e5f28d5a66744d5d6b68355ebf8
import { ConstrClass } from '@dxtmisha/functional';
import { HeadroomEmitsInclude, HeadroomExposeInclude } from '../../types/headroomTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type HeadroomComponents = {};
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type HeadroomEmits = HeadroomEmitsInclude;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export type HeadroomExpose = HeadroomExposeInclude;
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface HeadroomSlots {
    default?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type HeadroomClasses = {
    main: ConstrClass;
};
