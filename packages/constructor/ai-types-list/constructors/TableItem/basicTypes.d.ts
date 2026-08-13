// md5:706a0d164fb1ca36ae39cd563acc68d5 true
import { ConstrBind } from '@dxtmisha/functional';
export type TableItemComponentInclude = {
    tableItem?: object;
};
export type TableItemPropsInclude<TableItem extends TableItemPropsBasic = TableItemPropsBasic> = SkeletonPropsInclude & {
    selected?: boolean;
    disabled?: boolean;
    stickyTop?: boolean;
    stickyLeft?: string[];
    tableItemAttrs?: ConstrBind<TableItem>;
    tableItemColumnAttrs?: Record<string, ConstrBind<TableItem>>;
};