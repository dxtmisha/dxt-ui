// md5:0d58bcf8e6b507a7bbf41442f85b1fc2
import { ConstrClass, NumberOrStringOrBoolean } from '@dxtmisha/functional';
import { EventClickEmits } from '../../types/eventClickTypes';
import { MenuComponentInclude, MenuControlItem, MenuExposeInclude, MenuSlotInclude } from '../Menu';
import { ModelEmitsSelected } from '../../types/modelTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type MenuCountryComponents = MenuComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type MenuCountryEmits = ModelEmitsSelected & EventClickEmits & {
    /** Event for updating the value/ Событие обновления значения */
    updateValue: [value?: NumberOrStringOrBoolean];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface MenuCountryExpose extends MenuExposeInclude {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface MenuCountrySlots extends MenuSlotInclude {
    /** Control slot for window management / Слот управления для управления окном */
    control?(props: MenuControlItem): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type MenuCountryClasses = {
    main: ConstrClass;
};
