// md5:044dca181fc45c0468b9a0c1410ebf68 true
import { type ListMenuPropsBasic } from '@dxtmisha/constructor/ListMenu';

export declare const propsValues: {
    axis: string[];
};

type PropsToken = {
    open?: boolean;
    axis?: 'x' | 'y';
    divider?: boolean;
};

/** List menu component properties. @keywords list, menu, props */
export type ListMenuProps = ListMenuPropsBasic<WindowProps> & PropsToken;

export declare const defaults: object;