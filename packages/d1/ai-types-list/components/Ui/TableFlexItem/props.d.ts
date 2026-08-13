// md5:81a63f2d530f79b968eef3285ee5d313 true
import { TableFlexItemPropsBasic } from '@dxtmisha/constructor/TableFlexItem';
/** Table flex item property value options @keywords props, values, align */
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
/** Table flex item properties combining basic and token properties @keywords table, flex, item, props */
export type TableFlexItemProps = TableFlexItemPropsBasic & PropsToken;
/** Default values for table flex item properties @keywords default, values, props */
export declare const defaults: object;