// md5:da73c43c0f70fd3fc9026eb8d16eec47 true
import { ListPropsBasic } from '@dxtmisha/constructor/List';
export declare const propsValues: {
    axis: string[];
};
type PropsToken = {
    axis?: 'x' | 'y';
    divider?: boolean;
};
/** List props configuration @keywords list, props, token */
export type ListProps = ListPropsBasic<IconProps, ListItemProps, InputProps> & PropsToken;
/** Default properties configuration @keywords defaults, object */
export declare const defaults: object;