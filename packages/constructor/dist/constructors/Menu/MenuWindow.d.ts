import { MenuRequest } from './MenuRequest';
import { WindowProps } from '../Window';
import { MenuProps } from './props';
import { Ref } from 'vue';
/**
 * Window manager for Menu component
 *
 * Класс управления окном для компонента Menu
 */
export declare class MenuWindow {
    protected readonly props: MenuProps;
    protected readonly request: MenuRequest;
    readonly lite: Ref<boolean | undefined, boolean | undefined>;
    readonly control: Ref<boolean | undefined, boolean | undefined>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param request menu request handler/ обработчик запросов меню
     */
    constructor(props: MenuProps, request: MenuRequest);
    /**
     * Returns extra methods for window management
     *
     * Возвращает дополнительные методы для управления окном
     * @returns object with window management methods/ объект с методами управления окном
     */
    getExtra(): WindowProps;
    /**
     * Preparing data before opening the menu
     *
     * Подготовка данных перед открытием меню
     * @returns Promise that resolves to true when preparation is complete/
     * Promise, который разрешается в true после завершения подготовки
     */
    protected readonly preparation: () => Promise<void>;
    /**
     * Actions performed after opening the window
     *
     * Действия, выполняемые после открытия окна
     * @returns Promise that resolves to true when opening actions are complete/
     * Promise, который разрешается в true после завершения действий открытия
     */
    protected readonly opening: () => Promise<boolean>;
    /**
     * Actions performed when closing the window
     *
     * Действия, выполняемые при закрытии окна
     * @returns Promise that resolves to true when closing actions are complete/
     * Promise, который разрешается в true после завершения действий закрытия
     */
    protected readonly closing: () => Promise<boolean>;
}
