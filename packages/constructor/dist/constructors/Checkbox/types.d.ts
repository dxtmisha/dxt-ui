import { ConstrClass } from '@dxtmisha/functional';
import { ImageComponentInclude } from '../Image';
import { FieldMessageComponentInclude } from '../FieldMessage';
import { ProgressComponentInclude } from '../Progress';
import { RippleComponentInclude } from '../Ripple';
import { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes';
import { LabelSlots } from '../../types/labelTypes';
import { DescriptionSlots } from '../../types/descriptionTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type CheckboxComponents = ImageComponentInclude & FieldMessageComponentInclude & ProgressComponentInclude & RippleComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type CheckboxEmits = FieldBasicEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface CheckboxExpose extends FieldBasicExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface CheckboxSlots extends LabelSlots, DescriptionSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type CheckboxClasses = {
    main: ConstrClass;
    input: string;
    body: string;
    item: string;
    icon: string;
    loading: string;
    info: string;
    label: string;
};
