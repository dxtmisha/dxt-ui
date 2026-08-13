// md5:8b5fe4affc0042ecd9c665946dbd65f5
import { ConstrClass } from '@dxtmisha/functional';
import { ListItemComponents, ListItemEmits, ListItemExpose, ListItemSlots } from '../ListItem';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type NavigationItemComponents = ListItemComponents;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type NavigationItemEmits = ListItemEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface NavigationItemExpose extends ListItemExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface NavigationItemSlots extends ListItemSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type NavigationItemClasses = {
    main: ConstrClass;
    body: string;
    context: string;
    label: string;
    highlight: string;
    prefix: string;
    caption: string;
    description: string;
    icon: string;
    trailing: string;
    control: string;
    badge: string;
};
