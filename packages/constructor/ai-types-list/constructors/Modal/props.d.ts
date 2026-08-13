// md5:763288c398fb1889e0ef4318843f0998 true
export type ModalPropsToken = {
    imagePosition?: 'top' | 'left';
};
export type ModalPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic> = WindowPropsInclude<Window> & BarsPropsInclude<Bars> & ActionsPropsInclude<Actions> & ImagePropsInclude<Image> & ModelPropsOpen & {
    open?: boolean;
};
export type ModalProps = ModalPropsBasic & ModalPropsToken;
/** Default configuration values for modal properties. @keywords modal, defaults, config */
export declare const defaultsModal: {
    imagePosition: string;
    barsBackHide: boolean;
};