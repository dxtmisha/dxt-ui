import { VNode, Ref } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Arrow } from './Arrow';
import { ArrowPropsBasic } from './props';
import { ArrowClasses, ArrowComponents, ArrowEmits, ArrowExpose, ArrowSlots } from './types';
/**
 * ArrowDesign
 */
export declare class ArrowDesign<COMP extends ArrowComponents, EXPOSE extends ArrowExpose, CLASSES extends ArrowClasses, P extends ArrowPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, ArrowEmits, EXPOSE, ArrowSlots, CLASSES, P> {
    protected readonly item: Arrow;
    protected readonly points: Ref<string, string>;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor arrow item class/ класс элемента стрелки
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ArrowEmits, P>, ItemConstructor?: typeof Arrow);
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
    protected initRender(): VNode | undefined;
    /**
     * Method for rendering an arrow.
     *
     * Метод для рендеринга стрелки.
     */
    protected renderArrow(): VNode[];
    /**
     * Method for rendering a border.
     *
     * Метод для рендеринга границы.
     */
    protected renderBorder(): VNode[];
    /**
     * Gets the points for the arrow.
     *
     * Получает точки для стрелки.
     */
    protected readonly getRePoints: () => string;
}
