import { DesignChanged } from './DesignChanged';
/**
 * Base class for working with the constructor.
 *
 * Базовый класс для работы с конструктором.
 */
export declare abstract class DesignAbstract<T extends Record<string, any>, C extends Record<string, any>> {
    protected readonly props: T;
    protected readonly callback?: ((event: C) => void) | undefined;
    protected readonly event: C;
    protected readonly changed: DesignChanged<T>;
    /**
     * Constructor
     * @param props base data/ базовые данные
     * @param callback callback function when the value changes/
     * функция обратного вызова при изменении значения
     * @param changed base data/ данный для слежения
     */
    constructor(props: T, callback?: ((event: C) => void) | undefined, changed?: string[]);
    /**
     * Calls the callback function.
     *
     * Вызывает функцию обратного вызова.
     * @param compelled forces data to update/ вынуждает обновлять данные
     */
    make(compelled?: boolean): this;
    /**
     * Checks if there are values in the property.
     *
     * Проверяет, есть ли значения в свойстве.
     * @param name property names/ названия свойств
     */
    protected is<K extends keyof T>(name: K): boolean;
    /**
     * Checks if the value has been changed by the property name.
     *
     * Проверяет, было ли изменено значение по названию свойства.
     * @param name property names/ названия свойств
     * @param nameProp names of properties of the input variable/ названия свойств входной переменной
     */
    protected isChanged<K extends keyof C & string, KT extends keyof T & string>(name: K, nameProp?: KT | KT[]): boolean;
    /**
     * Calls the callback function.
     *
     * Вызывает функцию обратного вызова.
     * @param compelled forces data to update/ вынуждает обновлять данные
     */
    makeCallback(compelled?: boolean): void;
    /**
     * The function calls an image call.
     *
     * Функция вызывает образный вызов.
     */
    protected makeCallbackItem(): void;
    /**
     * A function that is called each time the input values are changed.
     *
     * Функция, которая вызывается каждый раз, когда изменяются входные значения.
     */
    protected abstract initEvent(): void;
}
