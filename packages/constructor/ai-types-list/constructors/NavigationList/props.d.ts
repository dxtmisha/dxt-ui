// md5:36c72ed52417787d98b64f6dbaa5cc9a true
type NavigationListPropsToken = {
    axis?: 'x' | 'y';
    divider?: boolean;
};
export type NavigationListPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, NavigationItem extends NavigationItemPropsBasic = NavigationItemPropsBasic, Input extends InputPropsBasic = InputPropsBasic> = ListPropsBasic<Icon, NavigationItem, Input>;
export type NavigationListProps = NavigationListPropsBasic & NavigationListPropsToken;
/** Default property values for NavigationList component. @keywords navigation list defaults */
export declare const defaultsNavigationList: {
    axis: string;
    tag: string;
    keyLabel: string;
    keyValue: string;
    role: string;
    tabindex: number;
};