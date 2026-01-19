import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Badge } from './Badge';
import { BadgePropsBasic } from './props';
import { BadgeClasses, BadgeComponents, BadgeEmits, BadgeExpose, BadgeSlots } from './types';
/**
 * BadgeDesign
 */
export declare class BadgeDesign<COMP extends BadgeComponents, EXPOSE extends BadgeExpose, CLASSES extends BadgeClasses, P extends BadgePropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, BadgeEmits, EXPOSE, BadgeSlots, CLASSES, P> {
    protected readonly item: Badge;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, BadgeEmits, P>);
    /**
     * Initialization of all the necessary properties for work
     *
     * Инициализация всех необходимых свойств для работы.
     */
    protected initExpose(): EXPOSE;
    /**
     * Improvement of the obtained list of classes.
     *
     * Доработка полученного списка классов.
     */
    protected initClasses(): Partial<CLASSES>;
    /**
     * Refinement of the received list of styles.
     *
     * Доработка полученного списка стилей.
     */
    protected initStyles(): ConstrStyles;
    /**
     * A method for rendering.
     *
     * Метод для рендеринга.
     */
    protected initRender(): VNode;
}
