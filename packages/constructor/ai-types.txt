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
export declare class ClientOnlyInclude {
    isMounted: Ref<boolean, boolean>;
    constructor(props?: ClientOnlyPropsInclude | undefined);
    isRender(): boolean;
}

// File: src/classes/ComponentIncludeAbstract.d.ts
export declare abstract class ComponentIncludeAbstract<Props extends Record<string, any>, PropsExtra extends Record<string, any>, ComponentExpose extends Record<string, any> = Record<string, any>, ComponentSlots extends Record<string, any> = Record<string, any>, PartialPropsExtra extends Record<string, any> = Partial<ConstrBind<PropsExtra>>> {
    constructor(className: string, props: ComponentIncludeProps<Props>, components?: DesignComponents<any, Props> | undefined, extra?: ComponentIncludeExtra<PropsExtra> | undefined, index?: string | undefined);
    readonly binds: ComputedRef<PartialPropsExtra>;
    get expose(): ComponentExpose;
    get is(): boolean;
    getElement(): ConstrBind<ComponentExpose> | undefined;
    readonly render: (slotsChildren?: ComponentSlots, attrs?: PartialPropsExtra, isShow?: () => boolean) => VNode[];
}

// File: src/classes/DescriptionInclude.d.ts
export declare class DescriptionInclude {
    constructor(props: RefOrNormalOrFunction<DescriptionProps>, className: string, slots?: DescriptionSlots | undefined, skeleton?: SkeletonInclude | undefined, tag?: RefOrNormal<string | undefined>);
    get is(): boolean;
    get id(): string;
    render(childrenExtra?: any[], props?: Record<string, any>): VNode[];
}

// File: src/classes/EnabledInclude.d.ts
export declare class EnabledInclude {
    constructor(props: EnabledProps, progress?: ProgressInclude | undefined);
    get isEnabled(): boolean;
    get isReadonly(): boolean;
    get isDisabled(): boolean;
    get isDisabledOrUndefined(): boolean | undefined;
    get aria(): AriaList;
}

// File: src/classes/EventClickInclude.d.ts
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
export declare class FieldAttributesInclude {
    constructor(props: FieldAllProps, type?: FieldTypeInclude | undefined, pattern?: FieldPatternInclude | undefined, inputMode?: FieldInputModeInclude | undefined, typeDefault?: string);
    get list(): Record<string, any>;
    get listForCheck(): Record<string, any>;
    get listForInput(): Record<string, any>;
    get listForCheckbox(): Record<string, any>;
}

// File: src/classes/Field/FieldChangeInclude.d.ts
export declare class FieldChangeInclude {
    readonly item: Ref<boolean, boolean>;
    constructor(props: FieldAllProps);
    is(): boolean;
    set(change: boolean): void;
    to(): void;
}

// File: src/classes/Field/FieldCodeInclude.d.ts
export declare class FieldCodeInclude {
    constructor(props: FieldAllProps);
    get(state?: ValidityState): string | undefined;
}

// File: src/classes/Field/FieldElementInclude.d.ts
export declare class FieldElementInclude {
    constructor(props: FieldAllProps, element: Ref<FieldElementInput>);
    get(): HTMLInputElement | undefined;
    getElement(): Ref<FieldElementInput>;
    findByName(nameSelectors: string | HTMLInputElement): HTMLInputElement | undefined;
    clear(): this;
}

// File: src/classes/Field/FieldEventInclude.d.ts
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
export declare class FieldInputModeInclude {
    constructor(props: FieldAllProps, type: FieldTypeInclude);
    get item(): string | undefined;
    get autocomplete(): string | undefined;
}

// File: src/classes/Field/FieldMatchInclude.d.ts
export declare class FieldMatchInclude {
    constructor(props: FieldAllProps, element: FieldElementInclude, value: FieldValueInclude, text?: TextInclude | undefined);
    is(): boolean;
    getSelectors(): string | HTMLInputElement | undefined;
    getValidationMessage(): string;
    check(): FieldValidationItem | undefined;
}

// File: src/classes/Field/FieldPatternInclude.d.ts
export declare class FieldPatternInclude {
    constructor(props: FieldAllProps, type?: FieldTypeInclude | undefined);
    get item(): string | undefined;
}

// File: src/classes/Field/FieldTypeInclude.d.ts
export declare class FieldTypeInclude {
    constructor(props: FieldAllProps, visibility?: FieldVisibilityInclude | undefined);
    get item(): FieldType;
    get(): FieldType;
}

// File: src/classes/Field/FieldValidationInclude.d.ts
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
export declare class FieldVisibilityInclude {
    readonly item: Ref<boolean, boolean>;
    toggle(): this;
}

// File: src/classes/LabelHighlightInclude.d.ts
export declare class LabelHighlightInclude extends LabelInclude {
    constructor(props: Readonly<LabelHighlightProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: LabelHighlightSlots | undefined, elementsExtra?: (() => VNode[]) | undefined, skeleton?: SkeletonInclude | undefined);
    isHighlight(): boolean;
}

// File: src/classes/LabelInclude.d.ts
export declare class LabelInclude {
    constructor(props: RefOrNormalOrFunction<LabelProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: (LabelSlots | LabelAlternativeSlots) | undefined, elementsExtra?: (() => VNode[]) | undefined, labelReplacing?: Ref<string | number | undefined> | undefined, alternativeSlots?: boolean | undefined, skeleton?: SkeletonInclude | undefined, tag?: RefOrNormalOrFunction<string | undefined>);
    get is(): boolean;
    get id(): string;
    render(childrenExtra?: any[], props?: Record<string, any>): VNode[];
}

// File: src/classes/LabelNumberInclude.d.ts
export declare class LabelNumberInclude extends LabelInclude {
    constructor(props: Readonly<LabelNumberProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: LabelNumberSlots | undefined, elementsExtra?: (() => VNode[]) | undefined, skeleton?: SkeletonInclude | undefined);
}

// File: src/classes/ModelInclude.d.ts
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
export declare class ModelValueInclude<Value = any> {
    readonly value: Ref<Value | undefined, Value | undefined>;
    constructor(index: string, emits?: any | undefined, event?: EventClickInclude | undefined, inputValue?: RefType<any> | undefined, readonly?: RefType<boolean | undefined> | undefined, multiple?: RefType<boolean | undefined> | undefined);
    getValue(): Value | undefined;
    readonly onClick: (event: MouseEvent, options?: EventClickValue) => void;
    readonly onUpdate: (value: Value) => void;
}

// File: src/classes/Plugin/Plugin.d.ts
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
export declare class PluginComponents {
    constructor(code: PluginCode, pluginData: PluginData);
    make(): void;
}

// File: src/classes/Plugin/PluginData.d.ts
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
export declare class PrefixInclude {
    constructor(props: Readonly<PrefixProps>, className: string, slots?: PrefixSlots | undefined, skeleton?: SkeletonInclude | undefined);
    get is(): boolean;
    get id(): string;
    get describedby(): string;
    render(): VNode[];
}

// File: src/classes/ScrollToXInclude.d.ts
export declare class ScrollToXInclude {
    constructor(element: Ref<HTMLElement | undefined>);
    get binds(): {
        onWheelPassive: (event: WheelEvent) => void;
    };
    readonly onScrollToX: (event: WheelEvent) => void;
}

// File: src/classes/SuffixInclude.d.ts
export declare class SuffixInclude {
    constructor(props: Readonly<SuffixProps>, className: string, slots?: SuffixSlots | undefined, skeleton?: SkeletonInclude | undefined);
    get is(): boolean;
    get id(): string;
    get describedby(): string;
    render(): VNode[];
}

// File: src/classes/TabIndexInclude.d.ts
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
export declare class TeleportInclude {
    constructor(toDefault?: RefOrNormal<string>);
    get to(): string;
    isTeleportElement(element: HTMLElement): boolean;
    render(children?: RawChildren | RawSlots, props?: Record<string, any>): VNode[];
}

// File: src/classes/TextInclude.d.ts
export declare class TextInclude {
    static readonly list: ShallowRef<TextList, TextList>;
    readonly texts: Record<string, () => (string | undefined)>;
    static initText(texts: TextList): void;
    constructor(props: TextAllPropsInclude);
    get cancel(): string | undefined;
    get characterLimit(): string | undefined;
    get characterRemaining(): string | undefined;
    get close(): string | undefined;
    get copiedClipboard(): string | undefined;
    get decrement(): string | undefined;
    get entriesMatch(): string | undefined;
    get hide(): string | undefined;
    get increment(): string | undefined;
    get loading(): string | undefined;
    get next(): string | undefined;
    get notFound(): string | undefined;
    get notifications(): string | undefined;
    get ok(): string | undefined;
    get previous(): string | undefined;
    get show(): string | undefined;
    get(name: keyof TextAllPropsInclude): string | undefined;
}

// File: src/classes/TouchEventInclude.d.ts
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
export type AccordionPropsToken = { divider?: boolean; };
export type AccordionPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Cell extends CellPropsBasic = CellPropsBasic, MotionTransform extends MotionTransformPropsBasic = MotionTransformPropsBasic> = LabelProps & DescriptionProps & IconLitePropsInclude<Icon> & MotionTransformPropsInclude<MotionTransform> & ModelPropsOpen & {
    iconArrowDown?: IconValue<Icon>;
    cellAttrs?: ConstrBind<Cell>;
};
export type AccordionProps = AccordionPropsBasic & AccordionPropsToken;
export declare const defaultsAccordion: { divider: boolean; clickOpen: boolean; autoClose: boolean; };

// File: src/constructors/Accordion/types.d.ts
export type AccordionComponents = CellComponentInclude & MotionTransformComponentInclude;
export type AccordionEmits = EventClickEmits & MotionTransformEmitsInclude & ModelEmitsOpen;
export interface AccordionExpose extends MotionTransformExposeInclude {}
export interface AccordionSlots extends CellSlotsInclude {
    default?(props: MotionTransformControlItem): any;
}
export type AccordionClasses = { main: ConstrClass; head: string; body: string; };

// File: src/constructors/ActionSheet/props.d.ts
export type ActionSheetPropsToken = {};
export type ActionSheetPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = WindowPropsInclude<Window> & BarsPropsInclude<Bars> & ActionsPropsInclude<Actions> & {
    open?: boolean;
    touchClose?: boolean;
};
export type ActionSheetProps = ActionSheetPropsBasic & ActionSheetPropsToken;
export declare const defaultsActionSheet: { barsBackHide: boolean; touchClose: boolean; };

// File: src/constructors/ActionSheet/types.d.ts
export type ActionSheetComponents = ModalComponents;
export type ActionSheetEmits = ModalEmits;
export interface ActionSheetExpose extends ModalExpose {}
export interface ActionSheetSlots extends ModalSlots {}
export type ActionSheetClasses = { main: ConstrClass; title: string; header: string; body: string; footer: string; touch: string; tab: string; };

// File: src/constructors/Actions/basicTypes.d.ts
export type ActionsComponentInclude = { actions?: object; };
export type ActionsEmitsInclude = { actions: EventClickEmits['click']; actionsLite: EventClickEmits['clickLite']; };
export type ActionsPropsInclude<Actions extends ActionsPropsBasic = ActionsPropsBasic> = {
    actionsHide?: boolean;
    actionsList?: ConstrBind<Actions['list']>;
    actionsSecondary?: ConstrBind<Actions['listSecondary']>;
    actionsAttrs?: ConstrBind<Actions>;
};

// File: src/constructors/Actions/props.d.ts
export type ActionsPropsToken = { align?: 'none' | 'center' | 'left' | 'right' | 'block' | 'auto'; flexible?: boolean; wrap?: boolean; };
export type ActionsPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic> = AreaPropsInclude & {
    list?: ConstrBind<Button>[];
    listSecondary?: ConstrBind<Button>[];
    buttonAttrs?: ConstrBind<Button>;
    buttonSecondaryAttrs?: ConstrBind<Button>;
};
export type ActionsProps = ActionsPropsBasic & ActionsPropsToken;
export declare const defaultsActions: { align: string; area: string; };

// File: src/constructors/Actions/types.d.ts
export type ActionsComponents = ButtonComponentInclude;
export type ActionsEmits = EventClickEmits;
export interface ActionsExpose {}
export interface ActionsSlots {
    default?(props: any): any;
    secondary?(props: any): any;
}
export type ActionsClasses = { main: ConstrClass; item: string; list: string; secondary: string; spacer: string; };

// File: src/constructors/Anchor/basicTypes.d.ts
export type AnchorScrollProps = { shift?: NumberOrString; behavior?: ScrollIntoViewOptions['behavior']; block?: ScrollIntoViewOptions['block']; inline?: ScrollIntoViewOptions['inline']; };

// File: src/constructors/Anchor/props.d.ts
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
export declare const defaultsAnchor: { shift: number; delayHide: number; };

// File: src/constructors/Anchor/types.d.ts
export type AnchorComponents = TooltipComponentInclude & IconComponentInclude;
export type AnchorEmits = {};
export interface AnchorExpose { go(): void; }
export interface AnchorSlots extends LabelSlots {}
export type AnchorClasses = { main: ConstrClass; label: string; };

// File: src/constructors/Area/props.d.ts
export type AreaPropsBasic = { areaDefault?: string; };
export type AreaProps = AreaPropsBasic & {};
export declare const defaultsArea: {};

// File: src/constructors/Area/types.d.ts
export type AreaComponents = {};
export type AreaEmits = {};
export interface AreaExpose {}
export type AreaSlots = Record<string, (props: any) => any>;
export type AreaClasses = { main: ConstrClass; };

// File: src/constructors/Arrow/basicTypes.d.ts
export declare enum ArrowDirection { TOP = "top", BOTTOM = "bottom", LEFT = "left", RIGHT = "right", HIDE = "hide" }
export type ArrowBorder = { top: number; bottom: number; left: number; right: number; };
export type ArrowCenter = { x: number; y: number; };
export type ArrowComponentInclude = { arrow?: object; };
export type ArrowPropsInclude<Arrow extends ArrowProps = ArrowProps> = { arrowShow?: boolean; arrowPosition?: ArrowProps['position']; arrowAttrs?: ConstrBind<Arrow>; };

