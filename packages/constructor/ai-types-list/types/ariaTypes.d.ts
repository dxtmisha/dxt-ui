// md5:defea4f56a4cc5d76d78fec54e667449 true
/** ARIA true or false type @keywords aria, boolean */
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