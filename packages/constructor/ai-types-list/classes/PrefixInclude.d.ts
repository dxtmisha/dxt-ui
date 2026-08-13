// md5:0632e37d821818c149d0f7a347333a57
import { VNode } from 'vue';
import { SkeletonInclude } from '../constructors/Skeleton';
import { PrefixProps, PrefixSlots } from '../types/prefixTypes';
/**
 * Class for managing the state, identification, and rendering of the component's prefix element.
 * It handles checking if the prefix has content from props or slots, resolving its unique ID,
 * and generating the prefix virtual DOM node.
 *
 * Класс для управления состоянием, идентификацией и рендерингом элемента префикса (prefix) компонента.
 * Он проверяет наличие содержимого префикса из свойств или слотов, разрешает его уникальный ID
 * и генерирует виртуальный узел DOM префикса.
 */
export declare class PrefixInclude {
    protected readonly props: Readonly<PrefixProps>;
    protected readonly className: string;
    protected readonly slots?: PrefixSlots | undefined;
    protected readonly skeleton?: SkeletonInclude | undefined;
    /** Default element identifier / Идентификатор элемента по умолчанию */
    protected readonly elementIdDefault: string;
    /**
     * Constructor
     *
     * Конструктор
     * @param props input property / входное свойство
     * @param className class name / название класса
     * @param slots object for working with slots / объект для работы со слотами
     * @param skeleton optional skeleton for loading state / необязательный скелетон для состояния загрузки
     */
    constructor(props: Readonly<PrefixProps>, className: string, slots?: PrefixSlots | undefined, skeleton?: SkeletonInclude | undefined);
    /**
     * Returns true if the prefix is filled.
     *
     * Возвращает true, если prefix заполнен.
     * @returns checking state / состояние проверки
     */
    get is(): boolean;
    /**
     * Unique identifier.
     *
     * Уникальный идентификатор.
     * @returns unique identifier string / строка уникального идентификатора
     */
    get id(): string;
    /**
     * Returns the identifier if the element exists.
     *
     * Возвращает идентификатор, если элемент существует.
     * @returns unique identifier or empty string / уникальный идентификатор или пустая строка
     */
    get describedby(): string;
    /**
     * Renders prefix element with content from props or slots.
     *
     * Отображает элемент prefix с содержимым из props или slots.
     * @returns list of virtual nodes / список виртуальных узлов
     */
    render(): VNode[];
}
