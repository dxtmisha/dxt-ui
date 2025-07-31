import { ElementOrString, ElementOrWindow } from '../types/basicTypes';
/**
 * Modifies the value of an element identified by its key.
 *
 * Изменяет значение элемента, определенного ключом.
 * @param element checked element/ проверяемый элемент
 * @param index index at which we retrieve values/ индекс, по которому получаем значения
 * @param value new value/ новое значение
 */
export declare function setElementItem<E extends ElementOrWindow, K extends keyof E, V extends E[K] = E[K]>(element: ElementOrString<E>, index: K, value: V | Record<string, V>): E | undefined;
