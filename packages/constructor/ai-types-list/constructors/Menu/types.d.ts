// md5:dc91e79e95bbff65b3e00ebb15e9d711
import { ConstrClass, NumberOrStringOrBoolean } from '@dxtmisha/functional';
import { EventClickEmits } from '../../types/eventClickTypes';
import { ListComponentInclude, ListExpose, ListSlots } from '../List';
import { BarsComponentInclude, BarsEmitsInclude } from '../Bars';
import { WindowComponentInclude, WindowEmitsInclude, WindowExposeInclude } from '../Window';
import { ModelEmitsSelected } from '../../types/modelTypes';
import { MenuControlItem, MenuSlotInclude } from './basicTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type MenuComponents = ListComponentInclude & BarsComponentInclude & WindowComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type MenuEmits = BarsEmitsInclude & EventClickEmits & WindowEmitsInclude & ModelEmitsSelected & {
    /** Event for updating the value/ Событие обновления значения */
    updateValue: [value?: NumberOrStringOrBoolean];
    /** Event for clicking on a slot/ Событие клика по слоту */
    clickSlot: [value?: string];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface MenuExpose extends WindowExposeInclude, ListExpose {
    loading(): boolean;
    /** Switches to the previous item/ Переключает на предыдущий элемент */
    previous(): NumberOrStringOrBoolean | undefined;
    /** Switches to the next item/ Переключает на следующий элемент */
    next(): NumberOrStringOrBoolean | undefined;
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export type MenuSlots = ListSlots & MenuSlotInclude & {
    /** Control slot for window management / Слот управления для управления окном */
    control?(props: MenuControlItem): any;
};
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type MenuClasses = {
    main: ConstrClass;
    bars: string;
    list: string;
};
