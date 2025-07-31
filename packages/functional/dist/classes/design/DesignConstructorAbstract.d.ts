import { ComputedRef, ToRefs, VNode, Ref } from 'vue';
import { DesignComponents } from './DesignComponents';
import { ConstrClass, ConstrClasses, ConstrClassObject, ConstrComponent, ConstrEmit, ConstrItem, ConstrOptions, ConstrStyles } from '../../types/constructorTypes';
/**
 * Class for collecting all functional components.
 *
 * Класс для сбора всех функциональных компонентов.
 */
export declare abstract class DesignConstructorAbstract<E extends Element, COMP extends ConstrComponent, EMITS extends ConstrItem, EXPOSE extends ConstrItem, SLOTS extends ConstrItem, CLASSES extends ConstrClasses, P extends ConstrItem> {
    protected readonly props: Readonly<P>;
    protected readonly options?: ConstrOptions<COMP, EMITS, P> | undefined;
    protected readonly name: string[];
    protected readonly element: Ref<E | undefined, E | undefined>;
    protected readonly refs: ToRefs<P>;
    protected readonly components: DesignComponents<COMP, P>;
    protected readonly emits?: ConstrEmit<EMITS>;
    protected readonly classes?: ComputedRef<ConstrClasses>;
    protected classesSub?: ComputedRef<Partial<CLASSES>>;
    protected readonly styles?: ComputedRef<ConstrStyles>;
    protected stylesSub?: ComputedRef<ConstrStyles>;
    protected attrs?: ConstrItem;
    protected slots?: SLOTS;
    protected dataExpose?: EXPOSE;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    protected constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, EMITS, P> | undefined);
    protected init(): this;
    /**
     * Getting the class name.
     *
     * Получение названия класса.
     */
    getName(): string;
    /**
     * Getting the class name.
     *
     * Получение названия дизайна.
     */
    getDesign(): string;
    /**
     * Getting the class name.
     *
     * Получение названия класса.
     * @param name list of class names by levels/ список названий классов по уровням
     */
    getSubClass(name: string | string[]): string;
    /**
     * Getting the class name for the status.
     *
     * Получение названия класса для статуса.
     * @param name list of class names by levels/ список названий классов по уровням
     */
    getStatusClass(name: string | string[]): string;
    /**
     * Getting the property name for the style.
     *
     * Получение названия свойства для стиля.
     * @param name list of class names by levels/ список названий классов по уровням
     */
    getStyle(name: string | string[]): string;
    /**
     * Getting additional parameters.
     *
     * Получение дополнительных параметров.
     */
    getAttrs(): ConstrItem;
    /**
     * List of available external variables.
     *
     * Список доступных переменных извне.
     */
    expose(): EXPOSE;
    /**
     * The rendering method for the setup method.
     *
     * Метод рендеринга для метода настройки.
     */
    render(): () => VNode | (VNode | any)[] | undefined;
    /**
     * Initialization of all the necessary properties for work
     *
     * Инициализация всех необходимых свойств для работы.
     */
    protected abstract initExpose(): EXPOSE;
    /**
     * Improvement of the obtained list of classes.
     *
     * Доработка полученного списка классов.
     */
    protected abstract initClasses(): Partial<CLASSES>;
    /**
     * Refinement of the received list of styles.
     *
     * Доработка полученного списка стилей.
     */
    protected abstract initStyles(): ConstrStyles;
    /**
     * A method for rendering.
     *
     * Метод для рендеринга.
     */
    protected abstract initRender(): VNode | (VNode | any)[] | undefined;
    /**
     * Initializes the slot.
     *
     * Инициализирует слот.
     * @param name slot name/ название слота
     * @param children if you pass this element, the slot will be added to it/
     * если передать этот элемент, то слот добавится в него
     * @param props property for the slot/ свойство для слота
     */
    protected initSlot<K extends keyof SLOTS>(name: K, children?: any[], props?: ConstrItem): VNode | undefined;
    /**
     * Transformation of the class value into an object.
     *
     * Преобразование значения класса в объект.
     * @param classes list of classes for transformation/ список классов для преобразования
     */
    protected toClass(classes?: ConstrClass): ConstrClassObject;
    /**
     * Converts the class name to standard for the current component.
     *
     * Преобразовывает название класса в стандартное для текущего компонента.
     * @param classes list of classes/ список классов
     */
    protected toClassName<T extends ConstrItem>(classes?: ConstrItem): T;
    /**
     * Getting component names as an array.
     *
     * Получение названий компонентов в виде массива.
     * @param name component name for transformation/ название компонента для преобразования
     */
    private initName;
    /**
     * Updating data about the class.
     *
     * Обновление данных об классе.
     */
    private updateClasses;
    /**
     * Refinement of the received list of styles.
     *
     * Доработка полученного списка стилей.
     */
    private updateStyles;
}
