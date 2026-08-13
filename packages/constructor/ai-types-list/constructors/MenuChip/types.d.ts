// md5:7dc06614cb973b3cb8db678d7094a4bd
import { ConstrClass } from '@dxtmisha/functional';
import { MenuComponentInclude, MenuExposeInclude, MenuSlotInclude } from '../Menu';
import { ChipComponentInclude } from '../Chip';
import { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type MenuChipComponents = MenuComponentInclude & ChipComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type MenuChipEmits = FieldBasicEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface MenuChipExpose extends FieldBasicExpose, MenuExposeInclude {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface MenuChipSlots extends MenuSlotInclude {
    default?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type MenuChipClasses = {
    main: ConstrClass;
    label: string;
    separator: string;
    selected: string;
};
