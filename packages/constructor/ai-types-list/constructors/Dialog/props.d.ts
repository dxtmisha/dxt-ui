// md5:536ae61ad06dee71a35f14187cec212e true
import type { ConstrBind } from '@dxtmisha/functional';
export type DialogPropsToken = {
    success?: boolean;
    error?: boolean;
    imagePosition?: 'top' | 'left';
};
export type DialogPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = WindowPropsInclude<Window> & BarsPropsInclude<Bars> & ActionsPropsInclude<Actions> & ImagePropsInclude<Image> & LabelProps & DescriptionProps & TextClosePropsInclude & TextOkPropsInclude & {
    /** Whether the dialog is open */
    open?: boolean;
    /** Icon for the dialog */
    icon?: IconValue<Icon>;
    /** Positive action button properties */
    buttonOk?: string | ConstrBind<Button> | null;
    /** Close action button properties */
    buttonClose?: string | ConstrBind<Button> | null;
    /** Whether to show the close button */
    closeButton?: boolean;
    /** Whether to close the dialog upon clicking the OK button */
    clickOkAndClose?: boolean;
    /** Icon for the success state */
    iconSuccess?: IconValue<Icon>;
    /** Icon for the error state */
    iconError?: IconValue<Icon>;
    /** Additional attributes for the icon component */
    iconAttrs?: ConstrBind<Icon>;
};
/** Dialog component incoming properties @keywords dialog, props */
export type DialogProps = DialogPropsBasic & DialogPropsToken;
/** Default property values for the dialog component @keywords dialog, defaults */
export declare const defaultsDialog: {
    imagePosition: string;
    barsBackHide: boolean;
    barsHide: boolean;
    clickOkAndClose: boolean;
};