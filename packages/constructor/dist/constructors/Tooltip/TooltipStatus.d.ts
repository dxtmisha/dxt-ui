import { TooltipSlots } from './types';
import { TooltipProps } from './props';
import { Ref, ComputedRef } from 'vue';
/**
 * Class for working with display statuses.
 *
 * Класс для работы со статусами отображения.
 */
export declare class TooltipStatus {
    protected readonly props: Readonly<TooltipProps>;
    protected readonly slots?: TooltipSlots | undefined;
    readonly open: Ref<boolean, boolean>;
    readonly show: Ref<boolean, boolean>;
    readonly preparation: Ref<boolean, boolean>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param slots object for working with slots/ объект для работы со слотами
     */
    constructor(props: Readonly<TooltipProps>, slots?: TooltipSlots | undefined);
    /**
     * Checks if there is text to display.
     *
     * Проверяет, есть ли текст для отображения.
     */
    readonly isText: ComputedRef<boolean>;
    /** Checks if the element needs to be displayed/ Проверяет, нужно ли отображать элемент */
    readonly isShow: ComputedRef<boolean>;
    /** Checks if the content is an array/ Проверяет, является ли содержимое массивом */
    readonly isArray: ComputedRef<boolean>;
    /**
     * Checks if the current status matches the selected one.
     *
     * Проверяет, соответствует ли текущий статус выбранному.
     * @param open the value of the current state/ значение текущего состояния
     */
    isMatch(open: boolean): boolean;
    /**
     * Changes the open state.
     *
     * Изменяет состояние открытия.
     * @param open the value of the current state/ значение текущего состояния
     */
    setOpen(open: boolean): void;
    /**
     * Changes the display state.
     *
     * Изменяет состояние показа.
     * @param show the value of the current state/ значение текущего состояния
     */
    setShow(show: boolean): void;
    /**
     * Changes the preparation status.
     *
     * Изменяет статус подготовки.
     * @param preparation the value of the current state/ значение текущего состояния
     */
    setPreparation(preparation: boolean): void;
}
