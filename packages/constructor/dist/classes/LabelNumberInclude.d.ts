import { VNode } from 'vue';
import { ConstrClass } from '@dxt-ui/functional';
import { LabelInclude } from './LabelInclude';
import { SkeletonInclude } from '../constructors/Skeleton';
import { LabelNumberProps, LabelNumberSlots } from '../types/labelTypes';
/**
 * The LabelNumberInclude class extends LabelInclude to handle numeric labels.
 * Allows converting and displaying numeric values with respect to maximum constraints.
 *
 * Класс LabelNumberInclude расширяет LabelInclude для работы с числовыми метками.
 * Позволяет преобразовывать и отображать числовые значения с учетом максимальных ограничений.
 */
export declare class LabelNumberInclude extends LabelInclude {
    protected readonly props: Readonly<LabelNumberProps>;
    protected readonly className: string;
    protected readonly classesExtra?: ConstrClass | undefined;
    protected readonly slots?: LabelNumberSlots | undefined;
    protected readonly elementsExtra?: (() => VNode[]) | undefined;
    protected readonly skeleton?: SkeletonInclude | undefined;
    /**
     * Constructor for working with text that has maximum values.
     *
     * Конструктор для работы с текстом, у которого есть максимальные значения.
     * @param props input property/ входное свойство
     * @param className class name/ название класса
     * @param classesExtra additional classes/ дополнительные классы
     * @param slots object for working with slots/ объект для работы со слотами
     * @param elementsExtra additional elements/ дополнительные элементы
     * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
     */
    constructor(props: Readonly<LabelNumberProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: LabelNumberSlots | undefined, elementsExtra?: (() => VNode[]) | undefined, skeleton?: SkeletonInclude | undefined);
    /**
     * Returns text with conversion to maximum values.
     *
     * Возвращает текст с преобразованием в максимальные значения.
     */
    protected getNumber(): string | undefined;
}
