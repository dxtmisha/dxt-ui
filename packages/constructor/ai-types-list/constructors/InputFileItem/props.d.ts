// md5:e534ca9dee9cb85450e8b6f515ec0551 true
type InputFileItemPropsToken = {
    selected?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    appearance?: 'list' | 'compact' | 'tile';
    status?: 'uploading' | 'uploaded' | 'error' | 'idle';
};
export type InputFileItemPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic, ImageCrop extends ImageCropPropsBasic = ImageCropPropsBasic> = EnabledProps & ImagePropsInclude<Image> & ImageCropPropsInclude<ImageCrop> & ProgressPropsInclude<Progress> & ButtonPropsInclude<Button> & SkeletonPropsInclude & TextCropPropsInclude & TextDeleteConfirmPropsInclude & TextDeletePropsInclude & TextErrorPropsInclude & TextLoadingFilePropsInclude & TextRetryPropsInclude & TextUploadSuccessPropsInclude & {
    /** Selected state. */
    selected?: boolean;
    /** File data value. */
    value?: FieldFileValue;
    /** File instance. */
    file?: File;
    /** Whether to enable image cropping. */
    crop?: boolean;
    /** Whether to show confirmation dialog before delete. */
    confirmDelete?: boolean;
    /** Icon for crop button. */
    iconCrop?: string;
    /** Icon for delete button. */
    iconDelete?: string;
    /** Icon for retry button. */
    iconRetry?: string;
    /** Icon for success status. */
    iconSuccess?: string;
    /** Icon for error status. */
    iconError?: string;
    /** Icon for warning status. */
    iconWarning?: string;
};
/** Properties for the input file item component. @keywords input, file item, props */
export type InputFileItemProps = InputFileItemPropsBasic & InputFileItemPropsToken;
/** Default properties for the input file item component. @keywords defaults, file item, config */
export declare const defaultsInputFileItem: {
    appearance: string;
    status: string;
    confirmDelete: boolean;
    crop: boolean;
};