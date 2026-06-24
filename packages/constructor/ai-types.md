1) All these methods are in the @dxtmisha/constructor library.
2) Everything that is exported can be used.
3) Use what is in this library if it exists; do not use other libraries if there is an analogue here. Do not create new ones if an analogue already exists here.

The following is the content of "exports" from package.json:
{
  ".": {
    "types": "./dist/src/library.d.ts",
    "default": "./dist/library.js"
  },
  "./Accordion": {
    "types": "./dist/src/constructors/Accordion/index.d.ts",
    "default": "./dist/accordion.js"
  },
  "./ActionSheet": {
    "types": "./dist/src/constructors/ActionSheet/index.d.ts",
    "default": "./dist/actionSheet.js"
  },
  "./Actions": {
    "types": "./dist/src/constructors/Actions/index.d.ts",
    "default": "./dist/actions.js"
  },
  "./Anchor": {
    "types": "./dist/src/constructors/Anchor/index.d.ts",
    "default": "./dist/anchor.js"
  },
  "./Area": {
    "types": "./dist/src/constructors/Area/index.d.ts",
    "default": "./dist/area.js"
  },
  "./Arrow": {
    "types": "./dist/src/constructors/Arrow/index.d.ts",
    "default": "./dist/arrow.js"
  },
  "./Badge": {
    "types": "./dist/src/constructors/Badge/index.d.ts",
    "default": "./dist/badge.js"
  },
  "./Bars": {
    "types": "./dist/src/constructors/Bars/index.d.ts",
    "default": "./dist/bars.js"
  },
  "./Block": {
    "types": "./dist/src/constructors/Block/index.d.ts",
    "default": "./dist/block.js"
  },
  "./Button": {
    "types": "./dist/src/constructors/Button/index.d.ts",
    "default": "./dist/button.js"
  },
  "./ButtonGroup": {
    "types": "./dist/src/constructors/ButtonGroup/index.d.ts",
    "default": "./dist/buttonGroup.js"
  },
  "./Cell": {
    "types": "./dist/src/constructors/Cell/index.d.ts",
    "default": "./dist/cell.js"
  },
  "./Checkbox": {
    "types": "./dist/src/constructors/Checkbox/index.d.ts",
    "default": "./dist/checkbox.js"
  },
  "./Chip": {
    "types": "./dist/src/constructors/Chip/index.d.ts",
    "default": "./dist/chip.js"
  },
  "./ChipGroup": {
    "types": "./dist/src/constructors/ChipGroup/index.d.ts",
    "default": "./dist/chipGroup.js"
  },
  "./ClientOnly": {
    "types": "./dist/src/constructors/ClientOnly/index.d.ts",
    "default": "./dist/clientOnly.js"
  },
  "./Container": {
    "types": "./dist/src/constructors/Container/index.d.ts",
    "default": "./dist/container.js"
  },
  "./Dialog": {
    "types": "./dist/src/constructors/Dialog/index.d.ts",
    "default": "./dist/dialog.js"
  },
  "./Dummy": {
    "types": "./dist/src/constructors/Dummy/index.d.ts",
    "default": "./dist/dummy.js"
  },
  "./Field": {
    "types": "./dist/src/constructors/Field/index.d.ts",
    "default": "./dist/field.js"
  },
  "./FieldCounter": {
    "types": "./dist/src/constructors/FieldCounter/index.d.ts",
    "default": "./dist/fieldCounter.js"
  },
  "./FieldLabel": {
    "types": "./dist/src/constructors/FieldLabel/index.d.ts",
    "default": "./dist/fieldLabel.js"
  },
  "./FieldMessage": {
    "types": "./dist/src/constructors/FieldMessage/index.d.ts",
    "default": "./dist/fieldMessage.js"
  },
  "./Grid": {
    "types": "./dist/src/constructors/Grid/index.d.ts",
    "default": "./dist/grid.js"
  },
  "./GridItem": {
    "types": "./dist/src/constructors/GridItem/index.d.ts",
    "default": "./dist/gridItem.js"
  },
  "./Group": {
    "types": "./dist/src/constructors/Group/index.d.ts",
    "default": "./dist/group.js"
  },
  "./Header": {
    "types": "./dist/src/constructors/Header/index.d.ts",
    "default": "./dist/header.js"
  },
  "./HorizontalScroll": {
    "types": "./dist/src/constructors/HorizontalScroll/index.d.ts",
    "default": "./dist/horizontalScroll.js"
  },
  "./Icon": {
    "types": "./dist/src/constructors/Icon/index.d.ts",
    "default": "./dist/icon.js"
  },
  "./Image": {
    "types": "./dist/src/constructors/Image/index.d.ts",
    "default": "./dist/image.js"
  },
  "./Input": {
    "types": "./dist/src/constructors/Input/index.d.ts",
    "default": "./dist/input.js"
  },
  "./List": {
    "types": "./dist/src/constructors/List/index.d.ts",
    "default": "./dist/list.js"
  },
  "./ListGroup": {
    "types": "./dist/src/constructors/ListGroup/index.d.ts",
    "default": "./dist/listGroup.js"
  },
  "./ListItem": {
    "types": "./dist/src/constructors/ListItem/index.d.ts",
    "default": "./dist/listItem.js"
  },
  "./ListMenu": {
    "types": "./dist/src/constructors/ListMenu/index.d.ts",
    "default": "./dist/listMenu.js"
  },
  "./Mask": {
    "types": "./dist/src/constructors/Mask/index.d.ts",
    "default": "./dist/mask.js"
  },
  "./Menu": {
    "types": "./dist/src/constructors/Menu/index.d.ts",
    "default": "./dist/menu.js"
  },
  "./Modal": {
    "types": "./dist/src/constructors/Modal/index.d.ts",
    "default": "./dist/modal.js"
  },
  "./MotionAxis": {
    "types": "./dist/src/constructors/MotionAxis/index.d.ts",
    "default": "./dist/motionAxis.js"
  },
  "./MotionTransform": {
    "types": "./dist/src/constructors/MotionTransform/index.d.ts",
    "default": "./dist/motionTransform.js"
  },
  "./Page": {
    "types": "./dist/src/constructors/Page/index.d.ts",
    "default": "./dist/page.js"
  },
  "./PageArea": {
    "types": "./dist/src/constructors/PageArea/index.d.ts",
    "default": "./dist/pageArea.js"
  },
  "./Progress": {
    "types": "./dist/src/constructors/Progress/index.d.ts",
    "default": "./dist/progress.js"
  },
  "./Radio": {
    "types": "./dist/src/constructors/Radio/index.d.ts",
    "default": "./dist/radio.js"
  },
  "./Ripple": {
    "types": "./dist/src/constructors/Ripple/index.d.ts",
    "default": "./dist/ripple.js"
  },
  "./Scrollbar": {
    "types": "./dist/src/constructors/Scrollbar/index.d.ts",
    "default": "./dist/scrollbar.js"
  },
  "./Section": {
    "types": "./dist/src/constructors/Section/index.d.ts",
    "default": "./dist/section.js"
  },
  "./Select": {
    "types": "./dist/src/constructors/Select/index.d.ts",
    "default": "./dist/select.js"
  },
  "./SelectValue": {
    "types": "./dist/src/constructors/SelectValue/index.d.ts",
    "default": "./dist/selectValue.js"
  },
  "./Skeleton": {
    "types": "./dist/src/constructors/Skeleton/index.d.ts",
    "default": "./dist/skeleton.js"
  },
  "./Snackbar": {
    "types": "./dist/src/constructors/Snackbar/index.d.ts",
    "default": "./dist/snackbar.js"
  },
  "./SnackbarItem": {
    "types": "./dist/src/constructors/SnackbarItem/index.d.ts",
    "default": "./dist/snackbarItem.js"
  },
  "./TabItem": {
    "types": "./dist/src/constructors/TabItem/index.d.ts",
    "default": "./dist/tabItem.js"
  },
  "./Tabs": {
    "types": "./dist/src/constructors/Tabs/index.d.ts",
    "default": "./dist/tabs.js"
  },
  "./TabsNavigation": {
    "types": "./dist/src/constructors/TabsNavigation/index.d.ts",
    "default": "./dist/tabsNavigation.js"
  },
  "./Textarea": {
    "types": "./dist/src/constructors/Textarea/index.d.ts",
    "default": "./dist/textarea.js"
  },
  "./TextareaAutosize": {
    "types": "./dist/src/constructors/TextareaAutosize/index.d.ts",
    "default": "./dist/textareaAutosize.js"
  },
  "./Tooltip": {
    "types": "./dist/src/constructors/Tooltip/index.d.ts",
    "default": "./dist/tooltip.js"
  },
  "./Window": {
    "types": "./dist/src/constructors/Window/index.d.ts",
    "default": "./dist/window.js"
  },
  "./plugin": {
    "types": "./dist/src/library/plugin.d.ts",
    "default": "./dist/plugin.js"
  },
  "./style.scss": "./src/library/style.scss",
  "./Bleed": {
    "types": "./dist/src/constructors/Bleed/index.d.ts",
    "default": "./dist/bleed.js"
  },
  "./Divider": {
    "types": "./dist/src/constructors/Divider/index.d.ts",
    "default": "./dist/divider.js"
  },
  "./Switch": {
    "types": "./dist/src/constructors/Switch/index.d.ts",
    "default": "./dist/switch.js"
  },
  "./TextLabel": {
    "types": "./dist/src/constructors/TextLabel/index.d.ts",
    "default": "./dist/textLabel.js"
  },
  "./TextDescription": {
    "types": "./dist/src/constructors/TextDescription/index.d.ts",
    "default": "./dist/textDescription.js"
  },
  "./MenuCountry": {
    "types": "./dist/src/constructors/MenuCountry/index.d.ts",
    "default": "./dist/menuCountry.js"
  },
  "./MenuButton": {
    "types": "./dist/src/constructors/MenuButton/index.d.ts",
    "default": "./dist/menuButton.js"
  },
  "./MenuChip": {
    "types": "./dist/src/constructors/MenuChip/index.d.ts",
    "default": "./dist/menuChip.js"
  },
  "./InputPhone": {
    "types": "./dist/src/constructors/InputPhone/index.d.ts",
    "default": "./dist/inputPhone.js"
  },
  "./InputPhoneDialCode": {
    "types": "./dist/src/constructors/InputPhoneDialCode/index.d.ts",
    "default": "./dist/inputPhoneDialCode.js"
  },
  "./Pagination": {
    "types": "./dist/src/constructors/Pagination/index.d.ts",
    "default": "./dist/pagination.js"
  },
  "./DraggableWrapper": {
    "types": "./dist/src/constructors/DraggableWrapper/index.d.ts",
    "default": "./dist/draggableWrapper.js"
  },
  "./SelectableArea": {
    "types": "./dist/src/constructors/SelectableArea/index.d.ts",
    "default": "./dist/selectableArea.js"
  },
  "./MenuLanguage": {
    "types": "./dist/src/constructors/MenuLanguage/index.d.ts",
    "default": "./dist/menuLanguage.js"
  },
  "./InputSocial": {
    "types": "./dist/src/constructors/InputSocial/index.d.ts",
    "default": "./dist/inputSocial.js"
  }
}

// File: src/classes/AreaInclude.d.ts
export declare class AreaInclude {
    constructor(props: AreaPropsInclude);
}


// File: src/classes/AriaStaticInclude.d.ts
export declare class AriaStaticInclude {
    static role(role?: RoleType): AriaList;
    static atomic(isAtomic?: boolean): AriaList;
    static checked(isChecked?: boolean): AriaList;
    static controls(controls?: string): AriaList;
    static current(value?: AriaList['aria-current']): AriaList;
    static busy(isBusy?: boolean): AriaList;
    static describedby(id?: string): AriaList;
    static disabled(isDisabled?: boolean): AriaList;
    static expanded(isExpanded?: boolean): AriaList;
    static haspopup(haspopup?: AriaList['aria-haspopup']): AriaList;
    static label(label?: string): AriaList;
    static labelledby(id?: string): AriaList;
    static invalid(isInvalid?: boolean): AriaList;
    static control(id?: string, controls?: string, haspopup?: AriaList['aria-haspopup'], expanded?: boolean): AriaList;
    static hidden(isHidden?: boolean): AriaList;
    static live(live?: AriaList['aria-live']): AriaList;
    static ariaModal(isModal?: boolean): AriaList;
    static modal(isModal?: boolean, ariaLabelledby?: string, ariaDescribedby?: string): AriaList;
    static multiselectable(isMultiselectable?: boolean): AriaList;
    static selected(isSelected?: boolean): AriaList;
    static valueMinMax(value?: string | number, min?: string | number, max?: string | number): AriaList;
    static isTrueOrFalse(value?: boolean): AriaTrueOrFalse | undefined;
}


// File: src/classes/CaptionInclude.d.ts
import { VNode } from 'vue';
import { SkeletonInclude } from '../constructors/Skeleton';
import { CaptionProps, CaptionSlots } from '../types/captionTypes';
import { AriaTrueOrFalse, RoleType } from '../library';
import { NumberOrString } from '@dxtmisha/functional';
export declare class CaptionInclude {
    constructor(props: Readonly<CaptionProps>, className: string, slots?: CaptionSlots | undefined, skeleton?: SkeletonInclude | undefined);
    get is(): boolean;
    get binds(): {
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
        class: {
            [x: string]: boolean | undefined;
        };
        'data-event-type': string;
    };
    render(): VNode[];
}


// File: src/classes/ClientOnlyInclude.d.ts
import { ClientOnlyPropsInclude } from '../types/clientOnlyTypes';
import { Ref } from 'vue';
export declare class ClientOnlyInclude {
    isMounted: Ref<boolean, boolean>;
    constructor(props?: ClientOnlyPropsInclude | undefined);
    isRender(): boolean;
}


// File: src/classes/ComponentIncludeAbstract.d.ts
import { VNode, Ref, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents } from '@dxtmisha/functional';
import { ComponentIncludeExposeItem, ComponentIncludeExtra, ComponentIncludeProps, ComponentIncludePropsAttrs } from '../types/componentInclude';
export declare abstract class ComponentIncludeAbstract<Props extends Record<string, any>, PropsExtra extends Record<string, any>, ComponentExpose extends Record<string, any> = Record<string, any>, ComponentSlots extends Record<string, any> = Record<string, any>, PartialPropsExtra extends Record<string, any> = Partial<ConstrBind<PropsExtra>>> {
    constructor(className: string, props: ComponentIncludeProps<Props>, components?: DesignComponents<any, Props> | undefined, extra?: ComponentIncludeExtra<PropsExtra> | undefined, index?: string | undefined);
    readonly binds: ComputedRef<PartialPropsExtra>;
    get expose(): ComponentExpose;
    get is(): boolean;
    getElement(): ConstrBind<ComponentExpose> | undefined;
    readonly render: (slotsChildren?: ComponentSlots, attrs?: PartialPropsExtra, isShow?: () => boolean) => VNode[];
}


