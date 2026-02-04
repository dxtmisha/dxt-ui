import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { LabelInclude } from '../../classes/LabelInclude';
import { DescriptionInclude } from '../../classes/DescriptionInclude';
import { ArrowInclude } from '../Arrow';
import { TooltipClasses } from './TooltipClasses';
import { TooltipStyle } from './TooltipStyle';
import { TooltipStatus } from './TooltipStatus';
import { TooltipPosition } from './TooltipPosition';
import { TooltipOpen } from './TooltipOpen';
import { TooltipEvent } from './TooltipEvent';
import { RoleType } from '../../types/roleTypes';
import { TooltipControl, TooltipControlBinds } from './basicTypes';
import { TooltipComponents, TooltipEmits, TooltipSlots } from './types';
import { TooltipProps } from './props';
import { NumberOrString } from '@dxtmisha/functional-basic';
import { AriaTrueOrFalse } from '../../library';
/**
 * Tooltip
 */
export declare class Tooltip {
    protected readonly props: TooltipProps;
    protected readonly refs: ToRefs<TooltipProps>;
    protected readonly element: Ref<HTMLDivElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<TooltipComponents, TooltipProps> | undefined;
    protected readonly slots?: TooltipSlots | undefined;
    protected readonly emits?: ConstrEmit<TooltipEmits> | undefined;
    /** Class manager for tooltip classes/ Менеджер классов для подсказки */
    readonly classes: TooltipClasses;
    /** Style manager for tooltip styles/ Менеджер стилей для подсказки */
    readonly style: TooltipStyle;
    /** Status manager for tooltip state/ Менеджер статуса для состояния подсказки */
    readonly status: TooltipStatus;
    /** Position manager for tooltip placement/ Менеджер позиции для размещения подсказки */
    readonly position: TooltipPosition;
    /** Open manager for tooltip visibility/ Менеджер открытия для видимости подсказки */
    readonly open: TooltipOpen;
    /** Event manager for tooltip interactions/ Менеджер событий для взаимодействий с подсказкой */
    readonly event: TooltipEvent;
    /** Arrow manager/ Менеджер стрелки */
    readonly arrow: ArrowInclude;
    /** Label manager/ Менеджер метки */
    readonly label: LabelInclude;
    /** Description manager/ Менеджер описания */
    readonly description: DescriptionInclude;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param element input element/ элемент ввода
     * @param classDesign design name/ название дизайна
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param slots object for working with slots/ объект для работы со слотами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     * @param TooltipClassesConstructor class for working with classes/ класс для работы с классами
     * @param TooltipStyleConstructor class for working with styles/ класс для работы со стилями
     * @param TooltipStatusConstructor class for working with status/ класс для работы со статусом
     * @param TooltipPositionConstructor class for working with position/ класс для работы с позицией
     * @param TooltipOpenConstructor class for working with open state/ класс для работы с состоянием открытия
     * @param TooltipEventConstructor class for working with events/ класс для работы с событиями
     * @param ArrowIncludeConstructor class for working with arrow/ класс для работы со стрелкой
     * @param LabelIncludeConstructor class for working with label/ класс для работы с меткой
     * @param DescriptionIncludeConstructor class for working with description/ класс для работы с описанием
     */
    constructor(props: TooltipProps, refs: ToRefs<TooltipProps>, element: Ref<HTMLDivElement | undefined>, classDesign: string, className: string, components?: DesignComp<TooltipComponents, TooltipProps> | undefined, slots?: TooltipSlots | undefined, emits?: ConstrEmit<TooltipEmits> | undefined, TooltipClassesConstructor?: typeof TooltipClasses, TooltipStyleConstructor?: typeof TooltipStyle, TooltipStatusConstructor?: typeof TooltipStatus, TooltipPositionConstructor?: typeof TooltipPosition, TooltipOpenConstructor?: typeof TooltipOpen, TooltipEventConstructor?: typeof TooltipEvent, ArrowIncludeConstructor?: typeof ArrowInclude, LabelIncludeConstructor?: typeof LabelInclude, DescriptionIncludeConstructor?: typeof DescriptionInclude);
    /**
     * Computed bindings for the tooltip element/
     * Вычисляемые привязки для элемента подсказки
     */
    readonly binds: ComputedRef<{
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
        onMouseover: () => void;
        onMouseout: ({ relatedTarget }: MouseEvent) => void;
        onTransitionend: (event: TransitionEvent) => void;
    }>;
    /**
     * Computed bindings for the control element/
     * Вычисляемые привязки для элемента управления
     */
    readonly bindsControl: ComputedRef<TooltipControlBinds>;
    /** Data for the control slot/ Данные для слота управления */
    readonly slotData: ComputedRef<TooltipControl>;
    /** Computed role for the tooltip/ Вычисляемая роль для подсказки */
    readonly role: ComputedRef<string>;
}
