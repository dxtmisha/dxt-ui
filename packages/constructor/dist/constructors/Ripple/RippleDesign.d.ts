import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Ripple } from './Ripple';
import { RipplePropsBasic } from './props';
import { RippleClasses, RippleComponents, RippleEmits, RippleExpose, RippleSlots } from './types';
/**
 * RippleDesign
 */
export declare class RippleDesign<COMP extends RippleComponents, EXPOSE extends RippleExpose, CLASSES extends RippleClasses, P extends RipplePropsBasic> extends DesignConstructorAbstract<HTMLSpanElement, COMP, RippleEmits, EXPOSE, RippleSlots, CLASSES, P> {
    protected readonly item: Ripple;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, RippleEmits, P>);
    /**
     * Initialization of all the necessary properties for work<br>
     * Инициализация всех необходимых свойств для работы.
     */
    protected initExpose(): EXPOSE;
    /**
     * Improvement of the obtained list of classes.<br>
     * Доработка полученного списка классов.
     */
    protected initClasses(): Partial<CLASSES>;
    /**
     * Refinement of the received list of styles.<br>
     * Доработка полученного списка стилей.
     */
    protected initStyles(): ConstrStyles;
    /**
     * A method for rendering.
     * Метод для рендеринга.
     */
    protected initRender(): VNode;
}
