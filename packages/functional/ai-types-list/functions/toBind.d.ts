// md5:1b731949915f1da3def929858fbc8c33
import type { ItemList } from '@dxtmisha/functional-basic';
import type { ConstrBind } from '../types/constructorTypes';
/**
 * Merges two objects with properties, taking into account their classes and styles.
 *
 * Объединяет два объекта со свойствами с учётом классов и стилей в них.
 * @param extra additional property / дополнительное свойство
 * @param value input value / входное значение
 * @returns merged object / объединенный объект
 */
export declare function toBind<R extends ItemList = ItemList>(extra?: ItemList, value?: ItemList): ConstrBind<R>;
