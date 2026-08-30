// md5:9a0d51daab26cfcfb7b9c2ce8fb99a60 true
export type ListMenuPropsToken = {
    open?: boolean;
    axis?: 'x' | 'y';
    divider?: boolean;
};
export type ListMenuPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic> = WindowPropsInclude<Window>;
/** List menu component properties. @keywords list, menu, props */
export type ListMenuProps = ListMenuPropsBasic & ListMenuPropsToken;
/** Default property values for ListMenu. @keywords list, menu, defaults */
export declare const defaultsListMenu: {
    autoClose: boolean;
};