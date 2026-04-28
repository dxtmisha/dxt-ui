import { ComputedRef } from 'vue';
import { ConstrClass } from '@dxtmisha/functional';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
import { ImageComponentInclude, ImageEmitsInclude } from '../Image';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type IconComponents = ImageComponentInclude;
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
    /** Whether the icon is currently active/ Активна ли иконка в данный момент */
    isActive: ComputedRef<boolean>;
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface IconSlots {
    /** Slot for custom icon content/ Слот для пользовательского контента иконки */
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
