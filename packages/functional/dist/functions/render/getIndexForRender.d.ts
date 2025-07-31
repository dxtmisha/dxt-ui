import { ItemList } from '../../types/basicTypes';
/**
 * Returns or generates a new element.
 *
 * Возвращает или генерирует новый элемент.
 * @param name name of the component/ названия компонента
 * @param props property of the component/ свойство компонента
 * @param index the name of the key/ названия ключа
 */
export declare function getIndexForRender<T extends ItemList>(name: string, props?: T, index?: string): string;
