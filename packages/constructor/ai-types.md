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
  "./Headroom": {
    "types": "./dist/constructors/Headroom/index.d.ts",
    "default": "./dist/headroom.js"
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
  "./MotionFlip": {
    "types": "./dist/constructors/MotionFlip/index.d.ts",
    "default": "./dist/motionFlip.js"
  },
  "./MotionSticky": {
    "types": "./dist/constructors/MotionSticky/index.d.ts",
    "default": "./dist/motionSticky.js"
  },
  "./MotionTransform": {
    "types": "./dist/constructors/MotionTransform/index.d.ts",
    "default": "./dist/motionTransform.js"
  },
  "./NavigationItem": {
    "types": "./dist/constructors/NavigationItem/index.d.ts",
    "default": "./dist/navigationItem.js"
  },
  "./NavigationList": {
    "types": "./dist/constructors/NavigationList/index.d.ts",
    "default": "./dist/navigationList.js"
  },
  "./NavigationRail": {
    "types": "./dist/constructors/NavigationRail/index.d.ts",
    "default": "./dist/navigationRail.js"
  },
  "./NavigationRailItem": {
    "types": "./dist/constructors/NavigationRailItem/index.d.ts",
    "default": "./dist/navigationRailItem.js"
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
  "./Slider": {
    "types": "./dist/constructors/Slider/index.d.ts",
    "default": "./dist/slider.js"
  },
  "./SliderField": {
    "types": "./dist/constructors/SliderField/index.d.ts",
    "default": "./dist/sliderField.js"
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
  "./TableFlex": {
    "types": "./dist/constructors/TableFlex/index.d.ts",
    "default": "./dist/tableFlex.js"
  },
  "./TableFlexHeaderItem": {
    "types": "./dist/constructors/TableFlexHeaderItem/index.d.ts",
    "default": "./dist/tableFlexHeaderItem.js"
  },
  "./TableFlexItem": {
    "types": "./dist/constructors/TableFlexItem/index.d.ts",
    "default": "./dist/tableFlexItem.js"
  },
  "./TableFlexRecord": {
    "types": "./dist/constructors/TableFlexRecord/index.d.ts",
    "default": "./dist/tableFlexRecord.js"
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
  "./style.scss": "./src/library/style.scss"
}

declare module '../types/areaTypes' {
export type AreaPropsInclude = {
    area?: string;
};
export declare const AREA_PROP_NAME = "UI_AREA_VALUE";
}
declare module '../types/ariaTypes' {
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
}
declare module '../types/captionTypes' {
export interface CaptionSlots {
    caption?(props: any): any;
}
export type CaptionProps = {
    caption?: string | number;
    captionDecorative?: boolean;
};
}
declare module '../types/clientOnlyTypes' {
export type ClientOnlyPropsInclude = {
    clientOnly?: boolean;
};
}
declare module '../types/componentInclude' {
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
}
declare module '../types/descriptionTypes' {
export interface DescriptionSlots {
    description?(props: any): any;
}
export type DescriptionProps = {
    description?: string | number;
    descriptionId?: string;
};
}
declare module '../types/enabledTypes' {
export type EnabledProps = {
    readonly?: boolean;
    disabled?: boolean;
};
}
declare module '../types/errorTypes' {
export declare const CONSTRUCTOR_ERROR_GROUP = "constructor";
}
declare module '../types/eventClickTypes' {
import { RouteLocationRaw } from 'vue-router';
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
}
declare module '../types/fieldTypes' {
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
}
declare module '../types/headroomTypes' {
import { ComputedRef } from 'vue';
import { ElementOrWindow } from '@dxtmisha/functional-basic';
export type HeadroomPropsInclude = {
    scrollElement?: ElementOrWindow | string;
    disappears?: boolean;
    transformThreshold?: number;
};
export type HeadroomEventItem = {
    value: number;
    disappearsValue: number;
    isSticky: boolean;
    transformThreshold: number;
    transformValue: number;
    transformPercent: number;
    valueDifference: number;
};
export type HeadroomEmitsInclude = {
    headroomScroll: [event: HeadroomEventItem];
    headroomSticky: [event: HeadroomEventItem];
};
export type HeadroomExposeInclude = {
    isSticky: ComputedRef<boolean>;
    getValues: () => HeadroomEventItem;
    update: () => void;
};
}
declare module '../types/labelTypes' {
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
}
declare module '../types/modelTypes' {
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
}
declare module '../types/paginationTypes' {
export type PaginationPropsInclude<T = any> = {
    list?: T[];
    page?: number | string;
    rows?: number | string;
};
}
declare module '../types/pluginTypes' {
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
}
declare module '../types/prefixTypes' {
export interface PrefixSlots {
    prefix?(props: any): any;
}
export type PrefixProps = {
    prefix?: string | number;
    prefixId?: string;
};
}
declare module '../types/roleTypes' {
export type RoleType = string | 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'command' | 'comment' | 'complementary' | 'composite' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'generic' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'input' | 'landmark' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'mark' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'range' | 'region' | 'roletype' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'section' | 'sectionhead' | 'select' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'structure' | 'suggestion' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem' | 'widget' | 'window';
}
declare module '../types/searchTypes' {
import { SearchOptions } from '@dxtmisha/functional';
export type SearchPropsInclude<T = any> = {
    list?: T[];
    search?: string;
    searchColumns?: string[];
    searchOptions?: SearchOptions;
};
}
declare module '../types/sortTypes' {
import { Ref } from 'vue';
import { SortDir, SortFunction } from '@dxtmisha/functional';
export type SortColumn = string | string[] | Record<string, SortDir>;
export type SortIncludeSort = SortColumn | Ref<SortColumn | undefined> | (() => SortColumn | undefined);
export type SortIncludeSortDir = SortDir | Ref<SortDir | undefined> | (() => SortDir | undefined);
export type SortPropsInclude<T = any> = {
    list?: T[];
    sort?: SortColumn;
    sortDir?: SortDir;
    sortFunction?: SortFunction<T>;
};
}
declare module '../types/stickyTypes' {
import { RefOrNormal } from '@dxtmisha/functional';
export type StickyScrollBottomPropsInclude = {
    stickyScrollBottom?: boolean;
};
export type StickyPropsInclude = StickyScrollBottomPropsInclude & {
    stickyTop?: number | RefOrNormal<number>;
    stickyScrollContainer?: string | HTMLElement | Window;
    stickyEnable?: boolean | RefOrNormal<boolean>;
};
}
declare module '../types/suffixTypes' {
export interface SuffixSlots {
    suffix?(props: any): any;
}
export type SuffixProps = {
    suffix?: string | number;
    suffixId?: string;
};
}
declare module '../types/textTypes' {
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
}
declare module '../types/touchEventTypes' {
export type TouchEventTypeX = 'left' | 'right' | 'none';
export type TouchEventTypeY = 'top' | 'bottom' | 'none';
export type TouchEventClient = {
    x: number;
    y: number;
};
export type TouchEventCallback = (typeX: TouchEventTypeX, typeY: TouchEventTypeY, clientX: number, clientY: number, mouse?: TouchEventClient, mouseMove?: TouchEventClient, touche?: Touch, toucheMove?: Touch) => Promise<boolean> | boolean;
}
declare module '../constructors/Accordion/props' {
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
}
declare module '../constructors/Accordion/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { EventClickEmits } from '../../types/eventClickTypes';
import { CellComponentInclude, CellSlotsInclude } from '../Cell';
import { MotionTransformComponentInclude, MotionTransformControlItem, MotionTransformEmitsInclude, MotionTransformExposeInclude } from '../MotionTransform';
import { ModelEmitsOpen } from '../../types/modelTypes';
export type AccordionComponents = CellComponentInclude & MotionTransformComponentInclude;
export type AccordionEmits = EventClickEmits & MotionTransformEmitsInclude & ModelEmitsOpen;
export interface AccordionExpose extends MotionTransformExposeInclude {
}
export interface AccordionSlots extends CellSlotsInclude {
    default?(props: MotionTransformControlItem): any;
}
export type AccordionClasses = {
    main: ConstrClass;
    head: string;
    body: string;
};
}
declare module '../constructors/ActionSheet/props' {
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
}
declare module '../constructors/ActionSheet/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ModalComponents, ModalEmits, ModalExpose, ModalSlots } from '../Modal';
export type ActionSheetComponents = ModalComponents;
export type ActionSheetEmits = ModalEmits;
export interface ActionSheetExpose extends ModalExpose {
}
export interface ActionSheetSlots extends ModalSlots {
}
export type ActionSheetClasses = {
    main: ConstrClass;
    title: string;
    header: string;
    body: string;
    footer: string;
    touch: string;
    tab: string;
};
}
declare module '../constructors/Actions/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { EventClickEmits } from '../../types/eventClickTypes';
import { ActionsPropsBasic } from './props';
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
}
declare module '../constructors/Actions/props' {
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
}
declare module '../constructors/Actions/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ButtonComponentInclude } from '../Button';
import { EventClickEmits } from '../../types/eventClickTypes';
export type ActionsComponents = ButtonComponentInclude;
export type ActionsEmits = EventClickEmits;
export interface ActionsExpose {
}
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
}
declare module '../constructors/Alert/props' {
import { ConstrBind } from '@dxtmisha/functional';
import { ActionsPropsBasic, ActionsPropsInclude } from '../Actions';
import { AlertLinkPropsBasic, AlertLinkPropsInclude } from '../AlertLink';
import { ButtonPropsBasic } from '../Button';
import { IconPropsBasic, IconTrailingPropsInclude } from '../Icon';
import { AriaLivePropsInclude, AriaRolePropsInclude } from '../../types/ariaTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { LabelProps } from '../../types/labelTypes';
import { TextClosePropsInclude } from '../../types/textTypes';
type AlertPropsToken = {
    itemCenter?: boolean;
};
export type AlertPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, AlertLink extends AlertLinkPropsBasic = AlertLinkPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic> = LabelProps & DescriptionProps & IconTrailingPropsInclude<Icon> & AlertLinkPropsInclude<AlertLink> & ActionsPropsInclude<Actions> & AriaRolePropsInclude & AriaLivePropsInclude & TextClosePropsInclude & {
    button?: string | number | ConstrBind<Button>;
    iconClose?: string;
    closeButton?: boolean;
};
export type AlertProps = AlertPropsBasic & AlertPropsToken;
export declare const defaultsAlert: {
    itemCenter: boolean;
    role: string;
};
export {};
}
declare module '../constructors/Alert/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { IconComponentInclude } from '../Icon';
import { ButtonComponentInclude } from '../Button';
import { AlertLinkComponentInclude, AlertLinkEmitsInclude } from '../AlertLink';
import { ActionsComponentInclude, ActionsEmitsInclude } from '../Actions';
import { EventClickEmits } from '../../types/eventClickTypes';
import { LabelSlots } from '../../types/labelTypes';
import { DescriptionSlots } from '../../types/descriptionTypes';
export type AlertComponents = IconComponentInclude & ButtonComponentInclude & ActionsComponentInclude & AlertLinkComponentInclude;
export type AlertEmits = AlertLinkEmitsInclude & ActionsEmitsInclude & EventClickEmits & {
    close: [];
};
export interface AlertExpose {
}
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
}
declare module '../constructors/AlertLink/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { EventClickValue } from '../../types/eventClickTypes';
import { AlertLinkPropsBasic } from './props';
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
}
declare module '../constructors/AlertLink/props' {
import { LabelProps } from '../../types/labelTypes';
import { EventClickProps } from '../../types/eventClickTypes';
type AlertLinkPropsToken = {
    divider?: boolean;
};
export type AlertLinkPropsBasic = LabelProps & EventClickProps;
export type AlertLinkProps = AlertLinkPropsBasic & AlertLinkPropsToken;
export declare const defaultsAlertLink: {
    divider: boolean;
};
export {};
}
declare module '../constructors/AlertLink/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
import { LabelSlots } from '../../types/labelTypes';
export type AlertLinkComponents = {};
export type AlertLinkEmits = EventClickEmits;
export interface AlertLinkExpose extends EventClickExpose {
}
export interface AlertLinkSlots extends LabelSlots {
}
export type AlertLinkClasses = {
    main: ConstrClass;
    label: string;
};
}
declare module '../constructors/Anchor/basicTypes' {
import { NumberOrString } from '@dxtmisha/functional';
export type AnchorScrollProps = {
    shift?: NumberOrString;
    behavior?: ScrollIntoViewOptions['behavior'];
    block?: ScrollIntoViewOptions['block'];
    inline?: ScrollIntoViewOptions['inline'];
};
}
declare module '../constructors/Anchor/props' {
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
}
declare module '../constructors/Anchor/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { TooltipComponentInclude, TooltipSlotsInclude } from '../Tooltip';
import { LabelSlots } from '../../types/labelTypes';
import { IconComponentInclude } from '../Icon';
export type AnchorComponents = TooltipComponentInclude & IconComponentInclude;
export type AnchorEmits = {};
export interface AnchorExpose {
    go(): void;
}
export interface AnchorSlots extends LabelSlots, TooltipSlotsInclude {
}
export type AnchorClasses = {
    main: ConstrClass;
    label: string;
};
}
declare module '../constructors/Area/props' {
type AreaPropsToken = {};
export type AreaPropsBasic = {
    areaDefault?: string;
};
export type AreaProps = AreaPropsBasic & AreaPropsToken;
export declare const defaultsArea: {};
export {};
}
declare module '../constructors/Area/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type AreaComponents = {};
export type AreaEmits = {};
export interface AreaExpose {
}
export type AreaSlots = Record<string, (props: any) => any>;
export type AreaClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/Arrow/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { ArrowProps } from './props';
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
}
declare module '../constructors/Arrow/props' {
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
}
declare module '../constructors/Arrow/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type ArrowComponents = {};
export type ArrowEmits = {};
export interface ArrowExpose {
    update: () => void;
}
export interface ArrowSlots {
}
export type ArrowClasses = {
    main: ConstrClass;
    mask: string;
    arrow: string;
    arrowLine: string;
    arrowArea: string;
    border: string;
    borderHidden: string;
};
}
declare module '../constructors/Avatar/props' {
import { LabelProps } from '../../types/labelTypes';
import { AriaLabelPropsInclude } from '../../types/ariaTypes';
import { EventClickProps } from '../../types/eventClickTypes';
import { ImagePropsBasic, ImagePropsInclude } from '../Image';
import { BadgePropsBasic, BadgePropsInclude } from '../Badge';
import { SkeletonPropsInclude } from '../Skeleton';
type AvatarPropsToken = {
    focus?: boolean;
    disabled?: boolean;
    readonly?: boolean;
};
export type AvatarPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic> = LabelProps & ImagePropsInclude<Image> & BadgePropsInclude<Badge> & SkeletonPropsInclude & AriaLabelPropsInclude & EventClickProps & {
    reduction?: boolean;
    tabindex?: string | number;
};
export type AvatarProps = AvatarPropsBasic & AvatarPropsToken;
export declare const defaultsAvatar: {
    reduction: boolean;
    tabindex: string;
};
export {};
}
declare module '../constructors/Avatar/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { LabelSlots } from '../../types/labelTypes';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
import { ImageComponentInclude, ImageEmitsInclude } from '../Image';
import { BadgeComponentInclude } from '../Badge';
export type AvatarComponents = ImageComponentInclude & BadgeComponentInclude;
export type AvatarEmits = ImageEmitsInclude & EventClickEmits;
export interface AvatarExpose extends EventClickExpose {
}
export interface AvatarSlots extends LabelSlots {
}
export type AvatarClasses = {
    main: ConstrClass;
    label: string;
};
}
declare module '../constructors/Badge/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { BadgePropsBasic } from './props';
export type BadgeComponentInclude = {
    badge?: object;
};
export type BadgePropsInclude<Badge extends BadgePropsBasic = BadgePropsBasic> = {
    badge?: string | number | ConstrBind<Badge>;
    badgeDot?: boolean;
    badgeAttrs?: ConstrBind<Badge>;
};
}
declare module '../constructors/Badge/props' {
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
}
declare module '../constructors/Badge/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { IconComponentInclude } from '../Icon';
import { LabelNumberSlots } from '../../types/labelTypes';
export type BadgeComponents = IconComponentInclude;
export type BadgeEmits = {};
export interface BadgeExpose {
}
export interface BadgeSlots extends LabelNumberSlots {
}
export type BadgeClasses = {
    main: ConstrClass;
    label: string;
    icon: string;
};
}
declare module '../constructors/Bars/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { EventClickEmits } from '../../types/eventClickTypes';
import { BarsPropsBasic } from './props';
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
}
declare module '../constructors/Bars/props' {
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
}
declare module '../constructors/Bars/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ButtonComponentInclude } from '../Button';
import { EventClickEmits } from '../../types/eventClickTypes';
import { LabelSlots } from '../../types/labelTypes';
import { DescriptionSlots } from '../../types/descriptionTypes';
export type BarsComponents = ButtonComponentInclude;
export type BarsEmits = EventClickEmits & {
    'update:action': [value: boolean];
    'update:modelAction': [value: boolean];
};
export interface BarsExpose {
}
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
}
declare module '../constructors/Bleed/props' {
type BleedPropsToken = {};
export type BleedPropsBasic = {
    tag?: string;
};
export type BleedProps = BleedPropsBasic & BleedPropsToken;
export declare const defaultsBleed: {
    tag: string;
};
export {};
}
declare module '../constructors/Bleed/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type BleedComponents = {};
export type BleedEmits = {};
export interface BleedExpose {
}
export interface BleedSlots {
    default?(props: any): any;
}
export type BleedClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/Block/props' {
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
}
declare module '../constructors/Block/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { DescriptionSlots } from '../../types/descriptionTypes';
import { HeaderComponentInclude, HeaderSlotsInclude } from '../Header';
export type BlockComponents = HeaderComponentInclude;
export type BlockEmits = {};
export interface BlockExpose {
}
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
}
declare module '../constructors/BreadcrumbItem/props' {
import { IconLitePropsInclude, IconPropsBasic } from '../Icon';
import { SkeletonPropsInclude } from '../Skeleton';
import { EnabledProps } from '../../types/enabledTypes';
import { EventClickProps } from '../../types/eventClickTypes';
import { LabelProps } from '../../types/labelTypes';
type BreadcrumbItemPropsToken = {
    disabled?: boolean;
    readonly?: boolean;
    back?: boolean;
};
export type BreadcrumbItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = LabelProps & IconLitePropsInclude<Icon> & EnabledProps & EventClickProps & SkeletonPropsInclude & {
    iconArrowLeft?: string;
    iconArrowRight?: string;
};
export type BreadcrumbItemProps = BreadcrumbItemPropsBasic & BreadcrumbItemPropsToken;
export declare const defaultsBreadcrumbItem: {};
export {};
}
declare module '../constructors/BreadcrumbItem/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { IconComponentInclude } from '../Icon';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
import { LabelSlots } from '../../types/labelTypes';
export type BreadcrumbItemComponents = IconComponentInclude;
export type BreadcrumbItemEmits = EventClickEmits;
export interface BreadcrumbItemExpose extends EventClickExpose {
}
export interface BreadcrumbItemSlots extends LabelSlots {
}
export type BreadcrumbItemClasses = {
    main: ConstrClass;
    iconArrow: string;
};
}
declare module '../constructors/Breadcrumbs/props' {
import { ConstrBind } from '@dxtmisha/functional';
import { BreadcrumbItemProps } from '../BreadcrumbItem';
import { SkeletonPropsInclude } from '../Skeleton';
import { TextBreadcrumbPropsInclude } from '../../types/textTypes';
type BreadcrumbsPropsToken = {};
export type BreadcrumbsPropsBasic<BreadcrumbItem extends BreadcrumbItemProps = BreadcrumbItemProps> = TextBreadcrumbPropsInclude & SkeletonPropsInclude & {
    list?: ConstrBind<BreadcrumbItem>[];
};
export type BreadcrumbsProps = BreadcrumbsPropsBasic & BreadcrumbsPropsToken;
export declare const defaultsBreadcrumbs: {};
export {};
}
declare module '../constructors/Breadcrumbs/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { EventClickEmits } from '../../types/eventClickTypes';
export type BreadcrumbsComponents = {
    breadcrumbItem: object;
};
export type BreadcrumbsEmits = EventClickEmits;
export interface BreadcrumbsExpose {
}
export interface BreadcrumbsSlots {
}
export type BreadcrumbsClasses = {
    main: ConstrClass;
    item: string;
};
}
declare module '../constructors/Bullet/props' {
import { BulletItemPropsInclude } from '../BulletItem';
type BulletPropsToken = {};
export type BulletPropsBasic = BulletItemPropsInclude & {
    html?: string;
};
export type BulletProps = BulletPropsBasic & BulletPropsToken;
export declare const defaultsBullet: {};
export {};
}
declare module '../constructors/Bullet/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { BulletItemComponentInclude } from '../BulletItem';
export type BulletComponents = BulletItemComponentInclude;
export type BulletEmits = {};
export interface BulletExpose {
}
export interface BulletSlots {
    default?(props: any): any;
}
export type BulletClasses = {
    main: ConstrClass;
    item: string;
};
}
declare module '../constructors/BulletItem/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { BulletItemPropsBasic } from './props';
export type BulletItemComponentInclude = {
    bulletItem?: object;
};
export type BulletItemPropsInclude<BulletItemProps extends BulletItemPropsBasic = BulletItemPropsBasic> = {
    list?: string[];
    itemAttrs?: ConstrBind<BulletItemProps>;
};
}
declare module '../constructors/BulletItem/props' {
import { DescriptionProps } from '../../types/descriptionTypes';
type BulletItemPropsToken = {};
export type BulletItemPropsBasic = DescriptionProps;
export type BulletItemProps = BulletItemPropsBasic & BulletItemPropsToken;
export declare const defaultsBulletItem: {};
export {};
}
declare module '../constructors/BulletItem/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { DescriptionSlots } from '../../types/descriptionTypes';
export type BulletItemComponents = {};
export type BulletItemEmits = {};
export interface BulletItemExpose {
}
export interface BulletItemSlots extends DescriptionSlots {
}
export type BulletItemClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/Button/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { ButtonPropsBasic } from './props';
export type ButtonComponentInclude = {
    button?: object;
};
export type ButtonPropsInclude<Button extends ButtonPropsBasic = ButtonPropsBasic> = {
    buttonAttrs?: ConstrBind<Button>;
};
}
declare module '../constructors/Button/props' {
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
}
declare module '../constructors/Button/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { IconComponentInclude } from '../Icon';
import { ProgressComponentInclude } from '../Progress';
import { RippleComponentInclude } from '../Ripple';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
import { LabelSlots } from '../../types/labelTypes';
export type ButtonComponents = IconComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type ButtonEmits = EventClickEmits;
export interface ButtonExpose extends EventClickExpose {
}
export interface ButtonSlots extends LabelSlots {
}
export type ButtonClasses = {
    main: ConstrClass;
    label: string;
    icon: string;
    trailing: string;
    loading: string;
};
}
declare module '../constructors/ButtonGroup/props' {
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
export {};
}
declare module '../constructors/ButtonGroup/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ButtonComponentInclude } from '../Button';
import { EventClickEmits } from '../../types/eventClickTypes';
export type ButtonGroupComponents = ButtonComponentInclude;
export type ButtonGroupEmits = EventClickEmits;
export interface ButtonGroupExpose {
}
export interface ButtonGroupSlots {
    default?(props: any): any;
}
export type ButtonGroupClasses = {
    main: ConstrClass;
    item: string;
};
}
declare module '../constructors/Cell/basicTypes' {
import { LabelAlternativeSlots } from '../../types/labelTypes';
import { DescriptionSlots } from '../../types/descriptionTypes';
import { CaptionSlots } from '../../types/captionTypes';
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
}
declare module '../constructors/Cell/props' {
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
}
declare module '../constructors/Cell/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { IconComponentInclude } from '../Icon';
import { ProgressComponentInclude } from '../Progress';
import { RippleComponentInclude } from '../Ripple';
import { CaptionSlots } from '../../types/captionTypes';
import { DescriptionSlots } from '../../types/descriptionTypes';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
import { LabelSlots } from '../../types/labelTypes';
import { CellClassesSub } from './basicTypes';
export type CellComponents = IconComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type CellEmits = EventClickEmits;
export interface CellExpose extends EventClickExpose {
}
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
}
declare module '../constructors/Checkbox/props' {
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
export {};
}
declare module '../constructors/Checkbox/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ImageComponentInclude } from '../Image';
import { FieldMessageComponentInclude } from '../FieldMessage';
import { ProgressComponentInclude } from '../Progress';
import { RippleComponentInclude } from '../Ripple';
import { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes';
import { LabelSlots } from '../../types/labelTypes';
import { DescriptionSlots } from '../../types/descriptionTypes';
import { ModelEmitsSelected } from '../../types/modelTypes';
export type CheckboxComponents = ImageComponentInclude & FieldMessageComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type CheckboxEmits = FieldBasicEmits<boolean> & ModelEmitsSelected;
export interface CheckboxExpose extends FieldBasicExpose<boolean> {
}
export interface CheckboxSlots extends LabelSlots, DescriptionSlots {
}
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
}
declare module '../constructors/Chip/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { ChipPropsBasic } from './props';
export type ChipComponentInclude = {
    chip?: object;
};
export type ChipPropsInclude<Chip extends ChipPropsBasic = ChipPropsBasic> = {
    chipAttrs?: ConstrBind<Chip>;
};
}
declare module '../constructors/Chip/props' {
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
}
declare module '../constructors/Chip/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ButtonComponents, ButtonEmits, ButtonExpose, ButtonSlots } from '../Button';
export type ChipComponents = ButtonComponents;
export type ChipEmits = ButtonEmits;
export interface ChipExpose extends ButtonExpose {
}
export interface ChipSlots extends ButtonSlots {
}
export type ChipClasses = {
    main: ConstrClass;
    label: string;
    icon: string;
    trailing: string;
    loading: string;
};
}
declare module '../constructors/ChipGroup/basicTypes' {
import { ConstrBind, ListListInput } from '@dxtmisha/functional';
import { ChipPropsBasic } from '../Chip';
export type ChipGroupData<Chip extends ChipPropsBasic = ChipPropsBasic> = ListListInput<Chip>;
export type ChipGroupItem<Chip extends ChipPropsBasic = ChipPropsBasic> = ConstrBind<Chip>;
export type ChipGroupList<Chip extends ChipPropsBasic = ChipPropsBasic> = ChipGroupItem<Chip>[];
}
declare module '../constructors/ChipGroup/props' {
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
}
declare module '../constructors/ChipGroup/types' {
import { ConstrClass, ListSelectedList } from '@dxtmisha/functional';
import { ChipComponentInclude } from '../Chip';
import { EventClickEmits } from '../../types/eventClickTypes';
import { ModelEmitsSelected } from '../../types/modelTypes';
export type ChipGroupComponents = ChipComponentInclude;
export type ChipGroupEmits = EventClickEmits & ModelEmitsSelected<ListSelectedList>;
export interface ChipGroupExpose {
}
export interface ChipGroupSlots {
    default?(props: any): any;
}
export type ChipGroupClasses = {
    main: ConstrClass;
    item: string;
};
}
declare module '../constructors/ClientOnly/props' {
import { ClientOnlyPropsInclude } from '../../types/clientOnlyTypes';
type ClientOnlyPropsToken = {};
export type ClientOnlyPropsBasic = ClientOnlyPropsInclude;
export type ClientOnlyProps = ClientOnlyPropsBasic & ClientOnlyPropsToken;
export declare const defaultsClientOnly: {
    clientOnly: boolean;
};
export {};
}
declare module '../constructors/ClientOnly/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type ClientOnlyComponents = {};
export type ClientOnlyEmits = {};
export interface ClientOnlyExpose {
}
export interface ClientOnlySlots {
    default?(props: any): any;
}
export type ClientOnlyClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/Container/props' {
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
export {};
}
declare module '../constructors/Container/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type ContainerComponents = {};
export type ContainerEmits = {};
export interface ContainerExpose {
}
export interface ContainerSlots {
    default?(props: any): any;
}
export type ContainerClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/Dialog/props' {
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
}
declare module '../constructors/Dialog/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ModalComponents, ModalEmits, ModalExpose, ModalSlots } from '../Modal';
import { IconComponentInclude } from '../Icon';
import { LabelAlternativeSlots } from '../../types/labelTypes';
import { DescriptionSlots } from '../../types/descriptionTypes';
export type DialogComponents = ModalComponents & IconComponentInclude;
export type DialogEmits = ModalEmits & {
    ok: [];
    close: [];
};
export interface DialogExpose extends ModalExpose {
}
export interface DialogSlots extends ModalSlots, LabelAlternativeSlots, DescriptionSlots {
}
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
}
declare module '../constructors/Divider/props' {
type DividerPropsToken = {};
export type DividerPropsBasic = {};
export type DividerProps = DividerPropsBasic & DividerPropsToken;
export declare const defaultsDivider: {};
export {};
}
declare module '../constructors/Divider/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type DividerComponents = {};
export type DividerEmits = {};
export interface DividerExpose {
}
export interface DividerSlots {
}
export type DividerClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/DraggableWrapper/basicTypes' {
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
}
declare module '../constructors/DraggableWrapper/props' {
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
export {};
}
declare module '../constructors/DraggableWrapper/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { DraggableWrapperControl, DraggableWrapperEventParameters } from './basicTypes';
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
}
declare module '../constructors/Dummy/props' {
type DummyPropsToken = {};
export type DummyPropsBasic = {};
export type DummyProps = DummyPropsBasic & DummyPropsToken;
export declare const defaultsDummy: {};
export {};
}
declare module '../constructors/Dummy/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type DummyComponents = {};
export type DummyEmits = {};
export interface DummyExpose {
}
export interface DummySlots {
    default?(props: any): any;
}
export type DummyClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/Field/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { IconPropsBasic } from '../Icon';
import { FieldMessagePropsBasic } from '../FieldMessage';
import { FieldLabelPropsBasic } from '../FieldLabel';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { ProgressPropsBasic } from '../Progress';
import { AriaList } from '../../types/ariaTypes';
import { FieldPropsBasic } from './props';
import { FieldSlots } from './types';
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
export interface FieldSlotsInclude extends Omit<FieldSlots, 'default'> {
}
export type FieldPropsInclude<Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = Omit<FieldPropsBasic<Icon, FieldLabel, FieldMessage, FieldCounter, Progress>, 'disabledPrevious' | 'disabledNext' | 'to' | 'value' | 'maxlength' | 'cancelShow' | 'counter' | 'counterTemplate' | 'counterTop' | 'iconArrowLeft' | 'iconArrowRight' | 'iconPlus' | 'iconMinus' | 'iconClose'> & {
    focus?: boolean;
    selected?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    align?: 'center' | 'right' | 'left';
    cancel?: 'auto' | 'always' | 'none';
    fieldAttrs?: ConstrBind<Field>;
};
}
declare module '../constructors/Field/props' {
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
}
declare module '../constructors/Field/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { CaptionSlots } from '../../types/captionTypes';
import { PrefixSlots } from '../../types/prefixTypes';
import { SuffixSlots } from '../../types/suffixTypes';
import { EventClickEmits } from '../../types/eventClickTypes';
import { IconComponentInclude } from '../Icon';
import { FieldLabelComponentInclude, FieldLabelSlotsInclude } from '../FieldLabel';
import { FieldMessageComponentInclude } from '../FieldMessage';
import { ProgressComponentInclude } from '../Progress';
import { FieldControl } from './basicTypes';
export type FieldComponents = IconComponentInclude & FieldLabelComponentInclude & FieldMessageComponentInclude & ProgressComponentInclude;
export type FieldEmits = EventClickEmits;
export interface FieldExpose {
}
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
}
declare module '../constructors/FieldCounter/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { FieldCounterPropsBasic } from './props';
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
}
declare module '../constructors/FieldCounter/props' {
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
}
declare module '../constructors/FieldCounter/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type FieldCounterComponents = {};
export type FieldCounterEmits = {};
export interface FieldCounterExpose {
}
export interface FieldCounterSlots {
}
export type FieldCounterClasses = {
    main: ConstrClass;
    aria: string;
};
}
declare module '../constructors/FieldLabel/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { LabelAlternativeSlots, LabelProps } from '../../types/labelTypes';
import { FieldCounterPropsBasic, FieldCounterPropsInclude } from '../FieldCounter';
import { FieldLabelPropsBasic } from './props';
export type FieldLabelComponentInclude = {
    fieldLabel?: object;
};
export interface FieldLabelSlotsInclude extends LabelAlternativeSlots {
}
export type FieldLabelPropsInclude<FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> = LabelProps & FieldCounterPropsInclude<FieldCounter> & {
    required?: boolean;
    fieldLabelAttrs?: ConstrBind<FieldLabel>;
};
}
declare module '../constructors/FieldLabel/props' {
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
}
declare module '../constructors/FieldLabel/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { LabelAlternativeSlots } from '../../types/labelTypes';
import { FieldCounterComponentInclude } from '../FieldCounter';
import { ProgressComponentInclude } from '../Progress';
export type FieldLabelComponents = FieldCounterComponentInclude & ProgressComponentInclude;
export type FieldLabelEmits = {};
export interface FieldLabelExpose {
}
export interface FieldLabelSlots extends LabelAlternativeSlots {
}
export type FieldLabelClasses = {
    main: ConstrClass;
    label: string;
    required: string;
};
}
declare module '../constructors/FieldMessage/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { FieldMessagePropsBasic } from './props';
import { FieldCounterPropsBasic, FieldCounterPropsInclude } from '../FieldCounter';
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
}
declare module '../constructors/FieldMessage/props' {
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
}
declare module '../constructors/FieldMessage/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { FieldCounterComponentInclude } from '../FieldCounter';
import { FieldMessageSlot } from './basicTypes';
export type FieldMessageComponents = FieldCounterComponentInclude;
export type FieldMessageEmits = {};
export interface FieldMessageExpose {
}
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
}
declare module '../constructors/FormattedNumber/props' {
import { NumberOrString } from '@dxtmisha/functional';
type FormattedNumberPropsToken = {};
export type FormattedNumberPropsBasic = {
    value?: NumberOrString;
    currency?: string;
    unit?: string;
    formatting?: boolean;
    language?: string;
};
export type FormattedNumberProps = FormattedNumberPropsBasic & FormattedNumberPropsToken;
export declare const defaultsFormattedNumber: {
    formatting: boolean;
};
export {};
}
declare module '../constructors/FormattedNumber/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type FormattedNumberComponents = {};
export type FormattedNumberEmits = {};
export interface FormattedNumberExpose {
}
export interface FormattedNumberSlots {
}
export type FormattedNumberClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/FormattedUnit/props' {
import { NumberOrString } from '@dxtmisha/functional';
type FormattedUnitPropsToken = {};
export type FormattedUnitPropsBasic = {
    value?: NumberOrString;
    unit?: string;
    formatting?: boolean;
    language?: string;
};
export type FormattedUnitProps = FormattedUnitPropsBasic & FormattedUnitPropsToken;
export declare const defaultsFormattedUnit: {
    formatting: boolean;
};
export {};
}
declare module '../constructors/FormattedUnit/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type FormattedUnitComponents = {};
export type FormattedUnitEmits = {};
export interface FormattedUnitExpose {
}
export interface FormattedUnitSlots {
}
export type FormattedUnitClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/Grid/props' {
type GridPropsToken = {};
export type GridPropsBasic = {};
export type GridProps = GridPropsBasic & GridPropsToken;
export declare const defaultsGrid: {};
export {};
}
declare module '../constructors/Grid/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type GridComponents = {};
export type GridEmits = {};
export interface GridExpose {
}
export interface GridSlots {
    default?(props: any): any;
}
export type GridClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/GridItem/props' {
type GridItemPropsToken = {
    base?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
};
export type GridItemPropsBasic = {};
export type GridItemProps = GridItemPropsBasic & GridItemPropsToken;
export declare const defaultsGridItem: {
    base: string;
};
export {};
}
declare module '../constructors/GridItem/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type GridItemComponents = {};
export type GridItemEmits = {};
export interface GridItemExpose {
}
export interface GridItemSlots {
    default?(props: any): any;
}
export type GridItemClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/Group/props' {
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
export {};
}
declare module '../constructors/Group/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { BlockComponents, BlockEmits, BlockExpose, BlockSlots } from '../Block';
export type GroupComponents = BlockComponents;
export type GroupEmits = BlockEmits;
export interface GroupExpose extends BlockExpose {
}
export interface GroupSlots extends BlockSlots {
}
export type GroupClasses = {
    main: ConstrClass;
    headline: string;
    header: string;
    description: string;
    body: string;
};
}
declare module '../constructors/Header/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { CaptionProps, CaptionSlots } from '../../types/captionTypes';
import { IconPropsBasic, IconPropsInclude } from '../Icon';
import { LabelAlternativeSlots, LabelProps } from '../../types/labelTypes';
import { HeaderPropsBasic } from './props';
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
}
declare module '../constructors/Header/props' {
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
export {};
}
declare module '../constructors/Header/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { IconComponentInclude } from '../Icon';
import { CaptionSlots } from '../../types/captionTypes';
import { LabelSlots } from '../../types/labelTypes';
export type HeaderComponents = IconComponentInclude;
export type HeaderEmits = {};
export interface HeaderExpose {
}
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
}
declare module '../constructors/Headroom/props' {
import { HeadroomPropsInclude } from '../../types/headroomTypes';
type HeadroomPropsToken = {
    disappears?: boolean;
};
export type HeadroomPropsBasic = HeadroomPropsInclude & {
    tag?: string;
};
export type HeadroomProps = HeadroomPropsBasic & HeadroomPropsToken;
export declare const defaultsHeadroom: {
    tag: string;
    transform: number;
};
export {};
}
declare module '../constructors/Headroom/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { HeadroomEmitsInclude, HeadroomExposeInclude } from '../../types/headroomTypes';
export type HeadroomComponents = {};
export type HeadroomEmits = HeadroomEmitsInclude;
export type HeadroomExpose = HeadroomExposeInclude;
export interface HeadroomSlots {
    default?(props: any): any;
}
export type HeadroomClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/HorizontalScroll/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { HorizontalScrollPropsBasic } from './props';
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
}
declare module '../constructors/HorizontalScroll/props' {
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
export {};
}
declare module '../constructors/HorizontalScroll/types' {
import { ConstrClass } from '@dxtmisha/functional';
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
}
declare module '../constructors/Icon/basicTypes' {
import { ConstrBind, ConstrItem } from '@dxtmisha/functional';
import { IconPropsBasic } from './props';
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
}
declare module '../constructors/Icon/props' {
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
}
declare module '../constructors/Icon/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
import { ImageComponentInclude, ImageEmitsInclude } from '../Image';
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
}
declare module '../constructors/Image/basicTypes' {
import { ConstrBind, Undefined } from '@dxtmisha/functional';
import { ImageEmits } from './types';
import { ImagePropsBasic } from './props';
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
}
declare module '../constructors/Image/props' {
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
}
declare module '../constructors/Image/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ImageEventData, ImageEventItem, ImageTypeItem } from './basicTypes';
export type ImageComponents = {};
export type ImageEmits = {
    load: [image: ImageEventData];
};
export type ImageExpose = {
    getType: () => ImageTypeItem;
    getData: () => ImageEventItem;
};
export interface ImageSlots {
}
export type ImageClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/Input/basicTypes' {
export type InputComponentInclude = {
    input?: object;
};
}
declare module '../constructors/Input/props' {
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
}
declare module '../constructors/Input/types' {
import { ConstrClass, NumberOrString } from '@dxtmisha/functional';
import { MaskComponentInclude } from '../Mask';
import { FieldComponentInclude, FieldSlotsInclude } from '../Field';
import { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes';
export type InputComponents = MaskComponentInclude & FieldComponentInclude;
export type InputEmits = FieldBasicEmits<NumberOrString>;
export interface InputExpose extends FieldBasicExpose {
}
export interface InputSlots extends FieldSlotsInclude {
}
export type InputClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/InputCode/props' {
import { ModelProps } from '../../types/modelTypes';
import { FieldLabelPropsBasic, FieldLabelPropsInclude } from '../FieldLabel';
import { FieldMessagePropsBasic, FieldMessagePropsInclude } from '../FieldMessage';
import { InputCodeItemPropsBasic, InputCodeItemPropsInclude } from '../InputCodeItem';
type InputCodePropsToken = {
    validation?: boolean;
};
export type InputCodePropsBasic<InputCodeItem extends InputCodeItemPropsBasic = InputCodeItemPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic> = InputCodeItemPropsInclude<InputCodeItem> & Omit<FieldLabelPropsInclude<FieldLabel>, 'counter' | 'counterShow' | 'counterTemplate' | 'counterId' | 'maxlength' | 'fieldCounterAttrs' | 'required'> & Omit<FieldMessagePropsInclude<FieldMessage>, 'counter' | 'counterShow' | 'counterTemplate' | 'counterId' | 'maxlength' | 'fieldCounterAttrs'> & ModelProps & {
    success?: boolean;
    loading?: boolean;
    value?: string;
    length?: number;
};
export type InputCodeProps = InputCodePropsToken & InputCodePropsBasic;
export declare const defaultsInputCode: {
    length: number;
    match: RegExp;
    inputMode: string;
};
export {};
}
declare module '../constructors/InputCode/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ModelEmits } from '../../types/modelTypes';
import { FieldLabelComponentInclude } from '../FieldLabel';
import { FieldMessageComponentInclude } from '../FieldMessage';
import { InputCodeItemComponentInclude } from '../InputCodeItem';
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
export interface InputCodeSlots {
}
export type InputCodeClasses = {
    main: ConstrClass;
    context: string;
};
}
declare module '../constructors/InputCodeItem/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { InputCodeItemPropsBasic } from './props';
import { SkeletonPropsInclude } from '../Skeleton';
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
}
declare module '../constructors/InputCodeItem/props' {
import { NumberOrString } from '@dxtmisha/functional';
import { TextSymbolPropsInclude } from '../../types/textTypes';
import { SkeletonPropsInclude } from '../Skeleton';
type InputCodeItemPropsToken = {
    disabled?: boolean;
    success?: boolean;
    error?: boolean;
    hide?: boolean;
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
export type InputCodeItemProps = InputCodeItemPropsBasic & InputCodeItemPropsToken;
export declare const defaultsInputCodeItem: {
    move: boolean;
    name: string;
    match: RegExp;
    inputMode: string;
    placeholder: string;
};
export {};
}
declare module '../constructors/InputCodeItem/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { InputCodeItemPropsBasic } from './props';
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
export interface InputCodeItemSlots {
}
export type InputCodeItemClasses = {
    main: ConstrClass;
    input: string;
    sub: string;
};
}
declare module '../constructors/InputPhone/props' {
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
export {};
}
declare module '../constructors/InputPhone/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { FieldComponentInclude, FieldSlotsInclude } from '../Field';
import { InputPhoneDialCodeComponentInclude } from '../InputPhoneDialCode';
import { MaskComponentInclude } from '../Mask';
import { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes';
export type InputPhoneComponents = FieldComponentInclude & MaskComponentInclude & InputPhoneDialCodeComponentInclude;
export type InputPhoneEmits = FieldBasicEmits;
export interface InputPhoneExpose extends FieldBasicExpose {
}
export interface InputPhoneSlots extends FieldSlotsInclude {
}
export type InputPhoneClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/InputPhoneDialCode/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { InputPhoneDialCodePropsBasic } from './props';
export type InputPhoneDialCodeComponentInclude = {
    inputPhoneDialCode?: object;
};
export type InputPhoneDialCodePropsInclude<InputPhoneDialCode extends InputPhoneDialCodePropsBasic = InputPhoneDialCodePropsBasic> = {
    disabled?: boolean;
    inputPhoneDialCodeAttrs?: ConstrBind<InputPhoneDialCode>;
};
}
declare module '../constructors/InputPhoneDialCode/props' {
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
export {};
}
declare module '../constructors/InputPhoneDialCode/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ButtonComponentInclude } from '../Button';
import { MenuCountryComponentInclude, MenuCountryEmits } from '../MenuCountry';
export type InputPhoneDialCodeComponents = ButtonComponentInclude & MenuCountryComponentInclude;
export type InputPhoneDialCodeEmits = MenuCountryEmits;
export interface InputPhoneDialCodeExpose {
}
export interface InputPhoneDialCodeSlots {
}
export type InputPhoneDialCodeClasses = {
    main: ConstrClass;
    button: string;
    menuCountry: string;
};
}
declare module '../constructors/InputSocial/basicTypes' {
export type InputSocialComponentInclude = {
    inputSocial?: object;
};
}
declare module '../constructors/InputSocial/props' {
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
}
declare module '../constructors/InputSocial/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { MaskComponentInclude } from '../Mask';
import { FieldComponentInclude, FieldSlotsInclude } from '../Field';
import { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes';
export type InputSocialComponents = MaskComponentInclude & FieldComponentInclude;
export type InputSocialEmits = FieldBasicEmits;
export interface InputSocialExpose extends FieldBasicExpose {
}
export interface InputSocialSlots extends FieldSlotsInclude {
}
export type InputSocialClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/List/basicTypes' {
import { ComputedRef } from 'vue';
import { ListList, ListNames } from '@dxtmisha/functional';
export type ListComponentInclude = {
    list?: object;
};
export type ListSlotsInclude = {
    isSelected: ComputedRef<boolean>;
    selectedList: ComputedRef<ListList>;
    selectedNames: ComputedRef<ListNames>;
    selectedValues: ComputedRef<any[]>;
};
}
declare module '../constructors/List/props' {
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
}
declare module '../constructors/List/types' {
import { ConstrClass, ListList, ListNames } from '@dxtmisha/functional';
import { EventClickEmits } from '../../types/eventClickTypes';
import { ListItemComponentInclude } from '../ListItem';
import { ListGroupComponentInclude } from '../ListGroup';
import { ListMenuComponentInclude } from '../ListMenu';
import { InputComponentInclude } from '../Input';
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
    filterInput: string;
    none: string;
};
}
declare module '../constructors/ListGroup/basicTypes' {
import { MotionTransformControlItem } from '../MotionTransform';
export type ListGroupComponentInclude = {
    listGroup?: object;
};
export type ListGroupSlotsPropsInclude = MotionTransformControlItem & {
    open: boolean;
};
}
declare module '../constructors/ListGroup/props' {
export type ListGroupPropsToken = {
    open?: boolean;
    divider?: boolean;
};
export type ListGroupPropsBasic = {
    divider?: boolean;
};
export type ListGroupProps = ListGroupPropsBasic & ListGroupPropsToken;
export declare const defaultsListGroup: {};
}
declare module '../constructors/ListGroup/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { MotionTransformComponentInclude } from '../MotionTransform';
import { ListGroupSlotsPropsInclude } from './basicTypes';
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
}
declare module '../constructors/ListItem/basicTypes' {
export type ListItemComponentInclude = {
    listItem?: object;
};
}
declare module '../constructors/ListItem/props' {
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
}
declare module '../constructors/ListItem/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { IconComponentInclude } from '../Icon';
import { BadgeComponentInclude } from '../Badge';
import { ProgressComponentInclude } from '../Progress';
import { RippleComponentInclude } from '../Ripple';
import { LabelHighlightSlots } from '../../types/labelTypes';
import { DescriptionSlots } from '../../types/descriptionTypes';
import { PrefixSlots } from '../../types/prefixTypes';
import { CaptionSlots } from '../../types/captionTypes';
import { SuffixSlots } from '../../types/suffixTypes';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
export type ListItemComponents = IconComponentInclude & BadgeComponentInclude & ProgressComponentInclude & RippleComponentInclude & {
    checkbox?: object;
    radio?: object;
};
export type ListItemEmits = EventClickEmits;
export interface ListItemExpose extends EventClickExpose {
}
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
};
}
declare module '../constructors/ListMenu/basicTypes' {
export type ListMenuComponentInclude = {
    listMenu?: object;
};
}
declare module '../constructors/ListMenu/props' {
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
}
declare module '../constructors/ListMenu/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { WindowComponentInclude, WindowControlItem, WindowEmitsInclude, WindowExposeInclude } from '../Window';
export type ListMenuComponents = WindowComponentInclude;
export type ListMenuEmits = WindowEmitsInclude;
export interface ListMenuExpose extends WindowExposeInclude {
}
export interface ListMenuSlots {
    head?(props: WindowControlItem): any;
    list?(props: any): any;
}
export type ListMenuClasses = {
    main: ConstrClass;
    head: string;
    list: string;
};
}
declare module '../constructors/Mask/basicTypes' {
import { ConstrBind, GeoDate } from '@dxtmisha/functional';
import { FieldPatternItemOrFunction, FieldValidationItem } from '../../types/fieldTypes';
import { MaskPropsBasic } from './props';
import { ModelProps } from '../../types/modelTypes';
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
}
declare module '../constructors/Mask/props' {
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
}
declare module '../constructors/Mask/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { FieldValidationItem } from '../../types/fieldTypes';
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
export interface MaskSlots {
}
export type MaskClasses = {
    main: ConstrClass;
    input: string;
    character: string;
    characterItem: string;
};
}
declare module '../constructors/Menu/basicTypes' {
import { Ref } from 'vue';
import { ConstrBind, NumberOrStringOrBoolean } from '@dxtmisha/functional';
import { WindowControlItem } from '../Window';
import { ListSlotsInclude } from '../List';
import { MenuExpose } from './types';
import { MenuPropsBasic } from './props';
export type MenuControlBasic = ListSlotsInclude & {
    loading: Ref<boolean>;
    previous(): NumberOrStringOrBoolean | undefined;
    next(): NumberOrStringOrBoolean | undefined;
};
export type MenuControlItem = MenuControlBasic & WindowControlItem;
export type MenuComponentInclude = {
    menu?: object;
};
export type MenuExposeInclude = MenuExpose & {
    getMenuElement(): Ref<ConstrBind<MenuExpose> | undefined>;
};
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
}
declare module '../constructors/Menu/props' {
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
}
declare module '../constructors/Menu/types' {
import { ConstrClass, NumberOrStringOrBoolean } from '@dxtmisha/functional';
import { EventClickEmits } from '../../types/eventClickTypes';
import { ListComponentInclude, ListExpose, ListSlots } from '../List';
import { BarsComponentInclude, BarsEmitsInclude } from '../Bars';
import { WindowComponentInclude, WindowEmitsInclude, WindowExposeInclude } from '../Window';
import { ModelEmitsSelected } from '../../types/modelTypes';
import { MenuControlItem, MenuSlotInclude } from './basicTypes';
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
}
declare module '../constructors/MenuButton/basicTypes' {
import { IconPropsBasic, IconValue } from '../Icon';
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
}
declare module '../constructors/MenuButton/props' {
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
export {};
}
declare module '../constructors/MenuButton/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { MenuComponentInclude, MenuExposeInclude, MenuSlotInclude } from '../Menu';
import { ButtonComponentInclude } from '../Button';
import { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes';
export type MenuButtonComponents = MenuComponentInclude & ButtonComponentInclude;
export type MenuButtonEmits = FieldBasicEmits;
export interface MenuButtonExpose extends FieldBasicExpose, MenuExposeInclude {
}
export interface MenuButtonSlots extends MenuSlotInclude {
    default?(props: any): any;
}
export type MenuButtonClasses = {
    main: ConstrClass;
    label: string;
    separator: string;
    selected: string;
};
}
declare module '../constructors/MenuChip/props' {
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
export {};
}
declare module '../constructors/MenuChip/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { MenuComponentInclude, MenuExposeInclude, MenuSlotInclude } from '../Menu';
import { ChipComponentInclude } from '../Chip';
import { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes';
export type MenuChipComponents = MenuComponentInclude & ChipComponentInclude;
export type MenuChipEmits = FieldBasicEmits;
export interface MenuChipExpose extends FieldBasicExpose, MenuExposeInclude {
}
export interface MenuChipSlots extends MenuSlotInclude {
    default?(props: any): any;
}
export type MenuChipClasses = {
    main: ConstrClass;
    label: string;
    separator: string;
    selected: string;
};
}
declare module '../constructors/MenuCountry/basicTypes' {
import { Ref } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { MenuExposeInclude } from '../Menu';
import { MenuCountryExpose } from './types';
import { MenuCountryPropsBasic } from './props';
export type MenuCountryComponentInclude = {
    menuCountry?: object;
};
export type MenuCountryExposeInclude = MenuExposeInclude & {
    getMenuCountryElement(): Ref<ConstrBind<MenuCountryExpose> | undefined>;
};
export type MenuCountryPropsInclude<MenuCountry extends MenuCountryPropsBasic = MenuCountryPropsBasic> = {
    disabled?: boolean;
    menuCountryAttrs?: ConstrBind<MenuCountry>;
};
}
declare module '../constructors/MenuCountry/props' {
import { ListSelectedList } from '@dxtmisha/functional';
import { MenuPropsBasic, MenuPropsInclude } from '../Menu';
import { ModelPropsSelected } from '../../types/modelTypes';
type MenuCountryPropsToken = {};
export type MenuCountryPropsBasic<Menu extends MenuPropsBasic = MenuPropsBasic> = MenuPropsInclude<Menu> & ModelPropsSelected<ListSelectedList> & {
    selected?: ListSelectedList;
    list?: string[];
    showPhoneCode?: boolean;
    isSelectedByValue?: boolean;
    language?: string;
};
export type MenuCountryProps = MenuCountryPropsBasic & MenuCountryPropsToken;
export declare const defaultsMenuCountry: {
    isSelectedByValue: boolean;
};
export {};
}
declare module '../constructors/MenuCountry/types' {
import { ConstrClass, NumberOrStringOrBoolean } from '@dxtmisha/functional';
import { EventClickEmits } from '../../types/eventClickTypes';
import { MenuComponentInclude, MenuControlItem, MenuExposeInclude, MenuSlotInclude } from '../Menu';
import { ModelEmitsSelected } from '../../types/modelTypes';
export type MenuCountryComponents = MenuComponentInclude;
export type MenuCountryEmits = ModelEmitsSelected & EventClickEmits & {
    updateValue: [value?: NumberOrStringOrBoolean];
};
export interface MenuCountryExpose extends MenuExposeInclude {
}
export interface MenuCountrySlots extends MenuSlotInclude {
    control?(props: MenuControlItem): any;
}
export type MenuCountryClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/MenuLanguage/basicTypes' {
import { Ref } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { MenuExposeInclude } from '../Menu';
import { MenuLanguageExpose } from './types';
import { MenuLanguagePropsBasic } from './props';
export type MenuLanguageComponentInclude = {
    menuLanguage?: object;
};
export type MenuLanguageExposeInclude = MenuExposeInclude & {
    getMenuLanguageElement(): Ref<ConstrBind<MenuLanguageExpose> | undefined>;
};
export type MenuLanguagePropsInclude<MenuLanguage extends MenuLanguagePropsBasic = MenuLanguagePropsBasic> = {
    disabled?: boolean;
    menuLanguageAttrs?: ConstrBind<MenuLanguage>;
};
}
declare module '../constructors/MenuLanguage/props' {
import { MenuPropsBasic } from '../Menu';
import { MenuCountryPropsBasic } from '../MenuCountry';
type MenuLanguagePropsToken = {};
export type MenuLanguagePropsBasic<Menu extends MenuPropsBasic = MenuPropsBasic> = MenuCountryPropsBasic<Menu>;
export type MenuLanguageProps = MenuLanguagePropsBasic & MenuLanguagePropsToken;
export declare const defaultsMenuLanguage: {
    isSelectedByValue: boolean;
};
export {};
}
declare module '../constructors/MenuLanguage/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { MenuCountryComponents, MenuCountryEmits, MenuCountryExpose, MenuCountrySlots } from '../MenuCountry';
export type MenuLanguageComponents = MenuCountryComponents;
export type MenuLanguageEmits = MenuCountryEmits;
export interface MenuLanguageExpose extends MenuCountryExpose {
}
export interface MenuLanguageSlots extends MenuCountrySlots {
}
export type MenuLanguageClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/Modal/props' {
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
}
declare module '../constructors/Modal/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { WindowComponentInclude, WindowControlItem, WindowEmitsInclude, WindowExposeInclude, WindowSlots } from '../Window';
import { BarsComponentInclude, BarsEmitsInclude } from '../Bars';
import { ActionsComponentInclude, ActionsEmitsInclude } from '../Actions';
import { ModelEmitsOpen } from '../../types/modelTypes';
export type ModalComponents = WindowComponentInclude & BarsComponentInclude & ActionsComponentInclude;
export type ModalEmits = WindowEmitsInclude & BarsEmitsInclude & ActionsEmitsInclude & ModelEmitsOpen;
export interface ModalExpose extends WindowExposeInclude {
}
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
}
declare module '../constructors/MotionAxis/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { MotionAxisPropsBasic } from './props';
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
}
declare module '../constructors/MotionAxis/props' {
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
export {};
}
declare module '../constructors/MotionAxis/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ModelEmitsSelected } from '../../types/modelTypes';
import { MotionAxisEmitOptions, MotionAxisSelectedValue } from './basicTypes';
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
}
declare module '../constructors/MotionFlip/basicTypes' {
export type MotionFlipCallback = () => Promise<void> | void;
export type MotionFlipElementSizeRect = {
    top: number;
    left: number;
    width: number;
    height: number;
};
}
declare module '../constructors/MotionFlip/props' {
type MotionFlipPropsToken = {};
export type MotionFlipPropsBasic = {
    auto?: boolean;
    disabled?: boolean;
};
export type MotionFlipProps = MotionFlipPropsBasic & MotionFlipPropsToken;
export declare const defaultsMotionFlip: MotionFlipPropsBasic;
export {};
}
declare module '../constructors/MotionFlip/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { MotionFlipCallback } from './basicTypes';
export type MotionFlipComponents = {};
export type MotionFlipEmits = {};
export interface MotionFlipExpose {
    stop: () => void;
    update: (callback: MotionFlipCallback) => Promise<void>;
}
export interface MotionFlipSlots {
    default?(props: any): any;
}
export type MotionFlipClasses = {
    main: ConstrClass;
    item: string;
};
}
declare module '../constructors/MotionSticky/basicTypes' {
export type MotionStickyPosition = {
    top: number;
    bottom: number;
};
}
declare module '../constructors/MotionSticky/props' {
type MotionStickyPropsToken = {};
export type MotionStickyPropsBasic = {
    elementScroll?: string | HTMLElement | Window;
    classActivity?: string;
    tag?: string;
};
export type MotionStickyProps = MotionStickyPropsBasic & MotionStickyPropsToken;
export declare const defaultsMotionSticky: {
    tag: string;
};
export {};
}
declare module '../constructors/MotionSticky/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type MotionStickyComponents = {};
export type MotionStickyEmits = {
    sticky: [status: boolean];
};
export interface MotionStickyExpose {
}
export interface MotionStickySlots {
    default?(props: any): any;
}
export type MotionStickyClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/MotionTransform/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { AriaRoleControlPropsInclude } from '../../types/ariaTypes';
import { MotionTransformEmits, MotionTransformExpose } from './types';
import { MotionTransformProps } from './props';
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
}
declare module '../constructors/MotionTransform/props' {
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
}
declare module '../constructors/MotionTransform/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ModelEmitsOpen } from '../../types/modelTypes';
import { MotionTransformControlItem, MotionTransformEmitOptions } from './basicTypes';
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
}
declare module '../constructors/NavigationItem/basicTypes' {
export type NavigationItemComponentInclude = {
    navigationItem?: object;
};
}
declare module '../constructors/NavigationItem/props' {
import { ListItemPropsBasic } from '../ListItem';
import { IconPropsBasic } from '../Icon';
import { BadgePropsBasic } from '../Badge';
import { ProgressPropsBasic } from '../Progress';
import { CheckboxPropsBasic } from '../Checkbox';
import { RadioPropsBasic } from '../Radio';
type NavigationItemPropsToken = {
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
export type NavigationItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic, Checkbox extends CheckboxPropsBasic = CheckboxPropsBasic, Radio extends RadioPropsBasic = RadioPropsBasic> = ListItemPropsBasic<Icon, Badge, Progress, Checkbox, Radio>;
export type NavigationItemProps = NavigationItemPropsBasic & NavigationItemPropsToken;
export declare const defaultsNavigationItem: {
    iconAlign: string;
    controlPosition: string;
    tag: string;
    tabindex: string;
    role: string;
    selectionStyle: string;
};
export {};
}
declare module '../constructors/NavigationItem/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ListItemComponents, ListItemEmits, ListItemExpose, ListItemSlots } from '../ListItem';
export type NavigationItemComponents = ListItemComponents;
export type NavigationItemEmits = ListItemEmits;
export interface NavigationItemExpose extends ListItemExpose {
}
export interface NavigationItemSlots extends ListItemSlots {
}
export type NavigationItemClasses = {
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
};
}
declare module '../constructors/NavigationList/props' {
import { ListPropsBasic } from '../List';
import { IconPropsBasic } from '../Icon';
import { NavigationItemPropsBasic } from '../NavigationItem';
import { InputPropsBasic } from '../Input';
type NavigationListPropsToken = {
    axis?: 'x' | 'y';
    divider?: boolean;
};
export type NavigationListPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, NavigationItem extends NavigationItemPropsBasic = NavigationItemPropsBasic, Input extends InputPropsBasic = InputPropsBasic> = ListPropsBasic<Icon, NavigationItem, Input>;
export type NavigationListProps = NavigationListPropsBasic & NavigationListPropsToken;
export declare const defaultsNavigationList: {
    axis: string;
    tag: string;
    keyLabel: string;
    keyValue: string;
    role: string;
    tabindex: number;
};
export {};
}
declare module '../constructors/NavigationList/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ListComponents, ListEmits, ListExpose, ListSlots } from '../List';
export type NavigationListComponents = ListComponents;
export type NavigationListEmits = ListEmits;
export interface NavigationListExpose extends ListExpose {
}
export interface NavigationListSlots extends ListSlots {
}
export type NavigationListClasses = {
    main: ConstrClass;
    space: string;
    line: string;
    subtitle: string;
    html: string;
    management: string;
    group: string;
    menu: string;
    filterInput: string;
    none: string;
};
}
declare module '../constructors/NavigationRail/basicTypes' {
export type NavigationRailComponentInclude = {
    navigationRail?: object;
};
}
declare module '../constructors/NavigationRail/props' {
import { ConstrBind, ListRecord, ListSelectedItem, ListSelectedList } from '@dxtmisha/functional';
import { RoleType } from '../../types/roleTypes';
import { AriaMultiselectablePropsInclude, AriaRolePropsInclude } from '../../types/ariaTypes';
import { IconPropsBasic, IconValue } from '../Icon';
import { NavigationItemPropsBasic } from '../NavigationItem';
import { NavigationRailItemPropsBasic } from '../NavigationRailItem';
type NavigationRailPropsToken = {
    divider?: boolean;
};
export type NavigationRailPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, NavigationItem extends NavigationItemPropsBasic = NavigationItemPropsBasic, NavigationRailItem extends NavigationRailItemPropsBasic = NavigationRailItemPropsBasic> = AriaRolePropsInclude & AriaMultiselectablePropsInclude & {
    focus?: ListSelectedItem;
    selected?: ListSelectedList;
    disabled?: boolean;
    list?: ListRecord<NavigationRailItem | NavigationItem>;
    keyLabel?: string;
    keyValue?: string;
    tag?: 'div' | 'button' | 'a' | 'span' | string;
    divider?: boolean;
    itemAttrs?: ConstrBind<NavigationRailItem | NavigationItem>;
    itemManagementAttrs?: ConstrBind<NavigationRailItem | NavigationItem>;
    itemMenuAttrs?: ConstrBind<NavigationRailItem | NavigationItem>;
    iconArrowRight?: IconValue<Icon>;
    roleItem?: RoleType;
    tabindex?: string | number;
    control?: boolean;
};
export type NavigationRailProps = NavigationRailPropsBasic & NavigationRailPropsToken;
export declare const defaultsNavigationRail: {
    keyLabel: string;
    keyValue: string;
    tag: string;
    role: string;
    tabindex: number;
};
export {};
}
declare module '../constructors/NavigationRail/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { EventClickEmits } from '../../types/eventClickTypes';
import { ListExpose, ListSlots } from '../List';
import { ListMenuComponentInclude } from '../ListMenu';
import { NavigationItemComponentInclude } from '../NavigationItem';
import { NavigationRailItemComponentInclude } from '../NavigationRailItem';
export type NavigationRailComponents = NavigationItemComponentInclude & NavigationRailItemComponentInclude & ListMenuComponentInclude;
export type NavigationRailEmits = EventClickEmits & {
    close: [];
};
export interface NavigationRailExpose extends ListExpose {
}
export type NavigationRailSlots = ListSlots;
export type NavigationRailClasses = {
    main: ConstrClass;
    space: string;
    line: string;
    html: string;
    management: string;
    menu: string;
};
}
declare module '../constructors/NavigationRailItem/basicTypes' {
export type NavigationRailItemComponentInclude = {
    navigationRailItem?: object;
};
}
declare module '../constructors/NavigationRailItem/props' {
import { IconPropsBasic, IconPropsInclude } from '../Icon';
import { BadgePropsBasic, BadgePropsInclude } from '../Badge';
import { ProgressPropsBasic, ProgressPropsInclude } from '../Progress';
import { SkeletonPropsInclude } from '../Skeleton';
import { AriaRolePropsInclude } from '../../types/ariaTypes';
import { LabelProps } from '../../types/labelTypes';
import { EnabledProps } from '../../types/enabledTypes';
import { EventClickProps } from '../../types/eventClickTypes';
export type NavigationRailItemPropsToken = {
    focus?: boolean;
    open?: boolean;
    selectedChild?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    divider?: boolean;
};
export type NavigationRailItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & IconPropsInclude<Icon> & BadgePropsInclude<Badge> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & EnabledProps & EventClickProps & AriaRolePropsInclude & {
    index?: any;
    href?: string;
    tag?: 'button' | 'a' | 'span' | 'li' | 'div' | string;
    divider?: boolean;
    selectionStyle?: 'radio' | 'checkbox' | 'checkmark' | 'none';
    tabindex?: number | string;
    type?: string;
    parent?: string;
    listId?: number;
};
export type NavigationRailItemProps = NavigationRailItemPropsBasic & NavigationRailItemPropsToken;
export declare const defaultsNavigationRailItem: {
    tabindex: string;
    role: string;
};
}
declare module '../constructors/NavigationRailItem/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { IconComponentInclude } from '../Icon';
import { BadgeComponentInclude } from '../Badge';
import { ProgressComponentInclude } from '../Progress';
import { RippleComponentInclude } from '../Ripple';
import { LabelSlots } from '../../types/labelTypes';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
export type NavigationRailItemComponents = IconComponentInclude & BadgeComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type NavigationRailItemEmits = EventClickEmits;
export interface NavigationRailItemExpose extends EventClickExpose {
}
export interface NavigationRailItemSlots extends LabelSlots {
    leading?(props: any): any;
    body?(props: any): any;
}
export type NavigationRailItemClasses = {
    main: ConstrClass;
    label: string;
    context: string;
    contextLine: string;
    badge: string;
};
}
declare module '../constructors/Page/props' {
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
}
declare module '../constructors/Page/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { BlockComponents, BlockEmits, BlockExpose, BlockSlots } from '../Block';
export type PageComponents = BlockComponents;
export type PageEmits = BlockEmits;
export interface PageExpose extends BlockExpose {
}
export interface PageSlots extends BlockSlots {
}
export type PageClasses = {
    main: ConstrClass;
    headline: string;
    header: string;
    description: string;
    body: string;
};
}
declare module '../constructors/PageArea/props' {
import { BlockProps } from '../Block';
type PageAreaPropsToken = {};
export type PageAreaPropsBasic = BlockProps;
export type PageAreaProps = PageAreaPropsBasic & PageAreaPropsToken;
export declare const defaultsPageArea: {};
export {};
}
declare module '../constructors/PageArea/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { BlockSlots } from '../Block';
export type PageAreaComponents = {
    block: object;
    group: object;
    page: object;
    section: object;
};
export type PageAreaEmits = {};
export interface PageAreaExpose {
}
export interface PageAreaSlots extends BlockSlots {
}
export type PageAreaClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/Pagination/props' {
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
export {};
}
declare module '../constructors/Pagination/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { EventClickEmits, EventClickValue } from '../../types/eventClickTypes';
import { ModelEmits } from '../../types/modelTypes';
import { ButtonComponentInclude } from '../Button';
import { MenuComponentInclude } from '../Menu';
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
export interface PaginationExpose {
}
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
}
declare module '../constructors/Placeholder/props' {
import { ImagePropsBasic, ImagePropsInclude } from '../Image';
import { ActionsPropsBasic, ActionsPropsInclude } from '../Actions';
import { DescriptionProps } from '../../types/descriptionTypes';
import { LabelProps } from '../../types/labelTypes';
type PlaceholderPropsToken = {};
export type PlaceholderPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = ImagePropsInclude<Image> & LabelProps & DescriptionProps & ActionsPropsInclude<Actions>;
export type PlaceholderProps = PlaceholderPropsBasic & PlaceholderPropsToken;
export declare const defaultsPlaceholder: {};
export {};
}
declare module '../constructors/Placeholder/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ActionsComponentInclude, ActionsEmitsInclude } from '../Actions';
import { ImageComponentInclude, ImageEmitsInclude } from '../Image';
import { DescriptionSlots } from '../../types/descriptionTypes';
import { LabelSlots } from '../../types/labelTypes';
export type PlaceholderComponents = ImageComponentInclude & ActionsComponentInclude;
export type PlaceholderEmits = ImageEmitsInclude & ActionsEmitsInclude;
export interface PlaceholderExpose {
}
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
}
declare module '../constructors/Progress/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { ProgressPropsBasic } from './props';
export type ProgressComponentInclude = {
    progress?: object;
};
export type ProgressPropsInclude<Progress extends ProgressPropsBasic = ProgressPropsBasic> = {
    loading?: boolean | ConstrBind<Progress>;
};
}
declare module '../constructors/Progress/props' {
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
}
declare module '../constructors/Progress/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type ProgressComponents = {};
export type ProgressEmits = {};
export interface ProgressExpose {
}
export interface ProgressSlots {
}
export type ProgressClasses = {
    main: ConstrClass;
    circle: string;
    circleSub: string;
    point: string;
};
}
declare module '../constructors/ProgressBar/basicTypes' {
import { ConstrClassObject, ConstrStyles } from '@dxtmisha/functional';
import { AriaList } from '../../types/ariaTypes';
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
}
declare module '../constructors/ProgressBar/props' {
import { SkeletonPropsInclude } from '../Skeleton';
import { ProgressBarItem, ProgressBarList } from './basicTypes';
type ProgressBarPropsToken = {
    overlay?: boolean;
};
export type ProgressBarPropsBasic = SkeletonPropsInclude & {
    focus?: string;
    value?: string | number | ProgressBarItem | ProgressBarList;
    max?: string | number;
    color?: string;
    palette?: string;
    showLabel?: boolean;
};
export type ProgressBarProps = ProgressBarPropsBasic & ProgressBarPropsToken;
export declare const defaultsProgressBar: {};
export {};
}
declare module '../constructors/ProgressBar/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type ProgressBarComponents = {};
export type ProgressBarEmits = {};
export interface ProgressBarExpose {
}
export interface ProgressBarSlots {
}
export type ProgressBarClasses = {
    main: ConstrClass;
    item: string;
    itemLabel: string;
    itemProgress: string;
};
}
declare module '../constructors/Radio/props' {
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
export {};
}
declare module '../constructors/Radio/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { CheckboxComponents, CheckboxEmits, CheckboxExpose, CheckboxSlots } from '../Checkbox';
export type RadioComponents = CheckboxComponents;
export type RadioEmits = CheckboxEmits;
export interface RadioExpose extends CheckboxExpose {
}
export interface RadioSlots extends CheckboxSlots {
}
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
}
declare module '../constructors/Ripple/basicTypes' {
export type RippleComponentInclude = {
    ripple?: object;
};
}
declare module '../constructors/Ripple/props' {
export type RipplePropsToken = {};
export type RipplePropsBasic = {
    disabled?: boolean;
};
export type RippleProps = RipplePropsBasic & RipplePropsToken;
export declare const defaultsRipple: {};
}
declare module '../constructors/Ripple/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type RippleComponents = {};
export type RippleEmits = {};
export interface RippleExpose {
}
export interface RippleSlots {
}
export type RippleClasses = {
    main: ConstrClass;
    item: string;
};
}
declare module '../constructors/ScrollSticky/basicTypes' {
import { Ref } from 'vue';
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
}
declare module '../constructors/ScrollSticky/props' {
type ScrollStickyPropsToken = {};
export type ScrollStickyPropsBasic = {
    visible?: boolean;
};
export type ScrollStickyProps = ScrollStickyPropsBasic & ScrollStickyPropsToken;
export declare const defaultsScrollSticky: {
    visible: boolean;
};
export {};
}
declare module '../constructors/ScrollSticky/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ScrollStickyBindItem } from './basicTypes';
export type ScrollStickyComponents = {};
export type ScrollStickyEmits = {};
export interface ScrollStickyExpose {
}
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
}
declare module '../constructors/Scrollbar/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { ScrollbarPropsBasic } from './props';
import { ScrollbarEmits } from './types';
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
}
declare module '../constructors/Scrollbar/props' {
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
}
declare module '../constructors/Scrollbar/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ScrollbarEdgeType } from './basicTypes';
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
export interface ScrollbarExpose {
}
export interface ScrollbarSlots {
    default?(props: any): any;
}
export type ScrollbarClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/Section/props' {
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
}
declare module '../constructors/Section/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { BlockComponents, BlockEmits, BlockExpose, BlockSlots } from '../Block';
export type SectionComponents = BlockComponents;
export type SectionEmits = BlockEmits;
export interface SectionExpose extends BlockExpose {
}
export interface SectionSlots extends BlockSlots {
}
export type SectionClasses = {
    main: ConstrClass;
    headline: string;
    header: string;
    description: string;
    body: string;
};
}
declare module '../constructors/SegmentControl/props' {
import { TabsNavigationPropsBasic } from '../TabsNavigation';
import { TabItemPropsBasic } from '../TabItem';
type SegmentControlPropsToken = {
    divider?: boolean;
};
export type SegmentControlPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic> = TabsNavigationPropsBasic<TabItem>;
export type SegmentControlProps = SegmentControlPropsBasic & SegmentControlPropsToken;
export declare const defaultsSegmentControl: {
    horizontalScrollAlign: boolean;
    horizontalScrollBleed: boolean;
};
export {};
}
declare module '../constructors/SegmentControl/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { TabsNavigationEmits, TabsNavigationExpose, TabsNavigationSlots } from '../TabsNavigation';
import { HorizontalScrollComponentInclude } from '../HorizontalScroll';
import { SegmentControlItemComponentInclude } from '../SegmentControlItem';
export type SegmentControlComponents = HorizontalScrollComponentInclude & SegmentControlItemComponentInclude;
export type SegmentControlEmits = TabsNavigationEmits;
export interface SegmentControlExpose extends TabsNavigationExpose {
}
export interface SegmentControlSlots extends TabsNavigationSlots {
}
export type SegmentControlClasses = {
    main: ConstrClass;
    item: string;
};
}
declare module '../constructors/SegmentControlItem/basicTypes' {
export type SegmentControlItemComponentInclude = {
    segmentControlItem?: object;
};
}
declare module '../constructors/SegmentControlItem/props' {
import { IconPropsBasic } from '../Icon';
import { BadgePropsBasic } from '../Badge';
import { TabItemPropsBasic } from '../TabItem';
type SegmentControlItemPropsToken = {
    focus?: boolean;
    open?: boolean;
    selected?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    adaptive?: 'iconAlways' | 'auto';
    container?: boolean;
};
export type SegmentControlItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic> = TabItemPropsBasic<Icon, Badge>;
export type SegmentControlItemProps = SegmentControlItemPropsBasic & SegmentControlItemPropsToken;
export declare const defaultsSegmentControlItem: {};
export {};
}
declare module '../constructors/SegmentControlItem/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { TabItemComponents, TabItemEmits, TabItemExpose, TabItemSlots } from '../TabItem';
export type SegmentControlItemComponents = TabItemComponents;
export type SegmentControlItemEmits = TabItemEmits;
export interface SegmentControlItemExpose extends TabItemExpose {
}
export interface SegmentControlItemSlots extends TabItemSlots {
}
export type SegmentControlItemClasses = {
    main: ConstrClass;
    label: string;
    icon: string;
    badge: string;
};
}
declare module '../constructors/Select/props' {
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
}
declare module '../constructors/Select/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { MenuComponentInclude, MenuExposeInclude, MenuSlotInclude } from '../Menu';
import { FieldComponentInclude, FieldSlotsInclude } from '../Field';
import { SelectValueComponentInclude } from '../SelectValue';
import { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes';
export type SelectComponents = MenuComponentInclude & FieldComponentInclude & SelectValueComponentInclude;
export type SelectEmits = FieldBasicEmits;
export interface SelectExpose extends FieldBasicExpose, MenuExposeInclude {
}
export interface SelectSlots extends FieldSlotsInclude, MenuSlotInclude {
}
export type SelectClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/SelectValue/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { SelectValueProps } from './props';
export type SelectValueComponentInclude = {
    selectValue?: object;
};
export interface SelectValuePropsInclude {
    disabled?: boolean;
    selectValueAttrs?: ConstrBind<SelectValueProps>;
}
}
declare module '../constructors/SelectValue/props' {
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
}
declare module '../constructors/SelectValue/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ChipComponentInclude } from '../Chip';
import { EventClickEmits } from '../../types/eventClickTypes';
export type SelectValueComponents = ChipComponentInclude;
export type SelectValueEmits = EventClickEmits;
export interface SelectValueExpose {
}
export interface SelectValueSlots {
}
export type SelectValueClasses = {
    main: ConstrClass;
    item: string;
    trailing: string;
};
}
declare module '../constructors/SelectableArea/basicTypes' {
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
}
declare module '../constructors/SelectableArea/props' {
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
export {};
}
declare module '../constructors/SelectableArea/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ModelEmitsSelected } from '../../types/modelTypes';
import { SelectableAreaControl, SelectableAreaEventParameters } from './basicTypes';
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
}
declare module '../constructors/Skeleton/basicTypes' {
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
}
declare module '../constructors/Skeleton/props' {
export type SkeletonPropsToken = {
    active?: boolean;
};
export type SkeletonPropsBasic = {};
export type SkeletonProps = SkeletonPropsBasic & SkeletonPropsToken;
export declare const defaultsSkeleton: {};
}
declare module '../constructors/Skeleton/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { SkeletonClassesList } from './basicTypes';
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
}
declare module '../constructors/SkeletonItem/props' {
type SkeletonItemPropsToken = {
    text?: boolean;
    textVariant?: boolean;
    background?: boolean;
    backgroundVariant?: boolean;
    border?: boolean;
    borderVariant?: boolean;
};
export type SkeletonItemPropsBasic = {
    tag?: string | any;
    itemAttrs?: Record<string, any>;
    label?: string | number;
    length?: string | number | [number, number];
};
export type SkeletonItemProps = SkeletonItemPropsBasic & SkeletonItemPropsToken;
export declare const defaultsSkeletonItem: {
    tag: string;
    length: number;
};
export {};
}
declare module '../constructors/SkeletonItem/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type SkeletonItemComponents = {};
export type SkeletonItemEmits = {};
export interface SkeletonItemExpose {
}
export interface SkeletonItemSlots {
    default?(props: any): any;
}
export type SkeletonItemClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/Slider/basicTypes' {
import { ConstrBind, NumberOrStringOrBoolean } from '@dxtmisha/functional';
import { SliderPropsBasic } from './props';
export declare enum SliderFocusType {
    min = "min",
    max = "max"
}
export type SliderValueType = number | [number, number];
export type SliderMarkItemValue = NumberOrStringOrBoolean | undefined;
export type SliderMarkItem = {
    mark: number;
    value?: SliderMarkItemValue;
    label: string;
    style?: Record<string, any>;
};
export type SliderMarkList = SliderMarkItem[];
export type SliderThumbSlot = {
    value: number;
    item: SliderMarkItem;
};
export type SliderMarkSlot = {
    item: SliderMarkItem;
};
export type SliderEventDetail = {
    mark: SliderValueType;
    item: SliderMarkItem | [SliderMarkItem, SliderMarkItem];
    value?: SliderMarkItemValue | [SliderMarkItemValue, SliderMarkItemValue];
};
export type SliderComponentInclude = {
    slider?: object;
};
export type SliderPropsInclude<Slider extends SliderPropsBasic = SliderPropsBasic> = {
    slider?: SliderValueType | ConstrBind<Slider>;
};
}
declare module '../constructors/Slider/props' {
import { ListList, NumberOrString } from '@dxtmisha/functional';
import { SkeletonPropsInclude } from '../Skeleton';
import { ModelProps } from '../../types/modelTypes';
import { SliderValueType } from './basicTypes';
type SliderPropsToken = {
    disabled?: boolean;
    vertical?: boolean;
    basic?: boolean;
    drop?: boolean;
};
export type SliderPropsBasic = ModelProps<SliderValueType> & SkeletonPropsInclude & {
    value?: SliderValueType;
    marks?: ListList<any>;
    marksInit?: boolean;
    translation?: any;
    keyLabel?: string;
    keyValue?: string;
    step?: NumberOrString;
    min?: NumberOrString;
    max?: NumberOrString;
    multiple?: boolean;
    minimumDistance?: NumberOrString;
    disabled?: boolean;
    readonly?: boolean;
    vertical?: boolean;
    magnet?: boolean;
    ripple?: boolean;
};
export type SliderProps = SliderPropsBasic & SliderPropsToken;
export declare const defaultsSlider: {
    basic: boolean;
    keyLabel: string;
    keyValue: string;
    marksInit: boolean;
    max: number;
    min: number;
    minimumDistance: number;
    ripple: boolean;
    step: number;
};
export {};
}
declare module '../constructors/Slider/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { RippleComponentInclude } from '../Ripple';
import { ModelEmits } from '../../types/modelTypes';
import { SliderEventDetail, SliderMarkSlot, SliderThumbSlot, SliderValueType } from './basicTypes';
export type SliderComponents = RippleComponentInclude;
export type SliderEmits = ModelEmits<SliderValueType> & {
    input: [detail: SliderEventDetail];
    inputLite: [value: SliderValueType];
    change: [detail: SliderEventDetail];
    changeLite: [value: SliderValueType];
};
export interface SliderExpose {
    getValue: () => SliderValueType;
    setValue: (value: SliderValueType) => void;
    increase: () => void;
    decrease: () => void;
}
export interface SliderSlots {
    mark?: (props: SliderMarkSlot) => any;
    minLabel?: (props: SliderThumbSlot) => any;
    maxLabel?: (props: SliderThumbSlot) => any;
}
export type SliderClasses = {
    main: ConstrClass;
    rail: string;
    thumb: string;
    thumbMin: string;
    thumbMax: string;
    track: string;
    marks: string;
    mark: string;
    label: string;
    select: string;
};
}
declare module '../constructors/SliderField/props' {
type SliderFieldPropsToken = {};
export type SliderFieldPropsBasic = {};
export type SliderFieldProps = SliderFieldPropsBasic & SliderFieldPropsToken;
export declare const defaultsSliderField: {};
export {};
}
declare module '../constructors/SliderField/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type SliderFieldComponents = {};
export type SliderFieldEmits = {};
export interface SliderFieldExpose {
}
export interface SliderFieldSlots {
}
export type SliderFieldClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/Snackbar/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { ResumableTimer } from '@dxtmisha/functional-basic';
import { SnackbarItemPropsBasic } from '../SnackbarItem';
export type SnackbarValue = {
    component?: any;
    data?: ConstrBind<SnackbarItemPropsBasic>;
    highPriority?: boolean;
    delay?: number;
    value?: string;
    resumableTimer?: ResumableTimer;
};
export type SnackbarList = SnackbarValue[];
}
declare module '../constructors/Snackbar/props' {
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
export {};
}
declare module '../constructors/Snackbar/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { SnackbarItemComponentInclude } from '../SnackbarItem';
import { SnackbarValue } from './basicTypes';
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
export interface SnackbarSlots {
}
export type SnackbarClasses = {
    main: ConstrClass;
    item: string;
    space: string;
    priority: string;
};
}
declare module '../constructors/SnackbarItem/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { SnackbarItemPropsBasic } from './props';
export type SnackbarItemComponentInclude = {
    snackbarItem?: object;
};
export type SnackbarItemPropsInclude<SnackbarItemProps extends SnackbarItemPropsBasic = SnackbarItemPropsBasic> = {
    snackbarItemAttrs?: ConstrBind<SnackbarItemProps>;
};
}
declare module '../constructors/SnackbarItem/props' {
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
export {};
}
declare module '../constructors/SnackbarItem/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { DescriptionSlots } from '../../types/descriptionTypes';
import { EventClickEmits } from '../../types/eventClickTypes';
import { LabelSlots } from '../../types/labelTypes';
import { ActionsComponentInclude, ActionsEmitsInclude } from '../Actions';
import { ButtonComponentInclude } from '../Button';
import { IconComponentInclude } from '../Icon';
export type SnackbarItemComponents = IconComponentInclude & ButtonComponentInclude & ActionsComponentInclude;
export type SnackbarItemEmits = ActionsEmitsInclude & EventClickEmits & {
    close: [value: string | undefined];
};
export interface SnackbarItemExpose {
}
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
}
declare module '../constructors/Switch/props' {
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
export {};
}
declare module '../constructors/Switch/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { CheckboxComponents, CheckboxEmits, CheckboxExpose, CheckboxSlots } from '../Checkbox';
export type SwitchComponents = CheckboxComponents;
export type SwitchEmits = CheckboxEmits;
export interface SwitchExpose extends CheckboxExpose {
}
export interface SwitchSlots extends CheckboxSlots {
}
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
}
declare module '../constructors/TabItem/basicTypes' {
export type TabItemComponentInclude = {
    tabItem?: object;
};
}
declare module '../constructors/TabItem/props' {
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
    readonly?: boolean;
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
export {};
}
declare module '../constructors/TabItem/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { IconComponentInclude } from '../Icon';
import { BadgeComponentInclude } from '../Badge';
import { ProgressComponentInclude } from '../Progress';
import { RippleComponentInclude } from '../Ripple';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
import { LabelSlots } from '../../types/labelTypes';
export type TabItemComponents = IconComponentInclude & BadgeComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type TabItemEmits = EventClickEmits;
export interface TabItemExpose extends EventClickExpose {
}
export interface TabItemSlots extends LabelSlots {
}
export type TabItemClasses = {
    main: ConstrClass;
    label: string;
    icon: string;
    badge: string;
};
}
declare module '../constructors/Table/basicTypes' {
import { ConstrStyles } from '@dxtmisha/functional';
import { TableHeaderItemPropsBasic } from '../TableHeaderItem';
import { TableItemPropsBasic } from '../TableItem';
import { TableRecordValue } from '../TableRecord';
export type TableColumnCol = {
    'key': string;
    'style'?: ConstrStyles;
    'data-col': string;
};
export type TableHeader<TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic> = Record<string, TableRecordValue<TableHeaderItem>>;
export type TableHeaders<TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic> = TableHeader<TableHeaderItem>[];
export type TableList<TableItem extends TableItemPropsBasic = TableItemPropsBasic> = (Partial<Record<string, TableRecordValue<TableItem>>> | Record<string, any> | any)[];
}
declare module '../constructors/Table/props' {
import { CaptionProps } from '../../types/captionTypes';
import { PaginationPropsInclude } from '../../types/paginationTypes';
import { SearchPropsInclude } from '../../types/searchTypes';
import { SortPropsInclude } from '../../types/sortTypes';
import { StickyScrollBottomPropsInclude } from '../../types/stickyTypes';
import { TableItemPropsBasic } from '../TableItem';
import { TableRecordPropsBasic, TableRecordPropsInclude } from '../TableRecord';
import { TableHeaderItemPropsBasic } from '../TableHeaderItem';
import { TableHeader, TableHeaders, TableList } from './basicTypes';
type TablePropsToken = {
    headerTop?: boolean;
    captionBottom?: boolean;
    bleed?: boolean;
};
export type TablePropsBasic<TableItem extends TableItemPropsBasic = TableItemPropsBasic, TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic, TableRecord extends TableRecordPropsBasic<TableItem, TableHeaderItem> = TableRecordPropsBasic<TableItem, TableHeaderItem>> = CaptionProps & SearchPropsInclude<TableItem> & SortPropsInclude<TableItem> & PaginationPropsInclude<TableItem> & StickyScrollBottomPropsInclude & TableRecordPropsInclude<TableItem, TableRecord> & {
    columns?: string[];
    columnsWidth?: Record<string, string | number>;
    header?: TableHeader<TableHeaderItem> | TableHeaders<TableHeaderItem>;
    foot?: TableHeader<TableHeaderItem> | TableHeaders<TableHeaderItem>;
    list?: TableList<TableItem>;
    page?: number | string;
    rows?: number | string;
};
export type TableProps = TablePropsBasic & TablePropsToken;
export declare const defaultsTable: {
    lazy: boolean;
    page: number;
    stickyScrollBottom: boolean;
};
export {};
}
declare module '../constructors/Table/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { CaptionSlots } from '../../types/captionTypes';
import { ScrollStickyComponentInclude } from '../ScrollSticky';
import { TableRecordComponentInclude, TableRecordEmits, TableRecordItemSlots } from '../TableRecord';
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
}
declare module '../constructors/TableFlex/props' {
import { TablePropsBasic } from '../Table';
import { TableFlexHeaderItemPropsBasic } from '../TableFlexHeaderItem';
import { TableFlexItemPropsBasic } from '../TableFlexItem';
import { TableFlexRecordPropsBasic } from '../TableFlexRecord';
type TableFlexPropsToken = {
    headerTop?: boolean;
    captionBottom?: boolean;
    bleed?: boolean;
};
export type TableFlexPropsBasic<TableItem extends TableFlexItemPropsBasic = TableFlexItemPropsBasic, TableHeaderItem extends TableFlexHeaderItemPropsBasic = TableFlexHeaderItemPropsBasic, TableRecord extends TableFlexRecordPropsBasic<TableItem, TableHeaderItem> = TableFlexRecordPropsBasic<TableItem, TableHeaderItem>> = TablePropsBasic<TableItem, TableHeaderItem, TableRecord>;
export type TableFlexProps = TableFlexPropsBasic & TableFlexPropsToken;
export declare const defaultsTableFlex: {
    lazy: boolean;
    page: number;
    stickyScrollBottom: boolean;
};
export {};
}
declare module '../constructors/TableFlex/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { TableComponents, TableEmits, TableExpose, TableSlots } from '../Table';
export type TableFlexComponents = TableComponents;
export type TableFlexEmits = TableEmits;
export interface TableFlexExpose extends TableExpose {
}
export interface TableFlexSlots<Item = any, Value = any> = TableSlots<Item, Value>;
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
}
declare module '../constructors/TableFlexHeaderItem/props' {
import { ChipPropsBasic } from '../Chip';
import { IconPropsBasic } from '../Icon';
import { TooltipProps } from '../Tooltip';
import { TableHeaderItemPropsBasic } from '../TableHeaderItem';
type TableFlexHeaderItemPropsToken = {
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
export type TableFlexHeaderItemPropsBasic<Chip extends ChipPropsBasic = ChipPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Tooltip extends TooltipProps = TooltipProps> = TableHeaderItemPropsBasic<Chip, Icon, Tooltip>;
export type TableFlexHeaderItemProps = TableFlexHeaderItemPropsBasic & TableFlexHeaderItemPropsToken;
export declare const defaultsTableFlexHeaderItem: {
    align: string;
    alignVertical: string;
    tag: string;
};
export {};
}
declare module '../constructors/TableFlexHeaderItem/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { TableHeaderItemComponents, TableHeaderItemEmits, TableHeaderItemExpose, TableHeaderItemSlots } from '../TableHeaderItem';
export type TableFlexHeaderItemComponents = TableHeaderItemComponents;
export type TableFlexHeaderItemEmits = TableHeaderItemEmits;
export interface TableFlexHeaderItemExpose extends TableHeaderItemExpose {
}
export interface TableFlexHeaderItemSlots extends TableHeaderItemSlots {
}
export type TableFlexHeaderItemClasses = {
    main: ConstrClass;
    label: string;
    description: string;
    body: string;
    sort: string;
    tooltip: string;
};
}
declare module '../constructors/TableFlexItem/props' {
import { TableItemPropsBasic } from '../TableItem';
type TableFlexItemPropsToken = {
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
export type TableFlexItemPropsBasic = TableItemPropsBasic;
export type TableFlexItemProps = TableFlexItemPropsBasic & TableFlexItemPropsToken;
export declare const defaultsTableFlexItem: {
    align: string;
    alignVertical: string;
    tag: string;
};
export {};
}
declare module '../constructors/TableFlexItem/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { TableItemComponents, TableItemEmits, TableItemExpose, TableItemSlots } from '../TableItem';
export type TableFlexItemComponents = TableItemComponents;
export type TableFlexItemEmits = TableItemEmits;
export interface TableFlexItemExpose extends TableItemExpose {
}
export interface TableFlexItemSlots extends TableItemSlots {
}
export type TableFlexItemClasses = {
    main: ConstrClass;
    label: string;
    description: string;
};
}
declare module '../constructors/TableFlexRecord/props' {
import { TableFlexHeaderItemPropsBasic } from '../TableFlexHeaderItem';
import { TableFlexItemPropsBasic } from '../TableFlexItem';
import { TableRecordPropsBasic } from '../TableRecord';
type TableFlexRecordPropsToken = {
    disabled?: boolean;
    selected?: boolean;
};
export type TableFlexRecordPropsBasic<TableItem extends TableFlexItemPropsBasic = TableFlexItemPropsBasic, TableHeaderItem extends TableFlexHeaderItemPropsBasic = TableFlexHeaderItemPropsBasic> = TableRecordPropsBasic<TableItem, TableHeaderItem> & {
    lazy?: boolean;
    defaultHeight?: string | number;
};
export type TableFlexRecordProps = TableFlexRecordPropsBasic & TableFlexRecordPropsToken;
export declare const defaultsTableFlexRecord: {
    lazy: boolean;
};
export {};
}
declare module '../constructors/TableFlexRecord/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { TableRecordComponents, TableRecordEmits, TableRecordExpose, TableRecordSlots } from '../TableRecord';
export type TableFlexRecordComponents = TableRecordComponents;
export type TableFlexRecordEmits = TableRecordEmits;
export interface TableFlexRecordExpose extends TableRecordExpose {
}
export interface TableFlexRecordSlots = TableRecordSlots;
export type TableFlexRecordClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/TableHeaderItem/basicTypes' {
import { TableItemPropsInclude } from '../TableItem';
import { TableHeaderItemPropsBasic } from './props';
export type TableHeaderItemComponentInclude = {
    tableHeaderItem?: object;
};
export type TableHeaderItemPropsInclude<TableHeaderItemProps extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic> = TableItemPropsInclude<TableHeaderItemProps>;
}
declare module '../constructors/TableHeaderItem/props' {
import { ConstrBind, SortDir } from '@dxtmisha/functional';
import { ChipPropsBasic, ChipPropsInclude } from '../Chip';
import { IconPropsBasic } from '../Icon';
import { TableItemPropsBasic } from '../TableItem';
import { TooltipProps, TooltipPropsInclude } from '../Tooltip';
type TableHeaderItemPropsToken = {
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
export type TableHeaderItemProps = TableHeaderItemPropsBasic & TableHeaderItemPropsToken;
export declare const defaultsTableHeaderItem: {
    align: string;
    alignVertical: string;
    tag: string;
    scope: string;
};
export {};
}
declare module '../constructors/TableHeaderItem/types' {
import { ConstrClass, SortColumnItem } from '@dxtmisha/functional';
import { ChipComponentInclude } from '../Chip';
import { IconComponentInclude } from '../Icon';
import { TableItemSlots } from '../TableItem';
import { TooltipComponentInclude } from '../Tooltip';
export type TableHeaderItemComponents = ChipComponentInclude & IconComponentInclude & TooltipComponentInclude;
export type TableHeaderItemEmits = {
    sort: [item: SortColumnItem];
};
export interface TableHeaderItemExpose {
}
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
}
declare module '../constructors/TableItem/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { SkeletonPropsInclude } from '../Skeleton';
import { TableItemPropsBasic } from './props';
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
}
declare module '../constructors/TableItem/props' {
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { SkeletonPropsInclude } from '../Skeleton';
type TableItemPropsToken = {
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
export type TableItemPropsBasic = LabelProps & DescriptionProps & SkeletonPropsInclude & {
    value?: string;
    tag?: string;
    colspan?: string | number;
    rowspan?: string | number;
    keyItem?: string;
    index?: string | number;
};
export type TableItemProps = TableItemPropsBasic & TableItemPropsToken;
export declare const defaultsTableItem: {
    align: string;
    alignVertical: string;
    tag: string;
};
export {};
}
declare module '../constructors/TableItem/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { LabelSlots } from '../../types/labelTypes';
import { DescriptionSlots } from '../../types/descriptionTypes';
export type TableItemComponents = {};
export type TableItemEmits = {};
export interface TableItemExpose {
}
export interface TableItemSlots extends LabelSlots, DescriptionSlots {
    context?(): any;
}
export type TableItemClasses = {
    main: ConstrClass;
    label: string;
    description: string;
};
}
declare module '../constructors/TableRecord/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { TableItemPropsBasic, TableItemPropsInclude } from '../TableItem';
import { TableRecordPropsBasic } from './props';
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
}
declare module '../constructors/TableRecord/props' {
import { TableItemPropsBasic, TableItemPropsInclude } from '../TableItem';
import { TableHeaderItemPropsBasic } from '../TableHeaderItem';
import { TableRecordValue } from './basicTypes';
type TableRecordPropsToken = {
    disabled?: boolean;
    selected?: boolean;
};
export type TableRecordPropsBasic<TableItem extends TableItemPropsBasic = TableItemPropsBasic, TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic> = TableItemPropsInclude<TableItem> & {
    item?: Record<string, TableRecordValue<TableItem | TableHeaderItem> | any>;
    columns?: string[];
    isHeader?: boolean;
    index?: string;
};
export type TableRecordProps = TableRecordPropsBasic & TableRecordPropsToken;
export declare const defaultsTableRecord: {};
export {};
}
declare module '../constructors/TableRecord/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { TableHeaderItemComponentInclude, TableHeaderItemEmits } from '../TableHeaderItem';
import { TableItemComponentInclude } from '../TableItem';
import { TableRecordItemSlots } from './basicTypes';
export type TableRecordComponents = TableHeaderItemComponentInclude & TableItemComponentInclude;
export type TableRecordEmits = TableHeaderItemEmits;
export interface TableRecordExpose {
}
export interface TableRecordSlots = TableRecordItemSlots;
export type TableRecordClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/Tabs/props' {
import { ListSelectedList } from '@dxtmisha/functional';
import { TabItemPropsBasic } from '../TabItem';
import { TabsNavigationPropsBasic, TabsNavigationPropsInclude } from '../TabsNavigation';
import { MotionAxisPropsBasic, MotionAxisPropsInclude } from '../MotionAxis';
import { ModelPropsSelected } from '../../types/modelTypes';
type TabsPropsToken = {};
export type TabsPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic, TabsNavigation extends TabsNavigationPropsBasic = TabsNavigationPropsBasic, MotionAxis extends MotionAxisPropsBasic = MotionAxisPropsBasic> = TabsNavigationPropsInclude<TabItem, TabsNavigation> & MotionAxisInclude<MotionAxis> & ModelPropsSelected<ListSelectedList>;
export type TabsProps = TabsPropsBasic & TabsPropsToken;
export declare const defaultsTabs: {};
export {};
}
declare module '../constructors/Tabs/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { TabsNavigationComponentInclude, TabsNavigationEmits } from '../TabsNavigation';
import { MotionAxisComponentInclude, MotionAxisEmitsInclude, MotionAxisSlots } from '../MotionAxis';
import { EventClickExpose } from '../../types/eventClickTypes';
export type TabsComponents = TabsNavigationComponentInclude & MotionAxisComponentInclude;
export type TabsEmits = TabsNavigationEmits & MotionAxisEmitsInclude;
export interface TabsExpose extends EventClickExpose {
}
export type TabsSlots = MotionAxisSlots;
export type TabsClasses = {
    main: ConstrClass;
    slide: string;
};
}
declare module '../constructors/TabsNavigation/basicTypes' {
import { ConstrBind, ListRecord, NumberOrString } from '@dxtmisha/functional';
import { TabItemPropsBasic } from '../TabItem';
import { TabsNavigationPropsBasic } from './props';
export type TabsNavigationIdsList = Record<NumberOrString, string>;
export type TabsNavigationComponentInclude = {
    tabsNavigation?: object;
};
export type TabsNavigationPropsInclude<TabItem extends TabItemPropsBasic = TabItemPropsBasic, TabsNavigation extends TabsNavigationPropsBasic = TabsNavigationPropsBasic> = {
    tabs?: ListRecord<TabItem> | ConstrBind<TabsNavigation>;
    tabItemAttrs?: ConstrBind<TabItem>;
    tabsNavigationAttrs?: ConstrBind<TabsNavigation>;
};
}
declare module '../constructors/TabsNavigation/props' {
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
export {};
}
declare module '../constructors/TabsNavigation/types' {
import { ConstrClass, ListSelectedList } from '@dxtmisha/functional';
import { HorizontalScrollComponentInclude } from '../HorizontalScroll';
import { TabItemComponentInclude } from '../TabItem';
import { EventClickEmits } from '../../types/eventClickTypes';
import { ModelEmitsSelected } from '../../types/modelTypes';
import { TabsNavigationIdsList } from './basicTypes';
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
}
declare module '../constructors/TextDescription/props' {
import { DescriptionProps } from '../../types/descriptionTypes';
type TextDescriptionPropsToken = {};
export type TextDescriptionPropsBasic = DescriptionProps & {
    tag?: string;
};
export type TextDescriptionProps = TextDescriptionPropsBasic & TextDescriptionPropsToken;
export declare const defaultsTextDescription: {
    tag: string;
};
export {};
}
declare module '../constructors/TextDescription/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { DescriptionSlots } from '../../types/descriptionTypes';
export type TextDescriptionComponents = {};
export type TextDescriptionEmits = {};
export interface TextDescriptionExpose {
}
export interface TextDescriptionSlots extends DescriptionSlots {
}
export type TextDescriptionClasses = {
    main: ConstrClass;
    description: string;
};
}
declare module '../constructors/TextLabel/props' {
import { LabelProps } from '../../types/labelTypes';
type TextLabelPropsToken = {};
export type TextLabelPropsBasic = LabelProps & {
    tag?: string;
};
export type TextLabelProps = TextLabelPropsBasic & TextLabelPropsToken;
export declare const defaultsTextLabel: {
    tag: string;
};
export {};
}
declare module '../constructors/TextLabel/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { LabelSlots } from '../../types/labelTypes';
export type TextLabelComponents = {};
export type TextLabelEmits = {};
export interface TextLabelExpose {
}
export interface TextLabelSlots extends LabelSlots {
}
export type TextLabelClasses = {
    main: ConstrClass;
    label: string;
};
}
declare module '../constructors/Textarea/props' {
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
export {};
}
declare module '../constructors/Textarea/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { FieldComponentInclude, FieldSlotsInclude } from '../Field';
import { TextareaAutosizeComponentInclude } from '../TextareaAutosize';
import { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes';
export type TextareaComponents = FieldComponentInclude & TextareaAutosizeComponentInclude;
export type TextareaEmits = FieldBasicEmits;
export interface TextareaExpose extends FieldBasicExpose {
}
export interface TextareaSlots extends FieldSlotsInclude {
}
export type TextareaClasses = {
    main: ConstrClass;
};
}
declare module '../constructors/TextareaAutosize/basicTypes' {
import { ConstrBind } from '@dxtmisha/functional';
import { TextareaAutosizePropsBasic } from './props';
export type TextareaAutosizeComponentInclude = {
    textareaAutosize?: object;
};
export type TextareaAutosizePropsInclude<TextareaAutosize extends TextareaAutosizePropsBasic = TextareaAutosizePropsBasic> = {
    textareaAttrs?: ConstrBind<TextareaAutosize>;
    autosize?: boolean;
};
}
declare module '../constructors/TextareaAutosize/props' {
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
}
declare module '../constructors/TextareaAutosize/types' {
import { ConstrClass } from '@dxtmisha/functional';
export type TextareaAutosizeComponents = {};
export type TextareaAutosizeEmits = {
    input: [event: InputEvent];
};
export interface TextareaAutosizeExpose {
    getValue(): string;
}
export interface TextareaAutosizeSlots {
}
export type TextareaAutosizeClasses = {
    main: ConstrClass;
    clone: string;
};
}
declare module '../constructors/Tooltip/basicTypes' {
import { Ref } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { AriaList } from '../../types/ariaTypes';
import { TooltipProps } from './props';
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
}
declare module '../constructors/Tooltip/props' {
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
}
declare module '../constructors/Tooltip/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { LabelSlots } from '../../types/labelTypes';
import { DescriptionSlots } from '../../types/descriptionTypes';
import { ArrowComponentInclude } from '../Arrow';
import { TooltipControl } from './basicTypes';
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
}
declare module '../constructors/Window/basicTypes' {
import { Ref } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { AriaList } from '../../types/ariaTypes';
import { WindowExpose } from './types';
import { WindowPropsBasic } from './props';
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
}
declare module '../constructors/Window/props' {
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
}
declare module '../constructors/Window/types' {
import { ConstrClass } from '@dxtmisha/functional';
import { ButtonComponentInclude } from '../Button';
import { ImageComponentInclude, ImageEmitsInclude } from '../Image';
import { ScrollbarComponentInclude, ScrollbarEmitsInclude } from '../Scrollbar';
import { ModelEmitsOpen } from '../../types/modelTypes';
import { WindowControlItem, WindowEmitOptions } from './basicTypes';
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
}
declare module '../classes/AreaInclude' {
import { AreaPropsInclude } from '../types/areaTypes';
export declare class AreaInclude {
    protected readonly props: AreaPropsInclude;
    constructor(props: AreaPropsInclude);
    protected readonly updateValue: () => void;
}
}
declare module '../classes/AriaStaticInclude' {
import { AriaList } from '../types/ariaTypes';
import { RoleType } from '../types/roleTypes';
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
    static orientation(orientation?: AriaList['aria-orientation']): AriaList;
    static valueMinMax(value?: string | number, min?: string | number, max?: string | number): AriaList;
    static isTrueOrFalse(value?: boolean): "true" | "false" | undefined;
    protected static isDataToData<V>(name: string, value?: V): AriaList;
}
}
declare module '../classes/CaptionInclude' {
import { VNode } from 'vue';
import { SkeletonInclude } from '../constructors/Skeleton';
import { CaptionProps, CaptionSlots } from '../types/captionTypes';
import { AriaTrueOrFalse, RoleType } from '../library';
import { NumberOrString } from '@dxtmisha/functional-basic';
export declare class CaptionInclude {
    protected readonly props: Readonly<CaptionProps>;
    protected readonly className: string;
    protected readonly slots?: CaptionSlots | undefined;
    protected readonly skeleton?: SkeletonInclude | undefined;
    protected readonly tag: string;
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
}
declare module '../classes/ClientOnlyInclude' {
import { ClientOnlyPropsInclude } from '../types/clientOnlyTypes';
import { Ref } from 'vue';
export declare class ClientOnlyInclude {
    protected readonly props?: ClientOnlyPropsInclude | undefined;
    isMounted: Ref<boolean, boolean>;
    constructor(props?: ClientOnlyPropsInclude | undefined);
    isRender(): boolean;
}
}
declare module '../classes/ComponentIncludeAbstract' {
import { VNode, Ref, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents } from '@dxtmisha/functional';
import { ComponentIncludeExposeItem, ComponentIncludeExtra, ComponentIncludeProps, ComponentIncludePropsAttrs } from '../types/componentInclude';
export declare abstract class ComponentIncludeAbstract<Props extends Record<string, any>, PropsExtra extends Record<string, any>, ComponentExpose extends Record<string, any> = Record<string, any>, ComponentSlots extends Record<string, any> = Record<string, any>, PartialPropsExtra extends Record<string, any> = Partial<ConstrBind<PropsExtra>>> {
    protected readonly className: string;
    protected readonly props: ComponentIncludeProps<Props>;
    protected readonly components?: DesignComponents<any, Props> | undefined;
    protected readonly extra?: ComponentIncludeExtra<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    protected readonly element: Ref<ConstrBind<ComponentExpose> | undefined, ConstrBind<ComponentExpose> | undefined>;
    protected readonly exposeItems: ComponentIncludeExposeItem[] | undefined;
    protected readonly hasInitElement: boolean;
    protected abstract readonly name: string;
    protected abstract readonly propsAttrsName?: ComponentIncludePropsAttrs<Props> | string;
    constructor(className: string, props: ComponentIncludeProps<Props>, components?: DesignComponents<any, Props> | undefined, extra?: ComponentIncludeExtra<PropsExtra> | undefined, index?: string | undefined);
    readonly binds: ComputedRef<PartialPropsExtra>;
    get expose(): ComponentExpose;
    get is(): boolean;
    getElement(): ConstrBind<ComponentExpose> | undefined;
    readonly render: (slotsChildren?: ComponentSlots, attrs?: PartialPropsExtra, isShow?: () => boolean, index?: string) => VNode[];
    protected getClassName(): string;
    protected getProps(): Props;
    protected getPropsAttrs(): ConstrBind<Props> | undefined;
    protected getExtra(): PartialPropsExtra | undefined;
    protected getAttrs(attrs?: PartialPropsExtra): PartialPropsExtra;
    protected getExposeItem<V = any>(item: ComponentIncludeExposeItem<V>): ((...attrs: any[]) => V);
    protected toBinds(): PartialPropsExtra;
    protected toExpose(): ComponentExpose;
    protected initRender(slotsChildren?: ComponentSlots, attrs?: PartialPropsExtra, isShow?: () => boolean, index?: string): VNode[];
}
}
declare module '../classes/DescriptionInclude' {
import { VNode } from 'vue';
import { RefOrNormal, RefOrNormalOrFunction } from '@dxtmisha/functional';
import { SkeletonInclude } from '../constructors/Skeleton';
import { DescriptionProps, DescriptionSlots } from '../types/descriptionTypes';
export declare class DescriptionInclude {
    protected readonly props: RefOrNormalOrFunction<DescriptionProps>;
    protected readonly className: string;
    protected readonly slots?: DescriptionSlots | undefined;
    protected readonly skeleton?: SkeletonInclude | undefined;
    protected readonly tag?: RefOrNormal<string | undefined>;
    protected readonly elementIdDefault: string;
    constructor(props: RefOrNormalOrFunction<DescriptionProps>, className: string, slots?: DescriptionSlots | undefined, skeleton?: SkeletonInclude | undefined, tag?: RefOrNormal<string | undefined>);
    get is(): boolean;
    get id(): string;
    render(childrenExtra?: any[], props?: Record<string, any>): VNode[];
    protected getProps(): DescriptionProps;
}
}
declare module '../classes/EnabledInclude' {
import { ProgressInclude } from '../constructors/Progress';
import { AriaList } from '../types/ariaTypes';
import { EnabledProps } from '../types/enabledTypes';
export declare class EnabledInclude {
    protected readonly props: EnabledProps;
    protected readonly progress?: ProgressInclude | undefined;
    constructor(props: EnabledProps, progress?: ProgressInclude | undefined);
    get isEnabled(): boolean;
    get isReadonly(): boolean;
    get isDisabled(): boolean;
    get isDisabledOrUndefined(): boolean | undefined;
    get aria(): AriaList;
}
}
declare module '../classes/EventClickInclude' {
import { ConstrEmit, ConstrHrefProps } from '@dxtmisha/functional';
import { EnabledInclude } from './EnabledInclude';
import { EventClickEmits, EventClickExpose, EventClickProps, EventClickValue } from '../types/eventClickTypes';
export declare class EventClickInclude {
    protected readonly props?: EventClickProps | undefined;
    protected readonly enabled?: EnabledInclude | undefined;
    protected readonly emits?: ConstrEmit<EventClickEmits> | undefined;
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
    protected getOptions(event: MouseEvent): EventClickValue;
    protected getTargetType(event: MouseEvent): string;
    protected toRouter(): boolean;
    protected emit(event: MouseEvent, options: EventClickValue): void;
}
}
declare module '../classes/Field/FieldArrowInclude' {
import { FieldValueInclude } from './FieldValueInclude';
import { FieldTypeInclude } from './FieldTypeInclude';
import { FieldAllProps, FieldArrowProps } from '../../types/fieldTypes';
export declare class FieldArrowInclude {
    protected readonly props: FieldAllProps;
    protected readonly value: FieldValueInclude;
    protected readonly type?: FieldTypeInclude | undefined;
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
    protected get step(): number;
    protected get min(): number | undefined;
    protected get max(): number | undefined;
}
}
declare module '../classes/Field/FieldAttributesInclude' {
import { FieldTypeInclude } from './FieldTypeInclude';
import { FieldPatternInclude } from './FieldPatternInclude';
import { FieldInputModeInclude } from './FieldInputModeInclude';
import { FieldAllProps } from '../../types/fieldTypes';
export declare class FieldAttributesInclude {
    protected readonly props: FieldAllProps;
    protected readonly type?: FieldTypeInclude | undefined;
    protected readonly pattern?: FieldPatternInclude | undefined;
    protected readonly inputMode?: FieldInputModeInclude | undefined;
    protected readonly typeDefault: string;
    constructor(props: FieldAllProps, type?: FieldTypeInclude | undefined, pattern?: FieldPatternInclude | undefined, inputMode?: FieldInputModeInclude | undefined, typeDefault?: string);
    get list(): Record<string, any>;
    get listForCheck(): Record<string, any>;
    get listForInput(): Record<string, any>;
    get listForCheckbox(): Record<string, any>;
    protected getAttributes(): (keyof typeof this.props)[];
    protected getInputAttributes(): (keyof typeof this.props)[];
    protected getData(attributes: (keyof typeof this.props)[]): Record<string, any>;
}
}
declare module '../classes/Field/FieldChangeInclude' {
import { FieldAllProps } from '../../types/fieldTypes';
import { Ref } from 'vue';
export declare class FieldChangeInclude {
    readonly item: Ref<boolean, boolean>;
    constructor(props: FieldAllProps);
    is(): boolean;
    set(change: boolean): void;
    to(): void;
}
}
declare module '../classes/Field/FieldCodeInclude' {
import { FieldAllProps } from '../../types/fieldTypes';
export declare class FieldCodeInclude {
    protected readonly props: FieldAllProps;
    constructor(props: FieldAllProps);
    get(state?: ValidityState): string | undefined;
    protected getIndex(state: ValidityState): keyof ValidityState | undefined;
}
}
declare module '../classes/Field/FieldElementInclude' {
import { Ref } from 'vue';
import { FieldAllProps, FieldElementInput } from '../../types/fieldTypes';
export declare class FieldElementInclude {
    protected readonly props: FieldAllProps;
    protected readonly element: Ref<FieldElementInput>;
    constructor(props: FieldAllProps, element: Ref<FieldElementInput>);
    get(): HTMLInputElement | undefined;
    getElement(): Ref<FieldElementInput>;
    findByName(nameSelectors: string | HTMLInputElement): HTMLInputElement | undefined;
    clear(): this;
}
}
declare module '../classes/Field/FieldEventInclude' {
import { ConstrEmit } from '@dxtmisha/functional';
import { FieldChangeInclude } from './FieldChangeInclude';
import { FieldValueInclude } from './FieldValueInclude';
import { FieldValidationInclude } from './FieldValidationInclude';
import { ModelInclude } from '../ModelInclude';
import { FieldAllProps, FieldBasicEmits, FieldValidationItem } from '../../types/fieldTypes';
export declare class FieldEventInclude {
    protected readonly props: FieldAllProps;
    protected readonly change: FieldChangeInclude;
    protected readonly value: FieldValueInclude;
    protected readonly validation?: FieldValidationInclude | undefined;
    protected readonly emits?: ConstrEmit<FieldBasicEmits> | undefined;
    protected readonly model: ModelInclude;
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
    protected isValue(type: string & keyof FieldBasicEmits): boolean;
    protected getData(): FieldValidationItem;
    protected getValidation(type: string & keyof FieldBasicEmits): FieldValidationItem;
    protected onAndChange(event?: InputEvent | Event): this;
}
}
declare module '../classes/Field/FieldInputCheckInclude' {
import { FieldCodeInclude } from './FieldCodeInclude';
import { FieldElementDom, FieldPatternElement, FieldPatternItemOrFunction, FieldValidationItem } from '../../types/fieldTypes';
export declare class FieldInputCheckInclude<Value = any> {
    readonly pattern: FieldPatternItemOrFunction;
    readonly group: string;
    protected readonly code?: FieldCodeInclude | undefined;
    readonly input: HTMLInputElement | undefined;
    constructor(pattern: FieldPatternItemOrFunction, group?: string, code?: FieldCodeInclude | undefined);
    check(value: Value): FieldValidationItem;
    checkByInput(input: FieldElementDom): FieldValidationItem;
    protected getAttributes(): FieldPatternElement;
    static getGroupDefault(): string;
}
export type FieldInputCheckListInclude = Record<string, FieldInputCheckInclude>;
}
declare module '../classes/Field/FieldInputModeInclude' {
import { FieldTypeInclude } from './FieldTypeInclude';
import { FieldAllProps } from '../../types/fieldTypes';
export declare class FieldInputModeInclude {
    protected readonly props: FieldAllProps;
    protected readonly type: FieldTypeInclude;
    constructor(props: FieldAllProps, type: FieldTypeInclude);
    get item(): string | undefined;
    get autocomplete(): string | undefined;
}
}
declare module '../classes/Field/FieldMatchInclude' {
import { TextInclude } from '../TextInclude';
import { FieldElementInclude } from './FieldElementInclude';
import { FieldValueInclude } from './FieldValueInclude';
import { FieldAllProps, FieldValidationItem } from '../../types/fieldTypes';
export declare class FieldMatchInclude {
    protected readonly props: FieldAllProps;
    protected readonly element: FieldElementInclude;
    protected readonly value: FieldValueInclude;
    protected readonly text?: TextInclude | undefined;
    constructor(props: FieldAllProps, element: FieldElementInclude, value: FieldValueInclude, text?: TextInclude | undefined);
    is(): boolean;
    getSelectors(): string | HTMLInputElement | undefined;
    getValidationMessage(): string;
    check(): FieldValidationItem | undefined;
}
}
declare module '../classes/Field/FieldPatternInclude' {
import { FieldTypeInclude } from './FieldTypeInclude';
import { FieldAllProps } from '../../types/fieldTypes';
export declare class FieldPatternInclude {
    protected readonly props: FieldAllProps;
    protected readonly type?: FieldTypeInclude | undefined;
    constructor(props: FieldAllProps, type?: FieldTypeInclude | undefined);
    get item(): string | undefined;
}
}
declare module '../classes/Field/FieldTypeInclude' {
import { FieldVisibilityInclude } from './FieldVisibilityInclude';
import { FieldAllProps, FieldType } from '../../types/fieldTypes';
export declare class FieldTypeInclude {
    protected readonly props: FieldAllProps;
    protected readonly visibility?: FieldVisibilityInclude | undefined;
    constructor(props: FieldAllProps, visibility?: FieldVisibilityInclude | undefined);
    get item(): FieldType;
    get(): FieldType;
}
}
declare module '../classes/Field/FieldValidationInclude' {
import { ClientOnlyInclude } from '../ClientOnlyInclude';
import { FieldInputCheckInclude } from './FieldInputCheckInclude';
import { FieldAttributesInclude } from './FieldAttributesInclude';
import { FieldChangeInclude } from './FieldChangeInclude';
import { FieldValueInclude } from './FieldValueInclude';
import { FieldCodeInclude } from './FieldCodeInclude';
import { FieldMatchInclude } from './FieldMatchInclude';
import { FieldAllProps, FieldValidationItem } from '../../types/fieldTypes';
import { Ref, ComputedRef } from 'vue';
export declare class FieldValidationInclude {
    protected readonly props: FieldAllProps;
    protected readonly attributes: FieldAttributesInclude;
    protected readonly value: FieldValueInclude;
    protected readonly change?: FieldChangeInclude | undefined;
    protected readonly code?: FieldCodeInclude | undefined;
    protected readonly match?: FieldMatchInclude | undefined;
    protected readonly validation: Ref<FieldValidationItem | undefined, FieldValidationItem | undefined>;
    protected readonly clientOnly: ClientOnlyInclude;
    constructor(props: FieldAllProps, attributes: FieldAttributesInclude, value: FieldValueInclude, change?: FieldChangeInclude | undefined, code?: FieldCodeInclude | undefined, match?: FieldMatchInclude | undefined);
    protected readonly input: ComputedRef<FieldInputCheckInclude<any> | undefined>;
    readonly item: ComputedRef<FieldValidationItem>;
    get message(): string;
    isError(): boolean;
    readonly checkValidity: () => boolean;
    readonly expose: () => {
        checkValidity: () => boolean;
        getValidationMessage: () => string;
    };
    set(validation: Record<string, any> | FieldValidationItem): this;
    protected getValidationItemNone(): FieldValidationItem;
    protected checkGlobal(): FieldValidationItem | undefined;
    protected checkItem(): FieldValidationItem | undefined;
    protected checkByInput(value: any): FieldValidationItem | undefined;
}
}
declare module '../classes/Field/FieldValueInclude' {
import { ToRefs, Ref, ComputedRef } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';
import { FieldElementInclude } from './FieldElementInclude';
import { FieldValueProps } from '../../types/fieldTypes';
export declare class FieldValueInclude<Value = any> {
    protected readonly props: FieldValueProps<Value>;
    protected readonly refs: ToRefs<FieldValueProps<Value>>;
    protected readonly element?: FieldElementInclude | undefined;
    protected readonly original?: RefOrNormal<Value> | undefined;
    readonly item: Ref<Value | undefined, Value | undefined>;
    readonly isFull: Ref<boolean, boolean>;
    protected readonly hasEdit: Ref<boolean, boolean>;
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
    protected isCheckbox(target: HTMLInputElement): boolean;
    protected isDifference(value?: any): boolean;
    protected getOriginal(): any;
    protected readonly update: () => void;
    protected isEdit(value?: Value): boolean;
}
}
declare module '../classes/Field/FieldVisibilityInclude' {
import { Ref } from 'vue';
export declare class FieldVisibilityInclude {
    readonly item: Ref<boolean, boolean>;
    toggle(): this;
}
}
declare module '../classes/FocusDirectionInclude' {
import { Ref } from 'vue';
import { EventItem } from '@dxtmisha/functional';
export type FocusCoordinates = {
    x: number;
    y: number;
};
export declare class FocusDirectionInclude {
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly selector: string;
    protected readonly activeSelector: string;
    protected readonly activeClass: string;
    protected keydownEvent?: EventItem<HTMLElement, KeyboardEvent>;
    protected currentActive?: HTMLElement;
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
    protected start(): void;
    protected stop(): void;
    protected move(direction: string): void;
    protected isCorrectDirection(difference: FocusCoordinates, direction: string): boolean;
    protected getActiveElement(): HTMLElement | undefined;
    protected getCurrentActive(): HTMLElement | undefined;
    protected getCoordinatesDifference(center1: FocusCoordinates, center2: FocusCoordinates): FocusCoordinates;
    protected getDistance(difference: FocusCoordinates, direction: string): number;
    protected getElementCenter(targetElement: HTMLElement): FocusCoordinates;
    protected findNearestCandidate(direction: string): HTMLElement | undefined;
    protected clearAllActiveClasses(): void;
    protected readonly onKeydown: (event: KeyboardEvent) => void;
}
}
declare module '../classes/HeadroomInclude' {
import { Ref, ToRefs, ComputedRef } from 'vue';
import { EventItem, ConstrEmit } from '@dxtmisha/functional';
import { ElementOrWindow } from '@dxtmisha/functional-basic';
import { HeadroomEmitsInclude, HeadroomEventItem, HeadroomExposeInclude, HeadroomPropsInclude } from '../types/headroomTypes';
export declare class HeadroomInclude {
    protected readonly props: HeadroomPropsInclude;
    protected readonly refs: ToRefs<HeadroomPropsInclude>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly className: string;
    protected readonly emits?: ConstrEmit<HeadroomEmitsInclude> | undefined;
    readonly value: Ref<number, number>;
    readonly disappearsValue: Ref<number, number>;
    readonly isSticky: ComputedRef<boolean>;
    readonly transformValue: ComputedRef<number>;
    readonly transformPercent: ComputedRef<number>;
    protected readonly valuePrevious: Ref<number, number>;
    protected readonly valueDifference: ComputedRef<number>;
    protected eventScroll?: EventItem<ElementOrWindow, Event>;
    constructor(props: HeadroomPropsInclude, refs: ToRefs<HeadroomPropsInclude>, element: