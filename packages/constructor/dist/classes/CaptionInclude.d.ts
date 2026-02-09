import { VNode, ComputedRef } from 'vue';
import { SkeletonInclude } from '../constructors/Skeleton';
import { CaptionProps, CaptionSlots } from '../types/captionTypes';
import { RoleType, AriaTrueOrFalse } from '../library';
import { NumberOrString } from '@dxtmisha/functional-basic';
/**
 * Class for working with caption.
 *
 * Класс для работы с caption.
 */
export declare class CaptionInclude {
    protected readonly props: Readonly<CaptionProps>;
    protected readonly className: string;
    protected readonly slots?: CaptionSlots | undefined;
    protected readonly skeleton?: SkeletonInclude | undefined;
    /**
     * Constructor
     * @param props input property/ входное свойство
     * @param className class name/ название класса
     * @param slots object for working with slots/ объект для работы со слотами
     * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
     */
    constructor(props: Readonly<CaptionProps>, className: string, slots?: CaptionSlots | undefined, skeleton?: SkeletonInclude | undefined);
    /**
     * Returns true if the caption is filled
     *
     * Возвращает true, если caption заполнен
     */
    readonly is: ComputedRef<boolean>;
    /**
     * Returns bindings for the caption element.
     *
     * Возвращает привязки для элемента подписи.
     */
    readonly binds: ComputedRef<{
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
        class: {
            [x: string]: boolean;
        };
        'data-event-type': string;
    }>;
    /**
     * Renders caption element with content from props or slots.
     *
     * Отображает элемент caption с содержимым из props или slots.
     */
    render(): VNode[];
}
