import { WindowProps } from './props';
/**
 * A class for working with hooks when opening and closing a window.
 *
 * Класс для работы с хуками при открытии и закрытии окна.
 */
export declare class WindowHook {
    protected readonly props: WindowProps;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: WindowProps);
    /**
     * Hook for preparing elements before opening/closing.
     *
     * Хук для подготовки элементов перед открытием/закрытием.
     */
    preparation(): Promise<void>;
    /**
     * Hook before opening/closing.
     *
     * Хук перед открытием/закрытием.
     * @param open current state of the window/ текущее состояние окна
     */
    before(open: boolean): Promise<boolean>;
    /**
     * Hook before opening.
     *
     * Хук перед открытием.
     */
    beforeOpening(): Promise<boolean>;
    /**
     * Hook before closing.
     *
     * Хук перед закрытием.
     */
    beforeClosing(): Promise<boolean>;
    /**
     * Hook after opening/closing.
     *
     * Хук после открытия/закрытия.
     * @param open current state of the window/ текущее состояние окна
     */
    after(open: boolean): Promise<boolean>;
    /**
     * Hook after opening.
     *
     * Хук после открытия.
     */
    opening(): Promise<boolean>;
    /**
     * Hook after closing.
     *
     * Хук после закрытия.
     */
    closing(): Promise<boolean>;
}
