/**
 * Returns a function for use during the initialization of control methods.
 *
 * Возвращает функцию для использования при инициализации методов управления.
 * @param callback function or any value/ функция или любое значение
 * @param unmounted delete data from the cache/ удалить ли данные из кеша
 * @param isGlobal is the object global?/ является ли объект глобальным?
 * @param isProvide execution as a component inheritance/ выполнение как наследие компонента
 */
export declare function executeUse<R, O extends any[], RI extends Readonly<Readonly<R> & {
    init(): Readonly<R>;
}>>(callback: (...args: O) => R, unmounted?: boolean, isGlobal?: boolean, isProvide?: boolean): ((...args: O) => RI) | (() => RI);
export declare function executeUseGlobalInit(): void;
