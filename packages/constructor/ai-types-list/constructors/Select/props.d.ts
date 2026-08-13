// md5:55fb3a43628249e327d0be51cb9296c7 true
export type SelectPropsToken = {};
export type SelectPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldSelectProps & MenuPropsInclude<Menu> & {
    /** Whether the value is editable @keywords editValue, editable */
    editValue?: boolean;
    /** Whether to hide the list @keywords hideList, list */
    hideList?: boolean;
    /** Whether to show the search input @keywords showSearch, search */
    showSearch?: boolean;
    /** Whether to enabled filtering mode @keywords filterMode, filter */
    filterMode?: boolean;
    /** Icon for the down arrow @keywords iconArrowDown, arrow, icon */
    iconArrowDown?: IconValue<Icon>;
};
/** Select component properties @keywords SelectProps, properties */
export type SelectProps = SelectPropsBasic & SelectPropsToken;
/** Default values for select component @keywords defaultsSelect, defaults */
export declare const defaultsSelect: {};