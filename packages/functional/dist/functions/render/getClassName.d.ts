import { ItemList } from '../../types/basicTypes';
/**
 * Returns the name of the class from the property.
 *
 * Возвращает название класса из свойства.
 * @param props property of the component/ свойство компонента
 */
export declare function getClassName<T extends ItemList>(props?: T): string | undefined;
