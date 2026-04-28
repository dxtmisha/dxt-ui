import { ConstrClass } from '@dxtmisha/functional';
import { FieldComponentInclude, FieldSlotsInclude } from '../Field';
import { TextareaAutosizeComponentInclude } from '../TextareaAutosize';
import { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TextareaComponents = FieldComponentInclude & TextareaAutosizeComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TextareaEmits = FieldBasicEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TextareaExpose extends FieldBasicExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface TextareaSlots extends FieldSlotsInclude {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TextareaClasses = {
    main: ConstrClass;
};
