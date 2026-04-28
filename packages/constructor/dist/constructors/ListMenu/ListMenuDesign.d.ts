import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { ListMenu } from './ListMenu';
import { ListMenuPropsBasic } from './props';
import { ListMenuClasses, ListMenuComponents, ListMenuEmits, ListMenuExpose, ListMenuSlots } from './types';
/**
 * ListMenuDesign
 */
export declare class ListMenuDesign<COMP extends ListMenuComponents, EXPOSE extends ListMenuExpose, CLASSES extends ListMenuClasses, P extends ListMenuPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, ListMenuEmits, EXPOSE, ListMenuSlots, CLASSES, P> {
    protected readonly item: ListMenu;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor class for working with the item/ класс для работы с элементом
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ListMenuEmits, P>, ItemConstructor?: typeof ListMenu);
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
}
