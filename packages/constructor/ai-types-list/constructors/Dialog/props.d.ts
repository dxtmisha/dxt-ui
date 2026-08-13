// md5:6e389dd213d141856b64e2531281de31 true
import { ConstrBind } from '@dxtmisha/functional';
export type DialogPropsToken = {
    success?: boolean;
    error?: boolean;
    imagePosition?: 'top' | 'left';
};
export type DialogPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = WindowPropsInclude<Window> & BarsPropsInclude<Bars> & ActionsPropsInclude<Actions> & ImagePropsInclude<Image> & LabelProps & DescriptionProps & TextClosePropsInclude & TextOkPropsInclude & {
    open?: boolean;
    icon?: IconValue<Icon>;
    buttonOk?: string | ConstrBind<Button> | null;
    buttonClose?: string | ConstrBind<Button> | null;
    closeButton?: boolean;
    clickOkAndClose?: boolean;
    iconSuccess?: IconValue<Icon>;
    iconError?: IconValue<Icon>;
    iconAttrs?: ConstrBind<Icon>;
};
/** Dialog component properties @keywords dialog, properties, configuration */
export type DialogProps = DialogPropsBasic & DialogPropsToken;
/** Default properties configuration for dialog @keywords dialog, defaults, configuration */
export declare const defaultsDialog: {
    imagePosition: string;
    barsBackHide: boolean;
    barsHide: boolean;
    clickOkAndClose: boolean;
};