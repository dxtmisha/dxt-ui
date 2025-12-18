import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Actions } from './Actions';
import { ActionsPropsBasic } from './props';
import { ActionsClasses, ActionsComponents, ActionsEmits, ActionsExpose, ActionsSlots } from './types';
/**
 * ActionsDesign
 */
export declare class ActionsDesign<COMP extends ActionsComponents, EXPOSE extends ActionsExpose, CLASSES extends ActionsClasses, P extends ActionsPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, ActionsEmits, EXPOSE, ActionsSlots, CLASSES, P> {
    protected readonly item: Actions;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ActionsEmits, P>);
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
    /**
     * List rendering.
     *
     * Рендеринг списка.
     */
    protected readonly renderList: () => VNode[];
    /**
     * Secondary list rendering.
     *
     * Рендеринг вторичного списка.
     */
    protected readonly renderSecondary: () => VNode[];
    /**
     * Separator rendering.
     *
     * Рендеринг разделителя.
     */
    protected readonly renderSpacer: () => VNode[];
}
