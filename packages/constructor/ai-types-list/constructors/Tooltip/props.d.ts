// md5:b6d2df9a5f109b3923169beda62401fb true
export type TooltipPropsToken = {
    interactive?: boolean;
    embedded?: boolean;
};
export type TooltipPropsBasic<Arrow extends ArrowProps = ArrowProps> = LabelProps & DescriptionProps & ArrowPropsInclude<Arrow> & {
    /** Whether the tooltip is open. */
    open?: boolean;
    /** Whether the tooltip is disabled. */
    disabled?: boolean;
    /** Whether the tooltip should always remain in the DOM. */
    inDom?: boolean;
    /** Whether to position the tooltip at the top by default. */
    top?: boolean;
    /** Indent offset from the control element. */
    indent?: number;
    /** Delay before showing the tooltip. */
    delay?: number;
    /** Delay before hiding the tooltip. */
    delayHide?: number;
    /** Whether the window is displayed inside the current parent element. */
    embedded?: boolean;
};
/** Tooltip component properties. @keywords tooltip, props */
export type TooltipProps = TooltipPropsBasic & TooltipPropsToken;
/** Default property values for the tooltip. @keywords tooltip, defaults */
export declare const defaultsTooltip: {
    interactive: boolean;
    indent: number;
    delay: number;
    delayHide: number;
};