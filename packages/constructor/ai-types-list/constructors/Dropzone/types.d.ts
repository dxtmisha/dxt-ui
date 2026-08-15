// md5:83676cfa9d1599457b9038e1c5a32f9a true
import { ConstrClass } from '@dxtmisha/functional';

export type DropzoneComponents = IconComponentInclude;

export type DropzoneEmits = ModelEmitsFiles & {
    /** Triggered when files are dropped or selected @keywords dropzone, files, events */
    drop: [event: DropzoneEventParameters];
};

export interface DropzoneExpose {
    /** Open file picker dialog @keywords dropzone, open, dialog */
    open: () => void;
    /** Clear selected files @keywords dropzone, clear, files */
    clear: () => void;
}

export interface DropzoneSlots extends LabelSlots, DescriptionSlots {
    /** Default slot @keywords dropzone, slot, default */
    default?: (props: any) => any;
}

export type DropzoneClasses = {
    main: ConstrClass;
    input: string;
};