// md5:c16d17f77c894f4a7dbd4902610b70e7 true
import { ConstrBind } from '@dxtmisha/functional';

export type TextareaAutosizeComponentInclude = {
    /** TextareaAutosize component configuration @keywords textarea, autosize, component, config */
    textareaAutosize?: object;
};

export type TextareaAutosizePropsInclude<TextareaAutosize extends TextareaAutosizePropsBasic = TextareaAutosizePropsBasic> = {
    /** Bound attributes passed directly to the textarea element @keywords textarea, attrs, bind, element */
    textareaAttrs?: ConstrBind<TextareaAutosize>;
    /** Whether the textarea should automatically adjust its height @keywords textarea, autosize, height, boolean */
    autosize?: boolean;
};