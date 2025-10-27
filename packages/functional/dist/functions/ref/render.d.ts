import { VNode } from 'vue';
import { ItemList } from '@dxtmisha/functional-basic';
import { RawChildren, RawSlots } from '../../types/refTypes';
/**
 * Getting cached, immutable data.
 *
 * Получение кешированных, неизменяемых данных.
 * @param name name of the component/ названия компонента
 * @param props property of the component/ свойство компонента
 * @param children sub-elements of the component/ под элементы компонента
 * @param index the name of the key/ названия ключа
 */
export declare function render<T extends ItemList>(name: string, props?: T, children?: RawChildren | RawSlots, index?: string): VNode;
