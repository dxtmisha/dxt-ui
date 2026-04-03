import { ConstrEmit } from '@dxtmisha/functional';
import { SnackbarValue } from './basicTypes';
import { SnackbarEmits } from './types';
/**
 * Class for managing events for the snackbar.
 *
 * Класс для управления событиями для снекбара.
 */
export declare class SnackbarEvent {
    protected readonly emits?: ConstrEmit<SnackbarEmits> | undefined;
    /**
     * Constructor
     * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
     */
    constructor(emits?: ConstrEmit<SnackbarEmits> | undefined);
    /**
     * Event for showing the message.
     *
     * Событие для показа сообщения.
     * @param value element identification / идентификация элемента
     * @param item message element / элемент сообщения
     */
    show(value: string, item: SnackbarValue): void;
    /**
     * Event for hiding the message.
     *
     * Событие для скрытия сообщения.
     * @param value element identification / идентификация элемента
     * @param item message element / элемент сообщения
     */
    hide(value: string, item: SnackbarValue): void;
}
