// md5:ce8cfbcd08715e8ef52554ad05dc88e4 true
export type InputFileDropzonePropsToken = {
    disabled?: boolean;
    readonly?: boolean;
};
/** Input file dropzone base component properties contract. @keywords input file dropzone props */
export type InputFileDropzonePropsBasic<Dropzone extends DropzonePropsBasic = DropzonePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, Icon extends IconPropsBasic = IconPropsBasic> = DropzonePropsInclude<Icon, Dropzone> & EnabledProps & FieldLabelPropsInclude<FieldLabel, FieldCounter> & FieldMessagePropsInclude<FieldMessage, FieldCounter> & SkeletonPropsInclude & TextDropzonePropsInclude & {
    /** Allowed MIME types or file extensions. */
    accept?: string;
    /** Enables multiple file selection. */
    multiple?: boolean;
    /** Maximum allowed file size in bytes. */
    maxFileSize?: number;
};
/** Input file dropzone component properties combining basic and token props. @keywords input file dropzone props */
export type InputFileDropzoneProps = InputFileDropzonePropsBasic & InputFileDropzonePropsToken;
/** Default property values for the input file dropzone component. @keywords input file dropzone defaults */
export declare const defaultsInputFileDropzone: {};