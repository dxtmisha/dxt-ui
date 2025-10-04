import { VNode, ComputedRef } from 'vue';
import { SkeletonInclude } from '../constructors/Skeleton';
import { PrefixProps, PrefixSlots } from '../types/prefixTypes';
/**
 * Class for working with prefix.
 *
 * Класс для работы с prefix.
 */
export declare class PrefixInclude {
    protected readonly props: Readonly<PrefixProps>;
    protected readonly className: string;
    protected readonly slots?: PrefixSlots | undefined;
    protected readonly skeleton?: SkeletonInclude | undefined;
    /**
     * Constructor
     * @param props input property/ входное свойство
     * @param className class name/ название класса
     * @param slots object for working with slots/ объект для работы со слотами
     * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
     */
    constructor(props: Readonly<PrefixProps>, className: string, slots?: PrefixSlots | undefined, skeleton?: SkeletonInclude | undefined);
    /**
     * Returns true if prefix is filled
     *
     * Возвращает true, если prefix заполнен
     */
    readonly is: ComputedRef<boolean>;
    /**
     * Renders prefix element with content from props or slots.
     *
     * Отображает элемент prefix с содержимым из props или slots.
     */
    render(): VNode[];
}
