// md5:8527a610bf05c0f04bd227646e0fa3ad
import { ConstrClass } from '@dxtmisha/functional';
import { EventClickEmits } from '../../types/eventClickTypes';
import { ListExpose, ListSlots } from '../List';
import { ListMenuComponentInclude } from '../ListMenu';
import { NavigationItemComponentInclude } from '../NavigationItem';
import { NavigationRailItemComponentInclude } from '../NavigationRailItem';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type NavigationRailComponents = NavigationItemComponentInclude & NavigationRailItemComponentInclude & ListMenuComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type NavigationRailEmits = EventClickEmits & {
    /** Event for closing the list/ Событие закрытия списка */
    close: [];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface NavigationRailExpose extends ListExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export type NavigationRailSlots = ListSlots;
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type NavigationRailClasses = {
    main: ConstrClass;
    space: string;
    line: string;
    html: string;
    management: string;
    menu: string;
};
