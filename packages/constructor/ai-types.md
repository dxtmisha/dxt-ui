All these methods are in the @dxtmisha/constructor (v0.100.0) library.
/** Class for managing component layout area values and CSS variable applications. */
export declare class AreaInclude {
  constructor(props: AreaPropsInclude)
}
/** Static ARIA attribute generator utility class. */
export declare class AriaStaticInclude {
  static role(role?: RoleType): AriaList
  static atomic(isAtomic?: boolean): AriaList
  static checked(isChecked?: boolean): AriaList
  static controls(controls?: string): AriaList
  static current(value?: AriaList['aria-current']): AriaList
  static busy(isBusy?: boolean): AriaList
  static describedby(id?: string): AriaList
  static disabled(isDisabled?: boolean): AriaList
  static expanded(isExpanded?: boolean): AriaList
  static haspopup(haspopup?: AriaList['aria-haspopup']): AriaList
  static label(label?: string | number): AriaList
  static labelledby(id?: string): AriaList
  static invalid(isInvalid?: boolean): AriaList
  static control(id?: string, controls?: string, haspopup?: AriaList['aria-haspopup'], expanded?: boolean): AriaList
  static hidden(isHidden?: boolean): AriaList
  static live(live?: AriaList['aria-live']): AriaList
  static ariaModal(isModal?: boolean): AriaList
  static modal(isModal?: boolean, ariaLabelledby?: string, ariaDescribedby?: string): AriaList
  static multiselectable(isMultiselectable?: boolean): AriaList
  static selected(isSelected?: boolean): AriaList
  static sort(sortDir?: AriaList['aria-sort'] | string): AriaList
  static orientation(orientation?: AriaList['aria-orientation']): AriaList
  static valueMinMax(value?: string | number, min?: string | number, max?: string | number): AriaList
  static isTrueOrFalse(value?: boolean): AriaTrueOrFalse | undefined
}
/** Class for managing component caption state, ARIA attributes, and VNode rendering. */
export declare class CaptionInclude {
  constructor(props: Readonly<CaptionProps>, className: string, slots?: CaptionSlots | undefined, skeleton?: SkeletonInclude | undefined, tag?: string)
  get is(): boolean
  get binds(): {
    'aria-activedescendant'?: string
    'aria-atomic'?: AriaTrueOrFalse
    'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
    'aria-busy'?: AriaTrueOrFalse
    'aria-checked'?: AriaTrueOrFalse | 'mixed'
    'aria-colcount'?: number
    'aria-colindex'?: number
    'aria-colspan'?: number
    'aria-controls'?: string
    'aria-current'?: AriaTrueOrFalse | 'page' | 'step' | 'location' | 'date' | 'time'
    'aria-describedby'?: string
    'aria-details'?: string
    'aria-disabled'?: AriaTrueOrFalse
    'aria-errormessage'?: string
    'aria-expanded'?: AriaTrueOrFalse
    'aria-flowto'?: string
    'aria-grabbed'?: AriaTrueOrFalse
    'aria-haspopup'?: AriaTrueOrFalse | 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid'
    'aria-hidden'?: AriaTrueOrFalse
    'aria-invalid'?: AriaTrueOrFalse | 'grammar' | 'spelling'
    'aria-keyshortcuts'?: string
    'aria-label'?: string
    'aria-labelledby'?: string
    'aria-level'?: number
    'aria-live'?: 'off' | 'polite' | 'assertive'
    'aria-modal'?: AriaTrueOrFalse
    'aria-multiline'?: AriaTrueOrFalse
    'aria-multiselectable'?: AriaTrueOrFalse
    'aria-orientation'?: 'horizontal' | 'vertical' | 'undefined'
    'aria-owns'?: string
    'aria-placeholder'?: string
    'aria-posinset'?: number
    'aria-pressed'?: AriaTrueOrFalse | 'mixed'
    'aria-readonly'?: AriaTrueOrFalse
    'aria-relevant'?: 'additions' | 'removals' | 'text' | 'all' | string
    'aria-required'?: AriaTrueOrFalse
    'aria-roledescription'?: string
    'aria-rowcount'?: number
    'aria-rowindex'?: number
    'aria-rowspan'?: number
    'aria-selected'?: AriaTrueOrFalse
    'aria-setsize'?: number
    'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
    'aria-valuemax'?: string | number
    'aria-valuemin'?: string | number
    'aria-valuenow'?: string | number
    'aria-valuetext'?: string
    'id'?: string
    'role'?: RoleType
    'tabindex'?: NumberOrString
    'class': {
      [x: string]: boolean | undefined
    }
    'data-event-type': string
  }
  render(): VNode[]
}
/** Class for managing component rendering strictly on client side. */
export declare class ClientOnlyInclude {
  isMounted: Ref<boolean, boolean>
  constructor(props?: ClientOnlyPropsInclude | undefined)
  isRender(): boolean
}
/**
 * Abstract base class for inclusion, rendering, and state management of sub-components.
 * @note
 * When extending this class:
 * - Place properties and event listeners that change RARELY inside `toBinds()`.
 * - Merge properties that change FREQUENTLY during runtime inside `getAttrs()` to ensure correct reactive updates.
 */
