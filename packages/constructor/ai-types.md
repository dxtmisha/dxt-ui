1) All these methods are in the @dxtmisha/constructor library.
2) Everything that is exported can be used.
3) Use what is in this library if it exists; do not use other libraries if there is an analogue here. Do not create new ones if an analogue already exists here.

The following is the content of "exports" from package.json:
{
  ".": {
    "types": "./dist/library.d.ts",
    "default": "./dist/library.js"
  },
  "./Accordion": {
    "types": "./dist/constructors/Accordion/index.d.ts",
    "default": "./dist/accordion.js"
  },
  "./ActionSheet": {
    "types": "./dist/constructors/ActionSheet/index.d.ts",
    "default": "./dist/actionSheet.js"
  },
  "./Actions": {
    "types": "./dist/constructors/Actions/index.d.ts",
    "default": "./dist/actions.js"
  },
  "./Alert": {
    "types": "./dist/constructors/Alert/index.d.ts",
    "default": "./dist/alert.js"
  },
  "./AlertLink": {
    "types": "./dist/constructors/AlertLink/index.d.ts",
    "default": "./dist/alertLink.js"
  },
  "./Anchor": {
    "types": "./dist/constructors/Anchor/index.d.ts",
    "default": "./dist/anchor.js"
  },
  "./Area": {
    "types": "./dist/constructors/Area/index.d.ts",
    "default": "./dist/area.js"
  },
  "./Arrow": {
    "types": "./dist/constructors/Arrow/index.d.ts",
    "default": "./dist/arrow.js"
  },
  "./Avatar": {
    "types": "./dist/constructors/Avatar/index.d.ts",
    "default": "./dist/avatar.js"
  },
  "./Badge": {
    "types": "./dist/constructors/Badge/index.d.ts",
    "default": "./dist/badge.js"
  },
  "./Bars": {
    "types": "./dist/constructors/Bars/index.d.ts",
    "default": "./dist/bars.js"
  },
  "./Bleed": {
    "types": "./dist/constructors/Bleed/index.d.ts",
    "default": "./dist/bleed.js"
  },
  "./Block": {
    "types": "./dist/constructors/Block/index.d.ts",
    "default": "./dist/block.js"
  },
  "./BreadcrumbItem": {
    "types": "./dist/constructors/BreadcrumbItem/index.d.ts",
    "default": "./dist/breadcrumbItem.js"
  },
  "./Breadcrumbs": {
    "types": "./dist/constructors/Breadcrumbs/index.d.ts",
    "default": "./dist/breadcrumbs.js"
  },
  "./Bullet": {
    "types": "./dist/constructors/Bullet/index.d.ts",
    "default": "./dist/bullet.js"
  },
  "./BulletItem": {
    "types": "./dist/constructors/BulletItem/index.d.ts",
    "default": "./dist/bulletItem.js"
  },
  "./Button": {
    "types": "./dist/constructors/Button/index.d.ts",
    "default": "./dist/button.js"
  },
  "./ButtonGroup": {
    "types": "./dist/constructors/ButtonGroup/index.d.ts",
    "default": "./dist/buttonGroup.js"
  },
  "./Cell": {
    "types": "./dist/constructors/Cell/index.d.ts",
    "default": "./dist/cell.js"
  },
  "./Checkbox": {
    "types": "./dist/constructors/Checkbox/index.d.ts",
    "default": "./dist/checkbox.js"
  },
  "./Chip": {
    "types": "./dist/constructors/Chip/index.d.ts",
    "default": "./dist/chip.js"
  },
  "./ChipGroup": {
    "types": "./dist/constructors/ChipGroup/index.d.ts",
    "default": "./dist/chipGroup.js"
  },
  "./ClientOnly": {
    "types": "./dist/constructors/ClientOnly/index.d.ts",
    "default": "./dist/clientOnly.js"
  },
  "./Container": {
    "types": "./dist/constructors/Container/index.d.ts",
    "default": "./dist/container.js"
  },
  "./Dialog": {
    "types": "./dist/constructors/Dialog/index.d.ts",
    "default": "./dist/dialog.js"
  },
  "./Divider": {
    "types": "./dist/constructors/Divider/index.d.ts",
    "default": "./dist/divider.js"
  },
  "./DraggableWrapper": {
    "types": "./dist/constructors/DraggableWrapper/index.d.ts",
    "default": "./dist/draggableWrapper.js"
  },
  "./Dummy": {
    "types": "./dist/constructors/Dummy/index.d.ts",
    "default": "./dist/dummy.js"
  },
  "./Field": {
    "types": "./dist/constructors/Field/index.d.ts",
    "default": "./dist/field.js"
  },
  "./FieldCounter": {
    "types": "./dist/constructors/FieldCounter/index.d.ts",
    "default": "./dist/fieldCounter.js"
  },
  "./FieldLabel": {
    "types": "./dist/constructors/FieldLabel/index.d.ts",
    "default": "./dist/fieldLabel.js"
  },
  "./FieldMessage": {
    "types": "./dist/constructors/FieldMessage/index.d.ts",
    "default": "./dist/fieldMessage.js"
  },
  "./FormattedNumber": {
    "types": "./dist/constructors/FormattedNumber/index.d.ts",
    "default": "./dist/formattedNumber.js"
  },
  "./FormattedUnit": {
    "types": "./dist/constructors/FormattedUnit/index.d.ts",
    "default": "./dist/formattedUnit.js"
  },
  "./Grid": {
    "types": "./dist/constructors/Grid/index.d.ts",
    "default": "./dist/grid.js"
  },
  "./GridItem": {
    "types": "./dist/constructors/GridItem/index.d.ts",
    "default": "./dist/gridItem.js"
  },
  "./Group": {
    "types": "./dist/constructors/Group/index.d.ts",
    "default": "./dist/group.js"
  },
  "./Header": {
    "types": "./dist/constructors/Header/index.d.ts",
    "default": "./dist/header.js"
  },
  "./HorizontalScroll": {
    "types": "./dist/constructors/HorizontalScroll/index.d.ts",
    "default": "./dist/horizontalScroll.js"
  },
  "./Icon": {
    "types": "./dist/constructors/Icon/index.d.ts",
    "default": "./dist/icon.js"
  },
  "./Image": {
    "types": "./dist/constructors/Image/index.d.ts",
    "default": "./dist/image.js"
  },
  "./Input": {
    "types": "./dist/constructors/Input/index.d.ts",
    "default": "./dist/input.js"
  },
  "./InputCode": {
    "types": "./dist/constructors/InputCode/index.d.ts",
    "default": "./dist/inputCode.js"
  },
  "./InputCodeItem": {
    "types": "./dist/constructors/InputCodeItem/index.d.ts",
    "default": "./dist/inputCodeItem.js"
  },
  "./InputPhone": {
    "types": "./dist/constructors/InputPhone/index.d.ts",
    "default": "./dist/inputPhone.js"
  },
  "./InputPhoneDialCode": {
    "types": "./dist/constructors/InputPhoneDialCode/index.d.ts",
    "default": "./dist/inputPhoneDialCode.js"
  },
  "./InputSocial": {
    "types": "./dist/constructors/InputSocial/index.d.ts",
    "default": "./dist/inputSocial.js"
  },
  "./List": {
    "types": "./dist/constructors/List/index.d.ts",
    "default": "./dist/list.js"
  },
  "./ListGroup": {
    "types": "./dist/constructors/ListGroup/index.d.ts",
    "default": "./dist/listGroup.js"
  },
  "./ListItem": {
    "types": "./dist/constructors/ListItem/index.d.ts",
    "default": "./dist/listItem.js"
  },
  "./ListMenu": {
    "types": "./dist/constructors/ListMenu/index.d.ts",
    "default": "./dist/listMenu.js"
  },
  "./Mask": {
    "types": "./dist/constructors/Mask/index.d.ts",
    "default": "./dist/mask.js"
  },
  "./Menu": {
    "types": "./dist/constructors/Menu/index.d.ts",
    "default": "./dist/menu.js"
  },
  "./MenuButton": {
    "types": "./dist/constructors/MenuButton/index.d.ts",
    "default": "./dist/menuButton.js"
  },
  "./MenuChip": {
    "types": "./dist/constructors/MenuChip/index.d.ts",
    "default": "./dist/menuChip.js"
  },
  "./MenuCountry": {
    "types": "./dist/constructors/MenuCountry/index.d.ts",
    "default": "./dist/menuCountry.js"
  },
  "./MenuLanguage": {
    "types": "./dist/constructors/MenuLanguage/index.d.ts",
    "default": "./dist/menuLanguage.js"
  },
  "./Modal": {
    "types": "./dist/constructors/Modal/index.d.ts",
    "default": "./dist/modal.js"
  },
  "./MotionAxis": {
    "types": "./dist/constructors/MotionAxis/index.d.ts",
    "default": "./dist/motionAxis.js"
  },
  "./MotionSticky": {
    "types": "./dist/constructors/MotionSticky/index.d.ts",
    "default": "./dist/motionSticky.js"
  },
  "./MotionTransform": {
    "types": "./dist/constructors/MotionTransform/index.d.ts",
    "default": "./dist/motionTransform.js"
  },
  "./Page": {
    "types": "./dist/constructors/Page/index.d.ts",
    "default": "./dist/page.js"
  },
  "./PageArea": {
    "types": "./dist/constructors/PageArea/index.d.ts",
    "default": "./dist/pageArea.js"
  },
  "./Pagination": {
    "types": "./dist/constructors/Pagination/index.d.ts",
    "default": "./dist/pagination.js"
  },
  "./Placeholder": {
    "types": "./dist/constructors/Placeholder/index.d.ts",
    "default": "./dist/placeholder.js"
  },
  "./Progress": {
    "types": "./dist/constructors/Progress/index.d.ts",
    "default": "./dist/progress.js"
  },
  "./ProgressBar": {
    "types": "./dist/constructors/ProgressBar/index.d.ts",
    "default": "./dist/progressBar.js"
  },
  "./Radio": {
    "types": "./dist/constructors/Radio/index.d.ts",
    "default": "./dist/radio.js"
  },
  "./Ripple": {
    "types": "./dist/constructors/Ripple/index.d.ts",
    "default": "./dist/ripple.js"
  },
  "./ScrollSticky": {
    "types": "./dist/constructors/ScrollSticky/index.d.ts",
    "default": "./dist/scrollSticky.js"
  },
  "./Scrollbar": {
    "types": "./dist/constructors/Scrollbar/index.d.ts",
    "default": "./dist/scrollbar.js"
  },
  "./Section": {
    "types": "./dist/constructors/Section/index.d.ts",
    "default": "./dist/section.js"
  },
  "./SegmentControl": {
    "types": "./dist/constructors/SegmentControl/index.d.ts",
    "default": "./dist/segmentControl.js"
  },
  "./SegmentControlItem": {
    "types": "./dist/constructors/SegmentControlItem/index.d.ts",
    "default": "./dist/segmentControlItem.js"
  },
  "./Select": {
    "types": "./dist/constructors/Select/index.d.ts",
    "default": "./dist/select.js"
  },
  "./SelectValue": {
    "types": "./dist/constructors/SelectValue/index.d.ts",
    "default": "./dist/selectValue.js"
  },
  "./SelectableArea": {
    "types": "./dist/constructors/SelectableArea/index.d.ts",
    "default": "./dist/selectableArea.js"
  },
  "./Skeleton": {
    "types": "./dist/constructors/Skeleton/index.d.ts",
    "default": "./dist/skeleton.js"
  },
  "./SkeletonItem": {
    "types": "./dist/constructors/SkeletonItem/index.d.ts",
    "default": "./dist/skeletonItem.js"
  },
  "./Snackbar": {
    "types": "./dist/constructors/Snackbar/index.d.ts",
    "default": "./dist/snackbar.js"
  },
  "./SnackbarItem": {
    "types": "./dist/constructors/SnackbarItem/index.d.ts",
    "default": "./dist/snackbarItem.js"
  },
  "./Switch": {
    "types": "./dist/constructors/Switch/index.d.ts",
    "default": "./dist/switch.js"
  },
  "./TabItem": {
    "types": "./dist/constructors/TabItem/index.d.ts",
    "default": "./dist/tabItem.js"
  },
  "./Table": {
    "types": "./dist/constructors/Table/index.d.ts",
    "default": "./dist/table.js"
  },
  "./TableHeaderItem": {
    "types": "./dist/constructors/TableHeaderItem/index.d.ts",
    "default": "./dist/tableHeaderItem.js"
  },
  "./TableItem": {
    "types": "./dist/constructors/TableItem/index.d.ts",
    "default": "./dist/tableItem.js"
  },
  "./TableRecord": {
    "types": "./dist/constructors/TableRecord/index.d.ts",
    "default": "./dist/tableRecord.js"
  },
  "./Tabs": {
    "types": "./dist/constructors/Tabs/index.d.ts",
    "default": "./dist/tabs.js"
  },
  "./TabsNavigation": {
    "types": "./dist/constructors/TabsNavigation/index.d.ts",
    "default": "./dist/tabsNavigation.js"
  },
  "./TextDescription": {
    "types": "./dist/constructors/TextDescription/index.d.ts",
    "default": "./dist/textDescription.js"
  },
  "./TextLabel": {
    "types": "./dist/constructors/TextLabel/index.d.ts",
    "default": "./dist/textLabel.js"
  },
  "./Textarea": {
    "types": "./dist/constructors/Textarea/index.d.ts",
    "default": "./dist/textarea.js"
  },
  "./TextareaAutosize": {
    "types": "./dist/constructors/TextareaAutosize/index.d.ts",
    "default": "./dist/textareaAutosize.js"
  },
  "./Tooltip": {
    "types": "./dist/constructors/Tooltip/index.d.ts",
    "default": "./dist/tooltip.js"
  },
  "./Window": {
    "types": "./dist/constructors/Window/index.d.ts",
    "default": "./dist/window.js"
  },
  "./plugin": {
    "types": "./dist/library/plugin.d.ts",
    "default": "./dist/plugin.js"
  },
  "./style.scss": "./src/library/style.scss",
  "./TableFlexItem": {
    "types": "./dist/constructors/TableFlexItem/index.d.ts",
    "default": "./dist/tableFlexItem.js"
  },
  "./TableFlexHeaderItem": {
    "types": "./dist/constructors/TableFlexHeaderItem/index.d.ts",
    "default": "./dist/tableFlexHeaderItem.js"
  },
  "./TableFlexRecord": {
    "types": "./dist/constructors/TableFlexRecord/index.d.ts",
    "default": "./dist/tableFlexRecord.js"
  },
  "./TableFlex": {
    "types": "./dist/constructors/TableFlex/index.d.ts",
    "default": "./dist/tableFlex.js"
  }
}

