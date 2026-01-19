import { ConstrClass } from '@dxtmisha/functional';
import { MaskComponentInclude } from '../Mask';
import { FieldComponentInclude, FieldSlotsInclude } from '../Field';
import { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputComponents = MaskComponentInclude & FieldComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type InputEmits = FieldBasicEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface InputExpose extends FieldBasicExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface InputSlots extends FieldSlotsInclude {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type InputClasses = {
    main: ConstrClass;
};
