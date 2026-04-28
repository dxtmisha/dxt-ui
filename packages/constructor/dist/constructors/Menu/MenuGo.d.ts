import { ListDataRef, NumberOrStringOrBoolean } from '@dxtmisha/functional';
import { MenuValue } from './MenuValue';
import { MenuProps } from './props';
/**
 * Navigation manager for Menu component
 *
 * Менеджер навигации для компонента Menu
 */
export declare class MenuGo {
    protected readonly props: MenuProps;
    protected readonly value: MenuValue;
    protected readonly data: ListDataRef;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param value value manager/ менеджер значений
     * @param data data manager for list/ менеджер данных списка
     */
    constructor(props: MenuProps, value: MenuValue, data: ListDataRef);
    /**
     * Navigates to the previous item in the menu
     *
     * Переходит к предыдущему элементу меню
     * @returns value of the previous item or undefined/ значение предыдущего элемента или undefined
     */
    readonly previous: () => NumberOrStringOrBoolean | undefined;
    /**
     * Navigates to the next item in the menu
     *
     * Переходит к следующему элементу меню
     * @returns value of the next item or undefined/ значение следующего элемента или undefined
     */
    readonly next: () => NumberOrStringOrBoolean | undefined;
    /**
     * Returns the step value for navigation
     *
     * Возвращает значение шага для навигации
     * @returns step value/ значение шага
     */
    protected getStep(): number;
    /**
     * Navigates through the menu items by the specified direction
     *
     * Перемещается по элементам меню в указанном направлении
     * @param directions direction multiplier (-1 for previous, 1 for next)/ множитель направления (-1 для предыдущего, 1 для следующего)
     * @returns value of the selected item or undefined/ значение выбранного элемента или undefined
     */
    protected go(directions: number): NumberOrStringOrBoolean | undefined;
}