// File: src/constructors/Arrow/props.d.ts
export type ArrowPropsToken = { position?: 'auto' | 'top' | 'bottom' | 'left' | 'right'; };
export type ArrowPropsBasic = ClientOnlyPropsInclude & { elementTarget?: HTMLElement | string; };
export type ArrowProps = ArrowPropsBasic & ArrowPropsToken;
export declare const defaultsArrow: { position: string; };

// File: src/constructors/Arrow/types.d.ts
export type ArrowComponents = {};
export type ArrowEmits = {};
export interface ArrowExpose { update: () => void; }
export interface ArrowSlots {}
export type ArrowClasses = { main: ConstrClass; mask: string; arrow: string; arrowLine: string; arrowArea: string; border: string; borderHidden: string; };

// File: src/constructors/Badge/basicTypes.d.ts
export type BadgeComponentInclude = { badge?: object; };
export type BadgePropsInclude<Badge extends BadgePropsBasic = BadgePropsBasic> = { badge?: string | number | ConstrBind<Badge>; badgeDot?: boolean; badgeAttrs?: ConstrBind<Badge>; };

// File: src/constructors/Badge/props.d.ts
export type BadgePropsToken = { selected?: boolean; hide?: boolean; dot?: boolean; overlap?: 'rectangular' | 'circular' | 'static'; vertical?: 'top' | 'center' | 'bottom'; horizontal?: 'right' | 'center' | 'left'; };
export type BadgePropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = IconPropsInclude<Icon> & LabelNumberProps & AriaLabelPropsInclude & { dot?: boolean; };
export type BadgeProps = BadgePropsBasic & BadgePropsToken;
export declare const defaultsBadge: { overlap: string; vertical: string; horizontal: string; };

// File: src/constructors/Badge/types.d.ts
export type BadgeComponents = IconComponentInclude;
export type BadgeEmits = {};
export interface BadgeExpose {}
export interface BadgeSlots extends LabelNumberSlots {}
export type BadgeClasses = { main: ConstrClass; label: string; icon: string; };

// File: src/constructors/Bars/basicTypes.d.ts
export type BarsComponentInclude = { bars?: object; };
export type BarsEmitsInclude = { bars: EventClickEmits['click']; barsLite: EventClickEmits['clickLite']; barsBack: EventClickEmits['clickLite']; };
export type BarsPropsInclude<Bars extends BarsPropsBasic = BarsPropsBasic> = { barsLabel?: string | number; barsDescription?: string; barsBackHide?: boolean; barsHide?: boolean; barsList?: Bars['bars']; barsAttrs?: ConstrBind<Bars>; };

// File: src/constructors/Bars/props.d.ts
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

// File: src/constructors/Bars/types.d.ts
export type BarsComponents = ButtonComponentInclude;
export type BarsEmits = EventClickEmits & { 'update:action': [value: boolean]; 'update:modelAction': [value: boolean]; };
export interface BarsExpose {}
export interface BarsSlots extends LabelSlots, DescriptionSlots {
    bars?(props: any): any;
    actionBars?(props: any): any;
}
export type BarsClasses = { main: ConstrClass; context: string; label: string; description: string; };

// File: src/constructors/Bleed/props.d.ts
export type BleedPropsBasic = { tag?: string; };
export type BleedProps = BleedPropsBasic & {};
export declare const defaultsBleed: { tag: string; };

// File: src/constructors/Bleed/types.d.ts
export type BleedComponents = {};
export type BleedEmits = {};
export interface BleedExpose {}
export interface BleedSlots { default?(props: any): any; }
export type BleedClasses = { main: ConstrClass; };

// File: src/constructors/Block/props.d.ts
export type BlockPropsToken = {};
export type BlockPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = HeaderPropsInclude<Icon, Header> & DescriptionProps & AreaPropsInclude & { headline?: string; tag?: string; };
export type BlockProps = BlockPropsBasic & BlockPropsToken;
export declare const defaultsBlock: { area: string; tag: string; tagHeader: string; };

// File: src/constructors/Block/types.d.ts
export type BlockComponents = HeaderComponentInclude;
export type BlockEmits = {};
export interface BlockExpose {}
export interface BlockSlots extends HeaderSlotsInclude, DescriptionSlots {
    headline?(props: any): any;
    default?(props: any): any;
}
export type BlockClasses = { main: ConstrClass; headline: string; header: string; description: string; body: string; };

// File: src/constructors/Button/basicTypes.d.ts
export type ButtonComponentInclude = { button?: object; };
export type ButtonPropsInclude<Button extends ButtonPropsBasic = ButtonPropsBasic> = { buttonAttrs?: ConstrBind<Button>; };

// File: src/constructors/Button/props.d.ts
export type ButtonPropsToken = { focus?: boolean; disabled?: boolean; selected?: boolean; readonly?: boolean; adaptive?: 'iconAlways' | 'block' | 'auto'; container?: boolean; inverse?: boolean; grid?: boolean; textAlign?: 'left' | 'center' | 'right'; };
export type ButtonPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & EnabledProps & IconTrailingPropsInclude<Icon> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & EventClickProps & ConstrHrefProps & AriaLabelPropsInclude & { tag?: 'button' | 'a' | 'span' | string; type?: 'button' | 'submit' | 'reset' | string; };
export type ButtonProps = ButtonPropsBasic & ButtonPropsToken;
export declare const defaultsButton: {};

// File: src/constructors/Button/types.d.ts
export type ButtonComponents = IconComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type ButtonEmits = EventClickEmits;
export interface ButtonExpose extends EventClickExpose {}
export interface ButtonSlots extends LabelSlots {}
export type ButtonClasses = { main: ConstrClass; label: string; icon: string; trailing: string; loading: string; };

// File: src/constructors/ButtonGroup/props.d.ts
export type ButtonGroupPropsToken = { orientation?: 'horizontal' | 'vertical'; wrap?: boolean; };
export type ButtonGroupPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic> = AreaPropsInclude & { list?: ConstrBind<Button>[]; buttonAttrs?: ConstrBind<Button>; };
export type ButtonGroupProps = ButtonGroupPropsBasic & ButtonGroupPropsToken;
export declare const defaultsButtonGroup: { orientation: string; area: string; };

// File: src/constructors/ButtonGroup/types.d.ts
export type ButtonGroupComponents = ButtonComponentInclude;
export type ButtonGroupEmits = EventClickEmits;
export interface ButtonGroupExpose {}
export interface ButtonGroupSlots { default?(props: any): any; }
export type ButtonGroupClasses = { main: ConstrClass; item: string; };

// File: src/constructors/Cell/basicTypes.d.ts
export type CellClassesSub = { label: string; description: string; caption: string; trailing: string; };
export type CellComponentInclude = { cell?: object; };
export interface CellSlotsInclude extends LabelAlternativeSlots, DescriptionSlots, CaptionSlots {
    trailing?(props: CellClassesSub): any;
    body?(props: CellClassesSub): any;
}

// File: src/constructors/Cell/props.d.ts
export type CellPropsToken = { focus?: boolean; selected?: boolean; readonly?: boolean; disabled?: boolean; dynamic?: boolean; dynamicHover?: boolean; divider?: boolean; dividerLabel?: 'always' | 'none'; iconTop?: boolean; };
export type CellPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & DescriptionProps & CaptionProps & EnabledProps & IconTrailingPropsInclude<Icon> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & EventClickProps & AriaRolePropsInclude & { tag?: string; divider?: boolean; dynamic?: boolean; };
export type CellProps = CellPropsBasic & CellPropsToken;
export declare const defaultsCell: { divider: boolean; tag: string; };

// File: src/constructors/Cell/types.d.ts
export type CellComponents = IconComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type CellEmits = EventClickEmits;
export interface CellExpose extends EventClickExpose {}
export interface CellSlots extends LabelSlots, DescriptionSlots, CaptionSlots {
    trailing?(props: CellClassesSub): any;
    body?(props: CellClassesSub): any;
}
export type CellClasses = { main: ConstrClass; context: string; contextTrailing: string; label: string; description: string; caption: string; icon: string; trailing: string; body: string; loading: string; };

// File: src/constructors/Checkbox/props.d.ts
export type CheckboxPropsToken = { block?: boolean; adaptive?: 'rightAlways'; container?: boolean; required?: boolean; itemCenter?: boolean; focus?: boolean; disabled?: boolean; };
export type CheckboxPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & DescriptionProps & FieldMessagePropsInclude<FieldMessage, FieldCounter> & FieldInputCheckProps & ProgressPropsInclude<Progress> & EnabledProps & ModelProps<boolean> & ModelPropsSelected & SkeletonPropsInclude & { selected?: string; iconCheckbox?: string | ConstrBind<Image> | null; iconIndeterminate?: string | ConstrBind<Image> | null; };
export type CheckboxProps = CheckboxPropsBasic & CheckboxPropsToken;
export declare const defaultsCheckbox: { block: boolean; itemCenter: boolean; valueVariantHide: string; };

// File: src/constructors/Checkbox/types.d.ts
export type CheckboxComponents = ImageComponentInclude & FieldMessageComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type CheckboxEmits = FieldBasicEmits<boolean> & ModelEmitsSelected;
export interface CheckboxExpose extends FieldBasicExpose<boolean> {}
export interface CheckboxSlots extends LabelSlots, DescriptionSlots {}
export type CheckboxClasses = { main: ConstrClass; input: string; body: string; item: string; icon: string; loading: string; info: string; label: string; };

// File: src/constructors/Chip/basicTypes.d.ts
export type ChipComponentInclude = { chip?: object; };
export type ChipPropsInclude<Chip extends ChipPropsBasic = ChipPropsBasic> = { badge?: string | number | ConstrBind<Badge>; badgeDot?: boolean; chipAttrs?: ConstrBind<Chip>; };

// File: src/constructors/Chip/props.d.ts
export type ChipPropsToken = { focus?: boolean; disabled?: boolean; selected?: boolean; readonly?: boolean; adaptive?: 'iconAlways' | 'block' | 'auto'; container?: boolean; inverse?: boolean; grid?: boolean; textAlign?: 'left' | 'center' | 'right'; };
export type ChipPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = ButtonPropsBasic<Icon, Progress>;
export type ChipProps = ChipPropsBasic & ChipPropsToken;
export declare const defaultsChip: { tag: string; };

// File: src/constructors/Chip/types.d.ts
export type ChipComponents = ButtonComponents;
export type ChipEmits = ButtonEmits;
export interface ChipExpose extends ButtonExpose {}
export interface ChipSlots extends ButtonSlots {}
export type ChipClasses = { main: ConstrClass; label: string; icon: string; trailing: string; loading: string; };

// File: src/constructors/ChipGroup/basicTypes.d.ts
export type ChipGroupData<Chip extends ChipPropsBasic = ChipPropsBasic> = ListListInput<Chip>;
export type ChipGroupItem<Chip extends ChipPropsBasic = ChipPropsBasic> = ConstrBind<Chip>;
export type ChipGroupList<Chip extends ChipPropsBasic = ChipPropsBasic> = ChipGroupItem<Chip>[];

// File: src/constructors/ChipGroup/props.d.ts
export type ChipGroupPropsToken = {};
export type ChipGroupPropsBasic<Chip extends ChipPropsBasic = ChipPropsBasic> = ModelPropsSelected<ListSelectedList> & { readonly?: boolean; selected?: ListSelectedList; list?: ChipGroupData; iconWhenSelected?: boolean; multiple?: boolean; keyLabel?: string; keyValue?: string; chipAttrs?: ConstrBind<Chip>; };
export type ChipGroupProps = ChipGroupPropsBasic & ChipGroupPropsToken;
export declare const defaultsChipGroup: { readonly: boolean; };

// File: src/constructors/ChipGroup/types.d.ts
export type ChipGroupComponents = ChipComponentInclude;
export type ChipGroupEmits = EventClickEmits & ModelEmitsSelected<ListSelectedList>;
export interface ChipGroupExpose {}
export interface ChipGroupSlots { default?(props: any): any; }
export type ChipGroupClasses = { main: ConstrClass; item: string; };

// File: src/constructors/ClientOnly/props.d.ts
export type ClientOnlyPropsBasic = ClientOnlyPropsInclude;
export type ClientOnlyProps = ClientOnlyPropsBasic & {};
export declare const defaultsClientOnly: { clientOnly: boolean; };

// File: src/constructors/ClientOnly/types.d.ts
export type ClientOnlyComponents = {};
export type ClientOnlyEmits = {};
export interface ClientOnlyExpose {}
export interface ClientOnlySlots { default?(props: any): any; }
export type ClientOnlyClasses = { main: ConstrClass; };

// File: src/constructors/Container/props.d.ts
export type ContainerPropsToken = { align?: 'left' | 'center' | 'right'; };
export type ContainerPropsBasic = AreaPropsInclude & {};
export type ContainerProps = ContainerPropsBasic & ContainerPropsToken;
export declare const defaultsContainer: { align: string; area: string; };

// File: src/constructors/Container/types.d.ts
export type ContainerComponents = {};
export type ContainerEmits = {};
export interface ContainerExpose {}
export interface ContainerSlots { default?(props: any): any; }
export type ContainerClasses = { main: ConstrClass; };

