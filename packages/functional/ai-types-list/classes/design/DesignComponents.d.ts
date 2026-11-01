// md5:8d8ce24e7fc2f2e3c3c52b808b58e4d8
import { type ComputedRef, type VNode } from 'vue';
import type { RawChildren, RawSlots } from '../../types/refTypes';
import type { ConstrComponent, ConstrComponentMod, ConstrItem } from '../../types/constructorTypes';
/**
 * Typed registry of connected Vue components. It resolves components by name, caches computed modification maps, merges props, and creates VNodes with consistent keys.
 *
 * Типизированный реестр подключённых компонентов Vue. Находит компоненты по имени, кэширует вычисляемые модификации, объединяет свойства и создаёт VNode с согласованными ключами.
 */
export declare class DesignComponents<COMP extends ConstrComponent = ConstrComponent, P extends ConstrItem = ConstrItem> {
    protected readonly components: COMP;
    protected readonly modification?: ConstrComponentMod<P> | undefined;
    /** Cache for computed properties / Кэш для вычисляемых свойств */
    protected readonly caching: Record<string, ComputedRef<ConstrItem>>;
    /**
     * Initializes DesignComponents with the supplied configuration.
     *
     * Инициализирует DesignComponents с переданными настройками.
     * @param components Connected component registry. / Реестр подключённых компонентов.
     * @param modification Per-index default prop maps, optionally reactive. / Карты свойств по умолчанию по индексам, могут быть реактивными.
     */
    constructor(components?: COMP, modification?: ConstrComponentMod<P> | undefined);
    /**
     * Checks whether a registry entry contains a component.
     *
     * Проверяет наличие компонента в записи реестра.
     * @param name Connected component registry key. / Ключ подключённого компонента в реестре.
     * @returns Whether the described condition is satisfied. / Выполнено ли описанное условие.
     */
    is<K extends keyof COMP>(name: K): name is K;
    /**
     * Returns the registry entry without creating a VNode.
     *
     * Возвращает запись реестра без создания VNode.
     * @param name Connected component registry key. / Ключ подключённого компонента в реестре.
     * @returns Connected component registry entry. / Запись реестра подключённых компонентов.
     */
    get<K extends keyof COMP>(name: K): COMP[K];
    /**
     * Caches the computed defaults for an index and merges explicit props using `toBinds`. Without a nonempty index, returns the supplied props unchanged.
     *
     * Кэширует вычисляемые значения по индексу и объединяет явные свойства через `toBinds`. Без непустого индекса возвращает исходные свойства без изменений.
     * @param index Entry or modification index. / Индекс записи либо модификации.
     * @param props Input properties. / Входные свойства.
     * @returns Merged prop map or the unchanged props when no index is supplied. / Объединённая карта свойств либо исходные свойства без индекса.
     */
    getModification<K extends keyof P>(index?: K & string | string, props?: P[K] | ConstrItem): ConstrItem | undefined;
    /**
     * Wraps the rendered VNode in an array; returns an empty array for a missing component.
     *
     * Оборачивает VNode в массив; возвращает пустой массив для отсутствующего компонента.
     * @param name Connected component registry key. / Ключ подключённого компонента в реестре.
     * @param props Input properties. / Входные свойства.
     * @param children Child content or an optional VNode accumulator. / Дочернее содержимое либо необязательный массив VNode.
     * @param index Entry or modification index. / Индекс записи либо модификации.
     * @returns Single-VNode array or an empty array. / Массив из одного VNode либо пустой массив.
     */
    render<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode[];
    /**
     * Creates one VNode with merged props and children. Returns `undefined` for a missing component.
     *
     * Создаёт один VNode с объединёнными свойствами и дочерними элементами. Возвращает `undefined` для отсутствующего компонента.
     * @param name Connected component registry key. / Ключ подключённого компонента в реестре.
     * @param props Input properties. / Входные свойства.
     * @param children Child content or an optional VNode accumulator. / Дочернее содержимое либо необязательный массив VNode.
     * @param index Entry or modification index. / Индекс записи либо модификации.
     * @returns Rendered VNode, or undefined when the component is missing. / Отрендеренный VNode либо undefined при отсутствии компонента.
     */
    renderOne<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode | undefined;
    /**
     * Appends rendered nodes to an existing array and returns the same registry for chaining.
     *
     * Добавляет отрендеренные узлы в существующий массив и возвращает тот же реестр для цепочек вызовов.
     * @param item Existing array to append rendered nodes to. / Существующий массив для добавления отрендеренных узлов.
     * @param name Connected component registry key. / Ключ подключённого компонента в реестре.
     * @param props Input properties. / Входные свойства.
     * @param children Child content or an optional VNode accumulator. / Дочернее содержимое либо необязательный массив VNode.
     * @param index Entry or modification index. / Индекс записи либо модификации.
     * @returns The current instance for chaining. / Текущий экземпляр для цепочек вызовов.
     */
    renderAdd<K extends keyof COMP, PK extends keyof P>(item: unknown[], name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): this;
    /**
     * Calculates modified input data for connected components.
     *
     * Вычисляет модифицированные входные данные для подключенных компонентов.
     * @param index Entry or modification index. / Индекс записи либо модификации.
     * @returns Modified properties. / Модифицированные свойства.
     */
    protected computeModification<K extends keyof P>(index: K & string | string): ConstrItem;
}
