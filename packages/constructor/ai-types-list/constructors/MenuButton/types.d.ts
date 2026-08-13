// md5:7eb328ca8ff2701bae66702957745234
import { ConstrClass } from '@dxtmisha/functional';
import { MenuComponentInclude, MenuExposeInclude, MenuSlotInclude } from '../Menu';
import { ButtonComponentInclude } from '../Button';
import { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type MenuButtonComponents = MenuComponentInclude & ButtonComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type MenuButtonEmits = FieldBasicEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface MenuButtonExpose extends FieldBasicExpose, MenuExposeInclude {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface MenuButtonSlots extends MenuSlotInclude {
    default?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type MenuButtonClasses = {
    main: ConstrClass;
    label: string;
    separator: string;
    selected: string;
};
