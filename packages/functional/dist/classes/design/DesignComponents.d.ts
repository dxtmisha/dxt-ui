import { ComputedRef, VNode } from 'vue';
import { RawChildren, RawSlots } from '../../types/refTypes';
import { ConstrComponent, ConstrComponentMod, ConstrItem } from '../../types/constructorTypes';
/**
 * Class for working with connected components.
 *
 * Класс для работы с подключенными компонентами.
 */
export declare class DesignComponents<COMP extends ConstrComponent, P extends ConstrItem> {
    protected readonly components: COMP;
    protected readonly modification?: ConstrComponentMod<P> | undefined;
    /** Cache for computed properties/ Кэш для вычисляемых свойств */
    protected caching: Record<string, ComputedRef<any>>;
    /**
     * Constructor
     * @param components list of connected components/ список подключенных компонентов
     * @param modification data for modification/ данные для модификации
     */
    constructor(components?: COMP, modification?: ConstrComponentMod<P> | undefined);
    /**
     * Check the presence of the component.
     *
     * Проверить наличие компонента.
     * @param name name of the component/ названия компонента
     */
    is<K extends keyof COMP>(name: K): name is K;
    /**
     * Getting the object of the component.
     *
     * Получение объекта компонента.
     * @param name name of the component/ названия компонента
     */
    get<K extends keyof COMP>(name: K): COMP[K];
    /**
     * Returns the modified input data of the connected components.
     *
     * Возвращает модифицированные входные данные у подключенных компонентов.
     * @param index the name of this/ название данного
     * @param props basic data/ базовые данные
     */
    getModification<K extends keyof P>(index?: K & string | string, props?: P[K] | Record<string, any>): Record<string, any> | undefined;
    /**
     * Rendering a component by its name and returning an array with one component.
     *
     * Рендеринг компонента по его имени и возвращение массива с одним компонентом.
     * @param name name of the component/ названия компонента
     * @param props property of the component/ свойство компонента
     * @param children sub-elements of the component/ под элементы компонента
     * @param index the name of the key/ названия ключа
     */
    render<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode[];
    /**
     * Rendering a component by its name.
     *
     * Рендеринг компонента по его имени.
     * @param name name of the component/ названия компонента
     * @param props property of the component/ свойство компонента
     * @param children sub-elements of the component/ под элементы компонента
     * @param index the name of the key/ названия ключа
     */
    renderOne<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode | undefined;
    /**
     * Rendering the component by its name.
     *
     * Рендеринг компонента по его имени.
     * @param item an array to which the rendered object will be added/
     * массив, по которому будет добавлять объект
     * @param name name of the component/ названия компонента
     * @param props property of the component/ свойство компонента
     * @param children sub-elements of the component/ под элементы компонента
     * @param index the name of the key/ названия ключа
     */
    renderAdd<K extends keyof COMP, PK extends keyof P>(item: any[], name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): this;
    /**
     * Calculates modified input data for connected components.
     *
     * Вычисляет модифицированные входные данные для подключенных компонентов.
     * @param index the name of this/ название данного
     */
    protected computeModification<K extends keyof P>(index: K & string | string): Record<string, any>;
}
