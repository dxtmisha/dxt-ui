import { ObjectItem } from '../types/basicTypes';
/**
 * This method is used to copy the values of all enumerable own properties from one source object to a target object.
 * In priority according to the processing list.
 *
 * Метод используется для копирования значений всех перечисляемых свойств одного объекта в другой.
 * В приоритете по списку обработки.
 * @param array the target object/ целевой объект
 * @param replacement the source object/ исходные объекты
 * @param indexStart index at which to start changing the array/ индекс, по которому начинает изменять массив
 */
export declare function splice<I>(array: ObjectItem<I>, replacement?: ObjectItem<I> | I, indexStart?: string): ObjectItem<I>;
