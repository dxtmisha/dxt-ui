import { ConstrBind } from '@dxtmisha/functional';
import { TextareaAutosizePropsBasic } from './props';
export type TextareaAutosizeComponentInclude = {
    textareaAutosize?: object;
};
export type TextareaAutosizePropsInclude<TextareaAutosize extends TextareaAutosizePropsBasic = TextareaAutosizePropsBasic> = {
    textareaAttrs?: ConstrBind<TextareaAutosize>;
    autosize?: boolean;
};
