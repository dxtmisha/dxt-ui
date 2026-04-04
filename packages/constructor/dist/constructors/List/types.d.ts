import { ConstrClass, ListList, ListNames } from '@dxtmisha/functional';
import { EventClickEmits } from '../../types/eventClickTypes';
import { ListItemComponentInclude } from '../ListItem';
import { ListGroupComponentInclude } from '../ListGroup';
import { ListMenuComponentInclude } from '../ListMenu';
import { ComputedRef } from 'vue';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ListComponents = ListItemComponentInclude & ListGroupComponentInclude & ListMenuComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ListEmits = EventClickEmits & {
    /** Event for closing the list/ Событие закрытия списка */
    close: [];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ListExpose {
    /** Whether at least one item is selected/ Выбран ли хотя бы один элемент */
    isSelected: ComputedRef<boolean>;
    /** List of selected elements/ Список выбранных элементов */
    selectedList: ComputedRef<ListList>;
    /** Names of selected elements/ Названия выбранных элементов */
    selectedNames: ComputedRef<ListNames>;
    /** Values of selected elements/ Значения выбранных элементов */
    selectedValues: ComputedRef<any[]>;
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export type ListSlots = Record<string, (props: any) => any>;
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ListClasses = {
    main: ConstrClass;
    space: string;
    line: string;
    subtitle: string;
    html: string;
    management: string;
    group: string;
    menu: string;
    menuGroup: string;
};
