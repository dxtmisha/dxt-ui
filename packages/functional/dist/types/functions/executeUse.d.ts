/**
 * Returns a function for use during the initialization of control methods.
 *
 * Возвращает функцию для использования при инициализации методов управления.
 * @param callback function or any value/ функция или любое значение
 * @param unmounted delete data from the cache/ удалить ли данные из кеша
 * @param isGlobal is the object global?/ является ли объект глобальным?
 */
export declare function executeUse<R>(callback: () => R, unmounted?: boolean, isGlobal?: boolean): () => R;
export declare function executeUseGlobalInit(): void;
