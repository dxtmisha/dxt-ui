import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { DescriptionInclude } from '../../classes/DescriptionInclude';
import { EventClickInclude } from '../../classes/EventClickInclude';
import { LabelInclude } from '../../classes/LabelInclude';
import { TextInclude } from '../../classes/TextInclude';
import { ActionsInclude } from '../Actions';
import { ButtonInclude } from '../Button';
import { IconTrailingInclude } from '../Icon';
import { SnackbarItemComponents, SnackbarItemEmits, SnackbarItemSlots } from './types';
import { SnackbarItemProps } from './props';
import { AriaTrueOrFalse, RoleType } from '../../library';
import { NumberOrString } from '@dxtmisha/functional-basic';
/**
 * SnackbarItem
 */
export declare class SnackbarItem {
    protected readonly props: SnackbarItemProps;
    protected readonly refs: ToRefs<SnackbarItemProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<SnackbarItemComponents, SnackbarItemProps> | undefined;
    protected readonly slots?: SnackbarItemSlots | undefined;
    protected readonly emits?: ConstrEmit<SnackbarItemEmits> | undefined;
    /** Label manager for snackbar item/ Менеджер меток для элемента снекбара */
    readonly label: LabelInclude;
    /** Description manager for snackbar item/ Менеджер описаний для элемента снекбара */
    readonly description: DescriptionInclude;
    /** Event click manager for snackbar item/ Менеджер событий клика для элемента снекбара */
    readonly event: EventClickInclude;
    /** Icon manager for snackbar item/ Менеджер иконок для элемента снекбара */
    readonly icon: IconTrailingInclude;
    /** Button manager for snackbar item/ Менеджер кнопок для элемента снекбара */
    readonly button: ButtonInclude;
    /** Actions manager for snackbar item/ Менеджер действий для элемента снекбара */
    readonly actions: ActionsInclude;
    /** Text manager for window content/ Менеджер текста для содержимого окна */
    readonly text: TextInclude;
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
     * @param constructors constructors item class/ класс элемента конструкторов
     * @param constructors.ActionsConstructor class for creating actions/ класс для создания действий
     * @param constructors.ButtonConstructor class for creating a button/ класс для создания кнопки
     * @param constructors.DescriptionConstructor class for creating a description/ класс для создания описания
     * @param constructors.EventClickConstructor class for creating an event click/ класс для создания события клика
     * @param constructors.IconConstructor class for creating an icon/ класс для создания иконки
     * @param constructors.LabelConstructor class for creating a label/ класс для создания метки
     * @param constructors.TextConstructor class for creating a text/ класс для создания текста
     */
    constructor(props: SnackbarItemProps, refs: ToRefs<SnackbarItemProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<SnackbarItemComponents, SnackbarItemProps> | undefined, slots?: SnackbarItemSlots | undefined, emits?: ConstrEmit<SnackbarItemEmits> | undefined, constructors?: {
        ActionsConstructor?: typeof ActionsInclude;
        ButtonConstructor?: typeof ButtonInclude;
        DescriptionConstructor?: typeof DescriptionInclude;
        EventConstructor?: typeof EventClickInclude;
        IconConstructor?: typeof IconTrailingInclude;
        LabelConstructor?: typeof LabelInclude;
        TextConstructor?: typeof TextInclude;
    });
    /** ARIA bind for snackbar item/ ARIA привязка для элемента снекбара */
    readonly ariaBind: ComputedRef<{
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
    }>;
    /**
     * Events on close button click.
     *
     * События при нажатии на закрытие.
     */
    readonly onClose: () => void | undefined;
}
