// md5:05b2cbdeae2bc11a46aab810e05022fd true
import { type TableFlexHeaderItemPropsBasic } from '@dxtmisha/constructor/TableFlexHeaderItem';

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

/** Table flex header item properties @keywords table, flex, header, item, props */
export type TableFlexHeaderItemProps = TableFlexHeaderItemPropsBasic<ChipProps, IconProps, TooltipProps> & PropsToken;

export declare const defaults: object;