// File: src/constructors/Dialog/props.d.ts
export type DialogPropsToken = { success?: boolean; error?: boolean; imagePosition?: 'top' | 'left'; };
export type DialogPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic> = WindowPropsInclude<Window> & BarsPropsInclude<Bars> & ActionsPropsInclude<Actions> & ImagePropsInclude<Image> & LabelProps & DescriptionProps & TextClosePropsInclude & TextOkPropsInclude & {
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
export declare const defaultsDialog: { imagePosition: string; barsBackHide: boolean; barsHide: boolean; clickOkAndClose: boolean; };

// File: src/constructors/Dialog/types.d.ts
export type DialogComponents = ModalComponents & IconComponentInclude;
export type DialogEmits = ModalEmits & { ok: []; close: []; };
export interface DialogExpose extends ModalExpose {}
export interface DialogSlots extends ModalSlots, LabelAlternativeSlots, DescriptionSlots {}
export type DialogClasses = { main: ConstrClass; title: string; header: string; information: string; icon: string; label: string; description: string; body: string; footer: string; };

// File: src/constructors/Divider/props.d.ts
export type DividerPropsBasic = {};
export type DividerProps = DividerPropsBasic & {};
export declare const defaultsDivider: {};

// File: src/constructors/Divider/types.d.ts
export type DividerComponents = {};
export type DividerEmits = {};
export interface DividerExpose {}
export interface DividerSlots {}
export type DividerClasses = { main: ConstrClass; };

// File: src/constructors/Dummy/props.d.ts
export type DummyPropsBasic = {};
export type DummyProps = DummyPropsBasic & {};
export declare const defaultsDummy: {};

// File: src/constructors/Dummy/types.d.ts
export type DummyComponents = {};
export type DummyEmits = {};
export interface DummyExpose {}
export interface DummySlots { default?(props: any): any; }
export type DummyClasses = { main: ConstrClass; };

// File: src/constructors/Field/basicTypes.d.ts
export type FieldControl = { id: string; className: string; classHidden: string; classForFocus: string; binds: AriaList & { 'id': string; 'class': string; 'data-input': string; }; };
export type FieldComponentInclude = { field?: object; };
export interface FieldSlotsInclude extends Omit<FieldSlots, 'default'> {}
export type FieldPropsInclude<Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = Omit<FieldPropsBasic<Icon, FieldLabel, FieldMessage, FieldCounter, Progress>, 'disabledPrevious' | 'disabledNext' | 'to' | 'value' | 'maxlength' | 'cancelShow' | 'counter' | 'counterTemplate' | 'counterTop' | 'iconArrowLeft' | 'iconArrowRight' | 'iconPlus' | 'iconMinus' | 'iconClose'> & {
    focus?: boolean;
    selected?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    align?: 'center' | 'right' | 'left';
    cancel?: 'auto' | 'always' | 'none';
    fieldAttrs?: ConstrBind<Field>;
};

// File: src/constructors/Field/props.d.ts
export type FieldPropsToken = { focus?: boolean; disabled?: boolean; selected?: boolean; readonly?: boolean; block?: boolean; isValue?: boolean; basic?: boolean; boxed?: boolean; tonal?: boolean; filled?: boolean; outlined?: boolean; classic?: boolean; arrowCarousel?: boolean; arrowStepper?: boolean; arrowAlign?: 'center' | 'right' | 'left'; cancel?: 'auto' | 'always' | 'none'; align?: 'center' | 'right' | 'left'; width?: string | 'custom'; };
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
export declare const defaultsField: { arrowAlign: string; cancel: string; };

// File: src/constructors/Field/types.d.ts
export type FieldComponents = IconComponentInclude & FieldLabelComponentInclude & FieldMessageComponentInclude & ProgressComponentInclude;
export type FieldEmits = EventClickEmits;
export interface FieldExpose {}
export interface FieldSlots extends CaptionSlots, PrefixSlots, SuffixSlots, FieldLabelSlotsInclude {
    leading?(props: FieldControl): any;
    trailing?(props: FieldControl): any;
    default?(props: FieldControl): any;
}
export type FieldClasses = { main: ConstrClass; body: string; bodyInput: string; bodyTitle: string; bodyTitleLabel: string; bodyTitleLabelText: string; bodyScoreboard: string; bodyScoreboardLeft: string; bodyScoreboardRight: string; bodyScoreboardSpace: string; bodyScoreboardInput: string; bodyBorder: string; required: string; };

// File: src/constructors/FieldCounter/basicTypes.d.ts
export type FieldCounterComponentInclude = { fieldCounter?: object; };
export interface FieldCounterPropsInclude<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> {
    counter?: FieldCounterPropsBasic['counter'];
    counterShow?: boolean;
    counterTemplate?: FieldCounterPropsBasic['template'];
    counterId?: string;
    maxlength?: FieldCounterPropsBasic['maxlength'];
    fieldCounterAttrs?: ConstrBind<FieldCounter>;
}

// File: src/constructors/FieldCounter/props.d.ts
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

// File: src/constructors/FieldCounter/types.d.ts
export type FieldCounterComponents = {};
export type FieldCounterEmits = {};
export interface FieldCounterExpose {}
export interface FieldCounterSlots {}
export type FieldCounterClasses = { main: ConstrClass; aria: string; };

// File: src/constructors/FieldLabel/basicTypes.d.ts
export type FieldLabelComponentInclude = { fieldLabel?: object; };
export interface FieldLabelSlotsInclude extends LabelAlternativeSlots {}
export type FieldLabelPropsInclude<FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> = LabelProps & FieldCounterPropsInclude<FieldCounter> & { required?: boolean; fieldLabelAttrs?: ConstrBind<FieldLabel>; };

// File: src/constructors/FieldLabel/props.d.ts
export type FieldLabelPropsToken = {};
export type FieldLabelPropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & FieldCounterPropsInclude<FieldCounter> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & { for?: string; required?: boolean; };
export type FieldLabelProps = FieldLabelPropsBasic & FieldLabelPropsToken;
export declare const defaultsFieldLabel: {};

// File: src/constructors/FieldLabel/types.d.ts
export type FieldLabelComponents = FieldCounterComponentInclude & ProgressComponentInclude;
export type FieldLabelEmits = {};
export interface FieldLabelExpose {}
export interface FieldLabelSlots extends LabelAlternativeSlots {}
export type FieldLabelClasses = { main: ConstrClass; label: string; required: string; };

// File: src/constructors/FieldMessage/basicTypes.d.ts
export type FieldMessageSlot = { message?: string; helperMessage?: string; validationMessage?: string; };
export type FieldMessageComponentInclude = { fieldMessage?: object; };
export interface FieldMessagePropsInclude<FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> extends FieldCounterPropsInclude<FieldCounter> {
    forceShowMessage?: boolean;
    hasHtmlCode?: boolean;
    disabled?: boolean;
    helperMessage?: string;
    validationMessage?: string;
    fieldMessageAttrs?: ConstrBind<FieldMessage>;
    helperId?: string;
    validationId?: string;
}

// File: src/constructors/FieldMessage/props.d.ts
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

// File: src/constructors/FieldMessage/types.d.ts
export type FieldMessageComponents = FieldCounterComponentInclude;
export type FieldMessageEmits = {};
export interface FieldMessageExpose {}
export interface FieldMessageSlots {
    helper?(props: FieldMessageSlot): any;
    validation?(props: FieldMessageSlot): any;
}
export type FieldMessageClasses = { main: ConstrClass; info: string; error: string; fieldCounter: string; };

// File: src/constructors/Grid/props.d.ts
export type GridPropsToken = {};
export type GridPropsBasic = {};
export type GridProps = GridPropsBasic & GridPropsToken;
export declare const defaultsGrid: {};

// File: src/constructors/Grid/types.d.ts
export type GridComponents = {};
export type GridEmits = {};
export interface GridExpose {}
export interface GridSlots { default?(props: any): any; }
export type GridClasses = { main: ConstrClass; };

// File: src/constructors/GridItem/props.d.ts
export type GridItemPropsToken = { base?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'; };
export type GridItemPropsBasic = {};
export type GridItemProps = GridItemPropsBasic & GridItemPropsToken;
export declare const defaultsGridItem: { base: string; };

// File: src/constructors/GridItem/types.d.ts
export type GridItemComponents = {};
export type GridItemEmits = {};
export interface GridItemExpose {}
export interface GridItemSlots { default?(props: any): any; }
export type GridItemClasses = { main: ConstrClass; };

// File: src/constructors/Group/props.d.ts
export type GroupPropsToken = {};
export type GroupPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = BlockPropsBasic<Icon, Header>;
export type GroupProps = GroupPropsBasic & GroupPropsToken;
export declare const defaultsGroup: { area: string; tag: string; tagHeader: string; };

// File: src/constructors/Group/types.d.ts
export type GroupComponents = BlockComponents;
export type GroupEmits = BlockEmits;
export interface GroupExpose extends BlockExpose {}
export interface GroupSlots extends BlockSlots {}
export type GroupClasses = { main: ConstrClass; headline: string; header: string; description: string; body: string; };

// File: src/constructors/Header/basicTypes.d.ts
export type HeaderComponentInclude = { header?: object; };
export type HeaderPropsInclude<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = LabelProps & CaptionProps & IconPropsInclude<Icon> & { tagHeader?: string; headerAttrs?: ConstrBind<Header>; };
export interface HeaderSlotsInclude extends LabelAlternativeSlots, CaptionSlots {
    trailing?(props: any): any;
}

// File: src/constructors/Header/props.d.ts
export type HeaderPropsToken = { tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; };
export type HeaderPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = LabelProps & CaptionProps & IconPropsInclude<Icon> & AreaPropsInclude;
export type HeaderProps = HeaderPropsBasic & HeaderPropsToken;
export declare const defaultsHeader: { tag: string; area: string; };

// File: src/constructors/Header/types.d.ts
export type HeaderComponents = IconComponentInclude;
export type HeaderEmits = {};
export interface HeaderExpose {}
export interface HeaderSlots extends LabelSlots, CaptionSlots {
    trailing?(props: any): any;
}
export type HeaderClasses = { main: ConstrClass; label: string; caption: string; icon: string; space: string; };

// File: src/constructors/HorizontalScroll/basicTypes.d.ts
export type HorizontalScrollControlItem = { classItem: string; classItemSelected: string; binds: { class: string; }; };
export type HorizontalScrollComponentInclude = { horizontalScroll?: object; };
export type HorizontalScrollPropsInclude<HorizontalScroll extends HorizontalScrollPropsBasic = HorizontalScrollPropsBasic> = { horizontalScrollBleed?: boolean; horizontalScrollAlign?: 'block' | 'left'; horizontalScrollAttrs?: ConstrBind<HorizontalScroll>; };

// File: src/constructors/HorizontalScroll/props.d.ts
export type HorizontalScrollPropsToken = { bleed?: boolean; align?: 'block' | 'center' | 'left' | 'right'; };
export type HorizontalScrollPropsBasic = { bleed?: boolean; tag?: string; };
export type HorizontalScrollProps = HorizontalScrollPropsBasic & HorizontalScrollPropsToken;
export declare const defaultsHorizontalScroll: { bleed: boolean; align: string; tag: string; };

// File: src/constructors/HorizontalScroll/types.d.ts
export type HorizontalScrollComponents = {};
export type HorizontalScrollEmits = {};
export interface HorizontalScrollExpose { toSelected(): void; }
export interface HorizontalScrollSlots { default?(props: any): any; }
export type HorizontalScrollClasses = { main: ConstrClass; };

// File: src/constructors/Icon/basicTypes.d.ts
export type IconEventLoad = { isActive: boolean; iconBind: ConstrItem | undefined; iconActiveBind: ConstrItem | undefined; };
export type IconValue<Icon extends IconPropsBasic = IconPropsBasic> = string | ConstrBind<Icon> | null;
export type IconComponentInclude = { icon?: object; };
export type IconLitePropsInclude<Icon extends IconPropsBasic = IconPropsBasic> = { icon?: IconValue<Icon>; };
export type IconPropsInclude<Icon extends IconPropsBasic = IconPropsBasic> = IconLitePropsInclude<Icon> & { selected?: boolean; iconTurn?: boolean; iconHide?: boolean; iconDir?: boolean; iconPalette?: boolean; iconAttrs?: ConstrBind<Icon>; };
export type IconTrailingPropsInclude<Icon extends IconPropsBasic = IconPropsBasic> = IconPropsInclude<Icon> & { iconTrailing?: IconValue<Icon>; iconTrailingTurnOnly?: boolean; iconTrailingDirOnly?: boolean; iconTrailingPalette?: boolean; };

// File: src/constructors/Icon/props.d.ts
export type IconPropsToken = { turn?: boolean; disabled?: boolean; hide?: boolean; asPalette?: boolean; dir?: boolean; overlay?: boolean; dynamic?: boolean; start?: boolean; end?: boolean; high?: boolean; animationType?: 'type1' | 'type2'; animationShow?: boolean; };
export type IconPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic> = SkeletonPropsInclude & AriaLabelPropsInclude & EventClickProps & {
    active?: boolean;
    icon?: ImageValue<Image>;
    iconActive?: ImageValue<Image>;
    role?: RoleType;
    tabindex?: number | string;
};
export type IconProps = IconPropsBasic & IconPropsToken;
export declare const defaultsIcon: { animationType: string; };

// File: src/constructors/Icon/types.d.ts
export type IconComponents = ImageComponentInclude;
export type IconEmits = ImageEmitsInclude & EventClickEmits;
export interface IconExpose extends EventClickExpose { isActive(): boolean; }
export interface IconSlots { default?(props: any): any; }
export type IconClasses = { main: ConstrClass; };

// File: src/constructors/Image/basicTypes.d.ts
export declare enum ImageTypeValue { pdf = "pdf", file = "file", array = "array", image = "image", flag = "flag", flagCompressed = "flag-compressed", color = "color", public = "public", filled = "filled", outlined = "outlined", round = "round", sharp = "sharp", twoTone = "two-tone", material = "material", icon = "icon" }
export type ImageElement = HTMLElement | undefined;
export type ImageAttrs = Record<keyof HTMLImageElement, any>;
export type ImageCoordinatorItem = [number] | [number, number] | [number, number, number] | [number, number, number, number] | Undefined;
export type ImageSize<T = number> = { width: T; height: T; };
export type ImagePictureItem = Record<keyof HTMLSourceElement & 'key', any>;
export type ImagePictureList = ImagePictureItem[];
export type ImagePicture = Record<string, string> | ImagePictureList;
export type ImageUint8ArrayType = Uint8Array<ArrayBuffer> | ArrayBuffer;
export type ImageUint8ArrayItem = { item: ImageUint8ArrayType; type: string; src: string; };
export type ImageUint8ArrayCache = ImageUint8ArrayItem[];
export type ImageItem = ImageSize & { image: HTMLImageElement; src: string; };
export type ImageTypeItem = ImageTypeValue | Undefined;
export type ImageEventItem = ImageItem | string | undefined;
export type ImageEventType = { type: ImageTypeItem; };
export type ImageEventData = ImageEventType & { image: ImageEventItem; };
export type ImageValue<Image extends ImagePropsBasic = ImagePropsBasic> = string | ConstrBind<Image> | null;
export type ImageComponentInclude = { image?: object; };
export type ImageEmitsInclude = ImageEmits;
export type ImagePropsInclude<Image extends ImagePropsBasic = ImagePropsBasic> = { image?: string | ConstrBind<Image>; imageAttrs?: ConstrBind<Image>; };

// File: src/constructors/Image/props.d.ts
export type ImagePropsToken = { turn?: boolean; disabled?: boolean; hide?: boolean; adaptive?: boolean; size?: 'auto' | 'contain' | 'cover'; };
export type ImagePropsBasic = { value?: string | any; url?: string; adaptiveGroup?: string; adaptiveAlways?: boolean; objectWidth?: string | number; objectHeight?: string | number; coordinator?: number[] | any; x?: string | number; y?: string | number; tagImg?: boolean; srcset?: string | Record<string, string>; picture?: ImagePicture; alt?: string; lazy?: boolean; preloadOffset?: string; fetchPriority?: HTMLImageElement['fetchPriority']; };
export type ImageProps = ImagePropsBasic & ImagePropsToken;
export declare const defaultsImage: { adaptiveGroup: string; preloadOffset: string; };

// File: src/constructors/Image/types.d.ts
export type ImageComponents = {};
export type ImageEmits = { load: [image: ImageEventData]; };
export type ImageExpose = { getType: () => ImageTypeItem; getData: () => ImageEventItem; };
export interface ImageSlots {}
export type ImageClasses = { main: ConstrClass; };

// File: src/constructors/Input/basicTypes.d.ts
export type InputComponentInclude = { input?: object; };

// File: src/constructors/Input/props.d.ts
export type InputPropsToken = {};
export type InputPropsBasic<Mask extends MaskPropsBasic = MaskPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = MaskPropsInclude<Mask> & FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldInputProps<NumberOrString>;
export type InputProps = InputPropsBasic & InputPropsToken;
export declare const defaultsInput: { type: string; autocomplete: string; arrow: string; maskVisible: boolean; };

// File: src/constructors/Input/types.d.ts
export type InputComponents = MaskComponentInclude & FieldComponentInclude;
export type InputEmits = FieldBasicEmits;
export interface InputExpose extends FieldBasicExpose {}
export interface InputSlots extends FieldSlotsInclude {}
export type InputClasses = { main: ConstrClass; };

// File: src/constructors/InputPhone/props.d.ts
export type InputPhonePropsBasic<InputPhoneDialCode extends InputPhoneDialCodePropsBasic = InputPhoneDialCodePropsBasic, Mask extends MaskPropsBasic = MaskPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = InputPhoneDialCodePropsInclude<InputPhoneDialCode> & Omit<FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress>, 'caption' | 'counterShow'> & FieldInputPhoneProps & { countryDefault?: string; countryBlock?: boolean; maskAttrs?: ConstrBind<Mask>; };
export type InputPhoneProps = InputPhonePropsBasic & {};
export declare const defaultsInputPhone: {};

// File: src/constructors/InputPhone/types.d.ts
export type InputPhoneComponents = FieldComponentInclude & MaskComponentInclude & InputPhoneDialCodeComponentInclude;
export type InputPhoneEmits = FieldBasicEmits;
export interface InputPhoneExpose extends FieldBasicExpose {}
export interface InputPhoneSlots extends FieldSlotsInclude {}
export type InputPhoneClasses = { main: ConstrClass; };

// File: src/constructors/InputPhoneDialCode/basicTypes.d.ts
export type InputPhoneDialCodeComponentInclude = { inputPhoneDialCode?: object; };
export type InputPhoneDialCodePropsInclude<InputPhoneDialCode extends InputPhoneDialCodePropsBasic = InputPhoneDialCodePropsBasic> = { disabled?: boolean; inputPhoneDialCodeAttrs?: ConstrBind<InputPhoneDialCode>; };

// File: src/constructors/InputPhoneDialCode/props.d.ts
export type InputPhoneDialCodePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, MenuCountry extends MenuCountryPropsBasic = MenuCountryPropsBasic> = ButtonPropsInclude<Button> & MenuCountryPropsInclude<MenuCountry> & ModelPropsSelected<ListSelectedList> & { value?: string; labelType?: 'name' | 'code' | 'none'; iconArrowDown?: IconValue<Icon>; };
export type InputPhoneDialCodeProps = InputPhoneDialCodePropsBasic & {};
export declare const defaultsInputPhoneDialCode: {};

// File: src/constructors/InputPhoneDialCode/types.d.ts
export type InputPhoneDialCodeComponents = ButtonComponentInclude & MenuCountryComponentInclude;
export type InputPhoneDialCodeEmits = MenuCountryEmits;
export interface InputPhoneDialCodeExpose {}
export interface InputPhoneDialCodeSlots {}
export type InputPhoneDialCodeClasses = { main: ConstrClass; button: string; menuCountry: string; };

// File: src/constructors/List/basicTypes.d.ts
export type ListComponentInclude = { list?: object; };
export type ListSlotsInclude = { isSelected: ComputedRef<boolean>; selectedList: ComputedRef<ListList>; selectedNames: ComputedRef<ListNames>; selectedValues: ComputedRef<any[]>; };

// File: src/constructors/List/props.d.ts
export type ListPropsToken = { axis?: 'x' | 'y'; divider?: boolean; };
export type ListPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, ListItem extends ListItemPropsBasic = ListItemPropsBasic, Input extends InputPropsBasic = InputPropsBasic> = AriaRolePropsInclude & AriaMultiselectablePropsInclude & TextNotFoundPropsInclude & { focus?: ListSelectedItem; selected?: ListSelectedList; disabled?: boolean; lite?: boolean; list?: ListRecord<ListItem>; liteThreshold?: number; highlight?: string; highlightLengthStart?: number; showSearch?: boolean; filterMode?: boolean; keyLabel?: string; keyValue?: string; max?: string | number; tag?: 'div' | 'button' | 'a' | 'span' | string; axis?: 'x' | 'y'; divider?: boolean; selectionStyle?: ListItem['selectionStyle']; itemAttrs?: ConstrBind<ListItem>; itemManagementAttrs?: ConstrBind<ListItem>; itemGroupAttrs?: ConstrBind<ListItem>; itemMenuAttrs?: ConstrBind<ListItem>; inputSearchAttrs?: ConstrBind<Input>; iconArrowDown?: IconValue<Icon>; iconArrowRight?: IconValue<Icon>; iconSearch?: IconValue<Icon>; roleItem?: RoleType; tabindex?: string | number; control?: boolean; };
export type ListProps = ListPropsBasic & ListPropsToken;
export declare const defaultsList: { axis: string; keyLabel: string; keyValue: string; tag: string; role: string; tabindex: number; };

// File: src/constructors/List/types.d.ts
export type ListComponents = ListItemComponentInclude & ListGroupComponentInclude & ListMenuComponentInclude & InputComponentInclude;
export type ListEmits = EventClickEmits & { close: []; };
export interface ListExpose { isSelected(): boolean; getSelectedList(): ListList; getSelectedNames(): ListNames; getSelectedValues(): any[]; }
export type ListSlots = Record<string, (props: any) => any>;
export type ListClasses = { main: ConstrClass; space: string; line: string; subtitle: string; html: string; management: string; group: string; menu: string; menuGroup: string; filterInput: string; none: string; };

// File: src/constructors/ListGroup/basicTypes.d.ts
export type ListGroupComponentInclude = { listGroup?: object; };
export type ListGroupSlotsPropsInclude = MotionTransformControlItem & { open: boolean; };

// File: src/constructors/ListGroup/props.d.ts
export type ListGroupPropsToken = { open?: boolean; divider?: boolean; };
export type ListGroupPropsBasic = { divider?: boolean; };
export type ListGroupProps = ListGroupPropsBasic & ListGroupPropsToken;
export declare const defaultsListGroup: {};

// File: src/constructors/ListGroup/types.d.ts
export type ListGroupComponents = MotionTransformComponentInclude;
export type ListGroupEmits = {};
export interface ListGroupExpose { getOpen(): boolean; }
export interface ListGroupSlots { head?(props: ListGroupSlotsPropsInclude): any; list?(props: any): any; }
export type ListGroupClasses = { main: ConstrClass; head: string; list: string; };

// File: src/constructors/ListItem/basicTypes.d.ts
export type ListItemComponentInclude = { listItem?: object; };

// File: src/constructors/ListItem/props.d.ts
export type ListItemPropsToken = { focus?: boolean; open?: boolean; selectedChild?: boolean; readonly?: boolean; disabled?: boolean; iconTop?: boolean; iconAlign?: 'center' | 'edge'; controlPosition?: 'start' | 'end'; fill?: string | 'custom'; divider?: boolean; };
export type ListItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic, Checkbox extends CheckboxPropsBasic = CheckboxPropsBasic, Radio extends RadioPropsBasic = RadioPropsBasic> = LabelHighlightProps & DescriptionProps & PrefixProps & CaptionProps & SuffixProps & IconTrailingPropsInclude<Icon> & BadgePropsInclude<Badge> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & EnabledProps & EventClickProps & AriaRolePropsInclude & { index?: any; href?: string; tag?: 'button' | 'a' | 'span' | 'li' | 'div' | string; filterMode?: boolean; divider?: boolean; selectionStyle?: 'radio' | 'checkbox' | 'checkmark' | 'none'; tabindex?: number | string; checkboxAttrs?: ConstrBind<Checkbox>; radioAttrs?: ConstrBind<Radio>; iconCheckbox?: IconValue<Icon>; type?: string; parent?: string; listId?: number; search?: string; };
export type ListItemProps = ListItemPropsBasic & ListItemPropsToken;
export declare const defaultsListItem: { iconAlign: string; controlPosition: string; tabindex: string; role: string; selectionStyle: string; };

// File: src/constructors/ListItem/types.d.ts
export type ListItemComponents = IconComponentInclude & BadgeComponentInclude & ProgressComponentInclude & RippleComponentInclude & { checkbox?: object; radio?: object; };
export type ListItemEmits = EventClickEmits;
export interface ListItemExpose extends EventClickExpose {}
export interface ListItemSlots extends LabelHighlightSlots, DescriptionSlots, PrefixSlots, CaptionSlots, SuffixSlots {
    leading?(props: any): any;
    trailing?(props: any): any;
    body?(props: any): any;
}
export type ListItemClasses = { main: ConstrClass; body: string; context: string; label: string; highlight: string; prefix: string; caption: string; description: string; icon: string; trailing: string; control: string; badge: string; input: string; };

// File: src/constructors/ListMenu/props.d.ts
export type ListMenuPropsToken = { open?: boolean; axis?: 'x' | 'y'; divider?: boolean; };
export type ListMenuPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic> = WindowPropsInclude<Window>;
export type ListMenuProps = ListMenuPropsBasic & ListMenuPropsToken;
export declare const defaultsListMenu: { autoClose: boolean; };

// File: src/constructors/ListMenu/types.d.ts
export type ListMenuComponents = WindowComponentInclude;
export type ListMenuEmits = WindowEmitsInclude;
export interface ListMenuExpose extends WindowExposeInclude {}
export interface ListMenuSlots { head?(props: WindowControlItem): any; list?(props: any): any; }
export type ListMenuClasses = { main: ConstrClass; head: string; list: string; };

// File: src/constructors/Mask/basicTypes.d.ts
export type MaskTypeItem = GeoDate | 'text' | 'number' | 'number-format' | 'currency';
export type MaskElementInput = HTMLInputElement | undefined;
export type MaskMatchItem = RegExp | string;
export type MaskFractionItem = string | boolean | number;
export type MaskSpecialItem = { defaultValue?: string; rubber?: boolean; transitionChar?: string | string[]; minLength?: number; maxLength?: number; match?: MaskMatchItem; pattern?: FieldPatternItemOrFunction; view?: string; };
export type MaskSpecialInfo = { index: number; key: number; char: string; };
export type MaskSpecialList = Record<string, MaskSpecialItem>;
export type MaskSpecialProp = string | string[] | MaskSpecialList;
export type MaskViewItem = { className: string; value: string; };
export type MaskViewList = MaskViewItem[];
export type MaskList = string | string[];
export type MaskEventData = FieldValidationItem;
export type MaskEventSelection = { target: HTMLInputElement; start: number; end: number; length: number; };
export type MaskComponentInclude = { mask?: object; };
export type MaskPropsInclude<Mask extends MaskPropsBasic = MaskPropsBasic> = ModelProps & { name?: string; value?: string; mask?: string | ConstrBind<Mask>; maskVisible?: boolean; maskNone?: boolean; currency?: string; currencyHide?: boolean; fraction?: MaskFractionItem; maskAttrs?: ConstrBind<Mask>; };
export declare const MASK_CHAR_DELETE = "~";
export declare const MASK_VIEW_DEFAULT = "_";

// File: src/constructors/Mask/props.d.ts
export type MaskPropsToken = { visible?: boolean; visiblePartly?: boolean; align?: 'center' | 'left' | 'right'; dir?: 'ltr' | 'rtl'; };
export type MaskPropsBasic = { name?: string; value?: string | number; valueDefault?: string | number; currency?: string; currencyHide?: boolean; fullOnly?: boolean; mask?: MaskList; special?: MaskSpecialProp; match?: MaskMatchItem; groupSave?: boolean; pattern?: FieldPatternItemOrFunction; check?: FieldPatternItemOrFunction; fraction?: MaskFractionItem; type?: MaskTypeItem; view?: string; inputAttrs?: Partial<HTMLInputElement>; language?: string; };
export type MaskProps = MaskPropsBasic & MaskPropsToken;
export declare const defaultsMask: { visible: boolean; special: string; match: RegExp; type: string; groupSave: boolean; view: string; };

// File: src/constructors/Mask/types.d.ts
export type MaskComponents = {};
export type MaskEmits = { focus: [event: FocusEvent]; blur: [event: FocusEvent]; keydown: [event: KeyboardEvent]; keyup: [event: KeyboardEvent]; beforeinput: [event: InputEvent]; input: [event: InputEvent, value: FieldValidationItem]; inputLite: [value: FieldValidationItem]; change: [event: InputEvent, value: FieldValidationItem]; changeLite: [value: FieldValidationItem]; paste: [event: ClipboardEvent]; reset: [event: Event]; };
export interface MaskExpose { getValueBasic(): string; getValue(): string; setValue(value: string): boolean; clear(): boolean; }
export interface MaskSlots {}
export type MaskClasses = { main: ConstrClass; input: string; character: string; characterItem: string; };

// File: src/constructors/Menu/basicTypes.d.ts
export type MenuControlBasic = ListSlotsInclude & { loading: Ref<boolean>; previous(): NumberOrStringOrBoolean | undefined; next(): NumberOrStringOrBoolean | undefined; };
export type MenuControlItem = MenuControlBasic & WindowControlItem;
export type MenuComponentInclude = { menu?: object; };
export interface MenuExposeInclude extends MenuExpose { getMenuElement(): Ref<ConstrBind<MenuExpose> | undefined>; }
export type MenuSlotInclude = { title?(props: MenuControlItem): any; footer?(props: MenuControlItem): any; contextTop?(props: MenuControlItem): any; contextBottom?(props: MenuControlItem): any; };
export type MenuPropsInclude<Menu extends MenuPropsBasic = MenuPropsBasic> = { disabled?: boolean; menuAttrs?: ConstrBind<Menu>; };

// File: src/constructors/Menu/props.d.ts
export type MenuPropsToken = { hideList?: boolean; barsAdaptive?: 'showAlways'; };
export type MenuPropsBasic<List extends ListPropsBasic = ListPropsBasic, ListItem extends ListItemPropsBasic = ListItemPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Window extends WindowPropsBasic = WindowPropsBasic> = BarsPropsInclude<Bars> & WindowPropsInclude<Window> & ModelPropsSelected & { selected?: ListSelectedList; hideList?: boolean; list?: ListRecord<ListItem>; liteThreshold?: number; highlight?: string; highlightLengthStart?: number; showSearch?: boolean; filterMode?: boolean; ajax?: string | (() => NormalOrPromise<ListRecord<ListItem>>); request?: ApiFetch; cache?: boolean; keyLabel?: string; keyValue?: string; max?: string | number; tag?: ListItemProps['tag']; step?: string | number; selectionStyle?: ListItem['selectionStyle']; listAttrs?: ConstrBind<List>; itemAttrs?: ConstrBind<ListItem>; roleList?: RoleType; roleItem?: RoleType; tabindex?: string | number; isSelectedByValue?: boolean; embedded?: boolean; };
export type MenuProps = MenuPropsBasic & MenuPropsToken;
export declare const defaultsMenu: { liteThreshold: number; barsHide: boolean; barsBackHide: boolean; tag: string; step: number; autoClose: boolean; };

// File: src/constructors/Menu/types.d.ts
export type MenuComponents = ListComponentInclude & BarsComponentInclude & WindowComponentInclude;
export type MenuEmits = BarsEmitsInclude & EventClickEmits & WindowEmitsInclude & ModelEmitsSelected & { updateValue: [value?: NumberOrStringOrBoolean]; clickSlot: [value?: string]; };
export interface MenuExpose extends WindowExposeInclude, ListExpose { loading(): boolean; previous(): NumberOrStringOrBoolean | undefined; next(): NumberOrStringOrBoolean | undefined; }
export type MenuSlots = ListSlots & MenuSlotInclude & { control?(props: MenuControlItem): any; };
export type MenuClasses = { main: ConstrClass; bars: string; list: string; };

// File: src/constructors/MenuButton/basicTypes.d.ts
export type MenuButtonPropsTool<Icon extends IconPropsBasic = IconPropsBasic> = { labelSeparator?: string; icon?: IconValue<Icon>; hideLabelValue?: boolean; hideValueIcon?: boolean; hideList?: boolean; showSearch?: boolean; filterMode?: boolean; iconArrowDown?: IconValue<Icon>; };

// File: src/constructors/MenuButton/props.d.ts
export type MenuButtonPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = LabelProps & ButtonPropsInclude<Button> & FieldSelectLiteProps & MenuPropsInclude<Menu> & MenuButtonPropsTool<Icon>;
export type MenuButtonProps = MenuButtonPropsBasic & {};
export declare const defaultsMenuButton: { labelSeparator: string; hideLabelValue: boolean; hideValueIcon: boolean; };

// File: src/constructors/MenuButton/types.d.ts
export type MenuButtonComponents = MenuComponentInclude & ButtonComponentInclude;
export type MenuButtonEmits = FieldBasicEmits;
export interface MenuButtonExpose extends FieldBasicExpose, MenuExposeInclude {}
export interface MenuButtonSlots extends MenuSlotInclude { default?(props: any): any; }
export type MenuButtonClasses = { main: ConstrClass; label: string; separator: string; selected: string; };

// File: src/constructors/MenuChip/props.d.ts
export type MenuChipPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Chip extends ChipPropsBasic = ChipPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = LabelProps & ChipPropsInclude<Chip> & FieldSelectLiteProps & MenuPropsInclude<Menu> & MenuButtonPropsTool<Icon>;
export type MenuChipProps = MenuChipPropsBasic & {};
export declare const defaultsMenuChip: { labelSeparator: string; hideLabelValue: boolean; hideValueIcon: boolean; };

// File: src/constructors/MenuChip/types.d.ts
export type MenuChipComponents = MenuComponentInclude & ChipComponentInclude;
export type MenuChipEmits = FieldBasicEmits;
export interface MenuChipExpose extends FieldBasicExpose, MenuExposeInclude {}
export interface MenuChipSlots extends MenuSlotInclude { default?(props: any): any; }
export type MenuChipClasses = { main: ConstrClass; label: string; separator: string; selected: string; };

// File: src/constructors/MenuCountry/basicTypes.d.ts
export type MenuCountryComponentInclude = { menuCountry?: object; };
export interface MenuCountryExposeInclude extends MenuExposeInclude { getMenuCountryElement(): Ref<ConstrBind<MenuCountryExpose> | undefined>; }
export type MenuCountryPropsInclude<MenuCountry extends MenuCountryPropsBasic = MenuCountryPropsBasic> = { disabled?: boolean; menuCountryAttrs?: ConstrBind<MenuCountry>; };

// File: src/constructors/MenuCountry/props.d.ts
export type MenuCountryPropsBasic<Menu extends MenuPropsBasic = MenuPropsBasic> = MenuPropsInclude<Menu> & ModelPropsSelected<ListSelectedList> & { selected?: ListSelectedList; countryList?: string[]; showPhoneCode?: boolean; isSelectedByValue?: boolean; language?: string; };
export type MenuCountryProps = MenuCountryPropsBasic & {};
export declare const defaultsMenuCountry: { isSelectedByValue: boolean; };

// File: src/constructors/MenuCountry/types.d.ts
export type MenuCountryComponents = MenuComponentInclude;
export type MenuCountryEmits = ModelEmitsSelected & EventClickEmits & { updateValue: [value?: NumberOrStringOrBoolean]; };
export interface MenuCountryExpose extends MenuExposeInclude {}
export interface MenuCountrySlots extends MenuSlotInclude { control?(props: MenuControlItem): any; }
export type MenuCountryClasses = { main: ConstrClass; };

// File: src/constructors/Modal/props.d.ts
export type ModalPropsToken = { imagePosition?: 'top' | 'left'; };
export type ModalPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic> = WindowPropsInclude<Window> & BarsPropsInclude<Bars> & ActionsPropsInclude<Actions> & ImagePropsInclude<Image> & ModelPropsOpen & { open?: boolean; };
export type ModalProps = ModalPropsBasic & ModalPropsToken;
export declare const defaultsModal: { imagePosition: string; barsBackHide: boolean; };

// File: src/constructors/Modal/types.d.ts
export type ModalComponents = WindowComponentInclude & BarsComponentInclude & ActionsComponentInclude;
export type ModalEmits = WindowEmitsInclude & BarsEmitsInclude & ActionsEmitsInclude & ModelEmitsOpen;
export interface ModalExpose extends WindowExposeInclude {}
export interface ModalSlots extends WindowSlots { header(props: WindowControlItem): any; }
export type ModalClasses = { main: ConstrClass; title: string; header: string; body: string; footer: string; };

// File: src/constructors/MotionAxis/basicTypes.d.ts
export type MotionAxisSelectedValue = string | undefined;
export type MotionAxisClassStatus = { main: string; previous: string; preparation: string; active: string; };
export type MotionAxisEmitType = 'start' | 'end';
export type MotionAxisEmitOptions = { type: MotionAxisEmitType; selected?: MotionAxisSelectedValue; previous?: MotionAxisSelectedValue; preparation?: MotionAxisSelectedValue; active?: MotionAxisSelectedValue; };
export type MotionAxisComponentInclude = { motionAxis?: object; };
export type MotionAxisEmitsInclude = { motionAxis: [options: MotionAxisEmitOptions]; };
export type MotionAxisPropsInclude<MotionAxis extends MotionAxisPropsBasic = MotionAxisPropsBasic> = { selected?: MotionAxisSelectedValue; motionAxisAttrs?: ConstrBind<MotionAxis>; };

// File: src/constructors/MotionAxis/props.d.ts
export type MotionAxisPropsToken = { axis?: 'x' | 'y' | 'z'; direction?: 'next' | 'back' | 'auto'; };
export type MotionAxisPropsBasic = ModelPropsSelected<MotionAxisSelectedValue> & { selected?: MotionAxisSelectedValue; animationHeight?: boolean; inDom?: boolean; inDomSlide?: string[]; };
export type MotionAxisProps = MotionAxisPropsBasic & MotionAxisPropsToken;
export declare const defaultsMotionAxis: { axis: string; direction: string; };

// File: src/constructors/MotionAxis/types.d.ts
export type MotionAxisComponents = {};
export type MotionAxisEmits = ModelEmitsSelected<MotionAxisSelectedValue> & { motionAxis: [options: MotionAxisEmitOptions]; start: [selected: MotionAxisSelectedValue]; end: [selected: MotionAxisSelectedValue]; };
export interface MotionAxisExpose { back(): void; next(): void; to(selected: MotionAxisSelectedValue): void; top(selected: MotionAxisSelectedValue): void; right(selected: MotionAxisSelectedValue): void; bottom(selected: MotionAxisSelectedValue): void; left(selected: MotionAxisSelectedValue): void; down(selected: MotionAxisSelectedValue): void; up(selected: MotionAxisSelectedValue): void; }
export type MotionAxisSlots = { [K in string]?: (props: any) => any; };
export type MotionAxisClasses = { main: ConstrClass; slide: string; };

// File: src/constructors/MotionTransform/basicTypes.d.ts
export type MotionTransformEmitOptions = { type: 'head' | 'body' | 'top' | 'script'; open: boolean; };
export type MotionTransformClassList = { show: string; open: string; window: string; click: string; none: string; noneGlobal: string; close: string; };
export type MotionTransformStyle = { contextWidth: string; contextHeight: string; headScale: string; top: string; left: string; headWidth: string; height: string; scale: string; headHeight: string; bodyHeight: string; };
export type MotionTransformControlItem = { isOpen: boolean; isShow: boolean; classes: MotionTransformClassList; idControl: string; idBody: string; binds: AriaRoleControlPropsInclude; };
export type MotionTransformComponentInclude = { motionTransform?: object; };
export type MotionTransformEmitsInclude = { transform: MotionTransformEmits['transform']; transformLite: MotionTransformEmits['transformLite']; };
export interface MotionTransformExposeInclude extends MotionTransformExpose { getMotionTransformElement(): ConstrBind<MotionTransformExpose> | undefined; }
export interface MotionTransformPropsInclude<MotionTransform extends MotionTransformProps = MotionTransformProps> { open?: boolean; clickOpen?: boolean; autoClose?: boolean; motionTransformAttrs?: ConstrBind<MotionTransform>; }
export declare const __MOTION_TRANSFORM_TYPE_BODY_NAME = "--sys-type-body";

// File: src/constructors/MotionTransform/props.d.ts
export type MotionTransformPropsToken = { section?: boolean; animationHeadPosition?: 'top' | 'toBottom'; adaptive?: 'planeAlways'; };
export type MotionTransformPropsBasic = AriaByPropsInclude & ModelPropsOpen & { open?: boolean; inDom?: boolean; ignore?: HTMLElement | string; ignoreSelector?: string; clickOpen?: boolean; autoClose?: boolean; animationShow?: boolean; tagBody?: string; };
export type MotionTransformProps = MotionTransformPropsBasic & MotionTransformPropsToken;
export declare const defaultsMotionTransform: { animationHeadPosition: string; clickOpen: boolean; autoClose: boolean; animationShow: boolean; tagBody: string; };

// File: src/constructors/MotionTransform/types.d.ts
export type MotionTransformComponents = {};
export type MotionTransformEmits = ModelEmitsOpen & { transform: [event: Event | undefined, options: MotionTransformEmitOptions]; transformLite: [options: MotionTransformEmitOptions]; };
export interface MotionTransformExpose { isShow(): boolean; getOpen(): boolean; setOpen(open: boolean): void; toOpen(): void; toClose(): void; toggle(): void; }
export interface MotionTransformSlots { head?(props: MotionTransformControlItem): any; body?(props: MotionTransformControlItem): any; }
export type MotionTransformClasses = { main: ConstrClass; context: string; head: string; body: string; backdrop: string; scrim: string; clickNone: string; };

// File: src/constructors/Page/props.d.ts
export type PagePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = BlockPropsBasic<Icon, Header>;
export type PageProps = PagePropsBasic & {};
export declare const defaultsPage: { area: string; tag: string; tagHeader: string; };

// File: src/constructors/Page/types.d.ts
export type PageComponents = BlockComponents;
export type PageEmits = BlockEmits;
export interface PageExpose extends BlockExpose {}
export interface PageSlots extends BlockSlots {}
export type PageClasses = { main: ConstrClass; headline: string; header: string; description: string; body: string; };

// File: src/constructors/PageArea/props.d.ts
export type PageAreaPropsBasic = BlockProps;
export type PageAreaProps = PageAreaPropsBasic & {};
export declare const defaultsPageArea: {};

// File: src/constructors/PageArea/types.d.ts
export type PageAreaComponents = { block: object; group: object; page: object; section: object; };
export type PageAreaEmits = {};
export interface PageAreaExpose {}
export interface PageAreaSlots extends BlockSlots {}
export type PageAreaClasses = { main: ConstrClass; };

// File: src/constructors/Progress/basicTypes.d.ts
export type ProgressComponentInclude = { progress?: object; };
export type ProgressPropsInclude<Progress extends ProgressPropsBasic = ProgressPropsBasic> = { loading?: boolean | ConstrBind<Progress>; };

// File: src/constructors/Progress/props.d.ts
export type ProgressPropsToken = { point?: boolean; linear?: boolean; circular?: boolean; indeterminate?: 'type1' | 'type2' | 'type3'; position?: 'top' | 'bottom' | 'static'; dense?: boolean; inverse?: boolean; };
export type ProgressPropsBasic = AriaLabelPropsInclude & TextLoadingPropsInclude & ClientOnlyPropsInclude & { visible?: boolean; value?: number | string; max?: number | string; linear?: boolean; circular?: boolean; point?: boolean; delay?: number | string; delayHide?: number | string; };
export type ProgressProps = ProgressPropsBasic & ProgressPropsToken;
export declare const defaultsProgress: { linear: boolean; indeterminate: string; position: string; clientOnly: boolean; max: number; delay: number; delayHide: number; };

// File: src/constructors/Progress/types.d.ts
export type ProgressComponents = {};
export type ProgressEmits = {};
export interface ProgressExpose {}
export interface ProgressSlots {}
export type ProgressClasses = { main: ConstrClass; circle: string; circleSub: string; point: string; };

// File: src/constructors/Radio/props.d.ts
export type RadioPropsToken = { block?: boolean; adaptive?: 'rightAlways'; container?: boolean; required?: boolean; itemCenter?: boolean; focus?: boolean; disabled?: boolean; };
export type RadioPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = CheckboxPropsBasic<Image, FieldMessage, FieldCounter, Progress>;
export type RadioProps = RadioPropsBasic & RadioPropsToken;
export declare const defaultsRadio: { block: boolean; itemCenter: boolean; valueVariantHide: string; };

// File: src/constructors/Radio/types.d.ts
export type RadioComponents = CheckboxComponents;
export type RadioEmits = CheckboxEmits;
export interface RadioExpose extends CheckboxExpose {}
export interface RadioSlots extends CheckboxSlots {}
export type RadioClasses = { main: ConstrClass; input: string; body: string; item: string; icon: string; loading: string; info: string; label: string; };

// File: src/constructors/Ripple/basicTypes.d.ts
export type RippleComponentInclude = { ripple?: object; };

// File: src/constructors/Ripple/props.d.ts
export type RipplePropsBasic = { disabled?: boolean; };
export type RippleProps = RipplePropsBasic & {};
export declare const defaultsRipple: {};

// File: src/constructors/Ripple/types.d.ts
export type RippleComponents = {};
export type RippleEmits = {};
export interface RippleExpose {}
export interface RippleSlots {}
export type RippleClasses = { main: ConstrClass; item: string; };

// File: src/constructors/Scrollbar/basicTypes.d.ts
export type ScrollbarEdgeType = 'top' | 'bottom';
export type ScrollbarComponentInclude = { scrollbar?: object; };
export type ScrollbarEmitsInclude = { scrollbarTop: ScrollbarEmits['top']; scrollbarReachTop: ScrollbarEmits['reachTop']; scrollbarLeaveTop: ScrollbarEmits['leaveTop']; scrollbarBottom: ScrollbarEmits['bottom']; scrollbarReachBottom: ScrollbarEmits['reachBottom']; scrollbarLeaveBottom: ScrollbarEmits['leaveBottom']; scrollbarEdge: ScrollbarEmits['edge']; };
export type ScrollbarPropsInclude<Scrollbar extends ScrollbarPropsBasic = ScrollbarPropsBasic> = { scrollbarAttrs?: ConstrBind<Scrollbar>; };

// File: src/constructors/Scrollbar/props.d.ts
export type ScrollbarPropsToken = { visible?: boolean; divider?: boolean; dividerTop?: boolean; dividerBottom?: boolean; dividerHide?: boolean; inverse?: boolean; standard?: boolean; };
export type ScrollbarPropsBasic = ClientOnlyPropsInclude & { tag?: string; };
export type ScrollbarProps = ScrollbarPropsBasic & ScrollbarPropsToken;
export declare const defaultsScrollbar: { clientOnly: boolean; tag: string; };

// File: src/constructors/Scrollbar/types.d.ts
export type ScrollbarComponents = {};
export type ScrollbarEmits = { top: [isTop: boolean]; reachTop: []; leaveTop: []; bottom: [isBottom: boolean]; reachBottom: []; leaveBottom: []; edge: [isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType]; };
export interface ScrollbarExpose {}
export interface ScrollbarSlots { default?(props: any): any; }
export type ScrollbarClasses = { main: ConstrClass; };

// File: src/constructors/Section/props.d.ts
export type SectionPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = BlockPropsBasic<Icon, Header>;
export type SectionProps = SectionPropsBasic & {};
export declare const defaultsSection: { area: string; tag: string; tagHeader: string; };

// File: src/constructors/Section/types.d.ts
export type SectionComponents = BlockComponents;
export type SectionEmits = BlockEmits;
export interface SectionExpose extends BlockExpose {}
export interface SectionSlots extends BlockSlots {}
export type SectionClasses = { main: ConstrClass; headline: string; header: string; description: string; body: string; };

// File: src/constructors/Select/props.d.ts
export type SelectPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldSelectProps & MenuPropsInclude<Menu> & { editValue?: boolean; hideList?: boolean; showSearch?: boolean; filterMode?: boolean; iconArrowDown?: IconValue<Icon>; };
export type SelectProps = SelectPropsBasic & {};
export declare const defaultsSelect: {};

// File: src/constructors/Select/types.d.ts
export type SelectComponents = MenuComponentInclude & FieldComponentInclude & SelectValueComponentInclude;
export type SelectEmits = FieldBasicEmits;
export interface SelectExpose extends FieldBasicExpose, MenuExposeInclude {}
export interface SelectSlots extends FieldSlotsInclude, MenuSlotInclude {}
export type SelectClasses = { main: ConstrClass; };

// File: src/constructors/SelectValue/basicTypes.d.ts
export type SelectValueComponentInclude = { selectValue?: object; };
export interface SelectValuePropsInclude { disabled?: boolean; selectValueAttrs?: ConstrBind<SelectValueProps>; }

// File: src/constructors/SelectValue/props.d.ts
export type SelectValuePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Chip extends ChipPropsBasic = ChipPropsBasic> = EnabledProps & ChipPropsInclude<Chip> & { placeholder?: string; value?: ListList; multiple?: boolean; iconShow?: boolean; iconAttrs?: ConstrBind<Icon>; iconCancel?: IconValue<Icon>; };
export type SelectValueProps = SelectValuePropsBasic & {};
export declare const defaultsSelectValue: {};

// File: src/constructors/SelectValue/types.d.ts
export type SelectValueComponents = ChipComponentInclude;
export type SelectValueEmits = EventClickEmits;
export interface SelectValueExpose {}
export interface SelectValueSlots {}
export type SelectValueClasses = { main: ConstrClass; item: string; trailing: string; };

// File: src/constructors/Skeleton/basicTypes.d.ts
export type SkeletonClassesList = { classText: string; classTextVariant: string; classBackground: string; classBackgroundAfter: string; classBackgroundBefore: string; classBackgroundVariant: string; classBorder: string; classBorderVariant: string; classNone: string; };
export type SkeletonPropsInclude = { isSkeleton?: boolean; };

// File: src/constructors/Skeleton/props.d.ts
export type SkeletonPropsToken = { active?: boolean; };
export type SkeletonPropsBasic = {};
export type SkeletonProps = SkeletonPropsBasic & SkeletonPropsToken;
export declare const defaultsSkeleton: {};

// File: src/constructors/Skeleton/types.d.ts
export type SkeletonComponents = {};
export type SkeletonEmits = {};
export interface SkeletonExpose { isActive(): boolean; }
export interface SkeletonSlots { default?(props: SkeletonClassesList): any; }
export type SkeletonClasses = { main: ConstrClass; };

// File: src/constructors/Snackbar/basicTypes.d.ts
export type SnackbarValue = { component?: any; data?: ConstrBind<SnackbarItemPropsBasic>; highPriority?: boolean; delay?: number; value?: string; resumableTimer?: ResumableTimer; };
export type SnackbarList = SnackbarValue[];

// File: src/constructors/Snackbar/props.d.ts
export type SnackbarPropsToken = { full?: boolean; all?: boolean; limit?: '1' | '2' | '4' | '6' | '8'; vertical?: 'top' | 'bottom'; horizontal?: 'right' | 'left' | 'block'; origin?: 'topToBottom' | 'bottomToTop' | 'rightToLeft' | 'leftToRight'; };
export type SnackbarPropsBasic = TextNotificationsPropsInclude & { delay?: number; };
export type SnackbarProps = SnackbarPropsBasic & SnackbarPropsToken;
export declare const defaultsSnackbar: { delay: number; };

// File: src/constructors/Snackbar/types.d.ts
export type SnackbarComponents = SnackbarItemComponentInclude;
export type SnackbarEmits = { show: [value: string, item: SnackbarValue]; hide: [value: string, item: SnackbarValue]; };
export interface SnackbarExpose { isItem(): boolean; add(item: SnackbarValue): void; remove(value: string): void; clear(): void; }
export interface SnackbarSlots {}
export type SnackbarClasses = { main: ConstrClass; item: string; space: string; priority: string; };

// File: src/constructors/SnackbarItem/basicTypes.d.ts
export type SnackbarItemComponentInclude = { snackbarItem?: object; };
export type SnackbarItemPropsInclude<SnackbarItemProps extends SnackbarItemPropsBasic = SnackbarItemPropsBasic> = { snackbarItemAttrs?: ConstrBind<SnackbarItemProps>; };

// File: src/constructors/SnackbarItem/props.d.ts
export type SnackbarItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = LabelProps & DescriptionProps & IconTrailingPropsInclude<Icon> & ActionsPropsInclude<Actions> & AriaRolePropsInclude & AriaLivePropsInclude & TextClosePropsInclude & AreaPropsInclude & { button?: string | number | ConstrBind<Button>; html?: string; component?: any; componentProps?: object; value?: string; closeButton?: boolean; iconClose?: IconValue<Icon>; };
export type SnackbarItemProps = SnackbarItemPropsBasic & {};
export declare const defaultsSnackbarItem: { area: string; closeButton: boolean; };

// File: src/constructors/SnackbarItem/types.d.ts
export type SnackbarItemComponents = IconComponentInclude & ButtonComponentInclude & ActionsComponentInclude;
export type SnackbarItemEmits = ActionsEmitsInclude & EventClickEmits & { close: [value: string | undefined]; };
export interface SnackbarItemExpose {}
export interface SnackbarItemSlots extends LabelSlots, DescriptionSlots { body?(props: any): any; }
export type SnackbarItemClasses = { main: ConstrClass; tool: string; icon: string; trailing: string; context: string; label: string; description: string; body: string; button: string; close: string; actions: string; };

// File: src/constructors/Switch/props.d.ts
export type SwitchPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = CheckboxPropsBasic<Image, FieldMessage, FieldCounter, Progress>;
export type SwitchProps = SwitchPropsBasic & {};
export declare const defaultsSwitch: { block: boolean; itemCenter: boolean; valueVariantHide: string; };

// File: src/constructors/Switch/types.d.ts
export type SwitchComponents = CheckboxComponents;
export type SwitchEmits = CheckboxEmits;
export interface SwitchExpose extends CheckboxExpose {}
export interface SwitchSlots extends CheckboxSlots {}
export type SwitchClasses = { main: ConstrClass; input: string; body: string; item: string; icon: string; loading: string; info: string; label: string; track: string; };

// File: src/constructors/TabItem/basicTypes.d.ts
export type TabItemComponentInclude = { tabItem?: object; };

// File: src/constructors/TabItem/props.d.ts
export type TabItemPropsToken = { focus?: boolean; open?: boolean; selected?: boolean; disabled?: boolean; adaptive?: 'iconAlways' | 'auto'; container?: boolean; };
export type TabItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic> = LabelProps & IconPropsInclude<Icon> & BadgePropsInclude<Badge> & SkeletonPropsInclude & EnabledProps & EventClickProps & AriaRolePropsInclude & { index?: any; href?: string; tag?: 'button' | 'a' | 'span' | 'li' | 'div' | string; };
export type TabItemProps = TabItemPropsBasic & TabItemPropsToken;
export declare const defaultsTabItem: { role: string; };

// File: src/constructors/TabItem/types.d.ts
export type TabItemComponents = IconComponentInclude & BadgeComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type TabItemEmits = EventClickEmits;
export interface TabItemExpose extends EventClickExpose {}
export interface TabItemSlots extends LabelSlots {}
export type TabItemClasses = { main: ConstrClass; label: string; icon: string; badge: string; };

// File: src/constructors/Tabs/props.d.ts
export type TabsPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic, TabsNavigation extends TabsNavigationPropsBasic = TabsNavigationPropsBasic, MotionAxis extends MotionAxisPropsBasic = MotionAxisPropsBasic> = TabsNavigationPropsInclude<TabItem, TabsNavigation> & MotionAxisPropsInclude<MotionAxis> & ModelPropsSelected<ListSelectedList>;
export type TabsProps = TabsPropsBasic & {};
export declare const defaultsTabs: {};

// File: src/constructors/Tabs/types.d.ts
export type TabsComponents = TabsNavigationComponentInclude & MotionAxisComponentInclude;
export type TabsEmits = TabsNavigationEmits & MotionAxisEmitsInclude;
export interface TabsExpose extends EventClickExpose {}
export type TabsSlots = MotionAxisSlots;
export type TabsClasses = { main: ConstrClass; slide: string; };

// File: src/constructors/TabsNavigation/basicTypes.d.ts
export type TabsNavigationIdsList = Record<NumberOrString, string>;
export type TabsNavigationComponentInclude = { tabsNavigation?: object; };
export type TabsNavigationPropsInclude<TabItem extends TabItemPropsBasic = TabItemPropsBasic, TabsNavigation extends TabsNavigationPropsBasic = TabsNavigationPropsBasic> = { tabs?: ListRecord<TabItem> | ConstrBind<TabsNavigation>; tabItemAttrs?: ConstrBind<TabItem>; tabsNavigationAttrs?: ConstrBind<TabsNavigation>; };

// File: src/constructors/TabsNavigation/props.d.ts
export type TabsNavigationPropsToken = { divider?: boolean; };
export type TabsNavigationPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic> = HorizontalScrollPropsInclude & ModelPropsSelected<ListSelectedList> & { selected?: ListSelectedList; list?: ListRecord<TabItem>; tag?: TabItem['tag']; keyLabel?: string; keyValue?: string; itemAttrs?: ConstrBind<TabItem>; };
export type TabsNavigationProps = TabsNavigationPropsBasic & TabsNavigationPropsToken;
export declare const defaultsTabsNavigation: { horizontalScrollBleed: boolean; horizontalScrollAlign: string; };

// File: src/constructors/TabsNavigation/types.d.ts
export type TabsNavigationComponents = HorizontalScrollComponentInclude & TabItemComponentInclude;
export type TabsNavigationEmits = EventClickEmits & ModelEmitsSelected<ListSelectedList>;
export interface TabsNavigationExpose { ids(): TabsNavigationIdsList; }
export interface TabsNavigationSlots { leading?(props: any): any; trailing?(props: any): any; }
export type TabsNavigationClasses = { main: ConstrClass; };

// File: src/constructors/TextDescription/props.d.ts
export type TextDescriptionPropsBasic = DescriptionProps & { tag?: string; };
export type TextDescriptionProps = TextDescriptionPropsBasic & {};
export declare const defaultsTextDescription: { tag: string; };

// File: src/constructors/TextDescription/types.d.ts
export type TextDescriptionComponents = {};
export type TextDescriptionEmits = {};
export interface TextDescriptionExpose {}
export interface TextDescriptionSlots extends DescriptionSlots {}
export type TextDescriptionClasses = { main: ConstrClass; description: string; };

// File: src/constructors/TextLabel/props.d.ts
export type TextLabelPropsBasic = LabelProps & { tag?: string; };
export type TextLabelProps = TextLabelPropsBasic & {};
export declare const defaultsTextLabel: { tag: string; };

// File: src/constructors/TextLabel/types.d.ts
export type TextLabelComponents = {};
export type TextLabelEmits = {};
export interface TextLabelExpose {}
export interface TextLabelSlots extends LabelSlots {}
export type TextLabelClasses = { main: ConstrClass; label: string; };

// File: src/constructors/Textarea/props.d.ts
export type TextareaPropsBasic<TextareaAutosize extends TextareaAutosizePropsBasic = TextareaAutosizePropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = TextareaAutosizePropsInclude<TextareaAutosize> & FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldTextareaProps<string>;
export type TextareaProps = TextareaPropsBasic & {};
export declare const defaultsTextarea: { cancel: string; autosize: boolean; };

// File: src/constructors/Textarea/types.d.ts
export type TextareaComponents = FieldComponentInclude & TextareaAutosizeComponentInclude;
export type TextareaEmits = FieldBasicEmits;
export interface TextareaExpose extends FieldBasicExpose {}
export interface TextareaSlots extends FieldSlotsInclude {}
export type TextareaClasses = { main: ConstrClass; };

// File: src/constructors/TextareaAutosize/basicTypes.d.ts
export type TextareaAutosizeComponentInclude = { textareaAutosize?: object; };
export type TextareaAutosizePropsInclude<TextareaAutosize extends TextareaAutosizePropsBasic = TextareaAutosizePropsBasic> = { textareaAttrs?: ConstrBind<TextareaAutosize>; autosize?: boolean; };

// File: src/constructors/TextareaAutosize/props.d.ts
export type TextareaAutosizePropsToken = { autosize?: boolean; };
export type TextareaAutosizePropsBasic = { value?: string; inputAttrs?: Record<string, any>; };
export type TextareaAutosizeProps = TextareaAutosizePropsBasic & TextareaAutosizePropsToken;
export declare const defaultsTextareaAutosize: { autosize: boolean; };

// File: src/constructors/TextareaAutosize/types.d.ts
export type TextareaAutosizeComponents = {};
export type TextareaAutosizeEmits = { input: [event: InputEvent]; };
export interface TextareaAutosizeExpose { getValue(): string; }
export interface TextareaAutosizeSlots {}
export type TextareaAutosizeClasses = { main: ConstrClass; clone: string; };

// File: src/constructors/Tooltip/basicTypes.d.ts
export type TooltipControlBinds = AriaList & { class: string; onClick: () => void; onMouseover: (event: MouseEvent) => void; onMouseout: (event: MouseEvent) => void; };
export type TooltipControl = TooltipControlBinds & { open: Ref<boolean>; binds: Record<string, any>; };
export type TooltipComponentInclude = { tooltip?: object; };
export type TooltipPropsInclude<Tooltip extends TooltipProps = TooltipProps> = { tooltipLabel?: string; tooltipDescription?: string; tooltipAttrs?: ConstrBind<Tooltip>; };

// File: src/constructors/Tooltip/props.d.ts
export type TooltipPropsToken = { interactive?: boolean; embedded?: boolean; };
export type TooltipPropsBasic<Arrow extends ArrowProps = ArrowProps> = LabelProps & DescriptionProps & ArrowPropsInclude<Arrow> & { open?: boolean; disabled?: boolean; inDom?: boolean; top?: boolean; indent?: number; delay?: number; delayHide?: number; embedded?: boolean; };
export type TooltipProps = TooltipPropsBasic & TooltipPropsToken;
export declare const defaultsTooltip: { interactive: boolean; indent: number; delay: number; delayHide: number; };

// File: src/constructors/Tooltip/types.d.ts
export type TooltipComponents = ArrowComponentInclude;
export type TooltipEmits = { tooltip: [open: boolean]; };
export interface TooltipExpose { toggle(open: boolean, flash?: boolean): Promise<void>; }
export interface TooltipSlots extends LabelSlots, DescriptionSlots { control?(props: TooltipControl): any; body?(): any; }
export type TooltipClasses = { main: ConstrClass; label: string; description: string; body: string; };

// File: src/constructors/Window/basicTypes.d.ts
export declare enum WindowStatusItem { display = "display", preparation = "preparation", flash = "flash", open = "open", hide = "hide", close = "close" }
export declare enum WindowStatusControlItem { block = "block", blockChildren = "blockChildren", blockOther = "blockOther", close = "close", static = "static", controlStatic = "controlStatic", controlOpenOnly = "controlOpenOnly", controlActive = "controlActive", persistent = "persistent" }
export type WindowEmitOptions = { id: string; element: HTMLDivElement; control: HTMLElement; open: boolean; };
export type WindowClassesList = { block: string; blockChildren: string; blockOther: string; close: string; static: string; control: string; controlId: string; controlStatic: string; controlOpenOnly: string; controlActive: string; persistent: string; };
export type WindowEventClickType = MouseEvent & TouchEvent | KeyboardEvent | MouseEvent | TouchEvent;
export type WindowEventClick = (event: WindowEventClickType) => Promise<void>;
export type WindowControlBasic = { classesWindow: WindowClassesList; };
export type WindowControlItem = WindowControlBasic & { class: string; open: Ref<boolean>; onClick: WindowEventClick; onKeydown: WindowEventClick; onContextmenu: WindowEventClick; binds: AriaList & { class: string; onClick: WindowEventClick; onKeydown: WindowEventClick; onContextmenu: WindowEventClick; }; };
export type WindowComponentInclude = { window?: object; };
export type WindowEmitsInclude = { window: [options: WindowEmitOptions]; };
export interface WindowExposeInclude extends WindowExpose { getWindowElement(): ConstrBind<WindowExpose> | undefined; }
export type WindowPropsInclude<Window extends WindowPropsBasic = WindowPropsBasic> = { disabled?: boolean; autoClose?: boolean; windowAttrs?: ConstrBind<Window>; };
export declare const __WINDOW_TYPE_BODY_NAME = "--sys-type-body";

// File: src/constructors/Window/props.d.ts
export type WindowPropsToken = { width?: string | 'auto' | 'max' | 'custom'; height?: string | 'auto' | 'max' | 'custom'; hide?: boolean; axis?: 'x' | 'y' | 'on'; imagePosition?: 'top' | 'left'; dense?: boolean; alignment?: 'center' | 'top' | 'topRight' | 'topLeft' | 'topFull' | 'right' | 'rightFull' | 'bottom' | 'bottomRight' | 'bottomLeft' | 'bottomFull' | 'left' | 'leftFull'; origin?: 'center' | 'top' | 'right' | 'bottom' | 'left' | 'topToBottom' | 'rightToLeft' | 'bottomToTop' | 'leftToRight'; adaptive?: 'menu' | 'menuWindow' | 'modal' | 'modalDynamic' | 'actionSheetRight' | 'actionSheetBottom' | 'static'; fullscreen?: boolean; overscroll?: boolean; closeButton?: boolean; closeMobileHide?: boolean; widthMatch?: boolean; };
export type WindowPropsBasic<Scrollbar extends ScrollbarPropsBasic = ScrollbarPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic> = ScrollbarPropsInclude<Scrollbar> & ImagePropsInclude<Image> & AriaRoleByPropsInclude & AriaHaspopupPropsInclude & TextClosePropsInclude & ModelPropsOpen & { open?: boolean; disabled?: boolean; preparation?(): NormalOrPromise<void>; beforeOpening?(): NormalOrPromise<boolean>; opening?(): NormalOrPromise<boolean>; beforeClosing?(): NormalOrPromise<boolean>; closing?(): NormalOrPromise<boolean>; contextmenu?: boolean; staticMode?: boolean; overElement?: ElementOrString<HTMLElement>; autoClose?: boolean; persistent?: boolean; flash?: boolean; inDom?: boolean; indent?: number; divider?: boolean; closeButton?: boolean; iconClose?: IconValue<Icon>; inert?: boolean; autoTabIndex?: boolean; closeOnEsc?: boolean; openOnArrowDown?: boolean; embedded?: boolean; };
export type WindowProps = WindowPropsBasic & WindowPropsToken;
export declare const defaultsWindow: { axis: string; imagePosition: string; overscroll: boolean; indent: number; ariaHaspopup: string; role: string; inert: boolean; autoTabIndex: boolean; closeOnEsc: boolean; };

// File: src/constructors/Window/types.d.ts
export type WindowComponents = ScrollbarComponentInclude & ButtonComponentInclude & ImageComponentInclude;
export type WindowEmits = ScrollbarEmitsInclude & ImageEmitsInclude & ModelEmitsOpen & { window: [options: WindowEmitOptions]; };
export interface WindowExpose { getId(): string | undefined; getOpen(): boolean; getControl(): WindowControlItem | undefined; setOpen(open: boolean): Promise<void>; toOpen(): Promise<void>; toClose(): Promise<void>; toggle(): Promise<void>; }
export interface WindowSlots { control?(props: WindowControlItem): any; title?(props: WindowControlItem): any; footer?(props: WindowControlItem): any; default?(props: WindowControlItem): any; }
export type WindowClasses = { main: ConstrClass; body: string; bodyGroup: string; bodyContext: string; control: string; image: string; close: string; teleport: string; };

// File: src/functions/getAreaValue.d.ts
export declare function getAreaValue(): string | undefined;

// File: src/functions/getClassTagAStatic.d.ts
export declare const getClassTagAStatic: (design: string) => string;

// File: src/functions/setAreaValue.d.ts
export declare function setAreaValue(value: string | Ref<string>): void;

// File: src/library/styleModification.d.ts
export declare const STYLE_MODIFICATION: string[];

// File: src/types/areaTypes.d.ts
export type AreaPropsInclude = { area?: string; };
export declare const AREA_PROP_NAME = "UI_AREA_VALUE";

// File: src/types/ariaTypes.d.ts
export type AriaTrueOrFalse = 'true' | 'false' | boolean;
export type AriaList = { 'aria-activedescendant'?: string; 'aria-atomic'?: AriaTrueOrFalse; 'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'; 'aria-busy'?: AriaTrueOrFalse; 'aria-checked'?: AriaTrueOrFalse | 'mixed'; 'aria-colcount'?: number; 'aria-colindex'?: number; 'aria-colspan'?: number; 'aria-controls'?: string; 'aria-current'?: AriaTrueOrFalse | 'page' | 'step' | 'location' | 'date' | 'time'; 'aria-describedby'?: string; 'aria-details'?: string; 'aria-disabled'?: AriaTrueOrFalse; 'aria-errormessage'?: string; 'aria-expanded'?: AriaTrueOrFalse; 'aria-flowto'?: string; 'aria-grabbed'?: AriaTrueOrFalse; 'aria-haspopup'?: AriaTrueOrFalse | 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid'; 'aria-hidden'?: AriaTrueOrFalse; 'aria-invalid'?: AriaTrueOrFalse | 'grammar' | 'spelling'; 'aria-keyshortcuts'?: string; 'aria-label'?: string; 'aria-labelledby'?: string; 'aria-level'?: number; 'aria-live'?: 'off' | 'polite' | 'assertive'; 'aria-modal'?: AriaTrueOrFalse; 'aria-multiline'?: AriaTrueOrFalse; 'aria-multiselectable'?: AriaTrueOrFalse; 'aria-orientation'?: 'horizontal' | 'vertical' | 'undefined'; 'aria-owns'?: string; 'aria-placeholder'?: string; 'aria-posinset'?: number; 'aria-pressed'?: AriaTrueOrFalse | 'mixed'; 'aria-readonly'?: AriaTrueOrFalse; 'aria-relevant'?: 'additions' | 'removals' | 'text' | 'all' | string; 'aria-required'?: AriaTrueOrFalse; 'aria-roledescription'?: string; 'aria-rowcount'?: number; 'aria-rowindex'?: number; 'aria-rowspan'?: number; 'aria-selected'?: AriaTrueOrFalse; 'aria-setsize'?: number; 'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'; 'aria-valuemax'?: string | number; 'aria-valuemin'?: string | number; 'aria-valuenow'?: string | number; 'aria-valuetext'?: string; 'id'?: string; 'role'?: RoleType; 'tabindex'?: NumberOrString; };
export type AriaAtomicPropsInclude = { ariaAtomic?: AriaList['aria-atomic']; };
export type AriaByPropsInclude = { ariaLabelledby?: string; ariaDescribedby?: string; };
export type AriaDescriptionPropsInclude = { ariaDescription?: string; };
export type AriaHaspopupPropsInclude = { ariaHaspopup?: AriaList['aria-haspopup']; };
export type AriaLabelPropsInclude = { ariaLabel?: string; };
export type AriaLivePropsInclude = { ariaLive?: AriaList['aria-live']; };
export type AriaMultiselectablePropsInclude = { ariaMultiselectable?: boolean; };
export type AriaRoleByPropsInclude = AriaRolePropsInclude & AriaByPropsInclude;
export type AriaRoleControlPropsInclude = AriaRolePropsInclude & AriaHaspopupPropsInclude & { id?: string; ariaControls?: string; ariaHaspopup?: AriaList['aria-haspopup']; ariaExpanded?: string; };
export type AriaRolePropsInclude = { role?: RoleType; };

// File: src/types/captionTypes.d.ts
export interface CaptionSlots { caption?(props: any): any; }
export type CaptionProps = { caption?: string | number; captionDecorative?: boolean; };

// File: src/types/clientOnlyTypes.d.ts
export type ClientOnlyPropsInclude = { clientOnly?: boolean; };

// File: src/types/componentInclude.d.ts
export type ComponentIncludeProps<Props extends Record<string, any>> = Readonly<ConstrBind<Props>> | (() => ConstrBind<Props>) | undefined;
export type ComponentIncludePropsAttrs<Props extends Record<string, any>> = keyof Props | undefined;
export type ComponentIncludeExtra<PropsExtra extends Record<string, any> = Record<string, any>> = RefOrNormalOrFunction<Partial<ConstrBind<PropsExtra>>>;
export type ComponentIncludeExposeItem<V = any> = { name: string; method?: string; defaultValue?: V; type?: 'string' | 'boolean' | 'number'; };

// File: src/types/descriptionTypes.d.ts
export interface DescriptionSlots { description?(props: any): any; }
export type DescriptionProps = { description?: string | number; descriptionId?: string; };

// File: src/types/enabledTypes.d.ts
export type EnabledProps = { readonly?: boolean; disabled?: boolean; };

// File: src/types/errorTypes.d.ts
export declare const CONSTRUCTOR_ERROR_GROUP = "constructor";

// File: src/types/eventClickTypes.d.ts
export type EventClickValue = { type: string; value: any; detail: Record<string, any> | undefined; };
export type EventClickEmits = { click: [event: MouseEvent, value: EventClickValue]; clickLite: [value: EventClickValue]; };
export interface EventClickExpose { getValue?: () => EventClickValue['value'] | undefined; getDetail?: () => EventClickValue['detail'] | undefined; }
export type EventClickProps = { to?: string | RouteLocationRaw; href?: string; value?: EventClickValue['value']; detail?: EventClickValue['detail']; };

// File: src/types/fieldTypes.d.ts
export type FieldType = 'text' | 'search' | 'number' | 'number-format' | 'currency' | 'email' | 'password' | 'datetime' | 'date' | 'year-month' | 'time' | 'hour-minute' | 'tel' | 'url' | 'checkbox' | 'radio';
export type FieldElementDom = HTMLInputElement | HTMLTextAreaElement;
export type FieldElementInput = FieldElementDom | HTMLElement | Record<string, any> | undefined;
export type FieldValidityCodeItem = { [K in keyof ValidityState]?: string; };
export type FieldValidityCode = string | FieldValidityCodeItem;
export type FieldMaskItem = { group: string; value: string; maxLength: number; full: boolean; end: boolean; chars: string[]; };
export type FieldMasks = Record<string, FieldMaskItem>;
export type FieldPatternElement = Partial<HTMLInputElement>;
export type FieldPatternItem = string | FieldPatternElement;
export type FieldPatternItemOrFunction = FieldPatternItem | ((item: FieldMasks) => FieldPatternItem);
export type FieldPatternList = Record<string, FieldPatternItemOrFunction>;
export type FieldMatchItem = { name?: string | HTMLInputElement; validationMessage?: string; };
export type FieldMatch = string | HTMLInputElement | FieldMatchItem;
export type FieldCheckMain = { group?: string; input?: FieldElementDom; pattern?: FieldPatternItemOrFunction; };
export type FieldCheckItem<Value = any> = FieldCheckMain & { check(value: Value): FieldValidationItem<Value>; };
export type FieldCheckList = Record<string, FieldCheckItem>;
export type FieldValidationItem<Value = any> = FieldCheckMain & { type?: string; status?: boolean; required?: boolean; isFull?: boolean; validationMessage?: string; validity?: ValidityState; validityMessage?: string; value: Value; valueInput?: Value; detail?: Record<string, any>; };
export type FieldBasicEmits<T = any> = ModelEmits<T> & { input: [event: InputEvent | Event, value: FieldValidationItem<T>]; inputLite: [value: FieldValidationItem<T>]; change: [event: InputEvent | Event, value: FieldValidationItem<T>]; changeLite: [value: FieldValidationItem<T>]; };
export type FieldBasicExpose<T = string> = { value: Ref<T>; getValue: () => T | undefined; checkValidity: () => boolean; getValidationMessage: () => string; };
export type FieldValueProps<Value = any> = ModelProps<Value> & { placeholder?: string; multiple?: boolean; maxlength?: NumberOrString; value?: Value; detail?: Record<string, any> | undefined; };
export type FieldBasicProps<Value = any> = Omit<FieldValueProps<Value>, 'multiple' | 'maxlength'> & { type?: FieldType; name?: string; id?: string | number; required?: boolean; readonly?: boolean; disabled?: boolean; autofocus?: boolean; tabindex?: number; form?: string; validationCode?: FieldValidityCode; validationMessage?: string; match?: FieldMatch; inputAttrs?: Record<string, any>; };
export type FieldStepProps = { step?: NumberOrString; min?: NumberOrString; max?: NumberOrString; };
export type FieldArrowProps = { arrow?: 'auto' | 'carousel' | 'stepper' | 'none'; arrowStep?: NumberOrString; arrowAlign?: 'center' | 'right' | 'left'; };
export type FieldLengthProps = { minlength?: NumberOrString; maxlength?: NumberOrString; };
export type FieldPatternProps = { pattern?: string; };
export type FieldUxProps = { autocomplete?: string; autocapitalize?: 'off' | 'none' | 'sentences' | 'words' | 'characters' | string; inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | string; enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | string; spellcheck?: boolean | 'true' | 'false'; autocorrect?: 'on' | 'off' | string; };
export type FieldInputProps<Value = any> = FieldBasicProps<Value> & FieldStepProps & FieldArrowProps & FieldLengthProps & FieldPatternProps & FieldUxProps & { list?: string; iconVisibility?: string; iconVisibilityOff?: string; };
export type FieldInputPhoneProps = Omit<FieldBasicProps<string>, 'match' | 'pattern'> & FieldPatternProps;
export type FieldInputFileProps<Value = any> = Omit<FieldBasicProps<Value>, 'type'> & FieldLengthProps & FieldUxProps & { multiple?: boolean; accept?: string; capture?: string | boolean; };
export type FieldInputCheckProps<Value = boolean> = Omit<FieldBasicProps<Value>, 'type'> & FieldUxProps & { valueVariant?: NumberOrStringOrBoolean; valueVariantHide?: NumberOrStringOrBoolean; indeterminate?: boolean; };
export type FieldTextareaProps<Value = any> = Omit<FieldBasicProps<Value>, 'type'> & FieldLengthProps & FieldUxProps & { rows?: NumberOrString; cols?: NumberOrString; wrap?: 'soft' | 'hard' | 'off' | string; fieldSizing?: 'content' | 'fixed' | string; };
export type FieldSelectProps<Value = any> = Omit<FieldBasicProps<Value>, 'type'> & Omit<FieldStepProps, 'min' | 'step'> & FieldArrowProps & FieldUxProps & { option?: ListRecord; multiple?: boolean; selectionStyle?: ListItemPropsBasic['selectionStyle'] | 'auto'; };
export type FieldSelectLiteProps<Value = any> = Omit<FieldSelectProps<Value>, 'placeholder' | 'validationMessage' | 'validationCode' | 'arrow' | 'arrowAlign' | 'arrowStep'>;
export type FieldAllProps<Value = any> = FieldInputProps<Value> & FieldInputFileProps<Value> & FieldInputCheckProps<Value> & FieldTextareaProps<Value> & FieldSelectProps<Value>;

// File: src/types/labelTypes.d.ts
export interface LabelSlots { default?(props: any): any; }
export interface LabelAlternativeSlots { label?(props: any): any; }
export interface LabelNumberSlots extends LabelSlots {}
export interface LabelHighlightSlots extends LabelSlots {}
export type LabelProps = { label?: NumberOrString; labelId?: string; };
export type LabelNumberProps = LabelProps & { labelMax?: NumberOrString; formatting?: boolean; language?: string; };
export type LabelHighlightProps = LabelProps & { highlight?: string; highlightLengthStart?: number; value?: any; };

// File: src/types/modelTypes.d.ts
export type ModelEmits<Value = string> = { 'update:value': [value: Value]; 'update:modelValue': [value: Value]; };
export type ModelEmitsOpen<Value = boolean> = { 'update:open': [value: Value]; 'update:modelOpen': [value: Value]; };
export type ModelEmitsSelected<Value = string> = { 'update:selected': [value: Value]; 'update:modelSelected': [value: Value]; };
export type ModelProps<Value = string> = { 'modelValue'?: Value; 'onUpdate:value'?: (value: Value) => void; 'onUpdate:modelValue'?: (value: Value) => void; };
export type ModelPropsOpen<Value = boolean> = { 'modelOpen'?: Value; 'onUpdate:open'?: (value: Value) => void; 'onUpdate:modelOpen'?: (value: Value) => void; };
export type ModelPropsSelected<Value = string> = { 'modelSelected'?: Value; 'onUpdate:selected'?: (value: Value) => void; 'onUpdate:modelSelected'?: (value: Value) => void; };

// File: src/types/pluginTypes.d.ts
export type PluginComponentItem = { name: string; reg: RegExp; };
export type PluginComponentList = Record<string, PluginComponentItem>;
export type PluginComponentImports = PluginComponentItem[];
export type PluginOptions = { style?: boolean; styleNamespace?: string; component?: boolean; viteOptions?: VitePlugin; };

// File: src/types/prefixTypes.d.ts
export interface PrefixSlots { prefix?(props: any): any; }
export type PrefixProps = { prefix?: string | number; prefixId?: string; };

// File: src/types/roleTypes.d.ts
export type RoleType = string | 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'command' | 'comment' | 'complementary' | 'composite' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'generic' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'input' | 'landmark' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'mark' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'range' | 'region' | 'roletype' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'section' | 'sectionhead' | 'select' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'structure' | 'suggestion' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem' | 'widget' | 'window';

// File: src/types/suffixTypes.d.ts
export interface SuffixSlots { suffix?(props: any): any; }
export type SuffixProps = { suffix?: string | number; suffixId?: string; };

// File: src/types/textTypes.d.ts
export type TextValue = string | (() => string) | undefined;
export type TextIndex = 'cancel' | 'characterLimit' | 'characterRemaining' | 'close' | 'copiedClipboard' | 'decrement' | 'entriesMatch' | 'hide' | 'increment' | 'loading' | 'next' | 'notFound' | 'notifications' | 'ok' | 'previous' | 'show' | string;
export type TextList = Record<TextIndex, TextValue>;
export type TextCancelPropsInclude = { textCancel?: TextValue; };
export type TextCharacterLimitPropsInclude = { textCharacterLimit?: TextValue; };
export type TextCharacterRemainingPropsInclude = { textCharacterRemaining?: TextValue; };
export type TextClosePropsInclude = { textClose?: TextValue; };
export type TextCopiedClipboardPropsInclude = { textCopiedClipboard?: TextValue; };
export type TextDecrementPropsInclude = { textDecrement?: TextValue; };
export type TextEntriesMatchPropsInclude = { textEntriesMatch?: TextValue; };
export type TextHidePropsInclude = { textHide?: TextValue; };
export type TextIncrementPropsInclude = { textIncrement?: TextValue; };
export type TextLoadingPropsInclude = { textLoading?: TextValue; };
export type TextNextPropsInclude = { textNext?: TextValue; };
export type TextNotFoundPropsInclude = { textNotFound?: TextValue; };
export type TextNotificationsPropsInclude = { textNotifications?: TextValue; };
export type TextOkPropsInclude = { textOk?: TextValue; };
export type TextPreviousPropsInclude = { textPrevious?: TextValue; };
export type TextShowPropsInclude = { textShow?: TextValue; };
export type TextAllPropsInclude = TextCancelPropsInclude & TextCharacterLimitPropsInclude & TextCharacterRemainingPropsInclude & TextClosePropsInclude & TextCopiedClipboardPropsInclude & TextDecrementPropsInclude & TextEntriesMatchPropsInclude & TextHidePropsInclude & TextIncrementPropsInclude & TextLoadingPropsInclude & TextNextPropsInclude & TextNotFoundPropsInclude & TextNotificationsPropsInclude & TextOkPropsInclude & TextPreviousPropsInclude & TextShowPropsInclude;

// File: src/types/touchEventTypes.d.ts
export type TouchEventTypeX = 'left' | 'right' | 'none';
export type TouchEventTypeY = 'top' | 'bottom' | 'none';
export type TouchEventClient = { x: number; y: number; };
export type TouchEventCallback = (typeX: TouchEventTypeX, typeY: TouchEventTypeY, clientX: number, clientY: number, mouse?: TouchEventClient, mouseMove?: TouchEventClient, touche?: Touch, toucheMove?: Touch) => Promise<boolean> | boolean;