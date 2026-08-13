// md5:f5a690ed0517665cbc52da582ff3537e true
import { ConstrBind } from '@dxtmisha/functional';

export type SnackbarItemComponentInclude = {
    snackbarItem?: object;
};

export type SnackbarItemPropsInclude<SnackbarItemProps extends SnackbarItemPropsBasic = SnackbarItemPropsBasic> = {
    snackbarItemAttrs?: ConstrBind<SnackbarItemProps>;
};