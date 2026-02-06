import { VNode, ComputedRef } from 'vue';
import { SkeletonInclude } from '../constructors/Skeleton';
import { CaptionProps, CaptionSlots } from '../types/captionTypes';
/**
 * Class for working with caption.
 *
 * Класс для работы с caption.
 */
export declare class CaptionInclude {
    protected readonly props: Readonly<CaptionProps>;
    protected readonly className: string;
    protected readonly slots?: CaptionSlots | undefined;
    protected readonly skeleton?: SkeletonInclude | undefined;
    /**
     * Constructor
     * @param props input property/ входное свойство
     * @param className class name/ название класса
     * @param slots object for working with slots/ объект для работы со слотами
     * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
     */
    constructor(props: Readonly<CaptionProps>, className: string, slots?: CaptionSlots | undefined, skeleton?: SkeletonInclude | undefined);
    /**
     * Returns true if the caption is filled
     *
     * Возвращает true, если caption заполнен
     */
    readonly is: ComputedRef<boolean>;
    /**
     * Renders caption element with content from props or slots.
     *
     * Отображает элемент caption с содержимым из props или slots.
     */
    render(): VNode[];
}