// File: src/classes/DescriptionInclude.d.ts
import { VNode } from 'vue';
import { RefOrNormal, RefOrNormalOrFunction } from '@dxtmisha/functional';
import { SkeletonInclude } from '../constructors/Skeleton';
import { DescriptionProps, DescriptionSlots } from '../types/descriptionTypes';
export declare class DescriptionInclude {
    constructor(props: RefOrNormalOrFunction<DescriptionProps>, className: string, slots?: DescriptionSlots | undefined, skeleton?: SkeletonInclude | undefined, tag?: RefOrNormal<string | undefined>);
    get is(): boolean;
    get id(): string;
    render(childrenExtra?: any[], props?: Record<string, any>): VNode[];
}


// File: src/classes/EnabledInclude.d.ts
import { ProgressInclude } from '../constructors/Progress';
import { AriaList } from '../types/ariaTypes';
import { EnabledProps } from '../types/enabledTypes';
export declare class EnabledInclude {
    constructor(props: EnabledProps, progress?: ProgressInclude | undefined);
    get isEnabled(): boolean;
    get isReadonly(): boolean;
    get isDisabled(): boolean;
    get isDisabledOrUndefined(): boolean | undefined;
    get aria(): AriaList;
}


// File: src/classes/EventClickInclude.d.ts
import { ConstrEmit, ConstrHrefProps } from '@dxtmisha/functional';
import { EnabledInclude } from './EnabledInclude';
import { EventClickEmits, EventClickExpose, EventClickProps, EventClickValue } from '../types/eventClickTypes';
export declare class EventClickInclude {
    constructor(props?: EventClickProps | undefined, enabled?: EnabledInclude | undefined, emits?: ConstrEmit<EventClickEmits> | undefined);
    get binds(): {
        onClick: (event: MouseEvent, options?: EventClickValue) => void;
        onKeydown: (event: KeyboardEvent, options?: EventClickValue) => void;
        href?: string;
    };
    get expose(): EventClickExpose;
    get href(): ConstrHrefProps;
    readonly onClick: (event: MouseEvent, options?: EventClickValue) => void;
    readonly onKeydown: (event: KeyboardEvent, options?: EventClickValue) => void;
}


// File: src/classes/Field/FieldArrowInclude.d.ts
import { FieldValueInclude } from './FieldValueInclude';
import { FieldTypeInclude } from './FieldTypeInclude';
import { FieldAllProps, FieldArrowProps } from '../../types/fieldTypes';
export declare class FieldArrowInclude {
    constructor(props: FieldAllProps, value: FieldValueInclude, type?: FieldTypeInclude | undefined);
    get is(): boolean;
    get disabledPrevious(): boolean;
    get disabledNext(): boolean;
    isCarousel(): boolean;
    isStepper(): boolean;
    isPrevious(value: number): boolean;
    isNext(value: number): boolean;
    get(): FieldArrowProps['arrow'] | undefined;
    align(): string | undefined;
    previous(): this;
    next(): this;
    toMin(): this;
    toMax(): this;
}


// File: src/classes/Field/FieldAttributesInclude.d.ts
import { FieldTypeInclude } from './FieldTypeInclude';
import { FieldPatternInclude } from './FieldPatternInclude';
import { FieldInputModeInclude } from './FieldInputModeInclude';
import { FieldAllProps } from '../../types/fieldTypes';
export declare class FieldAttributesInclude {
    constructor(props: FieldAllProps, type?: FieldTypeInclude | undefined, pattern?: FieldPatternInclude | undefined, inputMode?: FieldInputModeInclude | undefined, typeDefault?: string);
    get list(): Record<string, any>;
    get listForCheck(): Record<string, any>;
    get listForInput(): Record<string, any>;
    get listForCheckbox(): Record<string, any>;
}


// File: src/classes/Field/FieldChangeInclude.d.ts
import { FieldAllProps } from '../../types/fieldTypes';
import { Ref } from 'vue';
export declare class FieldChangeInclude {
    readonly item: Ref<boolean, boolean>;
    constructor(props: FieldAllProps);
    is(): boolean;
    set(change: boolean): void;
    to(): void;
}


// File: src/classes/Field/FieldCodeInclude.d.ts
import { FieldAllProps } from '../../types/fieldTypes';
export declare class FieldCodeInclude {
    constructor(props: FieldAllProps);
    get(state?: ValidityState): string | undefined;
}


// File: src/classes/Field/FieldElementInclude.d.ts
import { Ref } from 'vue';
import { FieldAllProps, FieldElementInput } from '../../types/fieldTypes';
export declare class FieldElementInclude {
    constructor(props: FieldAllProps, element: Ref<FieldElementInput>);
    get(): HTMLInputElement | undefined;
    getElement(): Ref<FieldElementInput>;
    findByName(nameSelectors: string | HTMLInputElement): HTMLInputElement | undefined;
    clear(): this;
}


// File: src/classes/Field/FieldEventInclude.d.ts
import { ConstrEmit } from '@dxtmisha/functional';
import { FieldChangeInclude } from './FieldChangeInclude';
import { FieldValueInclude } from './FieldValueInclude';
import { FieldValidationInclude } from './FieldValidationInclude';
import { ModelInclude } from '../ModelInclude';
import { FieldAllProps, FieldBasicEmits } from '../../types/fieldTypes';
export declare class FieldEventInclude {
    constructor(props: FieldAllProps, change: FieldChangeInclude, value: FieldValueInclude, validation?: FieldValidationInclude | undefined, emits?: ConstrEmit<FieldBasicEmits> | undefined);
    isEnabled(): boolean;
    readonly onBlur: () => void;
    readonly onInput: (event: InputEvent, data?: Record<string, any>) => void;
    readonly onChange: (event?: InputEvent | Event) => void;
    readonly onSelect: (event: Event, data?: Record<string, any>) => void;
    readonly onChecked: (event: Event) => void;
    readonly onRadio: (event: Event) => void;
    readonly onClear: (event: MouseEvent) => void;
    readonly onValue: (value: any) => void;
    readonly on: <E>(event?: E, type?: string & keyof FieldBasicEmits) => this;
}


// File: src/classes/Field/FieldInputCheckInclude.d.ts
import { FieldCodeInclude } from './FieldCodeInclude';
import { FieldElementDom, FieldPatternItemOrFunction, FieldValidationItem } from '../../types/fieldTypes';
export declare class FieldInputCheckInclude<Value = any> {
    readonly pattern: FieldPatternItemOrFunction;
    readonly group: string;
    readonly input: HTMLInputElement | undefined;
    constructor(pattern: FieldPatternItemOrFunction, group?: string, code?: FieldCodeInclude | undefined);
    check(value: Value): FieldValidationItem;
    checkByInput(input: FieldElementDom): FieldValidationItem;
    static getGroupDefault(): string;
}
export type FieldInputCheckListInclude = Record<string, FieldInputCheckInclude>;


// File: src/classes/Field/FieldInputModeInclude.d.ts
import { FieldTypeInclude } from './FieldTypeInclude';
import { FieldAllProps } from '../../types/fieldTypes';
export declare class FieldInputModeInclude {
    constructor(props: FieldAllProps, type: FieldTypeInclude);
    get item(): string | undefined;
    get autocomplete(): string | undefined;
}


// File: src/classes/Field/FieldMatchInclude.d.ts
import { TextInclude } from '../TextInclude';
import { FieldElementInclude } from './FieldElementInclude';
import { FieldValueInclude } from './FieldValueInclude';
import { FieldAllProps, FieldValidationItem } from '../../types/fieldTypes';
export declare class FieldMatchInclude {
    constructor(props: FieldAllProps, element: FieldElementInclude, value: FieldValueInclude, text?: TextInclude | undefined);
    is(): boolean;
    getSelectors(): string | HTMLInputElement | undefined;
    getValidationMessage(): string;
    check(): FieldValidationItem | undefined;
}


// File: src/classes/Field/FieldPatternInclude.d.ts
import { FieldTypeInclude } from './FieldTypeInclude';
import { FieldAllProps } from '../../types/fieldTypes';
export declare class FieldPatternInclude {
    constructor(props: FieldAllProps, type?: FieldTypeInclude | undefined);
    get item(): string | undefined;
}


// File: src/classes/Field/FieldTypeInclude.d.ts
import { FieldVisibilityInclude } from './FieldVisibilityInclude';
import { FieldAllProps, FieldType } from '../../types/fieldTypes';
export declare class FieldTypeInclude {
    constructor(props: FieldAllProps, visibility?: FieldVisibilityInclude | undefined);
    get item(): FieldType;
    get(): FieldType;
}


// File: src/classes/Field/FieldValidationInclude.d.ts
import { FieldAttributesInclude } from './FieldAttributesInclude';
import { FieldChangeInclude } from './FieldChangeInclude';
import { FieldValueInclude } from './FieldValueInclude';
import { FieldCodeInclude } from './FieldCodeInclude';
import { FieldMatchInclude } from './FieldMatchInclude';
import { FieldAllProps, FieldValidationItem } from '../../types/fieldTypes';
import { ComputedRef } from 'vue';
export declare class FieldValidationInclude {
    constructor(props: FieldAllProps, attributes: FieldAttributesInclude, value: FieldValueInclude, change?: FieldChangeInclude | undefined, code?: FieldCodeInclude | undefined, match?: FieldMatchInclude | undefined);
    readonly item: ComputedRef<FieldValidationItem>;
    get message(): string;
    isError(): boolean;
    readonly checkValidity: () => boolean;
    readonly expose: () => {
        checkValidity: () => boolean;
        getValidationMessage: () => string;
    };
    set(validation: Record<string, any> | FieldValidationItem): this;
}


// File: src/classes/Field/FieldValueInclude.d.ts
import { ToRefs, Ref, ComputedRef } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';
import { FieldElementInclude } from './FieldElementInclude';
import { FieldValueProps } from '../../types/fieldTypes';
export declare class FieldValueInclude<Value = any> {
    readonly item: Ref<Value | undefined, Value | undefined>;
    readonly isFull: Ref<boolean, boolean>;
    constructor(props: FieldValueProps<Value>, refs: ToRefs<FieldValueProps<Value>>, element?: FieldElementInclude | undefined, original?: RefOrNormal<Value> | undefined);
    readonly itemByFull: ComputedRef<Value | undefined>;
    get number(): number;
    get string(): string;
    get boolean(): boolean;
    get length(): number;
    is(): boolean;
    isValue(): boolean;
    get(): Value | undefined;
    getToArray(): Value[];
    readonly expose: () => {
        value: Ref<Value | undefined, Value | undefined>;
        getValue: () => Value | undefined;
    };
    set(value: any): this;
    setByEvent(eventValue: Event | Record<string, any> | any): this;
    setByTarget(target: HTMLInputElement): this;
    setByChecked(event: Event): this;
    setByRadio(event: Event): this;
    setFull(isFull: boolean): void;
    setHasEdit(hasEdit: boolean): void;
    setToOriginal(): this;
    clear(): this;
}


// File: src/classes/Field/FieldVisibilityInclude.d.ts
import { Ref } from 'vue';
export declare class FieldVisibilityInclude {
    readonly item: Ref<boolean, boolean>;
    toggle(): this;
}


// File: src/classes/FocusDirectionInclude.d.ts
import { Ref } from 'vue';
export type FocusCoordinates = {
    x: number;
    y: number;
};
export declare class FocusDirectionInclude {
    constructor(element: Ref<HTMLElement | undefined>, selector?: string, activeSelector?: string, activeClass?: string);
    get binds(): {
        tabindex: number;
        onFocus: () => void;
        onBlur: () => void;
    };
    activateDefault(): this;
    clearActive(): this;
    readonly onFocus: () => void;
    readonly onBlur: () => void;
}


// File: src/classes/LabelHighlightInclude.d.ts
import { VNode } from 'vue';
import { ConstrClass } from '@dxtmisha/functional';
import { LabelInclude } from './LabelInclude';
import { SkeletonInclude } from '../constructors/Skeleton';
import { LabelHighlightProps, LabelHighlightSlots } from '../types/labelTypes';
export declare class LabelHighlightInclude extends LabelInclude {
    constructor(props: Readonly<LabelHighlightProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: LabelHighlightSlots | undefined, elementsExtra?: (() => VNode[]) | undefined, skeleton?: SkeletonInclude | undefined);
    isHighlight(): boolean;
}


// File: src/classes/LabelInclude.d.ts
import { Ref, VNode } from 'vue';
import { ConstrClass, RefOrNormalOrFunction } from '@dxtmisha/functional';
import { SkeletonInclude } from '../constructors/Skeleton';
import { LabelAlternativeSlots, LabelProps, LabelSlots } from '../types/labelTypes';
export declare class LabelInclude {
    constructor(props: RefOrNormalOrFunction<LabelProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: (LabelSlots | LabelAlternativeSlots) | undefined, elementsExtra?: (() => VNode[]) | undefined, labelReplacing?: Ref<string | number | undefined> | undefined, alternativeSlots?: boolean | undefined, skeleton?: SkeletonInclude | undefined, tag?: RefOrNormalOrFunction<string | undefined>);
    get is(): boolean;
    get id(): string;
    render(childrenExtra?: any[], props?: Record<string, any>): VNode[];
}


// File: src/classes/LabelNumberInclude.d.ts
import { VNode } from 'vue';
import { ConstrClass } from '@dxtmisha/functional';
import { LabelInclude } from './LabelInclude';
import { SkeletonInclude } from '../constructors/Skeleton';
import { LabelNumberProps, LabelNumberSlots } from '../types/labelTypes';
export declare class LabelNumberInclude extends LabelInclude {
    constructor(props: Readonly<LabelNumberProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: LabelNumberSlots | undefined, elementsExtra?: (() => VNode[]) | undefined, skeleton?: SkeletonInclude | undefined);
}


// File: src/classes/ModelInclude.d.ts
import { Ref } from 'vue';
import { RefType } from '@dxtmisha/functional';
export declare class ModelInclude<Value = string> {
    constructor(index: string, emits?: any | undefined, syncValue?: RefType<Value> | undefined);
    isValue(): this is {
        syncValue: Ref<Value>;
    };
    getBinds(): {
        [x: string]: Value | ((value: Value) => void);
    };
    readonly update: (value: Value) => void;
    emit(value: Value): void;
}


// File: src/classes/ModelValueInclude.d.ts
import { RefType } from '@dxtmisha/functional';
import { EventClickInclude } from './EventClickInclude';
import { EventClickValue } from '../types/eventClickTypes';
import { Ref } from 'vue';
export declare class ModelValueInclude<Value = any> {
    readonly value: Ref<Value | undefined, Value | undefined>;
    constructor(index: string, emits?: any | undefined, event?: EventClickInclude | undefined, inputValue?: RefType<any> | undefined, readonly?: RefType<boolean | undefined> | undefined, multiple?: RefType<boolean | undefined> | undefined);
    getValue(): Value | undefined;
    readonly onClick: (event: MouseEvent, options?: EventClickValue) => void;
    readonly onUpdate: (value: Value) => void;
}


// File: src/classes/Plugin/Plugin.d.ts
import { Plugin as VitePlugin } from 'vite';
import { PluginComponentImports, PluginOptions } from '../../types/pluginTypes';
export declare class Plugin {
    constructor(design: string, packageName: string, componentsReg: RegExp, styleVarsReg: RegExp, componentsList: PluginComponentImports, name?: string, options?: PluginOptions);
    init(): VitePlugin;
}


