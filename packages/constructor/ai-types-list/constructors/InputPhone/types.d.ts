// md5:cd5fa1235c7231cb90cdf815da24008f
import { ConstrClass } from '@dxtmisha/functional';
import { FieldComponentInclude, FieldSlotsInclude } from '../Field';
import { InputPhoneDialCodeComponentInclude } from '../InputPhoneDialCode';
import { MaskComponentInclude } from '../Mask';
import { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputPhoneComponents = FieldComponentInclude & MaskComponentInclude & InputPhoneDialCodeComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type InputPhoneEmits = FieldBasicEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface InputPhoneExpose extends FieldBasicExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface InputPhoneSlots extends FieldSlotsInclude {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type InputPhoneClasses = {
    main: ConstrClass;
};
