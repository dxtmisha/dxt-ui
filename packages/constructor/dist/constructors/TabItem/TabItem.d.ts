import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { BadgeInclude } from '../Badge/BadgeInclude';
import { RippleInclude } from '../Ripple';
import { SkeletonInclude } from '../Skeleton';
import { IconTrailingInclude } from '../Icon';
import { LabelInclude } from '../../classes/LabelInclude';
import { EnabledInclude } from '../../classes/EnabledInclude';
import { EventClickInclude } from '../../classes/EventClickInclude';
import { TabItemComponents, TabItemEmits, TabItemSlots } from './types';
import { TabItemProps } from './props';
import { RoleType, AriaTrueOrFalse, EventClickValue } from '../../library';
import { NumberOrString } from '@dxtmisha/functional-basic';
/**
 * TabItem
 */
export declare class TabItem {
    protected readonly props: TabItemProps;
    protected readonly refs: ToRefs<TabItemProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<TabItemComponents, TabItemProps> | undefined;
    protected readonly slots?: TabItemSlots | undefined;
    protected readonly emits?: ConstrEmit<TabItemEmits> | undefined;
    readonly icon: IconTrailingInclude;
    readonly label: LabelInclude;
    readonly badge: BadgeInclude;
    readonly skeleton: SkeletonInclude;
    readonly enabled: EnabledInclude;
    readonly ripple: RippleInclude;
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
     * @param constructors.EnabledIncludeConstructor class for working with enabled/ класс для работы с активностью
     * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
     * @param constructors.IconTrailingIncludeConstructor class for working with icon/ класс для работы с иконкой
     * @param constructors.LabelIncludeConstructor class for working with label/ класс для работы с меткой
     * @param constructors.RippleIncludeConstructor class for working with ripple/ класс для работы с ripple
     * @param constructors.SkeletonIncludeConstructor class for working with skeleton/ класс для работы со скелетоном
     */
    constructor(props: TabItemProps, refs: ToRefs<TabItemProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<TabItemComponents, TabItemProps> | undefined, slots?: TabItemSlots | undefined, emits?: ConstrEmit<TabItemEmits> | undefined, constructors?: {
        BadgeIncludeConstructor?: typeof BadgeInclude;
        EnabledIncludeConstructor?: typeof EnabledInclude;
        EventClickIncludeConstructor?: typeof EventClickInclude;
        IconTrailingIncludeConstructor?: typeof IconTrailingInclude;
        LabelIncludeConstructor?: typeof LabelInclude;
        RippleIncludeConstructor?: typeof RippleInclude;
        SkeletonIncludeConstructor?: typeof SkeletonInclude;
    });
    /** tag type/ тип тега */
    readonly tag: ComputedRef<string>;
    /** values for attributes/ значения для атрибутов */
    readonly binds: ComputedRef<{
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
        onClick: (event: MouseEvent, options?: EventClickValue) => void;
        onKeydown: (event: KeyboardEvent, options?: EventClickValue) => void;
        href: string | undefined;
        'data-value': any;
    }>;
}
