import { DataStorage } from './DataStorage';
/**
 * Class for getting the scroll width.
 *
 * Класс для получения ширины скролла.
 */
export declare class ScrollbarWidth {
    private static calculate;
    /**
     * Checks whether to enable scroll hiding.
     *
     * Проверяет, надо ли включить скрытие скролла.
     * @returns boolean indicating if scroll hiding is enabled/ логическое значение, указывающее, включено ли скрытие скролла
     */
    static is(): Promise<boolean>;
    /**
     * Returns the width of the scroll.
     *
     * Возвращает ширину скролла.
     * @returns scrollbar width in pixels/ ширина скролла в пикселях
     */
    static get(): Promise<number>;
    /**
     * Returns the storage for scroll width.
     *
     * Возвращает хранилище для ширины скролла.
     * @returns DataStorage instance/ экземпляр DataStorage
     */
    static getStorage(): DataStorage<number>;
    /**
     * Returns the calculate flag, indicating if width calculation is in progress.
     *
     * Возвращает флаг вычисления, указывающий, идет ли расчет ширины.
     * @returns calculation flag/ флаг вычисления
     */
    static getCalculate(): boolean;
    /**
     * Creates elements to check the width of the scroll.
     *
     * Создает элементы для проверки ширины скролла.
     * @returns created element / созданный элемент
     */
    private static createElement;
    /**
     * Initialization of data to check the width of the scroll.
     *
     * Инициализация данных для проверки ширины скролла.
     * @returns a promise that resolves with the scrollbar width / промис, который разрешается шириной скролла
     */
    private static init;
}
