// md5:705137dad6576f9a60e0362078845c0a true
import type { ConstrBind } from '@dxtmisha/functional';

type SnackbarItemPropsToken = {
  success?: boolean;
  error?: boolean;
};

export type SnackbarItemPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Button extends ButtonPropsBasic = ButtonPropsBasic,
  Actions extends ActionsPropsBasic = ActionsPropsBasic
> = LabelProps & DescriptionProps & IconTrailingPropsInclude<Icon> & ActionsPropsInclude<Actions> & AriaRolePropsInclude & AriaLivePropsInclude & TextClosePropsInclude & AreaPropsInclude & {
  button?: string | number | ConstrBind<Button>;
  html?: string;
  component?: any;
  componentProps?: object;
  value?: string;
  closeButton?: boolean;
  iconClose?: IconValue<Icon>;
};

export type SnackbarItemProps = SnackbarItemPropsBasic & SnackbarItemPropsToken;

/** Default values for snackbar item properties @keywords snackbar, defaults */
export declare const defaultsSnackbarItem: {
  area: string;
  closeButton: boolean;
};