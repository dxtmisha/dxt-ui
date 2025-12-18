import { ConstrClass } from '@dxtmisha/functional';
import { FieldCounterComponentInclude } from '../FieldCounter';
import { FieldMessageSlot } from './basicTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type FieldMessageComponents = FieldCounterComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type FieldMessageEmits = {};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface FieldMessageExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface FieldMessageSlots {
    /** Slot for helper message/ Слот для вспомогательного сообщения */
    helper?(props: FieldMessageSlot): any;
    /** Slot for validation message/Слот для сообщения об ошибке */
    validation?(props: FieldMessageSlot): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type FieldMessageClasses = {
    main: ConstrClass;
    info: string;
    error: string;
};
