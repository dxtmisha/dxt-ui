import { ComputedRef } from 'vue';
import { ConstrClass } from '@dxtmisha/functional';
import { MotionTransformComponentInclude } from '../MotionTransform';
import { ListGroupSlotsPropsInclude } from './basicTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ListGroupComponents = MotionTransformComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ListGroupEmits = {};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ListGroupExpose {
    /** Whether the group is currently open/ Открыта ли группа в данный момент */
    open: ComputedRef<boolean>;
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ListGroupSlots {
    /** Slot for the group header/ Слот для заголовка группы */
    head?(props: ListGroupSlotsPropsInclude): any;
    /** Slot for the group list content/ Слот для содержимого списка группы */
    list?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ListGroupClasses = {
    main: ConstrClass;
    head: string;
    list: string;
};
