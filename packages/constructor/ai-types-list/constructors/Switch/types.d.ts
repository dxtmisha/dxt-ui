// md5:a54cc6f4d70817c88db48679a603d0fa
import { ConstrClass } from '@dxtmisha/functional';
import { CheckboxComponents, CheckboxEmits, CheckboxExpose, CheckboxSlots } from '../Checkbox';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SwitchComponents = CheckboxComponents;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SwitchEmits = CheckboxEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SwitchExpose extends CheckboxExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SwitchSlots extends CheckboxSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SwitchClasses = {
    main: ConstrClass;
    input: string;
    body: string;
    item: string;
    icon: string;
    loading: string;
    info: string;
    label: string;
    track: string;
};
