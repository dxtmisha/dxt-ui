import { VNode, Ref, RendererNode, RendererElement, ComputedRef } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract, ConstrClass } from '@dxtmisha/functional';
import { MotionTransform } from './MotionTransform';
import { MotionTransformPropsBasic } from './props';
import { MotionTransformClasses, MotionTransformComponents, MotionTransformEmits, MotionTransformExpose, MotionTransformSlots } from './types';
import { RoleType, AriaList, AriaTrueOrFalse } from '../../library';
import { NumberOrString } from '@dxtmisha/functional-basic';
/**
 * MotionTransformDesign
 */
export declare class MotionTransformDesign<COMP extends MotionTransformComponents, EXPOSE extends MotionTransformExpose, CLASSES extends MotionTransformClasses, P extends MotionTransformPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, MotionTransformEmits, EXPOSE, MotionTransformSlots, CLASSES, P> {
    protected elementContext: Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
    protected readonly item: MotionTransform;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor class for working with the item/ класс для работы с элементом
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, MotionTransformEmits, P>, ItemConstructor?: typeof MotionTransform);
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
     * Rendering the main element.
     *
     * Рендеринг главного элемента.
     */
    readonly renderMain: () => VNode[];
    /**
     * Rendering the title.
     *
     * Рендеринг заголовка.
     */
    readonly renderHead: () => VNode< RendererNode, RendererElement, {
        [key: string]: any;
    }>[];
    /**
     * Rendering the content.
     *
     * Рендеринг содержимого.
     */
    readonly renderBody: () => VNode< RendererNode, RendererElement, {
        [key: string]: any;
    }>[];
    /**
     * Rendering the background.
     *
     * Рендеринг задника.
     */
    readonly renderScrim: () => VNode[];
    /**
     * Props for the main element.
     *
     * Свойства для главного элемента.
     */
    protected readonly propsMain: ComputedRef<{
        ref: Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
        key: string;
        class: ConstrClass | undefined;
        onTransitionend: (event: TransitionEvent) => void;
    }>;
    /**
     * Props for the head element.
     *
     * Свойства для элемента заголовка.
     */
    protected readonly propsHead: ComputedRef<{
        key: string;
        class: string | undefined;
        onClick: (event: Event) => void;
    } | {
        role?: RoleType;
        ariaHaspopup?: AriaList["aria-haspopup"];
        id?: string;
        ariaControls?: string;
        ariaExpanded?: string;
        tabindex: number;
        onKeydown: (event: KeyboardEvent) => Promise<void>;
        key: string;
        class: string | undefined;
        onClick: (event: Event) => void;
    }>;
    /**
     * Props for the body element.
     *
     * Свойства для элемента тела.
     */
    protected readonly propsBody: ComputedRef<{
        id: string;
        role?: RoleType;
        tabindex?: NumberOrString;
        'aria-activedescendant'?: string;
        'aria-atomic'?: AriaTrueOrFalse;
        'aria-autocomplete'?: "none" | "inline" | "list" | "both";
        'aria-busy'?: AriaTrueOrFalse;
        'aria-checked'?: AriaTrueOrFalse | "mixed";
        'aria-colcount'?: number;
        'aria-colindex'?: number;
        'aria-colspan'?: number;
        'aria-controls'?: string;
        'aria-current'?: AriaTrueOrFalse | "page" | "step" | "location" | "date" | "time";
        'aria-describedby'?: string;
        'aria-details'?: string;
        'aria-disabled'?: AriaTrueOrFalse;
        'aria-errormessage'?: string;
        'aria-expanded'?: AriaTrueOrFalse;
        'aria-flowto'?: string;
        'aria-grabbed'?: AriaTrueOrFalse;
        'aria-haspopup'?: AriaTrueOrFalse | "dialog" | "menu" | "listbox" | "tree" | "grid";
        'aria-hidden'?: AriaTrueOrFalse;
        'aria-invalid'?: AriaTrueOrFalse | "grammar" | "spelling";
        'aria-keyshortcuts'?: string;
        'aria-label'?: string;
        'aria-labelledby'?: string;
        'aria-level'?: number;
        'aria-live'?: "off" | "polite" | "assertive";
        'aria-modal'?: AriaTrueOrFalse;
        'aria-multiline'?: AriaTrueOrFalse;
        'aria-multiselectable'?: AriaTrueOrFalse;
        'aria-orientation'?: "horizontal" | "vertical" | "undefined";
        'aria-owns'?: string;
        'aria-placeholder'?: string;
        'aria-posinset'?: number;
        'aria-pressed'?: AriaTrueOrFalse | "mixed";
        'aria-readonly'?: AriaTrueOrFalse;
        'aria-relevant'?: "additions" | "removals" | "text" | "all" | string;
        'aria-required'?: AriaTrueOrFalse;
        'aria-roledescription'?: string;
        'aria-rowcount'?: number;
        'aria-rowindex'?: number;
        'aria-rowspan'?: number;
        'aria-selected'?: AriaTrueOrFalse;
        'aria-setsize'?: number;
        'aria-sort'?: "none" | "ascending" | "descending" | "other";
        'aria-valuemax'?: string | number;
        'aria-valuemin'?: string | number;
        'aria-valuenow'?: string | number;
        'aria-valuetext'?: string;
        key: string;
        class: string | undefined;
    }>;
}
