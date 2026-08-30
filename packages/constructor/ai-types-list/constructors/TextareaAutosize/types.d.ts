// md5:929445a97d6040e575bcbb1f3b9c356e true
import type { ConstrClass } from '@dxtmisha/functional';

export type TextareaAutosizeComponents = {};

export type TextareaAutosizeEmits = {
    input: [event: InputEvent];
};

export interface TextareaAutosizeExpose {
    /** Returns the current textarea value. @keywords textarea value, get text */
    getValue(): string;
}

export interface TextareaAutosizeSlots {}

export type TextareaAutosizeClasses = {
    main: ConstrClass;
    clone: string;
};