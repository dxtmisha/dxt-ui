import { VNode, ComputedRef } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Field } from './Field';
import { FieldPropsBasic } from './props';
import { FieldClasses, FieldComponents, FieldEmits, FieldExpose, FieldSlots } from './types';
/**
 * FieldDesign
 */
export declare class FieldDesign<COMP extends FieldComponents, EXPOSE extends FieldExpose, CLASSES extends FieldClasses, P extends FieldPropsBasic> extends DesignConstructorAbstract<HTMLLabelElement, COMP, FieldEmits, EXPOSE, FieldSlots, CLASSES, P> {
    protected readonly item: Field;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, FieldEmits, P>);
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
     * Generates body.
     *
     * Генерирует тело.
     */
    readonly renderBody: () => VNode[];
    /**
     * Generates data for the title.
     *
     * Генерирует данные для заголовка.
     */
    readonly renderBodyLabel: () => VNode;
    /**
     * Generates data for additional controls.
     *
     * Генерирует данные для дополнительных управлений.
     */
    readonly renderBodyScoreboard: () => VNode;
    /**
     * Generates data for the slot.
     *
     * Генерирует данные для слота.
     */
    readonly renderBodyScoreboardSlot: () => VNode[];
    /**
     * Generates all available icons.
     *
     * Генерирует все доступные иконки.
     */
    readonly renderBodyScoreboardIcon: () => VNode[];
    /**
     * Generates separators and additional descriptions.
     *
     * Генерирует разделители и дополнительные описания.
     */
    readonly renderBodyScoreboardSpace: () => VNode[];
    /**
     * Generates border.
     *
     * Генерирует border.
     */
    readonly renderBodyBorder: () => VNode;
    /**
     * Value for focus.
     *
     * Значение для фокуса.
     */
    protected readonly focusValue: () => string;
    /**
     * Length value.
     *
     * Значение длины.
     */
    protected readonly lengthValue: () => string | undefined;
    /**
     * Element for counting characters.
     *
     * Элемент для подсчёта символов.
     */
    protected readonly lengthElement: ComputedRef<HTMLInputElement | undefined>;
    /**
     * Input element.
     *
     * Элемент ввода.
     */
    protected readonly inputElement: ComputedRef<HTMLInputElement | undefined>;
}
