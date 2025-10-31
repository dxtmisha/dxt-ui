import { VNode, ComputedRef } from 'vue';
import { SkeletonInclude } from '../constructors/Skeleton';
import { DescriptionProps, DescriptionSlots } from '../types/descriptionTypes';
/**
 * Use for adding description text
 *
 * Использование для добавления описания текста
 */
export declare class DescriptionInclude {
    protected readonly props: Readonly<DescriptionProps>;
    protected readonly className: string;
    protected readonly slots?: DescriptionSlots | undefined;
    protected readonly skeleton?: SkeletonInclude | undefined;
    /**
     * Constructor
     * @param props input property/ входное свойство
     * @param className class name/ название класса
     * @param slots object for working with slots/ объект для работы со слотами
     * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
     */
    constructor(props: Readonly<DescriptionProps>, className: string, slots?: DescriptionSlots | undefined, skeleton?: SkeletonInclude | undefined);
    /**
     * Check for the presence of a description
     *
     * Проверка наличия описания
     */
    readonly is: ComputedRef<boolean>;
    /**
     * Render the description
     *
     * Рендер описания
     */
    render(): VNode[];
}
