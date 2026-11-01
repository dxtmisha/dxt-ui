// md5:a047a4c858a4362725749b1c56e3cce0
import type { ItemList } from '@dxtmisha/functional-basic';
import type { ConstrBind } from '../types/constructorTypes';
/**
 * Merges multiple objects with properties, taking into account their classes and styles.
 *
 * Объединяет несколько объектов со свойствами с учётом классов и стилей в них.
 * @param values list of input values / список входных значений
 * @returns merged object / объединенный объект
 */
export declare function toBinds<R extends ItemList = ItemList>(...values: (ItemList | null | undefined)[]): ConstrBind<R>;
