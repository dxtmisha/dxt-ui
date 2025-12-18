import { VNode, ComputedRef } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract, ConstrClass } from '@dxtmisha/functional';
import { Cell } from './Cell';
import { CellProps } from './props';
import { CellClasses, CellComponents, CellEmits, CellExpose, CellSlots } from './types';
import { RoleType, AriaTrueOrFalse, EventClickValue } from '../../library';
import { NumberOrString } from '@dxtmisha/functional-basic';
/**
 * CellDesign
 */
export declare class CellDesign<COMP extends CellComponents, EXPOSE extends CellExpose, CLASSES extends CellClasses, P extends CellProps> extends DesignConstructorAbstract<HTMLDivElement, COMP, CellEmits, EXPOSE, CellSlots, CLASSES, P> {
    protected readonly item: Cell;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, CellEmits, P>);
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
     * Generates text elements.
     *
     * Генерирует элементы текста.
     */
    protected renderContext: () => VNode[];
    /**
     * Generates a slot for elements on the right.
     *
     * Генерирует слот для элементов справа.
     */
    protected renderTrailing: () => VNode[];
    /**
     * Generates a slot for elements on the right.
     *
     * Генерирует слот для элементов справа.
     */
    protected renderBody: () => VNode[];
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
        class: ConstrClass | undefined;
        'data-value': P["value"] | undefined;
        'data-divider': string | undefined;
        onClick: (event: MouseEvent, options?: EventClickValue) => void;
    }>;
}
