import { DesignAbstract } from './DesignAbstract';
/**
 * Base class for working with the constructor.
 *
 * Базовый класс для работы с конструктором.
 */
export declare abstract class DesignAsyncAbstract<T extends Record<string, any>, C extends Record<string, any>> extends DesignAbstract<T, C> {
    /**
     * Calls the callback function.
     *
     * Вызывает функцию обратного вызова.
     * @param compelled forces data to update/ вынуждает обновлять данные
     */
    make(compelled?: boolean): this;
    /**
     * Calls the callback function.
     *
     * Вызывает функцию обратного вызова.
     * @param compelled forces data to update/ вынуждает обновлять данные
     */
    makeCallback(compelled?: boolean): Promise<void>;
    /**
     * A function that is called each time the input values are changed.
     *
     * Функция, которая вызывается каждый раз, когда изменяются входные значения.
     */
    protected abstract initEvent(): Promise<void>;
}
