// md5:5c62d4b2a3a4b6308934f64cf6a3d9b6 true
import type { ConstrBind, NumberOrString } from '@dxtmisha/functional';

/** Dropzone component dependency registration. @keywords dropzone, dependency */
export type DropzoneComponentInclude = {
    /** Dropzone component configuration. */
    dropzone?: object;
};

/** Props for embedding Dropzone inside another component. @keywords dropzone, props, embed */
export type DropzonePropsInclude<Icon extends IconPropsBasic = IconPropsBasic, Dropzone extends DropzonePropsBasic = DropzonePropsBasic> = {
    /** Dropzone label. */
    dropzoneLabel?: NumberOrString;
    /** Dropzone description. */
    dropzoneDescription?: string | number;
    /** Dropzone icon. */
    dropzoneIcon?: IconValue<Icon>;
    /** Bound attributes passed directly to Dropzone. */
    dropzoneAttrs?: ConstrBind<Dropzone>;
};