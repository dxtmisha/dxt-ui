import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { TextInclude } from '../../classes/TextInclude';
import { SnackbarData } from './SnackbarData';
import { SnackbarEvent } from './SnackbarEvent';
import { SnackbarComponents, SnackbarEmits, SnackbarSlots } from './types';
import { SnackbarProps } from './props';
import { AriaTrueOrFalse, RoleType } from '../../library';
import { NumberOrString } from '@dxtmisha/functional-basic';
/**
 * Snackbar
 */
export declare class Snackbar {
    protected readonly props: SnackbarProps;
    protected readonly refs: ToRefs<SnackbarProps>;
    protected readonly element: Ref<HTMLDivElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<SnackbarComponents, SnackbarProps> | undefined;
    protected readonly slots?: SnackbarSlots | undefined;
    protected readonly emits?: ConstrEmit<SnackbarEmits> | undefined;
    /** Data manager for snackbar / Менеджер данных для снекбара */
    readonly data: SnackbarData;
    /** Event manager for snackbar / Менеджер событий для снекбара */
    readonly event: SnackbarEvent;
    /** Text manager for snackbar / Менеджер текста для снекбара */
    readonly text: TextInclude;
    /**
     * Constructor
     * @param props input data / входные данные
     * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
     * @param element input element / элемент ввода
     * @param classDesign design name / название дизайна
     * @param className class name / название класса
     * @param components object for working with components / объект для работы с компонентами
     * @param slots object for working with slots / объект для работы со слотами
     * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
     * @param constructors object with classes / объект с классами
     * @param constructors.DataConstructor class for creating data / класс для создания данных
     */
    constructor(props: SnackbarProps, refs: ToRefs<SnackbarProps>, element: Ref<HTMLDivElement | undefined>, classDesign: string, className: string, components?: DesignComp<SnackbarComponents, SnackbarProps> | undefined, slots?: SnackbarSlots | undefined, emits?: ConstrEmit<SnackbarEmits> | undefined, constructors?: {
        DataConstructor?: typeof SnackbarData;
        EventConstructor?: typeof SnackbarEvent;
    });
    /**
     * Properties for ARIA binding.
     *
     * Свойства для привязки ARIA.
     */
    readonly binds: ComputedRef<{
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
        id?: string;
        role?: RoleType;
        tabindex?: NumberOrString;
        onMouseenter: () => void;
        onMouseleave: () => void;
    }>;
    /**
     * Event for hiding the message.
     *
     * Событие для скрытия сообщения.
     * @param value element identification / идентификация элемента
     */
    readonly onClose: (value: string) => void;
}
