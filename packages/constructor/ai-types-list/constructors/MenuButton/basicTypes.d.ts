// md5:0218829ee96da718608799bc1373555b true
/** Tool properties for the menu button component. @keywords menu-button, toolbar, options */
export type MenuButtonPropsTool<Icon extends IconPropsBasic = IconPropsBasic> = {
    /** Separator for displayed labels of selected values. */
    labelSeparator?: string;
    /** Icon displayed in the button when a value is selected. */
    icon?: IconValue<Icon>;
    /** Whether to hide the label when a value is selected. */
    hideLabelValue?: boolean;
    /** Whether to hide the value if an icon is present. */
    hideValueIcon?: boolean;
    /** Whether to hide the dropdown list. */
    hideList?: boolean;
    /** Whether to display the search input. */
    showSearch?: boolean;
    /** Whether filtering mode is enabled. */
    filterMode?: boolean;
    /** Icon for the dropdown arrow. */
    iconArrowDown?: IconValue<Icon>;
};