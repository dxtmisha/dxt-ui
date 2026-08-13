// md5:f01074960228e0bab2a2124e1be70d3b true
import { TableHeaderItemPropsBasic } from '@dxtmisha/constructor/TableHeaderItem';
/** Table header item property values @keywords propsValues, align, alignVertical */
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
/** Table header item properties @keywords TableHeaderItemProps */
export type TableHeaderItemProps = TableHeaderItemPropsBasic<ChipProps, IconProps, TooltipProps> & PropsToken;
/** Default properties configuration @keywords defaults, object */
export declare const defaults: object;