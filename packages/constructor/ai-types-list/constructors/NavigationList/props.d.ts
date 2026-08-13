// md5:82ff59e31ea7262e5ac63a86212f5f6f true
type NavigationListPropsToken = {
    axis?: 'x' | 'y';
    divider?: boolean;
};
export type NavigationListPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, NavigationItem extends NavigationItemPropsBasic = NavigationItemPropsBasic, Input extends InputPropsBasic = InputPropsBasic> = ListPropsBasic<Icon, NavigationItem, Input>;
export type NavigationListProps = NavigationListPropsBasic & NavigationListPropsToken;
/** @keywords defaultsNavigationList NavigationList defaults configuration */
export declare const defaultsNavigationList: {
    axis: string;
    tag: string;
    keyLabel: string;
    keyValue: string;
    role: string;
    tabindex: number;
};