// md5:36f3aae0d9bb6130263f74ff89f295da true
type InputFileItemPropsToken = {
    selected?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    appearance?: 'list' | 'compact' | 'tile';
    status?: 'uploading' | 'uploaded' | 'error' | 'idle';
};
export type InputFileItemPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = EnabledProps & ImagePropsInclude<Image> & ProgressPropsInclude<Progress> & ButtonPropsInclude<Button> & SkeletonPropsInclude & TextDeleteConfirmPropsInclude & TextDeletePropsInclude & TextErrorPropsInclude & TextLoadingFilePropsInclude & TextRetryPropsInclude & TextUploadSuccessPropsInclude & {
    /** Selected state */
    selected?: boolean;
    /** File data value */
    value?: FieldFileValue;
    /** File instance */
    file?: File;
    /** Whether to show confirmation dialog before delete */
    confirmDelete?: boolean;
    /** Icon for delete button */
    iconDelete?: string;
    /** Icon for retry button */
    iconRetry?: string;
    /** Icon for success status */
    iconSuccess?: string;
    /** Icon for error status */
    iconError?: string;
    /** Icon for warning */
    iconWarning?: string;
};
export type InputFileItemProps = InputFileItemPropsBasic & InputFileItemPropsToken;
/** Default properties for input file item. @keywords defaults, input file item */
export declare const defaultsInputFileItem: {
    appearance: string;
    status: string;
    confirmDelete: boolean;
};