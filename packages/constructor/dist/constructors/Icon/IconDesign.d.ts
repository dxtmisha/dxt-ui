import { VNode, ComputedRef } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Icon } from './Icon';
import { IconPropsBasic } from './props';
import { IconClasses, IconComponents, IconEmits, IconExpose, IconSlots } from './types';
/**
 * IconDesign
 */
export declare class IconDesign<COMP extends IconComponents, EXPOSE extends IconExpose, CLASSES extends IconClasses, P extends IconPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, IconEmits, EXPOSE, IconSlots, CLASSES, P> {
    protected readonly item: Icon;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, IconEmits, P>);
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
     *
     * Метод для рендеринга.
     */
    protected initRender(): VNode;
    /**
     * Computed properties for the main element.
     *
     * Вычисляемые свойства для главного элемента.
     */
    readonly propsMain: ComputedRef<any>;
    /**
     * Render the main icon.
     *
     * Рендер основной иконки.
     */
    readonly renderIcon: () => VNode | undefined;
    /**
     * Render the secondary icon.
     *
     * Рендер вторичной иконки.
     */
    readonly renderIconActive: () => VNode | undefined;
}
