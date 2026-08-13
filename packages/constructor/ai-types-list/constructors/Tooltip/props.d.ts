// md5:2f097f7326d8529a58fcd22b3148d909 true
export type TooltipPropsToken = {
    interactive?: boolean;
    embedded?: boolean;
};
export type TooltipPropsBasic<Arrow extends ArrowProps = ArrowProps> = LabelProps & DescriptionProps & ArrowPropsInclude<Arrow> & {
    open?: boolean;
    disabled?: boolean;
    inDom?: boolean;
    top?: boolean;
    indent?: number;
    delay?: number;
    delayHide?: number;
    embedded?: boolean;
};
export type TooltipProps = TooltipPropsBasic & TooltipPropsToken;
/** Default value for property defaultsTooltip @keywords tooltip, defaults, configuration */
export declare const defaultsTooltip: {
    interactive: boolean;
    indent: number;
    delay: number;
    delayHide: number;
};