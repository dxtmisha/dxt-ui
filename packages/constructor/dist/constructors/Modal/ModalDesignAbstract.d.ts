import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { ModalAbstract } from './ModalAbstract';
import { WindowControlItem } from '../Window';
import { ModalPropsBasic } from './props';
import { ModalClasses, ModalComponents, ModalEmits, ModalExpose, ModalSlots } from './types';
/**
 * ModalDesign
 */
export declare abstract class ModalDesignAbstract<COMP extends ModalComponents, EMITS extends ModalEmits, EXPOSE extends ModalExpose, SLOTS extends ModalSlots, CLASSES extends ModalClasses, P extends ModalPropsBasic, ITEM extends ModalAbstract = ModalAbstract> extends DesignConstructorAbstract<HTMLDivElement, COMP, EMITS, EXPOSE, SLOTS, CLASSES, P> {
    protected readonly item: ITEM;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor window item class/ класс элемента окна
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, EMITS, P>, ItemConstructor?: typeof ModalAbstract);
    /**
     * Initialization of the main item
     *
     * Инициализация основного элемента
     */
    protected abstract initItem(ItemConstructor?: typeof ModalAbstract): ITEM;
    /**
     * Initialization of all the necessary properties for work
     *
     * Инициализация всех необходимых свойств для работы.
     */
    protected initExpose(): EXPOSE;
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
     * Generates data for control.<br>
     * Генерирует данные для контроля.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    protected readonly renderControl: (props: WindowControlItem) => VNode | undefined;
    /**
     * Generates data for the header.
     *
     * Генерирует данные для заголовка.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    protected readonly renderTitle: (props: WindowControlItem) => VNode[];
    /**
     * Generates bodies.
     *
     * Генерирует тела.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    protected readonly renderDefault: (props: WindowControlItem) => VNode[];
    /**
     * Generates data for the required part.
     *
     * Генерирует данные для нужной части.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    protected readonly renderFooter: (props: WindowControlItem) => VNode[];
}
