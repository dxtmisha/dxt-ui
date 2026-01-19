import { VNode, ComputedRef } from 'vue';
import { SkeletonInclude } from '../constructors/Skeleton';
import { SuffixProps, SuffixSlots } from '../types/suffixTypes';
/**
 * Class for working with suffix.
 *
 * Класс для работы с suffix.
 */
export declare class SuffixInclude {
    protected readonly props: Readonly<SuffixProps>;
    protected readonly className: string;
    protected readonly slots?: SuffixSlots | undefined;
    protected readonly skeleton?: SkeletonInclude | undefined;
    /**
     * Constructor
     * @param props input property/ входное свойство
     * @param className class name/ название класса
     * @param slots object for working with slots/ объект для работы со слотами
     * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
     */
    constructor(props: Readonly<SuffixProps>, className: string, slots?: SuffixSlots | undefined, skeleton?: SkeletonInclude | undefined);
    /**
     * Returns true if suffix is filled
     *
     * Возвращает true, если suffix заполнен
     */
    readonly is: ComputedRef<boolean>;
    /**
     * Renders suffix element with content from props or slots.
     *
     * Отображает элемент suffix с содержимым из props или slots.
     */
    render(): VNode[];
}
