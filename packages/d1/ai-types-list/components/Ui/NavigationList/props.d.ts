// md5:637779008134f8403fd7b494bfeca4a9 true
import { type NavigationListPropsBasic } from '@dxtmisha/constructor/NavigationList';

export declare const propsValues: {
    axis: string[];
};

type PropsToken = {
    axis?: 'x' | 'y';
    divider?: boolean;
};

/** Navigation list component properties. @keywords navigation, list, props */
export type NavigationListProps = NavigationListPropsBasic<IconProps, NavigationItemProps, InputProps> & PropsToken;

/** Default property values for navigation list. @keywords navigation, list, defaults */
export declare const defaults: object;