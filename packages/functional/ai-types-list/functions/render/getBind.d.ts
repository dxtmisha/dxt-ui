// md5:92fd9f6e07b86463aee9309175234900
import { type ItemList } from '@dxtmisha/functional-basic';
import type { ConstrBind } from '../../types/constructorTypes';
/**
 * A function for generating properties for a subcomponent.
 *
 * Функция для генерации свойств для подкомпонента.
 * @param value input value. Can be an object if you need to pass multiple properties /
 * входное значение. Может быть объектом, если надо передать несколько свойств
 * @param nameExtra additional parameter or property name / дополнительный параметр или имя свойства
 * @param name property name / имя свойства
 * @param except exclude the rule requiring the presence of a primary key /
 * исключить правило обязательности наличия главного ключа
 * @returns generated properties object / сгенерированный объект свойств
 */
export declare function getBind<T = unknown, R extends ItemList = ItemList>(value: T | R | undefined | null, nameExtra?: ItemList | string | undefined, name?: string, except?: boolean): ConstrBind<R>;
