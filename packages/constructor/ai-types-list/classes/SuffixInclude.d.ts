// md5:950a1d70536047adf4d65354c5c4b059
import { VNode } from 'vue';
import { SkeletonInclude } from '../constructors/Skeleton';
import { SuffixProps, SuffixSlots } from '../types/suffixTypes';
/**
 * Class for managing the state, identification, and rendering of the component's suffix element.
 * It handles checking if the suffix has content from props or slots, resolving its unique ID,
 * and generating the suffix virtual DOM node.
 *
 * Класс для управления состоянием, идентификацией и рендерингом элемента суффикса (suffix) компонента.
 * Он проверяет наличие содержимого суффикса из свойств или слотов, разрешает его уникальный ID
 * и генерирует виртуальный узел DOM суффикса.
 */
export declare class SuffixInclude {
    protected readonly props: Readonly<SuffixProps>;
    protected readonly className: string;
    protected readonly slots?: SuffixSlots | undefined;
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
    constructor(props: Readonly<SuffixProps>, className: string, slots?: SuffixSlots | undefined, skeleton?: SkeletonInclude | undefined);
    /**
     * Returns true if the suffix is filled.
     *
     * Возвращает true, если suffix заполнен.
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
     * Renders suffix element with content from props or slots.
     *
     * Отображает элемент suffix с содержимым из props или slots.
     * @returns list of virtual nodes / список виртуальных узлов
     */
    render(): VNode[];
}
