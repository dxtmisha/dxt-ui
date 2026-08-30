// md5:cac2ff8a7e59990c46d2c1e5c4cf92f0 true
import { type TableHeaderItemPropsBasic } from '@dxtmisha/constructor/TableHeaderItem';

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
/** Table header item component properties. @keywords table, header, item, props */
export type TableHeaderItemProps = TableHeaderItemPropsBasic<ChipProps, IconProps, TooltipProps> & PropsToken;
/** Default property values. */
export declare const defaults: object;