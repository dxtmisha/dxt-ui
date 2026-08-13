// md5:405cb2239125aafa798ba6f215c63603 true
import { ListMenuPropsBasic } from '@dxtmisha/constructor/ListMenu';
export declare const propsValues: {
    axis: string[];
};
type PropsToken = {
    open?: boolean;
    axis?: 'x' | 'y';
    divider?: boolean;
};
export type ListMenuProps = ListMenuPropsBasic<WindowProps> & PropsToken;
export declare const defaults: object;