// File: src/classes/Plugin/PluginCode.d.ts
export declare class PluginCode {
    constructor(id: string, code: string);
    isVue(): boolean;
    isScss(): boolean;
    get(): string;
    getId(): string;
    getCode(): string;
    has(pattern: string | RegExp, flags?: string): boolean;
    addAfterScript(code: string): this;
    addStart(code: string): this;
    addStartIfNone(code: string, pattern?: string | RegExp): this;
    replace(pattern: string | RegExp, replacement: string | ((substring: string, ...args: any[]) => string)): this;
}


// File: src/classes/Plugin/PluginComponents.d.ts
import { PluginCode } from './PluginCode';
import { PluginData } from './PluginData';
export declare class PluginComponents {
    constructor(code: PluginCode, pluginData: PluginData);
    make(): void;
}


// File: src/classes/Plugin/PluginData.d.ts
import { PluginComponentImports } from '../../types/pluginTypes';
export declare class PluginData {
    constructor(design: string, packageName: string, componentsReg: RegExp, styleVarsReg: RegExp, componentsList: PluginComponentImports);
    hasComponent(code: string): boolean;
    hasVars(code: string): boolean;
    getDesign(): string;
    getPackageName(): string;
    getComponents(code: string): PluginComponentImports;
    getStyleVarsReg(): RegExp;
    getStyleModification(): Record<string, string>;
}


// File: src/classes/Plugin/PluginImport.d.ts
export declare class PluginImport {
    constructor(packageName: string, code: string);
    get(): string;
    importStyle(): this;
}


// File: src/classes/Plugin/PluginStyle.d.ts
import { PluginData } from './PluginData';
import { PluginCode } from './PluginCode';
export declare class PluginStyle {
    constructor(code: PluginCode, data: PluginData, namespace?: string);
    make(): this;
}


// File: src/classes/Plugin/PluginTool.d.ts
export declare class PluginTool {
    static isSrc(id: string): boolean;
    static isJs(id: string): boolean;
    static isVue(id: string): boolean;
    static isCss(id: string): boolean;
    static isDev(mode: string): boolean;
}


// File: src/classes/PrefixInclude.d.ts
import { VNode } from 'vue';
import { SkeletonInclude } from '../constructors/Skeleton';
import { PrefixProps, PrefixSlots } from '../types/prefixTypes';
export declare class PrefixInclude {
    constructor(props: Readonly<PrefixProps>, className: string, slots?: PrefixSlots | undefined, skeleton?: SkeletonInclude | undefined);
    get is(): boolean;
    get id(): string;
    get describedby(): string;
    render(): VNode[];
}


// File: src/classes/ScrollToXInclude.d.ts
import { Ref } from 'vue';
export declare class ScrollToXInclude {
    constructor(element: Ref<HTMLElement | undefined>);
    get binds(): {
        onWheelPassive: (event: WheelEvent) => void;
    };
    readonly onScrollToX: (event: WheelEvent) => void;
}


// File: src/classes/SuffixInclude.d.ts
import { VNode } from 'vue';
import { SkeletonInclude } from '../constructors/Skeleton';
import { SuffixProps, SuffixSlots } from '../types/suffixTypes';
export declare class SuffixInclude {
    constructor(props: Readonly<SuffixProps>, className: string, slots?: SuffixSlots | undefined, skeleton?: SkeletonInclude | undefined);
    get is(): boolean;
    get id(): string;
    get describedby(): string;
    render(): VNode[];
}


// File: src/classes/TabIndexInclude.d.ts
import { Ref } from 'vue';
export declare class TabIndexInclude<E extends HTMLElement = HTMLElement> {
    constructor(element: Ref<E | undefined> | (() => E | undefined), active?: () => boolean, activeOpen?: () => boolean, activeClose?: () => boolean);
    goTo(): this;
    reset(): this;
    toggle(status: boolean): this;
    updateOldElement(): void;
    findFirstElement(): HTMLElement | undefined;
    findLastElement(): HTMLElement | undefined;
}


// File: src/classes/TeleportInclude.d.ts
import { VNode } from 'vue';
import { RawChildren, RawSlots, RefOrNormal } from '@dxtmisha/functional';
export declare class TeleportInclude {
    constructor(toDefault?: RefOrNormal<string>);
    get to(): string;
    isTeleportElement(element: HTMLElement): boolean;
    render(children?: RawChildren | RawSlots, props?: Record<string, any>): VNode[];
}


// File: src/classes/TextInclude.d.ts
import { ShallowRef } from 'vue';
import { TextIncludeInstance } from './TextIncludeInstance';
import { TextAllPropsInclude, TextIndex, TextList, TextValue } from '../types/textTypes';
export declare class TextInclude {
    static getObject(): TextIncludeInstance;
    static get list(): ShallowRef<TextList>;
    static initText(texts: TextList): void;
    readonly texts: Record<string, () => (string | undefined)>;
    constructor(props: TextAllPropsInclude);
    get cancel(): string | undefined;
    get characterLimit(): string | undefined;
    get characterRemaining(): string | undefined;
    get close(): string | undefined;
    get copiedClipboard(): string | undefined;
    get decrement(): string | undefined;
    get entriesMatch(): string | undefined;
    get first(): string | undefined;
    get hide(): string | undefined;
    get increment(): string | undefined;
    get info(): string | undefined;
    get last(): string | undefined;
    get loading(): string | undefined;
    get more(): string | undefined;
    get morePrev(): string | undefined;
    get next(): string | undefined;
    get notFound(): string | undefined;
    get notifications(): string | undefined;
    get ok(): string | undefined;
    get page(): string | undefined;
    get previous(): string | undefined;
    get rowsPerPage(): string | undefined;
    get show(): string | undefined;
    get(name: keyof TextAllPropsInclude): string | undefined;
}


// File: src/classes/TextIncludeInstance.d.ts
import { TextIndex, TextList } from '../types/textTypes';
import { ShallowRef } from 'vue';
export declare class TextIncludeInstance {
    readonly list: ShallowRef<TextList, TextList>;
    initText(texts: TextList): void;
    getGlobalText(index: TextIndex): string | undefined;
}


// File: src/classes/TouchEventInclude.d.ts
import { Ref } from 'vue';
import { TouchEventCallback, TouchEventClient } from '../types/touchEventTypes';
export declare class TouchEventInclude {
    readonly touche: Ref<Touch | undefined, Touch | undefined>;
    readonly toucheMove: Ref<Touch | undefined, Touch | undefined>;
    readonly mouse: Ref<TouchEventClient | undefined, TouchEventClient | undefined>;
    readonly mouseMove: Ref<TouchEventClient | undefined, TouchEventClient | undefined>;
    constructor(start?: ((mouse: TouchEventClient, touche?: Touch) => void) | undefined, move?: TouchEventCallback | undefined, end?: TouchEventCallback | undefined, element?: Ref<HTMLElement | undefined> | undefined);
    readonly onTouch: {
        onTouchstart: (event: TouchEvent) => void;
        onTouchend: (event: TouchEvent) => void;
        onTouchcancel: (event: TouchEvent) => void;
        onTouchmove: (event: TouchEvent) => void;
    };
    readonly onMouse: {
        onMousedown: (event: MouseEvent) => void;
        onMouseup: (event: MouseEvent) => void;
        onMousemove: (event: MouseEvent) => void;
    };
}


// File: src/constructors/Accordion/props.d.ts
import { ConstrBind } from '@dxtmisha/functional';
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { IconLitePropsInclude, IconPropsBasic, IconValue } from '../Icon';
import { CellPropsBasic } from '../Cell';
import { MotionTransformPropsBasic, MotionTransformPropsInclude } from '../MotionTransform';
import { ModelPropsOpen } from '../../types/modelTypes';
export type AccordionPropsToken = {
    divider?: boolean;
};
export type AccordionPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Cell extends CellPropsBasic = CellPropsBasic, MotionTransform extends MotionTransformPropsBasic = MotionTransformPropsBasic> = LabelProps & DescriptionProps & IconLitePropsInclude<Icon> & MotionTransformPropsInclude<MotionTransform> & ModelPropsOpen & {
    iconArrowDown?: IconValue<Icon>;
    cellAttrs?: ConstrBind<Cell>;
};
export type AccordionProps = AccordionPropsBasic & AccordionPropsToken;
export declare const defaultsAccordion: {
    divider: boolean;
    clickOpen: boolean;
    autoClose: boolean;
};


// File: src/constructors/ActionSheet/props.d.ts
import { WindowPropsBasic, WindowPropsInclude } from '../Window';
import { BarsPropsBasic, BarsPropsInclude } from '../Bars';
import { ActionsPropsBasic, ActionsPropsInclude } from '../Actions';
export type ActionSheetPropsToken = {};
export type ActionSheetPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = WindowPropsInclude<Window> & BarsPropsInclude<Bars> & ActionsPropsInclude<Actions> & {
    open?: boolean;
    touchClose?: boolean;
};
export type ActionSheetProps = ActionSheetPropsBasic & ActionSheetPropsToken;
export declare const defaultsActionSheet: {
    barsBackHide: boolean;
    touchClose: boolean;
};


// File: src/constructors/Actions/props.d.ts
import { ConstrBind } from '@dxtmisha/functional';
import { AreaPropsInclude } from '../../types/areaTypes';
import { ButtonPropsBasic } from '../Button';
export type ActionsPropsToken = {
    align?: 'none' | 'center' | 'left' | 'right' | 'block' | 'auto';
    flexible?: boolean;
    wrap?: boolean;
};
export type ActionsPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic> = AreaPropsInclude & {
    list?: ConstrBind<Button>[];
    listSecondary?: ConstrBind<Button>[];
    buttonAttrs?: ConstrBind<Button>;
    buttonSecondaryAttrs?: ConstrBind<Button>;
};
export type ActionsProps = ActionsPropsBasic & ActionsPropsToken;
export declare const defaultsActions: {
    align: string;
    area: string;
};


// File: src/constructors/Anchor/props.d.ts
import { IconPropsBasic, IconValue } from '../Icon';
import { TooltipProps, TooltipPropsInclude } from '../Tooltip';
import { LabelProps } from '../../types/labelTypes';
import { TextCopiedClipboardPropsInclude } from '../../types/textTypes';
import { AnchorScrollProps } from './basicTypes';
export type AnchorPropsToken = {};
export type AnchorPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Tooltip extends TooltipProps = TooltipProps> = LabelProps & TooltipPropsInclude<Tooltip> & TextCopiedClipboardPropsInclude & AnchorScrollProps & {
    hide?: boolean;
    name?: string;
    isCopy?: boolean;
    iconLink?: IconValue<Icon>;
    iconTag?: IconValue<Icon>;
    iconContentCopy?: IconValue<Icon>;
    delayHide?: number;
};
export type AnchorProps = AnchorPropsBasic & AnchorPropsToken;
export declare const defaultsAnchor: {
    shift: number;
    delayHide: number;
};


// File: src/constructors/Area/props.d.ts
type AreaPropsToken = {};
export type AreaPropsBasic = {
    areaDefault?: string;
};
export type AreaProps = AreaPropsBasic & AreaPropsToken;
export declare const defaultsArea: {};


// File: src/constructors/Arrow/props.d.ts
import { ClientOnlyPropsInclude } from '../../types/clientOnlyTypes';
export type ArrowPropsToken = {
    position?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
};
export type ArrowPropsBasic = ClientOnlyPropsInclude & {
    elementTarget?: HTMLElement | string;
};
export type ArrowProps = ArrowPropsBasic & ArrowPropsToken;
export declare const defaultsArrow: {
    position: string;
};


// File: src/constructors/Badge/props.d.ts
import { IconPropsBasic, IconPropsInclude } from '../Icon';
import { LabelNumberProps } from '../../types/labelTypes';
import { AriaLabelPropsInclude } from '../../types/ariaTypes';
export type BadgePropsToken = {
    selected?: boolean;
    hide?: boolean;
    dot?: boolean;
    overlap?: 'rectangular' | 'circular' | 'static';
    vertical?: 'top' | 'center' | 'bottom';
    horizontal?: 'right' | 'center' | 'left';
};
export type BadgePropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = IconPropsInclude<Icon> & LabelNumberProps & AriaLabelPropsInclude & {
    dot?: boolean;
};
export type BadgeProps = BadgePropsBasic & BadgePropsToken;
export declare const defaultsBadge: {
    overlap: string;
    vertical: string;
    horizontal: string;
};


// File: src/constructors/Bars/props.d.ts
import { ConstrBind } from '@dxtmisha/functional';
import { IconPropsBasic, IconValue } from '../Icon';
import { ButtonPropsBasic } from '../Button';
import { SkeletonPropsInclude } from '../Skeleton';
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { TextClosePropsInclude } from '../../types/textTypes';
export type BarsPropsToken = {};
export type BarsPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic> = LabelProps & DescriptionProps & SkeletonPropsInclude & TextClosePropsInclude & {
    'action'?: boolean;
    'backButton'?: ConstrBind<Button>;
    'backHide'?: boolean;
    'backActionHide'?: boolean;
    'bars'?: ConstrBind<Button>[];
    'actionLabel'?: LabelProps['label'];
    'actionDescription'?: DescriptionProps['description'];
    'actionBars'?: ConstrBind<Button>[];
    'buttonAttrs'?: ConstrBind<Button>;
    'iconBack'?: IconValue<Icon>;
    'iconClose'?: IconValue<Icon>;
    'modelAction'?: boolean;
    'onUpdate:action'?: (value: boolean) => void;
    'onUpdate:modelAction'?: (value: boolean) => void;
};
export type BarsProps = BarsPropsBasic & BarsPropsToken;
export declare const defaultsBars: {};


// File: src/constructors/Bleed/props.d.ts
type BleedPropsToken = {};
export type BleedPropsBasic = {
    tag?: string;
};
export type BleedProps = BleedPropsBasic & BleedPropsToken;
export declare const defaultsBleed: {
    tag: string;
};


// File: src/constructors/Block/props.d.ts
import { IconPropsBasic } from '../Icon';
import { AreaPropsInclude } from '../../types/areaTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { HeaderPropsBasic, HeaderPropsInclude } from '../Header';
export type BlockPropsToken = {};
export type BlockPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = HeaderPropsInclude<Icon, Header> & DescriptionProps & AreaPropsInclude & {
    headline?: string;
    tag?: string;
};
export type BlockProps = BlockPropsBasic & BlockPropsToken;
export declare const defaultsBlock: {
    area: string;
    tag: string;
    tagHeader: string;
};


