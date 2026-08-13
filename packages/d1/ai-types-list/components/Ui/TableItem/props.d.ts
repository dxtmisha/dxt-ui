// md5:93b479519a654e6e12c077ea63793a63 true
import { TableItemPropsBasic } from '@dxtmisha/constructor/TableItem';
/** Table item alignment and styling configuration values @keywords propsValues, table, item, alignment */
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
/** Properties for the table item component @keywords TableItemProps, props, table */
export type TableItemProps = TableItemPropsBasic & PropsToken;
/** Default values for table item properties @keywords defaults, tableItem, props */
export declare const defaults: object;