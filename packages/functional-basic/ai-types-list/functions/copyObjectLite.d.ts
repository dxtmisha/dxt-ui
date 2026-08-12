// md5:456b618a7980458b00defb5b304a959d
/**
 * Copies a simple object.
 *
 * Копирует простой объект.
 * @param value object for copying / объект для копирования
 * @param source additional properties for copying / дополнительные свойства для копирования
 * @returns returns a new copy of the object / возвращает новую копию объекта
 */
export declare function copyObjectLite<T, R = T>(value: T, source?: any): R;
