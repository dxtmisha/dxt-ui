// md5:591a47f1be1188a750312f00e8832076
import { ConstrClass } from '@dxtmisha/functional';
import { CheckboxComponents, CheckboxEmits, CheckboxExpose, CheckboxSlots } from '../Checkbox';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type RadioComponents = CheckboxComponents;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type RadioEmits = CheckboxEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface RadioExpose extends CheckboxExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface RadioSlots extends CheckboxSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type RadioClasses = {
    main: ConstrClass;
    input: string;
    body: string;
    item: string;
    icon: string;
    loading: string;
    info: string;
    label: string;
};
