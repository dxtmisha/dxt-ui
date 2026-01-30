import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Button } from './Button';
import { ButtonPropsBasic } from './props';
import { ButtonClasses, ButtonComponents, ButtonEmits, ButtonExpose, ButtonSlots } from './types';
/**
 * ButtonDesign
 */
export declare class ButtonDesign<COMP extends ButtonComponents, EXPOSE extends ButtonExpose, CLASSES extends ButtonClasses, P extends ButtonPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, ButtonEmits, EXPOSE, ButtonSlots, CLASSES, P> {
    protected readonly item: Button;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor button item class/ класс элемента кнопки
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ButtonEmits, P>, ItemConstructor?: typeof Button);
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
