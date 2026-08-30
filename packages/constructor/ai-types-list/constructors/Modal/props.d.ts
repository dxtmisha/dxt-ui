// md5:9c11df12844ede0af559e7ea319b2345 true
export type ModalPropsToken = {
    imagePosition?: 'top' | 'left';
};
export type ModalPropsBasic<
    Window extends WindowPropsBasic = WindowPropsBasic,
    Bars extends BarsPropsBasic = BarsPropsBasic,
    Actions extends ActionsPropsBasic = ActionsPropsBasic,
    Image extends ImagePropsBasic = ImagePropsBasic
> = WindowPropsInclude<Window> & BarsPropsInclude<Bars> & ActionsPropsInclude<Actions> & ImagePropsInclude<Image> & ModelPropsOpen & {
    /** Whether the modal is open. @keywords modal, open, status */
    open?: boolean;
};
/** Modal component props. @keywords modal, props */
export type ModalProps = ModalPropsBasic & ModalPropsToken;
/** Default values for modal component properties. @keywords modal, defaults */
export declare const defaultsModal: {
    imagePosition: string;
    barsBackHide: boolean;
};