// md5:04f485fc9c896137ccaf7759295096aa true
import type { ConstrBind } from '@dxtmisha/functional';

/** InputFileDropzone component dependency configuration @keywords dropzone, include, config */
export type InputFileDropzoneComponentInclude = {
    /** InputFileDropzone component configuration */
    inputFileDropzone?: object;
};

/** Props for embedding InputFileDropzone inside another component @keywords dropzone, props, upload, include */
export type InputFileDropzonePropsInclude<Dropzone extends InputFileDropzonePropsBasic = InputFileDropzonePropsBasic> = TextDropzonePropsInclude & {
    /** Accepted file types list (MIME types, extensions) */
    accept?: string;
    /** Multiple files selection flag */
    multiple?: boolean;
    /** Maximum file size in bytes */
    maxFileSize?: number;
    /** Bound attributes passed directly to InputFileDropzone */
    inputFileDropzoneAttrs?: ConstrBind<Dropzone>;
};