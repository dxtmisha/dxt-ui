import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrClassObject, ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { IconTrailingInclude } from '../Icon';
import { ProgressInclude } from '../Progress';
import { RippleInclude } from '../Ripple';
import { SkeletonInclude } from '../Skeleton';
import { EventClickInclude } from '../../classes/EventClickInclude';
import { LabelHighlightInclude } from '../../classes/LabelHighlightInclude';
import { PrefixInclude } from '../../classes/PrefixInclude';
import { CaptionInclude } from '../../classes/CaptionInclude';
import { SuffixInclude } from '../../classes/SuffixInclude';
import { DescriptionInclude } from '../../classes/DescriptionInclude';
import { BadgeInclude } from '../Badge/BadgeInclude';
import { EnabledInclude } from '../../classes/EnabledInclude';
import { ListItemComponents, ListItemEmits, ListItemSlots } from './types';
import { ListItemProps } from './props';
import { EventClickValue, RoleType, AriaTrueOrFalse } from '../../library';
import { NumberOrString } from '@dxtmisha/functional-basic';
/**
 * ListItem
 */
export declare class ListItem {
    protected readonly props: ListItemProps;
    protected readonly refs: ToRefs<ListItemProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ListItemComponents, ListItemProps> | undefined;
    protected readonly slots?: ListItemSlots | undefined;
    protected readonly emits?: ConstrEmit<ListItemEmits> | undefined;
    readonly icon: IconTrailingInclude;
    readonly label: LabelHighlightInclude;
    readonly prefix: PrefixInclude;
    readonly caption: CaptionInclude;
    readonly suffix: SuffixInclude;
    readonly description: DescriptionInclude;
    readonly badge: BadgeInclude;
    readonly ripple: RippleInclude;
    readonly progress: ProgressInclude;
    readonly skeleton: SkeletonInclude;
    readonly enabled: EnabledInclude;
    readonly event: EventClickInclude;
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
     * @param constructors object with classes/ объект с классами
     * @param constructors.BadgeIncludeConstructor class for working with badge/ класс для работы с бейджем
     * @param constructors.CaptionIncludeConstructor class for working with caption/ класс для работы с подписью
     * @param constructors.DescriptionIncludeConstructor class for working with description/ класс для работы с описанием
     * @param constructors.EnabledIncludeConstructor class for working with enabled/ класс для работы с активностью
     * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
     * @param constructors.IconTrailingIncludeConstructor class for working with icon/ класс для работы с иконкой
     * @param constructors.LabelHighlightIncludeConstructor class for working with label/ класс для работы с меткой
     * @param constructors.PrefixIncludeConstructor class for working with prefix/ класс для работы с префиксом
     * @param constructors.ProgressIncludeConstructor class for working with progress/ класс для работы с прогрессом
     * @param constructors.RippleIncludeConstructor class for working with ripple/ класс для работы с ripple
     * @param constructors.SkeletonIncludeConstructor class for working with skeleton/ класс для работы со скелетоном
     * @param constructors.SuffixIncludeConstructor class for working with suffix/ класс для работы с суффиксом
     */
    constructor(props: ListItemProps, refs: ToRefs<ListItemProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ListItemComponents, ListItemProps> | undefined, slots?: ListItemSlots | undefined, emits?: ConstrEmit<ListItemEmits> | undefined, constructors?: {
        BadgeIncludeConstructor?: typeof BadgeInclude;
        CaptionIncludeConstructor?: typeof CaptionInclude;
        DescriptionIncludeConstructor?: typeof DescriptionInclude;
        EnabledIncludeConstructor?: typeof EnabledInclude;
        EventClickIncludeConstructor?: typeof EventClickInclude;
        IconTrailingIncludeConstructor?: typeof IconTrailingInclude;
        LabelHighlightIncludeConstructor?: typeof LabelHighlightInclude;
        PrefixIncludeConstructor?: typeof PrefixInclude;
        ProgressIncludeConstructor?: typeof ProgressInclude;
        RippleIncludeConstructor?: typeof RippleInclude;
        SkeletonIncludeConstructor?: typeof SkeletonInclude;
        SuffixIncludeConstructor?: typeof SuffixInclude;
    });
    /** tag type/ тип тега */
    readonly tag: ComputedRef<string>;
    /** values for the class/ значения для класса */
    readonly classes: ComputedRef<ConstrClassObject>;
    /** values for attributes/ значения для атрибутов */
    readonly binds: ComputedRef<{
        href: string | undefined;
        'data-value': any;
        'data-divider': string | undefined;
        'data-parent': string | undefined;
        'data-list-id': number | undefined;
        onClick: (event: MouseEvent, options?: EventClickValue) => void;
    }>;
    /** values for aria attributes/ значения для атрибутов aria */
    readonly aria: ComputedRef<{
        id?: string;
        role?: RoleType;
        tabindex: NumberOrString;
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
    }>;
}
