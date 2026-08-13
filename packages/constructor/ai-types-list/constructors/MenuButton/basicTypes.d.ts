// md5:c500abede4d4b357a401066c62589bb6 true
export type MenuButtonPropsTool<Icon extends IconPropsBasic = IconPropsBasic> = {
    /** Separator for displayed selected value labels @keywords label separator menu button */
    labelSeparator?: string;
    /** Icon displayed in button when value is selected @keywords icon selected menu button */
    icon?: IconValue<Icon>;
    /** Whether to hide label when value is selected @keywords hide label value menu button */
    hideLabelValue?: boolean;
    /** Whether to hide value if icon is present @keywords hide value icon menu button */
    hideValueIcon?: boolean;
    /** Whether to hide the list @keywords hide list menu button */
    hideList?: boolean;
    /** Whether to show search input @keywords show search menu button */
    showSearch?: boolean;
    /** Whether filtering mode is enabled @keywords filter mode menu button */
    filterMode?: boolean;
    /** Icon for the down arrow @keywords icon arrow down menu button */
    iconArrowDown?: IconValue<Icon>;
};