// md5:b2e9efc0b22c1d68818b30aefa9627e0 true
export type ActionSheetPropsToken = {};
export type ActionSheetPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = WindowPropsInclude<Window> & BarsPropsInclude<Bars> & ActionsPropsInclude<Actions> & {
    /** Whether the action sheet is visible. */
    open?: boolean;
    /** Whether to close the action sheet by swiping down or clicking the overlay. */
    touchClose?: boolean;
};
export type ActionSheetProps = ActionSheetPropsBasic & ActionSheetPropsToken;
/** Default property values for the ActionSheet component. @keywords action_sheet, defaults */
export declare const defaultsActionSheet: {
    barsBackHide: boolean;
    touchClose: boolean;
};