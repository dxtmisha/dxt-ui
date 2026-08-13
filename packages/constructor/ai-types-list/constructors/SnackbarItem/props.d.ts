// md5:d8af484e5b70879342311680ef0c9595 true
import { ConstrBind } from '@dxtmisha/functional';
type SnackbarItemPropsToken = {
    success?: boolean;
    error?: boolean;
};
export type SnackbarItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = LabelProps & DescriptionProps & IconTrailingPropsInclude<Icon> & ActionsPropsInclude<Actions> & AriaRolePropsInclude & AriaLivePropsInclude & TextClosePropsInclude & AreaPropsInclude & {
    button?: string | number | ConstrBind<Button>;
    html?: string;
    component?: any;
    componentProps?: object;
    value?: string;
    closeButton?: boolean;
    iconClose?: IconValue<Icon>;
};
/** Type describing incoming properties. @keywords snackbar item props input */
export type SnackbarItemProps = SnackbarItemPropsBasic & SnackbarItemPropsToken;
/** Default value for property. @keywords defaults snackbar item configuration */
export declare const defaultsSnackbarItem: {
    area: string;
    closeButton: boolean;
};
export {};