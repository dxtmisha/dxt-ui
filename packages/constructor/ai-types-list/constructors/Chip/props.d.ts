// md5:5c9e88964878f380c21b1cc1eaec50aa true
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
/** Incoming properties for Chip component. @keywords chip properties props */
export type ChipProps = ChipPropsBasic & ChipPropsToken;
/** Default properties for Chip component. @keywords chip defaults configuration */
export declare const defaultsChip: {
    tag: string;
};