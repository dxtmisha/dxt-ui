import { ConstrClass } from '@dxtmisha/functional';
import { ButtonComponentInclude } from '../Button';
import { EventClickEmits } from '../../types/eventClickTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ActionsComponents = ButtonComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ActionsEmits = EventClickEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ActionsExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ActionsSlots {
    default?(props: any): any;
    secondary?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ActionsClasses = {
    main: ConstrClass;
    item: string;
    list: string;
    secondary: string;
    spacer: string;
};
