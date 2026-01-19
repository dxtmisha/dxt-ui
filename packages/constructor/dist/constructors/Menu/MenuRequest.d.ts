import { ListRecord, ListList, ListDataBasic } from '@dxtmisha/functional';
import { MenuProps } from './props';
import { Ref, ComputedRef } from 'vue';
import { ListItemPropsBasic } from '../ListItem';
import { IconPropsBasic } from '../Icon';
import { ImagePropsBasic } from '../Image';
import { BadgePropsBasic } from '../Badge';
import { ProgressPropsBasic } from '../Progress';
/**
 * Class for working with list data requests.
 *
 * Класс для работы с запросами данных списка.
 */
export declare class MenuRequest {
    protected readonly props: MenuProps;
    readonly progress: Ref<boolean, boolean>;
    protected readonly buffer: Ref<ListRecord | undefined, ListRecord | undefined>;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: MenuProps);
    /**
     * Returns current list data.
     *
     * Возвращает текущие данные списка.
     */
    readonly item: ComputedRef<Record<string, any> | ListList<ListDataBasic> | ListList<ListItemPropsBasic<IconPropsBasic<ImagePropsBasic>, BadgePropsBasic<IconPropsBasic<ImagePropsBasic>>, ProgressPropsBasic>>>;
    /**
     * Checks whether a request is needed.
     *
     * Проверяет, нужно ли делать запрос.
     */
    is(): boolean;
    /**
     * Prepares data.
     *
     * Подготавливает данные.
     */
    preparation(): Promise<boolean>;
    /**
     * Updates data.
     *
     * Обновляет данные.
     */
    update(): Promise<void>;
    /**
     * Returns data from AJAX or request function.
     *
     * Возвращает данные из AJAX или функции запроса.
     */
    protected getAjax(): Promise<ListRecord | undefined>;
    /**
     * Executes a request to retrieve data.
     *
     * Выполняет запрос для получения данных.
     */
    protected read(callback: (data: ListRecord | undefined) => void): Promise<void>;
}
