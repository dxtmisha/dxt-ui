// md5:1be22a6f14279fe777d90f69ceaf6780 true
type DropzonePropsToken = {
    disabled?: boolean;
};
export type DropzonePropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = DescriptionProps & IconPropsInclude<Icon> & LabelProps & ModelPropsFiles & SkeletonPropsInclude & TextDropzonePropsInclude & {
    /** Disable dropzone component @keywords disabled, dropzone */
    disabled?: boolean;
    /** Accepted file types for upload @keywords accept, mime, types */
    accept?: string;
    /** Allow selecting multiple files @keywords multiple, files */
    multiple?: boolean;
    /** Selected file list @keywords files, list */
    files?: FileList;
};
export type DropzoneProps = DropzonePropsBasic & DropzonePropsToken;
/** Default value for dropzone properties @keywords defaults, dropzone */
export declare const defaultsDropzone: {};