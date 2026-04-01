import { ComputedRef } from 'vue';
import { ConstrClass } from '@dxtmisha/functional';
import { SnackbarItemComponentInclude } from '../SnackbarItem/basicTypes';
import { SnackbarValue } from './basicTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SnackbarComponents = SnackbarItemComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SnackbarEmits = {
    show: [value: string, item: SnackbarValue];
    hide: [value: string, item: SnackbarValue];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SnackbarExpose {
    isItem: ComputedRef<boolean>;
    add(item: SnackbarValue): void;
    remove(value: string): void;
    clear(): void;
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SnackbarSlots {
    default?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SnackbarClasses = {
    main: ConstrClass;
    item: string;
    space: string;
    priority: string;
};
