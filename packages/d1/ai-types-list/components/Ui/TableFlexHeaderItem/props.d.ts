// md5:82a53a8aebeef404499887b7c57074e2 true
import { TableFlexHeaderItemPropsBasic } from '@dxtmisha/constructor/TableFlexHeaderItem';
/** Predefined configuration values for alignment properties. @keywords propsValues align alignVertical */
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
/** Table flex header item properties. @keywords TableFlexHeaderItemProps properties */
export type TableFlexHeaderItemProps = TableFlexHeaderItemPropsBasic<ChipProps, IconProps, TooltipProps> & PropsToken;
/** Default configuration object. @keywords defaults object */
export declare const defaults: object;