import { WindowElement } from './WindowElement';
import { WindowStatusItem } from './basicTypes';
import { Ref } from 'vue';
/**
 * A class that changes the status of the current component. This is needed for
 * working with animation and behavior of the element when opening/closing.
 *
 * Класс, отвечающий за изменение статуса текущего компонента. Это нужно для работы
 * с анимацией и поведением элемента при открытии/закрытии.
 */
export declare class WindowStatus {
    protected readonly element: WindowElement;
    readonly item: Ref<WindowStatusItem, WindowStatusItem>;
    /**
     * Constructor
     * @param element an object of the class for working with elements/ объект класса для работы с элементами
     */
    constructor(element: WindowElement);
    /**
     * Checks if the current status is closed (hide).
     *
     * Проверяет, является ли текущий статус закрытым (hide).
     */
    isHide(): boolean;
    /**
     * Checks if the current status is open (open/flash).
     *
     * Проверяет, является ли текущий статус открытым (open/flash).
     */
    isOpen(): boolean;
    /**
     * Change the current status.
     *
     * Изменить текущий статус.
     * @param value value/ значение
     */
    set(value: WindowStatusItem): this;
    /**
     * Translates status to display.
     *
     * Переводит статус в display.
     */
    toDisplay(): this;
    /**
     * Translates status to preparation.
     *
     * Переводит статус в preparation.
     */
    toPreparation(): this;
    /**
     * Translates status to flash.
     *
     * Переводит статус в flash.
     */
    toFlash(): this;
    /**
     * Translates status to open.
     *
     * Переводит статус в open.
     */
    toOpen(): this;
    /**
     * Translates status to hide.
     *
     * Переводит статус в hide.
     */
    toHide(): this;
    /**
     * Translates status to close.
     *
     * Переводит статус в close.
     */
    toClose(): this;
    /**
     * Updates the data-status attribute on the main element and teleport element.
     *
     * Обновляет атрибут data-status на основном элементе и элементе телепорта.
     */
    update(): void;
}
