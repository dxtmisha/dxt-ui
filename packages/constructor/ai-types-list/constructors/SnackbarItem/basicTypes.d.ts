// md5:20c32d1c15ded61cccc8ed54585d3962 true
import type { ConstrBind } from '@dxtmisha/functional';
/** Components required for SnackbarItem inclusion. @keywords snackbar item component include */
export type SnackbarItemComponentInclude = {
    snackbarItem?: object;
};
/** Properties for embedding a SnackbarItem with bound attributes. @keywords snackbar item props include */
export type SnackbarItemPropsInclude<SnackbarItemProps extends SnackbarItemPropsBasic = SnackbarItemPropsBasic> = {
    snackbarItemAttrs?: ConstrBind<SnackbarItemProps>;
};