import { VNode, ComputedRef, Ref } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract, ConstrClass } from '@dxtmisha/functional';
import { Window } from './Window';
import { WindowPropsBasic } from './props';
import { WindowClasses, WindowComponents, WindowEmits, WindowExpose, WindowSlots } from './types';
import { RoleType, AriaTrueOrFalse } from '../../library';
import { NumberOrString } from '@dxtmisha/functional-basic';
/**
 * WindowDesign
 */
export declare class WindowDesign<COMP extends WindowComponents, EXPOSE extends WindowExpose, CLASSES extends WindowClasses, P extends WindowPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, WindowEmits, EXPOSE, WindowSlots, CLASSES, P> {
    protected readonly item: Window;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, WindowEmits, P>);
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
     * Render main window element.
     *
     * Рендер главного элемента окна.
     */
    readonly renderMain: () => VNode;
    /**
     * Render body element.
     *
     * Рендер элемента тела.
     */
    readonly renderBody: () => VNode;
    /**
     * Generates an element to group the displayed data.
     *
     * Генерирует элемент для группировки выводимых данных.
     */
    readonly renderBodyGroup: () => VNode[];
    /**
     * Render context element.
     *
     * Рендер элемента контекста.
     */
    readonly renderBodyContext: () => VNode[];
    /**
     * Generates an element to display the image.
     *
     * Генерирует элемент для вывода изображения
     */
    readonly renderBodyImage: () => VNode[];
    /**
     * Generates an element to display the close button.
     *
     * Генерирует элемент для вывода кнопки закрытия.
     */
    readonly renderBodyClose: () => VNode[];
    /**
     * Props for the main element.
     *
     * Свойства для главного элемента.
     */
    protected readonly propsMain: ComputedRef<{
        id?: string;
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
        ref: Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
        class: ConstrClass | undefined;
        style: ConstrStyles | undefined;
        'data-window': string;
        onTransitionend: () => void;
    }>;
}
