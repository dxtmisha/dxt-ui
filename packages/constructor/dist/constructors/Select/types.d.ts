import { ConstrClass } from '@dxtmisha/functional';
import { MenuComponentInclude, MenuExposeInclude, MenuSlotInclude } from '../Menu';
import { FieldComponentInclude, FieldSlotsInclude } from '../Field';
import { SelectValueComponentInclude } from '../SelectValue';
import { InputComponentInclude } from '../Input';
import { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SelectComponents = MenuComponentInclude & FieldComponentInclude & SelectValueComponentInclude & InputComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SelectEmits = FieldBasicEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SelectExpose extends FieldBasicExpose, MenuExposeInclude {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SelectSlots extends FieldSlotsInclude, MenuSlotInclude {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SelectClasses = {
    main: ConstrClass;
    input: string;
};
