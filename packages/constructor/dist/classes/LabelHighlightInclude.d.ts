import { VNode } from 'vue';
import { ConstrClass } from '@dxt-ui/functional';
import { LabelInclude } from './LabelInclude';
import { SkeletonInclude } from '../constructors/Skeleton';
import { LabelHighlightProps, LabelHighlightSlots } from '../types/labelTypes';
/**
 * The LabelHighlightInclude class extends LabelInclude to add support for highlighting parts of text.
 * Used to display a label with the ability to highlight specific parts.
 *
 * Класс LabelHighlightInclude расширяет LabelInclude и добавляет поддержку выделения частей текста.
 * Используется для отображения метки с возможностью выделения определённых частей.
 */
export declare class LabelHighlightInclude extends LabelInclude {
    protected readonly props: Readonly<LabelHighlightProps>;
    protected readonly className: string;
    protected readonly classesExtra?: ConstrClass | undefined;
    protected readonly slots?: LabelHighlightSlots | undefined;
    protected readonly elementsExtra?: (() => VNode[]) | undefined;
    protected readonly skeleton?: SkeletonInclude | undefined;
    /**
     * Constructor for the LabelHighlightInclude class.
     *
     * Конструктор для класса LabelHighlightInclude.
     * @param props input property/ входное свойство
     * @param className class name/ название класса
     * @param classesExtra additional classes/ дополнительные классы
     * @param slots object for working with slots/ объект для работы со слотами
     * @param elementsExtra additional elements/ дополнительные элементы
     * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
     */
    constructor(props: Readonly<LabelHighlightProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: LabelHighlightSlots | undefined, elementsExtra?: (() => VNode[]) | undefined, skeleton?: SkeletonInclude | undefined);
    /**
     * Returns a string with highlighted parts.
     * If highlighting is not required, returns the original string.
     *
     * Возвращает строку с выделенными частями.
     * Если выделение не требуется, возвращает исходную строку.
     */
    protected getLabel: () => string | undefined;
    /**
     * Returns the minimum length of the string to start highlighting.
     *
     * Возвращает минимальную длину строки для начала выделения.
     */
    protected getLengthStart(): number;
}