// File: src/constructors/Button/props.d.ts
import { ConstrHrefProps } from '@dxtmisha/functional';
import { IconPropsBasic, IconTrailingPropsInclude } from '../Icon';
import { ProgressPropsBasic, ProgressPropsInclude } from '../Progress';
import { SkeletonPropsInclude } from '../Skeleton';
import { LabelProps } from '../../types/labelTypes';
import { EnabledProps } from '../../types/enabledTypes';
import { EventClickProps } from '../../types/eventClickTypes';
import { AriaLabelPropsInclude } from '../../types/ariaTypes';
export type ButtonPropsToken = {
    focus?: boolean;
    disabled?: boolean;
    selected?: boolean;
    readonly?: boolean;
    adaptive?: 'iconAlways' | 'block' | 'auto';
    container?: boolean;
    inverse?: boolean;
    grid?: boolean;
    textAlign?: 'left' | 'center' | 'right';
};
export type ButtonPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & EnabledProps & IconTrailingPropsInclude<Icon> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & EventClickProps & ConstrHrefProps & AriaLabelPropsInclude & {
    tag?: 'button' | 'a' | 'span' | string;
    type?: 'button' | 'submit' | 'reset' | string;
};
export type ButtonProps = ButtonPropsBasic & ButtonPropsToken;
export declare const defaultsButton: {};


// File: src/constructors/ButtonGroup/props.d.ts
import { ConstrBind } from '@dxtmisha/functional';
import { ButtonPropsBasic } from '../Button';
import { AreaPropsInclude } from '../../types/areaTypes';
type ButtonGroupPropsToken = {
    orientation?: 'horizontal' | 'vertical';
    wrap?: boolean;
};
export type ButtonGroupPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic> = AreaPropsInclude & {
    list?: ConstrBind<Button>[];
    buttonAttrs?: ConstrBind<Button>;
};
export type ButtonGroupProps = ButtonGroupPropsBasic & ButtonGroupPropsToken;
export declare const defaultsButtonGroup: {
    orientation: string;
    area: string;
};


// File: src/constructors/Cell/props.d.ts
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { CaptionProps } from '../../types/captionTypes';
import { EnabledProps } from '../../types/enabledTypes';
import { SkeletonPropsInclude } from '../Skeleton';
import { EventClickProps } from '../../types/eventClickTypes';
import { IconPropsBasic, IconTrailingPropsInclude } from '../Icon';
import { ProgressPropsBasic, ProgressPropsInclude } from '../Progress';
import { AriaRolePropsInclude } from '../../types/ariaTypes';
export type CellPropsToken = {
    focus?: boolean;
    selected?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    dynamic?: boolean;
    dynamicHover?: boolean;
    divider?: boolean;
    dividerLabel?: 'always' | 'none';
    iconTop?: boolean;
};
export type CellPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & DescriptionProps & CaptionProps & EnabledProps & IconTrailingPropsInclude<Icon> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & EventClickProps & AriaRolePropsInclude & {
    tag?: string;
    divider?: boolean;
    dynamic?: boolean;
};
export type CellProps = CellPropsBasic & CellPropsToken;
export declare const defaultsCell: {
    divider: boolean;
    tag: string;
};


// File: src/constructors/Checkbox/props.d.ts
import { ConstrBind } from '@dxtmisha/functional';
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { FieldInputCheckProps } from '../../types/fieldTypes';
import { EnabledProps } from '../../types/enabledTypes';
import { ModelProps, ModelPropsSelected } from '../../types/modelTypes';
import { ImagePropsBasic } from '../Image';
import { FieldMessagePropsBasic, FieldMessagePropsInclude } from '../FieldMessage';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { ProgressPropsBasic, ProgressPropsInclude } from '../Progress';
import { SkeletonPropsInclude } from '../Skeleton';
type CheckboxPropsToken = {
    block?: boolean;
    adaptive?: 'rightAlways';
    container?: boolean;
    required?: boolean;
    itemCenter?: boolean;
    focus?: boolean;
    disabled?: boolean;
};
export type CheckboxPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & DescriptionProps & FieldMessagePropsInclude<FieldMessage, FieldCounter> & FieldInputCheckProps & ProgressPropsInclude<Progress> & EnabledProps & ModelProps<boolean> & ModelPropsSelected & SkeletonPropsInclude & {
    selected?: string;
    iconCheckbox?: string | ConstrBind<Image> | null;
    iconIndeterminate?: string | ConstrBind<Image> | null;
};
export type CheckboxProps = CheckboxPropsBasic & CheckboxPropsToken;
export declare const defaultsCheckbox: {
    block: boolean;
    itemCenter: boolean;
    valueVariantHide: string;
};


// File: src/constructors/Chip/props.d.ts
import { IconPropsBasic } from '../Icon';
import { ProgressPropsBasic } from '../Progress';
import { ButtonPropsBasic } from '../Button';
export type ChipPropsToken = {
    focus?: boolean;
    disabled?: boolean;
    selected?: boolean;
    readonly?: boolean;
    adaptive?: 'iconAlways' | 'block' | 'auto';
    container?: boolean;
    inverse?: boolean;
    grid?: boolean;
    textAlign?: 'left' | 'center' | 'right';
};
export type ChipPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = ButtonPropsBasic<Icon, Progress>;
export type ChipProps = ChipPropsBasic & ChipPropsToken;
export declare const defaultsChip: {
    tag: string;
};


// File: src/constructors/ChipGroup/props.d.ts
import { ConstrBind, ListSelectedList } from '@dxtmisha/functional';
import { ChipPropsBasic } from '../Chip';
import { ChipGroupData } from './basicTypes';
import { ModelPropsSelected } from '../../types/modelTypes';
export type ChipGroupPropsToken = {};
export type ChipGroupPropsBasic<Chip extends ChipPropsBasic = ChipPropsBasic> = ModelPropsSelected<ListSelectedList> & {
    readonly?: boolean;
    selected?: ListSelectedList;
    list?: ChipGroupData;
    iconWhenSelected?: boolean;
    multiple?: boolean;
    keyLabel?: string;
    keyValue?: string;
    chipAttrs?: ConstrBind<Chip>;
};
export type ChipGroupProps = ChipGroupPropsBasic & ChipGroupPropsToken;
export declare const defaultsChipGroup: {
    readonly: boolean;
};


// File: src/constructors/ClientOnly/props.d.ts
import { ClientOnlyPropsInclude } from '../../types/clientOnlyTypes';
type ClientOnlyPropsToken = {};
export type ClientOnlyPropsBasic = ClientOnlyPropsInclude;
export type ClientOnlyProps = ClientOnlyPropsBasic & ClientOnlyPropsToken;
export declare const defaultsClientOnly: {
    clientOnly: boolean;
};


// File: src/constructors/Container/props.d.ts
import { AreaPropsInclude } from '../../types/areaTypes';
type ContainerPropsToken = {
    align?: 'left' | 'center' | 'right';
};
export type ContainerPropsBasic = AreaPropsInclude & {};
export type ContainerProps = ContainerPropsBasic & ContainerPropsToken;
export declare const defaultsContainer: {
    align: string;
    area: string;
};


// File: src/constructors/Dialog/props.d.ts
import { ConstrBind } from '@dxtmisha/functional';
import { WindowPropsBasic, WindowPropsInclude } from '../Window';
import { BarsPropsBasic, BarsPropsInclude } from '../Bars';
import { IconPropsBasic, IconValue } from '../Icon';
import { ImagePropsBasic, ImagePropsInclude } from '../Image';
import { ButtonPropsBasic } from '../Button';
import { ActionsPropsBasic, ActionsPropsInclude } from '../Actions';
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { TextClosePropsInclude, TextOkPropsInclude } from '../../types/textTypes';
export type DialogPropsToken = {
    success?: boolean;
    error?: boolean;
    imagePosition?: 'top' | 'left';
};
export type DialogPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = WindowPropsInclude<Window> & BarsPropsInclude<Bars> & ActionsPropsInclude<Actions> & ImagePropsInclude<Image> & LabelProps & DescriptionProps & TextClosePropsInclude & TextOkPropsInclude & {
    open?: boolean;
    icon?: IconValue<Icon>;
    buttonOk?: string | ConstrBind<Button> | null;
    buttonClose?: string | ConstrBind<Button> | null;
    closeButton?: boolean;
    clickOkAndClose?: boolean;
    iconSuccess?: IconValue<Icon>;
    iconError?: IconValue<Icon>;
    iconAttrs?: ConstrBind<Icon>;
};
export type DialogProps = DialogPropsBasic & DialogPropsToken;
export declare const defaultsDialog: {
    imagePosition: string;
    barsBackHide: boolean;
    barsHide: boolean;
    clickOkAndClose: boolean;
};


// File: src/constructors/Divider/props.d.ts
type DividerPropsToken = {};
export type DividerPropsBasic = {};
export type DividerProps = DividerPropsBasic & DividerPropsToken;
export declare const defaultsDivider: {};


// File: src/constructors/DraggableWrapper/props.d.ts
type DraggableWrapperPropsToken = {};
export type DraggableWrapperPropsBasic = {
    disabled?: boolean;
    tag?: string;
    delay?: number | string;
    classesSquare?: string | string[];
};
export type DraggableWrapperProps = DraggableWrapperPropsBasic & DraggableWrapperPropsToken;
export declare const defaultsDraggableWrapper: {
    tag: string;
};


// File: src/constructors/Dummy/props.d.ts
type DummyPropsToken = {};
export type DummyPropsBasic = {};
export type DummyProps = DummyPropsBasic & DummyPropsToken;
export declare const defaultsDummy: {};


// File: src/constructors/Field/props.d.ts
import { PrefixProps } from '../../types/prefixTypes';
import { SuffixProps } from '../../types/suffixTypes';
import { CaptionProps } from '../../types/captionTypes';
import { EnabledProps } from '../../types/enabledTypes';
import { TextCancelPropsInclude } from '../../types/textTypes';
import { EventClickProps } from '../../types/eventClickTypes';
import { IconPropsBasic, IconTrailingPropsInclude, IconValue } from '../Icon';
import { ProgressPropsBasic, ProgressPropsInclude } from '../Progress';
import { FieldLabelPropsBasic, FieldLabelPropsInclude } from '../FieldLabel';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { FieldMessagePropsBasic, FieldMessagePropsInclude } from '../FieldMessage';
import { SkeletonPropsInclude } from '../Skeleton';
export type FieldPropsToken = {
    focus?: boolean;
    disabled?: boolean;
    selected?: boolean;
    readonly?: boolean;
    block?: boolean;
    isValue?: boolean;
    basic?: boolean;
    boxed?: boolean;
    tonal?: boolean;
    filled?: boolean;
    outlined?: boolean;
    classic?: boolean;
    arrowCarousel?: boolean;
    arrowStepper?: boolean;
    arrowAlign?: 'center' | 'right' | 'left';
    cancel?: 'auto' | 'always' | 'none';
    align?: 'center' | 'right' | 'left';
    width?: string | 'custom';
};
export type FieldPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = IconTrailingPropsInclude<Icon> & PrefixProps & SuffixProps & CaptionProps & FieldLabelPropsInclude<FieldLabel, FieldCounter> & FieldMessagePropsInclude<FieldMessage, FieldCounter> & ProgressPropsInclude<Progress> & EnabledProps & EventClickProps & SkeletonPropsInclude & TextCancelPropsInclude & {
    disabledPrevious?: boolean;
    disabledNext?: boolean;
    id?: string | number;
    counterTop?: boolean;
    cancelShow?: boolean;
    iconArrowLeft?: IconValue<Icon>;
    iconArrowRight?: IconValue<Icon>;
    iconPlus?: IconValue<Icon>;
    iconMinus?: IconValue<Icon>;
    iconClose?: IconValue<Icon>;
};
export type FieldProps = FieldPropsBasic & FieldPropsToken;
export declare const defaultsField: {
    arrowAlign: string;
    cancel: string;
};


// File: src/constructors/FieldCounter/props.d.ts
import { TextCharacterLimitPropsInclude, TextCharacterRemainingPropsInclude } from '../../types/textTypes';
export type FieldCounterPropsToken = {};
export type FieldCounterPropsBasic = TextCharacterLimitPropsInclude & TextCharacterRemainingPropsInclude & {
    counter?: string | number;
    maxlength?: string | number;
    maxlengthOnce?: string | number;
    template?: string;
    id?: string;
};
export type FieldCounterProps = FieldCounterPropsBasic & FieldCounterPropsToken;
export declare const defaultsFieldCounter: {};


// File: src/constructors/FieldLabel/props.d.ts
import { LabelProps } from '../../types/labelTypes';
import { ProgressPropsBasic, ProgressPropsInclude } from '../Progress';
import { FieldCounterPropsBasic, FieldCounterPropsInclude } from '../FieldCounter';
import { SkeletonPropsInclude } from '../Skeleton';
export type FieldLabelPropsToken = {};
export type FieldLabelPropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & FieldCounterPropsInclude<FieldCounter> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & {
    for?: string;
    required?: boolean;
};
export type FieldLabelProps = FieldLabelPropsBasic & FieldLabelPropsToken;
export declare const defaultsFieldLabel: {};


// File: src/constructors/FieldMessage/props.d.ts
import { FieldCounterPropsBasic, FieldCounterPropsInclude } from '../FieldCounter';
import { SkeletonPropsInclude } from '../Skeleton';
export type FieldMessagePropsToken = {};
export type FieldMessagePropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> = FieldCounterPropsInclude<FieldCounter> & SkeletonPropsInclude & {
    forceShow?: boolean;
    hasHtmlCode?: boolean;
    disabled?: boolean;
    helperMessage?: string;
    validationMessage?: string;
    helperId?: string;
    validationId?: string;
};
export type FieldMessageProps = FieldMessagePropsBasic & FieldMessagePropsToken;
export declare const defaultsFieldMessage: {};


// File: src/constructors/Grid/props.d.ts
type GridPropsToken = {};
export type GridPropsBasic = {};
export type GridProps = GridPropsBasic & GridPropsToken;
export declare const defaultsGrid: {};


// File: src/constructors/GridItem/props.d.ts
type GridItemPropsToken = {
    base?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
};
export type GridItemPropsBasic = {};
export type GridItemProps = GridItemPropsBasic & GridItemPropsToken;
export declare const defaultsGridItem: {
    base: string;
};


// File: src/constructors/Group/props.d.ts
import { IconPropsBasic } from '../Icon';
import { BlockPropsBasic } from '../Block';
import { HeaderPropsBasic } from '../Header';
type GroupPropsToken = {};
export type GroupPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = BlockPropsBasic<Icon, Header>;
export type GroupProps = GroupPropsBasic & GroupPropsToken;
export declare const defaultsGroup: {
    area: string;
    tag: string;
    tagHeader: string;
};


