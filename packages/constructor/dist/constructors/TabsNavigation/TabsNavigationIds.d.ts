import { ListDataRef, NumberOrString } from '@dxtmisha/functional';
import { TabsNavigationProps } from './props';
import { TabsNavigationIdsList } from './basicTypes.ts';
import { ComputedRef } from 'vue';
/**
 * Class for generating and managing element IDs for tabs.
 *
 * Класс для генерации и управления идентификаторами элементов вкладок.
 */
export declare class TabsNavigationIds {
    protected readonly props: TabsNavigationProps;
    protected readonly data: ListDataRef;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param data object for working with data/ объект для работы с данными
     */
    constructor(props: TabsNavigationProps, data: ListDataRef);
    /**
     * List of generated IDs.
     *
     * Список сгенерированных идентификаторов.
     */
    readonly ids: ComputedRef<TabsNavigationIdsList>;
    /**
     * Returns the ID by value.
     *
     * Возвращает идентификатор по значению.
     * @param value value/ значение
     */
    getIdByValue(value?: NumberOrString): string;
}
