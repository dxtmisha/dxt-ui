import { ConstrClass } from '@dxtmisha/functional';
import { ChipComponentInclude } from '../Chip';
import { EventClickEmits } from '../../types/eventClickTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SelectValueComponents = ChipComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SelectValueEmits = EventClickEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SelectValueExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SelectValueSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SelectValueClasses = {
    main: ConstrClass;
    item: string;
    trailing: string;
};