// File: src/constructors/Header/props.d.ts
import { AreaPropsInclude } from '../../types/areaTypes';
import { CaptionProps } from '../../types/captionTypes';
import { LabelProps } from '../../types/labelTypes';
import { IconPropsBasic, IconPropsInclude } from '../Icon';
type HeaderPropsToken = {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
export type HeaderPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = LabelProps & CaptionProps & IconPropsInclude<Icon> & AreaPropsInclude;
export type HeaderProps = HeaderPropsBasic & HeaderPropsToken;
export declare const defaultsHeader: {
    tag: string;
    area: string;
};


// File: src/constructors/HorizontalScroll/props.d.ts
type HorizontalScrollPropsToken = {
    bleed?: boolean;
    align?: 'block' | 'center' | 'left' | 'right';
};
export type HorizontalScrollPropsBasic = {
    bleed?: boolean;
    tag?: string;
};
export type HorizontalScrollProps = HorizontalScrollPropsBasic & HorizontalScrollPropsToken;
export declare const defaultsHorizontalScroll: {
    bleed: boolean;
    align: string;
    tag: string;
};


// File: src/constructors/Icon/props.d.ts
import { ImagePropsBasic, ImageValue } from '../Image';
import { SkeletonPropsInclude } from '../Skeleton';
import { AriaLabelPropsInclude } from '../../types/ariaTypes';
import { EventClickProps } from '../../types/eventClickTypes';
import { RoleType } from '../../types/roleTypes';
export type IconPropsToken = {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    asPalette?: boolean;
    dir?: boolean;
    overlay?: boolean;
    dynamic?: boolean;
    start?: boolean;
    end?: boolean;
    high?: boolean;
    animationType?: 'type1' | 'type2';
    animationShow?: boolean;
};
export type IconPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic> = SkeletonPropsInclude & AriaLabelPropsInclude & EventClickProps & {
    active?: boolean;
    icon?: ImageValue<Image>;
    iconActive?: ImageValue<Image>;
    role?: RoleType;
    tabindex?: number | string;
};
export type IconProps = IconPropsBasic & IconPropsToken;
export declare const defaultsIcon: {
    animationType: string;
};


// File: src/constructors/Image/props.d.ts
import { ImagePicture } from './basicTypes';
export type ImagePropsToken = {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    adaptive?: boolean;
    size?: 'auto' | 'contain' | 'cover';
};
export type ImagePropsBasic = {
    value?: string | any;
    url?: string;
    adaptiveGroup?: string;
    adaptiveAlways?: boolean;
    objectWidth?: string | number;
    objectHeight?: string | number;
    coordinator?: number[] | any;
    x?: string | number;
    y?: string | number;
    tagImg?: boolean;
    srcset?: string | Record<string, string>;
    picture?: ImagePicture;
    alt?: string;
    lazy?: boolean;
    preloadOffset?: string;
    fetchPriority?: HTMLImageElement['fetchPriority'];
};
export type ImageProps = ImagePropsBasic & ImagePropsToken;
export declare const defaultsImage: {
    adaptiveGroup: string;
    preloadOffset: string;
};


// File: src/constructors/Input/props.d.ts
import { NumberOrString } from '@dxtmisha/functional';
import { MaskPropsBasic, MaskPropsInclude } from '../Mask';
import { IconPropsBasic } from '../Icon';
import { FieldPropsBasic, FieldPropsInclude } from '../Field';
import { FieldLabelPropsBasic } from '../FieldLabel';
import { FieldMessagePropsBasic } from '../FieldMessage';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { ProgressPropsBasic } from '../Progress';
import { FieldInputProps } from '../../types/fieldTypes';
export type InputPropsToken = {};
export type InputPropsBasic<Mask extends MaskPropsBasic = MaskPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = MaskPropsInclude<Mask> & FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldInputProps<NumberOrString>;
export type InputProps = InputPropsBasic & InputPropsToken;
export declare const defaultsInput: {
    type: string;
    autocomplete: string;
    arrow: string;
    maskVisible: boolean;
};


// File: src/constructors/InputPhone/props.d.ts
import { IconPropsBasic } from '../Icon';
import { InputPhoneDialCodePropsBasic, InputPhoneDialCodePropsInclude } from '../InputPhoneDialCode';
import { FieldPropsBasic, FieldPropsInclude } from '../Field';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { FieldLabelPropsBasic } from '../FieldLabel';
import { FieldMessagePropsBasic } from '../FieldMessage';
import { ProgressPropsBasic } from '../Progress';
import { FieldInputPhoneProps } from '../../types/fieldTypes';
import { ConstrBind } from '@dxtmisha/functional';
import { MaskPropsBasic } from '../Mask';
type InputPhonePropsToken = {};
export type InputPhonePropsBasic<InputPhoneDialCode extends InputPhoneDialCodePropsBasic = InputPhoneDialCodePropsBasic, Mask extends MaskPropsBasic = MaskPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = InputPhoneDialCodePropsInclude<InputPhoneDialCode> & Omit<FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress>, 'caption' | 'counterShow'> & FieldInputPhoneProps & {
    countryDefault?: string;
    countryBlock?: boolean;
    maskAttrs?: ConstrBind<Mask>;
};
export type InputPhoneProps = InputPhonePropsBasic & InputPhonePropsToken;
export declare const defaultsInputPhone: {};


// File: src/constructors/InputPhoneDialCode/props.d.ts
import { ListSelectedList } from '@dxtmisha/functional';
import { ButtonPropsBasic, ButtonPropsInclude } from '../Button';
import { MenuCountryPropsBasic, MenuCountryPropsInclude } from '../MenuCountry';
import { IconPropsBasic, IconValue } from '../Icon';
import { ModelPropsSelected } from '../../types/modelTypes';
type InputPhoneDialCodePropsToken = {};
export type InputPhoneDialCodePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, MenuCountry extends MenuCountryPropsBasic = MenuCountryPropsBasic> = ButtonPropsInclude<Button> & MenuCountryPropsInclude<MenuCountry> & ModelPropsSelected<ListSelectedList> & {
    value?: string;
    labelType?: 'name' | 'code' | 'none';
    iconArrowDown?: IconValue<Icon>;
};
export type InputPhoneDialCodeProps = InputPhoneDialCodePropsBasic & InputPhoneDialCodePropsToken;
export declare const defaultsInputPhoneDialCode: {};


// File: src/constructors/InputSocial/props.d.ts
import { InputSocialTypeValue } from '@dxtmisha/media';
import { MaskPropsBasic, MaskPropsInclude } from '../Mask';
import { IconPropsBasic } from '../Icon';
import { FieldPropsBasic, FieldPropsInclude } from '../Field';
import { FieldLabelPropsBasic } from '../FieldLabel';
import { FieldMessagePropsBasic } from '../FieldMessage';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { ProgressPropsBasic } from '../Progress';
import { FieldInputSocialProps } from '../../types/fieldTypes';
export type InputSocialPropsToken = {};
export type InputSocialPropsBasic<Mask extends MaskPropsBasic = MaskPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = MaskPropsInclude<Mask> & FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldInputSocialProps & {
    socialType?: InputSocialTypeValue;
    socialIcons?: Record<InputSocialTypeValue, string>;
};
export type InputSocialProps = InputSocialPropsBasic & InputSocialPropsToken;
export declare const defaultsInputSocial: {
    type: string;
    autocomplete: string;
    maskVisible: boolean;
};


// File: src/constructors/List/props.d.ts
import { ConstrBind, ListRecord, ListSelectedItem, ListSelectedList } from '@dxtmisha/functional';
import { RoleType } from '../../types/roleTypes';
import { AriaMultiselectablePropsInclude, AriaRolePropsInclude } from '../../types/ariaTypes';
import { TextNotFoundPropsInclude } from '../../types/textTypes';
import { IconPropsBasic, IconValue } from '../Icon';
import { ListItemPropsBasic } from '../ListItem';
import { InputPropsBasic } from '../Input';
export type ListPropsToken = {
    axis?: 'x' | 'y';
    divider?: boolean;
};
export type ListPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, ListItem extends ListItemPropsBasic = ListItemPropsBasic, Input extends InputPropsBasic = InputPropsBasic> = AriaRolePropsInclude & AriaMultiselectablePropsInclude & TextNotFoundPropsInclude & {
    focus?: ListSelectedItem;
    selected?: ListSelectedList;
    disabled?: boolean;
    lite?: boolean;
    list?: ListRecord<ListItem>;
    liteThreshold?: number;
    highlight?: string;
    highlightLengthStart?: number;
    showSearch?: boolean;
    filterMode?: boolean;
    keyLabel?: string;
    keyValue?: string;
    max?: string | number;
    tag?: 'div' | 'button' | 'a' | 'span' | string;
    axis?: 'x' | 'y';
    divider?: boolean;
    selectionStyle?: ListItem['selectionStyle'];
    itemAttrs?: ConstrBind<ListItem>;
    itemManagementAttrs?: ConstrBind<ListItem>;
    itemGroupAttrs?: ConstrBind<ListItem>;
    itemMenuAttrs?: ConstrBind<ListItem>;
    inputSearchAttrs?: ConstrBind<Input>;
    iconArrowDown?: IconValue<Icon>;
    iconArrowRight?: IconValue<Icon>;
    iconSearch?: IconValue<Icon>;
    roleItem?: RoleType;
    tabindex?: string | number;
    control?: boolean;
};
export type ListProps = ListPropsBasic & ListPropsToken;
export declare const defaultsList: {
    axis: string;
    keyLabel: string;
    keyValue: string;
    tag: string;
    role: string;
    tabindex: number;
};


// File: src/constructors/ListGroup/props.d.ts
export type ListGroupPropsToken = {
    open?: boolean;
    divider?: boolean;
};
export type ListGroupPropsBasic = {
    divider?: boolean;
};
export type ListGroupProps = ListGroupPropsBasic & ListGroupPropsToken;
export declare const defaultsListGroup: {};


// File: src/constructors/ListItem/props.d.ts
import { ConstrBind } from '@dxtmisha/functional';
import { IconPropsBasic, IconTrailingPropsInclude, IconValue } from '../Icon';
import { BadgePropsBasic, BadgePropsInclude } from '../Badge';
import { ProgressPropsBasic, ProgressPropsInclude } from '../Progress';
import { SkeletonPropsInclude } from '../Skeleton';
import { CheckboxPropsBasic } from '../Checkbox';
import { RadioPropsBasic } from '../Radio';
import { AriaRolePropsInclude } from '../../types/ariaTypes';
import { LabelHighlightProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { PrefixProps } from '../../types/prefixTypes';
import { CaptionProps } from '../../types/captionTypes';
import { SuffixProps } from '../../types/suffixTypes';
import { EnabledProps } from '../../types/enabledTypes';
import { EventClickProps } from '../../types/eventClickTypes';
export type ListItemPropsToken = {
    focus?: boolean;
    open?: boolean;
    selectedChild?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    iconTop?: boolean;
    iconAlign?: 'center' | 'edge';
    controlPosition?: 'start' | 'end';
    fill?: string | 'custom';
    divider?: boolean;
};
export type ListItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic, Checkbox extends CheckboxPropsBasic = CheckboxPropsBasic, Radio extends RadioPropsBasic = RadioPropsBasic> = LabelHighlightProps & DescriptionProps & PrefixProps & CaptionProps & SuffixProps & IconTrailingPropsInclude<Icon> & BadgePropsInclude<Badge> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & EnabledProps & EventClickProps & AriaRolePropsInclude & {
    index?: any;
    href?: string;
    tag?: 'button' | 'a' | 'span' | 'li' | 'div' | string;
    filterMode?: boolean;
    divider?: boolean;
    selectionStyle?: 'radio' | 'checkbox' | 'checkmark' | 'none';
    tabindex?: number | string;
    checkboxAttrs?: ConstrBind<Checkbox>;
    radioAttrs?: ConstrBind<Radio>;
    iconCheckbox?: IconValue<Icon>;
    type?: string;
    parent?: string;
    listId?: number;
    search?: string;
};
export type ListItemProps = ListItemPropsBasic & ListItemPropsToken;
export declare const defaultsListItem: {
    iconAlign: string;
    controlPosition: string;
    tabindex: string;
    role: string;
    selectionStyle: string;
};


// File: src/constructors/ListMenu/props.d.ts
import { WindowPropsBasic, WindowPropsInclude } from '../Window';
export type ListMenuPropsToken = {
    open?: boolean;
    axis?: 'x' | 'y';
    divider?: boolean;
};
export type ListMenuPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic> = WindowPropsInclude<Window>;
export type ListMenuProps = ListMenuPropsBasic & ListMenuPropsToken;
export declare const defaultsListMenu: {
    autoClose: boolean;
};


// File: src/constructors/Mask/props.d.ts
import { FieldPatternItemOrFunction } from '../../types/fieldTypes';
import { MaskFractionItem, MaskList, MaskMatchItem, MaskSpecialProp, MaskTypeItem } from './basicTypes';
export type MaskPropsToken = {
    visible?: boolean;
    visiblePartly?: boolean;
    align?: 'center' | 'left' | 'right';
    dir?: 'ltr' | 'rtl';
};
export type MaskPropsBasic = {
    name?: string;
    value?: string | number;
    valueDefault?: string | number;
    currency?: string;
    currencyHide?: boolean;
    fullOnly?: boolean;
    mask?: MaskList;
    special?: MaskSpecialProp;
    match?: MaskMatchItem;
    groupSave?: boolean;
    pattern?: FieldPatternItemOrFunction;
    check?: FieldPatternItemOrFunction;
    fraction?: MaskFractionItem;
    type?: MaskTypeItem;
    view?: string;
    inputAttrs?: Partial<HTMLInputElement>;
    language?: string;
};
export type MaskProps = MaskPropsBasic & MaskPropsToken;
export declare const defaultsMask: {
    visible: boolean;
    special: string;
    match: RegExp;
    type: string;
    groupSave: boolean;
    view: string;
};


// File: src/constructors/Menu/props.d.ts
import { ApiFetch, ConstrBind, ListRecord, ListSelectedList, NormalOrPromise } from '@dxtmisha/functional';
import { ListPropsBasic } from '../List';
import { ListItemProps, ListItemPropsBasic } from '../ListItem';
import { BarsPropsBasic, BarsPropsInclude } from '../Bars';
import { WindowPropsBasic, WindowPropsInclude } from '../Window';
import { ModelPropsSelected } from '../../types/modelTypes';
import { RoleType } from '../../types/roleTypes';
export type MenuPropsToken = {
    hideList?: boolean;
    barsAdaptive?: 'showAlways';
};
export type MenuPropsBasic<List extends ListPropsBasic = ListPropsBasic, ListItem extends ListItemPropsBasic = ListItemPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Window extends WindowPropsBasic = WindowPropsBasic> = BarsPropsInclude<Bars> & WindowPropsInclude<Window> & ModelPropsSelected & {
    selected?: ListSelectedList;
    hideList?: boolean;
    list?: ListRecord<ListItem>;
    liteThreshold?: number;
    highlight?: string;
    highlightLengthStart?: number;
    showSearch?: boolean;
    filterMode?: boolean;
    ajax?: string | (() => NormalOrPromise<ListRecord<ListItem>>);
    request?: ApiFetch;
    cache?: boolean;
    keyLabel?: string;
    keyValue?: string;
    max?: string | number;
    tag?: ListItemProps['tag'];
    step?: string | number;
    selectionStyle?: ListItem['selectionStyle'];
    listAttrs?: ConstrBind<List>;
    itemAttrs?: ConstrBind<ListItem>;
    roleList?: RoleType;
    roleItem?: RoleType;
    tabindex?: string | number;
    control?: boolean;
    isSelectedByValue?: boolean;
    embedded?: boolean;
};
export type MenuProps = MenuPropsBasic & MenuPropsToken;
export declare const defaultsMenu: {
    liteThreshold: number;
    barsHide: boolean;
    barsBackHide: boolean;
    tag: string;
    step: number;
    autoClose: boolean;
};


// File: src/constructors/MenuButton/props.d.ts
import { LabelProps } from '../../types/labelTypes';
import { ButtonPropsBasic, ButtonPropsInclude } from '../Button';
import { IconPropsBasic } from '../Icon';
import { MenuPropsBasic, MenuPropsInclude } from '../Menu';
import { MenuButtonPropsTool } from './basicTypes';
import { FieldSelectLiteProps } from '../../types/fieldTypes';
type MenuButtonPropsToken = {};
export type MenuButtonPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = LabelProps & ButtonPropsInclude<Button> & FieldSelectLiteProps & MenuPropsInclude<Menu> & MenuButtonPropsTool<Icon>;
export type MenuButtonProps = MenuButtonPropsBasic & MenuButtonPropsToken;
export declare const defaultsMenuButton: {
    labelSeparator: string;
    hideLabelValue: boolean;
    hideValueIcon: boolean;
};


// File: src/constructors/MenuChip/props.d.ts
import { LabelProps } from '../../types/labelTypes';
import { ChipPropsBasic, ChipPropsInclude } from '../Chip';
import { IconPropsBasic } from '../Icon';
import { MenuPropsBasic, MenuPropsInclude } from '../Menu';
import { FieldSelectLiteProps } from '../../types/fieldTypes';
import { MenuButtonPropsTool } from '../MenuButton';
type MenuChipPropsToken = {};
export type MenuChipPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Chip extends ChipPropsBasic = ChipPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = LabelProps & ChipPropsInclude<Chip> & FieldSelectLiteProps & MenuPropsInclude<Menu> & MenuButtonPropsTool<Icon>;
export type MenuChipProps = MenuChipPropsBasic & MenuChipPropsToken;
export declare const defaultsMenuChip: {
    labelSeparator: string;
    hideLabelValue: boolean;
    hideValueIcon: boolean;
};


// File: src/constructors/MenuCountry/props.d.ts
import { ListSelectedList } from '@dxtmisha/functional';
import { MenuPropsBasic, MenuPropsInclude } from '../Menu';
import { ModelPropsSelected } from '../../types/modelTypes';
type MenuCountryPropsToken = {};
export type MenuCountryPropsBasic<Menu extends MenuPropsBasic = MenuPropsBasic> = MenuPropsInclude<Menu> & ModelPropsSelected<ListSelectedList> & {
    selected?: ListSelectedList;
    countryList?: string[];
    showPhoneCode?: boolean;
    isSelectedByValue?: boolean;
    language?: string;
};
export type MenuCountryProps = MenuCountryPropsBasic & MenuCountryPropsToken;
export declare const defaultsMenuCountry: {
    isSelectedByValue: boolean;
};


// File: src/constructors/MenuLanguage/props.d.ts
import { MenuPropsBasic } from '../Menu';
import { MenuCountryPropsBasic } from '../MenuCountry';
type MenuLanguagePropsToken = {};
export type MenuLanguagePropsBasic<Menu extends MenuPropsBasic = MenuPropsBasic> = MenuCountryPropsBasic<Menu>;
export type MenuLanguageProps = MenuLanguagePropsBasic & MenuLanguagePropsToken;
export declare const defaultsMenuLanguage: {
    isSelectedByValue: boolean;
};


// File: src/constructors/Modal/props.d.ts
import { WindowPropsBasic, WindowPropsInclude } from '../Window';
import { BarsPropsBasic, BarsPropsInclude } from '../Bars';
import { ActionsPropsBasic, ActionsPropsInclude } from '../Actions';
import { ImagePropsBasic, ImagePropsInclude } from '../Image';
import { ModelPropsOpen } from '../../types/modelTypes';
export type ModalPropsToken = {
    imagePosition?: 'top' | 'left';
};
export type ModalPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic> = WindowPropsInclude<Window> & BarsPropsInclude<Bars> & ActionsPropsInclude<Actions> & ImagePropsInclude<Image> & ModelPropsOpen & {
    open?: boolean;
};
export type ModalProps = ModalPropsBasic & ModalPropsToken;
export declare const defaultsModal: {
    imagePosition: string;
    barsBackHide: boolean;
};


// File: src/constructors/MotionAxis/props.d.ts
import { ModelPropsSelected } from '../../types/modelTypes';
import { MotionAxisSelectedValue } from './basicTypes';
type MotionAxisPropsToken = {
    axis?: 'x' | 'y' | 'z';
    direction?: 'next' | 'back' | 'auto';
};
export type MotionAxisPropsBasic = ModelPropsSelected<MotionAxisSelectedValue> & {
    selected?: MotionAxisSelectedValue;
    animationHeight?: boolean;
    inDom?: boolean;
    inDomSlide?: string[];
};
export type MotionAxisProps = MotionAxisPropsBasic & MotionAxisPropsToken;
export declare const defaultsMotionAxis: {
    axis: string;
    direction: string;
};


// File: src/constructors/MotionTransform/props.d.ts
import { AriaByPropsInclude } from '../../types/ariaTypes';
import { ModelPropsOpen } from '../../types/modelTypes';
export type MotionTransformPropsToken = {
    section?: boolean;
    animationHeadPosition?: 'top' | 'toBottom';
    adaptive?: 'planeAlways';
};
export type MotionTransformPropsBasic = AriaByPropsInclude & ModelPropsOpen & {
    open?: boolean;
    inDom?: boolean;
    ignore?: HTMLElement | string;
    ignoreSelector?: string;
    clickOpen?: boolean;
    autoClose?: boolean;
    animationShow?: boolean;
    tagBody?: string;
};
export type MotionTransformProps = MotionTransformPropsBasic & MotionTransformPropsToken;
export declare const defaultsMotionTransform: {
    animationHeadPosition: string;
    clickOpen: boolean;
    autoClose: boolean;
    animationShow: boolean;
    tagBody: string;
};


// File: src/constructors/Page/props.d.ts
import { IconPropsBasic } from '../Icon';
import { BlockPropsBasic } from '../Block';
import { HeaderPropsBasic } from '../Header';
export type PagePropsToken = {};
export type PagePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = BlockPropsBasic<Icon, Header>;
export type PageProps = PagePropsBasic & PagePropsToken;
export declare const defaultsPage: {
    area: string;
    tag: string;
    tagHeader: string;
};


// File: src/constructors/PageArea/props.d.ts
import { BlockProps } from '../Block';
type PageAreaPropsToken = {};
export type PageAreaPropsBasic = BlockProps;
export type PageAreaProps = PageAreaPropsBasic & PageAreaPropsToken;
export declare const defaultsPageArea: {};


// File: src/constructors/Pagination/props.d.ts
import { ConstrBind } from '@dxtmisha/functional';
import { AreaPropsInclude } from '../../types/areaTypes';
import { ModelProps } from '../../types/modelTypes';
import { TextFirstPropsInclude, TextLastPropsInclude, TextMorePropsInclude, TextMorePrevPropsInclude, TextRowsPerPagePropsInclude, TextInfoPropsInclude, TextPreviousPropsInclude, TextNextPropsInclude } from '../../types/textTypes';
import { ButtonPropsBasic } from '../Button';
import { IconPropsBasic, IconValue } from '../Icon';
import { MenuPropsBasic } from '../Menu';
type PaginationPropsToken = {
    adaptive?: 'lineAlways';
    adaptiveMore?: 'lineAlways';
    adaptiveMorePrev?: 'lineAlways';
};
export type PaginationPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = TextFirstPropsInclude & TextLastPropsInclude & TextMorePropsInclude & TextMorePrevPropsInclude & TextRowsPerPagePropsInclude & TextInfoPropsInclude & TextPreviousPropsInclude & TextNextPropsInclude & AreaPropsInclude & ModelProps<number | string> & {
    'value'?: number | string;
    'count'?: number | string;
    'rows'?: number | string;
    'menuRows'?: number[];
    'visible'?: number;
    'ends'?: number;
    'ellipsis'?: string;
    'hideIfOne'?: boolean;
    'showPagination'?: boolean;
    'showArrows'?: boolean;
    'showFirstLast'?: boolean;
    'showEnds'?: boolean;
    'showMore'?: boolean;
    'showMorePrev'?: boolean;
    'showInfo'?: boolean;
    'showRowsPerPageLabel'?: boolean;
    'iconArrowDown'?: IconValue<Icon>;
    'iconArrowFirst'?: IconValue<Icon>;
    'iconArrowLast'?: IconValue<Icon>;
    'iconArrowLeft'?: IconValue<Icon>;
    'iconArrowRight'?: IconValue<Icon>;
    'buttonAttrs'?: ConstrBind<Button>;
    'buttonMoreAttrs'?: ConstrBind<Button>;
    'buttonMorePrevAttrs'?: ConstrBind<Button>;
    'buttonMenuAttrs'?: ConstrBind<Button>;
    'menuAttrs'?: ConstrBind<Menu>;
    'modelRows'?: number | string;
    'onUpdate:rows'?: (value: number | string) => void;
    'onUpdate:modelRows'?: (value: number | string) => void;
};
export type PaginationProps = PaginationPropsBasic & PaginationPropsToken;
export declare const defaultsPagination: {
    value: number;
    visible: number;
    ends: number;
    ellipsis: string;
    hideIfOne: boolean;
    showPagination: boolean;
    showArrows: boolean;
    showFirstLast: boolean;
    showRowsPerPageLabel: boolean;
};


// File: src/constructors/Progress/props.d.ts
import { AriaLabelPropsInclude } from '../../types/ariaTypes';
import { TextLoadingPropsInclude } from '../../types/textTypes';
import { ClientOnlyPropsInclude } from '../../types/clientOnlyTypes';
export type ProgressPropsToken = {
    point?: boolean;
    linear?: boolean;
    circular?: boolean;
    indeterminate?: 'type1' | 'type2' | 'type3';
    position?: 'top' | 'bottom' | 'static';
    dense?: boolean;
    inverse?: boolean;
};
export type ProgressPropsBasic = AriaLabelPropsInclude & TextLoadingPropsInclude & ClientOnlyPropsInclude & {
    visible?: boolean;
    value?: number | string;
    max?: number | string;
    linear?: boolean;
    circular?: boolean;
    point?: boolean;
    delay?: number | string;
    delayHide?: number | string;
};
export type ProgressProps = ProgressPropsBasic & ProgressPropsToken;
export declare const defaultsProgress: {
    linear: boolean;
    indeterminate: string;
    position: string;
    clientOnly: boolean;
    max: number;
    delay: number;
    delayHide: number;
};


// File: src/constructors/Radio/props.d.ts
import { ImagePropsBasic } from '../Image';
import { FieldMessagePropsBasic } from '../FieldMessage';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { ProgressPropsBasic } from '../Progress';
import { CheckboxPropsBasic } from '../Checkbox';
type RadioPropsToken = {
    block?: boolean;
    adaptive?: 'rightAlways';
    container?: boolean;
    required?: boolean;
    itemCenter?: boolean;
    focus?: boolean;
    disabled?: boolean;
};
export type RadioPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = CheckboxPropsBasic<Image, FieldMessage, FieldCounter, Progress>;
export type RadioProps = RadioPropsBasic & RadioPropsToken;
export declare const defaultsRadio: {
    block: boolean;
    itemCenter: boolean;
    valueVariantHide: string;
};


// File: src/constructors/Ripple/props.d.ts
export type RipplePropsToken = {};
export type RipplePropsBasic = {
    disabled?: boolean;
};
export type RippleProps = RipplePropsBasic & RipplePropsToken;
export declare const defaultsRipple: {};


// File: src/constructors/Scrollbar/props.d.ts
import { ClientOnlyPropsInclude } from '../../types/clientOnlyTypes';
export type ScrollbarPropsToken = {
    visible?: boolean;
    divider?: boolean;
    dividerTop?: boolean;
    dividerBottom?: boolean;
    dividerHide?: boolean;
    inverse?: boolean;
    standard?: boolean;
};
export type ScrollbarPropsBasic = ClientOnlyPropsInclude & {
    tag?: string;
};
export type ScrollbarProps = ScrollbarPropsBasic & ScrollbarPropsToken;
export declare const defaultsScrollbar: {
    clientOnly: boolean;
    tag: string;
};


// File: src/constructors/Section/props.d.ts
import { IconPropsBasic } from '../Icon';
import { BlockPropsBasic } from '../Block';
import { HeaderPropsBasic } from '../Header';
export type SectionPropsToken = {};
export type SectionPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = BlockPropsBasic<Icon, Header>;
export type SectionProps = SectionPropsBasic & SectionPropsToken;
export declare const defaultsSection: {
    area: string;
    tag: string;
    tagHeader: string;
};


// File: src/constructors/Select/props.d.ts
import { IconPropsBasic, IconValue } from '../Icon';
import { FieldPropsBasic, FieldPropsInclude } from '../Field';
import { FieldLabelPropsBasic } from '../FieldLabel';
import { FieldMessagePropsBasic } from '../FieldMessage';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { ProgressPropsBasic } from '../Progress';
import { MenuPropsBasic, MenuPropsInclude } from '../Menu';
import { FieldSelectProps } from '../../types/fieldTypes';
export type SelectPropsToken = {};
export type SelectPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldSelectProps & MenuPropsInclude<Menu> & {
    editValue?: boolean;
    hideList?: boolean;
    showSearch?: boolean;
    filterMode?: boolean;
    iconArrowDown?: IconValue<Icon>;
};
export type SelectProps = SelectPropsBasic & SelectPropsToken;
export declare const defaultsSelect: {};


// File: src/constructors/SelectValue/props.d.ts
import { ConstrBind, ListList } from '@dxtmisha/functional';
import { IconPropsBasic, IconValue } from '../Icon';
import { ChipPropsBasic, ChipPropsInclude } from '../Chip';
import { EnabledProps } from '../../types/enabledTypes';
export type SelectValuePropsToken = {};
export type SelectValuePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Chip extends ChipPropsBasic = ChipPropsBasic> = EnabledProps & ChipPropsInclude<Chip> & {
    placeholder?: string;
    value?: ListList;
    multiple?: boolean;
    iconShow?: boolean;
    iconAttrs?: ConstrBind<Icon>;
    iconCancel?: IconValue<Icon>;
};
export type SelectValueProps = SelectValuePropsBasic & SelectValuePropsToken;
export declare const defaultsSelectValue: {};


// File: src/constructors/SelectableArea/props.d.ts
import { ModelPropsSelected } from '../../types/modelTypes';
type SelectableAreaPropsToken = {};
export type SelectableAreaPropsBasic = ModelPropsSelected & {
    disabled?: boolean;
    active?: boolean;
    selected?: string | string[];
    tag?: string;
};
export type SelectableAreaProps = SelectableAreaPropsBasic & SelectableAreaPropsToken;
export declare const defaultsSelectableArea: {
    tag: string;
};


// File: src/constructors/Skeleton/props.d.ts
export type SkeletonPropsToken = {
    active?: boolean;
};
export type SkeletonPropsBasic = {};
export type SkeletonProps = SkeletonPropsBasic & SkeletonPropsToken;
export declare const defaultsSkeleton: {};


// File: src/constructors/Snackbar/props.d.ts
import { TextNotificationsPropsInclude } from '../../types/textTypes';
type SnackbarPropsToken = {
    full?: boolean;
    all?: boolean;
    limit?: '1' | '2' | '4' | '6' | '8';
    vertical?: 'top' | 'bottom';
    horizontal?: 'right' | 'left' | 'block';
    origin?: 'topToBottom' | 'bottomToTop' | 'rightToLeft' | 'leftToRight';
};
export type SnackbarPropsBasic = TextNotificationsPropsInclude & {
    delay?: number;
};
export type SnackbarProps = SnackbarPropsBasic & SnackbarPropsToken;
export declare const defaultsSnackbar: {
    delay: number;
};


// File: src/constructors/SnackbarItem/props.d.ts
import { ConstrBind } from '@dxtmisha/functional';
import { AriaLivePropsInclude, AriaRolePropsInclude } from '../../types/ariaTypes';
import { AreaPropsInclude } from '../../types/areaTypes';
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { TextClosePropsInclude } from '../../types/textTypes';
import { ActionsPropsBasic, ActionsPropsInclude } from '../Actions';
import { ButtonPropsBasic } from '../Button';
import { IconPropsBasic, IconTrailingPropsInclude, IconValue } from '../Icon';
type SnackbarItemPropsToken = {
    success?: boolean;
    error?: boolean;
};
export type SnackbarItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = LabelProps & DescriptionProps & IconTrailingPropsInclude<Icon> & ActionsPropsInclude<Actions> & AriaRolePropsInclude & AriaLivePropsInclude & TextClosePropsInclude & AreaPropsInclude & {
    button?: string | number | ConstrBind<Button>;
    html?: string;
    component?: any;
    componentProps?: object;
    value?: string;
    closeButton?: boolean;
    iconClose?: IconValue<Icon>;
};
export type SnackbarItemProps = SnackbarItemPropsBasic & SnackbarItemPropsToken;
export declare const defaultsSnackbarItem: {
    area: string;
    closeButton: boolean;
};


// File: src/constructors/Switch/props.d.ts
import { ImagePropsBasic } from '../Image';
import { FieldMessagePropsBasic } from '../FieldMessage';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { ProgressPropsBasic } from '../Progress';
import { CheckboxPropsBasic } from '../Checkbox';
type SwitchPropsToken = {
    block?: boolean;
    adaptive?: 'rightAlways';
    container?: boolean;
    required?: boolean;
    itemCenter?: boolean;
    focus?: boolean;
    disabled?: boolean;
};
export type SwitchPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = CheckboxPropsBasic<Image, FieldMessage, FieldCounter, Progress>;
export type SwitchProps = SwitchPropsBasic & SwitchPropsToken;
export declare const defaultsSwitch: {
    block: boolean;
    itemCenter: boolean;
    valueVariantHide: string;
};


// File: src/constructors/TabItem/props.d.ts
import { LabelProps } from '../../types/labelTypes';
import { IconPropsBasic, IconPropsInclude } from '../Icon';
import { BadgePropsBasic, BadgePropsInclude } from '../Badge';
import { SkeletonPropsInclude } from '../Skeleton';
import { EnabledProps } from '../../types/enabledTypes';
import { EventClickProps } from '../../types/eventClickTypes';
import { AriaRolePropsInclude } from '../../types/ariaTypes';
type TabItemPropsToken = {
    focus?: boolean;
    open?: boolean;
    selected?: boolean;
    disabled?: boolean;
    adaptive?: 'iconAlways' | 'auto';
    container?: boolean;
};
export type TabItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic> = LabelProps & IconPropsInclude<Icon> & BadgePropsInclude<Badge> & SkeletonPropsInclude & EnabledProps & EventClickProps & AriaRolePropsInclude & {
    index?: any;
    href?: string;
    tag?: 'button' | 'a' | 'span' | 'li' | 'div' | string;
};
export type TabItemProps = TabItemPropsBasic & TabItemPropsToken;
export declare const defaultsTabItem: {
    role: string;
};


// File: src/constructors/Tabs/props.d.ts
import { ListSelectedList } from '@dxtmisha/functional';
import { TabItemPropsBasic } from '../TabItem';
import { TabsNavigationPropsBasic, TabsNavigationPropsInclude } from '../TabsNavigation';
import { MotionAxisPropsBasic, MotionAxisPropsInclude } from '../MotionAxis';
import { ModelPropsSelected } from '../../types/modelTypes';
type TabsPropsToken = {};
export type TabsPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic, TabsNavigation extends TabsNavigationPropsBasic = TabsNavigationPropsBasic, MotionAxis extends MotionAxisPropsBasic = MotionAxisPropsBasic> = TabsNavigationPropsInclude<TabItem, TabsNavigation> & MotionAxisPropsInclude<MotionAxis> & ModelPropsSelected<ListSelectedList>;
export type TabsProps = TabsPropsBasic & TabsPropsToken;
export declare const defaultsTabs: {};


// File: src/constructors/TabsNavigation/props.d.ts
import { ConstrBind, ListRecord, ListSelectedList } from '@dxtmisha/functional';
import { TabItemPropsBasic } from '../TabItem';
import { HorizontalScrollPropsInclude } from '../HorizontalScroll';
import { ModelPropsSelected } from '../../types/modelTypes';
type TabsNavigationPropsToken = {
    divider?: boolean;
};
export type TabsNavigationPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic> = HorizontalScrollPropsInclude & ModelPropsSelected<ListSelectedList> & {
    selected?: ListSelectedList;
    list?: ListRecord<TabItem>;
    tag?: TabItem['tag'];
    keyLabel?: string;
    keyValue?: string;
    itemAttrs?: ConstrBind<TabItem>;
};
export type TabsNavigationProps = TabsNavigationPropsBasic & TabsNavigationPropsToken;
export declare const defaultsTabsNavigation: {
    horizontalScrollBleed: boolean;
    horizontalScrollAlign: string;
};


// File: src/constructors/TextDescription/props.d.ts
import { DescriptionProps } from '../../types/descriptionTypes';
type TextDescriptionPropsToken = {};
export type TextDescriptionPropsBasic = DescriptionProps & {
    tag?: string;
};
export type TextDescriptionProps = TextDescriptionPropsBasic & TextDescriptionPropsToken;
export declare const defaultsTextDescription: {
    tag: string;
};


// File: src/constructors/TextLabel/props.d.ts
import { LabelProps } from '../../types/labelTypes';
type TextLabelPropsToken = {};
export type TextLabelPropsBasic = LabelProps & {
    tag?: string;
};
export type TextLabelProps = TextLabelPropsBasic & TextLabelPropsToken;
export declare const defaultsTextLabel: {
    tag: string;
};


// File: src/constructors/Textarea/props.d.ts
import { TextareaAutosizePropsBasic, TextareaAutosizePropsInclude } from '../TextareaAutosize';
import { IconPropsBasic } from '../Icon';
import { FieldPropsBasic, FieldPropsInclude } from '../Field';
import { FieldLabelPropsBasic } from '../FieldLabel';
import { FieldMessagePropsBasic } from '../FieldMessage';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { ProgressPropsBasic } from '../Progress';
import { FieldTextareaProps } from '../../types/fieldTypes';
type TextareaPropsToken = {};
export type TextareaPropsBasic<TextareaAutosize extends TextareaAutosizePropsBasic = TextareaAutosizePropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = TextareaAutosizePropsInclude<TextareaAutosize> & FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldTextareaProps<string>;
export type TextareaProps = TextareaPropsBasic & TextareaPropsToken;
export declare const defaultsTextarea: {
    cancel: string;
    autosize: boolean;
};


// File: src/constructors/TextareaAutosize/props.d.ts
export type TextareaAutosizePropsToken = {
    autosize?: boolean;
};
export type TextareaAutosizePropsBasic = {
    value?: string;
    inputAttrs?: Record<string, any>;
};
export type TextareaAutosizeProps = TextareaAutosizePropsBasic & TextareaAutosizePropsToken;
export declare const defaultsTextareaAutosize: {
    autosize: boolean;
};


// File: src/constructors/Tooltip/props.d.ts
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { ArrowProps, ArrowPropsInclude } from '../Arrow';
export type TooltipPropsToken = {
    interactive?: boolean;
    embedded?: boolean;
};
export type TooltipPropsBasic<Arrow extends ArrowProps = ArrowProps> = LabelProps & DescriptionProps & ArrowPropsInclude<Arrow> & {
    open?: boolean;
    disabled?: boolean;
    inDom?: boolean;
    top?: boolean;
    indent?: number;
    delay?: number;
    delayHide?: number;
    embedded?: boolean;
};
export type TooltipProps = TooltipPropsBasic & TooltipPropsToken;
export declare const defaultsTooltip: {
    interactive: boolean;
    indent: number;
    delay: number;
    delayHide: number;
};


// File: src/constructors/Window/props.d.ts
import { ElementOrString, NormalOrPromise } from '@dxtmisha/functional';
import { ImagePropsBasic, ImagePropsInclude } from '../Image';
import { ScrollbarPropsBasic, ScrollbarPropsInclude } from '../Scrollbar';
import { TextClosePropsInclude } from '../../types/textTypes';
import { IconPropsBasic, IconValue } from '../Icon';
import { AriaHaspopupPropsInclude, AriaRoleByPropsInclude } from '../../types/ariaTypes';
import { ModelPropsOpen } from '../../types/modelTypes';
export type WindowPropsToken = {
    width?: string | 'auto' | 'max' | 'custom';
    height?: string | 'auto' | 'max' | 'custom';
    hide?: boolean;
    axis?: 'x' | 'y' | 'on';
    imagePosition?: 'top' | 'left';
    dense?: boolean;
    alignment?: 'center' | 'top' | 'topRight' | 'topLeft' | 'topFull' | 'right' | 'rightFull' | 'bottom' | 'bottomRight' | 'bottomLeft' | 'bottomFull' | 'left' | 'leftFull';
    origin?: 'center' | 'top' | 'right' | 'bottom' | 'left' | 'topToBottom' | 'rightToLeft' | 'bottomToTop' | 'leftToRight';
    adaptive?: 'menu' | 'menuWindow' | 'modal' | 'modalDynamic' | 'actionSheetRight' | 'actionSheetBottom' | 'static';
    fullscreen?: boolean;
    overscroll?: boolean;
    closeButton?: boolean;
    closeMobileHide?: boolean;
    widthMatch?: boolean;
};
export type WindowPropsBasic<Scrollbar extends ScrollbarPropsBasic = ScrollbarPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic> = ScrollbarPropsInclude<Scrollbar> & ImagePropsInclude<Image> & AriaRoleByPropsInclude & AriaHaspopupPropsInclude & TextClosePropsInclude & ModelPropsOpen & {
    open?: boolean;
    disabled?: boolean;
    preparation?(): NormalOrPromise<void>;
    beforeOpening?(): NormalOrPromise<boolean>;
    opening?(): NormalOrPromise<boolean>;
    beforeClosing?(): NormalOrPromise<boolean>;
    closing?(): NormalOrPromise<boolean>;
    contextmenu?: boolean;
    staticMode?: boolean;
    overElement?: ElementOrString<HTMLElement>;
    autoClose?: boolean;
    persistent?: boolean;
    flash?: boolean;
    inDom?: boolean;
    indent?: number;
    divider?: boolean;
    closeButton?: boolean;
    iconClose?: IconValue<Icon>;
    inert?: boolean;
    autoTabIndex?: boolean;
    closeOnEsc?: boolean;
    openOnArrowDown?: boolean;
    embedded?: boolean;
};
export type WindowProps = WindowPropsBasic & WindowPropsToken;
export declare const defaultsWindow: {
    axis: string;
    imagePosition: string;
    overscroll: boolean;
    indent: number;
    ariaHaspopup: string;
    role: string;
    inert: boolean;
    autoTabIndex: boolean;
    closeOnEsc: boolean;
};


// File: src/functions/getAreaValue.d.ts
export declare function getAreaValue(): string | undefined;


// File: src/functions/getClassTagAStatic.d.ts
export declare const getClassTagAStatic: (design: string) => string;


// File: src/functions/setAreaValue.d.ts
import { Ref } from 'vue';
export declare function setAreaValue(value: string | Ref<string>): void;


// File: src/media/styleModification.d.ts
export declare const STYLE_MODIFICATION: string[];


// File: src/types/areaTypes.d.ts
export type AreaPropsInclude = {
    area?: string;
};
export declare const AREA_PROP_NAME = "UI_AREA_VALUE";


// File: src/types/ariaTypes.d.ts
import { NumberOrString } from '@dxtmisha/functional';
import { RoleType } from './roleTypes';
export type AriaTrueOrFalse = 'true' | 'false' | boolean;
export type AriaList = {
    'aria-activedescendant'?: string;
    'aria-atomic'?: AriaTrueOrFalse;
    'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
    'aria-busy'?: AriaTrueOrFalse;
    'aria-checked'?: AriaTrueOrFalse | 'mixed';
    'aria-colcount'?: number;
    'aria-colindex'?: number;
    'aria-colspan'?: number;
    'aria-controls'?: string;
    'aria-current'?: AriaTrueOrFalse | 'page' | 'step' | 'location' | 'date' | 'time';
    'aria-describedby'?: string;
    'aria-details'?: string;
    'aria-disabled'?: AriaTrueOrFalse;
    'aria-errormessage'?: string;
    'aria-expanded'?: AriaTrueOrFalse;
    'aria-flowto'?: string;
    'aria-grabbed'?: AriaTrueOrFalse;
    'aria-haspopup'?: AriaTrueOrFalse | 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid';
    'aria-hidden'?: AriaTrueOrFalse;
    'aria-invalid'?: AriaTrueOrFalse | 'grammar' | 'spelling';
    'aria-keyshortcuts'?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-level'?: number;
    'aria-live'?: 'off' | 'polite' | 'assertive';
    'aria-modal'?: AriaTrueOrFalse;
    'aria-multiline'?: AriaTrueOrFalse;
    'aria-multiselectable'?: AriaTrueOrFalse;
    'aria-orientation'?: 'horizontal' | 'vertical' | 'undefined';
    'aria-owns'?: string;
    'aria-placeholder'?: string;
    'aria-posinset'?: number;
    'aria-pressed'?: AriaTrueOrFalse | 'mixed';
    'aria-readonly'?: AriaTrueOrFalse;
    'aria-relevant'?: 'additions' | 'removals' | 'text' | 'all' | string;
    'aria-required'?: AriaTrueOrFalse;
    'aria-roledescription'?: string;
    'aria-rowcount'?: number;
    'aria-rowindex'?: number;
    'aria-rowspan'?: number;
    'aria-selected'?: AriaTrueOrFalse;
    'aria-setsize'?: number;
    'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
    'aria-valuemax'?: string | number;
    'aria-valuemin'?: string | number;
    'aria-valuenow'?: string | number;
    'aria-valuetext'?: string;
    'id'?: string;
    'role'?: RoleType;
    'tabindex'?: NumberOrString;
};
export type AriaAtomicPropsInclude = {
    ariaAtomic?: AriaList['aria-atomic'];
};
export type AriaByPropsInclude = {
    ariaLabelledby?: string;
    ariaDescribedby?: string;
};
export type AriaDescriptionPropsInclude = {
    ariaDescription?: string;
};
export type AriaHaspopupPropsInclude = {
    ariaHaspopup?: AriaList['aria-haspopup'];
};
export type AriaLabelPropsInclude = {
    ariaLabel?: string;
};
export type AriaLivePropsInclude = {
    ariaLive?: AriaList['aria-live'];
};
export type AriaMultiselectablePropsInclude = {
    ariaMultiselectable?: boolean;
};
export type AriaRoleByPropsInclude = AriaRolePropsInclude & AriaByPropsInclude;
export type AriaRoleControlPropsInclude = AriaRolePropsInclude & AriaHaspopupPropsInclude & {
    id?: string;
    ariaControls?: string;
    ariaHaspopup?: AriaList['aria-haspopup'];
    ariaExpanded?: string;
};
export type AriaRolePropsInclude = {
    role?: RoleType;
};


// File: src/types/captionTypes.d.ts
export interface CaptionSlots {
    caption?(props: any): any;
}
export type CaptionProps = {
    caption?: string | number;
    captionDecorative?: boolean;
};


// File: src/types/clientOnlyTypes.d.ts
export type ClientOnlyPropsInclude = {
    clientOnly?: boolean;
};


// File: src/types/componentInclude.d.ts
import { ConstrBind, RefOrNormalOrFunction } from '@dxtmisha/functional';
export type ComponentIncludeProps<Props extends Record<string, any>> = Readonly<ConstrBind<Props>> | (() => ConstrBind<Props>) | undefined;
export type ComponentIncludePropsAttrs<Props extends Record<string, any>> = keyof Props | undefined;
export type ComponentIncludeExtra<PropsExtra extends Record<string, any> = Record<string, any>> = RefOrNormalOrFunction<Partial<ConstrBind<PropsExtra>>>;
export type ComponentIncludeExposeItem<V = any> = {
    name: string;
    method?: string;
    defaultValue?: V;
    type?: 'string' | 'boolean' | 'number';
};


// File: src/types/descriptionTypes.d.ts
export interface DescriptionSlots {
    description?(props: any): any;
}
export type DescriptionProps = {
    description?: string | number;
    descriptionId?: string;
};


// File: src/types/enabledTypes.d.ts
export type EnabledProps = {
    readonly?: boolean;
    disabled?: boolean;
};


// File: src/types/errorTypes.d.ts
export declare const CONSTRUCTOR_ERROR_GROUP = "constructor";


// File: src/types/eventClickTypes.d.ts
import { RouteLocationRaw } from 'vue-router';
export type EventClickValue = {
    type: string;
    value: any;
    detail: Record<string, any> | undefined;
};
export type EventClickEmits = {
    click: [event: MouseEvent, value: EventClickValue];
    clickLite: [value: EventClickValue];
};
export interface EventClickExpose {
    getValue?: () => EventClickValue['value'] | undefined;
    getDetail?: () => EventClickValue['detail'] | undefined;
}
export type EventClickProps = {
    to?: string | RouteLocationRaw;
    href?: string;
    value?: EventClickValue['value'];
    detail?: EventClickValue['detail'];
};


// File: src/types/fieldTypes.d.ts
import { Ref } from 'vue';
import { ListRecord, NumberOrString, NumberOrStringOrBoolean } from '@dxtmisha/functional';
import { ListItemPropsBasic } from '../constructors/ListItem';
import { ModelEmits, ModelProps } from './modelTypes';
export type FieldType = 'text' | 'search' | 'number' | 'number-format' | 'currency' | 'email' | 'password' | 'datetime' | 'date' | 'year-month' | 'time' | 'hour-minute' | 'tel' | 'url' | 'checkbox' | 'radio';
export type FieldElementDom = HTMLInputElement | HTMLTextAreaElement;
export type FieldElementInput = FieldElementDom | HTMLElement | Record<string, any> | undefined;
export type FieldValidityCodeItem = {
    [K in keyof ValidityState]?: string;
};
export type FieldValidityCode = string | FieldValidityCodeItem;
export type FieldPatternElement = Partial<HTMLInputElement>;
export type FieldPatternItem = string | FieldPatternElement;
export type FieldPatternItemOrFunction = FieldPatternItem | ((item: any) => FieldPatternItem);
export type FieldPatternList = Record<string, FieldPatternItemOrFunction>;
export type FieldValidationItem<Value = any> = {
    type?: string;
    status?: boolean;
    required?: boolean;
    isFull?: boolean;
    validationMessage?: string;
    validity?: ValidityState;
    validityMessage?: string;
    value: Value;
    valueInput?: Value;
    detail?: Record<string, any>;
};
export type FieldBasicEmits<T = any> = ModelEmits<T> & {
    input: [event: InputEvent | Event, value: FieldValidationItem<T>];
    inputLite: [value: FieldValidationItem<T>];
    change: [event: InputEvent | Event, value: FieldValidationItem<T>];
    changeLite: [value: FieldValidationItem<T>];
};
export type FieldBasicExpose<T = string> = {
    value: Ref<T>;
    getValue: () => T | undefined;
    checkValidity: () => boolean;
    getValidationMessage: () => string;
};
export type FieldValueProps<Value = any> = ModelProps<Value> & {
    placeholder?: string;
    multiple?: boolean;
    maxlength?: NumberOrString;
    value?: Value;
    detail?: Record<string, any> | undefined;
};
export type FieldBasicProps<Value = any> = Omit<FieldValueProps<Value>, 'multiple' | 'maxlength'> & {
    type?: FieldType;
    name?: string;
    id?: string | number;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    autofocus?: boolean;
    tabindex?: number;
    form?: string;
    validationCode?: FieldValidityCode;
    validationMessage?: string;
    inputAttrs?: Record<string, any>;
};
export type FieldStepProps = {
    step?: NumberOrString;
    min?: NumberOrString;
    max?: NumberOrString;
};
export type FieldArrowProps = {
    arrow?: 'auto' | 'carousel' | 'stepper' | 'none';
    arrowStep?: NumberOrString;
    arrowAlign?: 'center' | 'right' | 'left';
};
export type FieldLengthProps = {
    minlength?: NumberOrString;
    maxlength?: NumberOrString;
};
export type FieldPatternProps = {
    pattern?: string;
};
export type FieldUxProps = {
    autocomplete?: string;
    autocapitalize?: 'off' | 'none' | 'sentences' | 'words' | 'characters' | string;
    inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | string;
    enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | string;
    spellcheck?: boolean | 'true' | 'false';
    autocorrect?: 'on' | 'off' | string;
};
export type FieldInputProps<Value = any> = FieldBasicProps<Value> & FieldStepProps & FieldArrowProps & FieldLengthProps & FieldPatternProps & FieldUxProps & {
    list?: string;
    iconVisibility?: string;
    iconVisibilityOff?: string;
};
export type FieldInputPhoneProps = Omit<FieldBasicProps<string>, 'match' | 'pattern'> & FieldPatternProps;
export type FieldInputSocialProps = Omit<FieldBasicProps<string>, 'match' | 'pattern'> & {
    autocomplete?: string;
};
export type FieldInputFileProps<Value = any> = Omit<FieldBasicProps<Value>, 'type'> & FieldLengthProps & FieldUxProps & {
    multiple?: boolean;
    accept?: string;
    capture?: string | boolean;
};
export type FieldInputCheckProps<Value = boolean> = Omit<FieldBasicProps<Value>, 'type'> & FieldUxProps & {
    valueVariant?: NumberOrStringOrBoolean;
    valueVariantHide?: NumberOrStringOrBoolean;
    indeterminate?: boolean;
};
export type FieldTextareaProps<Value = any> = Omit<FieldBasicProps<Value>, 'type'> & FieldLengthProps & FieldUxProps & {
    rows?: NumberOrString;
    cols?: NumberOrString;
    wrap?: 'soft' | 'hard' | 'off' | string;
    fieldSizing?: 'content' | 'fixed' | string;
};
export type FieldSelectProps<Value = any> = Omit<FieldBasicProps<Value>, 'type'> & Omit<FieldStepProps, 'min' | 'step'> & FieldArrowProps & FieldUxProps & {
    option?: ListRecord;
    multiple?: boolean;
    selectionStyle?: ListItemPropsBasic['selectionStyle'] | 'auto';
};
export type FieldSelectLiteProps<Value = any> = Omit<FieldSelectProps<Value>, 'placeholder' | 'validationMessage' | 'validationCode' | 'arrow' | 'arrowAlign' | 'arrowStep'>;
export type FieldAllProps<Value = any> = FieldInputProps<Value> & FieldInputFileProps<Value> & FieldInputCheckProps<Value> & FieldTextareaProps<Value> & FieldSelectProps<Value>;


// File: src/types/labelTypes.d.ts
import { NumberOrString } from '@dxtmisha/functional';
export interface LabelSlots {
    default?(props: any): any;
}
export interface LabelAlternativeSlots {
    label?(props: any): any;
}
export interface LabelNumberSlots extends LabelSlots {
}
export interface LabelHighlightSlots extends LabelSlots {
}
export type LabelProps = {
    label?: NumberOrString;
    labelId?: string;
};
export type LabelNumberProps = LabelProps & {
    labelMax?: NumberOrString;
    formatting?: boolean;
    language?: string;
};
export type LabelHighlightProps = LabelProps & {
    highlight?: string;
    highlightLengthStart?: number;
    value?: any;
};


// File: src/types/modelTypes.d.ts
export type ModelEmits<Value = string> = {
    'update:value': [value: Value];
    'update:modelValue': [value: Value];
};
export type ModelEmitsOpen<Value = boolean> = {
    'update:open': [value: Value];
    'update:modelOpen': [value: Value];
};
export type ModelEmitsSelected<Value = string> = {
    'update:selected': [value: Value];
    'update:modelSelected': [value: Value];
};
export type ModelProps<Value = string> = {
    'modelValue'?: Value;
    'onUpdate:value'?: (value: Value) => void;
    'onUpdate:modelValue'?: (value: Value) => void;
};
export type ModelPropsOpen<Value = boolean> = {
    'modelOpen'?: Value;
    'onUpdate:open'?: (value: Value) => void;
    'onUpdate:modelOpen'?: (value: Value) => void;
};
export type ModelPropsSelected<Value = string> = {
    'modelSelected'?: Value;
    'onUpdate:selected'?: (value: Value) => void;
    'onUpdate:modelSelected'?: (value: Value) => void;
};


// File: src/types/pluginTypes.d.ts
import { Plugin as VitePlugin } from 'vite';
export type PluginComponentItem = {
    name: string;
    reg: RegExp;
};
export type PluginComponentList = Record<string, PluginComponentItem>;
export type PluginComponentImports = PluginComponentItem[];
export type PluginOptions = {
    style?: boolean;
    styleNamespace?: string;
    component?: boolean;
    viteOptions?: VitePlugin;
};


// File: src/types/prefixTypes.d.ts
export interface PrefixSlots {
    prefix?(props: any): any;
}
export type PrefixProps = {
    prefix?: string | number;
    prefixId?: string;
};


// File: src/types/roleTypes.d.ts
export type RoleType = string | 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'command' | 'comment' | 'complementary' | 'composite' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'generic' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'input' | 'landmark' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'mark' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'range' | 'region' | 'roletype' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'section' | 'sectionhead' | 'select' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'structure' | 'suggestion' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem' | 'widget' | 'window';


// File: src/types/suffixTypes.d.ts
export interface SuffixSlots {
    suffix?(props: any): any;
}
export type SuffixProps = {
    suffix?: string | number;
    suffixId?: string;
};


// File: src/types/textTypes.d.ts
export type TextValue = string | (() => string) | undefined;
export type TextIndex = 'cancel' | 'characterLimit' | 'characterRemaining' | 'close' | 'copiedClipboard' | 'decrement' | 'entriesMatch' | 'first' | 'hide' | 'increment' | 'info' | 'last' | 'loading' | 'more' | 'morePrev' | 'next' | 'notFound' | 'notifications' | 'ok' | 'page' | 'previous' | 'rowsPerPage' | 'show' | string;
export type TextList = Record<TextIndex, TextValue>;
export type TextCancelPropsInclude = {
    textCancel?: TextValue;
};
export type TextCharacterLimitPropsInclude = {
    textCharacterLimit?: TextValue;
};
export type TextCharacterRemainingPropsInclude = {
    textCharacterRemaining?: TextValue;
};
export type TextClosePropsInclude = {
    textClose?: TextValue;
};
export type TextCopiedClipboardPropsInclude = {
    textCopiedClipboard?: TextValue;
};
export type TextDecrementPropsInclude = {
    textDecrement?: TextValue;
};
export type TextEntriesMatchPropsInclude = {
    textEntriesMatch?: TextValue;
};
export type TextFirstPropsInclude = {
    textFirst?: TextValue;
};
export type TextHidePropsInclude = {
    textHide?: TextValue;
};
export type TextIncrementPropsInclude = {
    textIncrement?: TextValue;
};
export type TextInfoPropsInclude = {
    textInfo?: TextValue;
};
export type TextLastPropsInclude = {
    textLast?: TextValue;
};
export type TextLoadingPropsInclude = {
    textLoading?: TextValue;
};
export type TextMorePropsInclude = {
    textMore?: TextValue;
};
export type TextMorePrevPropsInclude = {
    textMorePrev?: TextValue;
};
export type TextNextPropsInclude = {
    textNext?: TextValue;
};
export type TextNotFoundPropsInclude = {
    textNotFound?: TextValue;
};
export type TextNotificationsPropsInclude = {
    textNotifications?: TextValue;
};
export type TextOkPropsInclude = {
    textOk?: TextValue;
};
export type TextPagePropsInclude = {
    textPage?: TextValue;
};
export type TextPreviousPropsInclude = {
    textPrevious?: TextValue;
};
export type TextRowsPerPagePropsInclude = {
    textRowsPerPage?: TextValue;
};
export type TextShowPropsInclude = {
    textShow?: TextValue;
};
export type TextAllPropsInclude = TextCancelPropsInclude & TextCharacterLimitPropsInclude & TextCharacterRemainingPropsInclude & TextClosePropsInclude & TextCopiedClipboardPropsInclude & TextDecrementPropsInclude & TextEntriesMatchPropsInclude & TextFirstPropsInclude & TextHidePropsInclude & TextIncrementPropsInclude & TextInfoPropsInclude & TextLastPropsInclude & TextLoadingPropsInclude & TextMorePropsInclude & TextMorePrevPropsInclude & TextNextPropsInclude & TextNotFoundPropsInclude & TextNotificationsPropsInclude & TextOkPropsInclude & TextPagePropsInclude & TextPreviousPropsInclude & TextRowsPerPagePropsInclude & TextShowPropsInclude;


// File: src/types/touchEventTypes.d.ts
export type TouchEventTypeX = 'left' | 'right' | 'none';
export type TouchEventTypeY = 'top' | 'bottom' | 'none';
export type TouchEventClient = {
    x: number;
    y: number;
};
export type TouchEventCallback = (typeX: TouchEventTypeX, typeY: TouchEventTypeY, clientX: number, clientY: number, mouse?: TouchEventClient, mouseMove?: TouchEventClient, touche?: Touch, toucheMove?: Touch) => Promise<boolean> | boolean;