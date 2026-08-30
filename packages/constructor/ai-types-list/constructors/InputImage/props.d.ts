// md5:2f350add89d26362777fec7c281b49f0 true
export type { InputImageCounterType };
export type InputImagePropsToken = {
    disabled?: boolean;
    readonly?: boolean;
};
/** Basic properties for the image input component. @keywords image, input, props, upload, crop */
export type InputImagePropsBasic<Actions extends ActionsPropsBasic = ActionsPropsBasic, Dropzone extends DropzonePropsBasic = DropzonePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, Icon extends IconPropsBasic = IconPropsBasic, ImageCrop extends ImageCropPropsBasic = ImageCropPropsBasic> = Omit<ActionsPropsInclude<Actions>, 'actionsList' | 'actionsSecondary'> & DropzonePropsInclude<Icon, Dropzone> & EnabledProps & FieldInputFileProps<InputImageItem> & FieldLabelPropsInclude<FieldLabel, FieldCounter> & FieldMessagePropsInclude<FieldMessage, FieldCounter> & ImageCropPropsInclude<ImageCrop> & ModelProps<InputImageItem> & SkeletonPropsInclude & TextCancelPropsInclude & TextChangePropsInclude & {
    /** Counter display mode. */
    counterType?: InputImageCounterType;
    /** Initial or current crop coordinates [top, right, bottom, left]. */
    crop?: CropAreaCoordinator;
    /** Maximum file size in bytes. */
    maxFileSize?: number;
    /** Maximum image dimension in pixels. */
    maxPixel?: number;
    /** Upload button icon name. */
    iconUpload?: string;
    /** Close button icon name. */
    iconClose?: string;
};
/** Input image component properties. @keywords image, input, props */
export type InputImageProps = InputImagePropsBasic & InputImagePropsToken;
/** Default property values for the image input component. @keywords defaults, image, input */
export declare const defaultsInputImage: {
    accept: string;
    counterType: InputImageCounterType;
};