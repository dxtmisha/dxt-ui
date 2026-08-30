// md5:2c11ce9c34b44d9c7f72e7e0c3aa7400 true
import { type TableItemPropsBasic } from '@dxtmisha/constructor/TableItem';

export declare const propsValues: {
    align: string[];
    alignVertical: string[];
};

type PropsToken = {
    selected?: boolean;
    disabled?: boolean;
    align?: 'left' | 'center' | 'right';
    alignVertical?: 'top' | 'center' | 'bottom';
    dividerX?: boolean;
    dividerY?: boolean;
    labelClamp?: boolean;
    stickyTop?: boolean;
    stickyLeft?: boolean;
};

/** Table item component properties. @keywords table, item, cell, props */
export type TableItemProps = TableItemPropsBasic & PropsToken;

/** Default property values. @keywords table, item, defaults */
export declare const defaults: object;