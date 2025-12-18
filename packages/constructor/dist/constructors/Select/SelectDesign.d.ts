import { VNode } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Select } from './Select';
import { MenuControlItem } from '../Menu';
import { FieldControl } from '../Field';
import { SelectPropsBasic } from './props';
import { SelectClasses, SelectComponents, SelectEmits, SelectExpose, SelectSlots } from './types';
/**
 * SelectDesign
 */
export declare class SelectDesign<COMP extends SelectComponents, EXPOSE extends SelectExpose, CLASSES extends SelectClasses, P extends SelectPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, SelectEmits, EXPOSE, SelectSlots, CLASSES, P> {
    protected readonly item: Select;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, SelectEmits, P>);
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
     * Rendering the menu element.
     *
     * Рендер элемента меню.
     * @param input data for the input element/ данные для элемента ввода
     */
    protected readonly renderMenu: (input: FieldControl) => VNode[];
    /**
     * Render menu control.
     *
     * Рендер элемента управления меню.
     * @param input data for the input element/ данные для элемента ввода
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    protected readonly renderMenuControl: (input: FieldControl, props: MenuControlItem) => VNode | VNode[];
    /**
     * Render input element.
     *
     * Рендер элемента ввода.
     * @param input data for the input element/ данные для элемента ввода
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    protected readonly renderMenuControlInput: (input: FieldControl, props: MenuControlItem) => VNode;
    /**
     * Render menu control in static mode.
     *
     * Рендер элемента управления меню в статическом режиме.
     * @param input data for the input element/ данные для элемента ввода
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    protected readonly renderMenuControlValue: (input: FieldControl, props: MenuControlItem) => VNode;
    /**
     * Render title element.
     *
     * Рендер элемента заголовка.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    protected readonly renderTitle: (props: MenuControlItem) => any[];
    /**
     * Render filter input.
     *
     * Рендер фильтра ввода.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    protected readonly renderFilterInput: (props: MenuControlItem) => VNode;
}
