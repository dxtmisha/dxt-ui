import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { ClientOnly } from './ClientOnly';
import { ClientOnlyPropsBasic } from './props';
import { ClientOnlyClasses, ClientOnlyComponents, ClientOnlyEmits, ClientOnlyExpose, ClientOnlySlots } from './types';
/**
 * ClientOnlyDesign
 */
export declare class ClientOnlyDesign<COMP extends ClientOnlyComponents, EXPOSE extends ClientOnlyExpose, CLASSES extends ClientOnlyClasses, P extends ClientOnlyPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, ClientOnlyEmits, EXPOSE, ClientOnlySlots, CLASSES, P> {
    protected readonly item: ClientOnly;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor constructors item class/ класс элемента конструкторов
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ClientOnlyEmits, P>, ItemConstructor?: typeof ClientOnly);
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
}
