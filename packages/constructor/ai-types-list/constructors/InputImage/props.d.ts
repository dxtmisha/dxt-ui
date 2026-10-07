// md5:546aba7db64953646f847170c6d4ad4a true
export type { InputImageCounterType };
export type InputImagePropsToken = {
    disabled?: boolean;
    readonly?: boolean;
};
/** Basic properties for the input image component @keywords input, image, props, basic */
export type InputImagePropsBasic<Actions extends ActionsPropsBasic = ActionsPropsBasic, Dropzone extends DropzonePropsBasic = DropzonePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, Icon extends IconPropsBasic = IconPropsBasic, ImageCrop extends ImageCropPropsBasic = ImageCropPropsBasic> = Omit<ActionsPropsInclude<Actions>, 'actionsList' | 'actionsSecondary'> & DropzonePropsInclude<Icon, Dropzone> & EnabledProps & FieldInputFileProps<InputImageItem> & FieldLabelPropsInclude<FieldLabel, FieldCounter> & FieldMessagePropsInclude<FieldMessage, FieldCounter> & ImageCropPropsInclude<ImageCrop> & ModelProps<InputImageItem> & SkeletonPropsInclude & TextCancelPropsInclude & TextChangePropsInclude & {
    /** Counter display mode @keywords counter, type */
    counterType?: InputImageCounterType;
    /** Initial or current crop coordinates [top, right, bottom, left] @keywords crop, coordinates */
    crop?: CropAreaCoordinator;
    /** Maximum image dimension in pixels @keywords max, pixel, dimension */
    maxPixel?: number;
    /** Upload button icon @keywords upload, icon */
    iconUpload?: string;
    /** Close button icon @keywords close, icon */
    iconClose?: string;
};
/** Input image component properties @keywords input, image, props */
export type InputImageProps = InputImagePropsBasic & InputImagePropsToken;
/** Default properties for the input image component @keywords defaults, input, image */
export declare const defaultsInputImage: {
    accept: string;
    counterType: InputImageCounterType;
};