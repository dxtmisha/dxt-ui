import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Accordion } from './Accordion';
import { MotionTransformControlItem } from '../MotionTransform';
import { AccordionProps } from './props';
import { AccordionClasses, AccordionComponents, AccordionEmits, AccordionExpose, AccordionSlots } from './types';
/**
 * AccordionDesign
 */
export declare class AccordionDesign<COMP extends AccordionComponents, EXPOSE extends AccordionExpose, CLASSES extends AccordionClasses, P extends AccordionProps> extends DesignConstructorAbstract<HTMLDivElement, COMP, AccordionEmits, EXPOSE, AccordionSlots, CLASSES, P> {
    protected readonly item: Accordion;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, AccordionEmits, P>);
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
    protected initRender(): VNode[];
    /**
     * Generates data for the header.
     *
     * Генерирует данные для заголовка.
     * @param open open status/ статус открытия
     */
    protected readonly renderHead: ({ isOpen, binds }: MotionTransformControlItem) => VNode | undefined;
    /**
     * Generates data for the body.
     *
     * Генерирует данные для тела.
     */
    protected readonly renderBody: (props: any) => VNode;
}
