// md5:d2c0423b8a3a8a5e74215c0d5409b838 true
import type { ConstrBind } from '@dxtmisha/functional';

/** Configuration for including the TextareaAutosize component. @keywords textarea, autosize, component, include */
export type TextareaAutosizeComponentInclude = {
    /** TextareaAutosize component configuration. */
    textareaAutosize?: object;
};

/** Properties for integrating TextareaAutosize functionality. @keywords textarea, autosize, props, include */
export type TextareaAutosizePropsInclude<TextareaAutosize extends TextareaAutosizePropsBasic = TextareaAutosizePropsBasic> = {
    /** Bound attributes passed directly to the textarea element. */
    textareaAttrs?: ConstrBind<TextareaAutosize>;
    /** Whether the textarea should automatically adjust its height. */
    autosize?: boolean;
};