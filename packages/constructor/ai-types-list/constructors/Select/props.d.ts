// md5:f6392ed32571a029e158d0e946be3445 true
export type SelectPropsToken = {};
export type SelectPropsBasic<
    Icon extends IconPropsBasic = IconPropsBasic,
    Field extends FieldPropsBasic = FieldPropsBasic,
    FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
    FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
    FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
    Progress extends ProgressPropsBasic = ProgressPropsBasic,
    Menu extends MenuPropsBasic = MenuPropsBasic
> = FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldSelectProps & MenuPropsInclude<Menu> & {
    /** Whether the value is editable */
    editValue?: boolean;
    /** Whether to hide the list */
    hideList?: boolean;
    /** Whether to show the search input */
    showSearch?: boolean;
    /** Whether filtering mode is enabled */
    filterMode?: boolean;
    /** Icon for the down arrow */
    iconArrowDown?: IconValue<Icon>;
};
export type SelectProps = SelectPropsBasic & SelectPropsToken;
export declare const defaultsSelect: {};