export declare class AreaInclude {
constructor(props: AreaPropsInclude);
}
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
static label(label?: string | number): AriaList;
static labelledby(id?: string): AriaList;
static invalid(isInvalid?: boolean): AriaList;
static control(id?: string, controls?: string, haspopup?: AriaList['aria-haspopup'], expanded?: boolean): AriaList;
static hidden(isHidden?: boolean): AriaList;
static live(live?: AriaList['aria-live']): AriaList;
static ariaModal(isModal?: boolean): AriaList;
static modal(isModal?: boolean, ariaLabelledby?: string, ariaDescribedby?: string): AriaList;
static multiselectable(isMultiselectable?: boolean): AriaList;
static selected(isSelected?: boolean): AriaList;
static sort(sortDir?: AriaList['aria-sort'] | string): AriaList;
static valueMinMax(value?: string | number, min?: string | number, max?: string | number): AriaList;
static isTrueOrFalse(value?: boolean): AriaTrueOrFalse | undefined;
}
export declare class CaptionInclude {
constructor(props: Readonly<CaptionProps>, className: string, slots?: CaptionSlots | undefined, skeleton?: SkeletonInclude | undefined, tag?: string);
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
export declare class ClientOnlyInclude {
isMounted: Ref<boolean, boolean>;
constructor(props?: ClientOnlyPropsInclude | undefined);
isRender(): boolean;
}
/**
 * Abstract base class designed to facilitate programmatic inclusion, rendering, and state management of sub-components within a main component.
 * @note
 * When extending this class:
 * - Place properties and event listeners that are static or change RARELY during the component's lifetime (such as style configurations, constant bindings, or callbacks) inside `toBinds()`.
 * - Merge properties that change FREQUENTLY/CONSTANTLY during runtime (such as active state, values, or open states) inside `getAttrs()` to ensure correct and optimal reactive updates.
 */
export declare abstract class ComponentIncludeAbstract<Props extends Record<string, any>, PropsExtra extends Record<string, any>, ComponentExpose extends Record<string, any> = Record<string, any>, ComponentSlots extends Record<string, any> = Record<string, any>, PartialPropsExtra extends Record<string, any> = Partial<ConstrBind<PropsExtra>>> {
constructor(className: string, props: ComponentIncludeProps<Props>, components?: DesignComponents<any, Props> | undefined, extra?: ComponentIncludeExtra<PropsExtra> | undefined, index?: string | undefined);
readonly binds: ComputedRef<PartialPropsExtra>;
get expose(): ComponentExpose;
get is(): boolean;
getElement(): ConstrBind<ComponentExpose> | undefined;
readonly render: (slotsChildren?: ComponentSlots, attrs?: PartialPropsExtra, isShow?: () => boolean, index?: string) => VNode[];
}
export declare class DescriptionInclude {
constructor(props: RefOrNormalOrFunction<DescriptionProps>, className: string, slots?: DescriptionSlots | undefined, skeleton?: SkeletonInclude | undefined, tag?: RefOrNormal<string | undefined>);
get is(): boolean;
get id(): string;
render(childrenExtra?: any[], props?: Record<string, any>): VNode[];
}
export declare class EnabledInclude {
constructor(props: EnabledProps, progress?: ProgressInclude | undefined);
get isEnabled(): boolean;
get isReadonly(): boolean;
get isDisabled(): boolean;
get isDisabledOrUndefined(): boolean | undefined;
get aria(): AriaList;
}
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
export declare class FieldAttributesInclude {
constructor(props: FieldAllProps, type?: FieldTypeInclude | undefined, pattern?: FieldPatternInclude | undefined, inputMode?: FieldInputModeInclude | undefined, typeDefault?: string);
get list(): Record<string, any>;
get listForCheck(): Record<string, any>;
get listForInput(): Record<string, any>;
get listForCheckbox(): Record<string, any>;
}
export declare class FieldChangeInclude {
readonly item: Ref<boolean, boolean>;
constructor(props: FieldAllProps);
is(): boolean;
set(change: boolean): void;
to(): void;
}
export declare class FieldCodeInclude {
constructor(props: FieldAllProps);
get(state?: ValidityState): string | undefined;
}
export declare class FieldElementInclude {
constructor(props: FieldAllProps, element: Ref<FieldElementInput>);
get(): HTMLInputElement | undefined;
getElement(): Ref<FieldElementInput>;
findByName(nameSelectors: string | HTMLInputElement): HTMLInputElement | undefined;
clear(): this;
}
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
export declare class FieldInputModeInclude {
constructor(props: FieldAllProps, type: FieldTypeInclude);
get item(): string | undefined;
get autocomplete(): string | undefined;
}
export declare class FieldMatchInclude {
constructor(props: FieldAllProps, element: FieldElementInclude, value: FieldValueInclude, text?: TextInclude | undefined);
is(): boolean;
getSelectors(): string | HTMLInputElement | undefined;
getValidationMessage(): string;
check(): FieldValidationItem | undefined;
}
export declare class FieldPatternInclude {
constructor(props: FieldAllProps, type?: FieldTypeInclude | undefined);
get item(): string | undefined;
}
export declare class FieldTypeInclude {
constructor(props: FieldAllProps, visibility?: FieldVisibilityInclude | undefined);
get item(): FieldType;
get(): FieldType;
}
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
export declare class FieldVisibilityInclude {
readonly item: Ref<boolean, boolean>;
toggle(): this;
}
export type FocusCoordinates = {
x: number;
y: number;
};
/**
 * Class for managing directional focus navigation on child elements via keyboard arrow keys, while keeping browser focus on the parent.
 */
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
export declare class LabelHighlightInclude extends LabelInclude {
constructor(props: Readonly<LabelHighlightProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: LabelHighlightSlots | undefined, elementsExtra?: (() => VNode[]) | undefined, skeleton?: SkeletonInclude | undefined);
isHighlight(): boolean;
}
export declare class LabelInclude {
constructor(props: RefOrNormalOrFunction<LabelProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: (LabelSlots | LabelAlternativeSlots) | undefined, elementsExtra?: (() => VNode[]) | undefined, labelReplacing?: Ref<string | number | undefined> | undefined, alternativeSlots?: boolean | undefined, skeleton?: SkeletonInclude | undefined, tag?: RefOrNormalOrFunction<string | undefined>, ignoreLabelIfSlot?: boolean | undefined);
get is(): boolean;
get id(): string;
render(childrenExtra?: any[], props?: Record<string, any>): VNode[];
}
export declare class LabelNumberInclude extends LabelInclude {
constructor(props: Readonly<LabelNumberProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: LabelNumberSlots | undefined, elementsExtra?: (() => VNode[]) | undefined, skeleton?: SkeletonInclude | undefined);
}
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
export declare class ModelValueInclude<Value = any> {
readonly value: Ref<Value | undefined, Value | undefined>;
constructor(index: string, emits?: any | undefined, event?: EventClickInclude | undefined, inputValue?: RefType<any> | undefined, readonly?: RefType<boolean | undefined> | undefined, multiple?: RefType<boolean | undefined> | undefined);
getValue(): Value | undefined;
readonly onClick: (event: MouseEvent, options?: EventClickValue) => void;
readonly onUpdate: (value: Value) => void;
}
export declare class PaginationInclude<T = any> {
constructor(props: PaginationPropsInclude<T>, targetList?: T[] | (() => T[] | undefined) | undefined);
get max(): number;
get page(): number;
get rows(): number;
get list(): T[];
}
export declare class Plugin {
constructor(design: string, packageName: string, componentsReg: RegExp, styleVarsReg: RegExp, componentsList: PluginComponentImports, name?: string, options?: PluginOptions);
init(): VitePlugin;
}
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
export declare class PluginComponents {
constructor(code: PluginCode, pluginData: PluginData);
make(): void;
}
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
export declare class PluginImport {
constructor(packageName: string, code: string);
get(): string;
importStyle(): this;
}
export declare class PluginStyle {
constructor(code: PluginCode, data: PluginData, namespace?: string);
make(): this;
}
export declare class PluginTool {
static isSrc(id: string): boolean;
static isJs(id: string): boolean;
static isVue(id: string): boolean;
static isCss(id: string): boolean;
static isDev(mode: string): boolean;
}
export declare class PrefixInclude {
constructor(props: Readonly<PrefixProps>, className: string, slots?: PrefixSlots | undefined, skeleton?: SkeletonInclude | undefined);
get is(): boolean;
get id(): string;
get describedby(): string;
render(): VNode[];
}
export declare class ScrollToXInclude {
constructor(element: Ref<HTMLElement | undefined>);
get binds(): {
onWheelPassive: (event: WheelEvent) => void;
};
readonly onScrollToX: (event: WheelEvent) => void;
}
export declare class SearchInclude<T extends SearchItem = any> {
readonly item: ReturnType<typeof useSearchRef<T, SearchColumns<T>>>;
constructor(props: SearchPropsInclude<T>, columns?: (SearchColumns<T> | (() => SearchColumns<T>)) | undefined);
get list(): SearchFormatList<T, SearchColumns<T>>;
get length(): number;
get search(): string;
get loading(): boolean;
isSearch(): boolean;
}
export declare class SortInclude<T = any> {
readonly columns: ComputedRef<SortColumnItem[]>;
readonly sortedList: ComputedRef<T[]>;
constructor(props: SortPropsInclude<T>, targetList?: any[] | (() => any[] | undefined) | undefined, sort?: SortIncludeSort | undefined, sortDir?: SortIncludeSortDir | undefined);
get column(): string | undefined;
get dir(): SortDir;
isSort(): boolean;
getList(): T[];
}
export declare class StickyInclude {
constructor(props: StickyPropsInclude | (() => StickyPropsInclude), className: string, element: Ref<HTMLElement | undefined>, parent: Ref<HTMLElement | undefined>);
readonly updatePosition: () => void;
readonly onScroll: () => void;
}
export declare class SuffixInclude {
constructor(props: Readonly<SuffixProps>, className: string, slots?: SuffixSlots | undefined, skeleton?: SkeletonInclude | undefined);
get is(): boolean;
get id(): string;
get describedby(): string;
render(): VNode[];
}
export declare class TabIndexInclude<E extends HTMLElement = HTMLElement> {
constructor(element: Ref<E | undefined> | (() => E | undefined), active?: () => boolean, activeOpen?: () => boolean, activeClose?: () => boolean);
goTo(): this;
reset(): this;
toggle(status: boolean): this;
updateOldElement(): void;
findFirstElement(): HTMLElement | undefined;
findLastElement(): HTMLElement | undefined;
}
export declare class TeleportInclude {
constructor(toDefault?: RefOrNormal<string>);
get to(): string;
isTeleportElement(element: HTMLElement): boolean;
render(children?: RawChildren | RawSlots, props?: Record<string, any>): VNode[];
}
export declare class TextInclude {
static getObject(): TextIncludeInstance;
static get list(): ShallowRef<TextList>;
static initText(texts: TextList): void;
readonly texts: Record<string, () => (string | undefined)>;
constructor(props: TextAllPropsInclude);
get breadcrumb(): string | undefined;
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
get symbol(): string | undefined;
get(name: keyof TextAllPropsInclude): string | undefined;
}
export declare class TextIncludeInstance {
readonly list: ShallowRef<TextList, TextList>;
initText(texts: TextList): void;
getGlobalText(index: TextIndex): string | undefined;
}
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
export type AccordionComponents = CellComponentInclude & MotionTransformComponentInclude;
export type AccordionEmits = EventClickEmits & MotionTransformEmitsInclude & ModelEmitsOpen;
export interface AccordionExpose extends MotionTransformExposeInclude {}
export interface AccordionSlots extends CellSlotsInclude {
default?(props: MotionTransformControlItem): any;
}
export type AccordionClasses = {
main: ConstrClass;
head: string;
body: string;
};
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
export type ActionSheetComponents = ModalComponents;
export type ActionSheetEmits = ModalEmits;
export interface ActionSheetExpose extends ModalExpose {}
export interface ActionSheetSlots extends ModalSlots {}
export type ActionSheetClasses = {
main: ConstrClass;
title: string;
header: string;
body: string;
footer: string;
touch: string;
tab: string;
};
export type ActionsComponentInclude = {
actions?: object;
};
export type ActionsEmitsInclude = {
actions: EventClickEmits['click'];
actionsLite: EventClickEmits['clickLite'];
};
export type ActionsPropsInclude<Actions extends ActionsPropsBasic = ActionsPropsBasic> = {
actionsHide?: boolean;
actionsList?: ConstrBind<Actions['list']>;
actionsSecondary?: ConstrBind<Actions['listSecondary']>;
actionsAttrs?: ConstrBind<Actions>;
};
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
export type ActionsComponents = ButtonComponentInclude;
export type ActionsEmits = EventClickEmits;
export interface ActionsExpose {}
export interface ActionsSlots {
default?(props: any): any;
secondary?(props: any): any;
}
export type ActionsClasses = {
main: ConstrClass;
item: string;
list: string;
secondary: string;
spacer: string;
};
export type AlertPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, AlertLink extends AlertLinkPropsBasic = AlertLinkPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic> = LabelProps & DescriptionProps & IconTrailingPropsInclude<Icon> & AlertLinkPropsInclude<AlertLink> & ActionsPropsInclude<Actions> & AriaRolePropsInclude & AriaLivePropsInclude & TextClosePropsInclude & {
button?: string | number | ConstrBind<Button>;
iconClose?: string;
closeButton?: boolean;
};
export type AlertProps = AlertPropsBasic & { itemCenter?: boolean };
export declare const defaultsAlert: {
itemCenter: boolean;
role: string;
};
export type AlertComponents = IconComponentInclude & ButtonComponentInclude & ActionsComponentInclude & AlertLinkComponentInclude;
export type AlertEmits = AlertLinkEmitsInclude & ActionsEmitsInclude & EventClickEmits & {
close: [];
};
export interface AlertExpose {}
export interface AlertSlots extends LabelSlots, DescriptionSlots {
trailing?(props: any): any;
body?(props: any): any;
}
export type AlertClasses = {
main: ConstrClass;
icon: string;
trailing: string;
context: string;
label: string;
description: string;
body: string;
button: string;
buttons: string;
buttonClose: string;
links: string;
linksItem: string;
actions: string;
};
export type AlertLinkComponentInclude = {
alertLink?: object;
};
export type AlertLinkEmitsInclude = {
link: [event: MouseEvent, value: EventClickValue];
linkLite: [value: EventClickValue];
};
export type AlertLinkPropsInclude<AlertLinkProps extends AlertLinkPropsBasic = AlertLinkPropsBasic> = {
links?: ConstrBind<AlertLinkProps>[];
linksAttrs?: ConstrBind<AlertLinkProps>;
};
export type AlertLinkPropsBasic = LabelProps & EventClickProps;
export type AlertLinkProps = AlertLinkPropsBasic & { divider?: boolean };
export declare const defaultsAlertLink: {
divider: boolean;
};
export type AlertLinkComponents = {};
export type AlertLinkEmits = EventClickEmits;
export interface AlertLinkExpose extends EventClickExpose {}
export interface AlertLinkSlots extends LabelSlots {}
export type AlertLinkClasses = {
main: ConstrClass;
label: string;
};
export type AnchorScrollProps = {
shift?: NumberOrString;
behavior?: ScrollIntoViewOptions['behavior'];
block?: ScrollIntoViewOptions['block'];
inline?: ScrollIntoViewOptions['inline'];
};
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
export type AnchorComponents = TooltipComponentInclude & IconComponentInclude;
export type AnchorEmits = {};
export interface AnchorExpose {
go(): void;
}
export interface AnchorSlots extends LabelSlots, TooltipSlotsInclude {}
export type AnchorClasses = {
main: ConstrClass;
label: string;
};
export type AreaPropsBasic = {
areaDefault?: string;
};
export type AreaProps = AreaPropsBasic;
export declare const defaultsArea: {};
export type AreaComponents = {};
export type AreaEmits = {};
export interface AreaExpose {}
export type AreaSlots = Record<string, (props: any) => any>;
export type AreaClasses = {
main: ConstrClass;
};
export declare enum ArrowDirection {
TOP = "top",
BOTTOM = "bottom",
LEFT = "left",
RIGHT = "right",
HIDE = "hide"
}
export type ArrowBorder = {
top: number;
bottom: number;
left: number;
right: number;
};
export type ArrowCenter = {
x: number;
y: number;
};
export type ArrowComponentInclude = {
arrow?: object;
};
export type ArrowPropsInclude<Arrow extends ArrowProps = ArrowProps> = {
arrowShow?: boolean;
arrowPosition?: ArrowProps['position'];
arrowAttrs?: ConstrBind<Arrow>;
};
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
export type ArrowComponents = {};
export type ArrowEmits = {};
export interface ArrowExpose {
update: () => void;
}
export interface ArrowSlots {}
export type ArrowClasses = {
main: ConstrClass;
mask: string;
arrow: string;
arrowLine: string;
arrowArea: string;
border: string;
borderHidden: string;
};
export type AvatarPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic> = LabelProps & ImagePropsInclude<Image> & BadgePropsInclude<Badge> & SkeletonPropsInclude & AriaLabelPropsInclude & EventClickProps & {
reduction?: boolean;
tabindex?: string | number;
};
export type AvatarProps = AvatarPropsBasic & {
focus?: boolean;
disabled?: boolean;
readonly?: boolean;
};
export declare const defaultsAvatar: {
reduction: boolean;
tabindex: string;
};
export type AvatarComponents = ImageComponentInclude & BadgeComponentInclude;
export type AvatarEmits = ImageEmitsInclude & EventClickEmits;
export interface AvatarExpose extends EventClickExpose {}
export interface AvatarSlots extends LabelSlots {}
export type AvatarClasses = {
main: ConstrClass;
label: string;
};
export type BadgeComponentInclude = {
badge?: object;
};
export type BadgePropsInclude<Badge extends BadgePropsBasic = BadgePropsBasic> = {
badge?: string | number | ConstrBind<Badge>;
badgeDot?: boolean;
badgeAttrs?: ConstrBind<Badge>;
};
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
export type BadgeComponents = IconComponentInclude;
export type BadgeEmits = {};
export interface BadgeExpose {}
export interface BadgeSlots extends LabelNumberSlots {}
export type BadgeClasses = {
main: ConstrClass;
label: string;
icon: string;
};
export type BarsComponentInclude = {
bars?: object;
};
export type BarsEmitsInclude = {
bars: EventClickEmits['click'];
barsLite: EventClickEmits['clickLite'];
barsBack: EventClickEmits['clickLite'];
};
export type BarsPropsInclude<Bars extends BarsPropsBasic = BarsPropsBasic> = {
barsLabel?: string | number;
barsDescription?: string;
barsBackHide?: boolean;
barsHide?: boolean;
barsList?: Bars['bars'];
barsAttrs?: ConstrBind<Bars>;
};
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
export type BarsComponents = ButtonComponentInclude;
export type BarsEmits = EventClickEmits & {
'update:action': [value: boolean];
'update:modelAction': [value: boolean];
};
export interface BarsExpose {}
export interface BarsSlots extends LabelSlots, DescriptionSlots {
bars?(props: any): any;
actionBars?(props: any): any;
}
export type BarsClasses = {
main: ConstrClass;
context: string;
label: string;
description: string;
};
export type BleedPropsBasic = {
tag?: string;
};
export type BleedProps = BleedPropsBasic;
export declare const defaultsBleed: {
tag: string;
};
export type BleedComponents = {};
export type BleedEmits = {};
export interface BleedExpose {}
export interface BleedSlots {
default?(props: any): any;
}
export type BleedClasses = {
main: ConstrClass;
};
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
export type BlockComponents = HeaderComponentInclude;
export type BlockEmits = {};
export interface BlockExpose {}
export interface BlockSlots extends HeaderSlotsInclude, DescriptionSlots {
headline?(props: any): any;
default?(props: any): any;
}
export type BlockClasses = {
main: ConstrClass;
headline: string;
header: string;
description: string;
body: string;
};
export type BreadcrumbItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = LabelProps & IconLitePropsInclude<Icon> & EnabledProps & EventClickProps & SkeletonPropsInclude & {
iconArrowLeft?: string;
iconArrowRight?: string;
};
export type BreadcrumbItemProps = BreadcrumbItemPropsBasic & {
disabled?: boolean;
readonly?: boolean;
back?: boolean;
};
export declare const defaultsBreadcrumbItem: {};
export type BreadcrumbItemComponents = IconComponentInclude;
export type BreadcrumbItemEmits = EventClickEmits;
export interface BreadcrumbItemExpose extends EventClickExpose {}
export interface BreadcrumbItemSlots extends LabelSlots {}
export type BreadcrumbItemClasses = {
main: ConstrClass;
iconArrow: string;
};
export type BreadcrumbsPropsBasic<BreadcrumbItem extends BreadcrumbItemProps = BreadcrumbItemProps> = TextBreadcrumbPropsInclude & SkeletonPropsInclude & {
list?: ConstrBind<BreadcrumbItem>[];
};
export type BreadcrumbsProps = BreadcrumbsPropsBasic;
export declare const defaultsBreadcrumbs: {};
export type BreadcrumbsComponents = {
breadcrumbItem: object;
};
export type BreadcrumbsEmits = EventClickEmits;
export interface BreadcrumbsExpose {}
export interface BreadcrumbsSlots {}
export type BreadcrumbsClasses = {
main: ConstrClass;
item: string;
};
export type BulletPropsBasic = BulletItemPropsInclude & {
html?: string;
};
export type BulletProps = BulletPropsBasic;
export declare const defaultsBullet: {};
export type BulletComponents = BulletItemComponentInclude;
export type BulletEmits = {};
export interface BulletExpose {}
export interface BulletSlots {
default?(props: any): any;
}
export type BulletClasses = {
main: ConstrClass;
item: string;
};
export type BulletItemComponentInclude = {
bulletItem?: object;
};
export type BulletItemPropsInclude<BulletItemProps extends BulletItemPropsBasic = BulletItemPropsBasic> = {
list?: string[];
itemAttrs?: ConstrBind<BulletItemProps>;
};
export type BulletItemPropsBasic = DescriptionProps;
export type BulletItemProps = BulletItemPropsBasic;
export declare const defaultsBulletItem: {};
export type BulletItemComponents = {};
export type BulletItemEmits = {};
export interface BulletItemExpose {}
export interface BulletItemSlots extends DescriptionSlots {}
export type BulletItemClasses = {
main: ConstrClass;
};
export type ButtonComponentInclude = {
button?: object;
};
export type ButtonPropsInclude<Button extends ButtonPropsBasic = ButtonPropsBasic> = {
buttonAttrs?: ConstrBind<Button>;
};
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
export type ButtonComponents = IconComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type ButtonEmits = EventClickEmits;
export interface ButtonExpose extends EventClickExpose {}
export interface ButtonSlots extends LabelSlots {}
export type ButtonClasses = {
main: ConstrClass;
label: string;
icon: string;
trailing: string;
loading: string;
};
export type ButtonGroupPropsToken = {
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
export type ButtonGroupComponents = ButtonComponentInclude;
export type ButtonGroupEmits = EventClickEmits;
export interface ButtonGroupExpose {}
export interface ButtonGroupSlots {
default?(props: any): any;
}
export type ButtonGroupClasses = {
main: ConstrClass;
item: string;
};
export type CellClassesSub = {
label: string;
description: string;
caption: string;
trailing: string;
};
export type CellComponentInclude = {
cell?: object;
};
export interface CellSlotsInclude extends LabelAlternativeSlots, DescriptionSlots, CaptionSlots {
trailing?(props: CellClassesSub): any;
body?(props: CellClassesSub): any;
}
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
export type CellComponents = IconComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type CellEmits = EventClickEmits;
export interface CellExpose extends EventClickExpose {}
export interface CellSlots extends LabelSlots, DescriptionSlots, CaptionSlots {
trailing?(props: CellClassesSub): any;
body?(props: CellClassesSub): any;
}
export type CellClasses = {
main: ConstrClass;
context: string;
contextTrailing: string;
label: string;
description: string;
caption: string;
icon: string;
trailing: string;
body: string;
loading: string;
};
export type CheckboxPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & DescriptionProps & FieldMessagePropsInclude<FieldMessage, FieldCounter> & FieldInputCheckProps & ProgressPropsInclude<Progress> & EnabledProps & ModelProps<boolean> & ModelPropsSelected & SkeletonPropsInclude & {
selected?: string;
iconCheckbox?: string | ConstrBind<Image> | null;
iconIndeterminate?: string | ConstrBind<Image> | null;
};
export type CheckboxProps = CheckboxPropsBasic & {
block?: boolean;
adaptive?: 'rightAlways';
container?: boolean;
required?: boolean;
itemCenter?: boolean;
focus?: boolean;
disabled?: boolean;
};
export declare const defaultsCheckbox: {
block: boolean;
itemCenter: boolean;
valueVariantHide: string;
};
export type CheckboxComponents = ImageComponentInclude & FieldMessageComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type CheckboxEmits = FieldBasicEmits<boolean> & ModelEmitsSelected;
export interface CheckboxExpose extends FieldBasicExpose<boolean> {}
export interface CheckboxSlots extends LabelSlots, DescriptionSlots {}
export type CheckboxClasses = {
main: ConstrClass;
input: string;
body: string;
item: string;
icon: string;
loading: string;
info: string;
label: string;
};
export type ChipComponentInclude = {
chip?: object;
};
export type ChipPropsInclude<Chip extends ChipPropsBasic = ChipPropsBasic> = {
chipAttrs?: ConstrBind<Chip>;
};
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
export type ChipComponents = ButtonComponents;
export type ChipEmits = ButtonEmits;
export interface ChipExpose extends ButtonExpose {}
export interface ChipSlots extends ButtonSlots {}
export type ChipClasses = {
main: ConstrClass;
label: string;
icon: string;
trailing: string;
loading: string;
};
export type ChipGroupData<Chip extends ChipPropsBasic = ChipPropsBasic> = ListListInput<Chip>;
export type ChipGroupItem<Chip extends ChipPropsBasic = ChipPropsBasic> = ConstrBind<Chip>;
export type ChipGroupList<Chip extends ChipPropsBasic = ChipPropsBasic> = ChipGroupItem<Chip>[];
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
export type ChipGroupProps = ChipGroupPropsBasic;
export declare const defaultsChipGroup: {
readonly: boolean;
};
export type ChipGroupComponents = ChipComponentInclude;
export type ChipGroupEmits = EventClickEmits & ModelEmitsSelected<ListSelectedList>;
export interface ChipGroupExpose {}
export interface ChipGroupSlots {
default?(props: any): any;
}
export type ChipGroupClasses = {
main: ConstrClass;
item: string;
};
export type ClientOnlyPropsBasic = ClientOnlyPropsInclude;
export type ClientOnlyProps = ClientOnlyPropsBasic;
export declare const defaultsClientOnly: {
clientOnly: boolean;
};
export type ClientOnlyComponents = {};
export type ClientOnlyEmits = {};
export interface ClientOnlyExpose {}
export interface ClientOnlySlots {
default?(props: any): any;
}
export type ClientOnlyClasses = {
main: ConstrClass;
};
export type ContainerPropsToken = {
align?: 'left' | 'center' | 'right';
};
export type ContainerPropsBasic = AreaPropsInclude;
export type ContainerProps = ContainerPropsBasic & ContainerPropsToken;
export declare const defaultsContainer: {
align: string;
area: string;
};
export type ContainerComponents = {};
export type ContainerEmits = {};
export interface ContainerExpose {}
export interface ContainerSlots {
default?(props: any): any;
}
export type ContainerClasses = {
main: ConstrClass;
};
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
export type DialogComponents = ModalComponents & IconComponentInclude;
export type DialogEmits = ModalEmits & {
ok: [];
close: [];
};
export interface DialogExpose extends ModalExpose {}
export interface DialogSlots extends ModalSlots, LabelAlternativeSlots, DescriptionSlots {}
export type DialogClasses = {
main: ConstrClass;
title: string;
header: string;
information: string;
icon: string;
label: string;
description: string;
body: string;
footer: string;
};
export type DividerPropsBasic = {};
export type DividerProps = DividerPropsBasic;
export declare const defaultsDivider: {};
export type DividerComponents = {};
export type DividerEmits = {};
export interface DividerExpose {}
export interface DividerSlots {}
export type DividerClasses = {
main: ConstrClass;
};
export interface DraggableWrapperEventParameters {
active: HTMLElement;
to?: HTMLElement;
selection?: HTMLElement[];
value: (string | undefined)[];
valueActive?: string;
valueTo?: string;
valueSelection: (string | undefined)[];
before?: boolean;
}
export type DraggableWrapperControl = {
className: string;
classClick: string;
classDrop: string;
classPosition: string;
};
export type DraggableWrapperClassesList = {
click: string;
drop: string;
position: string;
active: string;
go: string;
selection: string;
selectionMore: string;
return: string;
show: string;
dragged: string;
selected: string;
body: string;
};
export type DraggableWrapperPropsBasic = {
disabled?: boolean;
tag?: string;
delay?: number | string;
classesSquare?: string | string[];
};
export type DraggableWrapperProps = DraggableWrapperPropsBasic;
export declare const defaultsDraggableWrapper: {
tag: string;
};
export type DraggableWrapperComponents = {};
export type DraggableWrapperEmits = {
drop: [parameters: DraggableWrapperEventParameters];
position: [parameters: DraggableWrapperEventParameters];
};
export interface DraggableWrapperExpose {
toNewPosition<T extends {
value?: any;
}>(values: T[], parameters: DraggableWrapperEventParameters): T[];
}
export interface DraggableWrapperSlots {
default?(props: DraggableWrapperControl): any;
}
export type DraggableWrapperClasses = {
main: ConstrClass;
square: string;
};
export type DummyPropsBasic = {};
export type DummyProps = DummyPropsBasic;
export declare const defaultsDummy: {};
export type DummyComponents = {};
export type DummyEmits = {};
export interface DummyExpose {}
export interface DummySlots {
default?(props: any): any;
}
export type DummyClasses = {
main: ConstrClass;
};
export type FieldControl = {
id: string;
className: string;
classHidden: string;
classForFocus: string;
binds: AriaList & {
'id': string;
'class': string;
'disabled'?: boolean;
'readonly'?: boolean;
'data-input': string;
};
};
export type FieldComponentInclude = {
field?: object;
};
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
export type FieldComponents = IconComponentInclude & FieldLabelComponentInclude & FieldMessageComponentInclude & ProgressComponentInclude;
export type FieldEmits = EventClickEmits;
export interface FieldExpose {}
export interface FieldSlots extends CaptionSlots, PrefixSlots, SuffixSlots, FieldLabelSlotsInclude {
leading?(props: FieldControl): any;
trailing?(props: FieldControl): any;
default?(props: FieldControl): any;
}
export type FieldClasses = {
main: ConstrClass;
body: string;
bodyInput: string;
bodyTitle: string;
bodyTitleLabel: string;
bodyTitleLabelText: string;
bodyScoreboard: string;
bodyScoreboardLeft: string;
bodyScoreboardRight: string;
bodyScoreboardSpace: string;
bodyScoreboardInput: string;
bodyBorder: string;
required: string;
};
export type FieldCounterComponentInclude = {
fieldCounter?: object;
};
export interface FieldCounterPropsInclude<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> {
counter?: FieldCounterPropsBasic['counter'];
counterShow?: boolean;
counterTemplate?: FieldCounterPropsBasic['template'];
counterId?: string;
maxlength?: FieldCounterPropsBasic['maxlength'];
fieldCounterAttrs?: ConstrBind<FieldCounter>;
}
export type FieldCounterPropsBasic = TextCharacterLimitPropsInclude & TextCharacterRemainingPropsInclude & {
counter?: string | number;
maxlength?: string | number;
maxlengthOnce?: string | number;
template?: string;
id?: string;
};
export type FieldCounterProps = FieldCounterPropsBasic;
export declare const defaultsFieldCounter: {};
export type FieldCounterComponents = {};
export type FieldCounterEmits = {};
export interface FieldCounterExpose {}
export interface FieldCounterSlots {}
export type FieldCounterClasses = {
main: ConstrClass;
aria: string;
};
export type FieldLabelComponentInclude = {
fieldLabel?: object;
};
export interface FieldLabelSlotsInclude extends LabelAlternativeSlots {}
export type FieldLabelPropsInclude<FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> = LabelProps & FieldCounterPropsInclude<FieldCounter> & {
required?: boolean;
fieldLabelAttrs?: ConstrBind<FieldLabel>;
};
export type FieldLabelPropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & FieldCounterPropsInclude<FieldCounter> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & {
for?: string;
required?: boolean;
};
export type FieldLabelProps = FieldLabelPropsBasic;
export declare const defaultsFieldLabel: {};
export type FieldLabelComponents = FieldCounterComponentInclude & ProgressComponentInclude;
export type FieldLabelEmits = {};
export interface FieldLabelExpose {}
export interface FieldLabelSlots extends LabelAlternativeSlots {}
export type FieldLabelClasses = {
main: ConstrClass;
label: string;
required: string;
};
export type FieldMessageSlot = {
message?: string;
helperMessage?: string;
validationMessage?: string;
};
export type FieldMessageComponentInclude = {
fieldMessage?: object;
};
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
export type FieldMessagePropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> = FieldCounterPropsInclude<FieldCounter> & SkeletonPropsInclude & {
forceShow?: boolean;
hasHtmlCode?: boolean;
disabled?: boolean;
helperMessage?: string;
validationMessage?: string;
helperId?: string;
validationId?: string;
};
export type FieldMessageProps = FieldMessagePropsBasic;
export declare const defaultsFieldMessage: {};
export type FieldMessageComponents = FieldCounterComponentInclude;
export type FieldMessageEmits = {};
export interface FieldMessageExpose {}
export interface FieldMessageSlots {
helper?(props: FieldMessageSlot): any;
validation?(props: FieldMessageSlot): any;
}
export type FieldMessageClasses = {
main: ConstrClass;
info: string;
error: string;
fieldCounter: string;
};
export type FormattedNumberPropsBasic = {
value?: NumberOrString;
currency?: string;
unit?: string;
formatting?: boolean;
language?: string;
};
export type FormattedNumberProps = FormattedNumberPropsBasic;
export declare const defaultsFormattedNumber: {
formatting: boolean;
};
export type FormattedNumberComponents = {};
export type FormattedNumberEmits = {};
export interface FormattedNumberExpose {}
export interface FormattedNumberSlots {}
export type FormattedNumberClasses = {
main: ConstrClass;
};
export type FormattedUnitPropsBasic = {
value?: NumberOrString;
unit?: string;
formatting?: boolean;
language?: string;
};
export type FormattedUnitProps = FormattedUnitPropsBasic;
export declare const defaultsFormattedUnit: {
formatting: boolean;
};
export type FormattedUnitComponents = {};
export type FormattedUnitEmits = {};
export interface FormattedUnitExpose {}
export interface FormattedUnitSlots {}
export type FormattedUnitClasses = {
main: ConstrClass;
};
export type GridPropsBasic = {};
export type GridProps = GridPropsBasic;
export declare const defaultsGrid: {};
export type GridComponents = {};
export type GridEmits = {};
export interface GridExpose {}
export interface GridSlots {
default?(props: any): any;
}
export type GridClasses = {
main: ConstrClass;
};
export type GridItemPropsToken = {
base?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
};
export type GridItemPropsBasic = {};
export type GridItemProps = GridItemPropsBasic & GridItemPropsToken;
export declare const defaultsGridItem: {
base: string;
};
export type GridItemComponents = {};
export type GridItemEmits = {};
export interface GridItemExpose {}
export interface GridItemSlots {
default?(props: any): any;
}
export type GridItemClasses = {
main: ConstrClass;
};
export type GroupPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = BlockPropsBasic<Icon, Header>;
export type GroupProps = GroupPropsBasic;
export declare const defaultsGroup: {
area: string;
tag: string;
tagHeader: string;
};
export type GroupComponents = BlockComponents;
export type GroupEmits = BlockEmits;
export interface GroupExpose extends BlockExpose {}
export interface GroupSlots extends BlockSlots {}
export type GroupClasses = {
main: ConstrClass;
headline: string;
header: string;
description: string;
body: string;
};
export type HeaderComponentInclude = {
header?: object;
};
export type HeaderPropsInclude<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = LabelProps & CaptionProps & IconPropsInclude<Icon> & {
tagHeader?: string;
headerAttrs?: ConstrBind<Header>;
};
export interface HeaderSlotsInclude extends LabelAlternativeSlots, CaptionSlots {
trailing?(props: any): any;
}
export type HeaderPropsToken = {
tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
export type HeaderPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = LabelProps & CaptionProps & IconPropsInclude<Icon> & AreaPropsInclude;
export type HeaderProps = HeaderPropsBasic & HeaderPropsToken;
export declare const defaultsHeader: {
tag: string;
area: string;
};
export type HeaderComponents = IconComponentInclude;
export type HeaderEmits = {};
export interface HeaderExpose {}
export interface HeaderSlots extends LabelSlots, CaptionSlots {
trailing?(props: any): any;
}
export type HeaderClasses = {
main: ConstrClass;
label: string;
caption: string;
icon: string;
space: string;
};
export type HorizontalScrollControlItem = {
classItem: string;
classItemSelected: string;
binds: {
class: string;
};
};
export type HorizontalScrollComponentInclude = {
horizontalScroll?: object;
};
export type HorizontalScrollPropsInclude<HorizontalScroll extends HorizontalScrollPropsBasic = HorizontalScrollPropsBasic> = {
horizontalScrollBleed?: boolean;
horizontalScrollAlign?: 'block' | 'left';
horizontalScrollAttrs?: ConstrBind<HorizontalScroll>;
};
export type HorizontalScrollPropsToken = {
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
export type HorizontalScrollComponents = {};
export type HorizontalScrollEmits = {};
export interface HorizontalScrollExpose {
getElement(): HTMLDivElement | undefined;
toSelected(): void;
}
export interface HorizontalScrollSlots {
default?(props: any): any;
}
export type HorizontalScrollClasses = {
main: ConstrClass;
};
export type IconEventLoad = {
isActive: boolean;
iconBind: ConstrItem | undefined;
iconActiveBind: ConstrItem | undefined;
};
export type IconValue<Icon extends IconPropsBasic = IconPropsBasic> = string | ConstrBind<Icon> | null;
export type IconComponentInclude = {
icon?: object;
};
export type IconLitePropsInclude<Icon extends IconPropsBasic = IconPropsBasic> = {
icon?: IconValue<Icon>;
};
export type IconPropsInclude<Icon extends IconPropsBasic = IconPropsBasic> = IconLitePropsInclude<Icon> & {
selected?: boolean;
iconTurn?: boolean;
iconHide?: boolean;
iconDir?: boolean;
iconPalette?: boolean;
iconAttrs?: ConstrBind<Icon>;
};
export type IconTrailingPropsInclude<Icon extends IconPropsBasic = IconPropsBasic> = IconPropsInclude<Icon> & {
iconTrailing?: IconValue<Icon>;
iconTrailingTurnOnly?: boolean;
iconTrailingDirOnly?: boolean;
iconTrailingPalette?: boolean;
};
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
export type IconComponents = ImageComponentInclude;
export type IconEmits = ImageEmitsInclude & EventClickEmits;
export interface IconExpose extends EventClickExpose {
isActive(): boolean;
}
export interface IconSlots {
default?(props: any): any;
}
export type IconClasses = {
main: ConstrClass;
};
export declare enum ImageTypeValue {
pdf = "pdf",
file = "file",
array = "array",
image = "image",
flag = "flag",
flagCompressed = "flag-compressed",
color = "color",
public = "public",
filled = "filled",
outlined = "outlined",
round = "round",
sharp = "sharp",
twoTone = "two-tone",
material = "material",
icon = "icon"
}
export type ImageElement = HTMLElement | undefined;
export type ImageAttrs = Record<keyof HTMLImageElement, any>;
export type ImageCoordinatorItem = [number] | [number, number] | [number, number, number] | [number, number, number, number] | Undefined;
export type ImageSize<T = number> = {
width: T;
height: T;
};
export type ImagePictureItem = Record<keyof HTMLSourceElement & 'key', any>;
export type ImagePictureList = ImagePictureItem[];
export type ImagePicture = Record<string, string> | ImagePictureList;
export type ImageUint8ArrayType = Uint8Array<ArrayBuffer> | ArrayBuffer;
export type ImageUint8ArrayItem = {
item: ImageUint8ArrayType;
type: string;
src: string;
};
export type ImageUint8ArrayCache = ImageUint8ArrayItem[];
export type ImageItem = ImageSize & {
image: HTMLImageElement;
src: string;
};
export type ImageTypeItem = ImageTypeValue | Undefined;
export type ImageEventItem = ImageItem | string | undefined;
export type ImageEventType = {
type: ImageTypeItem;
};
export type ImageEventData = ImageEventType & {
image: ImageEventItem;
};
export type ImageValue<Image extends ImagePropsBasic = ImagePropsBasic> = string | ConstrBind<Image> | null;
export type ImageComponentInclude = {
image?: object;
};
export type ImageEmitsInclude = ImageEmits;
export type ImagePropsInclude<Image extends ImagePropsBasic = ImagePropsBasic> = {
image?: string | ConstrBind<Image>;
imageAttrs?: ConstrBind<Image>;
};
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
export type ImageComponents = {};
export type ImageEmits = {
load: [image: ImageEventData];
};
export type ImageExpose = {
getType: () => ImageTypeItem;
getData: () => ImageEventItem;
};
export interface ImageSlots {}
export type ImageClasses = {
main: ConstrClass;
};
export type InputComponentInclude = {
input?: object;
};
export type InputPropsToken = {};
export type InputPropsBasic<Mask extends MaskPropsBasic = MaskPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = MaskPropsInclude<Mask> & FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldInputProps<NumberOrString>;
export type InputProps = InputPropsBasic & InputPropsToken;
export declare const defaultsInput: {
type: string;
autocomplete: string;
arrow: string;
maskVisible: boolean;
};
export type InputComponents = MaskComponentInclude & FieldComponentInclude;
export type InputEmits = FieldBasicEmits<NumberOrString>;
export interface InputExpose extends FieldBasicExpose {}
export interface InputSlots extends FieldSlotsInclude {}
export type InputClasses = {
main: ConstrClass;
};
export type InputCodePropsBasic<InputCodeItem extends InputCodeItemPropsBasic = InputCodeItemPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic> = InputCodeItemPropsInclude<InputCodeItem> & Omit<FieldLabelPropsInclude<FieldLabel>, 'counter' | 'counterShow' | 'counterTemplate' | 'counterId' | 'maxlength' | 'fieldCounterAttrs' | 'required'> & Omit<FieldMessagePropsInclude<FieldMessage>, 'counter' | 'counterShow' | 'counterTemplate' | 'counterId' | 'maxlength' | 'fieldCounterAttrs'> & ModelProps & {
success?: boolean;
loading?: boolean;
value?: string;
length?: number;
};
export type InputCodeProps = { validation?: boolean } & InputCodePropsBasic;
export declare const defaultsInputCode: {
length: number;
match: RegExp;
inputMode: string;
};
export type InputCodeComponents = InputCodeItemComponentInclude & FieldLabelComponentInclude & FieldMessageComponentInclude;
export type InputCodeEmits = ModelEmits & {
input: [value: string];
};
export interface InputCodeExpose {
getValue(): string;
set(value: string | number): void;
reset(): void;
focus(): void;
}
export interface InputCodeSlots {}
export type InputCodeClasses = {
main: ConstrClass;
context: string;
};
export type InputCodeItemElement = HTMLElement | Element | null | undefined;
export type InputCodeItemComponentInclude = {
inputCodeItem?: object;
};
export type InputCodeItemPropsInclude<InputCodeItem extends InputCodeItemPropsBasic = InputCodeItemPropsBasic> = SkeletonPropsInclude & {
disabled?: boolean;
name?: string;
match?: InputCodeItemPropsBasic['match'];
inputMode?: InputCodeItemPropsBasic['inputMode'];
placeholder?: string;
itemAttrs?: ConstrBind<InputCodeItem>;
};
export type InputCodeItemPropsBasic = TextSymbolPropsInclude & SkeletonPropsInclude & {
move?: boolean;
name?: string;
index?: NumberOrString;
match?: RegExp;
inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | string;
placeholder?: string;
tabindex?: number | string;
};
export type InputCodeItemProps = InputCodeItemPropsBasic & {
disabled?: boolean;
success?: boolean;
error?: boolean;
hide?: boolean;
};
export declare const defaultsInputCodeItem: {
move: boolean;
name: string;
match: RegExp;
inputMode: string;
placeholder: string;
};
export type InputCodeItemComponents = {};
export type InputCodeItemEmits = {
focus: [index: InputCodeItemPropsBasic['index']];
input: [index: InputCodeItemPropsBasic['index'], value: string];
paste: [index: InputCodeItemPropsBasic['index'], value: string];
backspace: [index: InputCodeItemPropsBasic['index']];
};
export interface InputCodeItemExpose {
index: InputCodeItemPropsBasic['index'];
getValue(): string;
set(value: string): void;
setTabindex(value: number | string | undefined): void;
reset(): void;
focusInput(): void;
}
export interface InputCodeItemSlots {}
export type InputCodeItemClasses = {
main: ConstrClass;
input: string;
sub: string;
};
export type InputPhonePropsBasic<InputPhoneDialCode extends InputPhoneDialCodePropsBasic = InputPhoneDialCodePropsBasic, Mask extends MaskPropsBasic = MaskPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = InputPhoneDialCodePropsInclude<InputPhoneDialCode> & Omit<FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress>, 'caption' | 'counterShow'> & FieldInputPhoneProps & {
countryDefault?: string;
countryBlock?: boolean;
maskAttrs?: ConstrBind<Mask>;
};
export type InputPhoneProps = InputPhonePropsBasic;
export declare const defaultsInputPhone: {};
export type InputPhoneComponents = FieldComponentInclude & MaskComponentInclude & InputPhoneDialCodeComponentInclude;
export type InputPhoneEmits = FieldBasicEmits;
export interface InputPhoneExpose extends FieldBasicExpose {}
export interface InputPhoneSlots extends FieldSlotsInclude {}
export type InputPhoneClasses = {
main: ConstrClass;
};
export type InputPhoneDialCodeComponentInclude = {
inputPhoneDialCode?: object;
};
export type InputPhoneDialCodePropsInclude<InputPhoneDialCode extends InputPhoneDialCodePropsBasic = InputPhoneDialCodePropsBasic> = {
disabled?: boolean;
inputPhoneDialCodeAttrs?: ConstrBind<InputPhoneDialCode>;
};
export type InputPhoneDialCodePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, MenuCountry extends MenuCountryPropsBasic = MenuCountryPropsBasic> = ButtonPropsInclude<Button> & MenuCountryPropsInclude<MenuCountry> & ModelPropsSelected<ListSelectedList> & {
value?: string;
labelType?: 'name' | 'code' | 'none';
iconArrowDown?: IconValue<Icon>;
};
export type InputPhoneDialCodeProps = InputPhoneDialCodePropsBasic;
export declare const defaultsInputPhoneDialCode: {};
export type InputPhoneDialCodeComponents = ButtonComponentInclude & MenuCountryComponentInclude;
export type InputPhoneDialCodeEmits = MenuCountryEmits;
export interface InputPhoneDialCodeExpose {}
export interface InputPhoneDialCodeSlots {}
export type InputPhoneDialCodeClasses = {
main: ConstrClass;
button: string;
menuCountry: string;
};
export type InputSocialComponentInclude = {
inputSocial?: object;
};
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
export type InputSocialComponents = MaskComponentInclude & FieldComponentInclude;
export type InputSocialEmits = FieldBasicEmits;
export interface InputSocialExpose extends FieldBasicExpose {}
export interface InputSocialSlots extends FieldSlotsInclude {}
export type InputSocialClasses = {
main: ConstrClass;
};
export type ListComponentInclude = {
list?: object;
};
export type ListSlotsInclude = {
isSelected: ComputedRef<boolean>;
selectedList: ComputedRef<ListList>;
selectedNames: ComputedRef<ListNames>;
selectedValues: ComputedRef<any[]>;
};
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
export type ListComponents = ListItemComponentInclude & ListGroupComponentInclude & ListMenuComponentInclude & InputComponentInclude;
export type ListEmits = EventClickEmits & {
close: [];
};
export interface ListExpose {
isSelected(): boolean;
getSelectedList(): ListList;
getSelectedNames(): ListNames;
getSelectedValues(): any[];
}
export type ListSlots = Record<string, (props: any) => any>;
export type ListClasses = {
main: ConstrClass;
space: string;
line: string;
subtitle: string;
html: string;
management: string;
group: string;
menu: string;
menuGroup: string;
filterInput: string;
none: string;
};
export type ListGroupComponentInclude = {
listGroup?: object;
};
export type ListGroupSlotsPropsInclude = MotionTransformControlItem & {
open: boolean;
};
export type ListGroupPropsBasic = {
divider?: boolean;
};
export type ListGroupProps = ListGroupPropsBasic & { open?: boolean; divider?: boolean };
export declare const defaultsListGroup: {};
export type ListGroupComponents = MotionTransformComponentInclude;
export type ListGroupEmits = {};
export interface ListGroupExpose {
getOpen(): boolean;
}
export interface ListGroupSlots {
head?(props: ListGroupSlotsPropsInclude): any;
list?(props: any): any;
}
export type ListGroupClasses = {
main: ConstrClass;
head: string;
list: string;
};
export type ListItemComponentInclude = {
listItem?: object;
};
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
export type ListItemComponents = IconComponentInclude & BadgeComponentInclude & ProgressComponentInclude & RippleComponentInclude & {
checkbox?: object;
radio?: object;
};
export type ListItemEmits = EventClickEmits;
export interface ListItemExpose extends EventClickExpose {}
export interface ListItemSlots extends LabelHighlightSlots, DescriptionSlots, PrefixSlots, CaptionSlots, SuffixSlots {
leading?(props: any): any;
trailing?(props: any): any;
body?(props: any): any;
}
export type ListItemClasses = {
main: ConstrClass;
body: string;
context: string;
label: string;
highlight: string;
prefix: string;
caption: string;
description: string;
icon: string;
trailing: string;
control: string;
badge: string;
input: string;
};
export type ListMenuComponentInclude = {
listMenu?: object;
};
export type ListMenuPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic> = WindowPropsInclude<Window>;
export type ListMenuProps = ListMenuPropsBasic & { open?: boolean; axis?: 'x' | 'y'; divider?: boolean };
export declare const defaultsListMenu: {
autoClose: boolean;
};
export type ListMenuComponents = WindowComponentInclude;
export type ListMenuEmits = WindowEmitsInclude;
export interface ListMenuExpose extends WindowExposeInclude {}
export interface ListMenuSlots {
head?(props: WindowControlItem): any;
list?(props: any): any;
}
export type ListMenuClasses = {
main: ConstrClass;
head: string;
list: string;
};
export type MaskTypeItem = GeoDate | 'text' | 'number' | 'number-format' | 'currency';
export type MaskElementInput = HTMLInputElement | undefined;
export type MaskMatchItem = RegExp | string;
export type MaskFractionItem = string | boolean | number;
export type MaskSpecialItem = {
defaultValue?: string;
rubber?: boolean;
transitionChar?: string | string[];
minLength?: number;
maxLength?: number;
match?: MaskMatchItem;
pattern?: FieldPatternItemOrFunction;
view?: string;
};
export type MaskSpecialInfo = {
index: number;
key: number;
char: string;
};
export type MaskSpecialList = Record<string, MaskSpecialItem>;
export type MaskSpecialProp = string | string[] | MaskSpecialList;
export type MaskViewItem = {
className: string;
value: string;
};
export type MaskViewList = MaskViewItem[];
export type MaskList = string | string[];
export type MaskEventData = FieldValidationItem;
export type MaskEventSelection = {
target: HTMLInputElement;
start: number;
end: number;
length: number;
};
export type MaskComponentInclude = {
mask?: object;
};
export type MaskPropsInclude<Mask extends MaskPropsBasic = MaskPropsBasic> = ModelProps & {
name?: string;
value?: string;
mask?: string | ConstrBind<Mask>;
maskVisible?: boolean;
maskNone?: boolean;
currency?: string;
currencyHide?: boolean;
fraction?: MaskFractionItem;
maskAttrs?: ConstrBind<Mask>;
};
export declare const MASK_CHAR_DELETE = "~";
export declare const MASK_VIEW_DEFAULT = "_";
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
export type MaskComponents = {};
export type MaskEmits = {
focus: [event: FocusEvent];
blur: [event: FocusEvent];
keydown: [event: KeyboardEvent];
keyup: [event: KeyboardEvent];
beforeinput: [event: InputEvent];
input: [
event: InputEvent,
value: FieldValidationItem
];
inputLite: [value: FieldValidationItem];
change: [
event: InputEvent,
value: FieldValidationItem
];
changeLite: [value: FieldValidationItem];
paste: [event: ClipboardEvent];
reset: [event: Event];
};
export interface MaskExpose {
getValueBasic(): string;
getValue(): string;
setValue(value: string): boolean;
clear(): boolean;
}
export interface MaskSlots {}
export type MaskClasses = {
main: ConstrClass;
input: string;
character: string;
characterItem: string;
};
export type MenuControlBasic = ListSlotsInclude & {
loading: Ref<boolean>;
previous(): NumberOrStringOrBoolean | undefined;
next(): NumberOrStringOrBoolean | undefined;
};
export type MenuControlItem = MenuControlBasic & WindowControlItem;
export type MenuComponentInclude = {
menu?: object;
};
export interface MenuExposeInclude extends MenuExpose {
getMenuElement(): Ref<ConstrBind<MenuExpose> | undefined>;
}
export type MenuSlotInclude = {
title?(props: MenuControlItem): any;
footer?(props: MenuControlItem): any;
contextTop?(props: MenuControlItem): any;
contextBottom?(props: MenuControlItem): any;
};
export type MenuPropsInclude<Menu extends MenuPropsBasic = MenuPropsBasic> = {
disabled?: boolean;
menuAttrs?: ConstrBind<Menu>;
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
isSelectedByValue?: boolean;
embedded?: boolean;
};
export type MenuProps = MenuPropsBasic & { hideList?: boolean; barsAdaptive?: 'showAlways' };
export declare const defaultsMenu: {
liteThreshold: number;
barsHide: boolean;
barsBackHide: boolean;
tag: string;
step: number;
autoClose: boolean;
};
export type MenuComponents = ListComponentInclude & BarsComponentInclude & WindowComponentInclude;
export type MenuEmits = BarsEmitsInclude & EventClickEmits & WindowEmitsInclude & ModelEmitsSelected & {
updateValue: [value?: NumberOrStringOrBoolean];
clickSlot: [value?: string];
};
export interface MenuExpose extends WindowExposeInclude, ListExpose {
loading(): boolean;
previous(): NumberOrStringOrBoolean | undefined;
next(): NumberOrStringOrBoolean | undefined;
}
export type MenuSlots = ListSlots & MenuSlotInclude & {
control?(props: MenuControlItem): any;
};
export type MenuClasses = {
main: ConstrClass;
bars: string;
list: string;
};
export type MenuButtonPropsTool<Icon extends IconPropsBasic = IconPropsBasic> = {
labelSeparator?: string;
icon?: IconValue<Icon>;
hideLabelValue?: boolean;
hideValueIcon?: boolean;
hideList?: boolean;
showSearch?: boolean;
filterMode?: boolean;
iconArrowDown?: IconValue<Icon>;
};
export type MenuButtonPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = LabelProps & ButtonPropsInclude<Button> & FieldSelectLiteProps & MenuPropsInclude<Menu> & MenuButtonPropsTool<Icon>;
export type MenuButtonProps = MenuButtonPropsBasic;
export declare const defaultsMenuButton: {
labelSeparator: string;
hideLabelValue: boolean;
hideValueIcon: boolean;
};
export type MenuButtonComponents = MenuComponentInclude & ButtonComponentInclude;
export type MenuButtonEmits = FieldBasicEmits;
export interface MenuButtonExpose extends FieldBasicExpose, MenuExposeInclude {}
export interface MenuButtonSlots extends MenuSlotInclude {
default?(props: any): any;
}
export type MenuButtonClasses = {
main: ConstrClass;
label: string;
separator: string;
selected: string;
};
export type MenuChipPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Chip extends ChipPropsBasic = ChipPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = LabelProps & ChipPropsInclude<Chip> & FieldSelectLiteProps & MenuPropsInclude<Menu> & MenuButtonPropsTool<Icon>;
export type MenuChipProps = MenuChipPropsBasic;
export declare const defaultsMenuChip: {
labelSeparator: string;
hideLabelValue: boolean;
hideValueIcon: boolean;
};
export type MenuChipComponents = MenuComponentInclude & ChipComponentInclude;
export type MenuChipEmits = FieldBasicEmits;
export interface MenuChipExpose extends FieldBasicExpose, MenuExposeInclude {}
export interface MenuChipSlots extends MenuSlotInclude {
default?(props: any): any;
}
export type MenuChipClasses = {
main: ConstrClass;
label: string;
separator: string;
selected: string;
};
export type MenuCountryComponentInclude = {
menuCountry?: object;
};
export interface MenuCountryExposeInclude extends MenuExposeInclude {
getMenuCountryElement(): Ref<ConstrBind<MenuCountryExpose> | undefined>;
}
export type MenuCountryPropsInclude<MenuCountry extends MenuCountryPropsBasic = MenuCountryPropsBasic> = {
disabled?: boolean;
menuCountryAttrs?: ConstrBind<MenuCountry>;
};
export type MenuCountryPropsBasic<Menu extends MenuPropsBasic = MenuPropsBasic> = MenuPropsInclude<Menu> & ModelPropsSelected<ListSelectedList> & {
selected?: ListSelectedList;
list?: string[];
showPhoneCode?: boolean;
isSelectedByValue?: boolean;
language?: string;
};
export type MenuCountryProps = MenuCountryPropsBasic;
export declare const defaultsMenuCountry: {
isSelectedByValue: boolean;
};
export type MenuCountryComponents = MenuComponentInclude;
export type MenuCountryEmits = ModelEmitsSelected & EventClickEmits & {
updateValue: [value?: NumberOrStringOrBoolean];
};
export interface MenuCountryExpose extends MenuExposeInclude {}
export interface MenuCountrySlots extends MenuSlotInclude {
control?(props: MenuControlItem): any;
}
export type MenuCountryClasses = {
main: ConstrClass;
};
export type MenuLanguageComponentInclude = {
menuLanguage?: object;
};
export interface MenuLanguageExposeInclude extends MenuExposeInclude {
getMenuLanguageElement(): Ref<ConstrBind<MenuLanguageExpose> | undefined>;
}
export type MenuLanguagePropsInclude<MenuLanguage extends MenuLanguagePropsBasic = MenuLanguagePropsBasic> = {
disabled?: boolean;
menuLanguageAttrs?: ConstrBind<MenuLanguage>;
};
export type MenuLanguagePropsBasic<Menu extends MenuPropsBasic = MenuPropsBasic> = MenuCountryPropsBasic<Menu>;
export type MenuLanguageProps = MenuLanguagePropsBasic;
export declare const defaultsMenuLanguage: {
isSelectedByValue: boolean;
};
export type MenuLanguageComponents = MenuCountryComponents;
export type MenuLanguageEmits = MenuCountryEmits;
export interface MenuLanguageExpose extends MenuCountryExpose {}
export interface MenuLanguageSlots extends MenuCountrySlots {}
export type MenuLanguageClasses = {
main: ConstrClass;
};
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
export type ModalComponents = WindowComponentInclude & BarsComponentInclude & ActionsComponentInclude;
export type ModalEmits = WindowEmitsInclude & BarsEmitsInclude & ActionsEmitsInclude & ModelEmitsOpen;
export interface ModalExpose extends WindowExposeInclude {}
export interface ModalSlots extends WindowSlots {
header(props: WindowControlItem): any;
}
export type ModalClasses = {
main: ConstrClass;
title: string;
header: string;
body: string;
footer: string;
};
export type MotionAxisSelectedValue = string | undefined;
export type MotionAxisClassStatus = {
main: string;
previous: string;
preparation: string;
active: string;
};
export type MotionAxisEmitType = 'start' | 'end';
export type MotionAxisEmitOptions = {
type: MotionAxisEmitType;
selected?: MotionAxisSelectedValue;
previous?: MotionAxisSelectedValue;
preparation?: MotionAxisSelectedValue;
active?: MotionAxisSelectedValue;
};
export type MotionAxisComponentInclude = {
motionAxis?: object;
};
export type MotionAxisEmitsInclude = {
motionAxis: [options: MotionAxisEmitOptions];
};
export type MotionAxisPropsInclude<MotionAxis extends MotionAxisPropsBasic = MotionAxisPropsBasic> = {
selected?: MotionAxisSelectedValue;
motionAxisAttrs?: ConstrBind<MotionAxis>;
};
export type MotionAxisPropsBasic = ModelPropsSelected<MotionAxisSelectedValue> & {
selected?: MotionAxisSelectedValue;
animationHeight?: boolean;
inDom?: boolean;
inDomSlide?: string[];
};
export type MotionAxisProps = MotionAxisPropsBasic & {
axis?: 'x' | 'y' | 'z';
direction?: 'next' | 'back' | 'auto';
};
export declare const defaultsMotionAxis: {
axis: string;
direction: string;
};
export type MotionAxisComponents = {};
export type MotionAxisEmits = ModelEmitsSelected<MotionAxisSelectedValue> & {
motionAxis: [options: MotionAxisEmitOptions];
start: [selected: MotionAxisSelectedValue];
end: [selected: MotionAxisSelectedValue];
};
export interface MotionAxisExpose {
back(): void;
next(): void;
to(selected: MotionAxisSelectedValue): void;
top(selected: MotionAxisSelectedValue): void;
right(selected: MotionAxisSelectedValue): void;
bottom(selected: MotionAxisSelectedValue): void;
left(selected: MotionAxisSelectedValue): void;
down(selected: MotionAxisSelectedValue): void;
up(selected: MotionAxisSelectedValue): void;
}
export type MotionAxisSlots = {
[K in string]?: (props: any) => any;
};
export type MotionAxisClasses = {
main: ConstrClass;
slide: string;
};
export type MotionStickyPosition = {
top: number;
bottom: number;
};
export type MotionStickyPropsBasic = {
elementScroll?: string | HTMLElement | Window;
classActivity?: string;
tag?: string;
};
export type MotionStickyProps = MotionStickyPropsBasic;
export declare const defaultsMotionSticky: {
tag: string;
};
export type MotionStickyComponents = {};
export type MotionStickyEmits = {
sticky: [status: boolean];
};
export interface MotionStickyExpose {}
export interface MotionStickySlots {
default?(props: any): any;
}
export type MotionStickyClasses = {
main: ConstrClass;
};
export type MotionTransformEmitOptions = {
type: 'head' | 'body' | 'top' | 'script';
open: boolean;
};
export type MotionTransformClassList = {
show: string;
open: string;
window: string;
click: string;
none: string;
noneGlobal: string;
close: string;
};
export type MotionTransformStyle = {
contextWidth: string;
contextHeight: string;
headScale: string;
top: string;
left: string;
headWidth: string;
height: string;
scale: string;
headHeight: string;
bodyHeight: string;
};
export type MotionTransformControlItem = {
isOpen: boolean;
isShow: boolean;
classes: MotionTransformClassList;
idControl: string;
idBody: string;
binds: AriaRoleControlPropsInclude;
};
export type MotionTransformComponentInclude = {
motionTransform?: object;
};
export type MotionTransformEmitsInclude = {
transform: MotionTransformEmits['transform'];
transformLite: MotionTransformEmits['transformLite'];
};
export interface MotionTransformExposeInclude extends MotionTransformExpose {
getMotionTransformElement(): ConstrBind<MotionTransformExpose> | undefined;
}
export interface MotionTransformPropsInclude<MotionTransform extends MotionTransformProps = MotionTransformProps> {
open?: boolean;
clickOpen?: boolean;
autoClose?: boolean;
motionTransformAttrs?: ConstrBind<MotionTransform>;
}
export declare const __MOTION_TRANSFORM_TYPE_BODY_NAME = "--sys-type-body";
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
export type MotionTransformProps = MotionTransformPropsBasic & {
section?: boolean;
animationHeadPosition?: 'top' | 'toBottom';
adaptive?: 'planeAlways';
};
export declare const defaultsMotionTransform: {
animationHeadPosition: string;
clickOpen: boolean;
autoClose: boolean;
animationShow: boolean;
tagBody: string;
};
export type MotionTransformComponents = {};
export type MotionTransformEmits = ModelEmitsOpen & {
transform: [
event: Event | undefined,
options: MotionTransformEmitOptions
];
transformLite: [
options: MotionTransformEmitOptions
];
};
export interface MotionTransformExpose {
isShow(): boolean;
getOpen(): boolean;
setOpen(open: boolean): void;
toOpen(): void;
toClose(): void;
toggle(): void;
}
export interface MotionTransformSlots {
head?(props: MotionTransformControlItem): any;
body?(props: MotionTransformControlItem): any;
}
export type MotionTransformClasses = {
main: ConstrClass;
context: string;
head: string;
body: string;
backdrop: string;
scrim: string;
clickNone: string;
};
export type PagePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = BlockPropsBasic<Icon, Header>;
export type PageProps = PagePropsBasic;
export declare const defaultsPage: {
area: string;
tag: string;
tagHeader: string;
};
export type PageComponents = BlockComponents;
export type PageEmits = BlockEmits;
export interface PageExpose extends BlockExpose {}
export interface PageSlots extends BlockSlots {}
export type PageClasses = {
main: ConstrClass;
headline: string;
header: string;
description: string;
body: string;
};
export type PageAreaPropsBasic = BlockProps;
export type PageAreaProps = PageAreaPropsBasic;
export declare const defaultsPageArea: {};
export type PageAreaComponents = {
block: object;
group: object;
page: object;
section: object;
};
export type PageAreaEmits = {};
export interface PageAreaExpose {}
export interface PageAreaSlots extends BlockSlots {}
export type PageAreaClasses = {
main: ConstrClass;
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
export type PaginationProps = PaginationPropsBasic & {
adaptive?: 'lineAlways';
adaptiveMore?: 'lineAlways';
adaptiveMorePrev?: 'lineAlways';
};
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
export type PaginationComponents = ButtonComponentInclude & MenuComponentInclude;
export type PaginationEmits = EventClickEmits & ModelEmits<number> & {
'update:rows': [value: number];
'update:modelRows': [value: number];
'more': [
event: MouseEvent,
options?: EventClickValue
];
'moreLite': [options?: EventClickValue];
'morePrev': [
event: MouseEvent,
options?: EventClickValue
];
'morePrevLite': [options?: EventClickValue];
'rows': [
event: MouseEvent,
options?: EventClickValue
];
'rowsLite': [options?: EventClickValue];
};
export interface PaginationExpose {}
export interface PaginationSlots {
leading?(): any;
info?(): any;
trailing?(): any;
}
export type PaginationClasses = {
main: ConstrClass;
button: string;
navigation: string;
more: string;
morePrev: string;
info: string;
menuRows: string;
menuRowsLabel: string;
ellipsis: string;
spacer: string;
};
export type PlaceholderPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = ImagePropsInclude<Image> & LabelProps & DescriptionProps & ActionsPropsInclude<Actions>;
export type PlaceholderProps = PlaceholderPropsBasic;
export declare const defaultsPlaceholder: {};
export type PlaceholderComponents = ImageComponentInclude & ActionsComponentInclude;
export type PlaceholderEmits = ImageEmitsInclude & ActionsEmitsInclude;
export interface PlaceholderExpose {}
export interface PlaceholderSlots extends LabelSlots, DescriptionSlots {
context?(props: any): any;
}
export type PlaceholderClasses = {
main: ConstrClass;
image: string;
label: string;
description: string;
actions: string;
};
export type ProgressComponentInclude = {
progress?: object;
};
export type ProgressPropsInclude<Progress extends ProgressPropsBasic = ProgressPropsBasic> = {
loading?: boolean | ConstrBind<Progress>;
};
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
export type ProgressComponents = {};
export type ProgressEmits = {};
export interface ProgressExpose {}
export interface ProgressSlots {}
export type ProgressClasses = {
main: ConstrClass;
circle: string;
circleSub: string;
point: string;
};
export type ProgressBarItem = {
index?: string;
label?: string;
value: string | number;
color?: string;
palette?: string;
};
export type ProgressBarList = ProgressBarItem[];
export type ProgressBarInfoItem = ProgressBarItem & {
percent: number;
classes: ConstrClassObject;
style: ConstrStyles;
aria: AriaList;
};
export type ProgressBarInfoList = ProgressBarInfoItem[];
export type ProgressBarPropsBasic = SkeletonPropsInclude & {
focus?: string;
value?: string | number | ProgressBarItem | ProgressBarList;
max?: string | number;
color?: string;
palette?: string;
showLabel?: boolean;
};
export type ProgressBarProps = ProgressBarPropsBasic & { overlay?: boolean };
export declare const defaultsProgressBar: {};
export type ProgressBarComponents = {};
export type ProgressBarEmits = {};
export interface ProgressBarExpose {}
export interface ProgressBarSlots {}
export type ProgressBarClasses = {
main: ConstrClass;
item: string;
itemLabel: string;
itemProgress: string;
};
export type RadioPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = CheckboxPropsBasic<Image, FieldMessage, FieldCounter, Progress>;
export type RadioProps = RadioPropsBasic & {
block?: boolean;
adaptive?: 'rightAlways';
container?: boolean;
required?: boolean;
itemCenter?: boolean;
focus?: boolean;
disabled?: boolean;
};
export declare const defaultsRadio: {
block: boolean;
itemCenter: boolean;
valueVariantHide: string;
};
export type RadioComponents = CheckboxComponents;
export type RadioEmits = CheckboxEmits;
export interface RadioExpose extends CheckboxExpose {}
export interface RadioSlots extends CheckboxSlots {}
export type RadioClasses = {
main: ConstrClass;
input: string;
body: string;
item: string;
icon: string;
loading: string;
info: string;
label: string;
};
export type RippleComponentInclude = {
ripple?: object;
};
export type RipplePropsBasic = {
disabled?: boolean;
};
export type RippleProps = RipplePropsBasic;
export declare const defaultsRipple: {};
export type RippleComponents = {};
export type RippleEmits = {};
export interface RippleExpose {}
export interface RippleSlots {}
export type RippleClasses = {
main: ConstrClass;
item: string;
};
export type ScrollStickyBind = {
ref: Ref<HTMLElement | undefined>;
class: string | undefined;
};
export type ScrollStickyBindItem = ScrollStickyBind & {
binds: ScrollStickyBind;
bindsScroll: ScrollStickyBind;
bindsContext: ScrollStickyBind;
};
export type ScrollStickyComponentInclude = {
scrollSticky?: object;
};
export type ScrollStickyPropsBasic = {
visible?: boolean;
};
export type ScrollStickyProps = ScrollStickyPropsBasic;
export declare const defaultsScrollSticky: {
visible: boolean;
};
export type ScrollStickyComponents = {};
export type ScrollStickyEmits = {};
export interface ScrollStickyExpose {}
export interface ScrollStickySlots {
default?(props: {
onResize(): void;
}): any;
context?(props: ScrollStickyBindItem): any;
scroll?(props: ScrollStickyBindItem): any;
}
export type ScrollStickyClasses = {
main: ConstrClass;
context: string;
scroll: string;
};
export type ScrollbarEdgeType = 'top' | 'bottom';
export type ScrollbarComponentInclude = {
scrollbar?: object;
};
export type ScrollbarEmitsInclude = {
scrollbarTop: ScrollbarEmits['top'];
scrollbarReachTop: ScrollbarEmits['reachTop'];
scrollbarLeaveTop: ScrollbarEmits['leaveTop'];
scrollbarBottom: ScrollbarEmits['bottom'];
scrollbarReachBottom: ScrollbarEmits['reachBottom'];
scrollbarLeaveBottom: ScrollbarEmits['leaveBottom'];
scrollbarEdge: ScrollbarEmits['edge'];
};
export type ScrollbarPropsInclude<Scrollbar extends ScrollbarPropsBasic = ScrollbarPropsBasic> = {
scrollbarAttrs?: ConstrBind<Scrollbar>;
};
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
export type ScrollbarComponents = {};
export type ScrollbarEmits = {
top: [isTop: boolean];
reachTop: [];
leaveTop: [];
bottom: [isBottom: boolean];
reachBottom: [];
leaveBottom: [];
edge: [isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType];
};
export interface ScrollbarExpose {}
export interface ScrollbarSlots {
default?(props: any): any;
}
export type ScrollbarClasses = {
main: ConstrClass;
};
export type SectionPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = BlockPropsBasic<Icon, Header>;
export type SectionProps = SectionPropsBasic;
export declare const defaultsSection: {
area: string;
tag: string;
tagHeader: string;
};
export type SectionComponents = BlockComponents;
export type SectionEmits = BlockEmits;
export interface SectionExpose extends BlockExpose {}
export interface SectionSlots extends BlockSlots {}
export type SectionClasses = {
main: ConstrClass;
headline: string;
header: string;
description: string;
body: string;
};
export type SegmentControlPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic> = TabsNavigationPropsBasic<TabItem>;
export type SegmentControlProps = SegmentControlPropsBasic & { divider?: boolean };
export declare const defaultsSegmentControl: {
horizontalScrollAlign: boolean;
horizontalScrollBleed: boolean;
};
export type SegmentControlComponents = HorizontalScrollComponentInclude & SegmentControlItemComponentInclude;
export type SegmentControlEmits = TabsNavigationEmits;
export interface SegmentControlExpose extends TabsNavigationExpose {}
export interface SegmentControlSlots extends TabsNavigationSlots {}
export type SegmentControlClasses = {
main: ConstrClass;
item: string;
};
export type SegmentControlItemComponentInclude = {
segmentControlItem?: object;
};
export type SegmentControlItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic> = TabItemPropsBasic<Icon, Badge>;
export type SegmentControlItemProps = SegmentControlItemPropsBasic & {
focus?: boolean;
open?: boolean;
selected?: boolean;
readonly?: boolean;
disabled?: boolean;
adaptive?: 'iconAlways' | 'auto';
container?: boolean;
};
export declare const defaultsSegmentControlItem: {};
export type SegmentControlItemComponents = TabItemComponents;
export type SegmentControlItemEmits = TabItemEmits;
export interface SegmentControlItemExpose extends TabItemExpose {}
export interface SegmentControlItemSlots extends TabItemSlots {}
export type SegmentControlItemClasses = {
main: ConstrClass;
label: string;
icon: string;
badge: string;
};
export type SelectPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldSelectProps & MenuPropsInclude<Menu> & {
editValue?: boolean;
hideList?: boolean;
showSearch?: boolean;
filterMode?: boolean;
iconArrowDown?: IconValue<Icon>;
};
export type SelectProps = SelectPropsBasic;
export declare const defaultsSelect: {};
export type SelectComponents = MenuComponentInclude & FieldComponentInclude & SelectValueComponentInclude;
export type SelectEmits = FieldBasicEmits;
export interface SelectExpose extends FieldBasicExpose, MenuExposeInclude {}
export interface SelectSlots extends FieldSlotsInclude, MenuSlotInclude {}
export type SelectClasses = {
main: ConstrClass;
};
export type SelectValueComponentInclude = {
selectValue?: object;
};
export interface SelectValuePropsInclude {
disabled?: boolean;
selectValueAttrs?: ConstrBind<SelectValueProps>;
}
export type SelectValuePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Chip extends ChipPropsBasic = ChipPropsBasic> = EnabledProps & ChipPropsInclude<Chip> & {
placeholder?: string;
value?: ListList;
multiple?: boolean;
iconShow?: boolean;
iconAttrs?: ConstrBind<Icon>;
iconCancel?: IconValue<Icon>;
};
export type SelectValueProps = SelectValuePropsBasic;
export declare const defaultsSelectValue: {};
export type SelectValueComponents = ChipComponentInclude;
export type SelectValueEmits = EventClickEmits;
export interface SelectValueExpose {}
export interface SelectValueSlots {}
export type SelectValueClasses = {
main: ConstrClass;
item: string;
trailing: string;
};
export interface SelectableAreaEventParameters {
items: HTMLElement[];
itemsSelected: HTMLElement[];
selected: string[];
focus?: string;
}
export type SelectableAreaControl = {
className: string;
classSelection: string;
classClick: string;
onClick: (event: MouseEvent | TouchEvent) => void;
selected: string[];
};
export type SelectableAreaClassesList = {
click: string;
selected: string;
show: string;
body: string;
};
export type SelectableAreaPropsBasic = ModelPropsSelected & {
disabled?: boolean;
active?: boolean;
selected?: string | string[];
tag?: string;
};
export type SelectableAreaProps = SelectableAreaPropsBasic;
export declare const defaultsSelectableArea: {
tag: string;
};
export type SelectableAreaComponents = {};
export type SelectableAreaEmits = ModelEmitsSelected & {
selected: [parameters: SelectableAreaEventParameters];
};
export interface SelectableAreaExpose {
reset: () => void;
setSelected: (value: string | string[]) => void;
}
export interface SelectableAreaSlots {
default?(props: SelectableAreaControl): any;
}
export type SelectableAreaClasses = {
main: ConstrClass;
item: string;
square: string;
};
export type SkeletonClassesList = {
classText: string;
classTextVariant: string;
classBackground: string;
classBackgroundAfter: string;
classBackgroundBefore: string;
classBackgroundVariant: string;
classBorder: string;
classBorderVariant: string;
classNone: string;
};
export type SkeletonPropsInclude = {
isSkeleton?: boolean;
};
export type SkeletonPropsBasic = {};
export type SkeletonProps = SkeletonPropsBasic & { active?: boolean };
export declare const defaultsSkeleton: {};
export type SkeletonComponents = {};
export type SkeletonEmits = {};
export interface SkeletonExpose {
isActive(): boolean;
}
export interface SkeletonSlots {
default?(props: SkeletonClassesList): any;
}
export type SkeletonClasses = {
main: ConstrClass;
};
export type SkeletonItemPropsBasic = {
tag?: string | any;
itemAttrs?: Record<string, any>;
label?: string | number;
length?: string | number | [number, number];
};
export type SkeletonItemProps = SkeletonItemPropsBasic & {
text?: boolean;
textVariant?: boolean;
background?: boolean;
backgroundVariant?: boolean;
border?: boolean;
borderVariant?: boolean;
};
export declare const defaultsSkeletonItem: {
tag: string;
length: number;
};
export type SkeletonItemComponents = {};
export type SkeletonItemEmits = {};
export interface SkeletonItemExpose {}
export interface SkeletonItemSlots {
default?(props: any): any;
}
export type SkeletonItemClasses = {
main: ConstrClass;
};
export type SnackbarValue = {
component?: any;
data?: ConstrBind<SnackbarItemPropsBasic>;
highPriority?: boolean;
delay?: number;
value?: string;
resumableTimer?: ResumableTimer;
};
export type SnackbarList = SnackbarValue[];
export type SnackbarPropsBasic = TextNotificationsPropsInclude & {
delay?: number;
};
export type SnackbarProps = SnackbarPropsBasic & {
full?: boolean;
all?: boolean;
limit?: '1' | '2' | '4' | '6' | '8';
vertical?: 'top' | 'bottom';
horizontal?: 'right' | 'left' | 'block';
origin?: 'topToBottom' | 'bottomToTop' | 'rightToLeft' | 'leftToRight';
};
export declare const defaultsSnackbar: {
delay: number;
};
export type SnackbarComponents = SnackbarItemComponentInclude;
export type SnackbarEmits = {
show: [value: string, item: SnackbarValue];
hide: [value: string, item: SnackbarValue];
};
export interface SnackbarExpose {
isItem(): boolean;
add(item: SnackbarValue): void;
remove(value: string): void;
clear(): void;
}
export interface SnackbarSlots {}
export type SnackbarClasses = {
main: ConstrClass;
item: string;
space: string;
priority: string;
};
export type SnackbarItemComponentInclude = {
snackbarItem?: object;
};
export type SnackbarItemPropsInclude<SnackbarItemProps extends SnackbarItemPropsBasic = SnackbarItemPropsBasic> = {
snackbarItemAttrs?: ConstrBind<SnackbarItemProps>;
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
export type SnackbarItemProps = SnackbarItemPropsBasic & {
success?: boolean;
error?: boolean;
};
export declare const defaultsSnackbarItem: {
area: string;
closeButton: boolean;
};
export type SnackbarItemComponents = IconComponentInclude & ButtonComponentInclude & ActionsComponentInclude;
export type SnackbarItemEmits = ActionsEmitsInclude & EventClickEmits & {
close: [value: string | undefined];
};
export interface SnackbarItemExpose {}
export interface SnackbarItemSlots extends LabelSlots, DescriptionSlots {
body?(props: any): any;
}
export type SnackbarItemClasses = {
main: ConstrClass;
tool: string;
icon: string;
trailing: string;
context: string;
label: string;
description: string;
body: string;
button: string;
close: string;
actions: string;
};
export type SwitchPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = CheckboxPropsBasic<Image, FieldMessage, FieldCounter, Progress>;
export type SwitchProps = SwitchPropsBasic & {
block?: boolean;
adaptive?: 'rightAlways';
container?: boolean;
required?: boolean;
itemCenter?: boolean;
focus?: boolean;
disabled?: boolean;
};
export declare const defaultsSwitch: {
block: boolean;
itemCenter: boolean;
valueVariantHide: string;
};
export type SwitchComponents = CheckboxComponents;
export type SwitchEmits = CheckboxEmits;
export interface SwitchExpose extends CheckboxExpose {}
export interface SwitchSlots extends CheckboxSlots {}
export type SwitchClasses = {
main: ConstrClass;
input: string;
body: string;
item: string;
icon: string;
loading: string;
info: string;
label: string;
track: string;
};
export type TabItemComponentInclude = {
tabItem?: object;
};
export type TabItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic> = LabelProps & IconPropsInclude<Icon> & BadgePropsInclude<Badge> & SkeletonPropsInclude & EnabledProps & EventClickProps & AriaRolePropsInclude & {
index?: any;
href?: string;
tag?: 'button' | 'a' | 'span' | 'li' | 'div' | string;
};
export type TabItemProps = TabItemPropsBasic & {
focus?: boolean;
open?: boolean;
selected?: boolean;
readonly?: boolean;
disabled?: boolean;
adaptive?: 'iconAlways' | 'auto';
container?: boolean;
};
export declare const defaultsTabItem: {
role: string;
};
export type TabItemComponents = IconComponentInclude & BadgeComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type TabItemEmits = EventClickEmits;
export interface TabItemExpose extends EventClickExpose {}
export interface TabItemSlots extends LabelSlots {}
export type TabItemClasses = {
main: ConstrClass;
label: string;
icon: string;
badge: string;
};
export type TableColumnCol = {
'key': string;
'style'?: ConstrStyles;
'data-col': string;
};
export type TableHeader<TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic> = Record<string, TableRecordValue<TableHeaderItem>>;
export type TableHeaders<TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic> = TableHeader<TableHeaderItem>[];
export type TableList<TableItem extends TableItemPropsBasic = TableItemPropsBasic> = (Partial<Record<string, TableRecordValue<TableItem>>> | Record<string, any> | any)[];
export type TablePropsBasic<TableItem extends TableItemPropsBasic = TableItemPropsBasic, TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic, TableRecord extends TableRecordPropsBasic<TableItem, TableHeaderItem> = TableRecordPropsBasic<TableItem, TableHeaderItem>> = CaptionProps & SearchPropsInclude<TableItem> & SortPropsInclude<TableItem> & PaginationPropsInclude<TableItem> & StickyScrollBottomPropsInclude & TableRecordPropsInclude<TableItem, TableRecord> & {
columns?: string[];
columnsWidth?: Record<string, string | number>;
header?: TableHeader<TableHeaderItem> | TableHeaders<TableHeaderItem>;
foot?: TableHeader<TableHeaderItem> | TableHeaders<TableHeaderItem>;
list?: TableList<TableItem>;
page?: number | string;
rows?: number | string;
};
export type TableProps = TablePropsBasic & {
headerTop?: boolean;
captionBottom?: boolean;
bleed?: boolean;
};
export declare const defaultsTable: {
lazy: boolean;
page: number;
stickyScrollBottom: boolean;
};
export type TableComponents = TableRecordComponentInclude & ScrollStickyComponentInclude;
export type TableEmits = TableRecordEmits;
export type TableExpose = {};
export type TableSlots<Item = any, Value = any> = CaptionSlots & TableRecordItemSlots<Item, Value> & {
header?(props: {
columns: string[];
}): any;
foot?(props: {
columns: string[];
}): any;
items?(props: {
columns: string[];
}): any;
body?(props: any): any;
};
export type TableClasses = {
main: ConstrClass;
table: string;
colgroup: string;
col: string;
header: string;
foot: string;
items: string;
caption: string;
};
export type TableFlexPropsBasic<TableItem extends TableFlexItemPropsBasic = TableFlexItemPropsBasic, TableHeaderItem extends TableFlexHeaderItemPropsBasic = TableFlexHeaderItemPropsBasic, TableRecord extends TableFlexRecordPropsBasic<TableItem, TableHeaderItem> = TableFlexRecordPropsBasic<TableItem, TableHeaderItem>> = TablePropsBasic<TableItem, TableHeaderItem, TableRecord>;
export type TableFlexProps = TableFlexPropsBasic & {
headerTop?: boolean;
captionBottom?: boolean;
bleed?: boolean;
};
export declare const defaultsTableFlex: {
lazy: boolean;
page: number;
stickyScrollBottom: boolean;
};
export type TableFlexComponents = TableComponents;
export type TableFlexEmits = TableEmits;
export interface TableFlexExpose extends TableExpose {}
export type TableFlexSlots<Item = any, Value = any> = TableSlots<Item, Value>;
export type TableFlexClasses = {
main: ConstrClass;
table: string;
colgroup: string;
col: string;
header: string;
foot: string;
items: string;
caption: string;
};
export type TableFlexHeaderItemPropsBasic<Chip extends ChipPropsBasic = ChipPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Tooltip extends TooltipProps = TooltipProps> = TableHeaderItemPropsBasic<Chip, Icon, Tooltip>;
export type TableFlexHeaderItemProps = TableFlexHeaderItemPropsBasic & {
disabled?: boolean;
selected?: boolean;
align?: 'left' | 'center' | 'right';
alignVertical?: 'top' | 'center' | 'bottom';
dividerX?: boolean;
dividerY?: boolean;
labelClamp?: boolean;
stickyTop?: boolean;
stickyLeft?: boolean;
};
export declare const defaultsTableFlexHeaderItem: {
align: string;
alignVertical: string;
tag: string;
};
export type TableFlexHeaderItemComponents = TableHeaderItemComponents;
export type TableFlexHeaderItemEmits = TableHeaderItemEmits;
export interface TableFlexHeaderItemExpose extends TableHeaderItemExpose {}
export interface TableFlexHeaderItemSlots extends TableHeaderItemSlots {}
export type TableFlexHeaderItemClasses = {
main: ConstrClass;
label: string;
description: string;
body: string;
sort: string;
tooltip: string;
};
export type TableFlexItemPropsBasic = TableItemPropsBasic;
export type TableFlexItemProps = TableFlexItemPropsBasic & {
disabled?: boolean;
selected?: boolean;
align?: 'left' | 'center' | 'right';
alignVertical?: 'top' | 'center' | 'bottom';
dividerX?: boolean;
dividerY?: boolean;
labelClamp?: boolean;
stickyTop?: boolean;
stickyLeft?: boolean;
};
export declare const defaultsTableFlexItem: {
align: string;
alignVertical: string;
tag: string;
};
export type TableFlexItemComponents = TableItemComponents;
export type TableFlexItemEmits = TableItemEmits;
export interface TableFlexItemExpose extends TableItemExpose {}
export interface TableFlexItemSlots extends TableItemSlots {}
export type TableFlexItemClasses = {
main: ConstrClass;
label: string;
description: string;
};
export type TableFlexRecordPropsBasic<TableItem extends TableFlexItemPropsBasic = TableFlexItemPropsBasic, TableHeaderItem extends TableFlexHeaderItemPropsBasic = TableFlexHeaderItemPropsBasic> = TableRecordPropsBasic<TableItem, TableHeaderItem> & {
lazy?: boolean;
defaultHeight?: string | number;
};
export type TableFlexRecordProps = TableFlexRecordPropsBasic & {
disabled?: boolean;
selected?: boolean;
};
export declare const defaultsTableFlexRecord: {
lazy: boolean;
};
export type TableFlexRecordComponents = TableRecordComponents;
export type TableFlexRecordEmits = TableRecordEmits;
export interface TableFlexRecordExpose extends TableRecordExpose {}
export type TableFlexRecordSlots = TableRecordSlots;
export type TableFlexRecordClasses = {
main: ConstrClass;
};
export type TableHeaderItemComponentInclude = {
tableHeaderItem?: object;
};
export type TableHeaderItemPropsInclude<TableHeaderItemProps extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic> = TableItemPropsInclude<TableHeaderItemProps>;
export type TableHeaderItemPropsBasic<Chip extends ChipPropsBasic = ChipPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Tooltip extends TooltipProps = TooltipProps> = TableItemPropsBasic & ChipPropsInclude<Chip> & TooltipPropsInclude<Tooltip> & {
scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
showSort?: boolean;
sortColumn?: string | number;
sortDir?: SortDir;
iconTooltip?: string | ConstrBind<Icon>;
iconSort?: string | ConstrBind<Icon>;
iconArrowUp?: string | ConstrBind<Icon>;
iconArrowDown?: string | ConstrBind<Icon>;
};
export type TableHeaderItemProps = TableHeaderItemPropsBasic & {
disabled?: boolean;
selected?: boolean;
align?: 'left' | 'center' | 'right';
alignVertical?: 'top' | 'center' | 'bottom';
dividerX?: boolean;
dividerY?: boolean;
labelClamp?: boolean;
stickyTop?: boolean;
stickyLeft?: boolean;
};
export declare const defaultsTableHeaderItem: {
align: string;
alignVertical: string;
tag: string;
scope: string;
};
export type TableHeaderItemComponents = ChipComponentInclude & IconComponentInclude & TooltipComponentInclude;
export type TableHeaderItemEmits = {
sort: [item: SortColumnItem];
};
export interface TableHeaderItemExpose {}
export interface TableHeaderItemSlots extends TableItemSlots {
tooltip?(): any;
}
export type TableHeaderItemClasses = {
main: ConstrClass;
label: string;
description: string;
body: string;
sort: string;
tooltip: string;
};
export type TableItemComponentInclude = {
tableItem?: object;
};
export type TableItemPropsInclude<TableItem extends TableItemPropsBasic = TableItemPropsBasic> = SkeletonPropsInclude & {
selected?: boolean;
disabled?: boolean;
stickyTop?: boolean;
stickyLeft?: string[];
tableItemAttrs?: ConstrBind<TableItem>;
tableItemColumnAttrs?: Record<string, ConstrBind<TableItem>>;
};
export type TableItemPropsBasic = LabelProps & DescriptionProps & SkeletonPropsInclude & {
value?: string;
tag?: string;
colspan?: string | number;
rowspan?: string | number;
keyItem?: string;
index?: string | number;
};
export type TableItemProps = TableItemPropsBasic & {
disabled?: boolean;
selected?: boolean;
align?: 'left' | 'center' | 'right';
alignVertical?: 'top' | 'center' | 'bottom';
dividerX?: boolean;
dividerY?: boolean;
labelClamp?: boolean;
stickyTop?: boolean;
stickyLeft?: boolean;
};
export declare const defaultsTableItem: {
align: string;
alignVertical: string;
tag: string;
};
export type TableItemComponents = {};
export type TableItemEmits = {};
export interface TableItemExpose {}
export interface TableItemSlots extends LabelSlots, DescriptionSlots {
context?(): any;
}
export type TableItemClasses = {
main: ConstrClass;
label: string;
description: string;
};
export type TableRecordValue<TableItem extends TableItemPropsBasic = TableItemPropsBasic> = string | number | ConstrBind<TableItem>;
export type TableRecordItemSlotProps<Item = any, Value = any> = {
item: Item;
key: string;
index: string;
value: Value;
slotsName: string;
classes: {
label: string;
description: string;
};
};
export type TableRecordItemSlot<Item = any, Value = any> = (props: TableRecordItemSlotProps<Item, Value>) => any;
export type TableRecordItemSlots<Item = any, Value = any> = {
[key: string]: TableRecordItemSlot<Item, Value> | undefined;
};
export type TableRecordComponentInclude = {
tableRecord?: object;
};
export type TableRecordPropsInclude<TableItem extends TableItemPropsBasic = TableItemPropsBasic, TableRecord extends TableRecordPropsBasic<TableItem> = TableRecordPropsBasic<TableItem>> = Omit<TableItemPropsInclude<TableItem>, 'disabled' | 'selected' | 'stickyTop'> & {
selected?: string | string[];
stickyTop?: string[];
keyValue?: string;
lazy?: boolean;
defaultHeight?: string | number;
tableRecordAttrs?: ConstrBind<TableRecord>;
tableRowAttrs?: Record<string, ConstrBind<TableRecord>>;
};
export type TableRecordPropsBasic<TableItem extends TableItemPropsBasic = TableItemPropsBasic, TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic> = TableItemPropsInclude<TableItem> & {
item?: Record<string, TableRecordValue<TableItem | TableHeaderItem> | any>;
columns?: string[];
isHeader?: boolean;
index?: string;
};
export type TableRecordProps = TableRecordPropsBasic & {
disabled?: boolean;
selected?: boolean;
};
export declare const defaultsTableRecord: {};
export type TableRecordComponents = TableHeaderItemComponentInclude & TableItemComponentInclude;
export type TableRecordEmits = TableHeaderItemEmits;
export interface TableRecordExpose {}
export type TableRecordSlots = TableRecordItemSlots;
export type TableRecordClasses = {
main: ConstrClass;
};
export type TabsPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic, TabsNavigation extends TabsNavigationPropsBasic = TabsNavigationPropsBasic, MotionAxis extends MotionAxisPropsBasic = MotionAxisPropsBasic> = TabsNavigationPropsInclude<TabItem, TabsNavigation> & MotionAxisPropsInclude<MotionAxis> & ModelPropsSelected<ListSelectedList>;
export type TabsProps = TabsPropsBasic;
export declare const defaultsTabs: {};
export type TabsComponents = TabsNavigationComponentInclude & MotionAxisComponentInclude;
export type TabsEmits = TabsNavigationEmits & MotionAxisEmitsInclude;
export interface TabsExpose extends EventClickExpose {}
export type TabsSlots = MotionAxisSlots;
export type TabsClasses = {
main: ConstrClass;
slide: string;
};
export type TabsNavigationIdsList = Record<NumberOrString, string>;
export type TabsNavigationComponentInclude = {
tabsNavigation?: object;
};
export type TabsNavigationPropsInclude<TabItem extends TabItemPropsBasic = TabItemPropsBasic, TabsNavigation extends TabsNavigationPropsBasic = TabsNavigationPropsBasic> = {
tabs?: ListRecord<TabItem> | ConstrBind<TabsNavigation>;
tabItemAttrs?: ConstrBind<TabItem>;
tabsNavigationAttrs?: ConstrBind<TabsNavigation>;
};
export type TabsNavigationPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic> = HorizontalScrollPropsInclude & ModelPropsSelected<ListSelectedList> & {
selected?: ListSelectedList;
list?: ListRecord<TabItem>;
tag?: TabItem['tag'];
keyLabel?: string;
keyValue?: string;
itemAttrs?: ConstrBind<TabItem>;
};
export type TabsNavigationProps = TabsNavigationPropsBasic & { divider?: boolean };
export declare const defaultsTabsNavigation: {
horizontalScrollBleed: boolean;
horizontalScrollAlign: string;
};
export type TabsNavigationComponents = HorizontalScrollComponentInclude & TabItemComponentInclude;
export type TabsNavigationEmits = EventClickEmits & ModelEmitsSelected<ListSelectedList>;
export interface TabsNavigationExpose {
ids(): TabsNavigationIdsList;
}
export interface TabsNavigationSlots {
leading?(props: any): any;
trailing?(props: any): any;
}
export type TabsNavigationClasses = {
main: ConstrClass;
item: string;
};
export type TextDescriptionPropsBasic = DescriptionProps & {
tag?: string;
};
export type TextDescriptionProps = TextDescriptionPropsBasic;
export declare const defaultsTextDescription: {
tag: string;
};
export type TextDescriptionComponents = {};
export type TextDescriptionEmits = {};
export interface TextDescriptionExpose {}
export interface TextDescriptionSlots extends DescriptionSlots {}
export type TextDescriptionClasses = {
main: ConstrClass;
description: string;
};
export type TextLabelPropsBasic = LabelProps & {
tag?: string;
};
export type TextLabelProps = TextLabelPropsBasic;
export declare const defaultsTextLabel: {
tag: string;
};
export type TextLabelComponents = {};
export type TextLabelEmits = {};
export interface TextLabelExpose {}
export interface TextLabelSlots extends LabelSlots {}
export type TextLabelClasses = {
main: ConstrClass;
label: string;
};
export type TextareaPropsBasic<TextareaAutosize extends TextareaAutosizePropsBasic = TextareaAutosizePropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = TextareaAutosizePropsInclude<TextareaAutosize> & FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldTextareaProps<string>;
export type TextareaProps = TextareaPropsBasic;
export declare const defaultsTextarea: {
cancel: string;
autosize: boolean;
};
export type TextareaComponents = FieldComponentInclude & TextareaAutosizeComponentInclude;
export type TextareaEmits = FieldBasicEmits;
export interface TextareaExpose extends FieldBasicExpose {}
export interface TextareaSlots extends FieldSlotsInclude {}
export type TextareaClasses = {
main: ConstrClass;
};
export type TextareaAutosizeComponentInclude = {
textareaAutosize?: object;
};
export type TextareaAutosizePropsInclude<TextareaAutosize extends TextareaAutosizePropsBasic = TextareaAutosizePropsBasic> = {
textareaAttrs?: ConstrBind<TextareaAutosize>;
autosize?: boolean;
};
export type TextareaAutosizePropsBasic = {
value?: string;
inputAttrs?: Record<string, any>;
};
export type TextareaAutosizeProps = TextareaAutosizePropsBasic & { autosize?: boolean };
export declare const defaultsTextareaAutosize: {
autosize: boolean;
};
export type TextareaAutosizeComponents = {};
export type TextareaAutosizeEmits = {
input: [event: InputEvent];
};
export interface TextareaAutosizeExpose {
getValue(): string;
}
export interface TextareaAutosizeSlots {}
export type TextareaAutosizeClasses = {
main: ConstrClass;
clone: string;
};
export type TooltipControlBinds = AriaList & {
class: string;
onClick: () => void;
onMouseover: (event: MouseEvent) => void;
onMouseout: (event: MouseEvent) => void;
};
export type TooltipControl = TooltipControlBinds & {
open: Ref<boolean>;
binds: Record<string, any>;
};
export type TooltipComponentInclude = {
tooltip?: object;
};
export type TooltipSlotsInclude = {
tooltip?(): any;
};
export type TooltipPropsInclude<Tooltip extends TooltipProps = TooltipProps> = {
tooltipLabel?: string;
tooltipDescription?: string;
tooltipAttrs?: ConstrBind<Tooltip>;
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
export type TooltipProps = TooltipPropsBasic & { interactive?: boolean; embedded?: boolean };
export declare const defaultsTooltip: {
interactive: boolean;
indent: number;
delay: number;
delayHide: number;
};
export type TooltipComponents = ArrowComponentInclude;
export type TooltipEmits = {
tooltip: [open: boolean];
};
export interface TooltipExpose {
toggle(open: boolean, flash?: boolean): Promise<void>;
}
export interface TooltipSlots extends LabelSlots, DescriptionSlots {
control?(props: TooltipControl): any;
body?(): any;
}
export type TooltipClasses = {
main: ConstrClass;
label: string;
description: string;
body: string;
};
export declare enum WindowStatusItem {
display = "display",
preparation = "preparation",
flash = "flash",
open = "open",
hide = "hide",
close = "close"
}
export declare enum WindowStatusControlItem {
block = "block",
blockChildren = "blockChildren",
blockOther = "blockOther",
close = "close",
static = "static",
controlStatic = "controlStatic",
controlOpenOnly = "controlOpenOnly",
controlActive = "controlActive",
persistent = "persistent"
}
export type WindowEmitOptions = {
id: string;
element: HTMLDivElement;
control: HTMLElement;
open: boolean;
};
export type WindowClassesList = {
block: string;
blockChildren: string;
blockOther: string;
close: string;
static: string;
control: string;
controlId: string;
controlStatic: string;
controlOpenOnly: string;
controlActive: string;
persistent: string;
};
export type WindowEventClickType = MouseEvent & TouchEvent | KeyboardEvent | MouseEvent | TouchEvent;
export type WindowEventClick = (event: WindowEventClickType) => Promise<void>;
export type WindowControlBasic = {
classesWindow: WindowClassesList;
};
export type WindowControlItem = WindowControlBasic & {
class: string;
open: Ref<boolean>;
onClick: WindowEventClick;
onKeydown: WindowEventClick;
onContextmenu: WindowEventClick;
binds: AriaList & {
class: string;
onClick: WindowEventClick;
onKeydown: WindowEventClick;
onContextmenu: WindowEventClick;
};
};
export type WindowComponentInclude = {
window?: object;
};
export type WindowEmitsInclude = {
window: [options: WindowEmitOptions];
};
export interface WindowExposeInclude extends WindowExpose {
getWindowElement(): ConstrBind<WindowExpose> | undefined;
}
export type WindowPropsInclude<Window extends WindowPropsBasic = WindowPropsBasic> = {
disabled?: boolean;
autoClose?: boolean;
windowAttrs?: ConstrBind<Window>;
};
export declare const __WINDOW_TYPE_BODY_NAME = "--sys-type-body";
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
export type WindowComponents = ScrollbarComponentInclude & ButtonComponentInclude & ImageComponentInclude;
export type WindowEmits = ScrollbarEmitsInclude & ImageEmitsInclude & ModelEmitsOpen & {
window: [options: WindowEmitOptions];
};
export interface WindowExpose {
getId(): string | undefined;
getOpen(): boolean;
getControl(): WindowControlItem | undefined;
setOpen(open: boolean): Promise<void>;
toOpen(): Promise<void>;
toClose(): Promise<void>;
toggle(): Promise<void>;
}
export interface WindowSlots {
control?(props: WindowControlItem): any;
title?(props: WindowControlItem): any;
footer?(props: WindowControlItem): any;
default?(props: WindowControlItem): any;
}
export type WindowClasses = {
main: ConstrClass;
body: string;
bodyGroup: string;
bodyContext: string;
control: string;
image: string;
close: string;
teleport: string;
};
export declare function getAreaValue(): string | undefined;
export declare const getClassTagAStatic: (design: string) => string;
export declare function setAreaValue(value: string | Ref<string>): void;
export declare const AREA_PROP_NAME = "UI_AREA_VALUE";
export type AreaPropsInclude = {
area?: string;
};
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
export interface CaptionSlots {
caption?(props: any): any;
}
export type CaptionProps = {
caption?: string | number;
captionDecorative?: boolean;
};
export type ClientOnlyPropsInclude = {
clientOnly?: boolean;
};
export type ComponentIncludeProps<Props extends Record<string, any>> = Readonly<ConstrBind<Props>> | (() => ConstrBind<Props>) | undefined;
export type ComponentIncludePropsAttrs<Props extends Record<string, any>> = keyof Props | undefined;
export type ComponentIncludeExtra<PropsExtra extends Record<string, any> = Record<string, any>> = RefOrNormalOrFunction<Partial<ConstrBind<PropsExtra>>>;
export type ComponentIncludeExposeItem<V = any> = {
name: string;
method?: string;
defaultValue?: V;
type?: 'string' | 'boolean' | 'number';
};
export interface DescriptionSlots {
description?(props: any): any;
}
export type DescriptionProps = {
description?: string | number;
descriptionId?: string;
};
export type EnabledProps = {
readonly?: boolean;
disabled?: boolean;
};
export declare const CONSTRUCTOR_ERROR_GROUP = "constructor";
export type EventClickValue = {
type: string;
value: any;
detail: Record<string, any> | undefined;
};
export type EventClickEmits = {
click: [
event: MouseEvent,
value: EventClickValue
];
clickLite: [
value: EventClickValue
];
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
export type FieldType = 'text' | 'search' | 'number' | 'number-format' | 'currency' | 'email' | 'password' | 'datetime' | 'date' | 'year-month' | 'time' | 'hour-minute' | 'tel' | 'url' | 'checkbox' | 'radio';
export type FieldElementDom = HTMLInputElement | HTMLTextAreaElement;
export type FieldElementInput = FieldElementDom | HTMLElement | Record<string, any> | undefined;
export type FieldValidityCodeItem = {
[K in keyof ValidityState]?: string;
};
export type FieldValidityCode = string | FieldValidityCodeItem;
export type FieldMaskItem = {
group: string;
value: string;
maxLength: number;
full: boolean;
end: boolean;
chars: string[];
};
export type FieldMasks = Record<string, FieldMaskItem>;
export type FieldPatternElement = Partial<HTMLInputElement>;
export type FieldPatternItem = string | FieldPatternElement;
export type FieldPatternItemOrFunction = FieldPatternItem | ((item: FieldMasks) => FieldPatternItem);
export type FieldPatternList = Record<string, FieldPatternItemOrFunction>;
export type FieldMatchItem = {
name?: string | HTMLInputElement;
validationMessage?: string;
};
export type FieldMatch = string | HTMLInputElement | FieldMatchItem;
export type FieldCheckMain = {
group?: string;
input?: FieldElementDom;
pattern?: FieldPatternItemOrFunction;
};
export type FieldCheckItem<Value = any> = FieldCheckMain & {
check(value: Value): FieldValidationItem<Value>;
};
export type FieldCheckList = Record<string, FieldCheckItem>;
export type FieldValidationItem<Value = any> = FieldCheckMain & {
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
type?: 'text' | 'search' | 'number' | 'number-format' | 'currency' | 'email' | 'password' | 'datetime' | 'date' | 'year-month' | 'time' | 'hour-minute' | 'tel' | 'url' | 'checkbox' | 'radio';
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
match?: FieldMatch;
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
export interface LabelSlots {
default?(props: any): any;
}
export interface LabelAlternativeSlots {
label?(props: any): any;
}
export interface LabelNumberSlots extends LabelSlots {}
export interface LabelHighlightSlots extends LabelSlots {}
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
export type PaginationPropsInclude<T = any> = {
list?: T[];
page?: number | string;
rows?: number | string;
};
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
export interface PrefixSlots {
prefix?(props: any): any;
}
export type PrefixProps = {
prefix?: string | number;
prefixId?: string;
};
export type RoleType = string | 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'command' | 'comment' | 'complementary' | 'composite' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'generic' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'input' | 'landmark' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'mark' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'range' | 'region' | 'roletype' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'section' | 'sectionhead' | 'select' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'structure' | 'suggestion' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem' | 'widget' | 'window';
export type SearchPropsInclude<T = any> = {
list?: T[];
search?: string;
searchColumns?: string[];
searchOptions?: SearchOptions;
};
export type SortColumn = string | string[] | Record<string, SortDir>;
export type SortIncludeSort = SortColumn | Ref<SortColumn | undefined> | (() => SortColumn | undefined);
export type SortIncludeSortDir = SortDir | Ref<SortDir | undefined> | (() => SortDir | undefined);
export type SortPropsInclude<T = any> = {
list?: T[];
sort?: SortColumn;
sortDir?: SortDir;
sortFunction?: SortFunction<T>;
};
export type StickyScrollBottomPropsInclude = {
stickyScrollBottom?: boolean;
};
export type StickyPropsInclude = StickyScrollBottomPropsInclude & {
stickyTop?: number | RefOrNormal<number>;
stickyScrollContainer?: string | HTMLElement | Window;
stickyEnable?: boolean | RefOrNormal<boolean>;
};
export interface SuffixSlots {
suffix?(props: any): any;
}
export type SuffixProps = {
suffix?: string | number;
suffixId?: string;
};
export type TextValue = string | (() => string) | undefined;
export type TextIndex = 'cancel' | 'characterLimit' | 'characterRemaining' | 'close' | 'copiedClipboard' | 'decrement' | 'entriesMatch' | 'first' | 'hide' | 'increment' | 'info' | 'last' | 'loading' | 'more' | 'morePrev' | 'next' | 'notFound' | 'notifications' | 'ok' | 'page' | 'previous' | 'rowsPerPage' | 'show' | 'symbol' | string;
export type TextList = Record<TextIndex, TextValue>;
export type TextBreadcrumbPropsInclude = {
textBreadcrumb?: TextValue;
};
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
export type TextSymbolPropsInclude = {
textSymbol?: TextValue;
};
export type TextAllPropsInclude = TextBreadcrumbPropsInclude & TextCancelPropsInclude & TextCharacterLimitPropsInclude & TextCharacterRemainingPropsInclude & TextClosePropsInclude & TextCopiedClipboardPropsInclude & TextDecrementPropsInclude & TextEntriesMatchPropsInclude & TextFirstPropsInclude & TextHidePropsInclude & TextIncrementPropsInclude & TextInfoPropsInclude & TextLastPropsInclude & TextLoadingPropsInclude & TextMorePropsInclude & TextMorePrevPropsInclude & TextNextPropsInclude & TextNotFoundPropsInclude & TextNotificationsPropsInclude & TextOkPropsInclude & TextPagePropsInclude & TextPreviousPropsInclude & TextRowsPerPagePropsInclude & TextShowPropsInclude & TextSymbolPropsInclude;
export type TouchEventTypeX = 'left' | 'right' | 'none';
export type TouchEventTypeY = 'top' | 'bottom' | 'none';
export type TouchEventClient = {
x: number;
y: number;
};
export type TouchEventCallback = (typeX: TouchEventTypeX, typeY: TouchEventTypeY, clientX: number, clientY: number, mouse?: TouchEventClient, mouseMove?: TouchEventClient, touche?: Touch, toucheMove?: Touch) => Promise<boolean> | boolean;
export declare const STYLE_MODIFICATION: string[];