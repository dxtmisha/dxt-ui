// md5:391926b9d2c767757a548193b22c3014 true
type MenuChipPropsToken = {};
export type MenuChipPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Chip extends ChipPropsBasic = ChipPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = LabelProps & ChipPropsInclude<Chip> & FieldSelectLiteProps & MenuPropsInclude<Menu> & MenuButtonPropsTool<Icon>;
export type MenuChipProps = MenuChipPropsBasic & MenuChipPropsToken;
/** Default value for menu chip properties. @keywords defaults, menu chip, configuration */
export declare const defaultsMenuChip: {
    labelSeparator: string;
    hideLabelValue: boolean;
    hideValueIcon: boolean;
};
export {};