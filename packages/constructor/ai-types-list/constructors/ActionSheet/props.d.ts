// md5:a7e0e93b5f314751afac5200657c6e22 true
export type ActionSheetPropsToken = {};
export type ActionSheetPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = WindowPropsInclude<Window> & BarsPropsInclude<Bars> & ActionsPropsInclude<Actions> & {
    open?: boolean;
    touchClose?: boolean;
};
export type ActionSheetProps = ActionSheetPropsBasic & ActionSheetPropsToken;
/** Default action sheet property values @keywords defaults, action_sheet */
export declare const defaultsActionSheet: {
    barsBackHide: boolean;
    touchClose: boolean;
};