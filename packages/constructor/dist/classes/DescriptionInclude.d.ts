import { VNode, ComputedRef } from 'vue';
import { SkeletonInclude } from '../constructors/Skeleton';
import { DescriptionExpose, DescriptionProps, DescriptionSlots } from '../types/descriptionTypes';
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
    /** Unique identifier/ Уникальный идентификатор */
    protected id: string;
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
    /** Description expose reference/ Ссылка на expose описания */
    readonly expose: DescriptionExpose;
    /**
     * Get description ID
     *
     * Получить ID описания
     */
    getId(): string;
    /**
     * Render the description
     *
     * Рендер описания
     */
    render(): VNode[];
}
