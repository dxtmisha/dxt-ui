// md5:43dd219fbbc7dc7b8ff1e184b7a8d3eb true
import type { ConstrClass } from '@dxtmisha/functional';

export type DropzoneComponents = IconComponentInclude;
export type DropzoneEmits = FieldValueEmits<FileList | undefined> & ModelEmitsFiles;

export interface DropzoneExpose {
    /** Opens the file picker dialog. @keywords open, file picker, upload */
    open: () => void;
    /** Clears the selected files. @keywords clear, reset, files */
    clear: () => void;
}

export interface DropzoneSlots extends LabelSlots, DescriptionSlots {
    /** Default content slot. @keywords default, slot, template */
    default?: (props: any) => any;
}

export type DropzoneClasses = {
    main: ConstrClass;
    input: string;
};