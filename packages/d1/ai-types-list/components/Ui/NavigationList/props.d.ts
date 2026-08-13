// md5:ab071b31b79194352125e6f844864359 true
import { NavigationListPropsBasic } from '@dxtmisha/constructor/NavigationList';
/** Default axis values for navigation list @keywords propsValues axis */
export declare const propsValues: {
    axis: string[];
};
type PropsToken = {
    axis?: 'x' | 'y';
    divider?: boolean;
};
export type NavigationListProps = NavigationListPropsBasic<IconProps, NavigationItemProps, InputProps> & PropsToken;
/** Default properties configuration object @keywords defaults object */
export declare const defaults: object;
export {};