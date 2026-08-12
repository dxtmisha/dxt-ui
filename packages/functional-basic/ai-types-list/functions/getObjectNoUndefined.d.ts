// md5:337f696ab7e6be43a8e17db505476f68
/**
 * Removes from the object all properties belonging to the exception type.
 *
 * Удаляет из объекта все свойства, принадлежащие к типу исключения.
 * @param data object for processing/ объект для обработки
 * @param exception exception value/ значение для исключения
 * @returns object without exception values/ объект без исключенных значений
 */
export declare function getObjectNoUndefined<T extends Record<string | number, any>>(data: T, exception?: any): T;
