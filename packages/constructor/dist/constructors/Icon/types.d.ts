import { ComputedRef } from 'vue';
import { ConstrClass } from '@dxtmisha/functional';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
import { ImageComponentsInclude, ImageEmitsInclude } from '../Image';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type IconComponents = ImageComponentsInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type IconEmits = ImageEmitsInclude & EventClickEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface IconExpose extends EventClickExpose {
    isActive: ComputedRef<boolean>;
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface IconSlots {
    default?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type IconClasses = {
    main: ConstrClass;
};
