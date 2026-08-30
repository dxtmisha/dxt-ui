// md5:ea2f06843378a6bd29d9dba942f37342 true
import { type ListPropsBasic } from '@dxtmisha/constructor/List';
export declare const propsValues: {
    axis: string[];
};
type PropsToken = {
    axis?: 'x' | 'y';
    divider?: boolean;
};
/** List component incoming properties. @keywords list, properties, props */
export type ListProps = ListPropsBasic<IconProps, ListItemProps, InputProps> & PropsToken;
export declare const defaults: object;