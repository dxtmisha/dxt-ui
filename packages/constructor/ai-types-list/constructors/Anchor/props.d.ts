// md5:48fc171c081ca84fc0805b336e85629b true
export type AnchorPropsToken = {};
export type AnchorPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Tooltip extends TooltipProps = TooltipProps> = LabelProps & TooltipPropsInclude<Tooltip> & TextCopiedClipboardPropsInclude & AnchorScrollProps & {
    hide?: boolean;
    name?: string;
    isCopy?: boolean;
    iconLink?: IconValue<Icon>;
    iconTag?: IconValue<Icon>;
    iconContentCopy?: IconValue<Icon>;
    delayHide?: number;
};
export type AnchorProps = AnchorPropsBasic & AnchorPropsToken;
/** Default anchor configuration values. @keywords anchor defaults defaultsAnchor */
export declare const defaultsAnchor: {
    shift: number;
    delayHide: number;
};