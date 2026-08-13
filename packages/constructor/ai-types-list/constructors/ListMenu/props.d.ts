// md5:46d88c43be4c61c60e20d296a8d49614 true
export type ListMenuPropsToken = {
    open?: boolean;
    axis?: 'x' | 'y';
    divider?: boolean;
};
export type ListMenuPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic> = WindowPropsInclude<Window>;
export type ListMenuProps = ListMenuPropsBasic & ListMenuPropsToken;
/** Default list menu configuration values. @keywords defaults, list, menu */
export declare const defaultsListMenu: {
    autoClose: boolean;
};