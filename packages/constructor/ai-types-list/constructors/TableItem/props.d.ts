// md5:ad21679c52818eb2215cec52e91ef079 true
import { LabelProps, DescriptionProps, SkeletonPropsInclude } from '@storefront-ui/shared';

type TableItemPropsToken = {
    disabled?: boolean;
    selected?: boolean;
    align?: 'left' | 'center' | 'right';
    alignVertical?: 'top' | 'center' | 'bottom';
    dividerX?: boolean;
    dividerY?: boolean;
    labelClamp?: boolean;
    stickyTop?: boolean;
    stickyLeft?: boolean;
};

export type TableItemPropsBasic = LabelProps & DescriptionProps & SkeletonPropsInclude & {
    value?: string;
    tag?: string;
    colspan?: string | number;
    rowspan?: string | number;
    keyItem?: string;
    index?: string | number;
};

export type TableItemProps = TableItemPropsBasic & TableItemPropsToken;

/** Default values for TableItem component properties @keywords table item defaults */
export declare const defaultsTableItem: {
    align: string;
    alignVertical: string;
    tag: string;
};