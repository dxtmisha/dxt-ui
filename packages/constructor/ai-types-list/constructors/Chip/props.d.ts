// md5:f19bae6f0c2d8103dd233299a532b6a7 true
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
/** Properties for the Chip component. @keywords chip, props */
export type ChipProps = ChipPropsBasic & ChipPropsToken;
/** Default values for Chip component properties. @keywords chip, defaults */
export declare const defaultsChip: {
    tag: string;
};