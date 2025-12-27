import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Section } from './Section';
import { SectionPropsBasic } from './props';
import { SectionClasses, SectionComponents, SectionEmits, SectionExpose, SectionSlots } from './types';
/**
 * SectionDesign
 */
export declare class SectionDesign<COMP extends SectionComponents, EXPOSE extends SectionExpose, CLASSES extends SectionClasses, P extends SectionPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, SectionEmits, EXPOSE, SectionSlots, CLASSES, P> {
    protected readonly item: Section;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, SectionEmits, P>);
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
