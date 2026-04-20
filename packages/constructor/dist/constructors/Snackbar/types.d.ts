import { ComputedRef } from 'vue';
import { ConstrClass } from '@dxtmisha/functional';
import { SnackbarItemComponentInclude } from '../SnackbarItem';
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
    /** Event triggered when notification is shown/ Событие при показе уведомления */
    show: [value: string, item: SnackbarValue];
    /** Event triggered when notification is hidden/ Событие при скрытии уведомления */
    hide: [value: string, item: SnackbarValue];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SnackbarExpose {
    /** Reactive state indicating if there are notifications/ Реактивное состояние, указывающее на наличие уведомлений */
    isItem: ComputedRef<boolean>;
    /** Adds a new notification/ Добавляет новое уведомление */
    add(item: SnackbarValue): void;
    /** Removes a notification by its value/ Удаляет уведомление по его значению */
    remove(value: string): void;
    /** Clears all notifications/ Очищает все уведомления */
    clear(): void;
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SnackbarSlots {
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