export declare abstract class ComponentIncludeAbstract<Props extends Record<string, any>, PropsExtra extends Record<string, any>, ComponentExpose extends Record<string, any> = Record<string, any>, ComponentSlots extends Record<string, any> = Record<string, any>, PartialPropsExtra extends Record<string, any> = Partial<ConstrBind<PropsExtra>>> {
  protected abstract readonly name: string
  protected abstract readonly propsAttrsName?: ComponentIncludePropsAttrs<Props> | string
  constructor(className: string, props: ComponentIncludeProps<Props>, components?: DesignComponents<any, Props> | undefined, extra?: ComponentIncludeExtra<PropsExtra> | undefined, index?: string | undefined)
  readonly binds: ComputedRef<PartialPropsExtra>
  get expose(): ComponentExpose
  get is(): boolean
  getElement(): ConstrBind<ComponentExpose> | undefined
  readonly render: (slotsChildren?: ComponentSlots, attrs?: PartialPropsExtra, isShow?: () => boolean, index?: string) => VNode[]
}
/** Utility class for connecting and rendering description elements with slots, translations, and skeletons. */
export declare class DescriptionInclude {
  constructor(props: RefOrNormalOrFunction<DescriptionProps>, className: string, slots?: DescriptionSlots | undefined, skeleton?: SkeletonInclude | undefined, tag?: RefOrNormal<string | undefined>)
  get is(): boolean
  get id(): string
  render(childrenExtra?: any[], props?: Record<string, any>): VNode[]
}
/** Utility class for controlling component active, disabled, and readonly interactive states. */
export declare class EnabledInclude {
  constructor(props: EnabledProps, progress?: ProgressInclude | undefined)
  get isEnabled(): boolean
  get isReadonly(): boolean
  get isDisabled(): boolean
  get isDisabledOrUndefined(): boolean | undefined
  get aria(): AriaList
}
/** Base class for button click events, keyboard interactions, and router navigation. */
export declare class EventClickInclude {
  constructor(props?: EventClickProps | undefined, enabled?: EnabledInclude | undefined, emits?: ConstrEmit<EventClickEmits> | undefined)
  get binds(): {
    onClick: (event: MouseEvent, options?: EventClickValue) => void
    onKeydown: (event: KeyboardEvent, options?: EventClickValue) => void
    href?: string
  }
  get expose(): EventClickExpose
  get href(): ConstrHrefProps
  readonly onClick: (event: MouseEvent, options?: EventClickValue) => void
  readonly onKeydown: (event: KeyboardEvent, options?: EventClickValue) => void
}
/** Class for stepper and carousel field arrow navigation and value incrementing/decrementing. */
export declare class FieldArrowInclude {
  constructor(props: FieldAllProps, value: FieldValueInclude, type?: FieldTypeInclude | undefined)
  get is(): boolean
  get disabledPrevious(): boolean
  get disabledNext(): boolean
  isCarousel(): boolean
  isStepper(): boolean
  isPrevious(value: number): boolean
  isNext(value: number): boolean
  get(): FieldArrowProps['arrow'] | undefined
  align(): string | undefined
  previous(): this
  next(): this
  toMin(): this
  toMax(): this
}
/** Class for resolving input, checkbox, and validation element HTML attributes. */
export declare class FieldAttributesInclude {
  constructor(props: FieldAllProps, type?: FieldTypeInclude | undefined, pattern?: FieldPatternInclude | undefined, inputMode?: FieldInputModeInclude | undefined, typeDefault?: string)
  get list(): Record<string, any>
  get listForCheck(): Record<string, any>
  get listForInput(): Record<string, any>
  get listForCheckbox(): Record<string, any>
}
/** Class tracking field value modification state. */
export declare class FieldChangeInclude {
  readonly item: Ref<boolean, boolean>
  constructor(props: FieldAllProps)
  is(): boolean
  set(change: boolean): void
  to(): void
}
/** Class for processing standard validation error messages. */
export declare class FieldCodeInclude {
  constructor(props: FieldAllProps)
  get(state?: ValidityState): string | undefined
}
/** Class for querying and clearing input DOM elements. */
export declare class FieldElementInclude {
  constructor(props: FieldAllProps, element: Ref<FieldElementInput>)
  get(): HTMLInputElement | undefined
  getElement(): Ref<FieldElementInput>
  findByName(nameSelectors: string | HTMLInputElement): HTMLInputElement | undefined
  clear(): this
}
/** Class for managing field input, change, focus, blur, select, clear, and model events. */
export declare class FieldEventInclude {
  constructor(props: FieldAllProps, change: FieldChangeInclude, value: FieldValueInclude, validation?: FieldValidationInclude | undefined, emits?: ConstrEmit<FieldBasicEmits> | undefined)
  isEnabled(): boolean
  readonly onBlur: () => void
  readonly onInput: (event: InputEvent, data?: Record<string, any>) => void
  readonly onChange: (event?: InputEvent | Event) => void
  readonly onSelect: (event: Event, data?: Record<string, any>) => void
  readonly onChecked: (event: Event) => void
  readonly onRadio: (event: Event) => void
  readonly onClear: (event: MouseEvent) => void
  readonly onValue: (value: any) => void
  readonly on: <E>(event?: E, type?: string & keyof FieldBasicEmits) => this
}
/** Class creating hidden input for pattern-based native validation. */
export declare class FieldInputCheckInclude<Value = any> {
  readonly pattern: FieldPatternItemOrFunction
  readonly group: string
  readonly input: HTMLInputElement | undefined
  constructor(pattern: FieldPatternItemOrFunction, group?: string, code?: FieldCodeInclude | undefined)
  check(value: Value): FieldValidationItem
  checkByInput(input: FieldElementDom): FieldValidationItem
  static getGroupDefault(): string
}
export type FieldInputCheckListInclude = Record<string, FieldInputCheckInclude>
/** Class resolving virtual keyboard mode and autocomplete attributes. */
export declare class FieldInputModeInclude {
  constructor(props: FieldAllProps, type: FieldTypeInclude)
  get item(): string | undefined
  get autocomplete(): string | undefined
}
/** Class checking field value equality against another target element. */
export declare class FieldMatchInclude {
  constructor(props: FieldAllProps, element: FieldElementInclude, value: FieldValueInclude, text?: TextInclude | undefined)
  is(): boolean
  getSelectors(): string | HTMLInputElement | undefined
  getValidationMessage(): string
  check(): FieldValidationItem | undefined
}
/** Class resolving validation regular expression pattern strings. */
export declare class FieldPatternInclude {
  constructor(props: FieldAllProps, type?: FieldTypeInclude | undefined)
  get item(): string | undefined
}
/** Class resolving field input type value. */
export declare class FieldTypeInclude {
  constructor(props: FieldAllProps, visibility?: FieldVisibilityInclude | undefined)
  get item(): FieldType
  get(): FieldType
}
/** Class managing reactive field validity state and error messages. */
export declare class FieldValidationInclude {
  constructor(props: FieldAllProps, attributes: FieldAttributesInclude, value: FieldValueInclude, change?: FieldChangeInclude | undefined, code?: FieldCodeInclude | undefined, match?: FieldMatchInclude | undefined)
  readonly item: ComputedRef<FieldValidationItem>
  get message(): string
  isError(): boolean
  readonly checkValidity: () => boolean
  readonly expose: () => {
    checkValidity: () => boolean
    getValidationMessage: () => string
  }
  set(validation: Record<string, any> | FieldValidationItem): this
}
/** Class managing reactive input value state, type conversions, and updates. */
export declare class FieldValueInclude<Value = any> {
  readonly item: Ref<Value | undefined, Value | undefined>
  readonly isFull: Ref<boolean, boolean>
  constructor(props: FieldValueProps<Value>, refs: ToRefs<FieldValueProps<Value>>, element?: FieldElementInclude | undefined, original?: RefOrNormal<Value> | undefined)
  readonly itemByFull: ComputedRef<Value | undefined>
  get number(): number
  get string(): string
  get boolean(): boolean
  get length(): number
  is(): boolean
  isValue(): boolean
  get(): Value | undefined
  getToArray(): Value[]
  readonly expose: () => {
    value: Ref<Value | undefined, Value | undefined>
    getValue: () => Value | undefined
  }
  set(value: any): this
  setByEvent(eventValue: Event | Record<string, any> | any): this
  setByTarget(target: HTMLInputElement): this
  setByChecked(event: Event): this
  setByRadio(event: Event): this
  setFull(isFull: boolean): void
  setHasEdit(hasEdit: boolean): void
  setToOriginal(): this
  clear(): this
}
/** Class managing password visibility toggle state. */
export declare class FieldVisibilityInclude {
  readonly item: Ref<boolean, boolean>
  toggle(): this
}
export type FocusCoordinates = {
  x: number
  y: number
}
/** Class managing directional keyboard focus navigation across child elements while retaining container focus. */
export declare class FocusDirectionInclude {
  constructor(element: Ref<HTMLElement | undefined>, selector?: string, activeSelector?: string, activeClass?: string)
  get binds(): {
    tabindex: number
    onFocus: () => void
    onBlur: () => void
  }
  activateDefault(): this
  clearActive(): this
  readonly onFocus: () => void
  readonly onBlur: () => void
}
/** Headroom class managing sticky header scroll status, transformation offsets, and disappear modes. */
export declare class HeadroomInclude {
  readonly value: Ref<number, number>
  readonly disappearsValue: Ref<number, number>
  readonly isSticky: ComputedRef<boolean>
  readonly transformValue: ComputedRef<number>
  readonly transformPercent: ComputedRef<number>
  constructor(props: HeadroomPropsInclude, refs: ToRefs<HeadroomPropsInclude>, element: Ref<HTMLElement | undefined>, className?: string, emits?: ConstrEmit<HeadroomEmitsInclude> | undefined)
  get expose(): HeadroomExposeInclude
  readonly update: () => void
}
/** LabelInclude extension supporting label text highlighting. */
export declare class LabelHighlightInclude extends LabelInclude {
  constructor(props: Readonly<LabelHighlightProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: LabelHighlightSlots | undefined, elementsExtra?: (() => VNode[]) | undefined, skeleton?: SkeletonInclude | undefined)
  isHighlight(): boolean
}
/** Utility class for connecting and rendering label elements. */
export declare class LabelInclude {
  constructor(props: RefOrNormalOrFunction<LabelProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: (LabelSlots | LabelAlternativeSlots) | undefined, elementsExtra?: (() => VNode[]) | undefined, labelReplacing?: Ref<string | number | undefined> | undefined, alternativeSlots?: boolean | undefined, skeleton?: SkeletonInclude | undefined, tag?: RefOrNormalOrFunction<string | undefined>, ignoreLabelIfSlot?: boolean | undefined)
  get is(): boolean
  get id(): string
  render(childrenExtra?: any[], props?: Record<string, any>): VNode[]
}
/** LabelInclude extension handling numeric formatting and constraints. */
export declare class LabelNumberInclude extends LabelInclude {
  constructor(props: Readonly<LabelNumberProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: LabelNumberSlots | undefined, elementsExtra?: (() => VNode[]) | undefined, skeleton?: SkeletonInclude | undefined)
}
/** Class managing model synchronization and event emission. */
export declare class ModelInclude<Value = string> {
  constructor(index: string, emits?: any | undefined, syncValue?: RefType<Value> | undefined)
  isValue(): this is {
    syncValue: Ref<Value>
  }
  getBinds(): {
    [x: string]: Value | ((value: Value) => void)
  }
  readonly update: (value: Value) => void
  emit(value: Value): void
}
/** Class managing reactive model values with click triggers and selection support. */
export declare class ModelValueInclude<Value = any> {
  readonly value: Ref<Value | undefined, Value | undefined>
  constructor(index: string, emits?: any | undefined, event?: EventClickInclude | undefined, inputValue?: RefType<any> | undefined, readonly?: RefType<boolean | undefined> | undefined, multiple?: RefType<boolean | undefined> | undefined)
  getValue(): Value | undefined
  set(value?: Value): void
  readonly onClick: (event: MouseEvent, options?: EventClickValue) => void
  readonly onUpdate: (value: Value) => void
}
/** Class managing pagination calculations, row limits, and page slicing. */
export declare class PaginationInclude<T = any> {
  constructor(props: PaginationPropsInclude<T>, targetList?: T[] | (() => T[] | undefined) | undefined)
  get max(): number
  get page(): number
  get rows(): number
  get list(): T[]
}
/** Base class for Vite build plugin. */
export declare class Plugin {
  constructor(design: string, packageName: string, componentsReg: RegExp, styleVarsReg: RegExp, componentsList: PluginComponentImports, name?: string, options?: PluginOptions)
  init(): VitePlugin
}
/** Class for manipulating plugin file source code. */
export declare class PluginCode {
  constructor(id: string, code: string)
  isVue(): boolean
  isScss(): boolean
  get(): string
  getId(): string
  getCode(): string
  has(pattern: string | RegExp, flags?: string): boolean
  addAfterScript(code: string): this
  addStart(code: string): this
  addStartIfNone(code: string, pattern?: string | RegExp): this
  replace(pattern: string | RegExp, replacement: string | ((substring: string, ...args: any[]) => string)): this
}
/** Class for auto-connecting Vue components in plugin code. */
export declare class PluginComponents {
  constructor(code: PluginCode, pluginData: PluginData)
  make(): void
}
/** Class for storing plugin registration data and style mappings. */
export declare class PluginData {
  constructor(design: string, packageName: string, componentsReg: RegExp, styleVarsReg: RegExp, componentsList: PluginComponentImports)
  hasComponent(code: string): boolean
  hasVars(code: string): boolean
  getDesign(): string
  getPackageName(): string
  getComponents(code: string): PluginComponentImports
  getStyleVarsReg(): RegExp
  getStyleModification(): Record<string, string>
}
/** Class for generating style imports in plugin code. */
export declare class PluginImport {
  constructor(packageName: string, code: string)
  get(): string
  importStyle(): this
}
/** Class transforming style properties into SCSS mixin references. */
export declare class PluginStyle {
  constructor(code: PluginCode, data: PluginData, namespace?: string)
  make(): this
}
/** Utility class for checking file types and environment modes in build plugins. */
export declare class PluginTool {
  static isSrc(id: string): boolean
  static isJs(id: string): boolean
  static isVue(id: string): boolean
  static isCss(id: string): boolean
  static isDev(mode: string): boolean
}
/** Class for managing prefix element rendering, state, and IDs. */
export declare class PrefixInclude {
  constructor(props: Readonly<PrefixProps>, className: string, slots?: PrefixSlots | undefined, skeleton?: SkeletonInclude | undefined)
  get is(): boolean
  get id(): string
  get describedby(): string
  render(): VNode[]
}
/** Class for horizontal wheel scroll interactions. */
export declare class ScrollToXInclude {
  constructor(element: Ref<HTMLElement | undefined>)
  get binds(): {
    onWheelPassive: (event: WheelEvent) => void
  }
  readonly onScrollToX: (event: WheelEvent) => void
}
/** Class wrapping useSearchRef for list query searching. */
export declare class SearchInclude<T extends SearchItem = any> {
  readonly item: ReturnType<typeof useSearchRef<T, SearchColumns<T>>>
  constructor(props: SearchPropsInclude<T>, columns?: (SearchColumns<T> | (() => SearchColumns<T>)) | undefined)
  get list(): SearchFormatList<T, SearchColumns<T>>
  get length(): number
  get search(): string
  get loading(): boolean
  isSearch(): boolean
}
/** Class managing multi-column list sorting mechanics. */
export declare class SortInclude<T = any> {
  readonly columns: ComputedRef<SortColumnItem[]>
  readonly sortedList: ComputedRef<T[]>
  constructor(props: SortPropsInclude<T>, targetList?: any[] | (() => any[] | undefined) | undefined, sort?: SortIncludeSort | undefined, sortDir?: SortIncludeSortDir | undefined)
  get column(): string | undefined
  get dir(): SortDir
  isSort(): boolean
  getList(): T[]
}
/** Class managing element sticky positioning relative to parent boundaries. */
export declare class StickyInclude {
  constructor(props: StickyPropsInclude | (() => StickyPropsInclude), className: string, element: Ref<HTMLElement | undefined>, parent: Ref<HTMLElement | undefined>)
  readonly updatePosition: () => void
  readonly onScroll: () => void
}
/** Class for managing suffix element rendering, state, and IDs. */
export declare class SuffixInclude {
  constructor(props: Readonly<SuffixProps>, className: string, slots?: SuffixSlots | undefined, skeleton?: SkeletonInclude | undefined)
  get is(): boolean
  get id(): string
  get describedby(): string
  render(): VNode[]
}
/** Class for managing focus traps, tab index, and focus restoration. */
export declare class TabIndexInclude<E extends HTMLElement = HTMLElement> {
  constructor(element: Ref<E | undefined> | (() => E | undefined), active?: () => boolean, activeOpen?: () => boolean, activeClose?: () => boolean)
  goTo(): this
  reset(): this
  toggle(status: boolean): this
  updateOldElement(): void
  findFirstElement(): HTMLElement | undefined
  findLastElement(): HTMLElement | undefined
}
/** Class managing SSR-friendly component teleport destination and rendering. */
export declare class TeleportInclude {
  constructor(toDefault?: RefOrNormal<string>)
  get to(): string
  isTeleportElement(element: HTMLElement): boolean
  render(children?: RawChildren | RawSlots, props?: Record<string, any>): VNode[]
}
/** Class managing component text translations and getters. */
export declare class TextInclude {
  static getObject(): TextIncludeInstance
  static get list(): ShallowRef<TextList>
  static initText(texts: TextList): void
  readonly texts: Record<string, () => (string | undefined)>
  constructor(props: TextAllPropsInclude)
  get breadcrumb(): string | undefined
  get cancel(): string | undefined
  get characterLimit(): string | undefined
  get characterRemaining(): string | undefined
  get close(): string | undefined
  get copiedClipboard(): string | undefined
  get decrement(): string | undefined
  get entriesMatch(): string | undefined
  get first(): string | undefined
  get hide(): string | undefined
  get increment(): string | undefined
  get info(): string | undefined
  get last(): string | undefined
  get loading(): string | undefined
  get more(): string | undefined
  get morePrev(): string | undefined
  get next(): string | undefined
  get notFound(): string | undefined
  get notifications(): string | undefined
  get ok(): string | undefined
  get page(): string | undefined
  get previous(): string | undefined
  get rowsPerPage(): string | undefined
  get show(): string | undefined
  get symbol(): string | undefined
  get(name: keyof TextAllPropsInclude): string | undefined
}
/** Instance class for request-isolated global component text storage. */
export declare class TextIncludeInstance {
  readonly list: ShallowRef<TextList, TextList>
  initText(texts: TextList): void
  getGlobalText(index: TextIndex): string | undefined
}
/** Class handling touch and mouse gesture detection and position tracking. */
export declare class TouchEventInclude {
  readonly touche: Ref<Touch | undefined, Touch | undefined>
  readonly toucheMove: Ref<Touch | undefined, Touch | undefined>
  readonly mouse: Ref<TouchEventClient | undefined, TouchEventClient | undefined>
  readonly mouseMove: Ref<TouchEventClient | undefined, TouchEventClient | undefined>
  constructor(start?: ((mouse: TouchEventClient, touche?: Touch) => void) | undefined, move?: TouchEventCallback | undefined, end?: TouchEventCallback | undefined, element?: Ref<HTMLElement | undefined> | undefined)
  readonly onTouch: {
    onTouchstart: (event: TouchEvent) => void
    onTouchend: (event: TouchEvent) => void
    onTouchcancel: (event: TouchEvent) => void
    onTouchmove: (event: TouchEvent) => void
  }
  readonly onMouse: {
    onMousedown: (event: MouseEvent) => void
    onMouseup: (event: MouseEvent) => void
    onMousemove: (event: MouseEvent) => void
  }
}
export declare const getAreaValue: (props: AreaPropsInclude) => Record<string, string>
export declare const getClassTagAStatic: (props?: Record<string, any>, className?: string, isTag?: boolean) => Record<string, boolean>
export declare const setAreaValue: (element: HTMLElement | undefined, props: AreaPropsInclude) => void
export type AreaPropsInclude = {
  area?: string
}
export type RoleType = string | 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'command' | 'comment' | 'complementary' | 'composite' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'generic' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'input' | 'landmark' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'mark' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'range' | 'region' | 'roletype' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'section' | 'sectionhead' | 'select' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'structure' | 'suggestion' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem' | 'widget' | 'window'
export type AriaTrueOrFalse = 'true' | 'false'
export type AriaList = {
  'aria-activedescendant'?: string
  'aria-atomic'?: AriaTrueOrFalse
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
  'aria-busy'?: AriaTrueOrFalse
  'aria-checked'?: AriaTrueOrFalse | 'mixed'
  'aria-colcount'?: number
  'aria-colindex'?: number
  'aria-colspan'?: number
  'aria-controls'?: string
  'aria-current'?: AriaTrueOrFalse | 'page' | 'step' | 'location' | 'date' | 'time'
  'aria-describedby'?: string
  'aria-details'?: string
  'aria-disabled'?: AriaTrueOrFalse
  'aria-errormessage'?: string
  'aria-expanded'?: AriaTrueOrFalse
  'aria-flowto'?: string
  'aria-grabbed'?: AriaTrueOrFalse
  'aria-haspopup'?: AriaTrueOrFalse | 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid'
  'aria-hidden'?: AriaTrueOrFalse
  'aria-invalid'?: AriaTrueOrFalse | 'grammar' | 'spelling'
  'aria-keyshortcuts'?: string
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-level'?: number
  'aria-live'?: 'off' | 'polite' | 'assertive'
  'aria-modal'?: AriaTrueOrFalse
  'aria-multiline'?: AriaTrueOrFalse
  'aria-multiselectable'?: AriaTrueOrFalse
  'aria-orientation'?: 'horizontal' | 'vertical' | 'undefined'
  'aria-owns'?: string
  'aria-placeholder'?: string
  'aria-posinset'?: number
  'aria-pressed'?: AriaTrueOrFalse | 'mixed'
  'aria-readonly'?: AriaTrueOrFalse
  'aria-relevant'?: 'additions' | 'removals' | 'text' | 'all' | string
  'aria-required'?: AriaTrueOrFalse
  'aria-roledescription'?: string
  'aria-rowcount'?: number
  'aria-rowindex'?: number
  'aria-rowspan'?: number
  'aria-selected'?: AriaTrueOrFalse
  'aria-setsize'?: number
  'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
  'aria-valuemax'?: string | number
  'aria-valuemin'?: string | number
  'aria-valuenow'?: string | number
  'aria-valuetext'?: string
  'id'?: string
  'role'?: RoleType
  'tabindex'?: NumberOrString
}
export type AriaRolePropsInclude = {
  role?: RoleType
}
export type AriaLivePropsInclude = {
  ariaLive?: AriaList['aria-live']
}
export type AriaLabelPropsInclude = {
  ariaLabel?: string
}
export interface CaptionSlots {
  caption?(props: any): any
}
export type CaptionProps = {
  caption?: string | number
}
export type ClientOnlyPropsInclude = {
  clientOnly?: boolean
}
export type ComponentIncludeProps<Props extends Record<string, any>> = Props
export type ComponentIncludePropsAttrs<Props extends Record<string, any>> = (keyof Props & string)
export type ComponentIncludeExtra<PropsExtra extends Record<string, any>> = RefOrNormal<PropsExtra | undefined>
export type ComponentIncludeExposeItem<V = any> = string | {
  name: string
  callback: (...attrs: any[]) => V
}
export interface DescriptionSlots {
  description?(props: any): any
}
export type DescriptionProps = {
  description?: string | number
}
export type EnabledProps = {
  disabled?: boolean
  readonly?: boolean
}
export type FieldErrorItem = string | ValidityState | Record<string, any>
export type FieldErrorItemOrFunction = FieldErrorItem | (() => FieldErrorItem)
export type EventClickValue = {
  value?: any
  type?: string
  [key: string]: any
}
export type EventClickEmits = {
  click: [event: MouseEvent, value: EventClickValue]
  clickLite: [value: EventClickValue]
}
export type EventClickProps = {
  to?: string
  value?: any
  detail?: Record<string, any>
}
export interface EventClickExpose {
  onClick: (event: MouseEvent, options?: EventClickValue) => void
  onKeydown: (event: KeyboardEvent, options?: EventClickValue) => void
}
export type FieldType = 'text' | 'number' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'date' | 'datetime-local' | 'month' | 'time' | 'week' | 'color' | 'file' | 'checkbox' | 'radio' | string
export type FieldElementInput = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | undefined
export type FieldElementDom = FieldElementInput | HTMLElement
export type FieldValidationItem = {
  valid: boolean
  message: string
  code?: keyof ValidityState | string
  state?: ValidityState
}
export type FieldPatternItem = string | RegExp | FieldValidationItem
export type FieldPatternItemOrFunction = FieldPatternItem | ((value: any) => FieldPatternItem)
export type FieldPatternElement = {
  pattern?: string
  required?: boolean
  minlength?: number
  maxlength?: number
  min?: number | string
  max?: number | string
  step?: number | string
}
export type FieldArrowProps = {
  arrow?: 'carousel' | 'stepper'
  arrowAlign?: 'center' | 'right' | 'left'
  disabledPrevious?: boolean
  disabledNext?: boolean
}
export type FieldValueProps<Value = any> = {
  value?: Value
  modelValue?: Value
}
export type FieldInputCheckProps = {
  pattern?: FieldPatternItemOrFunction
  patternGroup?: string
}
export type FieldBasicProps<Value = any> = FieldValueProps<Value> & FieldInputCheckProps & EnabledProps & {
  name?: string
  required?: boolean
  validationCode?: Record<string, string>
  onValids?: (validation: FieldValidationItem) => void
  'onUpdate:value'?: (value: Value) => void
  'onUpdate:modelValue'?: (value: Value) => void
}
export type FieldAllProps = FieldBasicProps & FieldArrowProps & {
  type?: FieldType
  inputmode?: string
  autocomplete?: string
  match?: string | HTMLInputElement
  matchText?: string
}
export type FieldBasicEmits<Value = any> = {
  'input': [event: InputEvent, data: FieldValidationItem]
  'change': [event: Event, data: FieldValidationItem]
  'update:value': [value: Value]
  'update:modelValue': [value: Value]
}
export type FieldBasicExpose<Value = any> = {
  value: Ref<Value | undefined>
  getValue: () => Value | undefined
  checkValidity: () => boolean
  getValidationMessage: () => string
}
export type HeadroomEmitsInclude = {
  sticky: [isSticky: boolean]
}
export type HeadroomPropsInclude = {
  headroom?: boolean
  headroomElement?: ElementOrWindow
  headroomTransform?: number
  headroomDisappears?: boolean
  headroomTop?: number
}
export type HeadroomEventItem = {
  scroll: number
  previous: number
  difference: number
  sticky: boolean
}
export interface HeadroomExposeInclude {
  update: () => void
}
export interface LabelSlots {
  label?(props: any): any
}
export interface LabelAlternativeSlots {
  title?(props: any): any
}
export type LabelProps = {
  label?: string | number
}
export type LabelHighlightProps = LabelProps & {
  highlight?: string
}
export type LabelNumberProps = LabelProps & {
  maxlength?: number
}
export interface ModelSlots<Value = any> {
  default?(props: { value: Value }): any
}
export type ModelProps<Value = any> = {
  value?: Value
  modelValue?: Value
}
export type ModelPropsSelected<Value = any> = {
  selected?: Value
  modelSelected?: Value
}
export type ModelPropsOpen = {
  open?: boolean
  modelOpen?: boolean
}
export type ModelEmits<Value = any> = {
  'update:value': [value: Value]
  'update:modelValue': [value: Value]
}
export type ModelEmitsSelected<Value = any> = {
  'update:selected': [value: Value]
  'update:modelSelected': [value: Value]
}
export type ModelEmitsOpen = {
  'update:open': [open: boolean]
  'update:modelOpen': [open: boolean]
}
export type PaginationPropsInclude<T = any> = {
  page?: number
  rows?: number
  list?: T[]
}
export type PluginComponentItem = {
  name: string
  file: string
  component: string
  sub?: string
}
export type PluginComponentImports = Record<string, PluginComponentItem>
export type PluginOptions = {
  style?: boolean
  styleNamespace?: string
  component?: boolean
  viteOptions?: VitePlugin
}
export type PrefixSlots = {
  prefix?(props: any): any
}
export type PrefixProps = {
  prefix?: string | number
  prefixId?: string
}
export type SearchPropsInclude<T = any> = {
  list?: T[]
  search?: string
  searchColumns?: string[]
  searchOptions?: SearchOptions
}
export type SortColumn = string | string[] | Record<string, SortDir>
export type SortIncludeSort = SortColumn | Ref<SortColumn | undefined> | (() => SortColumn | undefined)
export type SortIncludeSortDir = SortDir | Ref<SortDir | undefined> | (() => SortDir | undefined)
export type SortPropsInclude<T = any> = {
  list?: T[]
  sort?: SortColumn
  sortDir?: SortDir
  sortFunction?: SortFunction<T>
}
export type StickyScrollBottomPropsInclude = {
  stickyScrollBottom?: boolean
}
export type StickyPropsInclude = StickyScrollBottomPropsInclude & {
  stickyTop?: number | RefOrNormal<number>
  stickyScrollContainer?: string | HTMLElement | Window
  stickyEnable?: boolean | RefOrNormal<boolean>
}
export interface SuffixSlots {
  suffix?(props: any): any
}
export type SuffixProps = {
  suffix?: string | number
  suffixId?: string
}
export type TextValue = string | (() => string) | undefined
export type TextIndex = 'cancel' | 'characterLimit' | 'characterRemaining' | 'close' | 'copiedClipboard' | 'decrement' | 'entriesMatch' | 'first' | 'hide' | 'increment' | 'info' | 'last' | 'loading' | 'more' | 'morePrev' | 'next' | 'notFound' | 'notifications' | 'ok' | 'page' | 'previous' | 'rowsPerPage' | 'show' | 'symbol' | string
export type TextList = Record<TextIndex, TextValue>
export type TextBreadcrumbPropsInclude = {
  textBreadcrumb?: TextValue
}
export type TextCancelPropsInclude = {
  textCancel?: TextValue
}
export type TextCharacterLimitPropsInclude = {
  textCharacterLimit?: TextValue
}
export type TextCharacterRemainingPropsInclude = {
  textCharacterRemaining?: TextValue
}
export type TextClosePropsInclude = {
  textClose?: TextValue
}
export type TextCopiedClipboardPropsInclude = {
  textCopiedClipboard?: TextValue
}
export type TextDecrementPropsInclude = {
  textDecrement?: TextValue
}
export type TextEntriesMatchPropsInclude = {
  textEntriesMatch?: TextValue
}
export type TextFirstPropsInclude = {
  textFirst?: TextValue
}
export type TextHidePropsInclude = {
  textHide?: TextValue
}
export type TextIncrementPropsInclude = {
  textIncrement?: TextValue
}
export type TextInfoPropsInclude = {
  textInfo?: TextValue
}
export type TextLastPropsInclude = {
  textLast?: TextValue
}
export type TextLoadingPropsInclude = {
  textLoading?: TextValue
}
export type TextMorePropsInclude = {
  textMore?: TextValue
}
export type TextMorePrevPropsInclude = {
  textMorePrev?: TextValue
}
export type TextNextPropsInclude = {
  textNext?: TextValue
}
export type TextNotFoundPropsInclude = {
  textNotFound?: TextValue
}
export type TextNotificationsPropsInclude = {
  textNotifications?: TextValue
}
export type TextOkPropsInclude = {
  textOk?: TextValue
}
export type TextPagePropsInclude = {
  textPage?: TextValue
}
export type TextPreviousPropsInclude = {
  textPrevious?: TextValue
}
export type TextRowsPerPagePropsInclude = {
  textRowsPerPage?: TextValue
}
export type TextShowPropsInclude = {
  textShow?: TextValue
}
export type TextSymbolPropsInclude = {
  textSymbol?: TextValue
}
export type TextAllPropsInclude = TextBreadcrumbPropsInclude & TextCancelPropsInclude & TextCharacterLimitPropsInclude & TextCharacterRemainingPropsInclude & TextClosePropsInclude & TextCopiedClipboardPropsInclude & TextDecrementPropsInclude & TextEntriesMatchPropsInclude & TextFirstPropsInclude & TextHidePropsInclude & TextIncrementPropsInclude & TextInfoPropsInclude & TextLastPropsInclude & TextLoadingPropsInclude & TextMorePropsInclude & TextMorePrevPropsInclude & TextNextPropsInclude & TextNotFoundPropsInclude & TextNotificationsPropsInclude & TextOkPropsInclude & TextPagePropsInclude & TextPreviousPropsInclude & TextRowsPerPagePropsInclude & TextShowPropsInclude & TextSymbolPropsInclude
export type TouchEventTypeX = 'left' | 'right' | 'none'
export type TouchEventTypeY = 'top' | 'bottom' | 'none'
export type TouchEventClient = {
  x: number
  y: number
}
export type TouchEventCallback = (typeX: TouchEventTypeX, typeY: TouchEventTypeY, clientX: number, clientY: number, mouse?: TouchEventClient, mouseMove?: TouchEventClient, touche?: Touch, toucheMove?: Touch) => Promise<boolean> | boolean
export declare const STYLE_MODIFICATION: string[]
export type AccordionPropsToken = {
  divider?: boolean
}
export type AccordionPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Cell extends CellPropsBasic = CellPropsBasic, MotionTransform extends MotionTransformPropsBasic = MotionTransformPropsBasic> = LabelProps & DescriptionProps & IconLitePropsInclude<Icon> & MotionTransformPropsInclude<MotionTransform> & ModelPropsOpen & {
  iconArrowDown?: IconValue<Icon>
  cellAttrs?: ConstrBind<Cell>
}
export type AccordionProps = AccordionPropsBasic & AccordionPropsToken
export declare const defaultsAccordion: {
  divider: boolean
  clickOpen: boolean
  autoClose: boolean
}
export type AccordionComponents = CellComponentInclude & MotionTransformComponentInclude
export type AccordionEmits = EventClickEmits & MotionTransformEmitsInclude & ModelEmitsOpen
export interface AccordionExpose extends MotionTransformExposeInclude {}
export interface AccordionSlots extends CellSlotsInclude {
  default?(props: MotionTransformControlItem): any
}
export type AccordionClasses = {
  main: ConstrClass
  head: string
  body: string
}
export type ActionSheetPropsToken = {}
export type ActionSheetPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = WindowPropsInclude<Window> & BarsPropsInclude<Bars> & ActionsPropsInclude<Actions> & {
  open?: boolean
  touchClose?: boolean
}
export type ActionSheetProps = ActionSheetPropsBasic & ActionSheetPropsToken
export declare const defaultsActionSheet: {
  barsBackHide: boolean
  touchClose: boolean
}
export type ActionSheetComponents = ModalComponents
export type ActionSheetEmits = ModalEmits
export interface ActionSheetExpose extends ModalExpose {}
export interface ActionSheetSlots extends ModalSlots {}
export type ActionSheetClasses = {
  main: ConstrClass
  title: string
  header: string
  body: string
  footer: string
  touch: string
  tab: string
}
export type ActionsComponentInclude = {
  actions?: object
}
export type ActionsEmitsInclude = {
  actions: EventClickEmits['click']
  actionsLite: EventClickEmits['clickLite']
}
export type ActionsPropsInclude<Actions extends ActionsPropsBasic = ActionsPropsBasic> = {
  actionsHide?: boolean
  actionsList?: ConstrBind<Actions['list']>
  actionsSecondary?: ConstrBind<Actions['listSecondary']>
  actionsAttrs?: ConstrBind<Actions>
}
export type ActionsPropsToken = {
  align?: 'none' | 'center' | 'left' | 'right' | 'block' | 'auto'
  flexible?: boolean
  wrap?: boolean
}
export type ActionsPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic> = AreaPropsInclude & {
  list?: ConstrBind<Button>[]
  listSecondary?: ConstrBind<Button>[]
  buttonAttrs?: ConstrBind<Button>
  buttonSecondaryAttrs?: ConstrBind<Button>
}
export type ActionsProps = ActionsPropsBasic & ActionsPropsToken
export declare const defaultsActions: {
  align: string
  area: string
}
export type ActionsComponents = ButtonComponentInclude
export type ActionsEmits = EventClickEmits
export interface ActionsExpose {}
export interface ActionsSlots {
  default?(props: any): any
  secondary?(props: any): any
}
export type ActionsClasses = {
  main: ConstrClass
  item: string
  list: string
  secondary: string
  spacer: string
}
export type AlertPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, AlertLink extends AlertLinkPropsBasic = AlertLinkPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic> = LabelProps & DescriptionProps & IconTrailingPropsInclude<Icon> & AlertLinkPropsInclude<AlertLink> & ActionsPropsInclude<Actions> & AriaRolePropsInclude & AriaLivePropsInclude & TextClosePropsInclude & {
  button?: string | number | ConstrBind<Button>
  iconClose?: string
  closeButton?: boolean
}
export type AlertProps = AlertPropsBasic & { itemCenter?: boolean }
export declare const defaultsAlert: {
  itemCenter: boolean
  role: string
}
export type AlertComponents = IconComponentInclude & ButtonComponentInclude & ActionsComponentInclude & AlertLinkComponentInclude
export type AlertEmits = AlertLinkEmitsInclude & ActionsEmitsInclude & EventClickEmits & {
  close: []
}
export interface AlertExpose {}
export interface AlertSlots extends LabelSlots, DescriptionSlots {
  trailing?(props: any): any
  body?(props: any): any
}
export type AlertClasses = {
  main: ConstrClass
  icon: string
  trailing: string
  context: string
  label: string
  description: string
  body: string
  button: string
  buttons: string
  buttonClose: string
  links: string
  linksItem: string
  actions: string
}
export type AlertLinkComponentInclude = {
  alertLink?: object
}
export type AlertLinkEmitsInclude = {
  link: [event: MouseEvent, value: EventClickValue]
  linkLite: [value: EventClickValue]
}
export type AlertLinkPropsInclude<AlertLinkProps extends AlertLinkPropsBasic = AlertLinkPropsBasic> = {
  links?: ConstrBind<AlertLinkProps>[]
  linksAttrs?: ConstrBind<AlertLinkProps>
}
export type AlertLinkPropsBasic = LabelProps & EventClickProps
export type AlertLinkProps = AlertLinkPropsBasic & { divider?: boolean }
export declare const defaultsAlertLink: {
  divider: boolean
}
export type AlertLinkComponents = {}
export type AlertLinkEmits = EventClickEmits
export interface AlertLinkExpose extends EventClickExpose {}
export interface AlertLinkSlots extends LabelSlots {}
export type AlertLinkClasses = {
  main: ConstrClass
  label: string
}
export type AnchorScrollProps = {
  shift?: NumberOrString
  behavior?: ScrollIntoViewOptions['behavior']
  block?: ScrollIntoViewOptions['block']
  inline?: ScrollIntoViewOptions['inline']
}
export type AnchorPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Tooltip extends TooltipProps = TooltipProps> = LabelProps & TooltipPropsInclude<Tooltip> & TextCopiedClipboardPropsInclude & AnchorScrollProps & {
  hide?: boolean
  name?: string
  isCopy?: boolean
  iconLink?: IconValue<Icon>
  iconTag?: IconValue<Icon>
  iconContentCopy?: IconValue<Icon>
  delayHide?: number
}
export type AnchorProps = AnchorPropsBasic
export declare const defaultsAnchor: {
  shift: number
  delayHide: number
}
export type AnchorComponents = TooltipComponentInclude & IconComponentInclude
export type AnchorEmits = {}
export interface AnchorExpose {
  go(): void
}
export interface AnchorSlots extends LabelSlots, TooltipSlotsInclude {}
export type AnchorClasses = {
  main: ConstrClass
  label: string
}
export type AreaPropsBasic = {
  areaDefault?: string
}
export type AreaProps = AreaPropsBasic
export declare const defaultsArea: {}
export type AreaComponents = {}
export type AreaEmits = {}
export interface AreaExpose {}
export type AreaSlots = Record<string, (props: any) => any>
export type AreaClasses = {
  main: ConstrClass
}
export declare enum ArrowDirection {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
  HIDE = 'hide'
}
export type ArrowBorder = {
  top: number
  bottom: number
  left: number
  right: number
}
export type ArrowCenter = {
  x: number
  y: number
}
export type ArrowComponentInclude = {
  arrow?: object
}
export type ArrowPropsInclude<Arrow extends ArrowProps = ArrowProps> = {
  arrowShow?: boolean
  arrowPosition?: ArrowProps['position']
  arrowAttrs?: ConstrBind<Arrow>
}
export type ArrowPropsBasic = ClientOnlyPropsInclude & {
  elementTarget?: HTMLElement | string
}
export type ArrowProps = ArrowPropsBasic & { position?: 'auto' | 'top' | 'bottom' | 'left' | 'right' }
export declare const defaultsArrow: {
  position: string
}
export type ArrowComponents = {}
export type ArrowEmits = {}
export interface ArrowExpose {
  update: () => void
}
export interface ArrowSlots {}
export type ArrowClasses = {
  main: ConstrClass
  mask: string
  arrow: string
  arrowLine: string
  arrowArea: string
  border: string
  borderHidden: string
}
export type AvatarPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic> = LabelProps & ImagePropsInclude<Image> & BadgePropsInclude<Badge> & SkeletonPropsInclude & AriaLabelPropsInclude & EventClickProps & {
  reduction?: boolean
  tabindex?: string | number
}
export type AvatarProps = AvatarPropsBasic & { focus?: boolean; disabled?: boolean; readonly?: boolean }
export declare const defaultsAvatar: {
  reduction: boolean
  tabindex: string
}
export type AvatarComponents = ImageComponentInclude & BadgeComponentInclude
export type AvatarEmits = ImageEmitsInclude & EventClickEmits
export interface AvatarExpose extends EventClickExpose {}
export interface AvatarSlots extends LabelSlots {}
export type AvatarClasses = {
  main: ConstrClass
  label: string
}
export type BadgeComponentInclude = {
  badge?: object
}
export type BadgePropsInclude<Badge extends BadgePropsBasic = BadgePropsBasic> = {
  badge?: string | number | ConstrBind<Badge>
  badgeDot?: boolean
  badgeAttrs?: ConstrBind<Badge>
}
export type BadgePropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = IconPropsInclude<Icon> & LabelNumberProps & AriaLabelPropsInclude & {
  dot?: boolean
}
export type BadgeProps = BadgePropsBasic & { selected?: boolean; hide?: boolean; dot?: boolean; overlap?: 'rectangular' | 'circular' | 'static'; vertical?: 'top' | 'center' | 'bottom'; horizontal?: 'right' | 'center' | 'left' }
export declare const defaultsBadge: {
  overlap: string
  vertical: string
  horizontal: string
}
export type BadgeComponents = IconComponentInclude
export type BadgeEmits = {}
export interface BadgeExpose {}
export interface BadgeSlots extends LabelNumberSlots {}
export type BadgeClasses = {
  main: ConstrClass
  label: string
  icon: string
}
export type BarsComponentInclude = {
  bars?: object
}
export type BarsEmitsInclude = {
  bars: EventClickEmits['click']
  barsLite: EventClickEmits['clickLite']
  barsBack: EventClickEmits['clickLite']
}
export type BarsPropsInclude<Bars extends BarsPropsBasic = BarsPropsBasic> = {
  barsLabel?: string | number
  barsDescription?: string
  barsBackHide?: boolean
  barsHide?: boolean
  barsList?: Bars['bars']
  barsAttrs?: ConstrBind<Bars>
}
export type BarsPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic> = LabelProps & DescriptionProps & SkeletonPropsInclude & TextClosePropsInclude & {
  'action'?: boolean
  'backButton'?: ConstrBind<Button>
  'backHide'?: boolean
  'backActionHide'?: boolean
  'bars'?: ConstrBind<Button>[]
  'actionLabel'?: LabelProps['label']
  'actionDescription'?: DescriptionProps['description']
  'actionBars'?: ConstrBind<Button>[]
  'buttonAttrs'?: ConstrBind<Button>
  'iconBack'?: IconValue<Icon>
  'iconClose'?: IconValue<Icon>
  'modelAction'?: boolean
  'onUpdate:action'?: (value: boolean) => void
  'onUpdate:modelAction'?: (value: boolean) => void
}
export type BarsProps = BarsPropsBasic
export declare const defaultsBars: {}
export type BarsComponents = ButtonComponentInclude
export type BarsEmits = EventClickEmits & {
  'update:action': [value: boolean]
  'update:modelAction': [value: boolean]
}
export interface BarsExpose {}
export interface BarsSlots extends LabelSlots, DescriptionSlots {
  bars?(props: any): any
  actionBars?(props: any): any
}
export type BarsClasses = {
  main: ConstrClass
  context: string
  label: string
  description: string
}
export type BleedPropsBasic = {
  tag?: string
}
export type BleedProps = BleedPropsBasic
export declare const defaultsBleed: {
  tag: string
}
export type BleedComponents = {}
export type BleedEmits = {}
export interface BleedExpose {}
export interface BleedSlots {
  default?(props: any): any
}
export type BleedClasses = {
  main: ConstrClass
}
export type BlockPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = HeaderPropsInclude<Icon, Header> & DescriptionProps & AreaPropsInclude & {
  headline?: string
  tag?: string
}
export type BlockProps = BlockPropsBasic
export declare const defaultsBlock: {
  area: string
  tag: string
  tagHeader: string
}
export type BlockComponents = HeaderComponentInclude
export type BlockEmits = {}
export interface BlockExpose {}
export interface BlockSlots extends HeaderSlotsInclude, DescriptionSlots {
  headline?(props: any): any
  default?(props: any): any
}
export type BlockClasses = {
  main: ConstrClass
  headline: string
  header: string
  description: string
  body: string
}
export type BreadcrumbItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = LabelProps & IconLitePropsInclude<Icon> & EnabledProps & EventClickProps & SkeletonPropsInclude & {
  iconArrowLeft?: string
  iconArrowRight?: string
}
export type BreadcrumbItemProps = BreadcrumbItemPropsBasic & { disabled?: boolean; readonly?: boolean; back?: boolean }
export declare const defaultsBreadcrumbItem: {}
export type BreadcrumbItemComponents = IconComponentInclude
export type BreadcrumbItemEmits = EventClickEmits
export interface BreadcrumbItemExpose extends EventClickExpose {}
export interface BreadcrumbItemSlots extends LabelSlots {}
export type BreadcrumbItemClasses = {
  main: ConstrClass
  iconArrow: string
}
export type BreadcrumbsPropsBasic<BreadcrumbItem extends BreadcrumbItemProps = BreadcrumbItemProps> = TextBreadcrumbPropsInclude & SkeletonPropsInclude & {
  list?: ConstrBind<BreadcrumbItem>[]
}
export type BreadcrumbsProps = BreadcrumbsPropsBasic
export declare const defaultsBreadcrumbs: {}
export type BreadcrumbsComponents = {
  breadcrumbItem: object
}
export type BreadcrumbsEmits = EventClickEmits
export interface BreadcrumbsExpose {}
export interface BreadcrumbsSlots {}
export type BreadcrumbsClasses = {
  main: ConstrClass
  item: string
}
export type BulletPropsBasic = BulletItemPropsInclude & {
  html?: string
}
export type BulletProps = BulletPropsBasic
export declare const defaultsBullet: {}
export type BulletComponents = BulletItemComponentInclude
export type BulletEmits = {}
export interface BulletExpose {}
export interface BulletSlots {
  default?(props: any): any
}
export type BulletClasses = {
  main: ConstrClass
  item: string
}
export type BulletItemComponentInclude = {
  bulletItem?: object
}
export type BulletItemPropsInclude<BulletItemProps extends BulletItemPropsBasic = BulletItemPropsBasic> = {
  list?: string[]
  itemAttrs?: ConstrBind<BulletItemProps>
}
export type BulletItemPropsBasic = DescriptionProps
export type BulletItemProps = BulletItemPropsBasic
export declare const defaultsBulletItem: {}
export type BulletItemComponents = {}
export type BulletItemEmits = {}
export interface BulletItemExpose {}
export interface BulletItemSlots extends DescriptionSlots {}
export type BulletItemClasses = {
  main: ConstrClass
}
export type ButtonComponentInclude = {
  button?: object
}
export type ButtonPropsInclude<Button extends ButtonPropsBasic = ButtonPropsBasic> = {
  buttonAttrs?: ConstrBind<Button>
}
export type ButtonPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & EnabledProps & IconTrailingPropsInclude<Icon> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & EventClickProps & ConstrHrefProps & AriaLabelPropsInclude & {
  tag?: 'button' | 'a' | 'span' | string
  type?: 'button' | 'submit' | 'reset' | string
}
export type ButtonProps = ButtonPropsBasic & { focus?: boolean; disabled?: boolean; selected?: boolean; readonly?: boolean; adaptive?: 'iconAlways' | 'block' | 'auto'; container?: boolean; inverse?: boolean; grid?: boolean; textAlign?: 'left' | 'center' | 'right' }
export declare const defaultsButton: {}
export type ButtonComponents = IconComponentInclude & ProgressComponentInclude & RippleComponentInclude
export type ButtonEmits = EventClickEmits
export interface ButtonExpose extends EventClickExpose {}
export interface ButtonSlots extends LabelSlots {}
export type ButtonClasses = {
  main: ConstrClass
  label: string
  icon: string
  trailing: string
  loading: string
}
export type ButtonGroupPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic> = AreaPropsInclude & {
  list?: ConstrBind<Button>[]
  buttonAttrs?: ConstrBind<Button>
}
export type ButtonGroupProps = ButtonGroupPropsBasic & { orientation?: 'horizontal' | 'vertical'; wrap?: boolean }
export declare const defaultsButtonGroup: {
  orientation: string
  area: string
}
export type ButtonGroupComponents = ButtonComponentInclude
export type ButtonGroupEmits = EventClickEmits
export interface ButtonGroupExpose {}
export interface ButtonGroupSlots {
  default?(props: any): any
}
export type ButtonGroupClasses = {
  main: ConstrClass
  item: string
}
export type CellClassesSub = {
  label: string
  description: string
  caption: string
  trailing: string
}
export type CellComponentInclude = {
  cell?: object
}
export interface CellSlotsInclude extends LabelAlternativeSlots, DescriptionSlots, CaptionSlots {
  trailing?(props: CellClassesSub): any
  body?(props: CellClassesSub): any
}
export type CellPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & DescriptionProps & CaptionProps & EnabledProps & IconTrailingPropsInclude<Icon> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & EventClickProps & AriaRolePropsInclude & {
  tag?: string
  divider?: boolean
  dynamic?: boolean
}
export type CellProps = CellPropsBasic & { focus?: boolean; selected?: boolean; readonly?: boolean; disabled?: boolean; dynamic?: boolean; dynamicHover?: boolean; divider?: boolean; dividerLabel?: 'always' | 'none'; iconTop?: boolean }
export declare const defaultsCell: {
  divider: boolean
  tag: string
}
export type CellComponents = IconComponentInclude & ProgressComponentInclude & RippleComponentInclude
export type CellEmits = EventClickEmits
export interface CellExpose extends EventClickExpose {}
export interface CellSlots extends LabelSlots, DescriptionSlots, CaptionSlots {
  trailing?(props: CellClassesSub): any
  body?(props: CellClassesSub): any
}
export type CellClasses = {
  main: ConstrClass
  context: string
  contextTrailing: string
  label: string
  description: string
  caption: string
  icon: string
  trailing: string
  body: string
  loading: string
}
export type CheckboxPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & DescriptionProps & FieldMessagePropsInclude<FieldMessage, FieldCounter> & FieldInputCheckProps & ProgressPropsInclude<Progress> & EnabledProps & ModelProps<boolean> & ModelPropsSelected & SkeletonPropsInclude & {
  selected?: string
  iconCheckbox?: string | ConstrBind<Image> | null
  iconIndeterminate?: string | ConstrBind<Image> | null
}
export type CheckboxProps = CheckboxPropsBasic & { block?: boolean; adaptive?: 'rightAlways'; container?: boolean; required?: boolean; itemCenter?: boolean; focus?: boolean; disabled?: boolean }
export declare const defaultsCheckbox: {
  block: boolean
  itemCenter: boolean
  valueVariantHide: string
}
export type CheckboxComponents = ImageComponentInclude & FieldMessageComponentInclude & ProgressComponentInclude & RippleComponentInclude
export type CheckboxEmits = FieldBasicEmits<boolean> & ModelEmitsSelected
export interface CheckboxExpose extends FieldBasicExpose<boolean> {}
export interface CheckboxSlots extends LabelSlots, DescriptionSlots {}
export type CheckboxClasses = {
  main: ConstrClass
  input: string
  body: string
  item: string
  icon: string
  loading: string
  info: string
  label: string
}
export type ChipComponentInclude = {
  chip?: object
}
export type ChipPropsInclude<Chip extends ChipPropsBasic = ChipPropsBasic> = {
  chipAttrs?: ConstrBind<Chip>
}
export type ChipPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = ButtonPropsBasic<Icon, Progress>
export type ChipProps = ChipPropsBasic & { focus?: boolean; disabled?: boolean; selected?: boolean; readonly?: boolean; adaptive?: 'iconAlways' | 'block' | 'auto'; container?: boolean; inverse?: boolean; grid?: boolean; textAlign?: 'left' | 'center' | 'right' }
export declare const defaultsChip: {
  tag: string
}
export type ChipComponents = ButtonComponents
export type ChipEmits = ButtonEmits
export interface ChipExpose extends ButtonExpose {}
export interface ChipSlots extends ButtonSlots {}
export type ChipClasses = {
  main: ConstrClass
  label: string
  icon: string
  trailing: string
  loading: string
}
export type ChipGroupData<Chip extends ChipPropsBasic = ChipPropsBasic> = ListListInput<Chip>
export type ChipGroupItem<Chip extends ChipPropsBasic = ChipPropsBasic> = ConstrBind<Chip>
export type ChipGroupList<Chip extends ChipPropsBasic = ChipPropsBasic> = ChipGroupItem<Chip>[]
export type ChipGroupPropsBasic<Chip extends ChipPropsBasic = ChipPropsBasic> = ModelPropsSelected<ListSelectedList> & {
  readonly?: boolean
  selected?: ListSelectedList
  list?: ChipGroupData
  iconWhenSelected?: boolean
  multiple?: boolean
  keyLabel?: string
  keyValue?: string
  chipAttrs?: ConstrBind<Chip>
}
export type ChipGroupProps = ChipGroupPropsBasic
export declare const defaultsChipGroup: {
  readonly: boolean
}
export type ChipGroupComponents = ChipComponentInclude
export type ChipGroupEmits = EventClickEmits & ModelEmitsSelected<ListSelectedList>
export interface ChipGroupExpose {}
export interface ChipGroupSlots {
  default?(props: any): any
}
export type ChipGroupClasses = {
  main: ConstrClass
  item: string
}
export type ClientOnlyPropsBasic = ClientOnlyPropsInclude
export type ClientOnlyProps = ClientOnlyPropsBasic
export declare const defaultsClientOnly: {
  clientOnly: boolean
}
export type ClientOnlyComponents = {}
export type ClientOnlyEmits = {}
export interface ClientOnlyExpose {}
export interface ClientOnlySlots {
  default?(props: any): any
}
export type ClientOnlyClasses = {
  main: ConstrClass
}
export type ContainerPropsBasic = AreaPropsInclude & {}
export type ContainerProps = ContainerPropsBasic & { align?: 'left' | 'center' | 'right' }
export declare const defaultsContainer: {
  align: string
  area: string
}
export type ContainerComponents = {}
export type ContainerEmits = {}
export interface ContainerExpose {}
export interface ContainerSlots {
  default?(props: any): any
}
export type ContainerClasses = {
  main: ConstrClass
}
export type DialogPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = WindowPropsInclude<Window> & BarsPropsInclude<Bars> & ActionsPropsInclude<Actions> & ImagePropsInclude<Image> & LabelProps & DescriptionProps & TextClosePropsInclude & TextOkPropsInclude & {
  open?: boolean
  icon?: IconValue<Icon>
  buttonOk?: string | ConstrBind<Button> | null
  buttonClose?: string | ConstrBind<Button> | null
  closeButton?: boolean
  clickOkAndClose?: boolean
  iconSuccess?: IconValue<Icon>
  iconError?: IconValue<Icon>
  iconAttrs?: ConstrBind<Icon>
}
export type DialogProps = DialogPropsBasic & { success?: boolean; error?: boolean; imagePosition?: 'top' | 'left' }
export declare const defaultsDialog: {
  imagePosition: string
  barsBackHide: boolean
  barsHide: boolean
  clickOkAndClose: boolean
}
export type DialogComponents = ModalComponents & IconComponentInclude
export type DialogEmits = ModalEmits & {
  ok: []
  close: []
}
export interface DialogExpose extends ModalExpose {}
export interface DialogSlots extends ModalSlots, LabelAlternativeSlots, DescriptionSlots {}
export type DialogClasses = {
  main: ConstrClass
  title: string
  header: string
  information: string
  icon: string
  label: string
  description: string
  body: string
  footer: string
}
export type DividerPropsBasic = {}
export type DividerProps = DividerPropsBasic
export declare const defaultsDivider: {}
export type DividerComponents = {}
export type DividerEmits = {}
export interface DividerExpose {}
export interface DividerSlots {}
export type DividerClasses = {
  main: ConstrClass
}
export interface DraggableWrapperEventParameters {
  active: HTMLElement
  to?: HTMLElement
  selection?: HTMLElement[]
  value: (string | undefined)[]
  valueActive?: string
  valueTo?: string
  valueSelection: (string | undefined)[]
  before?: boolean
}
export type DraggableWrapperControl = {
  className: string
  classClick: string
  classDrop: string
  classPosition: string
}
export type DraggableWrapperClassesList = {
  click: string
  drop: string
  position: string
  active: string
  go: string
  selection: string
  selectionMore: string
  return: string
  show: string
  dragged: string
  selected: string
  body: string
}
export type DraggableWrapperPropsBasic = {
  disabled?: boolean
  tag?: string
  delay?: number | string
  classesSquare?: string | string[]
}
export type DraggableWrapperProps = DraggableWrapperPropsBasic
export declare const defaultsDraggableWrapper: {
  tag: string
}
export type DraggableWrapperComponents = {}
export type DraggableWrapperEmits = {
  drop: [parameters: DraggableWrapperEventParameters]
  position: [parameters: DraggableWrapperEventParameters]
}
export interface DraggableWrapperExpose {
  toNewPosition<T extends { value?: any }>(values: T[], parameters: DraggableWrapperEventParameters): T[]
}
export interface DraggableWrapperSlots {
  default?(props: DraggableWrapperControl): any
}
export type DraggableWrapperClasses = {
  main: ConstrClass
  square: string
}
export type DummyPropsBasic = {}
export type DummyProps = DummyPropsBasic
export declare const defaultsDummy: {}
export type DummyComponents = {}
export type DummyEmits = {}
export interface DummyExpose {}
export interface DummySlots {
  default?(props: any): any
}
export type DummyClasses = {
  main: ConstrClass
}
export type FieldControl = {
  id: string
  className: string
  classHidden: string
  classForFocus: string
  binds: AriaList & {
    'id': string
    'class': string
    'disabled'?: boolean
    'readonly'?: boolean
    'data-input': string
  }
}
export type FieldComponentInclude = {
  field?: object
}
export interface FieldSlotsInclude extends Omit<FieldSlots, 'default'> {}
export type FieldPropsInclude<Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = Omit<FieldPropsBasic<Icon, FieldLabel, FieldMessage, FieldCounter, Progress>, 'disabledPrevious' | 'disabledNext' | 'to' | 'value' | 'maxlength' | 'cancelShow' | 'counter' | 'counterTemplate' | 'counterTop' | 'iconArrowLeft' | 'iconArrowRight' | 'iconPlus' | 'iconMinus' | 'iconClose'> & {
  focus?: boolean
  selected?: boolean
  readonly?: boolean
  disabled?: boolean
  align?: 'center' | 'right' | 'left'
  cancel?: 'auto' | 'always' | 'none'
  fieldAttrs?: ConstrBind<Field>
}
export type FieldPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = IconTrailingPropsInclude<Icon> & PrefixProps & SuffixProps & CaptionProps & FieldLabelPropsInclude<FieldLabel, FieldCounter> & FieldMessagePropsInclude<FieldMessage, FieldCounter> & ProgressPropsInclude<Progress> & EnabledProps & EventClickProps & SkeletonPropsInclude & TextCancelPropsInclude & {
  disabledPrevious?: boolean
  disabledNext?: boolean
  id?: string | number
  counterTop?: boolean
  cancelShow?: boolean
  iconArrowLeft?: IconValue<Icon>
  iconArrowRight?: IconValue<Icon>
  iconPlus?: IconValue<Icon>
  iconMinus?: IconValue<Icon>
  iconClose?: IconValue<Icon>
}
export type FieldProps = FieldPropsBasic & { focus?: boolean; disabled?: boolean; selected?: boolean; readonly?: boolean; block?: boolean; isValue?: boolean; basic?: boolean; boxed?: boolean; tonal?: boolean; filled?: boolean; outlined?: boolean; classic?: boolean; arrowCarousel?: boolean; arrowStepper?: boolean; arrowAlign?: 'center' | 'right' | 'left'; cancel?: 'auto' | 'always' | 'none'; align?: 'center' | 'right' | 'left'; width?: string | 'custom' }
export declare const defaultsField: {
  arrowAlign: string
  cancel: string
}
export type FieldComponents = IconComponentInclude & FieldLabelComponentInclude & FieldMessageComponentInclude & ProgressComponentInclude
export type FieldEmits = EventClickEmits & {
  cancel: [event: MouseEvent]
}
export interface FieldExpose extends EventClickExpose {}
export interface FieldSlots extends PrefixSlots, SuffixSlots, CaptionSlots, FieldLabelSlotsInclude {
  default?(props: FieldControl): any
  cancel?(props: any): any
  arrow?(props: any): any
}
export type FieldClasses = {
  main: ConstrClass
  body: string
  sub: string
  item: string
  context: string
  input: string
  info: string
  prefix: string
  suffix: string
  caption: string
  label: string
  counter: string
  arrow: string
  arrowItem: string
  arrowItemPrevious: string
  arrowItemNext: string
  cancel: string
  loading: string
}
export type FieldCounterComponentInclude = {
  fieldCounter?: object
}
export type FieldCounterPropsInclude<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> = {
  counter?: number | string
  counterTemplate?: string
  fieldCounterAttrs?: ConstrBind<FieldCounter>
}
export type FieldCounterPropsBasic = TextCharacterRemainingPropsInclude & TextCharacterLimitPropsInclude & {
  counter?: number | string
  maxlength?: number | string
  template?: string
}
export type FieldCounterProps = FieldCounterPropsBasic
export declare const defaultsFieldCounter: {}
export type FieldCounterComponents = {}
export type FieldCounterEmits = {}
export interface FieldCounterExpose {}
export interface FieldCounterSlots {}
export type FieldCounterClasses = {
  main: ConstrClass
}
export type FieldLabelComponentInclude = {
  fieldLabel?: object
}
export type FieldLabelPropsInclude<FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> = FieldCounterPropsInclude<FieldCounter> & {
  label?: string | number
  labelRequiredHide?: boolean
  labelAttrs?: ConstrBind<FieldLabel>
}
export type FieldLabelPropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> = LabelProps & FieldCounterPropsInclude<FieldCounter> & {
  for?: string
  required?: boolean
  requiredHide?: boolean
}
export type FieldLabelProps = FieldLabelPropsBasic
export declare const defaultsFieldLabel: {}
export type FieldLabelComponents = FieldCounterComponentInclude
export type FieldLabelEmits = {}
export interface FieldLabelExpose {}
export interface FieldLabelSlotsInclude extends LabelSlots {
  counter?(props: any): any
}
export interface FieldLabelSlots extends FieldLabelSlotsInclude {}
export type FieldLabelClasses = {
  main: ConstrClass
  label: string
  required: string
  counter: string
}
export type FieldMessageComponentInclude = {
  fieldMessage?: object
}
export type FieldMessagePropsInclude<FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> = FieldCounterPropsInclude<FieldCounter> & {
  helperMessage?: string
  validationMessage?: string
  validationMessageHide?: boolean
  fieldMessageAttrs?: ConstrBind<FieldMessage>
}
export type FieldMessagePropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> = FieldCounterPropsInclude<FieldCounter> & {
  helperMessage?: string
  validationMessage?: string
  validationMessageHide?: boolean
}
export type FieldMessageProps = FieldMessagePropsBasic
export declare const defaultsFieldMessage: {}
export type FieldMessageComponents = FieldCounterComponentInclude
export type FieldMessageEmits = {}
export interface FieldMessageExpose {}
export interface FieldMessageSlots {
  counter?(props: any): any
  message?(props: any): any
}
export type FieldMessageClasses = {
  main: ConstrClass
  message: string
  counter: string
}
export type FormattedNumberPropsBasic = {
  value?: number | string
  locales?: string
  options?: Intl.NumberFormatOptions
}
export type FormattedNumberProps = FormattedNumberPropsBasic & { format?: 'currency' | 'percent' | 'unit' | 'decimal'; currency?: string; unit?: string }
export declare const defaultsFormattedNumber: {}
export type FormattedNumberComponents = {}
export type FormattedNumberEmits = {}
export interface FormattedNumberExpose {}
export interface FormattedNumberSlots {}
export type FormattedNumberClasses = {
  main: ConstrClass
}
export type FormattedUnitPropsBasic = {
  value?: number | string
  unit?: string
  locales?: string
  options?: Intl.NumberFormatOptions
}
export type FormattedUnitProps = FormattedUnitPropsBasic & { display?: 'short' | 'long' | 'narrow'; convert?: boolean }
export declare const defaultsFormattedUnit: {}
export type FormattedUnitComponents = {}
export type FormattedUnitEmits = {}
export interface FormattedUnitExpose {}
export interface FormattedUnitSlots {}
export type FormattedUnitClasses = {
  main: ConstrClass
}
export type GridPropsBasic = AreaPropsInclude & {
  tag?: string
}
export type GridProps = GridPropsBasic & { align?: 'top' | 'center' | 'bottom'; justify?: 'left' | 'center' | 'right' | 'space-between'; gap?: string }
export declare const defaultsGrid: {
  area: string
  tag: string
}
export type GridComponents = {}
export type GridEmits = {}
export interface GridExpose {}
export interface GridSlots {
  default?(props: any): any
}
export type GridClasses = {
  main: ConstrClass
}
export type GridItemPropsBasic = AreaPropsInclude & {
  tag?: string
  span?: number | string
}
export type GridItemProps = GridItemPropsBasic
export declare const defaultsGridItem: {
  area: string
  tag: string
}
export type GridItemComponents = {}
export type GridItemEmits = {}
export interface GridItemExpose {}
export interface GridItemSlots {
  default?(props: any): any
}
export type GridItemClasses = {
  main: ConstrClass
}
export type GroupPropsBasic = AreaPropsInclude & {
  tag?: string
}
export type GroupProps = GroupPropsBasic & { orientation?: 'horizontal' | 'vertical'; gap?: string }
export declare const defaultsGroup: {
  area: string
  tag: string
}
export type GroupComponents = {}
export type GroupEmits = {}
export interface GroupExpose {}
export interface GroupSlots {
  default?(props: any): any
}
export type GroupClasses = {
  main: ConstrClass
}
export type HeaderComponentInclude = {
  header?: object
}
export type HeaderPropsInclude<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = {
  headerLabel?: string | number
  headerDescription?: string
  headerCaption?: string
  headerTag?: string
  headerAttrs?: ConstrBind<Header>
}
export interface HeaderSlotsInclude extends LabelSlots, DescriptionSlots, CaptionSlots {
  header?(props: any): any
}
export type HeaderPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = LabelProps & DescriptionProps & CaptionProps & IconPropsInclude<Icon> & SkeletonPropsInclude & {
  tag?: string
}
export type HeaderProps = HeaderPropsBasic
export declare const defaultsHeader: {
  tag: string
}
export type HeaderComponents = IconComponentInclude
export type HeaderEmits = {}
export interface HeaderExpose {}
export interface HeaderSlots extends LabelSlots, DescriptionSlots, CaptionSlots {}
export type HeaderClasses = {
  main: ConstrClass
  label: string
  description: string
  caption: string
  icon: string
}
export type HeadroomPropsBasic = HeadroomPropsInclude & {
  tag?: string
}
export type HeadroomProps = HeadroomPropsBasic
export declare const defaultsHeadroom: {
  tag: string
  headroom: boolean
  headroomDisappears: boolean
}
export type HeadroomComponents = {}
export type HeadroomEmits = HeadroomEmitsInclude
export interface HeadroomExpose extends HeadroomExposeInclude {}
export interface HeadroomSlots {
  default?(props: any): any
}
export type HeadroomClasses = {
  main: ConstrClass
}
export type HorizontalScrollPropsBasic = {
  tag?: string
}
export type HorizontalScrollProps = HorizontalScrollPropsBasic
export declare const defaultsHorizontalScroll: {
  tag: string
}
export type HorizontalScrollComponents = {}
export type HorizontalScrollEmits = {}
export interface HorizontalScrollExpose {}
export interface HorizontalScrollSlots {
  default?(props: any): any
}
export type HorizontalScrollClasses = {
  main: ConstrClass
}
export type IconItem = string | VNode | ImagePropsBasic | Record<string, any>
export type IconValue<Icon extends IconPropsBasic = IconPropsBasic> = string | ConstrBind<Icon> | VNode
export type IconComponentInclude = {
  icon?: object
}
export type IconPropsInclude<Icon extends IconPropsBasic = IconPropsBasic> = {
  icon?: IconValue<Icon>
  iconAttrs?: ConstrBind<Icon>
}
export type IconTrailingPropsInclude<Icon extends IconPropsBasic = IconPropsBasic> = IconPropsInclude<Icon> & {
  iconTrailing?: IconValue<Icon>
}
export type IconLitePropsInclude<Icon extends IconPropsBasic = IconPropsBasic> = {
  icon?: IconValue<Icon>
  iconAttrs?: ConstrBind<Icon>
}
export type IconPropsBasic = {
  icon?: IconItem
  animationType?: 'spin' | 'ping' | 'pulse' | 'bounce'
  animationStart?: boolean
}
export type IconProps = IconPropsBasic & { size?: 'small' | 'medium' | 'large' }
export declare const defaultsIcon: {}
export type IconComponents = ImageComponentInclude
export type IconEmits = ImageEmitsInclude
export interface IconExpose {}
export interface IconSlots {}
export type IconClasses = {
  main: ConstrClass
  icon: string
}
export type ImageEmitsInclude = {
  load: [event: Event]
  error: [event: Event]
}
export type ImageComponentInclude = {
  image?: object
}
export type ImagePropsInclude<Image extends ImagePropsBasic = ImagePropsBasic> = {
  image?: string | ConstrBind<Image>
  imageAttrs?: ConstrBind<Image>
}
export type ImagePropsBasic = {
  src?: string
  alt?: string
}
export type ImageProps = ImagePropsBasic & { fit?: 'contain' | 'cover' | 'fill' | 'none' }
export declare const defaultsImage: {}
export type ImageComponents = {}
export type ImageEmits = ImageEmitsInclude
export interface ImageExpose {}
export interface ImageSlots {}
export type ImageClasses = {
  main: ConstrClass
}
export type InputPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = FieldPropsBasic<Icon, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldAllProps & ModelProps<string | number> & {
  type?: FieldType
  mask?: string
}
export type InputProps = InputPropsBasic & FieldPropsToken
export declare const defaultsInput: {
  type: string
}
export type InputComponents = FieldComponents
export type InputEmits = FieldBasicEmits<string | number>
export interface InputExpose extends FieldBasicExpose<string | number> {}
export interface InputSlots extends FieldSlotsInclude {}
export type InputClasses = FieldClasses
export type InputCodePropsBasic = ModelProps<string> & {
  count?: number
  type?: 'text' | 'number' | 'password'
}
export type InputCodeProps = InputCodePropsBasic
export declare const defaultsInputCode: {
  count: number
  type: string
}
export type InputCodeComponents = {
  inputCodeItem: object
}
export type InputCodeEmits = ModelEmits<string> & {
  complete: [value: string]
}
export interface InputCodeExpose {
  clear(): void
  focus(): void
}
export interface InputCodeSlots {}
export type InputCodeClasses = {
  main: ConstrClass
  item: string
}
export type InputCodeItemPropsBasic = ModelProps<string> & {
  index?: number
  type?: string
}
export type InputCodeItemProps = InputCodeItemPropsBasic
export declare const defaultsInputCodeItem: {
  type: string
}
export type InputCodeItemComponents = InputComponents
export type InputCodeItemEmits = ModelEmits<string>
export interface InputCodeItemExpose extends InputExpose {}
export interface InputCodeItemSlots {}
export type InputCodeItemClasses = {
  main: ConstrClass
}
export type InputPhonePropsBasic = InputPropsBasic & {
  maskPhone?: boolean
  country?: string
}
export type InputPhoneProps = InputPhonePropsBasic & FieldPropsToken
export declare const defaultsInputPhone: {
  country: string
}
export type InputPhoneComponents = InputComponents & {
  menuCountry: object
}
export type InputPhoneEmits = InputEmits
export interface InputPhoneExpose extends InputExpose {}
export interface InputPhoneSlots extends InputSlots {}
export type InputPhoneClasses = InputClasses
export type InputPhoneDialCodePropsBasic = LabelProps & {
  code?: string
  dialCode?: string
}
export type InputPhoneDialCodeProps = InputPhoneDialCodePropsBasic
export declare const defaultsInputPhoneDialCode: {}
export type InputPhoneDialCodeComponents = {}
export type InputPhoneDialCodeEmits = {}
export interface InputPhoneDialCodeExpose {}
export interface InputPhoneDialCodeSlots {}
export type InputPhoneDialCodeClasses = {
  main: ConstrClass
}
export type InputSocialPropsBasic = InputPropsBasic & {
  typeSocial?: 'telegram' | 'whatsapp' | 'vk' | 'facebook' | 'instagram' | 'twitter' | string
}
export type InputSocialProps = InputSocialPropsBasic & FieldPropsToken
export declare const defaultsInputSocial: {}
export type InputSocialComponents = InputComponents
export type InputSocialEmits = InputEmits
export interface InputSocialExpose extends InputExpose {}
export interface InputSocialSlots extends InputSlots {}
export type InputSocialClasses = InputClasses
export type ListPropsBasic<Item extends ListItemPropsBasic = ListItemPropsBasic> = ModelPropsSelected<ListSelectedList> & {
  list?: ListListInput<Item>
  multiple?: boolean
  keyLabel?: string
  keyValue?: string
  itemAttrs?: ConstrBind<Item>
}
export type ListProps = ListPropsBasic
export declare const defaultsList: {}
export type ListComponents = {
  listItem: object
}
export type ListEmits = EventClickEmits & ModelEmitsSelected<ListSelectedList>
export interface ListExpose {}
export interface ListSlots {
  default?(props: any): any
}
export type ListClasses = {
  main: ConstrClass
  item: string
}
export type ListGroupPropsBasic = ListPropsBasic & {
  title?: string
}
export type ListGroupProps = ListGroupPropsBasic
export declare const defaultsListGroup: {}
export type ListGroupComponents = ListComponents
export type ListGroupEmits = ListEmits
export interface ListGroupExpose extends ListExpose {}
export interface ListGroupSlots extends ListSlots {
  header?(props: any): any
}
export type ListGroupClasses = {
  main: ConstrClass
  header: string
  title: string
  list: string
}
export type ListItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = CellPropsBasic<Icon> & ModelPropsSelected & {
  value?: any
  focus?: boolean
}
export type ListItemProps = ListItemPropsBasic & CellPropsToken
export declare const defaultsListItem: {}
export type ListItemComponents = CellComponents
export type ListItemEmits = CellEmits & ModelEmitsSelected
export interface ListItemExpose extends CellExpose {}
export interface ListItemSlots extends CellSlots {}
export type ListItemClasses = CellClasses
export type ListMenuPropsBasic = ListPropsBasic & {
  search?: boolean
  searchPlaceholder?: string
}
export type ListMenuProps = ListMenuPropsBasic
export declare const defaultsListMenu: {}
export type ListMenuComponents = ListComponents & {
  input: object
}
export type ListMenuEmits = ListEmits
export interface ListMenuExpose extends ListExpose {}
export interface ListMenuSlots extends ListSlots {
  search?(props: any): any
}
export type ListMenuClasses = {
  main: ConstrClass
  search: string
  list: string
}
export type MaskPropsBasic = ModelProps<string> & {
  mask?: string
  visible?: boolean
}
export type MaskProps = MaskPropsBasic
export declare const defaultsMask: {}
export type MaskComponents = {}
export type MaskEmits = ModelEmits<string>
export interface MaskExpose {
  getMasked(): string
  getUnmasked(): string
}
export interface MaskSlots {}
export type MaskClasses = {
  main: ConstrClass
}
export type MenuPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic> = WindowPropsInclude<Window> & ModelPropsOpen & {
  open?: boolean
  disabled?: boolean
  clickOpen?: boolean
  clickClose?: boolean
  autoClose?: boolean
}
export type MenuProps = MenuPropsBasic
export declare const defaultsMenu: {
  clickOpen: boolean
  clickClose: boolean
  autoClose: boolean
}
export type MenuComponents = WindowComponents
export type MenuEmits = WindowEmits & ModelEmitsOpen
export interface MenuExpose extends WindowExpose {}
export interface MenuSlots extends WindowSlots {
  control?(props: any): any
}
export type MenuClasses = {
  main: ConstrClass
  control: string
  window: string
}
export type MenuButtonPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = ButtonPropsInclude<Button> & MenuPropsInclude<Menu> & {
  list?: ListListInput
}
export type MenuButtonProps = MenuButtonPropsBasic
export declare const defaultsMenuButton: {}
export type MenuButtonComponents = ButtonComponentInclude & MenuComponents & {
  listMenu: object
}
export type MenuButtonEmits = ButtonEmits & MenuEmits
export interface MenuButtonExpose extends ButtonExpose, MenuExpose {}
export interface MenuButtonSlots extends ButtonSlots, MenuSlots {}
export type MenuButtonClasses = {
  main: ConstrClass
}
export type MenuChipPropsBasic<Chip extends ChipPropsBasic = ChipPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = ChipPropsInclude<Chip> & MenuPropsInclude<Menu> & {
  list?: ListListInput
}
export type MenuChipProps = MenuChipPropsBasic
export declare const defaultsMenuChip: {}
export type MenuChipComponents = ChipComponentInclude & MenuComponents & {
  listMenu: object
}
export type MenuChipEmits = ChipEmits & MenuEmits
export interface MenuChipExpose extends ChipExpose, MenuExpose {}
export interface MenuChipSlots extends ChipSlots, MenuSlots {}
export type MenuChipClasses = {
  main: ConstrClass
}
export type MenuCountryPropsBasic = MenuButtonPropsBasic & {
  country?: string
}
export type MenuCountryProps = MenuCountryPropsBasic
export declare const defaultsMenuCountry: {}
export type MenuCountryComponents = MenuButtonComponents
export type MenuCountryEmits = MenuButtonEmits & {
  'update:country': [country: string]
}
export interface MenuCountryExpose extends MenuButtonExpose {}
export interface MenuCountrySlots extends MenuButtonSlots {}
export type MenuCountryClasses = MenuButtonClasses
export type MenuLanguagePropsBasic = MenuButtonPropsBasic & {
  language?: string
}
export type MenuLanguageProps = MenuLanguagePropsBasic
export declare const defaultsMenuLanguage: {}
export type MenuLanguageComponents = MenuButtonComponents
export type MenuLanguageEmits = MenuButtonEmits & {
  'update:language': [language: string]
}
export interface MenuLanguageExpose extends MenuButtonExpose {}
export interface MenuLanguageSlots extends MenuButtonSlots {}
export type MenuLanguageClasses = MenuButtonClasses
export type ModalComponents = WindowComponents
export type ModalEmits = WindowEmits & ModelEmitsOpen
export interface ModalExpose extends WindowExpose {}
export interface ModalSlots extends WindowSlots {}
export type ModalClasses = WindowClasses
export type MotionAxisPropsBasic = {
  axis?: 'x' | 'y'
  open?: boolean
}
export type MotionAxisProps = MotionAxisPropsBasic
export declare const defaultsMotionAxis: {
  axis: string
  open: boolean
}
export type MotionAxisComponents = {}
export type MotionAxisEmits = {
  open: []
  close: []
}
export interface MotionAxisExpose {}
export interface MotionAxisSlots {
  default?(props: any): any
}
export type MotionAxisClasses = {
  main: ConstrClass
}
export type MotionFlipPropsBasic = {
  open?: boolean
}
export type MotionFlipProps = MotionFlipPropsBasic
export declare const defaultsMotionFlip: {
  open: boolean
}
export type MotionFlipComponents = {}
export type MotionFlipEmits = {
  open: []
  close: []
}
export interface MotionFlipExpose {}
export interface MotionFlipSlots {
  default?(props: any): any
}
export type MotionFlipClasses = {
  main: ConstrClass
}
export type MotionStickyPropsBasic = StickyPropsInclude & {
  open?: boolean
}
export type MotionStickyProps = MotionStickyPropsBasic
export declare const defaultsMotionSticky: {
  open: boolean
}
export type MotionStickyComponents = {}
export type MotionStickyEmits = {
  open: []
  close: []
}
export interface MotionStickyExpose {}
export interface MotionStickySlots {
  default?(props: any): any
}
export type MotionStickyClasses = {
  main: ConstrClass
}
export type MotionTransformControlItem = {
  open: boolean
  toggle: () => void
}
export type MotionTransformComponentInclude = {
  motionTransform?: object
}
export type MotionTransformEmitsInclude = {
  motionOpen: []
  motionClose: []
}
export type MotionTransformPropsInclude<MotionTransform extends MotionTransformPropsBasic = MotionTransformPropsBasic> = {
  motionTransformOpen?: boolean
  motionTransformAttrs?: ConstrBind<MotionTransform>
}
export interface MotionTransformExposeInclude {
  toggle(): void
  open(): void
  close(): void
}
export type MotionTransformPropsBasic = {
  open?: boolean
}
export type MotionTransformProps = MotionTransformPropsBasic
export declare const defaultsMotionTransform: {
  open: boolean
}
export type MotionTransformComponents = {}
export type MotionTransformEmits = {
  open: []
  close: []
}
export interface MotionTransformExpose extends MotionTransformExposeInclude {}
export interface MotionTransformSlots {
  default?(props: MotionTransformControlItem): any
}
export type MotionTransformClasses = {
  main: ConstrClass
}
export type NavigationItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = CellPropsBasic<Icon> & {
  active?: boolean
  to?: string
}
export type NavigationItemProps = NavigationItemPropsBasic & CellPropsToken
export declare const defaultsNavigationItem: {}
export type NavigationItemComponents = CellComponents
export type NavigationItemEmits = CellEmits
export interface NavigationItemExpose extends CellExpose {}
export interface NavigationItemSlots extends CellSlots {}
export type NavigationItemClasses = CellClasses
export type NavigationListPropsBasic = ListPropsBasic & {
  title?: string
}
export type NavigationListProps = NavigationListPropsBasic
export declare const defaultsNavigationList: {}
export type NavigationListComponents = {
  navigationItem: object
}
export type NavigationListEmits = ListEmits
export interface NavigationListExpose extends ListExpose {}
export interface NavigationListSlots extends ListSlots {}
export type NavigationListClasses = {
  main: ConstrClass
  title: string
  list: string
}
export type NavigationRailPropsBasic = ListPropsBasic & {
  extended?: boolean
}
export type NavigationRailProps = NavigationRailPropsBasic
export declare const defaultsNavigationRail: {}
export type NavigationRailComponents = {
  navigationRailItem: object
}
export type NavigationRailEmits = ListEmits
export interface NavigationRailExpose extends ListExpose {}
export interface NavigationRailSlots extends ListSlots {}
export type NavigationRailClasses = {
  main: ConstrClass
  list: string
}
export type NavigationRailItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = NavigationItemPropsBasic<Icon>
export type NavigationRailItemProps = NavigationRailItemPropsBasic & CellPropsToken
export declare const defaultsNavigationRailItem: {}
export type NavigationRailItemComponents = CellComponents
export type NavigationRailItemEmits = CellEmits
export interface NavigationRailItemExpose extends CellExpose {}
export interface NavigationRailItemSlots extends CellSlots {}
export type NavigationRailItemClasses = CellClasses
export type PagePropsBasic = AreaPropsInclude & {
  tag?: string
}
export type PageProps = PagePropsBasic
export declare const defaultsPage: {
  area: string
  tag: string
}
export type PageComponents = {}
export type PageEmits = {}
export interface PageExpose {}
export interface PageSlots {
  default?(props: any): any
}
export type PageClasses = {
  main: ConstrClass
}
export type PageAreaPropsBasic = AreaPropsInclude & {
  tag?: string
}
export type PageAreaProps = PageAreaPropsBasic
export declare const defaultsPageArea: {
  area: string
  tag: string
}
export type PageAreaComponents = {}
export type PageAreaEmits = {}
export interface PageAreaExpose {}
export interface PageAreaSlots {
  default?(props: any): any
}
export type PageAreaClasses = {
  main: ConstrClass
}
export type PaginationPropsBasic = PaginationPropsInclude & ModelProps<number> & {
  page?: number
  count?: number
  rows?: number
  visible?: number
}
export type PaginationProps = PaginationPropsBasic
export declare const defaultsPagination: {
  page: number
  rows: number
  visible: number
}
export type PaginationComponents = {
  button: object
}
export type PaginationEmits = ModelEmits<number>
export interface PaginationExpose {}
export interface PaginationSlots {}
export type PaginationClasses = {
  main: ConstrClass
  item: string
}
export type PlaceholderPropsBasic = ImagePropsInclude & LabelProps & DescriptionProps & {
  tag?: string
}
export type PlaceholderProps = PlaceholderPropsBasic
export declare const defaultsPlaceholder: {
  tag: string
}
export type PlaceholderComponents = ImageComponentInclude
export type PlaceholderEmits = {}
export interface PlaceholderExpose {}
export interface PlaceholderSlots extends LabelSlots, DescriptionSlots {
  default?(props: any): any
}
export type PlaceholderClasses = {
  main: ConstrClass
  image: string
  label: string
  description: string
}
export type ProgressComponentInclude = {
  progress?: object
}
export type ProgressPropsInclude<Progress extends ProgressPropsBasic = ProgressPropsBasic> = {
  loading?: boolean
  progressAttrs?: ConstrBind<Progress>
}
export type ProgressPropsBasic = {
  value?: number
  max?: number
  indeterminate?: boolean
  visible?: boolean
}
export type ProgressProps = ProgressPropsBasic & { type?: 'circular' | 'linear'; size?: 'small' | 'medium' | 'large' }
export declare const defaultsProgress: {
  type: string
  max: number
}
export type ProgressComponents = {}
export type ProgressEmits = {}
export interface ProgressExpose {}
export interface ProgressSlots {}
export type ProgressClasses = {
  main: ConstrClass
  circle: string
}
export type ProgressBarPropsBasic = ProgressPropsBasic & {
  buffer?: number
}
export type ProgressBarProps = ProgressBarPropsBasic
export declare const defaultsProgressBar: {
  max: number
}
export type ProgressBarComponents = {}
export type ProgressBarEmits = {}
export interface ProgressBarExpose {}
export interface ProgressBarSlots {}
export type ProgressBarClasses = {
  main: ConstrClass
  bar: string
  buffer: string
}
export type RadioPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = CheckboxPropsBasic<Image, FieldMessage, FieldCounter, Progress> & {
  valueRadio?: any
}
export type RadioProps = RadioPropsBasic & CheckboxPropsToken
export declare const defaultsRadio: {
  block: boolean
}
export type RadioComponents = CheckboxComponents
export type RadioEmits = CheckboxEmits
export interface RadioExpose extends CheckboxExpose {}
export interface RadioSlots extends CheckboxSlots {}
export type RadioClasses = CheckboxClasses
export type RippleComponentInclude = {
  ripple?: object
}
export type RipplePropsInclude = {
  rippleDisabled?: boolean
}
export type RipplePropsBasic = {
  disabled?: boolean
}
export type RippleProps = RipplePropsBasic
export declare const defaultsRipple: {}
export type RippleComponents = {}
export type RippleEmits = {}
export interface RippleExpose {}
export interface RippleSlots {}
export type RippleClasses = {
  main: ConstrClass
}
export type ScrollStickyPropsBasic = StickyPropsInclude & {
  tag?: string
}
export type ScrollStickyProps = ScrollStickyPropsBasic
export declare const defaultsScrollSticky: {
  tag: string
}
export type ScrollStickyComponents = {}
export type ScrollStickyEmits = {}
export interface ScrollStickyExpose {}
export interface ScrollStickySlots {
  default?(props: any): any
}
export type ScrollStickyClasses = {
  main: ConstrClass
}
export type ScrollbarPropsBasic = {
  tag?: string
  visible?: boolean
}
export type ScrollbarProps = ScrollbarPropsBasic
export declare const defaultsScrollbar: {
  tag: string
}
export type ScrollbarComponents = {}
export type ScrollbarEmits = {}
export interface ScrollbarExpose {
  update(): void
}
export interface ScrollbarSlots {
  default?(props: any): any
}
export type ScrollbarClasses = {
  main: ConstrClass
  track: string
  thumb: string
}
export type SectionPropsBasic = AreaPropsInclude & {
  tag?: string
}
export type SectionProps = SectionPropsBasic
export declare const defaultsSection: {
  area: string
  tag: string
}
export type SectionComponents = {}
export type SectionEmits = {}
export interface SectionExpose {}
export interface SectionSlots {
  default?(props: any): any
}
export type SectionClasses = {
  main: ConstrClass
}
export type SegmentControlPropsBasic<Item extends SegmentControlItemPropsBasic = SegmentControlItemPropsBasic> = ModelPropsSelected<ListSelectedList> & {
  list?: ListListInput<Item>
  multiple?: boolean
  keyLabel?: string
  keyValue?: string
  itemAttrs?: ConstrBind<Item>
}
export type SegmentControlProps = SegmentControlPropsBasic
export declare const defaultsSegmentControl: {}
export type SegmentControlComponents = {
  segmentControlItem: object
}
export type SegmentControlEmits = EventClickEmits & ModelEmitsSelected<ListSelectedList>
export interface SegmentControlExpose {}
export interface SegmentControlSlots {
  default?(props: any): any
}
export type SegmentControlClasses = {
  main: ConstrClass
  item: string
}
export type SegmentControlItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = ButtonPropsBasic<Icon> & ModelPropsSelected & {
  value?: any
}
export type SegmentControlItemProps = SegmentControlItemPropsBasic & ButtonPropsToken
export declare const defaultsSegmentControlItem: {}
export type SegmentControlItemComponents = ButtonComponents
export type SegmentControlItemEmits = ButtonEmits & ModelEmitsSelected
export interface SegmentControlItemExpose extends ButtonExpose {}
export interface SegmentControlItemSlots extends ButtonSlots {}
export type SegmentControlItemClasses = ButtonClasses
export type SelectPropsBasic<Item extends ListItemPropsBasic = ListItemPropsBasic> = InputPropsBasic & ModelPropsSelected<ListSelectedList> & {
  list?: ListListInput<Item>
  multiple?: boolean
  search?: boolean
  keyLabel?: string
  keyValue?: string
  itemAttrs?: ConstrBind<Item>
}
export type SelectProps = SelectPropsBasic & FieldPropsToken
export declare const defaultsSelect: {}
export type SelectComponents = InputComponents & {
  menu: object
  listMenu: object
}
export type SelectEmits = InputEmits & ModelEmitsSelected<ListSelectedList>
export interface SelectExpose extends InputExpose {}
export interface SelectSlots extends InputSlots {
  menu?(props: any): any
}
export type SelectClasses = InputClasses
export type SelectValuePropsBasic = {
  value?: any
  label?: string
}
export type SelectValueProps = SelectValuePropsBasic
export declare const defaultsSelectValue: {}
export type SelectValueComponents = {}
export type SelectValueEmits = {}
export interface SelectValueExpose {}
export interface SelectValueSlots {}
export type SelectValueClasses = {
  main: ConstrClass
}
export type SelectableAreaPropsBasic = ModelPropsSelected<ListSelectedList> & {
  multiple?: boolean
}
export type SelectableAreaProps = SelectableAreaPropsBasic
export declare const defaultsSelectableArea: {}
export type SelectableAreaComponents = {}
export type SelectableAreaEmits = ModelEmitsSelected<ListSelectedList>
export interface SelectableAreaExpose {}
export interface SelectableAreaSlots {
  default?(props: any): any
}
export type SelectableAreaClasses = {
  main: ConstrClass
}
export type SkeletonComponentInclude = {
  skeleton?: object
}
export type SkeletonPropsInclude<Skeleton extends SkeletonPropsBasic = SkeletonPropsBasic> = {
  loading?: boolean
  skeletonAttrs?: ConstrBind<Skeleton>
}
export type SkeletonPropsBasic = {
  loading?: boolean
  animated?: boolean
}
export type SkeletonProps = SkeletonPropsBasic
export declare const defaultsSkeleton: {
  animated: boolean
}
export type SkeletonComponents = {}
export type SkeletonEmits = {}
export interface SkeletonExpose {}
export interface SkeletonSlots {}
export type SkeletonClasses = {
  main: ConstrClass
}
export type SkeletonItemPropsBasic = {
  tag?: string
  width?: string
  height?: string
}
export type SkeletonItemProps = SkeletonItemPropsBasic
export declare const defaultsSkeletonItem: {
  tag: string
}
export type SkeletonItemComponents = {}
export type SkeletonItemEmits = {}
export interface SkeletonItemExpose {}
export interface SkeletonItemSlots {}
export type SkeletonItemClasses = {
  main: ConstrClass
}
export type SliderPropsBasic = ModelProps<number | number[]> & {
  min?: number
  max?: number
  step?: number
  range?: boolean
}
export type SliderProps = SliderPropsBasic
export declare const defaultsSlider: {
  min: number
  max: number
  step: number
}
export type SliderComponents = {}
export type SliderEmits = ModelEmits<number | number[]>
export interface SliderExpose {}
export interface SliderSlots {}
export type SliderClasses = {
  main: ConstrClass
  track: string
  thumb: string
}
export type SliderFieldPropsBasic = FieldPropsBasic & SliderPropsBasic
export type SliderFieldProps = SliderFieldPropsBasic & FieldPropsToken
export declare const defaultsSliderField: {}
export type SliderFieldComponents = FieldComponents & {
  slider: object
}
export type SliderFieldEmits = FieldBasicEmits & ModelEmits<number | number[]>
export interface SliderFieldExpose extends FieldBasicExpose {}
export interface SliderFieldSlots extends FieldSlotsInclude {}
export type SliderFieldClasses = FieldClasses
export type SnackbarPropsBasic = ModelPropsOpen & {
  open?: boolean
  timeout?: number
}
export type SnackbarProps = SnackbarPropsBasic
export declare const defaultsSnackbar: {
  timeout: number
}
export type SnackbarComponents = {
  snackbarItem: object
}
export type SnackbarEmits = ModelEmitsOpen
export interface SnackbarExpose {
  add(item: any): void
  remove(id: string): void
}
export interface SnackbarSlots {
  default?(props: any): any
}
export type SnackbarClasses = {
  main: ConstrClass
}
export type SnackbarItemPropsBasic = LabelProps & DescriptionProps & {
  timeout?: number
}
export type SnackbarItemProps = SnackbarItemPropsBasic
export declare const defaultsSnackbarItem: {
  timeout: number
}
export type SnackbarItemComponents = {}
export type SnackbarItemEmits = {
  close: []
}
export interface SnackbarItemExpose {}
export interface SnackbarItemSlots extends LabelSlots, DescriptionSlots {}
export type SnackbarItemClasses = {
  main: ConstrClass
  label: string
  description: string
}
export type SwitchPropsBasic = CheckboxPropsBasic
export type SwitchProps = SwitchPropsBasic & CheckboxPropsToken
export declare const defaultsSwitch: {}
export type SwitchComponents = CheckboxComponents
export type SwitchEmits = CheckboxEmits
export interface SwitchExpose extends CheckboxExpose {}
export interface SwitchSlots extends CheckboxSlots {}
export type SwitchClasses = CheckboxClasses
export type TabItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = ButtonPropsBasic<Icon> & ModelPropsSelected & {
  value?: any
}
export type TabItemProps = TabItemPropsBasic & ButtonPropsToken
export declare const defaultsTabItem: {}
export type TabItemComponents = ButtonComponents
export type TabItemEmits = ButtonEmits & ModelEmitsSelected
export interface TabItemExpose extends ButtonExpose {}
export interface TabItemSlots extends ButtonSlots {}
export type TabItemClasses = ButtonClasses
export type TablePropsBasic = {
  columns?: any[]
  data?: any[]
}
export type TableProps = TablePropsBasic
export declare const defaultsTable: {}
export type TableComponents = {}
export type TableEmits = {}
export interface TableExpose {}
export interface TableSlots {
  default?(props: any): any
}
export type TableClasses = {
  main: ConstrClass
}
export type TableFlexPropsBasic = TablePropsBasic
export type TableFlexProps = TableFlexPropsBasic
export declare const defaultsTableFlex: {}
export type TableFlexComponents = {}
export type TableFlexEmits = {}
export interface TableFlexExpose {}
export interface TableFlexSlots {
  default?(props: any): any
}
export type TableFlexClasses = {
  main: ConstrClass
}
export type TableFlexHeaderItemPropsBasic = LabelProps
export type TableFlexHeaderItemProps = TableFlexHeaderItemPropsBasic
export declare const defaultsTableFlexHeaderItem: {}
export type TableFlexHeaderItemComponents = {}
export type TableFlexHeaderItemEmits = {}
export interface TableFlexHeaderItemExpose {}
export interface TableFlexHeaderItemSlots extends LabelSlots {}
export type TableFlexHeaderItemClasses = {
  main: ConstrClass
}
export type TableFlexItemPropsBasic = LabelProps
export type TableFlexItemProps = TableFlexItemPropsBasic
export declare const defaultsTableFlexItem: {}
export type TableFlexItemComponents = {}
export type TableFlexItemEmits = {}
export interface TableFlexItemExpose {}
export interface TableFlexItemSlots extends LabelSlots {}
export type TableFlexItemClasses = {
  main: ConstrClass
}
export type TableFlexRecordPropsBasic = {
  item?: any
}
export type TableFlexRecordProps = TableFlexRecordPropsBasic
export declare const defaultsTableFlexRecord: {}
export type TableFlexRecordComponents = {}
export type TableFlexRecordEmits = {}
export interface TableFlexRecordExpose {}
export interface TableFlexRecordSlots {
  default?(props: any): any
}
export type TableFlexRecordClasses = {
  main: ConstrClass
}
export type TableHeaderItemPropsBasic = LabelProps
export type TableHeaderItemProps = TableHeaderItemPropsBasic
export declare const defaultsTableHeaderItem: {}
export type TableHeaderItemComponents = {}
export type TableHeaderItemEmits = {}
export interface TableHeaderItemExpose {}
export interface TableHeaderItemSlots extends LabelSlots {}
export type TableHeaderItemClasses = {
  main: ConstrClass
}
export type TableItemPropsBasic = LabelProps
export type TableItemProps = TableItemPropsBasic
export declare const defaultsTableItem: {}
export type TableItemComponents = {}
export type TableItemEmits = {}
export interface TableItemExpose {}
export interface TableItemSlots extends LabelSlots {}
export type TableItemClasses = {
  main: ConstrClass
}
export type TableRecordPropsBasic = {
  item?: any
}
export type TableRecordProps = TableRecordPropsBasic
export declare const defaultsTableRecord: {}
export type TableRecordComponents = {}
export type TableRecordEmits = {}
export interface TableRecordExpose {}
export interface TableRecordSlots {
  default?(props: any): any
}
export type TableRecordClasses = {
  main: ConstrClass
}
export type TabsPropsBasic<Item extends TabItemPropsBasic = TabItemPropsBasic> = ModelPropsSelected<ListSelectedList> & {
  list?: ListListInput<Item>
  itemAttrs?: ConstrBind<Item>
}
export type TabsProps = TabsPropsBasic
export declare const defaultsTabs: {}
export type TabsComponents = {
  tabItem: object
}
export type TabsEmits = EventClickEmits & ModelEmitsSelected<ListSelectedList>
export interface TabsExpose {}
export interface TabsSlots {
  default?(props: any): any
}
export type TabsClasses = {
  main: ConstrClass
  item: string
}
export type TabsNavigationPropsBasic = TabsPropsBasic
export type TabsNavigationProps = TabsNavigationPropsBasic
export declare const defaultsTabsNavigation: {}
export type TabsNavigationComponents = TabsComponents
export type TabsNavigationEmits = TabsEmits
export interface TabsNavigationExpose extends TabsExpose {}
export interface TabsNavigationSlots extends TabsSlots {}
export type TabsNavigationClasses = TabsClasses
export type TextDescriptionPropsBasic = DescriptionProps
export type TextDescriptionProps = TextDescriptionPropsBasic
export declare const defaultsTextDescription: {}
export type TextDescriptionComponents = {}
export type TextDescriptionEmits = {}
export interface TextDescriptionExpose {}
export interface TextDescriptionSlots extends DescriptionSlots {}
export type TextDescriptionClasses = {
  main: ConstrClass
}
export type TextLabelPropsBasic = LabelProps
export type TextLabelProps = TextLabelPropsBasic
export declare const defaultsTextLabel: {}
export type TextLabelComponents = {}
export type TextLabelEmits = {}
export interface TextLabelExpose {}
export interface TextLabelSlots extends LabelSlots {}
export type TextLabelClasses = {
  main: ConstrClass
}
export type TextareaPropsBasic = InputPropsBasic & {
  rows?: number
  autosize?: boolean
}
export type TextareaProps = TextareaPropsBasic & FieldPropsToken
export declare const defaultsTextarea: {
  rows: number
}
export type TextareaComponents = InputComponents
export type TextareaEmits = InputEmits
export interface TextareaExpose extends InputExpose {}
export interface TextareaSlots extends InputSlots {}
export type TextareaClasses = InputClasses
export type TextareaAutosizePropsBasic = TextareaPropsBasic
export type TextareaAutosizeProps = TextareaAutosizePropsBasic & FieldPropsToken
export declare const defaultsTextareaAutosize: {}
export type TextareaAutosizeComponents = TextareaComponents
export type TextareaAutosizeEmits = TextareaEmits
export interface TextareaAutosizeExpose extends TextareaExpose {}
export interface TextareaAutosizeSlots extends TextareaSlots {}
export type TextareaAutosizeClasses = TextareaClasses
export type TooltipComponentInclude = {
  tooltip?: object
}
export type TooltipSlotsInclude = {
  tooltip?(props: any): any
}
export type TooltipPropsInclude<Tooltip extends TooltipProps = TooltipProps> = {
  tooltip?: string | ConstrBind<Tooltip>
  tooltipAttrs?: ConstrBind<Tooltip>
}
export type TooltipPropsBasic = LabelProps & ArrowPropsInclude & {
  elementTarget?: HTMLElement | string
}
export type TooltipProps = TooltipPropsBasic
export declare const defaultsTooltip: {}
export type TooltipComponents = ArrowComponents
export type TooltipEmits = {}
export interface TooltipExpose {
  update(): void
}
export interface TooltipSlots extends LabelSlots {}
export type TooltipClasses = {
  main: ConstrClass
  label: string
}
export type WindowPropsInclude<Window extends WindowPropsBasic = WindowPropsBasic> = {
  windowOpen?: boolean
  windowAttrs?: ConstrBind<Window>
}
export type WindowPropsBasic = ModelPropsOpen & ArrowPropsInclude & TeleportInclude & TabIndexInclude & {
  open?: boolean
  axis?: 'x' | 'y'
  elementTarget?: HTMLElement | string
}
export type WindowProps = WindowPropsBasic
export declare const defaultsWindow: {
  axis: string
}
export type WindowComponents = ArrowComponents
export type WindowEmits = ModelEmitsOpen
export interface WindowExpose {
  open(): void
  close(): void
  toggle(): void
}
export interface WindowSlots {
  default?(props: any): any
}
export type WindowClasses = {
  main: ConstrClass
}