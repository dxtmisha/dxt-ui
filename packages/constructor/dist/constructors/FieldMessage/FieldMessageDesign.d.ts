import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { FieldMessage } from './FieldMessage';
import { FieldMessagePropsBasic } from './props';
import { FieldMessageClasses, FieldMessageComponents, FieldMessageEmits, FieldMessageExpose, FieldMessageSlots } from './types';
/**
 * FieldMessageDesign
 */
export declare class FieldMessageDesign<COMP extends FieldMessageComponents, EXPOSE extends FieldMessageExpose, CLASSES extends FieldMessageClasses, P extends FieldMessagePropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, FieldMessageEmits, EXPOSE, FieldMessageSlots, CLASSES, P> {
    protected readonly item: FieldMessage;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, FieldMessageEmits, P>);
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
     * Rendering text.
     *
     * Рендеринг текста.
     */
    protected renderInfo: () => VNode[];
    /**
     * Rendering error.
     *
     * Рендеринг ошибки.
     */
    protected renderError: () => VNode[];
}
