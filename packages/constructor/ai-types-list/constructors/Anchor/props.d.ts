// md5:df3e94a4bd5956aa105da6d4da2a28ed true
export type AnchorPropsToken = {};
/** Base anchor component properties @keywords anchor, props */
export type AnchorPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Tooltip extends TooltipProps = TooltipProps> = LabelProps & TooltipPropsInclude<Tooltip> & TextCopiedClipboardPropsInclude & AnchorScrollProps & {
    /** Whether to hide the anchor @keywords hide, visibility */
    hide?: boolean;
    /** Unique name of the anchor for navigation @keywords name, anchor */
    name?: string;
    /** Whether copying is enabled @keywords copy, clipboard */
    isCopy?: boolean;
    /** Icon for the link @keywords icon, link */
    iconLink?: IconValue<Icon>;
    /** Icon for the tag @keywords icon, tag */
    iconTag?: IconValue<Icon>;
    /** Icon for the copy action @keywords icon, copy */
    iconContentCopy?: IconValue<Icon>;
    /** Delay before hiding in milliseconds @keywords delay, hide */
    delayHide?: number;
};
/** Anchor component properties combining base and token props @keywords anchor, props */
export type AnchorProps = AnchorPropsBasic & AnchorPropsToken;
/** Default property values for Anchor component @keywords defaults, anchor */
export declare const defaultsAnchor: {
    shift: number;
    delayHide: number;
};