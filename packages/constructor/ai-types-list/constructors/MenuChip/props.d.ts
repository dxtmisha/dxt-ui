// md5:dbeda9eecfa41832bef0598db09a118b true
type MenuChipPropsToken = {};
export type MenuChipPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Chip extends ChipPropsBasic = ChipPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = LabelProps & ChipPropsInclude<Chip> & FieldSelectLiteProps & MenuPropsInclude<Menu> & MenuButtonPropsTool<Icon>;
/** Menu chip component properties. @keywords menu, chip, props */
export type MenuChipProps = MenuChipPropsBasic & MenuChipPropsToken;
/** Default properties for the menu chip component. @keywords defaults, menu, chip */
export declare const defaultsMenuChip: {
    labelSeparator: string;
    hideLabelValue: boolean;
    hideValueIcon: boolean;
};