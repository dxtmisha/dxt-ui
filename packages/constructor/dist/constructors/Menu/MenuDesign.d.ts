import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Menu } from './Menu';
import { WindowControlItem } from '../Window';
import { MenuControlItem } from './basicTypes';
import { MenuPropsBasic } from './props';
import { MenuClasses, MenuComponents, MenuEmits, MenuExpose, MenuSlots } from './types';
/**
 * MenuDesign
 */
export declare class MenuDesign<COMP extends MenuComponents, EXPOSE extends MenuExpose, CLASSES extends MenuClasses, P extends MenuPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, MenuEmits, EXPOSE, MenuSlots, CLASSES, P> {
    protected readonly item: Menu;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor class for working with the item/ класс для работы с элементом
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, MenuEmits, P>, ItemConstructor?: typeof Menu);
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
     * Generates data for control.
     *
     * Генерирует данные для контроля.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    readonly renderControl: (props: WindowControlItem) => VNode | undefined;
    /**
     * Render title element.
     *
     * Рендер элемента заголовка.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    readonly renderTitle: (props: WindowControlItem) => VNode[];
    /**
     * Render list element.
     *
     * Рендер элемента списка.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    readonly renderList: (props: WindowControlItem) => VNode | undefined;
    /**
     * Render footer element.
     *
     * Рендер элемента футера.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    readonly renderFooter: (props: WindowControlItem) => VNode | undefined;
    /**
     * Generates data for control.
     *
     * Генерирует данные для контроля.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    protected getBinds(props: WindowControlItem): MenuControlItem;
}
