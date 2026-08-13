// md5:1787f2bb9d23cf9d320e54e8f91f674e true
import { ConstrClass } from '@dxtmisha/functional';
export type DropzoneComponents = {};
export type DropzoneEmits = {
    drop: [event: DropzoneEventParameters];
};
export interface DropzoneExpose {
    /** Opens file picker dialog @keywords dropzone, open, dialog */
    open: () => void;
}
export interface DropzoneSlots {
    default?: (props: any) => any;
}
export type DropzoneClasses = {
    main: ConstrClass;
    input: string;
};