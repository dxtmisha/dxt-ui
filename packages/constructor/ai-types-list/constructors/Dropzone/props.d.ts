// md5:d2bd46c46f95dd5a6016c35b12254bb1 true
import type { ConstrBind } from '@dxtmisha/functional';

type DropzonePropsToken = {
  disabled?: boolean;
  readonly?: boolean;
};

export type DropzonePropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = DescriptionProps & EnabledProps & IconPropsInclude<Icon> & LabelProps & ModelPropsFiles & SkeletonPropsInclude & TextDropzonePropsInclude & {
  /** Accepted file types @keywords accept, mime */
  accept?: string;
  /** Allow selecting multiple files @keywords multiple, multi-select */
  multiple?: boolean;
  /** Additional attributes for the input element @keywords input attributes */
  inputAttrs?: ConstrBind<HTMLInputElement>;
};

/** Dropzone component properties @keywords dropzone, props */
export type DropzoneProps = DropzonePropsBasic & DropzonePropsToken;

/** Default property values for dropzone @keywords defaults, dropzone */
export declare const defaultsDropzone: {};